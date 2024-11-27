import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { nextpage, prevpage } from '../store/pageSlice';
function Header() {
    const page = 1;
    const pagenber = useSelector((state)=>state.page.page)
    const dispatch = useDispatch()
    useEffect(()=>{
    }, [nextpage , prevpage])
  return (
    <>
       <div className=' py-4 px-4 bg-black text-white'>
        <div className=' flex justify-between'>
            {/* <h1>Trailer hub - All rights reserved &copy; {new Date().getFullYear()}</h1> */}
            <div className=' flex justify-between'>
                <button className=' bg-orange-500 py-1 px-3 text-black mr-3' onClick={()=>{dispatch(prevpage())}}>Previous</button>
                <h1 className=' font-bold text-white text-3xl mr-3'>Page : {pagenber > 0 ? pagenber : 0}</h1>
                <button className=' bg-orange-500 py-1 px-3 text-black mr-3' onClick={()=>{dispatch(nextpage())}}>Next</button>
            </div>
        </div>
       </div>
    </>
  )
}

export default Header