import React from "react";
import FeatureCard from "../components/features/FeatureCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import {
  CheckCircle,
  Clock,
  ListTodo,
  Bell,
  Calendar,
  BarChart3,
  Smartphone,
  Shield,
  Zap,
  Users,
  Tag,
  Filter,
} from "lucide-react";
import { Link } from "react-router-dom";

const coreFeatures = [
  {
    icon: ListTodo,
    title: "Gestión intuitiva de tareas",
    description:
      "Crea, organiza y prioriza tus tareas con una interfaz simple y elegante. Arrastra y suelta para reorganizar, marca como completadas con un clic.",
  },
  {
    icon: Bell,
    title: "Recordatorios inteligentes",
    description:
      "Configura recordatorios personalizados que se adaptan a tu rutina. Notificaciones push, email y SMS disponibles.",
  },
  {
    icon: Calendar,
    title: "Vista de calendario",
    description:
      "Visualiza todas tus tareas en un calendario mensual, semanal o diario. Planifica mejor tu tiempo y evita sobrecargas.",
  },
  {
    icon: Clock,
    title: "Temporizador Pomodoro",
    description:
      "Mejora tu concentración con la técnica Pomodoro integrada. Sesiones de trabajo de 25 minutos con descansos automáticos.",
  },
  {
    icon: BarChart3,
    title: "Análisis de productividad",
    description:
      "Obtén insights sobre tus patrones de trabajo. Gráficos detallados de tareas completadas, tiempo invertido y tendencias.",
  },
  {
    icon: Tag,
    title: "Etiquetas y categorías",
    description:
      "Organiza tus tareas con etiquetas personalizables. Crea categorías por proyecto, prioridad o contexto.",
  },
];

const advancedFeatures = [
  {
    icon: Smartphone,
    title: "Sincronización multiplataforma",
    description:
      "Accede a tus tareas desde cualquier dispositivo. iOS, Android, Web y aplicaciones de escritorio disponibles.",
  },
  {
    icon: Users,
    title: "Colaboración en equipo",
    description:
      "Comparte listas y proyectos con tu equipo. Asigna tareas, comenta y mantén a todos sincronizados.",
  },
  {
    icon: Filter,
    title: "Filtros inteligentes",
    description:
      "Encuentra rápidamente lo que buscas con filtros avanzados. Por fecha, prioridad, etiqueta o estado de completado.",
  },
  {
    icon: Shield,
    title: "Seguridad y privacidad",
    description:
      "Tus datos están protegidos con encriptación de extremo a extremo. Cumplimos con GDPR y estándares internacionales.",
  },
  {
    icon: Zap,
    title: "Integraciones",
    description:
      "Conecta con tus herramientas favoritas: Google Calendar, Slack, Trello, GitHub y más de 50 aplicaciones.",
  },
  {
    icon: CheckCircle,
    title: "Modo offline",
    description:
      "Trabaja sin conexión a internet. Todos los cambios se sincronizan automáticamente cuando vuelvas a estar online.",
  },
];

export default function FeaturesPage() {
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
                  Características completas para tu productividad
                </h1>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubre todas las herramientas que QuickStart pone a tu
                  disposición para organizar tu vida y maximizar tu eficiencia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">
                  Características principales
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800">
                  Todo lo que necesitas en un solo lugar
                </h2>
              </div>
            </div>

            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 xl:grid-cols-3">
              {coreFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Features */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">
                  Características avanzadas
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-blue-800">
                  Herramientas profesionales
                </h2>
              </div>
            </div>

            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 xl:grid-cols-3">
              {advancedFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} variant="white" />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
          <div className="container px-4 md:px-6 text-center">
            <div className="mx-auto max-w-3xl space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                ¿Listo para ser más productivo?
              </h2>
              <p className="text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Prueba todas estas características gratis durante 14 días. No
                necesitas tarjeta de crédito.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center pt-4">
                <Link to="/pricing" id="precio">
                  <Button
                    size="lg"
                    variant="black"
                    aria-label="Comenzar prueba gratuita de 14 días"
                  >
                    Comenzar prueba gratuita
                  </Button>
                </Link>
                <Link to="/contact" id="contacto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-blue-700"
                    aria-label="Ver demostración del producto"
                  >
                    Ver demostración
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
