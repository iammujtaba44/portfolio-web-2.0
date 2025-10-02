export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
  country: string;
  roleType: string;
  roleTypeDisplayName: string;
  startDate?: Date;
  endDate?: Date;
  current?: boolean;
}

export interface ApiExperienceResponse {
  _id: string;
  companyName: string;
  country: string;
  duration: string;
  position: string;
  description: string[];
  technologies: string[];
  roleType: string;
  roleTypeDisplayName: string;
}

export interface ApiExperiencesResponse {
  success: boolean;
  date: ApiExperienceResponse[];
}

export interface ExperienceRepository {
  getAllExperiences(): Experience[];
  getCurrentExperience(): Experience | undefined;
  getExperiencesByCompany(company: string): Experience[];
  getExperienceById(id: string): Experience | undefined;
}
