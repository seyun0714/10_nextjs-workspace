// Home 페이지 컴포넌트 == 서버 컴포넌트

import CounterButton from '@/components/CounterButton';

export default function Home() {
  // 서버에서 생성된 시간

  const time = new Date().toLocaleTimeString();

  return (
    <div className="p-20 ">
      <h1 className="text-3xl font-bold text-gray-900">
        Server Component vs Client Component
      </h1>
      <p className="mt-2 text-gray-600">
        현재 이 텍스트는 서버 컴포넌트에서 렌더링된 텍스트 입니다.
      </p>
      <div className="mt-4 p-2 bg-gray-100 rounded text-center font-semibold text-black">
        현재 시간: {time}
      </div>
      <div className="mt-4 text-center">
        <CounterButton />
        {/* <button
          className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded"
          onClick={() => {}}
        >
          카운팅: {count}
        </button> */}
      </div>
    </div>
  );
}
