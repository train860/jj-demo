"use client"
import Barcode from 'react-barcode';
import { useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import crypto from 'crypto';

export default function BarcodePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const no = searchParams.get('no');
  const barcode = useMemo(() => {
    if (!no) return '000000000000000000'; // 默认值，18位0

    // 使用SHA-256对no进行哈希处理
    const hash = crypto.createHash('sha256').update(no).digest('hex');
    
    // 取哈希的前18个字符，确保只包含数字
    const numericHash = hash.replace(/\D/g, '').slice(0, 18);
    
    // 如果数字少于18位，在前面补0
    return numericHash.padStart(18, '0');
  }, [no]);
  return (
    <div className="flex flex-col justify-center items-center py-24">
      <div className="flex justify-center items-center text-2xl text-blue-500 italic font-bold text-center">
        您的预约已提交，请耐心等待。审核结果将在<br/>大厅通知，也可以通过条形码进行查询
      </div>
      <div className="flex justify-center items-center text-2xl text-blue-500 italic font-bold mt-10">
        谢谢！
      </div>
      <div className="mt-10">
        <Barcode value={barcode}/>
      </div>
      <div className='flex justify-center items-center gap-12 mt-10'>
        <button className='bg-blue-500 text-white w-40 py-4 rounded-md'>打印条形码</button>
        <button className='border border-blue-500 text-blue-500 w-40 py-4 rounded-md' onClick={() => router.push('/')}>返回</button>
      </div>
    </div>
  );
}
