import { createContext, useReducer } from 'react'

const initialState = {}
const Store = createContext(initialState)

const { Provider } = Store

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    console.log({ action })

    const { type, payload } = action

    switch (type) {
      case 'STEP':
        return {
          ...state,
          ...payload
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
  Store,
  StateProvider
}
