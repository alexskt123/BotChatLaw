import { createContext, useReducer } from 'react'

const initialState = { locale: 'zh' }
const i18nContext = createContext(initialState)

const { Provider } = i18nContext

const i18nProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    console.log({ action })

    const { type, payload } = action

    switch (type) {
    case 'SET_LANG':
      return {
        ...state,
        locale: payload.locale
      }

    default:
      break
    }
  }, initialState)

  return (
    <Provider value={{ state, dispatch }}>
      {children}
    </Provider>
  )
}

export {
  i18nContext,
  i18nProvider
}
