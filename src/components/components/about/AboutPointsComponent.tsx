import { Code, Lightbulb, Target, Users } from "lucide-react";

const aboutPoints = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "End-to-end solutions from mobile to backend",
  },
  {
    icon: Lightbulb,
    title: "Innovation Focused",
    description: "Always exploring new technologies and patterns",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Committed to delivering exceptional results",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Thrives in collaborative, cross-functional teams",
  },
];

export default function AboutPointsComponent() {
  return (
    <>
      {aboutPoints.map((point, index) => (
        <div
          key={index}
          className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0a0a0a] hover:border-gray-300 dark:hover:border-gray-600 transition-colors duration-200"
        >
          <point.icon className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-0.5">
              {point.title}
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              {point.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
