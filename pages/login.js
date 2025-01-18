import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '../components/Layout/Header';

const Login = () => {
  const [formData, setFormData] = useState({
    phone: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
  };

  return (
    // <Header

    // >
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-7xl w-full p-6 flex gap-8">
        {/* Left side - Logo and branding */}
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

        {/* Right side - Login form */}
        <div className="w-1/2">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-center">เข้าสู่ระบบ</h3>
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
                <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-500">
                  ลืมรหัสผ่าน ?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-[#6FB2D2] hover:bg-[#5DA1C1] text-white font-semibold rounded-md transition duration-200 ease-in-out"
              >
                LOG IN
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
          </div>
        </div>
      </div>
    </div>
    // </Header>
  );
};

export default Login;