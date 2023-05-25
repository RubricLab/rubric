import "ui/globals.css";
import "./styles.css";
import localFont from "next/font/local";

const calSans = localFont({
  src: "./fonts/CalSans-SemiBold.ttf",
  variable: "--font-cal-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${calSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
