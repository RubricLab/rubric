import "@rubriclab/ui/globals.css";
import localFont from "next/font/local";

import ToastProvider from "@rubriclab/ui/ToastProvider";

const calSans = localFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-cal-sans",
});

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
        <ToastProvider />
        <div className="z-10 max-w-6xl w-full p-5 pt-0">{children}</div>
      </body>
    </html>
  );
}
