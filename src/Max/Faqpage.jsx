import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Faq = () => {
  const faqs = [
    {
      question: 'What services do you offer?',
      answer:
        'I specialize in custom web development, responsive design, backend APIs, and full-stack applications. Whether you need a brand-new website or an upgrade to an existing platform, I can help bring your vision to life.',
    },
    {
      question: 'How long does a typical project take?',
      answer:
        'Timelines vary based on project complexity. A simple website may take 2–4 weeks, while a more complex web application can take 2–3 months. I work closely with you to set realistic milestones and deliver on time.',
    },
    {
      question: 'Do you offer ongoing support after launch?',
      answer:
        'Absolutely. I provide maintenance packages, bug fixes, and feature enhancements to ensure your site stays secure, up‑to‑date, and performing at its best.',
    },
    {
      question: 'Can you redesign an existing website?',
      answer:
        'Yes! I can revamp your current site with a modern design, improved performance, and a better user experience while preserving your existing content and SEO value.',
    },
    {
      question: 'What technologies do you work with?',
      answer:
        'I work with React, Next.js, Tailwind CSS, Node.js, Firebase, and many other modern tools. I choose the best stack for your project’s needs.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Simply reach out via the contact form or email. We’ll schedule a call to discuss your goals, then I’ll provide a proposal with timeline and cost estimates.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="px-4 py-20 bg-white md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-[#CF1F1F] mx-auto mt-4 rounded-full" />
          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600">
            Everything you need to know about working with me.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="transition-shadow duration-200 bg-white border border-gray-200 shadow-sm rounded-2xl hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full p-6 text-left focus:outline-none group"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`text-gray-500 transition-all duration-300 ${
                    openIndex === index ? 'rotate-180 text-[#CF1F1F]' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pt-0 pb-6 leading-relaxed text-gray-600 border-t border-gray-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;