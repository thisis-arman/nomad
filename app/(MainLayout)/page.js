import Image from 'next/image'
import Banner from './Components/HomeComponents/Banner'
import Navbar from './Components/HomeComponents/Navbar'
import Products from './Components/Products'

export default function Home() {
  return (
    <main className="">
      {/* <Navbar/> */}
      <Banner/>
      <Products/>
    </main>
  )
}
