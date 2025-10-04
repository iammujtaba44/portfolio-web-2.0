import {
  Skill,
  SkillLevel,
  SkillRepository as ISkillRepository,
  SkillCategory,
} from "../../domain/entities/Skill";
import { techStackApiClient } from "../services/TechStackApiClient";
import {
  Smartphone,
  Code,
  Database,
  Cloud,
  Palette,
  GitBranch,
  Server,
  Globe,
  Settings,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

// Icon mapping for tech stacks
const iconMap: { [key: string]: LucideIcon } = {
  // Mobile Development
  Flutter: Smartphone,
  Android: Smartphone,
  IOS: Smartphone,
  Dart: Code,
  Kotlin: Code,
  Swift: Code,

  // CI/CD
  Codemagic: Settings,
  Fastlane: Settings,
  "Github Actions": GitBranch,

  // Database
  Firebase: Database,
  Amplify: Cloud,
  MongoDB: Database,
  "P - SQL": Database,
  SQLite: Database,
  Hive: Database,
  "Secure Storage": Database,

  // Server Side
  "Nest JS": Server,
  "Java SB": Code,
  Restful: Server,
  "Rest API": Server,
  "Dart Frog": Server,
  ServerPod: Server,
  Pocketbase: Server,
  "Supabase (Baas)": Server,

  // UI/UX Design
  Figma: Palette,
  "Adobe XD": Palette,

  // Version Control
  Github: GitBranch,
  GitLab: GitBranch,
  Bitbucket: GitBranch,
  Jira: Settings,
  Linear: Settings,

  // Web Development
  "Flutter Web": Globe,
  Javascript: Code,
  HTML: Code,
  CSS: Code,
  NextJS: Globe,
};

export class SkillRepository implements ISkillRepository {
  private skills: Skill[] = [];
  private techStackData: SkillCategory[] = [];

  constructor() {
    this.loadTechStack();
  }

  private async loadTechStack() {
    try {
      this.techStackData = await this.getTechStack();
      this.skills = this.convertTechStackToSkills();
    } catch (error) {
      console.error("Failed to load tech stack:", error);
      // Fallback to empty array
      this.skills = [];
    }
  }

  private convertTechStackToSkills(): Skill[] {
    const skills: Skill[] = [];

    this.techStackData.forEach((category) => {
      category.stacks.forEach((stack) => {
        const proficiency = stack.proficiency;
        const level = this.convertProficiencyToLevel(proficiency);
        const icon = iconMap[stack.name] || Code;

        skills.push({
          id: `${category.id}-${stack.name}`,
          name: stack.name,
          icon: icon,
          level: level,
          category: category.name,
          proficiency: proficiency,
        });
      });
    });

    return skills;
  }

  private convertProficiencyToLevel(proficiency: number): SkillLevel {
    if (proficiency >= 0.9) return "Expert";
    if (proficiency >= 0.8) return "Advanced";
    if (proficiency >= 0.6) return "Intermediate";
    return "Beginner";
  }

  async getTechStack(): Promise<SkillCategory[]> {
    const response = await techStackApiClient.getTechStack();
    return response.data;
  }

  getAllSkills(): Skill[] {
    return this.skills;
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter((skill) => skill.category === category);
  }

  getSkillsByLevel(level: SkillLevel): Skill[] {
    return this.skills.filter((skill) => skill.level === level);
  }

  getTechStackCategories(): SkillCategory[] {
    return this.techStackData;
  }
}
