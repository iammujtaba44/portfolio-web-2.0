import { Project } from "../../domain/entities/Project";
import { apiService, ApiService } from "./ApiService";

export interface ProjectApiResponse {
  success: boolean;
  data: Project[];
}

export class ProjectApiClient {
  private apiService: ApiService;

  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }

  async getAllProjects(): Promise<Project[]> {
    try {
      const response = await this.apiService.get<ProjectApiResponse>(
        "/projects"
      );

      if (!response.success) {
        throw new Error(`HTTP error! status: ${response.success}`);
      }

      const result: ProjectApiResponse = response;

      if (!result.success) {
        throw new Error("API returned unsuccessful response");
      }

      return result.data;
    } catch (error) {
      console.error("API Error for /api/projects:", error);
      throw error;
    }
  }
}

export const projectApiClient = new ProjectApiClient(apiService);
