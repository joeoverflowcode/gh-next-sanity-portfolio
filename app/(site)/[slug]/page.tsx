import { getPage, getPages } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div>
      <h1>{page.title}</h1>

      <div>
        <PortableText value={page.content} />
      </div>
    </div>
  );
}

// Generate static params for dynamic routes
export async function generateStaticParams() {
  // Fetch all page slugs from Sanity
  const pages = await getPages(); // Adjust this to match your sanity-utils function
  const paths = pages.map((page: { slug: string }) => ({
    slug: page.slug,
  }));

  return paths.map((path) => ({
    params: path,
  }));
}
