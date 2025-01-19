"use client";

import React from "react";
import { Button, Input } from "@heroui/react";

export default function RoomLayout() {
  // ข้อมูลสรุปห้องพัก
  const summaryData = [
    { count: 5, label: "ห้องมีคนเข้าพัก", color: "bg-green-500" },
    { count: 1, label: "ห้องว่าง", color: "bg-yellow-300" },
    { count: 1, label: "ค้างชำระ", color: "bg-red-500" },
    { count: 2, label: "ห้องว่าง", color: "bg-gray-400" }
  ];

  // ข้อมูลห้องพักแต่ละชั้น
  const floorData = [
    {
      floor: 1,
      rooms: [
        { id: "101", status: "occupied", color: "bg-green-500" },
        { id: "102", status: "occupied", color: "bg-green-500" },
        { id: "103", status: "maintenance", color: "bg-red-500" },
        { id: "104", status: "vacant", color: "bg-yellow-300" }
      ]
    },
    {
      floor: 2,
      rooms: [
        { id: "201", status: "occupied", color: "bg-green-500" },
        { id: "202", status: "occupied", color: "bg-green-500" },
        { id: "203", status: "reserved", color: "bg-gray-400" },
        { id: "204", status: "reserved", color: "bg-gray-400" }
      ]
    }
  ];

  return (
    <div className="w-full">
      {/* สรุปข้อมูลห้องพัก */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {summaryData.map((item, index) => (
          <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg shadow">
            <div className={`w-8 h-8 rounded-full ${item.color}`}></div>
            <div>
              <div className="text-lg font-semibold">{item.count} ห้อง</div>
              <div className="text-sm text-gray-600">{item.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ส่วนค้นหาและฟิลเตอร์ */}
      <div className="flex gap-4 mb-6">
        <Input
          className="flex-1"
          placeholder="ค้นหาตามหมายเลขห้อง"
          startContent={<SearchIcon className="text-gray-400" />}
        />
        <Button variant="flat">
          ฟิลเตอร์ห้อง
        </Button>
        <Button variant="flat">
          ตั้งค่าการแสดงผล
        </Button>
      </div>

      {/* แสดงห้องพักแต่ละชั้น */}
      <div className="space-y-6">
        {floorData.map((floor) => (
          <div key={floor.floor} className="bg-white rounded-lg shadow">
            <div className="p-4 bg-sky-600 text-white rounded-t-lg">
              ชั้นที่ {floor.floor}
            </div>
            <div className="grid grid-cols-4 gap-6 p-6">
              {floor.rooms.map((room) => (
                <div key={room.id} className="aspect-square">
                  <div className={`${room.color} w-full h-full rounded-lg flex items-center justify-center`}>
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      {room.id}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const SearchIcon = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 21L16.65 16.65"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);