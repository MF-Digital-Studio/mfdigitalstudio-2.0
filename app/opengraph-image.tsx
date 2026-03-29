import { ImageResponse } from "next/og";

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
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "56px",
                    background: "linear-gradient(135deg, #050816 0%, #0f2f75 50%, #20d3c3 100%)",
                    color: "white",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                    <div
                        style={{
                            width: 88,
                            height: 88,
                            borderRadius: 24,
                            border: "2px solid rgba(255,255,255,0.18)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 34,
                            fontWeight: 800,
                            background: "rgba(255,255,255,0.08)",
                        }}
                    >
                        MF
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ fontSize: 30, opacity: 0.85 }}>MF Digital Studio</div>
                        <div style={{ fontSize: 18, opacity: 0.65 }}>Teknik SEO ve özel dijital çözümler</div>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 930 }}>
                    <div style={{ fontSize: 84, fontWeight: 900, lineHeight: 1.02 }}>Markanızı dijitalde daha güçlü görünür hale getirin.</div>
                    <div style={{ fontSize: 30, opacity: 0.82 }}>
                        Özel web siteleri, yönetim panelleri, QR menüler ve teknik SEO altyapısı
                    </div>
                </div>
            </div>
        ),
        size,
    );
}