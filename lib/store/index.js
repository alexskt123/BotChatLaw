import { createContext, useState } from 'react'

export const Store = createContext()

const StoreContext = ({ children }) => {

  const [store, setStore] = useState(null)

  const updateStore = (newStore) => {
    const state = {
      ...store,
      ...newStore
    }

    setStore(state)
  }

  return (
    <Store.Provider value={{
      store,
      updateStore
    }}>
      {{ ...children }}
    </Store.Provider>
  )
}

export default StoreContext
