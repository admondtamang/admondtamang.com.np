import React from "react";

import Layout from "@/components/layouts";
import Highlight from "@/components/highlight";
import MetaTags from "@/components/common/meta";
import { PACKAGES, PROJECTS } from "@/const/works";
import LinkButton from "@/components/common/linkButton";

const MyWork = () => {
  return (
    <Layout>
      <MetaTags
        currentPageTitle="Admond Tamang"
        title="Admond Tamang"
        description="Portfolio of Admond Tamang. A Developer based in Nepal"
        image="/favicon.ico"
        url={"https://admondtamang.com.np"}
      />

      <div className="container mx-auto mt-10 flex flex-col gap-10">
        <section>
          <h3 className="mb-4 font-bold"> Npm packages:</h3>

          <div className="flex flex-col gap-2">
            {PACKAGES.map((row) => (
              <LinkButton
                key={row.name}
                className=" px-4 py-2 text-black dark:text-white"
                href="https://www.npmjs.com/package/pdf-watermark"
              >
                <Highlight> {row.name}</Highlight> - {row.description}
              </LinkButton>
            ))}
          </div>
        </section>

        <section>
          <h3 className="mb-4 font-bold"> Projects:</h3>
          <div className="grid grid-cols-4 gap-4 text-black dark:text-white">
            {PROJECTS.map((row) => (
              <LinkButton key={row.name} href={row.link}>
                <b>{row.name}</b>

                <p>{row.description}</p>
              </LinkButton>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};
export default MyWork;
