import { Tab, Tooltip } from '@chakra-ui/react'
import { ReactNode } from 'react'

function SidebarTab({content, active, text, onClick = () => {}} : 
    {
        content : string | JSX.Element | ReactNode,
        active : boolean,
        text : string,
        onClick ?: () => void
    }) {
  return (
    <Tooltip label={`${text}`} placement='auto'>
        <Tab
            style={{
                border: 0,
                outline: 0,
        }}
            color={active ? '#f80047' : '#4d4d4e'}
            _active={{
                border: 0,
                outline: 0,
        }}
            _hover={{
                color: '#f80047'
            }}
            onClick={onClick}
        >{content}</Tab>
    </Tooltip>
  )
}

export default SidebarTab