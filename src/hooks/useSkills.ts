import { useMemo } from "react";
import { SkillRepository } from "../data/repositories/SkillRepository";
import { Skill, SkillLevel } from "../domain/entities/Skill";

const skillRepository = new SkillRepository();

export function useSkills() {
  const skills = useMemo(() => skillRepository.getAllSkills(), []);

  const getSkillsByCategory = (category: string): Skill[] => {
    return skillRepository.getSkillsByCategory(category);
  };

  const getSkillsByLevel = (level: SkillLevel): Skill[] => {
    return skillRepository.getSkillsByLevel(level);
  };

  return {
    skills,
    getSkillsByCategory,
    getSkillsByLevel,
  };
}
