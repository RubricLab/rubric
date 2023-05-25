import { ImageResponse } from "next/server";
import config from "../../tailwind.config";
import colors from "tailwindcss/colors";
import BackgroundGrid from "../components/BackgroundGrid";

export const runtime = "edge";

export const alt = "Rubric logo with subtitle: coming soon";
export const contentType = "image/png";
export const size = {
  width: 1200,
  height: 630,
};

const backgroundColor = config.theme.extend.colors["off-white"] || "white";
const fontImport = fetch(
  new URL("./CalSans-SemiBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

type Props = {
  params: object;
};

export default async function Image({ params }: Props) {
  console.log("Path params: ", params);

  return new ImageResponse(
    (
      <div
        style={{
          background: backgroundColor,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflowY: "hidden",
        }}
      >
        <BackgroundGrid
          style={{
            position: "absolute",
            width: size.width,
          }}
        />
        <div style={{ fontSize: 128 }}>Rubric</div>
        <div style={{ fontSize: 48, color: colors["orange"]["700"] }}>
          Coming soon.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "cal-sans",
          data: await fontImport,
        },
      ],
    }
  );
}
