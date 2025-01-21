import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Header from '../components/Layout/Header';

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    phone: '',
    password: '',
  });

  const mockUsers = [
    {
      phone: '0812345678',
      password: 'password123',
      role: 'เจ้าของหอพัก'
    },
    {
      phone: '0823456789',
      password: 'password123',
      role: 'ผู้เช่า'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (!formData.phone || !formData.password) {
        throw new Error('กรุณากรอกข้อมูลให้ครบถ้วน');
      }
      await new Promise(resolve => setTimeout(resolve, 1000));
      const user = mockUsers.find(user => user.phone === formData.phone);
      if (!user) {
        throw new Error('ไม่พบบัญชีผู้ใช้นี้');
      }
      if (user.password !== formData.password) {
        throw new Error('รหัสผ่านไม่ถูกต้อง');
      }

      console.log('Login successful:', user);

      switch (user.role) {
        case 'เจ้าของหอพัก':
          router.push('/role');
          break;
        case 'ผู้เช่า':
          router.push('/role');
          break;
      }

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-7xl w-full p-6 flex gap-8">
        <div className="w-1/2 flex flex-col items-center justify-center">
          <div className="text-center">
            <Image
              src="/assets/Logo.png"
              alt="LinkCo Logo"
              width={500}
              height={300}
              className="mb-6"
            />
            <h1 className="text-3xl font-bold mb-4">ระบบจัดการหอพัก</h1>
            <h2 className="text-2xl">อพาร์ทเมนท์</h2>
          </div>
        </div>

        <div className="w-1/2">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-center">เข้าสู่ระบบ</h3>
            
            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="เบอร์โทรศัพท์"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <input
                  type="password"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="รหัสผ่าน"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>

              <div className="flex items-center justify-end">
                <Link 
                  href="/forgot-password" 
                  className="text-sm text-blue-600 hover:text-blue-500"
                >
                  ลืมรหัสผ่าน ?
                </Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-2 px-4 bg-[#6FB2D2] hover:bg-[#5DA1C1] text-white font-semibold rounded-md transition duration-200 ease-in-out ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'กำลังเข้าสู่ระบบ...' : 'LOG IN'}
              </button>

              <div className="text-center mt-4">
                <span className="text-gray-500">หรือ</span>
              </div>

              <Link
                href="/register"
                className="w-full block text-center py-2 px-4 bg-[#6FB2D2] hover:bg-[#5DA1C1] text-white font-semibold rounded-md transition duration-200 ease-in-out"
              >
                สมัครสมาชิก
              </Link>
            </form>

            <div className="mt-8 p-4 bg-gray-50 rounded-md">
              <p className="text-sm text-gray-500 mb-2">ข้อมูลทดสอบ:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>เจ้าของ: 0812345678 / password123</li>
                <li>ผู้เช่า: 0823456789 / password123</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;