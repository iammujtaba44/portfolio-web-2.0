import { LucideIcon } from "lucide-react";

export type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

export interface Skill {
  id: string;
  name: string;
  icon: LucideIcon;
  level: SkillLevel;
  category: string;
}

export interface SkillRepository {
  getAllSkills(): Skill[];
  getSkillsByCategory(category: string): Skill[];
  getSkillsByLevel(level: SkillLevel): Skill[];
}
