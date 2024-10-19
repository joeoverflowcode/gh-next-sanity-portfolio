import { getProject, getProjects } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';

type Props = {
  params: {
    project: string;
  };
};

const Project = async ({ params }: Props) => {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div className="flex flex-col items-center">
      <header className="my-4">
        <h1 className="font-bold text-2xl">{project.name}</h1>
      </header>
      <Image src={project.image} width={500} height={500} alt="image" className="my-4" />
      <PortableText value={project.content} />
      <Button className="mt-2">
        <a
          href={project.url}
          title="view project"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </Button>
    </div>
  );
};

export default Project;

// Generate static params for dynamic routes
export async function generateStaticParams() {
  // Fetch all project slugs from Sanity
  const projects = await getProjects(); // Adjust this to match your sanity-utils function
  const paths = projects.map((project: { slug: string }) => ({
    project: project.slug,
  }));

  return paths.map((path) => ({
    params: path,
  }));
}
