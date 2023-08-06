
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import TabContext from './contexts/TabContext'
import { useState } from 'react'
import Tabs from './enums/Tabs'

function App() {

  const [tab, setTab] = useState<Tabs>(Tabs.Home);

  return (
    <ChakraProvider>
      <TabContext.Provider value={{tab, setTab}}>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout><Home /></Layout>} />
            </Routes>
        </BrowserRouter>

      </TabContext.Provider>
    </ChakraProvider>
  )
}

export default App
