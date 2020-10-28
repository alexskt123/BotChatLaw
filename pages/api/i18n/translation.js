import { getLocale } from '../../../lib/i18n'

export default async (req, res) => {
  const { locale, name } = req.query

  const translation = await getLocale(locale, name)

  res.statusCode = 200
  res.json(translation)
}
