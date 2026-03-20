import { ImageResponse } from "next/og";
import { getSiteConfig } from "@/lib/sites";

export const dynamic = "force-static";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  const config = getSiteConfig();
  return new ImageResponse(
    (
      <div style={{
        background: config.faviconColor,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "4px",
      }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L4 5.5V11C4 16.25 7.4 21.15 12 22.5C16.6 21.15 20 16.25 20 11V5.5L12 2Z"
            fill="white"
          />
          <path
            d="M10 12.5L8.5 11L7.5 12L10 14.5L16.5 8L15.5 7L10 12.5Z"
            fill={config.faviconColor}
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
