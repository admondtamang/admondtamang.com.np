import Link from "next/link";
import React from "react";

export default function LinkButton({ className, children, ...rest }: any) {
  return (
    <Link
      className={`text-dark text-md shadow-offset-black rounded border-2 border-black bg-indigo-300 px-6 py-2 hover:bg-accent-600 hover:text-lime-50 ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}
