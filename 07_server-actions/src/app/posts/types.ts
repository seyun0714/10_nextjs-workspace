export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
}

// 요청 데이터 관련 타입 정의(DTO: Data Transfer Object)
export interface CreatePostDTO {
  title: string;
  content: string;
  author: string;
}
