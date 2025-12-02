// 백엔드 API와의 통신 (1:1)

import { CreatePostDTO, Post, UpdatePostDTO } from './types';

const POST_API = 'http://localhost:4000/posts';

// 목록 조회용
const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch(POST_API);
    if (!response.ok) {
      throw new Error('데이터 조회 실패');
    }
    const data: Post[] = await response.json();
    return data;
  } catch (error) {
    throw new Error('데이터 조회 실패');
  }
};

// 상세 조회용
const getPostById = async (id: string): Promise<Post> => {
  try {
    const response = await fetch(`${POST_API}/${id}`);
    if (!response.ok) {
      throw new Error('데이터 조회 실패');
    }
    const data: Post = await response.json();
    return data;
  } catch (error) {
    throw new Error('데이터 조회 실패');
  }
};

// 등록용 - 방식 : POST / BODY: 등록 객체(JSON 문자열)
const createPost = async (postData: CreatePostDTO): Promise<Post> => {
  try {
    const response = await fetch(`${POST_API}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    });
    if (!response.ok) {
      throw new Error('게시글 등록 실패');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('게시글 등록 실패');
  }
};

// 수정용 - 방식 : PUT
const updatePost = async (
  id: string,
  postData: UpdatePostDTO
): Promise<Post> => {
  try {
    const response = await fetch(`${POST_API}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error('게시글 수정 실패');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('게시글 수정 실패');
  }
};

// 삭제용 - 방식 : DELETE
const deletePost = async (id: string) => {
  try {
    const response = await fetch(`${POST_API}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('게시글 삭제 실패');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    throw new Error('게시글 삭제 실패');
  }
};

export { getPosts, getPostById, createPost, updatePost, deletePost };
