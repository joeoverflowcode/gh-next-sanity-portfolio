import {getProjects} from '@/sanity/sanity-utils'

import Image from 'next/image';
import hero1 from '../../public/assets/hero1.svg'
import { PortableText } from '@portabletext/react';
import { Button } from "@/components/ui/button"


import Link from 'next/link';

export default async function Home() {

  const projects = await getProjects()
  // console.log('Projects:', projects)

  return (
    <div className='flex flex-col items-center'>


      <div id='hero' className='flex flex-col-reverse sm:flex-row items-center max-w-2xl pb-8'>

      <div className='flex flex-col items-center sm:w-1/3 py-4'>
      <p className='text-3xl font-bold'>Joe Aguado</p>
      <p className='text-lg'>Software Engineer</p>
      <p className='text-sm'>Dallas, Texas</p>

      <div className='flex gap-2 pt-3'><Button>View Work</Button>
      <Button variant='outline'>Contact</Button>
      </div>
      </div>

      <div className='w-2/3'>
      <Image 
      src={hero1}
      alt=''
      width={420}
      className='w-full'
      />
      </div>

      </div>

    <div id='projects' className='px-8' >

    <p className='font-bold text-xl'>My Projects</p>
     
     <div className='mt-5 grid grid-cols-1 md:grid-cols-3 gap-8'>
      {projects.map((project, index) => (
        <div key={project._id} className={`pr-3 ${index !== projects.length - 1 ? 'md:border-r md:border-gray-400' :'' }`}>
          {project.image && (
            <Link href={`/projects/${project.slug}`} className='flex flex-col items-center justify-center hover:scale-105 hover:duration-300 ease-in-out'>
            <Image 
            src={project.image}
            alt={project.name}
            width={300}
            height={100}
            className='object-cover'
            /></Link>
          )}
          <p className='font-bold mt-2'>
          {project.name}
          </p>
          <div className='text-sm mt-1'>
          <PortableText 
          value={project.content}/>
          </div>
          </div>
          
        ))}

        </div>
      </div>
    </div>
  );
}


