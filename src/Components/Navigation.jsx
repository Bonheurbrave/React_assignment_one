import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MdDarkMode , MdLightMode } from "react-icons/md";
import { Theme } from '../App';

function Navigation() {
    const [darktheme ,setdarktheme] = useContext(Theme)
    const handleToggleTheme = ()=>{
        setdarktheme(!darktheme)
    }
    return (
        <>
        
            <div className=' w-full py-10 text-red-500 px-24' style={darktheme?{background:"grey" , color:"black"}:{background:"black" ,}}>
                <div className=' flex justify-between'>
                    <div>
                        <Link to="/">
                        <h1 className=' font-bold text-2xl'>Trailer Hub</h1>
                        </Link>
                    </div>
                    <div className=' text-white py-1 w-1/3 border-2 border-white rounded-full shadow-md shadow-slate-500 px-4'>
                        <input type="search" placeholder='Search movie ...' className=' w-full outline-none py-2 bg-transparent'/>
                    </div>
                    <div className=' flex justify-between'>
                        <h1 className=' ml-5'>Support</h1>
                        <h1 className=' ml-5 mr-5'>FAQ</h1>
                        {
                            darktheme?
                            <MdDarkMode size={25} onClick={handleToggleTheme}/>
                            :
                            <MdLightMode size={25} onClick={handleToggleTheme}/>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigation