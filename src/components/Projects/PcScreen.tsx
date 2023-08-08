import { Box, Image } from '@chakra-ui/react'

type screenProps = {
    imgSrc : string,
    maxWidths: string[]
}

function PcScreen({imgSrc, maxWidths} : screenProps) {
  return (
    <Box className='pcSize' border="2px solid #08fdd8" borderRadius="10px" minW={['100px']}  h="100%" position="relative" maxW={maxWidths}
         _before={{
            content: '""',
            position: 'absolute',
            height: "8px",
            width: "100%",
            background: '#08fdd8',
            display: "block",
            borderRadius: "5px 5px 0px 0px",
         }}>
        <Image src={imgSrc} alt="project pc image" borderRadius='8px'/>

    </Box>
  )
}

export default PcScreen