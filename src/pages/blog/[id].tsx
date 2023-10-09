import { type NextPage } from "next";
import Hero from "@/components/hero";
import { useRouter } from "next/router";
import Layout from "@/components/layouts";

import MetaTags from "@/components/common/meta";
import { api } from "@/utils/api";

const BlogDetail: NextPage = () => {
  const router = useRouter();
  const slug = router.query.slug ?? "";

  const { data: posts, isLoading } = api.posts.getOne.useQuery({ slug });

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
        <Hero />
      </Layout>
    </>
  );
};

export default BlogDetail;
