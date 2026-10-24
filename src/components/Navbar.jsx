import { useState } from 'react'
import { TiShoppingCart } from "react-icons/ti";
import { RiMenuFold4Fill } from "react-icons/ri";
import MobileNav from './MobileNav'
import NavContent from './NavContent'

function Navbar() {
  const [mobileView, setMobileView] = useState(false);
  return (
    <>
      <div
        className='bg-black h-screen w-screen'>
        <nav
          className="flex p-4 bg-white font-medium justify-between items-center">
          <div
            className="text-xl text-blue-500 font-medium">
            <h1>
              <span
                className='text-2xl italic font-bold'>N</span>
              avB</h1>
          </div>

          <div className="flex gap-10 max-[720px]:hidden ">
            <NavContent title="Home" />
            <NavContent title="About" />
            <NavContent title="Contact" />
            <NavContent title="Help" />
          </div>

          <div
            className="flex gap-5">
            <input
              placeholder='Enter the product name' className='rounded-xl hover:border-2 border-black/50 max-[720px]:hidden ' />

            <div
              className='text-3xl flex gap-5'>

              <RiMenuFold4Fill
                className="min-[720px]:hidden"
                onClick={() => setMobileView(!mobileView)} />

              <TiShoppingCart />

            </div>
          </div>
        </nav>
        <MobileNav
          mobileView={mobileView} setMobileView={setMobileView} />
      </div>
    </>
  )
}

export default Navbar