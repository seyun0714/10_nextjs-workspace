// Service Layer - Spring Boot Rest API 1 : 1 통신 함수 (순수 통신)

import { LoginRequest, LoginResponse } from '@/features/auth/types';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const login = async (user: LoginRequest): Promise<LoginResponse> => {
  const response = await fetch(`${BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData?.message || 'Login 실패');
  }
  const data = await response.json();
  return data;
};

export { login };
