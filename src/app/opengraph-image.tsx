import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site-config";

export const alt = siteConfig.title;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#1a2623",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 28,
            fontWeight: 600,
            color: "#b86b4a",
          }}
        >
          {siteConfig.name} · Phoenix, AZ
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 56,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#f3ebe2",
              maxWidth: 960,
            }}
          >
            {siteConfig.title}
          </div>
          <div
            style={{
              fontSize: 24,
              lineHeight: 1.35,
              color: "#c8d4cf",
              maxWidth: 900,
            }}
          >
            Instagram, Facebook, and Google for Phoenix cleaners.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
