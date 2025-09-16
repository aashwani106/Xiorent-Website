export const APP_CONFIG = {
  name: "XioRent Technologies",
  description: "Transforming ideas into scalable digital products",
  version: "1.0.0",
  author: "XioRent Technologies",
} as const;

export const API_ENDPOINTS = {
  auth: {
    login: "/api/auth/login",
    register: "/api/auth/register",
    logout: "/api/auth/logout",
    refresh: "/api/auth/refresh",
  },
  users: {
    profile: "/api/users/profile",
    update: "/api/users/update",
  },
  projects: {
    list: "/api/projects",
    create: "/api/projects",
    update: "/api/projects",
    delete: "/api/projects",
  },
  services: {
    list: "/api/services",
    details: "/api/services",
  },
} as const;

export const ROUTES = {
  home: "/",
  about: "/about",
  contact: "/contact",
  services: "/services",
  projects: "/projects",
  portfolio: "/portfolio",
  blog: "/blog",
  careers: "/careers",
} as const;

export const VALIDATION_RULES = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\+?[\d\s\-\(\)]+$/,
  password: {
    minLength: 8,
    requireUppercase: true,
    requireLowercase: true,
    requireNumbers: true,
    requireSpecialChars: true,
  },
} as const;
