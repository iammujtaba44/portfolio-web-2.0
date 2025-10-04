import { ApiTechStackResponse } from "../../domain/entities/Skill";

export class TechStackApiClient {
  async getTechStack(): Promise<ApiTechStackResponse> {
    try {
      const response = await fetch("/api/tech-stack", {
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
      console.error("API Error for /api/tech-stack:", error);
      throw error;
    }
  }
}

export const techStackApiClient = new TechStackApiClient();
