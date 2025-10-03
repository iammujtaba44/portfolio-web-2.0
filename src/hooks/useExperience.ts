import { useState, useEffect, useMemo } from "react";
import { ExperienceRepository } from "../data/repositories/ExperienceRepository";
import { Experience } from "../domain/entities/Experience";

const experienceRepository = new ExperienceRepository();

export function useExperience() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadExperiences = async () => {
      try {
        await experienceRepository.loadExperiences();
        const { isLoading, error } = experienceRepository.getLoadingState();
        setIsLoading(isLoading);
        setError(error);
        setExperiences(experienceRepository.getAllExperiences());
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
        setIsLoading(false);
      }
    };

    loadExperiences();
  }, []);

  const currentExperience = useMemo(
    () => experienceRepository.getCurrentExperience(),
    []
  );

  const getExperiencesByCompany = (company: string): Experience[] => {
    return experienceRepository.getExperiencesByCompany(company);
  };

  return {
    experiences,
    currentExperience,
    getExperiencesByCompany,
    isLoading,
    error,
  };
}
