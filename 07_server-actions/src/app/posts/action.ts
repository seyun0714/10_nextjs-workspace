'use server';

import { revalidatePath } from 'next/cache';
import { createPost } from './services';
import { redirect } from 'next/navigation';

// 서버 액션용 함수
export async function createPostAction(formData: FormData) {
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
  await createPost(payload);

  // 게시글 등록이 끝난 후 동작할 내용
  formData.set('title', '');
  formData.set('content', '');
  formData.set('author', '');

  // 게시글 목록 url 재요청 후 이동
  revalidatePath('/posts');
  redirect('/posts');
}
