import { useState, useEffect } from "react";
import { ProjectRepository } from "../data/repositories/ProjectRepository";
import { Project } from "../domain/entities/Project";

const projectRepository = new ProjectRepository();

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        setError(null);

        const [allProjects, featured] = await Promise.all([
          projectRepository.getAllProjects(),
          projectRepository.getFeaturedProjects(),
        ]);

        setProjects(allProjects);
        setFeaturedProjects(featured);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load projects"
        );
        console.error("Error loading projects:", err);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const getProjectById = async (id: string): Promise<Project | undefined> => {
    try {
      return await projectRepository.getProjectById(id);
    } catch (err) {
      console.error("Error getting project by ID:", err);
      return undefined;
    }
  };

  return {
    projects,
    featuredProjects,
    getProjectById,
    loading,
    error,
  };
}
