
import Header from "@/components/Header"
import Main from "@/components/Main"
import Footer from "@/components/Footer"

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Google Clone',
  description: 'Google search',
}

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}
