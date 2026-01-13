export async function GET() {
  return new Response(
    JSON.stringify([
      {
        id: 1,
        title: "SSLC Mathematics",
        description: "Complete SSLC Maths syllabus with videos & notes"
      },
      {
        id: 2,
        title: "SSLC Science",
        description: "Physics, Chemistry & Biology explained simply"
      },
      {
        id: 3,
        title: "SSLC Social Science",
        description: "History, Civics & Geography simplified"
      }
    ]),
    {
      headers: { "Content-Type": "application/json" }
    }
  );
}
