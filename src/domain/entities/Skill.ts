import { LucideIcon } from "lucide-react";

export type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

export interface TechStack {
  name: string;
  icon: string;
  proficiency: number;
}

export interface SkillCategory {
  id: string;
  name: string;
  type: string;
  stacks: TechStack[];
}

export interface Skill {
  id: string;
  name: string;
  icon: LucideIcon;
  level: SkillLevel;
  category: string;
  proficiency?: number;
}

export interface ApiTechStackResponse {
  success: boolean;
  data: SkillCategory[];
}

export interface SkillRepository {
  getAllSkills(): Skill[];
  getSkillsByCategory(category: string): Skill[];
  getSkillsByLevel(level: SkillLevel): Skill[];
  getTechStack(): Promise<SkillCategory[]>;
}
