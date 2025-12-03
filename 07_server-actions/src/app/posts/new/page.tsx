'use client';

import { useActionState } from 'react';
import PostSubmitButton from '../(components)/PostSubmitButton';
import { createPostAction } from '../action';

export default function PostCreatePage() {
  // useActionState(액션함수, 초기상태)
  const [state, formAction, isPending] = useActionState(createPostAction, {
    success: false,
    message: '',
    errors: {},
  }); // 반환 값: [상태, 액션함수]

  return (
    <div className="mt-4 p-4  border rounded">
      <h2 className="text-xl font-semibold">게시글 등록</h2>
      <form className="flex flex-col gap-2 mt-4" action={formAction}>
        <input
          type="text"
          name="title"
          placeholder="제목"
          className="border p-2 rounded"
        />
        {state.errors?.title && (
          <div className="text-md text-red-500 px-3 mt-1">
            {state.errors?.title}
          </div>
        )}
        <input
          type="text"
          name="author"
          placeholder="작성자명"
          className="border p-2 rounded"
        />
        {state.errors?.author && (
          <div className="text-md text-red-500 px-3 mt-1">
            {state.errors?.author}
          </div>
        )}
        <textarea
          name="content"
          placeholder="내용"
          className="border p-2 rounded"
        />
        {state.errors?.content && (
          <div className="text-md text-red-500 px-3 mt-1">
            {state.errors?.content}
          </div>
        )}
        {!state.success && state.message && (
          <div className="border border-red-500 text-red-500 bg-red-50 rounded p-4">
            {state.message}
          </div>
        )}
        <PostSubmitButton text={'등록'} />
      </form>
    </div>
  );
}
