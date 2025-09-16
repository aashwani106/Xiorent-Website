export class ApiError extends Error {
  public code?: string;
  public statusCode: number;
  public details?: Record<string, unknown>;

  constructor(message: string, code?: string, statusCode: number = 500, details?: Record<string, unknown>) {
    super(message);
    this.name = 'ApiError';
    this.code = code;
    this.statusCode = statusCode;
    this.details = details;
  }
}

export interface RequestConfig {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers?: Record<string, string>;
  body?: unknown;
  params?: Record<string, string | number | boolean>;
}

export interface ApiClient {
  get: <T>(url: string, config?: Omit<RequestConfig, "method">) => Promise<T>;
  post: <T>(url: string, data?: unknown, config?: Omit<RequestConfig, "method" | "body">) => Promise<T>;
  put: <T>(url: string, data?: unknown, config?: Omit<RequestConfig, "method" | "body">) => Promise<T>;
  delete: <T>(url: string, config?: Omit<RequestConfig, "method">) => Promise<T>;
  patch: <T>(url: string, data?: unknown, config?: Omit<RequestConfig, "method" | "body">) => Promise<T>;
}

export interface CacheConfig {
  ttl?: number; // Time to live in seconds
  key?: string;
  tags?: string[];
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}
