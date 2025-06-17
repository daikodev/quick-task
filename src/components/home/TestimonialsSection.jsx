const testimonials = [
  {
    name: "María García",
    role: "Diseñadora UX",
    content:
      "QuickStart ha revolucionado mi flujo de trabajo. La interfaz es tan intuitiva que no necesité tutorial.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Carlos Rodríguez",
    role: "Desarrollador",
    content:
      "Las notificaciones inteligentes me han ayudado a cumplir todos mis deadlines. Increíble herramienta.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Laura Martínez",
    role: "Estudiante",
    content:
      "Perfecto para organizar mis estudios. La sincronización entre dispositivos es impecable.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">
              Más de 10,000 usuarios confían en QuickStart
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Únete a la comunidad de personas que han transformado su
              productividad.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  width={40}
                  height={40}
                  alt={`Avatar de ${testimonial.name}`}
                  className="rounded-full"
                />
                <div>
                  <p className="text-sm font-medium">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
