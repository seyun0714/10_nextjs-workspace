import PostSubmitButton from '../../(components)/PostSubmitButton';
import { updatePostAction } from '../../action';
import { getPostById } from '../../services';
import { Post } from '../../types';

interface PostEditPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PostEditPage({ params }: PostEditPageProps) {
  const { id } = await params;
  const post: Post = await getPostById(id);

  return (
    <div className="mt-4 p-4  border rounded">
      <h2 className="text-xl font-semibold">게시글 수정</h2>
      <form
        className="flex flex-col gap-2 mt-4"
        action={updatePostAction.bind(null, post.id)}
      >
        <input
          type="text"
          name="title"
          placeholder="제목"
          className="border p-2 rounded"
          defaultValue={post.title}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="작성자명"
          className="border p-2 rounded"
          defaultValue={post.author}
          required
        />
        <textarea
          name="content"
          placeholder="내용"
          className="border p-2 rounded"
          defaultValue={post.content}
          required
        />
        <PostSubmitButton text={'수정'} />
      </form>
    </div>
  );
}
