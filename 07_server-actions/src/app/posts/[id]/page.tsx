import Link from 'next/link';
import { getPostById } from '../services';
import { Post } from '../types';

interface PostDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const { id } = await params;
  const post: Post = await getPostById(id);

  return (
    <div className="mt-4 p-4  border rounded">
      <h2 className="text-xl font-semibold">게시글 상세</h2>
      <div>제목: {post?.title}</div>
      <div>작성자: {post?.author}</div>
      <div>내용: {post?.content}</div>

      <hr />
      <div>
        <Link href={`/posts/${id}/edit`}>수정</Link>
        <button>삭제</button>
      </div>
    </div>
  );
}
