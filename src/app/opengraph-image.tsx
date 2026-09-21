import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#05070f",
          backgroundImage:
            "linear-gradient(rgba(96,130,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(96,130,255,0.12) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          color: "#e6ecff",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#60a5fa" }}>
          {"> "}~/portfolio
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 72, fontWeight: 700 }}>
          {profile.name}
        </div>
        <div style={{ display: "flex", marginTop: 16, fontSize: 34, color: "#93a0c6" }}>
          {profile.headline}
        </div>
        <div style={{ display: "flex", marginTop: 40, fontSize: 24, color: "#5c6890", gap: 24 }}>
          {profile.roles.slice(0, 4).map((role) => (
            <div
              key={role}
              style={{
                display: "flex",
                border: "1px solid rgba(96,130,255,0.4)",
                borderRadius: 999,
                padding: "8px 20px",
              }}
            >
              {role}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
