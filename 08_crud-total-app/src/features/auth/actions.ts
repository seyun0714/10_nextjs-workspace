'use server';

type ActionState = {
  success: boolean;
  message?: string;
  errors?: Record<string, string>;
};

export const loginAction = async (
  prevState: ActionState,
  formData: FormData
) => {
  // 사용자 입력 값 formData 뽑기
  const email = formData.get('email');
  const password = formData.get('password');
  // 유효성 검증 => 유효한 값이 아닐 경우 { success: false, message: "~~~", errors: {}}
  // API 통신 => 통신 실패 {success: false, message: "~~~"}
};
