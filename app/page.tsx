"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-2xl mt-32 font-bold text-blue-500 italic">欢迎使用智慧走读谈话系统</div>
      <div className="space-x-12 mt-32">
        <button
          className="bg-blue-500 text-white w-40 py-4 rounded-md"
          onClick={() => router.push("/step1")}
        >
          自助预约
        </button>
        <button
          className="border border-blue-500 text-blue-500 w-40 py-4 rounded-md"
          onClick={() => router.push("/")}
        >
          预约查询
        </button>
      </div>
    </div>
  );
}
