import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function CtaSection() {
  function enviarEvento(e) {
    e.preventDefault();

    gtag("event", "link", {
      debug_mode: true,
      event_category: "Ventas",
      event_label: "VerPrecios",
    });

    setTimeout(function () {
      navigate("/pricing");
    }, 300);
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="mx-auto max-w-3xl space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
            Comienza tu viaje hacia la productividad
          </h2>
          <p className="text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Únete a miles de usuarios que ya han transformado su forma de
            trabajar.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center pt-4">
            <Link to="/pricing" onClick={enviarEvento(event)}>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-blue-700"
              >
                Ver precios
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
