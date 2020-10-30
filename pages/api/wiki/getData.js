//GET https://zh.wikipedia.org/

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


import stripHtml from 'string-strip-html'
import containsChinese from 'contains-chinese'
import { tify } from 'chinese-conv'
//import OpenCC from 'opencc'

const axios = require('axios').default

async function getMessage(searchTxt) {

  const getLang = (searchTxt) => {
    return containsChinese(searchTxt) ? 'zh' : 'en'
  }

  const response = await axios.get(`https://${getLang(searchTxt)}.wikipedia.org/w/api.php`, {
    params: {
      action: 'query',
      prop: 'extracts',
      format: 'json',
      exintro: true,
      explaintext: null,
      utf8: null,
      redirects: 1,
      titles: searchTxt
    }
  })

  return response.data
}


async function getLinks(searchTxt) {

  const getLang = (searchTxt) => {
    return containsChinese(searchTxt) ? 'zh' : 'en'
  }

  const response = await axios.get(`https://${getLang(searchTxt)}.wikipedia.org/w/api.php`, {
    params: {
      action: 'query',
      prop: 'links',
      format: 'json',
      utf8: null,
      exintro: true,
      titles: searchTxt
    }
  })

  return response.data
}

export default async (req, res) => {
  const { query } = req.query

  const wikiResponse = await getMessage(query)
  const wikiPages = wikiResponse.query.pages
  const wikiFirstKey = Object.keys(wikiPages).find(x => x)
  let wikiFirstData
  let title
  let extract
  let list = []

  if (wikiFirstKey !== '-1') {
    // get Extract from wiki response
    wikiFirstData = wikiPages[wikiFirstKey]
    // Strip all html tags & change Simplified chinese to traditional chinese
    extract = tify(stripHtml(wikiFirstData.extract).result)
    title = tify(wikiFirstData.title)

    const wikiLinksResponse = await getLinks(title)
    const wikiLinksPage = wikiLinksResponse.query.pages[wikiFirstKey] || { links: [] }
    const wikiLinks = wikiLinksPage.links
    list = wikiLinks.map(item => {
      return { label: tify(item.title), value: tify(item.title), trigger: 'otherresponse' }
    })
  }

  const data = {
    title,
    extract,
    list
  }

  res.statusCode = 200
  res.json(data)
}
