import { Project } from "../../domain/entities/Project";

export interface ProjectApiResponse {
  success: boolean;
  data: Project[];
}

export class ProjectApiClient {
  private baseUrl: string;

  constructor(baseUrl: string = "") {
    this.baseUrl = baseUrl;
  }

  async getAllProjects(): Promise<Project[]> {
    try {
      // Use relative URL for local API route
      const apiUrl = this.baseUrl
        ? `${this.baseUrl}/api/projects`
        : "/api/projects";
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Failed to fetch projects: ${response.statusText}`);
      }

      const result: ProjectApiResponse = await response.json();

      if (!result.success) {
        throw new Error("API returned unsuccessful response");
      }

      return result.data;
    } catch (error) {
      console.error("Error fetching projects:", error);
      throw error;
    }
  }
}
