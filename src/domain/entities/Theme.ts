export type Theme = "light" | "dark";

export interface ThemeState {
  theme: Theme;
  mounted: boolean;
}

export interface ThemeService {
  getTheme(): Theme;
  setTheme(theme: Theme): void;
  toggleTheme(): void;
  getSystemTheme(): Theme;
  isMounted(): boolean;
  setMounted(mounted: boolean): void;
}
