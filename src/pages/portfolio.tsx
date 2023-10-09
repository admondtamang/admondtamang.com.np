import { type NextPage } from "next";
import Hero from "@/components/hero";
import Layout from "@/components/layouts";

import MetaTags from "@/components/common/meta";

const Home: NextPage = () => {
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

export default Home;
