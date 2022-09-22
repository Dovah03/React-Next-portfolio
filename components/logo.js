import Link from 'next/link'
import Image from 'next/image'
import { Text,useColorModeValue} from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    img {
        transition: 800ms ease;
      }

    &:hover img {
        transform:rotate(360deg);
    }
`
const Logo = () => {
    const LogoImg = `/React-Next-portfolio/images/Logo${useColorModeValue('','-dark')}.png`
    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={LogoImg} width={20} height={20} alt="logo"/>
                <Text margin={2}
                color={useColorModeValue('grey.800','whiteAlpha.900')}
                fontFamily='M PLUS Rounded 1c", sans-serif'
                fontWeight= "bold"
                ml={3}
                >
                   Mehdi Aguendich
                </Text>
                </LogoBox>
            </a>
        </Link>
    )
}

export default Logo