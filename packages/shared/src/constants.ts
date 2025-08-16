// Define shared constants that will be used by both frontend and backend

// API endpoints
export const API = {
  BASE_URL: "http://localhost:3000", // Default fallback
  TODOS: "/todos",
  USERS: "/users",
};

// Pagination defaults
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
};

// Status codes
export const STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};
