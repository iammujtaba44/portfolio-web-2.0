import { Code, Lightbulb, Target, Users } from "lucide-react";
import { motion } from "framer-motion";

const aboutPoints = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Passionate about creating end-to-end solutions",
  },
  {
    icon: Lightbulb,
    title: "Innovation Focused",
    description: "Always exploring new technologies and methodologies",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Committed to delivering exceptional results",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Thrives in collaborative environments",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function AboutPointsComponent() {
  return (
    <>
      {aboutPoints.map((point, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            y: -5,
            transition: { duration: 0.2 },
          }}
          className="group p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
        >
          <div className="flex items-start gap-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
              <point.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                {point.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {point.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
}
