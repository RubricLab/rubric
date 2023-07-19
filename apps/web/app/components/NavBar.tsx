"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col absolute top-0 left-[50%] -translate-x-1/2 z-20 w-full p-5 gap-1 max-w-6xl">
      <div
        className={`${
          pathname === "/" ? "justify-end" : "justify-between"
        } flex text-orange-600 text-lg sm:text-2xl lg:text-3xl`}
      >
        {pathname !== "/" && (
          <Link href="/" className="text-black font-bold">
            Rubric
          </Link>
        )}

        <div className="flex gap-4">
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
