import { FiPhone, FiMail, FiGithub } from 'react-icons/fi';

export default function ContactInfo() {
  const waNumber = '6281234567890'; // ganti nomor WA-mu
  const email = 'email@example.com';
  const github = 'https://github.com/username';

  return (
    <section className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
      <ul className="space-y-4 text-blue-700">
        <li className="flex items-center space-x-4 cursor-pointer hover:underline" onClick={() => window.open(`https://wa.me/${waNumber}`, '_blank')}>
          <FiPhone size={24} />
          <span>WhatsApp</span>
        </li>
        <li className="flex items-center space-x-4 cursor-pointer hover:underline" onClick={() => window.location.href = `mailto:${email}`}>
          <FiMail size={24} />
          <span>{email}</span>
        </li>
        <li className="flex items-center space-x-4 cursor-pointer hover:underline" onClick={() => window.open(github, '_blank')}>
          <FiGithub size={24} />
          <span>GitHub</span>
        </li>
      </ul>
    </section>
  );
}
