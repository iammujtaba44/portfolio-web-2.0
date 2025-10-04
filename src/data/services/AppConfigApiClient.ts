import { ApiService, apiService } from "./ApiService";
import { AppConfigsResponse, Stats, Bio } from "@/domain/entities/AppConfig";

export class AppConfigApiClient {
  private apiService: ApiService;

  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }

  async getAppConfigs(): Promise<AppConfigsResponse> {
    return this.apiService.get<AppConfigsResponse>("/app-configs");
  }

  async getStats(): Promise<Stats | null> {
    try {
      const response = await this.getAppConfigs();
      console.log("response", response);
      const statsConfig = response.data.find(
        (config) => config.key === "stats"
      );
      return statsConfig ? (statsConfig.value as Stats) : null;
    } catch (error) {
      console.error("Error fetching stats:", error);
      return null;
    }
  }

  async getBio(): Promise<Bio | null> {
    try {
      const response = await this.getAppConfigs();
      const bioConfig = response.data.find((config) => config.key === "bio");
      return bioConfig ? (bioConfig.value as Bio) : null;
    } catch (error) {
      console.error("Error fetching bio:", error);
      return null;
    }
  }
}

export const appConfigApiClient = new AppConfigApiClient(apiService);
