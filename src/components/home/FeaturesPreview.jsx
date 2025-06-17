import { Link } from "react-router-dom";
import { CheckCircle, Clock, ListTodo, Bell, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const features = [
  {
    icon: ListTodo,
    title: "Gestión intuitiva",
    description: "Organiza tus tareas de manera visual y sencilla.",
  },
  {
    icon: Bell,
    title: "Recordatorios inteligentes",
    description: "Nunca olvides una tarea importante.",
  },
  {
    icon: Clock,
    title: "Seguimiento de tiempo",
    description: "Controla cuánto tiempo dedicas a cada tarea.",
  },
  {
    icon: CheckCircle,
    title: "Sincronización",
    description: "Accede desde cualquier dispositivo.",
  },
];

export default function FeaturesPreview() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-700">
              Características principales
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800">
              Todo lo que necesitas en un solo lugar
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Descubre las herramientas que harán tu día más productivo.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 p-6 shadow-sm"
              >
                <IconComponent className="h-12 w-12 text-blue-600" />
                <h3 className="text-xl font-bold text-blue-800">
                  {feature.title}
                </h3>
                <p className="text-center text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <Link to="/features">
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              Ver todas las características
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
