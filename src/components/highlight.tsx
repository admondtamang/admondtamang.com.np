export default function Highlight({
  children,
  ...rest
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {" "}
      <span
        className="h-[100px] bg-gradient-to-b from-transparent via-transparent to-[#fce041] dark:to-[#888]"
        {...rest}
      >
        {children}
      </span>{" "}
    </>
  );
}
