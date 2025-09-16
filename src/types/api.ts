export interface ApiError {
  message: string;
  code?: string;
  statusCode: number;
  details?: Record<string, any>;
}

export interface RequestConfig {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  headers?: Record<string, string>;
  body?: any;
  params?: Record<string, string | number | boolean>;
}

export interface ApiClient {
  get: <T>(url: string, config?: Omit<RequestConfig, "method">) => Promise<T>;
  post: <T>(url: string, data?: any, config?: Omit<RequestConfig, "method" | "body">) => Promise<T>;
  put: <T>(url: string, data?: any, config?: Omit<RequestConfig, "method" | "body">) => Promise<T>;
  delete: <T>(url: string, config?: Omit<RequestConfig, "method">) => Promise<T>;
  patch: <T>(url: string, data?: any, config?: Omit<RequestConfig, "method" | "body">) => Promise<T>;
}

export interface CacheConfig {
  ttl?: number; // Time to live in seconds
  key?: string;
  tags?: string[];
}
