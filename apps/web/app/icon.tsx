import { ImageResponse } from "next/server";
import colors from "tailwindcss/colors";
import config from "../tailwind.config";
import { MISC } from "../lib/constants";

export const runtime = "edge";

export const contentType = "image/png";
export const size = {
  width: 32,
  height: 32,
};

const offWhite = config.theme.extend.colors["off-white"] || "white";

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 28,
          background: colors["orange"]["700"] || "orange",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: offWhite,
          paddingBottom: "5px",
        }}
      >
        R
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "cal-sans",
          data: await (await fetch(MISC.FONTS.calSansURL)).arrayBuffer(),
        },
      ],
    },
  );
}
