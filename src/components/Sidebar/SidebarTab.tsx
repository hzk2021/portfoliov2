import { Tooltip } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { Link } from '@chakra-ui/react'
import { Link as ReactRouterLink } from 'react-router-dom'

function SidebarTab({content, active, text, onClick = () => {}, href} : 
    {
        content : string | JSX.Element | ReactNode,
        active : boolean,
        text : string,
        onClick ?: () => void,
        href ?: string
    }) {
  return (
    <Tooltip label={`${text}`} placement='auto'>
        <Link 
            to={href}
            as={ReactRouterLink}
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
        >{content}</Link>
    </Tooltip>
  )
}

export default SidebarTab