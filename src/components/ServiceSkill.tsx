import { IconType } from 'react-icons';
import { SiTypescript, SiJavascript, SiReact, SiNodedotjs, SiPython } from 'react-icons/si';

const skills: { icon: IconType; name: string }[] = [
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiJavascript, name: 'JavaScript' },
  { icon: SiReact, name: 'React.js' },
  { icon: SiNodedotjs, name: 'Node.js' },
  { icon: SiPython, name: 'Python' },
];

export default function CareerSkills() {
  return (
    <section className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-6">Languages & Technologies</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {skills.map(({ icon: Icon, name }) => (
          <div key={name} className="flex flex-col items-center space-y-2 p-4 border border-gray-200 rounded-lg">
            <Icon size={48} className="text-blue-600" />
            <span className="text-lg font-medium">{name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
