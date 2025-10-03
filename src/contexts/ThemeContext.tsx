"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { ThemeService } from "../domain/services/ThemeService";
import { Theme } from "../domain/entities/Theme";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const themeService = new ThemeService();

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    themeService.initializeTheme();
    setTheme(themeService.getTheme());
  }, []);

  const toggleTheme = () => {
    themeService.toggleTheme();
    setTheme(themeService.getTheme());
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
