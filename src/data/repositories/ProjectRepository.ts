import {
  Project,
  ProjectRepository as IProjectRepository,
} from "../../domain/entities/Project";

export class ProjectRepository implements IProjectRepository {
  private projects: Project[] = [
    {
      id: "1",
      title: "E-Commerce Mobile App",
      description:
        "Full-stack Flutter app with Firebase backend, payment integration, and real-time notifications.",
      tech: ["Flutter", "Firebase", "Dart"],
      github: "https://github.com/mujtaba",
      demo: "https://demo.com",
      featured: true,
    },
    {
      id: "2",
      title: "Task Management System",
      description:
        "Cross-platform productivity app with offline support and team collaboration features.",
      tech: ["Flutter", "SQLite", "Provider"],
      github: "https://github.com/mujtaba",
      demo: "https://demo.com",
      featured: true,
    },
    {
      id: "3",
      title: "Weather Dashboard",
      description:
        "Beautiful weather app with location services and detailed forecasts using OpenWeather API.",
      tech: ["Flutter", "REST API", "Geolocation"],
      github: "https://github.com/mujtaba",
      demo: "https://demo.com",
      featured: true,
    },
  ];

  getAllProjects(): Project[] {
    return this.projects;
  }

  getFeaturedProjects(): Project[] {
    return this.projects.filter((project) => project.featured);
  }

  getProjectById(id: string): Project | undefined {
    return this.projects.find((project) => project.id === id);
  }
}
