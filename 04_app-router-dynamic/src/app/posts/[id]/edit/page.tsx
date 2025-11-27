interface PostEditPageProps {
  params: Promise<{ id: string }>;
}

export default async function PostEditPage({ params }: PostEditPageProps) {
  const { id } = await params;
  return (
    <div>
      <h1>이건 {id}번 수정 페이지</h1>
    </div>
  );
}
