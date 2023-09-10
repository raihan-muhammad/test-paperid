import Header from '@/components/header/header'
import HowTo from '@/components/how-to/how-to'
import Checkout from '@/components/checkout/checkout'
import Footer from '@/components/footer/footer'
import Benefit from '@/components/benefit/benefit'

export default function Home() {
  return (
    <main>
      <Header/>
      <HowTo/>
      <Checkout/>
      <Benefit/>
      <Footer/>
    </main>
  )
}
