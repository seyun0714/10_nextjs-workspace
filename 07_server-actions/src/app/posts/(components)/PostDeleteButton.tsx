'use client';

import { useTransition } from 'react';
import { deletePostAction } from '../action';

interface PostDeleteButtonProps {
  id: string;
}

export default function PostDeleteButton({ id }: PostDeleteButtonProps) {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (!window.confirm('게시글을 삭제하시겠습니까?')) {
      return;
    }
    startTransition(async () => {
      await deletePostAction(id);
    });
  };
  return (
    <button
      className="cursor-pointer"
      onClick={handleDelete}
      disabled={isPending}
    >
      {isPending ? '삭제 중...' : '삭제'}
    </button>
  );
}
