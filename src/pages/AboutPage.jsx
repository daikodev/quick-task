import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Target, Users, Award, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Simplicidad",
    description:
      "Creemos que las mejores herramientas son las más simples de usar.",
  },
  {
    icon: Users,
    title: "Usuario primero",
    description:
      "Cada decisión la tomamos pensando en mejorar la experiencia del usuario.",
  },
  {
    icon: Award,
    title: "Excelencia",
    description: "Nos esforzamos por ofrecer la mejor calidad en cada detalle.",
  },
  {
    icon: Heart,
    title: "Pasión",
    description: "Amamos lo que hacemos y eso se refleja en nuestro producto.",
  },
];

const teamMembers = [
  {
    name: "Daniel Anastacio",
    role: "CEO & Fundador",
    description:
      "Experto en productividad con más de 10 años de experiencia en tecnología.",
    avatar: "/work1.webp",
  },
  {
    name: "Miguel Mujica",
    role: "CTO & Co-fundador",
    description:
      "Ingeniero de software apasionado por crear experiencias de usuario excepcionales.",
    avatar: "/work2.webp",
  },
  {
    name: "Miguel Yahuayre",
    role: "Director de Diseño",
    description:
      "Diseñador UX/UI con un enfoque en la simplicidad y la usabilidad.",
    avatar: "/work3.webp",
  },
  {
    name: "Uriel Olcese",
    role: "Gerente de Marketing",
    description:
      "Especialista en marketing digital con un enfoque en crecimiento orgánico.",
    avatar: "/work4.webp",
  },
];

const stats = [
  { number: "10,000+", label: "Usuarios activos" },
  { number: "1M+", label: "Tareas completadas" },
  { number: "50+", label: "Países" },
  { number: "99.9%", label: "Tiempo de actividad" },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">
                  Sobre QuickStart
                </h1>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nuestra misión es ayudar a las personas a ser más productivas
                  y organizadas, simplificando la gestión de tareas diarias.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-blue-800">
                  Nuestra historia
                </h2>
                <p className="text-gray-600 md:text-lg">
                  QuickStart nació en 2023 cuando nuestro equipo fundador se dio
                  cuenta de que las herramientas de productividad existentes
                  eran demasiado complejas para el usuario promedio.
                </p>
                <p className="text-gray-600 md:text-lg">
                  Decidimos crear una solución simple, elegante y poderosa que
                  cualquier persona pudiera usar sin necesidad de tutoriales
                  extensos o configuraciones complicadas.
                </p>
                <p className="text-gray-600 md:text-lg">
                  Hoy, más de 10,000 usuarios en todo el mundo confían en
                  QuickStart para organizar sus vidas y aumentar su
                  productividad.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/app.webp?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Equipo de QuickStart trabajando"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-blue-800">
                  Nuestros valores
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Los principios que guían todo lo que hacemos en QuickStart.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 xl:grid-cols-4">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
                  >
                    <IconComponent className="h-12 w-12 text-blue-600" />
                    <h3 className="text-xl font-bold text-blue-800">
                      {value.title}
                    </h3>
                    <p className="text-center text-gray-600">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter text-blue-800">
                  Conoce al equipo
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Las personas apasionadas que hacen posible QuickStart.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
                >
                  <img
                    src={member.avatar}
                    width={120}
                    height={120}
                    alt={member.name}
                    className="rounded-full"
                  />
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-blue-800">
                      {member.name}
                    </h3>
                    <p className="text-gray-500">{member.role}</p>
                    <p className="text-gray-600 mt-2">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-4 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-3xl font-bold text-white">
                    {stat.number}
                  </h3>
                  <p className="text-blue-100">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
