import { GetStaticPaths, type NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "@/components/layouts";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import MetaTags from "@/components/common/meta";

type Params = {
  params: {
    slug: string;
  };
};

const BlogDetail: NextPage = (props: any) => {
  const router = useRouter();
  const slug = router.query.slug ?? "";
  const meta = props?.meta;
  // const { data, isLoading } = api.posts.getOne.useQuery({ slug });

  return (
    <>
      <MetaTags
        currentPageTitle={meta?.title}
        title={meta?.title}
        description={meta?.description}
        image={meta?.image}
        url={meta?.url}
      />

      <Layout className="p-4">
        <MDXRemote {...props.source} />
      </Layout>
    </>
  );
};

export async function getStaticProps({ params }: Params) {
  const source = "Some **mdx** text, with a component";
  const mdxSource = await serialize(source);
  const meta = {
    title: "Admond Tamang",
    description: "Portfolio of Admond Tamang. A Developer based in Nepal",
    image: "/favicon.ico",
    url: "https://admondtamang.com.np",
  };

  return { props: { source: mdxSource, meta } };
}
export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export default BlogDetail;
