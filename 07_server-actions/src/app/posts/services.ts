// 백엔드 API와의 통신 (1:1)

import { CreatePostDTO, Post } from './types';

const POST_API = 'http://localhost:4000/posts';

// 목록 조회용
const getPosts = async (): Promise<Post[] | null> => {
  try {
    const response = await fetch(POST_API);
    if (!response.ok) {
      throw new Error('데이터 페칭 실패');
    }
    const data: Post[] = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// 상세 조회용
const getPostById = async (id: string): Promise<Post | null> => {
  try {
    const response = await fetch(`${POST_API}/${id}`);
    if (!response.ok) {
      throw new Error('데이터 페칭 실패');
    }
    const data: Post = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// 등록용 - 방식 : POST / BODY: 등록 객체(JSON 문자열)
const createPost = async (postData: CreatePostDTO) => {
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
    console.error(error);
  }
};

// 수정용
const updatePost = async (id: string, postData: Omit<Post, 'id'>) => {
  try {
    const response = await fetch(`${POST_API}/${id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error('게시글 수정 실패');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

// 삭제용
const deletePost = async (id: string) => {};

export { getPosts, getPostById, createPost, updatePost, deletePost };
