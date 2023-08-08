import { Box, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react';
import MobileScreen from './MobileScreen';
import PcScreen from './PcScreen';
import ProjectDescription from './ProjectDescription';

type modalProps = {
  isOpen : boolean,
  onClose : () => void,
  projectName : string,
  pcImgSrc ?: string,
  mobileImgSrc ?: string
  techIcons : JSX.Element[],
  description: string,
  liveLink ?: string,
  sourceLink ?: string
}

function ProjectModal({isOpen, onClose, projectName, pcImgSrc, mobileImgSrc, techIcons, description, liveLink, sourceLink} : modalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="4xl">
      <ModalOverlay bg="blackAlpha.300" backdropFilter='blur(10px)'/>
      <ModalContent bg="#252627" color="white" borderRadius='none'>
        <ModalHeader textAlign="center" fontSize={["2rem", "2.5rem", "3rem"]} fontWeight="bold">{projectName}</ModalHeader>
        <ModalCloseButton/>

        {pcImgSrc && !mobileImgSrc &&
          // 1 image
          <ModalBody textAlign="center" as={Flex} alignItems="center" columnGap={10} direction='column' rowGap={5}>
    
            <Box className="projectImages" as={Flex} gap={10}>
              <PcScreen maxWidths={["100%"]} imgSrc={pcImgSrc}/>
            </Box>
  
            <Box className='projectDescription' as={Flex} direction='column' gap={5}>
              <ProjectDescription description={description} liveLink={liveLink} sourceLink={sourceLink} icons={techIcons}/>
            </Box>
          </ModalBody>
        }

        {pcImgSrc && mobileImgSrc &&
          // 2 image
          <ModalBody textAlign="center" as={Flex} alignItems="center" direction='column' columnGap={10} rowGap={5}>
      
            <Box className="projectImages" as={Flex} alignItems="center" gap={10} direction={['column', 'row']}>
              <MobileScreen maxWidths={["25%"]} imgSrc={mobileImgSrc}/>
              <PcScreen maxWidths={["75%"]} imgSrc={pcImgSrc}/>
            </Box>

            <Box className='projectDescription' as={Flex} direction='column' gap={5}>
              <ProjectDescription description={description} liveLink={liveLink} sourceLink={sourceLink} icons={techIcons}/>
            </Box>
          </ModalBody>

        }
      

      </ModalContent>
    </Modal>
  )
}

export default ProjectModal