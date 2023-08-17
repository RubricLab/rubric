import NextImage from "next/image";
import "./styles.css";

export default async function Home() {
  return (
    <html style={{ backgroundColor: "#FDD41E" }} lang="en">
      <body
        style={{
          display: "flex",
          height: "100vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "monospace",
        }}
      >
        <NextImage
          src="/bart.png"
          alt="bart"
          layout="fill"
          style={{
            zIndex: -1,
            objectFit: "cover",
            objectPosition: "right",
          }}
        />
        <p style={{ fontSize: "1rem" }}>Bart is coming soon</p>
        <p style={{ fontSize: "1rem" }}>Bart is coming soon</p>
        <p style={{ fontSize: "1rem" }}>Bart is coming soon</p>
      </body>
    </html>
  );
}
