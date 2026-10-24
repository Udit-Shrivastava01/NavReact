import NavContent from "./NavContent";

function MobileNav({ mobileView, setMobileView }) {

  return (
    <>
      {mobileView
        &&
        <div
          className='absolute bg-black/50 h-screen w-screen m-0 top-0 left-0 right-0 bottom-0' onClick={() => setMobileView(false)}>

          <div
            className={`bg-white absolute text-black min-[720px]:hidden flex flex-col h-screen w-[15rem] max-[340px]:w-[12rem] top-0 left-0 justify-between pb-5 pt-5 ${mobileView ? 'translate-x-0 ease-in' : '-translate-x-100'}`} onClick={(e) => e.stopPropagation()}>

            <div
              className="mb-7 text-xl font-bold text-white flex justify-center" onClick={() => setMobileView(false)}>

              <div
                className="text-xl text-blue-500 font-medium cursor-pointer">
                <h1>
                  <span
                    className='text-2xl italic font-bold'>N</span>
                  avB</h1>
              </div>

            </div>
            <div className="flex flex-1 flex-col gap-20">
              <NavContent title="Home" />
              <NavContent title="About" />
              <NavContent title="Contact" />
              <NavContent title="Help" />
            </div>
          </div>
        </div>}
    </>
  )
}

export default MobileNav;