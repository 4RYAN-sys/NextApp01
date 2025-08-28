const projects = [
  { title: 'Project A', description: 'Build an e-commerce platform',  },
  { title: 'Project B', description: 'Mobile app for financial services' },
  { title: 'Project C', description: 'Enterprise CMS development' },
]

export default function Services() {
  return (
    <section className="max-w-5xl mx-auto p-8">
      <h2 className="text-3xl font-semibold mb-6">Projects Completed</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.title} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="mt-2 text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
