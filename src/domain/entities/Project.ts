export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  imageUrl?: string;
  featured: boolean;
}

export interface ProjectRepository {
  getAllProjects(): Project[];
  getFeaturedProjects(): Project[];
  getProjectById(id: string): Project | undefined;
}
