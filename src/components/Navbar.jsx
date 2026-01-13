import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 40px",
        borderBottom: "1px solid #eee",
      }}
    >
      <h2
        style={{
          color: "#040c04",
          fontSize: "36px",
          fontWeight: "900",
          letterSpacing: "1px",
        }}
      >
        PARIKSHE
      </h2>

      <div
        style={{
          display: "flex",
          gap: "28px",
          alignItems: "center",
          fontSize: "16px",
          fontWeight: "600",
          letterSpacing: "0.5px",
        }}
      >
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/sslc">SSLC</Link>
        <Link href="/careers">Careers</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}