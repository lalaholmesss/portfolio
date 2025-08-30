import projects from '../data/projects';
import cn from 'classnames';

export default function Projects() {
    return(
        <div className=' pt-40 font-nunito px-5'>
            <h1 className='text-white text-4xl font-bold mb-10'>Some of my projects</h1>
            <div className='grid grid-cols-3 gap-x-4 gap-y-8'>
            {
                projects.map((projects) => 

                (<div key={projects.id}>
                    <img src={projects.img} alt={projects.name} className='pb-2'/>
                    <a className={cn('text-white-50', 'text-base', `${projects.highlight}`,  'transition', 'duration-300', 'hover:text-white')} href={projects.link} rel='noopener noreferrer' target='_blank '>
                        {projects.name}
                    </a>
                </div>
                ))
            }
            
        </div>
        </div>
        
    )
}