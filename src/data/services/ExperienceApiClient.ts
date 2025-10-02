import { ApiExperiencesResponse } from "../../domain/entities/Experience";

export class ExperienceApiClient {
  async getExperiences(): Promise<ApiExperiencesResponse> {
    try {
      const response = await fetch("/api/experiences", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("API Error for /api/experiences:", error);
      throw error;
    }
  }
}

export const experienceApiClient = new ExperienceApiClient();
