import Link from "next/link";

const subjects = [
  "mathematics",
  "science",
  "socialscience",
  "english",
  "kannada",
];

export default function SSLCPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">SSLC Courses</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {subjects.map((sub) => (
          <Link
            key={sub}
            href={`/sslc/${sub}`}
            className="block p-8 text-center border rounded-xl shadow-sm bg-white hover:shadow-lg hover:border-yellow-400 transition transform hover:scale-105"
          >
            <span className="text-xl font-semibold text-gray-800">
              {sub.replace("-", " ").toUpperCase()}
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}