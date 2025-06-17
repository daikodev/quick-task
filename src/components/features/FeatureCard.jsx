import React from "react";
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

export default function FeatureCard({
  icon: IconComponent,
  title,
  description,
  variant = "default",
}) {
  const bgClass = variant === "white" ? "bg-white" : "";

  return (
    <div
      className={`flex flex-col items-start space-y-4 rounded-lg border border-gray-200 p-6 shadow-sm ${bgClass}`}
    >
      <IconComponent className="h-12 w-12 text-blue-600" />
      <div>
        <h3 className="text-xl font-bold text-blue-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
