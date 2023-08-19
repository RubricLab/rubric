import "@rubriclab/ui/globals.css";
import "./styles.css";
import localFont from "next/font/local";
import NavBar from "./components/NavBar";
import BackgroundGrid from "./components/BackgroundGrid";
import ToastProvider from "@rubriclab/ui/ToastProvider";
import { META } from "../lib/constants";

const calSans = localFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-cal-sans",
});

export const metadata = {
  metadataBase: new URL(META.siteURL),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${calSans.variable} min-h-screen h-full w-full flex flex-col relative items-center`}
      >
        <BackgroundGrid className="fixed h-full w-full" />
        <NavBar />
        <ToastProvider />
        <div className="z-10 max-w-6xl w-full p-5 pt-0">{children}</div>
      </body>
    </html>
  );
}
