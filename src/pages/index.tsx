import Layout from "@/components/layouts";
import MetaTags from "@/components/common/meta";

import { compareDesc, format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";

function PostCard(post: Post) {
  return (
    <div className="mb-8 text-left w-full md:px-24">
      <h2 className="text-xl">
        <Link
          href={post.url}
          className="text-gray-700 dark:text-white hover:dark:text-blue-50 hover:text-blue-900"
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs dark:text-gray-50 text-gray-600">
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>

    </div>
  );
}

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );
  return (
    <>
      <MetaTags
        currentPageTitle="Admond Tamang"
        title="Admond Tamang"
        description="Portfolio of Admond Tamang. A Developer based in Nepal"
        image="/favicon.ico"
        url={"https://admondtamang.com.np"}
      />

      <Layout>
        <main className="flex min-h-screen flex-col items-center justify-center pt-8 dark:text-white">
          {posts.map((post, idx) => (
            <PostCard key={idx} {...post} />
          ))}
        </main>
      </Layout>
    </>
  );
}
