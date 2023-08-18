import "./styles.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen h-full w-full flex flex-col relative items-center`}
      >
        <div className="z-10 max-w-6xl w-full p-5 pt-0">{children}</div>
      </body>
    </html>
  );
}
