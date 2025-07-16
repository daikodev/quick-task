import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-blue-800">
                Organiza tus tareas de forma simple y eficiente
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                QuickStart te ayuda a gestionar tus tareas diarias, establecer
                recordatorios y aumentar tu productividad de manera intuitiva.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link to="/pricing" id="precio">
                <Button size="lg" variant="blue">
                  Comenzar gratis
                </Button>
              </Link>
              <Link to="/contact" id="contacto">
                <Button size="lg" variant="border">
                  Ver demostración
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
              <img
                src="/inicio.webp?height=600&width=400"
                width={400}
                height={600}
                alt="Vista previa de la aplicación QuickStart"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
