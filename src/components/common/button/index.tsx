import React from "react";

export default function Button({ className, children, ...rest }: any) {
  return (
    <button
      className={`text-dark text-md rounded border-2 border-black bg-indigo-300 py-2 px-6 shadow-offset-black hover:bg-lime-600 hover:text-lime-50 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
