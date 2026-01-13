export default function Hero() {
  return (
    <section style={styles.hero}>
      <div>
        <h1 style={{ fontWeight: "bold", fontFamily: "times new roman, sans-serif" , fontSize: "48px"}}>
          Karnataka’s Largest Learning Platform
        </h1>
        <p>SSLC | PUC | Competitive Exams</p>
        <button>Explore Courses</button>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    height: "50vh",
    display: "flex",
    alignItems: "center",
    background: "#fff7ed",
  },
};
