import Sidebar from "../components/Sidebar/Sidebar"
import { Box, Flex } from "@chakra-ui/react";
import ParticlesBackground from "../components/ParticlesBackground";
import { AnimatePresence } from "framer-motion";
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/900.css';
import '@fontsource/la-belle-aurore';


function Layout({children} : {children : string | JSX.Element | JSX.Element[]}) {
  return (
    <>
      <ParticlesBackground/>

      <AnimatePresence mode="wait">
        <Flex minWidth={'100vw'} fontFamily="Poppins, var(--chakra-fonts-body)">
          <Sidebar />

          <Box flexGrow={1} px={10}>
            <Flex minHeight={'100vh'} align="center">
              {children}

            </Flex>
          </Box>
        </Flex>
      </AnimatePresence>
    </>

  )
}

export default Layout