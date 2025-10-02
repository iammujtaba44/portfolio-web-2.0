import { useState, useEffect } from "react";
import { Experience } from "../domain/entities/Experience";
import { ExperienceRepository } from "../data/repositories/ExperienceRepository";

const experienceRepository = new ExperienceRepository();

export function useExperienceDetail(id: string) {
  const [experience, setExperience] = useState<Experience | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadExperience = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // First try to load all experiences if not already loaded
        await experienceRepository.loadExperiences();

        // Then get the specific experience by ID
        const foundExperience = experienceRepository.getExperienceById(id);

        if (foundExperience) {
          setExperience(foundExperience);
        } else {
          setError("Experience not found");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      loadExperience();
    }
  }, [id]);

  return { experience, isLoading, error };
}
