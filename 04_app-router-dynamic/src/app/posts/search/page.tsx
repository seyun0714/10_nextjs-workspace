interface PostSearchPageProps {
  searchParams: Promise<{ condition: string; keyword: string }>;
}

export default async function PostSearchPage({
  searchParams,
}: PostSearchPageProps) {
  const { condition, keyword } = await searchParams;
  return (
    <div>
      <h1>게시글 검색 페이지</h1>
      <div>
        <p>검색조건: {condition}</p>
        <p>검색키워드: {keyword}</p>
      </div>
    </div>
  );
}
