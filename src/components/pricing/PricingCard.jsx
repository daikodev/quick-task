import React from "react";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingCard({ plan, isPopular = false }) {
  const {
    name,
    price,
    period,
    description,
    features,
    buttonText,
    buttonVariant = "default",
  } = plan;

  return (
    <div
      className={`rounded-lg border bg-white p-8 shadow-sm relative ${
        isPopular ? "border-2 border-blue-600 shadow-lg" : "border-gray-200"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
            Más popular
          </span>
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-blue-800">{name}</h3>
        <div className="mt-4">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-gray-500 ml-2">{period}</span>
        </div>
        <p className="text-gray-500 mt-2">{description}</p>
      </div>
      <ul className="mb-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckCircle className="mr-3 h-5 w-5 text-blue-600" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        className={`w-full ${
          buttonVariant === "default" ? "bg-blue-600 hover:bg-blue-700" : ""
        }`}
        variant={buttonVariant}
      >
        {buttonText}
      </Button>
    </div>
  );
}
