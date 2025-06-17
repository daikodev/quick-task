import { Link } from "react-router-dom";
import { CheckSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
        <div className="flex items-center gap-2">
          <CheckSquare className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold text-blue-600">QuickStart</span>
        </div>
        <p className="text-center text-sm text-gray-500 md:text-left">
          © {new Date().getFullYear()} QuickStart. Todos los derechos
          reservados.
        </p>
        <div className="flex gap-4">
          <Link
            to="/terms"
            className="text-sm text-gray-500 hover:text-blue-600"
          >
            Términos
          </Link>
          <Link
            to="/privacy"
            className="text-sm text-gray-500 hover:text-blue-600"
          >
            Privacidad
          </Link>
          <Link
            to="/contact"
            className="text-sm text-gray-500 hover:text-blue-600"
          >
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
}
