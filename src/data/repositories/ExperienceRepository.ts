import {
  Experience,
  ExperienceRepository as IExperienceRepository,
} from "../../domain/entities/Experience";
import { experienceApiClient } from "../services/ExperienceApiClient";
import { ExperienceMapper } from "../mappers/ExperienceMapper";

export class ExperienceRepository implements IExperienceRepository {
  private experiences: Experience[] = [];
  private isLoading: boolean = false;
  private error: string | null = null;

  async loadExperiences(): Promise<void> {
    if (this.isLoading) return;

    this.isLoading = true;
    this.error = null;

    try {
      const response = await experienceApiClient.getExperiences();
      if (response.success) {
        this.experiences = ExperienceMapper.fromApiResponseList(response.date);
        // Sort by start date (most recent first)
        this.experiences.sort((a, b) => {
          if (!a.startDate || !b.startDate) return 0;
          return b.startDate.getTime() - a.startDate.getTime();
        });
      } else {
        throw new Error("Failed to fetch experiences");
      }
    } catch (error) {
      this.error = error instanceof Error ? error.message : "Unknown error";
      console.error("Error loading experiences:", error);

      // Fallback to static data if API fails
      this.experiences = this.getFallbackExperiences();
      this.error = null; // Clear error since we have fallback data
    } finally {
      this.isLoading = false;
    }
  }

  private getFallbackExperiences(): Experience[] {
    return [
      {
        id: "fallback-1",
        company: "Eyewa",
        position: "Senior Software Engineer (Mobile)",
        duration: "Feb 2022 - Present",
        description: [
          "Leading mobile app development team",
          "Architecting scalable solutions for enterprise clients",
          "Optimizing application performance and maintainability",
        ],
        technologies: ["Flutter", "Dart", "iOS", "Android", "Firebase"],
        country: "United Arab Emirates",
        roleType: "full_time",
        roleTypeDisplayName: "Full Time",
        current: true,
        startDate: new Date("2022-02-01"),
      },
      {
        id: "fallback-2",
        company: "ePlanet Communications Inc",
        position: "Software Engineer (Mobile)",
        duration: "Dec 2019 - Jan 2022",
        description: [
          "Developed cross-platform mobile applications",
          "Optimized application performance and scalability",
          "Implemented clean architecture patterns",
        ],
        technologies: ["Flutter", "Dart", "Kotlin", "Swift", "Firebase"],
        country: "Pakistan",
        roleType: "full_time",
        roleTypeDisplayName: "Full Time",
        current: false,
        startDate: new Date("2019-12-01"),
        endDate: new Date("2022-01-01"),
      },
    ];
  }

  getAllExperiences(): Experience[] {
    return this.experiences;
  }

  getCurrentExperience(): Experience | undefined {
    return this.experiences.find((exp) => exp.current);
  }

  getExperiencesByCompany(company: string): Experience[] {
    return this.experiences.filter((exp) => exp.company === company);
  }

  getExperienceById(id: string): Experience | undefined {
    return this.experiences.find((exp) => exp.id === id);
  }

  getLoadingState(): { isLoading: boolean; error: string | null } {
    return { isLoading: this.isLoading, error: this.error };
  }
}
