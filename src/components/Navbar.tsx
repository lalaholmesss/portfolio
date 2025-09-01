import { Link, useLocation } from "react-router-dom"

export default function Navbar() {
    return(
        <nav className='bg-transparent font-nunito py-5 px-5'>
            <ul className='space-x-20 text-white-50 text-right flex justify-end'>

                <li className='cursor-pointer hover:text-white transition duration-300'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='cursor-pointer hover:text-white transition duration-300'>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li className='cursor-pointer hover:text-white transition duration-300'>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    )
}