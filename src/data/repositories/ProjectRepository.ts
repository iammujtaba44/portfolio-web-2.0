import {
  Project,
  ProjectRepository as IProjectRepository,
} from "../../domain/entities/Project";
import { ProjectApiClient } from "../services/ProjectApiClient";

export class ProjectRepository implements IProjectRepository {
  private apiClient: ProjectApiClient;
  private projects: Project[] = [];
  private isLoaded = false;

  constructor() {
    this.apiClient = new ProjectApiClient();
  }

  private async ensureProjectsLoaded(): Promise<void> {
    if (!this.isLoaded) {
      try {
        this.projects = await this.apiClient.getAllProjects();
        this.isLoaded = true;
      } catch (error) {
        console.error(
          "Failed to load projects from API, using empty array:",
          error
        );
        this.projects = [];
      }
    }
  }

  async getAllProjects(): Promise<Project[]> {
    await this.ensureProjectsLoaded();
    return this.projects;
  }

  async getFeaturedProjects(): Promise<Project[]> {
    await this.ensureProjectsLoaded();
    // For now, return all projects as featured since the API doesn't have a featured flag
    // You can modify this logic based on your requirements
    return this.projects;
  }

  async getProjectById(id: string): Promise<Project | undefined> {
    await this.ensureProjectsLoaded();
    return this.projects.find((project) => project.id === id);
  }
}
