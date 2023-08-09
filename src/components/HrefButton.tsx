import {Button, ButtonProps, Link} from "@chakra-ui/react";

interface buttonProps extends ButtonProps{
  text: string,
  link: string
}

function goToUrl(url : string) {
  window.open(url, '_blank')?.focus();
}

function HrefButton({text, link, ...props} : buttonProps) {
  return (
    <span style={{display: "block", marginTop: 10}} >
        <Button w={'100%'} as={Link} onClick={() => goToUrl(link)} {...props} bg="#08fdd8" color="black" borderRadius={0} border="2px solid #09a18a" boxShadow='inner' _hover={{
          background: "f80047",
          textDecoration: 'none',
          color: "black"
        }}>{text}</Button>
    </span>
)
}

export default HrefButton