/**
 * Environment validation for the API app
 * Validates required environment variables and provides type-safe access
 */

export interface EnvConfig {
  // Database
  DATABASE_URL: string;
  DIRECT_URL: string;

  // API Configuration
  API_PORT: number;
  API_HOST: string;
  NODE_ENV: string;

  // JWT & Authentication
  JWT_SECRET: string;
  JWT_EXPIRES_IN: string;

  // Public URLs
  PUBLIC_API_URL: string;

  // Development
  DEBUG: boolean;
  LOG_LEVEL: string;
}

/**
 * Validate and load environment variables
 * @returns Validated environment configuration
 * @throws Error if required variables are missing
 */
export function validateEnv(): EnvConfig {
  const requiredVars = ['DATABASE_URL', 'JWT_SECRET'];

  const missing = requiredVars.filter((varName) => !process.env[varName]);

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}\n` +
        'Please check your .env file and ensure all required variables are set.',
    );
  }

  return {
    // Database
    DATABASE_URL: process.env.DATABASE_URL!,
    DIRECT_URL: process.env.DIRECT_URL || process.env.DATABASE_URL!,

    // API Configuration
    API_PORT: parseInt(process.env.API_PORT || '3000', 10),
    API_HOST: process.env.API_HOST || 'localhost',
    NODE_ENV: process.env.NODE_ENV || 'development',

    // JWT & Authentication
    JWT_SECRET: process.env.JWT_SECRET!,
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '7d',

    // Public URLs
    PUBLIC_API_URL:
      process.env.NEXT_PUBLIC_API_URL ||
      process.env.EXPO_PUBLIC_API_URL ||
      'http://localhost:3000',

    // Development
    DEBUG: process.env.DEBUG === 'true',
    LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  };
}

/**
 * Utility functions for environment checks
 */
export const envUtils = {
  isDevelopment: () => process.env.NODE_ENV === 'development',
  isProduction: () => process.env.NODE_ENV === 'production',
  isTest: () => process.env.NODE_ENV === 'test',
};
