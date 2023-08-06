import Sidebar from "../components/Sidebar/Sidebar"
import { Box, Flex } from "@chakra-ui/react";

function Layout({children} : {children : string | JSX.Element | JSX.Element[]}) {
  return (
    <Flex minWidth={'100vw'}>
        <Sidebar />

        <Box flexGrow={1} px={10} bg='#252627'>
          <Flex minHeight={'100vh'} align="center">
            {children}

          </Flex>
        </Box>
    </Flex>

  )
}

export default Layout