import "@rubriclab/ui/globals.css";
import "./styles.css";
import NextImage from "next/legacy/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen h-full w-full flex flex-col relative items-center justify-center bg-[#FDD41E]`}
      >
        <NextImage
          src="/bart.png"
          alt="bart"
          layout="fill"
          className="object-contain object-bottom object-right"
        />
        <div className="z-10 max-w-6xl w-full h-full p-5 pt-0">{children}</div>
      </body>
    </html>
  );
}
