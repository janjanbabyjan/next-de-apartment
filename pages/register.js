import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Register = () => {
  const [formData, setFormData] = useState({
    role: 'เจ้าของหอพัก',
    firstName: '',
    lastName: '',
    birthDate: {
      day: '',
      month: '',
      year: ''
    },
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    lineId: '',
    gender: 'ชาย',
    acceptTerms: false
  });

  return (
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

        {/* Right side - Registration form */}
        <div className="w-1/2">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              {/* Role Selection */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  ตำแหน่งของท่าน <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="role"
                      value="เจ้าของหอพัก"
                      checked={formData.role === 'เจ้าของหอพัก'}
                      className="mr-2"
                    />
                    เจ้าของหอพัก
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="role"
                      value="พนักงาน"
                      className="mr-2"
                    />
                    พนักงาน
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="role"
                      value="ผู้เช่า"
                      className="mr-2"
                    />
                    ผู้เช่า
                  </label>
                </div>
              </div>

              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    ชื่อจริง <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    นามสกุล <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
              </div>

              {/* Birth Date */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  วัน/เดือน/ปี เกิด <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-3 gap-4">
                  <select className="px-3 py-2 border rounded-md">
                    <option>วัน</option>
                    {[...Array(31)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                  <select className="px-3 py-2 border rounded-md">
                    <option>เดือน</option>
                    {['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 
                      'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'].map((month, i) => (
                      <option key={i} value={i + 1}>{month}</option>
                    ))}
                  </select>
                  <select className="px-3 py-2 border rounded-md">
                    <option>ปี (พ.ศ.)</option>
                    {[...Array(100)].map((_, i) => (
                      <option key={i} value={2567 - i}>{2567 - i}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  เบอร์โทรศัพท์ <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="ตัวอย่าง: 0894445555"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  อีเมล <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="example@example.com"
                />
              </div>

              {/* Password Fields */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  รหัสผ่าน <span className="text-red-500">*</span>
                  <span className="text-sm text-gray-500 ml-2">(ต้องมีอย่างน้อย 8 อักษร)</span>
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  ยืนยันรหัสผ่าน <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>

              {/* Promo Code */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  รหัสแนะนำ/รหัสโปรโมชั่น (ถ้ามี)
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="ไม่มีก็ หรือรหัสโปรโมชั่น ที่นี่"
                />
              </div>

              {/* Gender Selection */}
              <div>
                <label className="block text-sm font-medium mb-2">เพศ</label>
                <div className="flex gap-8">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      value="ชาย"
                      checked={formData.gender === 'ชาย'}
                    />
                    <Image src="/assets/male-avatar.png" alt="ชาย" width={40} height={40} />
                    ชาย
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      value="หญิง"
                    />
                    <Image src="/assets/female-avatar.png" alt="หญิง" width={40} height={40} />
                    หญิง
                  </label>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  className="mt-1 mr-2"
                  id="terms"
                />
                <label htmlFor="terms" className="text-sm">
                  คุณได้อ่านและยอมรับ <Link href="/terms" className="text-blue-600 hover:underline">นโยบายคุ้มครองความเป็นส่วนตัวและเงื่อนไขการใช้บริการ</Link>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
              >
                สมัครสมาชิก
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;