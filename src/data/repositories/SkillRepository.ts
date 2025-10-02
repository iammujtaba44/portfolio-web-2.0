import {
  Skill,
  SkillLevel,
  SkillRepository as ISkillRepository,
} from "../../domain/entities/Skill";
import { Smartphone, Code, Database, Cloud } from "lucide-react";

export class SkillRepository implements ISkillRepository {
  private skills: Skill[] = [
    {
      id: "1",
      name: "Flutter",
      icon: Smartphone,
      level: "Expert",
      category: "Mobile",
    },
    {
      id: "2",
      name: "Dart",
      icon: Code,
      level: "Expert",
      category: "Programming",
    },
    {
      id: "3",
      name: "Firebase",
      icon: Database,
      level: "Advanced",
      category: "Backend",
    },
    {
      id: "4",
      name: "AWS",
      icon: Cloud,
      level: "Intermediate",
      category: "Cloud",
    },
    {
      id: "5",
      name: "Kotlin",
      icon: Code,
      level: "Advanced",
      category: "Programming",
    },
    {
      id: "6",
      name: "Next.js",
      icon: Code,
      level: "Intermediate",
      category: "Web",
    },
  ];

  getAllSkills(): Skill[] {
    return this.skills;
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter((skill) => skill.category === category);
  }

  getSkillsByLevel(level: SkillLevel): Skill[] {
    return this.skills.filter((skill) => skill.level === level);
  }
}
