export interface AppLink {
  type:
    | "mobile_app_app_store"
    | "mobile_app_play_store"
    | "web_app"
    | "github"
    | "api";
  url: string;
}

export interface Project {
  id: string;
  companyName: string;
  projectName: string;
  projectType: "product" | "open_source";
  projectTypeDisplayName: string;
  description: string;
  imageUrl: string;
  appLinks: AppLink[];
}

export interface ProjectRepository {
  getAllProjects(): Promise<Project[]>;
  getFeaturedProjects(): Promise<Project[]>;
  getProjectById(id: string): Promise<Project | undefined>;
}
