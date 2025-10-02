import { Theme, ThemeService as IThemeService } from "../entities/Theme";

export class ThemeService implements IThemeService {
  private theme: Theme = "light";
  private mounted: boolean = false;

  getTheme(): Theme {
    return this.theme;
  }

  setTheme(theme: Theme): void {
    this.theme = theme;
    this.persistTheme(theme);
    this.applyTheme(theme);
  }

  toggleTheme(): void {
    this.setTheme(this.theme === "light" ? "dark" : "light");
  }

  getSystemTheme(): Theme {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    return "light";
  }

  isMounted(): boolean {
    return this.mounted;
  }

  setMounted(mounted: boolean): void {
    this.mounted = mounted;
  }

  initializeTheme(): void {
    if (typeof window === "undefined") return;

    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      this.theme = savedTheme;
    } else {
      this.theme = this.getSystemTheme();
    }
    this.setMounted(true);
    this.applyTheme(this.theme);
  }

  private persistTheme(theme: Theme): void {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }

  private applyTheme(theme: Theme): void {
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", theme === "dark");
    }
  }
}
