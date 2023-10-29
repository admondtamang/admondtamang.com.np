import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Button({ className, children, ...rest }: any) {
  return (
    <button
      className={`text-dark text-md shadow-offset-black rounded border-2 border-black bg-indigo-300 px-6 py-2 hover:bg-lime-600 hover:text-lime-50 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
