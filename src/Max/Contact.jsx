import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa6';

const Contact = () => {
  const contacts = [
    {
      icon: <MdEmail className="text-4xl" />,
      title: 'Email',
      value: 'kadirmubarak27@gmail.com',
      link: 'mailto:kadirmubarak27@gmail.com',
      color: 'hover:bg-red-50',
    },
    {
      icon: <FaWhatsapp className="text-4xl" />,
      title: 'WhatsApp',
      value: '+234 706 621 4165',
      link: 'https://wa.me/2347066214165',
      color: 'hover:bg-green-50',
    },
    {
      icon: <FaInstagram className="text-4xl" />,
      title: 'Instagram',
      value: '@mk__punk',
      link: 'https://www.instagram.com/mk__tech1?igsh=MTc4MnRrOXBkanlpcg==',
      color: 'hover:bg-pink-50',
    },
    {
      icon: <FaTiktok className="text-4xl" />,
      title: 'TikTok',
      value: '@mkpunk2',
      link: 'https://www.tiktok.com/@mktech__001?_t=ZS-8z7KSKvtDQw&_r=1',
      color: 'hover:bg-gray-50',
    },
  ];

  return (
    <section id="contact" className="px-4 py-20 bg-[#ddd9d9] md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-[#CF1F1F] mx-auto mt-4 rounded-full" />
          <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-600">
            Have a project in mind or just want to say hello? Reach out through any of these channels.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {contacts.map((contact, idx) => (
            <a
              key={idx}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 ${contact.color}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 text-[#CF1F1F] group-hover:scale-110 transition-transform duration-300">
                  {contact.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-800">
                  {contact.title}
                </h3>
                <p className="text-sm text-gray-600 break-all">
                  {contact.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Optional: Decorative element */}
        <div className="mt-12 text-sm text-center text-gray-400">
          I typically respond within 30 minutes.
        </div>
      </div>
    </section>
  );
};

export default Contact;