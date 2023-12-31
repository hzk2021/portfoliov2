
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import TabContext from './contexts/TabContext'
import { useState } from 'react'
import Tabs from './enums/Tabs'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import './app.css'


const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: ""
      }
    })
  }
})

function App() {

  const [tab, setTab] = useState<Tabs>(Tabs.Home);

  return (
    <ChakraProvider theme={theme}>
      <TabContext.Provider value={{tab, setTab}}>
        <HashRouter>
            <Routes>
              <Route path='/' element={<Layout><Home /></Layout>} />
              <Route path='/about' element={<Layout><About /></Layout>} />
              <Route path='/skills' element={<Layout><Skills /></Layout>} />
              <Route path='/projects' element={<Layout><Projects /></Layout>} />
              <Route path='/contact' element={<Layout><Home /></Layout>} />
              <Route path='*' element={<h1>Not found!</h1>} />
            </Routes>
        </HashRouter>
      </TabContext.Provider>
    </ChakraProvider>
  )
}

export default App
