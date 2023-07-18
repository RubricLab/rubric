import "ui/globals.css";
import "./styles.css";
import localFont from "next/font/local";
import NavBar from "./components/NavBar";
import BackgroundGrid from "./components/BackgroundGrid";

const calSans = localFont({
  src: "./CalSans-SemiBold.ttf",
  variable: "--font-cal-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${calSans.variable} min-h-screen h-full w-full flex flex-col relative 2xl:items-center`}
    >
      <BackgroundGrid className="fixed h-full w-full" />
      <NavBar />
      <body className="z-10 2xl:max-w-6xl w-full p-5 pt-0">{children}</body>
    </html>
  );
}
