"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
const steps = [
  {
    title: "申请预约",
  },
  {
    title: "安全检查",
  },
  {
    title: "物品存放",
  },
  {
    title: "医护体检",
  },
  {
    title: "谈话办案",
  },
  {
    title: "出区登记",
  },
  {
    title: "资料归档",
  },
];
export default function Step1() {
  const router = useRouter();
  const [currentStep] = useState(0);
  const [cardNo, setCardNo] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const makeCardNo = () => {
    // 随机生成6位地区代码（实际应该是固定的地区代码）
    const areaCode = Math.floor(100000 + Math.random() * 900000).toString();
    
    // 随机生成8位出生日期（格式：YYYYMMDD）
    const now = new Date();
    const year = now.getFullYear() - Math.floor(Math.random() * 80); // 假设年龄在0-80岁之间
    const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
    const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0'); // 简化处理，假设每月最多28天
    const birthDate = `${year}${month}${day}`;
    
    // 随机生成3位顺序码
    const sequenceCode = Math.floor(100 + Math.random() * 900).toString();

    // 简单的校验码计算（实际的算法更复杂）
    const body = areaCode + birthDate + sequenceCode;
    const checkSum = body.split('').reduce((sum, digit) => sum + parseInt(digit), 0) % 11;
    const checkCode = checkSum === 10 ? 'X' : String(checkSum);

    setCardNo(body + checkCode);
    //同时设置姓名、性别、出生日期
    const randomNames = ["张三", "李四", "王五", "赵六", "钱七", "孙八", "周九", "吴十"];
    setName(randomNames[Math.floor(Math.random() * randomNames.length)]);
    setGender("男");
    setBirthDate(birthDate.slice(0, 4)+ "-" + birthDate.slice(4, 6) + "-" + birthDate.slice(6, 8));
  };
  const renderStep = () => {
    return steps.map((step, index) => (
      <div key={index} className="flex flex-col items-center gap-4">
        <p
          className={`${
            index === currentStep ? "text-blue-500" : "text-gray-500"
          }`}
        >
          {step.title}
        </p>
        <div className="relative w-full flex justify-center items-center px-10">
          {index > 0 && (
            <div className="absolute w-1/2 h-[2px] bg-gray-500 left-0 -z-10"></div>
          )}
          {index < steps.length - 1 && (
            <div className="absolute w-1/2 h-[2px] -z-10 bg-gray-500 right-0"></div>
          )}
          <div
            className={`w-5 h-5 rounded-full ${
              index === currentStep ? "bg-blue-500" : "bg-gray-500"
            }`}
          ></div>
        </div>
      </div>
    ));
  };
  return (
    <div className="flex flex-col items-center">
      <div className="flex py-5">{renderStep()}</div>
      <div className="grid grid-cols-2 gap-36 py-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold border-l-4 border-blue-500 pl-4 mb-4 text-blue-500">
            谈话对象信息
          </h2>
          <div className="flex gap-4 items-center">
            <p className="w-20 text-right">证件类型</p>

            <select className="w-56 h-10 border border-gray-500 rounded-md px-1">
              <option value="身份证">居民身份证</option>
              <option value="护照">护照</option>
              <option value="港澳通行证">港澳通行证</option>
              <option value="台湾通行证">台湾通行证</option>
            </select>
          </div>
          <div className="flex gap-4 items-center">
            <p className="w-20 text-right"></p>
            <p className="text-red-400 italic">
              请将相关证件放置设备读取区域，并点击&quot;读取证件信息&quot;按钮
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <p className="w-20 text-right">证件号</p>
            <input
              type="text"
              className="w-56 h-10 border border-gray-500 rounded-md px-2"
              value={cardNo}
              onChange={(e) => setCardNo(e.target.value)}
            />
            <button className="border border-blue-500 text-blue-500 rounded-md text-sm px-3 py-1.5" onClick={makeCardNo}>
              读取证件信息
            </button>
          </div>
          <div className="flex gap-4 items-center">
            <p className="w-20 text-right">姓名</p>
            <input
              type="text"
              className="w-56 h-10 border border-gray-500 rounded-md px-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex gap-4 items-center">
            <p className="w-20 text-right">性别</p>
            <select className="w-56 h-10 border border-gray-500 rounded-md px-1" value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="男">男</option>
              <option value="女">女</option>
            </select>
          </div>
          <div className="flex gap-4 items-center">
            <p className="w-20 text-right">出生年月</p>
            <input
              type="date"
              className="w-56 h-10 border border-gray-500 rounded-md px-2"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>
          <div className="flex gap-4 items-center">
            <p className="w-20 text-right">工作单位</p>
            <input className="w-56 h-10 border border-gray-500 rounded-md px-2" />
          </div>
          <div className="flex gap-4 items-center">
            <p className="w-20 text-right">政治面貌</p>
            <select className="w-56 h-10 border border-gray-500 rounded-md px-1">
              <option value="党员">党员</option>
              <option value="群众">群众</option>
            </select>
          </div>
          <div className="flex gap-4 items-center">
            <p className="w-20 text-right">职务职级</p>
            <input className="w-56 h-10 border border-gray-500 rounded-md px-2" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold border-l-4 border-blue-500 pl-4 mb-4 text-blue-500">
            预约人信息
          </h2>
          <div className="flex gap-4 items-center">
            <p className="w-20 text-right">部门</p>
            <select className="w-56 h-10 border border-gray-500 rounded-md px-1">
              <option value="部门1">部门1</option>
              <option value="部门2">部门2</option>
            </select>
          </div>
          <div className="flex gap-4 items-center">
            <p className="w-20 text-right">申请人</p>
            <select className="w-56 h-10 border border-gray-500 rounded-md px-1">
              <option value="张三">张三</option>
              <option value="李四">李四</option>
              <option value="王五">王五</option>
            </select>
          </div>
          <div className="flex gap-4 items-center">
            <p className="w-20 text-right">预约日期</p>
            <input
              type="date"
              className="w-56 h-10 border border-gray-500 rounded-md px-2"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center py-24">
        <button
          className="bg-blue-500 text-white w-40 py-4 rounded-md"
          onClick={() => router.push(`/barcode?no=${cardNo}`)}
        >
          提交
        </button>
      </div>
    </div>
  );
}
