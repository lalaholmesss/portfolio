import projects from '../data/projects';
import cn from 'classnames';

export default function Projects() {
    return (
        <div className="pt-40 font-nunito px-5">
            <h1 className="text-white text-4xl font-bold mb-4">Projects</h1>
            <span className="text-white text-lg mb-10">that I've worked - in different "mediums"</span>
            <div className="mt-20">
                <p className="max-w-sm text-white text-base text-right ml-auto">
                    In 2023 I got into 3d modeling for a couple of months. I used to model in Blender - at first following certain tutorials on Youtube, then making my own models. Here are my finished projects
                </p>
                <div className="grid grid-cols-3 gap-x-4 gap-y-8 justify-between mt-8">
                    {projects.map((project) => (
                        <div key={project.id}>
                            <img 
                                src={project.img} 
                                alt={project.name} 
                                className="w-200 pb-2"
                            />
                            <a 
                                className={cn(
                                    'text-white-50',
                                    'text-base', 
                                    project.highlight,
                                    'transition', 
                                    'duration-300', 
                                    'hover:text-white'
                                )} 
                                href={project.link} 
                                rel="noopener noreferrer" 
                                target="_blank"
                            >
                                {project.name}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}