import { Box, Image } from '@chakra-ui/react'

type screenProps = {
    imgSrc : string,
    maxWidths: string[]
}

function MobileScreen({imgSrc, maxWidths} : screenProps) {
  return (
    <Box className='mobileSize' border="2px solid #08fdd8" borderRadius="10px" minW={['10px']}  h="100%" position="relative" maxW={maxWidths}
         _before={{
            content: '""',
            position: 'absolute',
            height: "4px",
            width: "41%",
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#08fdd8',
            display: "block",
            borderRadius: "0px 0px 8px 8px",
         }}>
        <Image src={imgSrc} alt="project mobile image" borderRadius='8px'/>

    </Box>
  )
}

export default MobileScreen