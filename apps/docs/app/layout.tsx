import "@rubriclab/ui/globals.css";
import "./styles.css";

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
        className={`${calSans.variable} min-h-screen flex w-full flex-col items-center`}
      >
        <ToastProvider />
        <div className="z-10 max-w-6xl p-5 pt-0 h-full">{children}</div>
      </body>
    </html>
  );
}
