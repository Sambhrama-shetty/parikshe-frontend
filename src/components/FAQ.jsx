export default function FAQ() {
  return (
    <section className="faq px-6 py-16 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">FAQ</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {faqItems.map(({ question, answer }) => (
          <div
            key={question}
            className="p-6 bg-white border rounded-xl shadow-sm transition duration-300 hover:shadow-lg hover:border-yellow-400 hover:bg-yellow-50 hover:scale-[1.02]"
          >
            <details>
              <summary className="cursor-pointer text-lg font-semibold text-gray-800 mb-2 hover:text-yellow-600 transition">
                {question}
              </summary>
              <p className="text-gray-600 mt-2">{answer}</p>
            </details>
          </div>
        ))}
      </div>
    </section>
  );
}

const faqItems = [
  {
    question: "What is Parikshe?",
    answer:
      "Parikshe is a student-first e-learning platform for SSLC, PUC, and KCET exam prep in Karnataka.",
  },
  {
    question: "Is there mentorship support?",
    answer:
      "Yes. Premium plans include doubt-solving and mentorship from 10 am to 10 pm.",
  },
  {
    question: "How is it different from coaching centers?",
    answer:
      "Parikshe offers expert teaching and results without the high costs of tuition.",
  },
  {
    question: "Where is Parikshe active?",
    answer:
      "Parikshe is present in 33 districts and 27 cities across Karnataka.",
  },
  {
    question: "Is Parikshe free?",
    answer:
      "Free content is available via YouTube. Premium features are on the app and website.",
  },
  {
    question: "What subjects are covered?",
    answer:
      "Subjects include Physics, Chemistry, Maths, Biology, English, Kannada, Commerce, and more.",
  },
];