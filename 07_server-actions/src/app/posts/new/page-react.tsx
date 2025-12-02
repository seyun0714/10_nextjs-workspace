'use client';

import { useState } from 'react';
import { CreatePostDTO } from '../types';
import { createPost } from '../services';
import { useRouter } from 'next/navigation';

export default function PostCreatePage() {
  const router = useRouter();
  const [formData, setFormData] = useState<CreatePostDTO>({
    title: '',
    content: '',
    author: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newPost = await createPost(formData);
    alert('게시글이 성공적으로 등록되었습니다.');
    setFormData({ title: '', content: '', author: '' });
    // 게시글 목록 상태 변수에 push
    router.push('/posts');
  };

  return (
    <div className="mt-4 p-4  border rounded">
      <h2 className="text-xl font-semibold">게시글 등록</h2>
      <form className="flex flex-col gap-2 mt-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="제목"
          className="border p-2 rounded"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="작성자명"
          className="border p-2 rounded"
          value={formData.author}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          placeholder="내용"
          className="border p-2 rounded"
          value={formData.content}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white mt-2 p-2 rounded cursor-pointer"
        >
          등록
        </button>
      </form>
    </div>
  );
}
