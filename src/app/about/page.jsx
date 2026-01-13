export default function AboutPage() {
  const teamMembers = [
    { name: "Kavita Iyer", image: "/team/kavita.jpg" },
    { name: "Gaurav Chauhan", image: "/team/gaurav.jpg" },
    { name: "Shilpa", image: "/team/shilpa.jpg" },
    { name: "Shreeya Ramakrishnan", image: "/team/shreeya.jpg" },
    { name: "Prashanthasai Rapelli", image: "/team/prashanthasai.jpg" },
    { name: "Soumya Ravi", image: "/team/soumya.jpg" },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
      {/* ABOUT HEADER */}
      <section className="bg-gray-400 rounded-xl p-8 shadow-sm">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          About Parikshe
        </h1>
        <p className="text-lg text-gray-1100 leading-relaxed">
          Parikshe began as a heartfelt initiative by educators at SIFF Scholars.
          Our mission is to make quality education accessible to every student
          preparing for SSLC, PUC and KCET in Karnataka. We believe that the right
          guidance, when combined with structured content and continuous support,
          can transform a student’s learning journey.
        </p>
      </section>

      {/* OUR STORY */}
      <section className="bg-gray-400 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-1100 leading-relaxed">
          What started as a small effort to support students soon evolved into a
          comprehensive learning platform. Parikshe was built with the intention
          of bridging gaps in traditional education systems by providing
          accessible, affordable and high-quality learning resources to students
          across Karnataka.
        </p>
      </section>

      {/* MISSION / VISION / OFFERINGS */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl shadow-md border bg-white">
          <h3 className="text-xl font-semibold mb-3">🎯 Our Mission</h3>
          <p className="text-gray-1100">
            To democratize access to quality education by providing expert
            guidance, structured courses and continuous academic support.
          </p>
        </div>

        <div className="p-6 rounded-xl shadow-md border bg-white">
          <h3 className="text-xl font-semibold mb-3">📚 What We Offer</h3>
          <p className="text-gray-600">
            Video lessons, practice questions, mock tests, analytics and
            personalized learning paths designed for SSLC, PUC and KCET students.
          </p>
        </div>

        <div className="p-6 rounded-xl shadow-md border bg-white">
          <h3 className="text-xl font-semibold mb-3">🚀 Our Vision</h3>
          <p className="text-gray-1000">
            To empower every student in Karnataka with confidence, clarity and
            the tools needed to succeed academically and beyond.
          </p>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-gray-400 rounded-xl p-8 shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Our Partners</h2>
        <p className="text-gray-1000 leading-relaxed">
          Parikshe collaborates with Samagra Shikshana Karnataka (SSK) to enhance
          learning opportunities across government and aided schools. Through
          these partnerships, we aim to reach students from diverse backgrounds
          and ensure equal access to quality education.
        </p>
      </section>

      {/* TEAM */}
      <section>
        <h2 className="text-2xl font-semibold mb-8">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition bg-white"
            >
              <img
                src={member.image}
                alt={member.name}
                className="h-36 w-36 mx-auto object-cover rounded-full mb-4 transform transition duration-300 hover:scale-105"
              />
              <p className="font-medium text-gray-800">{member.name}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}