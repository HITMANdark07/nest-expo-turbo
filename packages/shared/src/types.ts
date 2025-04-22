// Define shared types that will be used by both frontend and backend

// Example of a Todo type
export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}

// Example of a User type
export interface User {
  id: string;
  username: string;
  email: string;
}

// Example of API response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  total: number;
  page: number;
  limit: number;
}
