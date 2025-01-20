"use client";

import { useState } from 'react';
import { Home, FileText, DollarSign, Droplets, Zap, PieChart, ChevronDown } from 'lucide-react';
import React from "react";
import { HeroUIProvider } from "@heroui/react";
import App from "../../components/Sidebar/App";

export default function UtilityBillForm() {
    const [selectedMonth, setSelectedMonth] = useState('10');
    const [selectedYear, setSelectedYear] = useState('2567');

    const months = [
        { value: '01', label: 'มกราคม' },
        { value: '02', label: 'กุมภาพันธ์' },
        { value: '03', label: 'มีนาคม' },
        { value: '04', label: 'เมษายน' },
        { value: '05', label: 'พฤษภาคม' },
        { value: '06', label: 'มิถุนายน' },
        { value: '07', label: 'กรกฎาคม' },
        { value: '08', label: 'สิงหาคม' },
        { value: '09', label: 'กันยายน' },
        { value: '10', label: 'ตุลาคม' },
        { value: '11', label: 'พฤศจิกายน' },
        { value: '12', label: 'ธันวาคม' }
    ];

    const years = [
        { value: '2567', label: '2567' },
        { value: '2566', label: '2566' },
        { value: '2565', label: '2565' }
    ];

    const initialFormState = {
        roomNumber: '101',
        billingPeriod: 'ตุลาคม 2567',
        rent: '3000',
        waterStartMeter: '550',
        waterEndMeter: '525',
        waterUnitsUsed: '25',
        waterRate: '25',
        waterTotal: '625',
        electricityStartMeter: '9000',
        electricityEndMeter: '8000',
        electricityUnitsUsed: '1000',
        electricityRate: '7',
        electricityTotal: '7000',
        total: '10625'
    };

    const [formData, setFormData] = useState(initialFormState);

    const getMonthName = (monthValue) => {
        return months.find(month => month.value === monthValue)?.label || '';
    };

    const handleDateChange = (type, value) => {
        if (type === 'month') {
            setSelectedMonth(value);
        } else {
            setSelectedYear(value);
        }
        
        const monthName = type === 'month' ? 
            getMonthName(value) : 
            getMonthName(selectedMonth);
            
        const year = type === 'year' ? value : selectedYear;
        
        setFormData(prev => ({
            ...prev,
            billingPeriod: `${monthName} ${year}`
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    const handleCancel = () => {
        setFormData(initialFormState);
        setSelectedMonth('10');
        setSelectedYear('2567');
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => {
            const newData = { ...prev, [name]: value };

            if (name === 'waterStartMeter' || name === 'waterEndMeter') {
                const start = parseFloat(newData.waterStartMeter) || 0;
                const end = parseFloat(newData.waterEndMeter) || 0;
                const unitsUsed = Math.max(0, start - end);
                const total = unitsUsed * parseFloat(prev.waterRate);

                newData.waterUnitsUsed = unitsUsed.toString();
                newData.waterTotal = total.toString();
            }

            if (name === 'electricityStartMeter' || name === 'electricityEndMeter') {
                const start = parseFloat(newData.electricityStartMeter) || 0;
                const end = parseFloat(newData.electricityEndMeter) || 0;
                const unitsUsed = Math.max(0, start - end);
                const total = unitsUsed * parseFloat(prev.electricityRate);

                newData.electricityUnitsUsed = unitsUsed.toString();
                newData.electricityTotal = total.toString();
            }

            const rentTotal = parseFloat(newData.rent) || 0;
            const waterTotal = parseFloat(newData.waterTotal) || 0;
            const electricityTotal = parseFloat(newData.electricityTotal) || 0;
            newData.total = (rentTotal + waterTotal + electricityTotal).toString();

            return newData;
        });
    };

    return (
        <HeroUIProvider>
            <App title="มิเตอร์">
                <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
                    <h1 className="text-2xl font-bold text-center mb-6">เลือกรอบมิเตอร์</h1>

                    {/* Date Selection */}
                    <div className="bg-white border rounded-lg p-4 mb-6">
                        <div className="flex items-center justify-center gap-4">
                            <div className="relative">
                                <select
                                    value={selectedMonth}
                                    onChange={(e) => handleDateChange('month', e.target.value)}
                                    className="appearance-none bg-white border rounded-lg px-4 py-2 pr-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-400"
                                >
                                    {months.map((month) => (
                                        <option key={month.value} value={month.value}>
                                            {month.label}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                            </div>
                            <div className="relative">
                                <select
                                    value={selectedYear}
                                    onChange={(e) => handleDateChange('year', e.target.value)}
                                    className="appearance-none bg-white border rounded-lg px-4 py-2 pr-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-400"
                                >
                                    {years.map((year) => (
                                        <option key={year.value} value={year.value}>
                                            {year.label}
                                        </option>
                                    ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Room Number */}
                        <div className="flex items-center gap-4">
                            <Home className="w-6 h-6 text-sky-500" />
                            <div className="flex-1">
                                <input
                                    type="text"
                                    name="roomNumber"
                                    value={formData.roomNumber}
                                    onChange={handleInputChange}
                                    placeholder="เลขห้อง"
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                        </div>

                        {/* Billing Period */}
                        <div className="flex items-center gap-4">
                            <FileText className="w-6 h-6 text-sky-500" />
                            <div className="flex-1">
                                <input
                                    type="text"
                                    name="billingPeriod"
                                    value={formData.billingPeriod}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded"
                                    disabled
                                />
                            </div>
                        </div>

                        {/* Rent */}
                        <div className="flex items-center gap-4">
                            <DollarSign className="w-6 h-6 text-sky-500" />
                            <div className="flex-1">
                                <input
                                    type="text"
                                    name="rent"
                                    value={formData.rent}
                                    onChange={handleInputChange}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                        </div>

                        {/* Water */}
                        <div className="flex items-center gap-4">
                            <Droplets className="w-6 h-6 text-sky-500" />
                            <div className="grid grid-cols-5 gap-2 flex-1">
                                <input
                                    type="number"
                                    name="waterStartMeter"
                                    value={formData.waterStartMeter}
                                    onChange={handleInputChange}
                                    placeholder="เลขมิเตอร์ครั้งนี้"
                                    className="p-2 border rounded"
                                />
                                <input
                                    type="number"
                                    name="waterEndMeter"
                                    value={formData.waterEndMeter}
                                    onChange={handleInputChange}
                                    placeholder="ครั้งก่อน"
                                    className="p-2 border rounded"
                                />
                                <input
                                    type="number"
                                    name="waterUnitsUsed"
                                    value={formData.waterUnitsUsed}
                                    className="p-2 border rounded"
                                    readOnly
                                />
                                <input
                                    type="number"
                                    name="waterRate"
                                    value={formData.waterRate}
                                    onChange={handleInputChange}
                                    className="p-2 border rounded"
                                />
                                <input
                                    type="number"
                                    name="waterTotal"
                                    value={formData.waterTotal}
                                    className="p-2 border rounded"
                                    readOnly
                                />
                            </div>
                        </div>

                        {/* Electricity */}
                        <div className="flex items-center gap-4">
                            <Zap className="w-6 h-6 text-sky-500" />
                            <div className="grid grid-cols-5 gap-2 flex-1">
                                <input
                                    type="number"
                                    name="electricityStartMeter"
                                    value={formData.electricityStartMeter}
                                    onChange={handleInputChange}
                                    placeholder="เลขมิเตอร์ครั้งนี้"
                                    className="p-2 border rounded"
                                />
                                <input
                                    type="number"
                                    name="electricityEndMeter"
                                    value={formData.electricityEndMeter}
                                    onChange={handleInputChange}
                                    placeholder="ครั้งก่อน"
                                    className="p-2 border rounded"
                                />
                                <input
                                    type="number"
                                    name="electricityUnitsUsed"
                                    value={formData.electricityUnitsUsed}
                                    className="p-2 border rounded"
                                    readOnly
                                />
                                <input
                                    type="number"
                                    name="electricityRate"
                                    value={formData.electricityRate}
                                    onChange={handleInputChange}
                                    className="p-2 border rounded"
                                />
                                <input
                                    type="number"
                                    name="electricityTotal"
                                    value={formData.electricityTotal}
                                    className="p-2 border rounded"
                                    readOnly
                                />
                            </div>
                        </div>

                        {/* Total */}
                        <div className="flex items-center gap-4">
                            <PieChart className="w-6 h-6 text-sky-500" />
                            <div className="flex items-center">
                                <input
                                    type="text"
                                    name="total"
                                    value={formData.total}
                                    className="w-32 p-2 border rounded"
                                    readOnly
                                />
                                <span className="ml-2">บาท</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-center gap-4">
                            <button
                                type="submit"
                                className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                            >
                                บันทึก
                            </button>
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                            >
                                ยกเลิก
                            </button>
                        </div>
                    </form>
                </div>
            </App>
        </HeroUIProvider>
    );
}