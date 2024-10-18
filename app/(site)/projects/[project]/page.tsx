import { getProject } from '@/sanity/sanity-utils'
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import React from 'react'
import { Button } from '@/components/ui/button';

type Props = {
    params : {
        project:string
    }
}

const Project = async ({params}: Props) => {
  
    const slug = params.project
    const project = await getProject(slug)
  
    return (
    <div className='flex flex-col items-center'>
        <header className='my-4'>
          <h1 className='font-bold text-2xl'>{project.name}</h1>
        </header>
    <Image src={project.image} width={500} height={500} alt='image' className='my-4'/>
    <PortableText value={project.content}/>
          <Button className='mt-2'><a href={project.url} title='view project' target='_blank' rel='noopener noreferrer' className=''>View Project</a></Button>  
    </div>
  )
}

export default Project