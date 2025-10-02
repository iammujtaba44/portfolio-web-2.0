import { useMemo } from "react";
import { ProjectRepository } from "../data/repositories/ProjectRepository";
import { Project } from "../domain/entities/Project";

const projectRepository = new ProjectRepository();

export function useProjects() {
  const projects = useMemo(() => projectRepository.getAllProjects(), []);
  const featuredProjects = useMemo(
    () => projectRepository.getFeaturedProjects(),
    []
  );

  const getProjectById = (id: string): Project | undefined => {
    return projectRepository.getProjectById(id);
  };

  return {
    projects,
    featuredProjects,
    getProjectById,
  };
}
