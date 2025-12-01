'use client';

import { useState } from 'react';

export default function CounterButton() {
  const [count, setCount] = useState(0);

  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded cursor-pointer active:scale-95"
      onClick={() => {
        setCount((prev) => prev + 1);
      }}
    >
      카운팅: {count}
    </button>
  );
}
