import { useState, useEffect } from "react";
import { SkillRepository } from "../data/repositories/SkillRepository";
import { Skill, SkillLevel, SkillCategory } from "../domain/entities/Skill";

const skillRepository = new SkillRepository();

export function useSkills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [techStackCategories, setTechStackCategories] = useState<
    SkillCategory[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        setLoading(true);
        setError(null);

        // Load tech stack data
        const categories = await skillRepository.getTechStack();
        setTechStackCategories(categories);

        // Get converted skills
        const allSkills = skillRepository.getAllSkills();
        setSkills(allSkills);
      } catch (err) {
        console.error("Failed to load skills:", err);
        setError("Failed to load skills");
      } finally {
        setLoading(false);
      }
    };

    loadSkills();
  }, []);

  const getSkillsByCategory = (category: string): Skill[] => {
    return skillRepository.getSkillsByCategory(category);
  };

  const getSkillsByLevel = (level: SkillLevel): Skill[] => {
    return skillRepository.getSkillsByLevel(level);
  };

  return {
    skills,
    techStackCategories,
    loading,
    error,
    getSkillsByCategory,
    getSkillsByLevel,
  };
}
