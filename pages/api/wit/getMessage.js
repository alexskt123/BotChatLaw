//GET https://api.wit.ai/

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


const axios = require('axios').default

async function getMessage (option) {

  const response = await axios.get('https://api.wit.ai/message', {
    params: {
      q: option.q
    },
    headers: {'Authorization': `Bearer ${process.env.WIT_AUTHORIZATION}`}
  })
  
  return response.data
}


export default  async (req, res) => {
  const {query:q} = req.query
  const option = {q}

  const witResponse = await getMessage (option)

  res.statusCode = 200
  res.json(witResponse)
}
