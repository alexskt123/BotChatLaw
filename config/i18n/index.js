const NextI18Next = require('next-i18next').default
const path = require('path')

const { webConfig } = require('../settings')

const localeConfig = {
  otherLanguages: [...webConfig.languages].splice(1, 1),
  localeSubpaths: [...webConfig.languages].reduce((acc, cur) => acc[cur] ? acc : Object.assign(acc, { [cur]: cur }), {}),
  localePath: path.resolve('./public/locales'),
  defaultLanguage: [...webConfig.languages][0]
}

module.exports = new NextI18Next(localeConfig)
