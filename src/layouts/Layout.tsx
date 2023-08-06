import Sidebar from "../components/Sidebar/Sidebar"
import { Box, Flex } from "@chakra-ui/react";
import ParticlesBackground from "../components/ParticlesBackground";


function Layout({children} : {children : string | JSX.Element | JSX.Element[]}) {
  return (
    <>
      <ParticlesBackground/>
      <Flex minWidth={'100vw'} fontFamily="Popping, var(--chakra-fonts-body)">
        <Sidebar />

        <Box flexGrow={1} px={10}>
          <Flex minHeight={'100vh'} align="center">
            {children}

          </Flex>
        </Box>
      </Flex>
    </>

  )
}

export default Layout