import React from "react";

import Header from "./header";

export default function Layout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className="bg-white font-mono transition-all duration-700 dark:bg-slate-800">
      <Header />
      <main className={`min-h-[90vh] ${className}`}>{children}</main>
    </main>
  );
}
