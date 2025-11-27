import Link from 'next/link';

interface PostDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const { id } = await params;
  return (
    <div>
      <h1 className="text-2xl font-bold">게시글 상세</h1>
      <p>이건 {id}번 게시글</p>
      <hr />
      <Link href={`/posts/${id}/edit`}>수정 페이지로 이동</Link>
    </div>
  );
}
