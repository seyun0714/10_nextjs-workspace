import { createPostAction } from '../action';

export default function Page() {
  return (
    <div className="mt-4 p-4  border rounded">
      <h2 className="text-xl font-semibold">게시글 등록</h2>
      <form className="flex flex-col gap-2 mt-4" action={createPostAction}>
        <input
          type="text"
          name="title"
          placeholder="제목"
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="author"
          placeholder="작성자명"
          className="border p-2 rounded"
          required
        />
        <textarea
          name="content"
          placeholder="내용"
          className="border p-2 rounded"
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
