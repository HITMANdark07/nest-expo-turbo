// Define shared utility functions that will be used by both frontend and backend

/**
 * Format a date to a string
 * @param date Date to format
 * @returns Formatted date string
 */
export const formatDate = (date: Date): string => {
  return date.toISOString();
};

/**
 * Generate a random ID
 * @returns Random ID string
 */
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15);
};

/**
 * Check if a string is empty
 * @param str String to check
 * @returns True if string is empty
 */
export const isEmpty = (str: string): boolean => {
  return !str || str.trim().length === 0;
};
