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
          fontFamily: "sans-serif",
        }}
      >
        <NextImage
          src="/bart.png"
          alt="bart"
          layout="fill"
          style={{
            zIndex: -1,
            objectFit: "contain",
            objectPosition: "right",
          }}
        />
        <p style={{ fontSize: "1.5rem", textAlign: "center" }}>
          <a href="https://www.google.com/maps/place/WeWork+Office+Space+%26+Coworking/@40.7005635,-73.9722209,17z/data=!4m6!3m5!1s0x89c25b8cd1f285cf:0x4c15be24154c7f2d!8m2!3d40.7005635!4d-73.9722209!16s%2Fg%2F11g4f_lqcx?entry=ttu">
            40.7005635,-73.9722209
          </a>
        </p>
      </body>
    </html>
  );
}
