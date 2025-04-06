export interface ApiResponse<T> {
  status: number;
  data: T;
  success: boolean;
  message: string;
}
