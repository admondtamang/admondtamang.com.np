import { api } from "@/utils/api";
import Layout from "@/components/layouts";
import MetaTags from "@/components/common/meta";
import { BlogItem } from "@/components/blogs/blog-item";

export default function Home() {
  const { data: posts, isLoading } = api.posts.getAll.useQuery();

  if (isLoading) {
    return <>Loading...</>;
  }

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
        <main className="flex min-h-screen flex-col items-center justify-center gap-16 pt-8 dark:text-white">
          {posts?.map((post) => (
            <BlogItem
              key={post?.title}
              blog={{
                date: post?.createdAt,
                description: post?.description,
                tags: post?.tags,
                title: post?.title,
                slug: post?.slug,
              }}
            />
          ))}
        </main>
      </Layout>
    </>
  );
}
