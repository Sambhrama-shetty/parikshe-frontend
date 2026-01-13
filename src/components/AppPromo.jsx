export default function AppPromo() {
  return (
    <section
      style={{
        display: "flex",              // side by side layout
        alignItems: "center",
        justifyContent: "space-between",
        background: "#facc15",
        padding: "60px 20px",
        borderRadius: "12px",
      }}
    >
      {/* Left side: text + button */}
      <div style={{ maxWidth: "400px" }}>
        <h2 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "16px" }}>
          Download the Parikshe App
        </h2>
        <p style={{ fontSize: "18px", color: "#333", marginBottom: "24px" }}>
          Learn anytime, anywhere
        </p>
        <button
          style={{
            background: "#1e3a8a",
            color: "white",
            padding: "12px 24px",
            fontSize: "16px",
            fontWeight: "600",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Download Now
        </button>
      </div>

      {/* Right side: image from your system */}
      <img
        src="/parikshe-app.png"   // 👈 file placed in public folder
        alt="Parikshe App Preview"
        style={{
          maxWidth: "300px",
          borderRadius: "8px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      />
    </section>
  );
}