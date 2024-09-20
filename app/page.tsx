"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-2xl mt-32">欢迎使用智慧走读谈话系统</div>
      <div className="space-x-4 mt-32">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => router.push('/step1')}>
          自助预约
        </button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded-md">
          预约查询
        </button>
      </div>
    </div>
  );
}
