"use client"

import { useState } from "react";

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
]
export default function Step1() {
    const [currentStep, setCurrentStep] = useState(0);
    const renderStep = () => {
        return steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
                <p className={`${index === currentStep ? 'text-blue-500' : 'text-gray-500'}`}>{step.title}</p>
                <div className="relative w-full flex justify-center items-center px-10">
                    {index > 0 && <div className="absolute w-1/2 h-[2px] bg-gray-500 left-0 -z-10"></div>}
                    {index < steps.length - 1 && <div className="absolute w-1/2 h-[2px] -z-10 bg-gray-500 right-0"></div>}
                    <div className={`w-5 h-5 rounded-full ${index === currentStep ? 'bg-blue-500' : 'bg-gray-500'}`}></div>
                </div>
            </div>
        ))
    }
    return (
        <div className="flex flex-col items-center">
            <div className="flex py-5">
                {renderStep()}
            </div>
            <div className="grid grid-cols-2 gap-36">
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-bold border-l-4 border-blue-500 pl-4">谈话对象信息</h2>
                    <div className="flex gap-4 items-center">
                        <p className="w-20 text-right">证件类型</p>

                        <select className="w-56 h-10 border border-gray-500 rounded-md">
                            <option value="身份证">居民身份证</option>
                            <option value="护照">护照</option>
                            <option value="港澳通行证">港澳通行证</option>
                            <option value="台湾通行证">台湾通行证</option>
                        </select>

                    </div>
                    <div className="flex gap-4 items-center">
                        <p className="w-20 text-right"></p>
                        <p className="text-red-400 italic">请将相关证件放置设备读取区域，并点击"读取证件信息"按钮</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <p className="w-20 text-right">证件号</p>
                        <input type="text" className="w-56 h-10 border border-gray-500 rounded-md" />
                        <button className="border border-blue-500 text-blue-500 rounded-md text-sm px-3 py-1.5">读取证件信息</button>
                    </div>
                    <div className="flex gap-4 items-center">
                        <p className="w-20 text-right">姓名</p>
                        <input type="text" className="w-56 h-10 border border-gray-500 rounded-md" />
                    </div>
                    <div className="flex gap-4 items-center">
                        <p className="w-20 text-right">性别</p>
                        <select className="w-56 h-10 border border-gray-500 rounded-md">
                            <option value="男">男</option>
                            <option value="女">女</option>
                        </select>
                    </div>
                    <div className="flex gap-4 items-center">
                        <p className="w-20 text-right">出生年月</p>
                        <input type="date" className="w-56 h-10 border border-gray-500 rounded-md" />
                    </div>
                    <div className="flex gap-4 items-center">
                        <p className="w-20 text-right">工作单位</p>
                        <input className="w-56 h-10 border border-gray-500 rounded-md" />
                    </div>
                    <div className="flex gap-4 items-center">
                        <p className="w-20 text-right">政治面貌</p>
                        <select className="w-56 h-10 border border-gray-500 rounded-md">
                            <option value="党员">党员</option>
                            <option value="群众">群众</option>
                        </select>
                    </div>
                    <div className="flex gap-4 items-center">
                        <p className="w-20 text-right">职务职级</p>
                        <input className="w-56 h-10 border border-gray-500 rounded-md" />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-bold border-l-4 border-blue-500 pl-4">谈话对象信息</h2>
                </div>
            </div>
        </div>
    )
}