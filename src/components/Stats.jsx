export default function Stats() {
  return (
    <section style={styles.stats}>
      <div>
        <h2>130K+</h2>
        <p>Students</p>
      </div>
      <div>
        <h2>500+</h2>
        <p>Schools</p>
      </div>
      <div>
        <h2>30K+</h2>
        <p>Downloads</p>
      </div>
    </section>
  );
}

const styles = {
  stats: {
    display: "flex",
    justifyContent: "space-around",
    background: "#111",
    color: "#fff",
  },
};
