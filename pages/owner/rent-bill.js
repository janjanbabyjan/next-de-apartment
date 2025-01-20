"use client";
import React, { useState } from 'react';
import { Search, Download, Send, FileText, ChevronDown } from 'lucide-react';
import { HeroUIProvider } from "@heroui/react";
import App from "../../components/Sidebar/App";

export default function MeterDashboard() {
    const [selectedMonth, setSelectedMonth] = useState('10'); // October
    const [selectedYear, setSelectedYear] = useState('2567'); // 2567

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

    const getMonthName = (monthValue) => {
        return months.find(month => month.value === monthValue)?.label || '';
    };

    // Rest of your existing code...
    const floors = [
        {
            floorNumber: 1,
            rooms: [
                { number: '101', status: 'completed' },
                { number: '102', status: 'completed' },
                { number: '103', status: 'notpay' },
                { number: '104', status: 'empty' }
            ]
        },
        {
            floorNumber: 2,
            rooms: [
                { number: '201', status: 'completed' },
                { number: '202', status: 'completed' },
                { number: '203', status: 'empty' },
                { number: '204', status: 'empty' }
            ]
        }
    ];

    const getStatusColor = (status) => {
        switch (status) {
            case 'completed':
                return 'bg-green-500';
            case 'notpay':
                return 'bg-[#e21726]';
            default:
                return 'bg-gray-300';
        }
    };

    return (
        <HeroUIProvider>
            <App title="ผังห้อง">
                <div className="max-w-6xl mx-auto p-6">
                    <h1 className="text-2xl font-bold text-center mb-6">เลือกรอบมิเตอร์</h1>

                    {/* Date Header with Month Picker */}
                    <div className="bg-white rounded-lg shadow p-4 mb-6">
                        <div className="flex items-center justify-center gap-4">
                            <div className="relative">
                                <select
                                    value={selectedMonth}
                                    onChange={(e) => setSelectedMonth(e.target.value)}
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
                                    onChange={(e) => setSelectedYear(e.target.value)}
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

                    {/* Period Display */}
                    <div className="text-center mb-6">
                        <h2 className="text-xl">{`${getMonthName(selectedMonth)}/${parseInt(selectedYear) + 543 - 2567 + 2024}`}</h2>
                    </div>

                    {/* Rest of your existing JSX... */}
                    {/* Search and Filter Section */}
                    <div className="flex gap-4 mb-6">
                        <div className="flex-1">
                            <button className="w-full p-2 border rounded-lg text-left bg-white hover:bg-gray-50">
                                บิลทั้งหมด
                            </button>
                        </div>
                        <div className="flex-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="ค้นหาตามหมายเลขห้อง"
                                    className="w-full p-2 border rounded-lg pl-10"
                                />
                                <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-between mb-6">
                        <div className="flex gap-2">
                            <button className="flex items-center gap-2 bg-sky-400 text-white px-4 py-2 rounded-lg">
                                <FileText className="w-5 h-5" />
                                พิมพ์หลายห้อง
                            </button>
                            <button className="flex items-center gap-2 bg-sky-400 text-white px-4 py-2 rounded-lg">
                                <FileText className="w-5 h-5" />
                                พิมพ์ใบสรุปบิล
                            </button>
                        </div>
                        <div className="flex gap-2">
                            <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg">
                                <Download className="w-5 h-5" />
                                ดาวน์โหลด Excel
                            </button>
                            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
                                <Send className="w-5 h-5" />
                                ส่งบิล
                            </button>
                        </div>
                    </div>

                    {/* Room Grid */}
                    {floors.map((floor, floorIndex) => (
                        <div key={floorIndex} className="mb-8">
                            <div className="bg-sky-400 text-white p-3 rounded-t-lg">
                                <h3 className="text-lg">ชั้นที่ {floor.floorNumber}</h3>
                            </div>
                            <div className="grid grid-cols-4 gap-4 p-4 bg-white rounded-b-lg shadow">
                                {floor.rooms.map((room) => (
                                    <div key={room.number} className="text-center">
                                        <div className="text-lg mb-2">{room.number}</div>
                                        <div className={`w-24 h-24 mx-auto rounded-lg flex items-center justify-center ${getStatusColor(room.status)}`}>
                                            <FileText className="w-12 h-12 text-white" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </App>
        </HeroUIProvider>
    );
}