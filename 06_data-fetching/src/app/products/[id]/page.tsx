import { Product } from '@/types';

interface ProductDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

async function getProductById(id: string) {
  try {
    const response = await fetch(`http://localhost:4000/products/${id}`, {
      next: {
        revalidate: 60,
      },
    });
    if (!response.ok) {
      throw new Error('데이터 페칭 실패');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params;
  const data: Product = await getProductById(id);
  return (
    <div>
      <div>상품 명: {data.name}</div>
      <div>가격: {data.price}원</div>
      <div>재고: {data.stock}개</div>
    </div>
  );
}
