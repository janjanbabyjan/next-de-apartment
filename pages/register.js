import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Register = () => {
  const router = useRouter();
  const [error, setError] = useState('');
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
    acceptTerms: false,
    promoCode: ''
  });
  const mockUsers = [
    {
      email: 'examplet@example.com',
      password: 'password123'
    }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.startsWith('birthDate.')) {
      const dateField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        birthDate: {
          ...prev.birthDate,
          [dateField]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName) {
      setError('กรุณากรอกชื่อและนามสกุล');
      return false;
    }
    if (!formData.email) {
      setError('กรุณากรอกอีเมล');
      return false;
    }
    if (!formData.email.includes('@')) {
      setError('กรุณากรอกอีเมลให้ถูกต้อง');
      return false;
    }
    if (!formData.password) {
      setError('กรุณากรอกรหัสผ่าน');
      return false;
    }
    if (formData.password.length < 8) {
      setError('รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร');
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError('รหัสผ่านไม่ตรงกัน');
      return false;
    }
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      setError('กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง (10 หลัก)');
      return false;
    }
    if (!formData.acceptTerms) {
      setError('กรุณายอมรับเงื่อนไขการใช้งาน');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      return;
    }
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (mockUsers.some(user => user.email === formData.email)) {
        setError('อีเมลนี้ถูกใช้งานแล้ว');
        return;
      }
      console.log('Registration successful:', formData);
      router.push('/login');

    } catch (error) {
      setError('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง');
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
          <div className="bg-white p-8  shadow-md">
            {error && (
              <div className="mb-4 p-3 bg-red-100 ">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
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
                      onChange={handleChange}
                      className="mr-2"
                    />
                    เจ้าของหอพัก
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="role"
                      value="พนักงาน"
                      checked={formData.role === 'พนักงาน'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    พนักงาน
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="role"
                      value="ผู้เช่า"
                      checked={formData.role === 'ผู้เช่า'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    ผู้เช่า
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    ชื่อจริง <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    นามสกุล <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  วัน/เดือน/ปี เกิด <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-3 gap-4">
                  <select
                    name="birthDate.day"
                    value={formData.birthDate.day}
                    onChange={handleChange}
                    className="px-3 py-2 border rounded-md"
                  >
                    <option value="">วัน</option>
                    {[...Array(31)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                  <select
                    name="birthDate.month"
                    value={formData.birthDate.month}
                    onChange={handleChange}
                    className="px-3 py-2 border rounded-md"
                  >
                    <option value="">เดือน</option>
                    {['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
                      'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'].map((month, i) => (
                        <option key={i} value={i + 1}>{month}</option>
                      ))}
                  </select>
                  <select
                    name="birthDate.year"
                    value={formData.birthDate.year}
                    onChange={handleChange}
                    className="px-3 py-2 border rounded-md"
                  >
                    <option value="">ปี (พ.ศ.)</option>
                    {[...Array(100)].map((_, i) => (
                      <option key={i} value={2567 - i}>{2567 - i}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  เบอร์โทรศัพท์ <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="example@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  รหัสผ่าน <span className="text-red-500">*</span>
                  <span className="text-sm text-gray-500 ml-2">(ต้องมีอย่างน้อย 8 อักษร)</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  ยืนยันรหัสผ่าน <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  รหัสแนะนำ/รหัสโปรโมชั่น (ถ้ามี)
                </label>
                <input
                  type="text"
                  name="promoCode"
                  value={formData.promoCode}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="ไม่มีก็ได้ หรือรหัสโปรโมชั่น ที่นี่"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">เพศ</label>
                <div className="flex gap-8">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      value="ชาย"
                      checked={formData.gender === 'ชาย'}
                      onChange={handleChange}
                    />
                    ชาย
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      value="หญิง"
                      checked={formData.gender === 'หญิง'}
                      onChange={handleChange}
                    />
                    หญิง
                  </label>
                </div>
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
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