// pages/[slug].js

import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";

import Layout from "@/components/layouts";

export async function getStaticPaths() {
  const paths = allPosts.map((post) => ({
    params: { slug: post._raw.flattenedPath },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
  return { props: { post } };
}

const PostLayout = ({ post }) => {
  const Content = getMDXComponent(post.body.code);

  return (
    <Layout>
      <aside className="p-8">
        hello world!
      </aside>

    <article className="mx-auto max-w-xl py-8">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h1>{post.title}</h1>
      </div>
      <div className="dark:text-white">
      <Content />
      </div>
    </article>
    </Layout>
  );
};

export default PostLayout;
