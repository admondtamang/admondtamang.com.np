import Image from "next/image";
import { MDXProvider } from "@mdx-js/react";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

export const Post = (props: any) => {
  return (
    <MDXProvider>
      <main {...props} />
    </MDXProvider>
  );
};

export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere
  const source = "Some **mdx** text, with a component <Heading />";
  const mdxSource = await serialize(source);
  return { props: { source: mdxSource } };
}
