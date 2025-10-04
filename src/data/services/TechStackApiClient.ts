import { ApiTechStackResponse } from "../../domain/entities/Skill";
import { ApiService, apiService } from "./ApiService";

export class TechStackApiClient {
  private apiService: ApiService;

  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }

  async getTechStack(): Promise<ApiTechStackResponse> {
    return this.apiService.get<ApiTechStackResponse>("/tech-stack");
  }
}

export const techStackApiClient = new TechStackApiClient(apiService);
