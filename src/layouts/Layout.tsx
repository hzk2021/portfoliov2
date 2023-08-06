import Sidebar from "../components/Sidebar/Sidebar"
import { Flex } from '@chakra-ui/react'

function Layout({children} : {children : string | JSX.Element | JSX.Element[]}) {
  return (
    <Flex>
        <Sidebar />
        {children}
    </Flex>

  )
}

export default Layout