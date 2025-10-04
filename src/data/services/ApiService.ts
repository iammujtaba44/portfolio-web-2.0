const API_BASE_URL = process.env.API_BASE_URL;

export class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL || "") {
    this.baseUrl = baseUrl;
  }

  async get<T>(endpoint: string): Promise<T> {
    try {
      const fullUrl = `${this.baseUrl}${endpoint}`;

      const response = await fetch(fullUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`API Error for ${endpoint}:`, error);
      throw error;
    }
  }

  async post<T>(endpoint: string, data: unknown): Promise<T> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error(`API Error for ${endpoint}:`, error);
      throw error;
    }
  }
}

export const apiService = new ApiService();
