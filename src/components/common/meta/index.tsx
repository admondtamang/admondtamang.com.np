import Head from "next/head";
import { FC } from "react";

const MetaTags: FC<{
  currentPageTitle: string;
  title: string;
  description: string;
  url: string;
  image: string;
}> = ({ currentPageTitle, title, description, url, image }) => {
  const titlePlaceholder = `${currentPageTitle} - ${title}`;

  return (
    <Head>
      {/* // <!-- Primary Meta Tags --> */}
      <title>{titlePlaceholder}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />

      <link rel="canonical" href={url} />
    </Head>
  );
};

export default MetaTags;
