import Link from "next/link";
import ToggleDarkMode from "../common/toggleDarkMode";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { navAnimation } from "../../utils/animationData";

export default function Header() {
  const router = useRouter();
  return (
    <motion.header
      {...navAnimation}
      className="body-font h-[10vh] text-gray-600 dark:text-white"
    >
      <div className="container fixed top-0  z-50 mx-auto flex w-full flex-col flex-wrap items-center bg-white p-5 dark:bg-transparent md:flex-row">
        <Link
          href="/"
          className={`${
            router.pathname == "/" ? "font-extrabold" : ""
          } title-font mb-4 ml-3 flex items-center text-xl font-medium text-gray-900 dark:text-white md:mb-0`}
        >
          Admond
        </Link>

        <nav className="flex flex-wrap items-center justify-center text-base md:ml-4	md:mr-auto md:border-l md:border-gray-400 md:py-1 md:pl-4">
          <Link href="my-work" className="mr-5 hover:text-gray-900">
            Personal Work
          </Link>
          <Link href="portfolio" className="mr-5 hover:text-gray-900">
            About Me
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ToggleDarkMode />
          <Link href="/admond-cv.pdf" download>
            <button className="nue nue-button mt-4 flex items-center rounded border-0 px-3 py-1 text-base focus:outline-none md:mt-0">
              <span>View CV</span>
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="ml-1 h-4 w-4"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
