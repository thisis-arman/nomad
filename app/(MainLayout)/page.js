import Image from 'next/image'
import Banner from './Components/HomeComponents/Banner'
import Navbar from './Components/HomeComponents/Navbar'
import Products from './Components/Products'
import Events from './Components/Events'
import Newsletter from './Components/HomeComponents/Newsletter'

export default function Home() {
  return (
    <main className="">
      {/* <Navbar/> */}
      <Banner/>
      <Products/>
      <Events/>
      <Newsletter/>
    </main>
  )
}
