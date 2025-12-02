import Link from 'next/link';
import { getPosts } from './services';
import { Post } from './types';

export default async function PostListPage() {
  const posts: Post[] = await getPosts();
  return (
    <div className="mt-4 p-4  border rounded">
      <h2 className="text-xl font-semibold">게시글 목록</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              {post.title} - {post.author}
            </Link>
          </li>
        ))}
      </ul>
      <hr />
      <Link href={'posts/new'}>글쓰기</Link>
    </div>
  );
}
