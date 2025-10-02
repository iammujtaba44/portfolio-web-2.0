import {
  Experience,
  ApiExperienceResponse,
} from "../../domain/entities/Experience";

export class ExperienceMapper {
  static fromApiResponse(apiExperience: ApiExperienceResponse): Experience {
    // Parse duration to extract dates and determine if current
    const isCurrent = apiExperience.duration.includes("Present");

    // Extract start and end dates from duration string
    const dateRange = apiExperience.duration.split(" - ");
    const startDateStr = dateRange[0];
    const endDateStr = dateRange[1]?.split(" (")[0];

    let startDate: Date | undefined;
    let endDate: Date | undefined;

    try {
      // Parse start date (e.g., "Feb 2022", "Dec 2019")
      if (startDateStr) {
        startDate = new Date(startDateStr);
      }

      // Parse end date if not "Present"
      if (endDateStr && endDateStr !== "Present") {
        endDate = new Date(endDateStr);
      }
    } catch (error) {
      console.warn(
        `Failed to parse dates for experience ${apiExperience._id}:`,
        error
      );
    }

    return {
      id: apiExperience._id,
      company: apiExperience.companyName,
      position: apiExperience.position,
      duration: apiExperience.duration,
      description: apiExperience.description,
      technologies: apiExperience.technologies.filter((tech) => tech !== null), // Filter out null values
      country: apiExperience.country,
      roleType: apiExperience.roleType,
      roleTypeDisplayName: apiExperience.roleTypeDisplayName,
      startDate,
      endDate,
      current: isCurrent,
    };
  }

  static fromApiResponseList(
    apiExperiences: ApiExperienceResponse[]
  ): Experience[] {
    return apiExperiences.map((experience) => this.fromApiResponse(experience));
  }
}
