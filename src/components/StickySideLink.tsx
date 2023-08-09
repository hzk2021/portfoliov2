import { Link } from "@chakra-ui/react"
import { HiOutlineMail } from "react-icons/hi"

function StickySideLink() {
  return (
    <Link position="fixed" top={2} right={15} cursor="pointer"
        _after={{
        content: '""',
        position: "absolute",
        background: "#f80047",
        top: "-300%",
        right: "-390%",
        width: "10rem",
        height: "10rem",
        zIndex: -1,
        transform: "rotate(45deg)",
        }}
        _hover={{
        color: "inherit"
        }}
        href="mailto:hezhenkai1999@gmail.com"
        >
        <HiOutlineMail size={30}/>
    </Link>
  )
}

export default StickySideLink