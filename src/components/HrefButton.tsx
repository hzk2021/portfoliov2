import {Button, ButtonProps, Link} from "@chakra-ui/react";

interface buttonProps extends ButtonProps{
  text: string,
  link: string
}

function HrefButton({text, link, ...props} : buttonProps) {
  return (
    <span style={{display: "block", marginTop: 10}}>
        <Button w={'100%'} as={Link} href={link} {...props}>{text}</Button>
    </span>
)
}

export default HrefButton