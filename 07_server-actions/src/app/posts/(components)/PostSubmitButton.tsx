'use client';

import { useFormStatus } from 'react-dom';

interface PostSubmitButtonProps {
  text: string;
}

export default function PostSubmitButton({ text }: PostSubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white mt-2 p-2 rounded cursor-pointer"
      type="submit"
      disabled={pending}
    >
      {pending ? `${text} 중...` : text}
    </button>
  );
}
