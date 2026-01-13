const jobs = [
  { title: "Growth Associate", type: "Full-time", location: "On-site" },
  { title: "Digital Marketing Associate", type: "Full-time", location: "On-site" }
];

export default function CareersPage() {
  return (
    <main style={{ padding: "60px", maxWidth: "900px", margin: "auto" }}>
      
      <h1>Join Us @ Parikshe</h1>
      <p>Make a lasting impact on students’ success</p>

      <div style={{ marginTop: "30px" }}>
        {jobs.map((job, index) => (
          <div
            key={index}
            style={{
              padding: "20px",
              marginBottom: "20px",
              border: "1px solid #ddd",
              borderRadius: "8px"
            }}
          >
            <h3>{job.title}</h3>
            <p>{job.location} • {job.type}</p>
            <button style={{ marginTop: "10px" }}>Job Description</button>
          </div>
        ))}
      </div>

      <p style={{ marginTop: "30px" }}>
        Send your resume to <strong>careers@parikshe.in</strong>
      </p>

    </main>
  );
}
