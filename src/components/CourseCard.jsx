export default function CourseCard({ title, description }) {
  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "12px",
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
      <button style={{ marginTop: "12px" }}>
        Explore
      </button>
    </div>
  );
}
