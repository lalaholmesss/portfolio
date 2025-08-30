export default function Navbar() {
    return(
        <div className='bg-transparent font-nunito py-5 px-5'>
            <ul className='space-x-20 text-white-50 text-right flex justify-end'>
                <li className='cursor-pointer hover:text-white transition duration-300'>Home</li>
                <li className='cursor-pointer hover:text-white transition duration-300'>Projects</li>
                <li className='cursor-pointer hover:text-white transition duration-300'>About</li>
            </ul>
        </div>
    )
}