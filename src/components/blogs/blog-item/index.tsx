import React from "react";
import moment from "moment";
import Link from "next/link";

interface IBlogItem {
  blog: {
    date: Date;
    title: string;
    slug: string;
    description: string;
    tags: string[] | never[];
  };
}

export const BlogItem = ({ blog }: IBlogItem) => {
  const { date, title, description, slug, tags } = blog;

  return (
    <div className="flex flex-col items-start justify-start gap-4">
      <span className="text-b1-b">{moment(date).format("LLL")}</span>
      <Link href={`/blog/${slug}`}>
        <h2 className="cursor-pointer font-heading transition-all delay-75 hover:decoration-clone hover:underline dark:text-white">
          {title}
        </h2>
      </Link>
      <p className="font-content dark:text-white">{description}</p>
      <div className="flex gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="nue-button text-md shadow-offset-black cursor-pointer rounded border-2 border-black bg-indigo-300 px-6 py-2 hover:bg-lime-600 hover:text-lime-50 dark:text-black"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
