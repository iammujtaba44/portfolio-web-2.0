import { ApiExperiencesResponse } from "../../domain/entities/Experience";
import { ApiService, apiService } from "./ApiService";

export class ExperienceApiClient {
  private apiService: ApiService;

  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }

  async getExperiences(): Promise<ApiExperiencesResponse> {
    return this.apiService.get<ApiExperiencesResponse>("/experiences");
  }
}

export const experienceApiClient = new ExperienceApiClient(apiService);
