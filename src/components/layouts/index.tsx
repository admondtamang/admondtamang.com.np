import React from "react";

import Header from "./header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-white font-mono transition-all duration-700 dark:bg-slate-800">
      <Header />
      <main className="min-h-[90vh]">{children}</main>
    </main>
  );
}
