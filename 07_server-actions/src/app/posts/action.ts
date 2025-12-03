'use server';

import { revalidatePath } from 'next/cache';
import { createPost, deletePost, updatePost } from './services';
import { redirect } from 'next/navigation';
import { resolve } from 'path';

type ActionState = {
  success: boolean;
  message?: string;
  errors?: Record<string, string>;
};

// 서버 액션용 함수
export async function createPostAction(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const author = formData.get('author') as string;

  const errors: Record<string, string> = {};
  if (title.length >= 10) {
    errors.title = '제목은 10자 이하여야 합니다.';
  }
  if (content.length > 100) {
    errors.content = '내용은 100자 이하여야 합니다.';
  }
  if (!author) {
    errors.author = '작성자명은 필수 입력 필드입니다.';
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: '유효성 검사 실패',
      errors: errors,
    };
  }

  // 데이터 가공
  const payload = {
    title,
    content,
    author,
  };

  // API 요청
  try {
    await createPost(payload);
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: '데이터 저장 중에 오류가 발생하였습니다.',
    };
  }

  // 게시글 목록 url 재요청 후 이동
  revalidatePath('/posts');
  redirect('/posts');

  // 타입 맞추기 용
  return {
    success: true,
  };
}

export async function updatePostAction(id: string, formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const author = formData.get('author') as string;

  // 유효성 검사
  if (!title || !content || !author) {
    alert('모든 필드를 입력해주세요.');
    return;
  }

  // 데이터 가공
  const payload = {
    title,
    content,
    author,
  };

  // API 요청
  await updatePost(id, payload);

  // 게시글 등록이 끝난 후 동작할 내용
  formData.set('title', '');
  formData.set('content', '');
  formData.set('author', '');

  // 게시글 목록 url 재요청 후 이동
  // 목록 페이지 캐시도 갱신해야함
  revalidatePath('/posts');
  revalidatePath(`/posts/${id}`);
  redirect(`/posts/${id}`);
}

export async function deletePostAction(id: string) {
  await deletePost(id);

  revalidatePath('/posts');
  redirect('/posts');
}
