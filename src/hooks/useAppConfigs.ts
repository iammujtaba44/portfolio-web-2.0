"use client";

import { useState, useEffect } from "react";
import { appConfigApiClient } from "@/data/services/AppConfigApiClient";
import { Stats, Bio } from "@/domain/entities/AppConfig";

export const useAppConfigs = () => {
  const [stats, setStats] = useState<Stats | null>(null);
  const [bio, setBio] = useState<Bio | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [statsData, bioData] = await Promise.all([
          appConfigApiClient.getStats(),
          appConfigApiClient.getBio(),
        ]);

        setStats(statsData);
        setBio(bioData);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch app configs"
        );
        console.error("Error fetching app configs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    stats,
    bio,
    loading,
    error,
  };
};
