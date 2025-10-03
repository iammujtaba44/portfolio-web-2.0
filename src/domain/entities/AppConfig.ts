export interface Stats {
  total_awards: string;
  total_clients: string;
  total_experience: string;
  total_projects: string;
}

export interface Bio {
  about: string;
  email: string;
  phone: string;
  projects_desc: string;
  repositories: string;
  tech_desc: string;
  title: string;
  long_desc: string;
}

export interface AppConfig {
  _id: string;
  key: string;
  value: Stats | Bio;
  isPublic: boolean;
  description: string;
}

export interface AppConfigsResponse {
  success: boolean;
  data: AppConfig[];
}
