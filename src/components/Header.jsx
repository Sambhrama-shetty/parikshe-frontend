import Link from "next/link";

export default function Header() {
  return (
    <header style={styles.header}>
      <h2>Parikshe</h2>

      <nav style={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/careers">Careers</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/sslc">SSLC</Link>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 40px",
    background: "#111",
    color: "#fff",
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
};
