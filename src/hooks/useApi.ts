"use client";

import { useState, useCallback } from "react";
import { ApiResponse, ApiError } from "@/types/api";

interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: ApiError | null;
}

export function useApi<T = unknown>() {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const execute = useCallback(async (
    apiCall: () => Promise<ApiResponse<T>>
  ): Promise<T | null> => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      const response = await apiCall();
      
      if (response.success && response.data) {
        setState({
          data: response.data,
          loading: false,
          error: null,
        });
        return response.data;
      } else {
        const error = new ApiError(
          response.message || "An error occurred",
          undefined,
          400
        );
        setState({
          data: null,
          loading: false,
          error,
        });
        return null;
      }
    } catch (error) {
      const apiError = new ApiError(
        error instanceof Error ? error.message : "An unexpected error occurred",
        undefined,
        500
      );
      setState({
        data: null,
        loading: false,
        error: apiError,
      });
      return null;
    }
  }, []);

  const reset = useCallback(() => {
    setState({
      data: null,
      loading: false,
      error: null,
    });
  }, []);

  return {
    ...state,
    execute,
    reset,
  };
}
