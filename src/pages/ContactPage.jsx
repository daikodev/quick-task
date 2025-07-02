import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/contact/ContactForm";
import {
  Facebook,
  Twitter,
  Instagram,
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export default function ContactPage() {
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
                  Contacto
                </h1>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estamos aquí para ayudarte. Ponte en contacto con nosotros y
                  te responderemos lo antes posible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold text-blue-800 mb-6">
                  Envíanos un mensaje
                </h2>
                <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                  <ContactForm />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-blue-800 mb-6">
                  Información de contacto
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">Dirección</h3>
                      <p className="text-gray-600">
                        Calle Innovación, 123
                        <br />
                        28001 Madrid, España
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">Teléfono</h3>
                      <p className="text-gray-600">+34 910 123 456</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <p className="text-gray-600">info@quickstart.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">
                        Horario de atención
                      </h3>
                      <p className="text-gray-600">
                        Lunes - Viernes: 9:00 - 18:00
                        <br />
                        Sábado - Domingo: Cerrado
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 bg-gray-100 rounded-lg p-6">
                  <h3 className="font-medium text-gray-900 mb-2">Síguenos</h3>
                  <div className="flex space-x-4">
                    <a id="twitter"
                      href="#"
                      className="text-gray-600 hover:text-blue-600 flex items-center space-x-1"
                    >
                      <Twitter className="h-5 w-5" />
                      <span className="mt-">Twitter</span>
                    </a>
                    <a id="facebook"
                      href="https://www.facebook.com/people/QuickTask/61575548355064/"
                      className="text-gray-600 hover:text-blue-600 flex items-center space-x-1"
                    >
                      <Facebook className="h-5 w-5" />
                      <span className="mt-">Facebook</span>
                    </a>
                    <a id="instagram"
                      href="#"
                      className="text-gray-600 hover:text-blue-600 flex items-center space-x-1"
                    >
                      <Instagram className="h-5 w-5" />
                      <span className="mt-">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
