import path from 'path'
import fs from 'fs'

import { i18nContext, i18nProvider } from './context'

export const getLocale = async (locale, name) => {
  const file = path.join(process.cwd(), `public/locales/${locale}/${name}`)
  const content = fs.readFileSync(file, 'utf8')

  return JSON.parse(content)
}

export {
  i18nContext,
  i18nProvider
}
