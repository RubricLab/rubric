import React from "react";
import tailwindConfig from "../../tailwind.config";

const lineAttributes = {
  stroke: tailwindConfig.theme.extend.colors["stone-300"] || "gray",
  strokeWidth: 1,
  opacity: 0.8,
  fill: "none",
};

function BackgroundGrid({
  className,
  ...props
}: {
  className?: string;
  [key: string]: any;
}) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      {...props}
    >
      <g>
        {/* Vertical lines */}
        <g className="vertical">
          {/* Curving right */}
          <path {...lineAttributes} d="M50,0 Q50,500 50,1000" />
          <path {...lineAttributes} d="M100,0 Q125,500 100,1000" />
          <path {...lineAttributes} d="M150,0 Q200,500 150,1000" />
          <path {...lineAttributes} d="M200,0 Q275,500 200,1000" />
          <path {...lineAttributes} d="M250,0 Q350,500 250,1000" />
          <path {...lineAttributes} d="M300,0 Q425,500 300,1000" />
          <path {...lineAttributes} d="M350,0 Q500,500 350,1000" />
          <path {...lineAttributes} d="M400,0 Q600,500 400,1000" />
          {/* Curving left */}
          <path {...lineAttributes} d="M600,0 Q400,500 600,1000" />
          <path {...lineAttributes} d="M650,0 Q500,500 650,1000" />
          <path {...lineAttributes} d="M700,0 Q575,500 700,1000" />
          <path {...lineAttributes} d="M750,0 Q650,500 750,1000" />
          <path {...lineAttributes} d="M800,0 Q725,500 800,1000" />
          <path {...lineAttributes} d="M850,0 Q800,500 850,1000" />
          <path {...lineAttributes} d="M900,0 Q875,500 900,1000" />
          <path {...lineAttributes} d="M950,0 Q950,500 950,1000" />
        </g>
        {/* Horizontal lines */}
        <g className="horizontal">
          <path {...lineAttributes} d="M0,50 Q500,50 1000,50" />
          <path {...lineAttributes} d="M0,100 Q500,125 1000,100" />
          <path {...lineAttributes} d="M0,150 Q500,200 1000,150" />
          <path {...lineAttributes} d="M0,200 Q500,275 1000,200" />
          <path {...lineAttributes} d="M0,250 Q500,350 1000,250" />
          <path {...lineAttributes} d="M0,300 Q500,425 1000,300" />
          <path {...lineAttributes} d="M0,350 Q500,500 1000,350" />
          <path {...lineAttributes} d="M0,400 Q500,600 1000,400" />
          {/* Curving left */}
          <path {...lineAttributes} d="M0,600 Q500,400 1000,600" />
          <path {...lineAttributes} d="M0,650 Q500,500 1000,650" />
          <path {...lineAttributes} d="M0,700 Q500,575 1000,700" />
          <path {...lineAttributes} d="M0,750 Q500,650 1000,750" />
          <path {...lineAttributes} d="M0,800 Q500,725 1000,800" />
          <path {...lineAttributes} d="M0,850 Q500,800 1000,850" />
          <path {...lineAttributes} d="M0,900 Q500,875 1000,900" />
          <path {...lineAttributes} d="M0,950 Q500,950 1000,950" />
        </g>
      </g>
    </svg>
  );
}

export default BackgroundGrid;
