import Link from 'next/link';

export default function PostsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">게시글 목록 페이지</h1>
      <div className="text-right mt-5">
        <Link
          href="/posts/new"
          className="px-4 py-2 border rounded-lg cursor-pointer hover:bg-gray-100"
        >
          게시글 등록
        </Link>
      </div>

      <ul className="mt-3 pt-3 border-t">
        <li>
          <Link href="/posts/1" className="cursor-pointer">
            게시글1
          </Link>
        </li>
        <li>
          <Link href="/posts/2" className="cursor-pointer">
            게시글2
          </Link>
        </li>
        <li>
          <Link href="/posts/3" className="cursor-pointer">
            게시글3
          </Link>
        </li>
      </ul>

      <hr />

      <Link href="posts/search?condition=나여&keyword=백종원">
        쿼리 스트링 사용해보기
      </Link>
    </div>
  );
}
