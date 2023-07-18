"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="absolute flex flex-col top-0 2xl:left-1/2 2xl:-translate-x-1/2 z-20 w-full p-5 gap-1 2xl:max-w-6xl">
      <div
        className={`${
          pathname === "/" ? "justify-end" : "justify-between"
        } flex text-orange-500 text-lg sm:text-2xl lg:text-3xl`}
      >
        {pathname !== "/" && (
          <Link href="/">
            <h4 className="text-black font-bold">Rubric</h4>
          </Link>
        )}

        <div className="flex gap-3">
          <Link href="/projects" className="font-light hover:opacity-80">
            Projects
          </Link>
          <Link href="/blog" className="font-light">
            Blog
          </Link>
        </div>
      </div>

      {pathname === "/" && (
        <div className="items-end flex flex-col">
          <span className="text-sm sm:text-base lg:text-lg font-thin">
            © Rubric Labs Inc.
          </span>
        </div>
      )}
    </nav>
  );
}
