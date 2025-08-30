export default function Footer() {
    return(
        <div className='px-5 font-nunito flex gap-2 text-white pt-40 mx-auto pb-10 justify-between items-start text-base text-right'>
            <div>
                <span>Azerbaijan, Baku</span>
            </div>
            <div className='flex flex-col gap-2'>
                <span>+994 some number
                </span>
                <span>lalaalimova000@gmail.com</span>
            </div>
            <div className='flex flex-col text-right gap-2'>
                <a href="https://www.linkedin.com/in/lala-alimova-429774276/" target='_blank' rel='noopener noreferrer'  className='hover:text-pink-300 transition duration-300'>linkedin</a>
                <a href="" target='_blank' rel='noopener noreferrer' className='hover:text-pink-300 transition duration-300' >instagram</a>
            </div>
        </div>
    )
}