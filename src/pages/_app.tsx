import { globalStyles } from '@/styles/global'
import { Container, Header } from '@/styles/pages/app'
import { AppProps } from 'next/app'
import Image from 'next/image'

import logoImg from '../assets/Logo.svg'
import shopImg from '../assets/shopIcon.svg'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />

        <div>
          <Image src={shopImg} alt="" />
        </div>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
