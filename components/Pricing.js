"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, Gauge, DollarSign, FileText, 
  Package, BarChart3, ClipboardList, Users, 
  Receipt, CreditCard, Bell, HomeIcon, 
  Users2, Gift, Building 
} from 'lucide-react';

const Features = () => {
  const businessFeatures = [
    { title: "ผังห้อง", Icon: Building2 },
    { title: "มิเตอร์", Icon: Gauge },
    { title: "ทำบิล", Icon: DollarSign },
    { title: "สัญญาเช่า", Icon: FileText },
    { title: "พัสดุ", Icon: Package },
    { title: "วิเคราะห์ข้อมูล", Icon: BarChart3 },
    { title: "รายการสรุป", Icon: ClipboardList },
    { title: "สื่อสารผู้เช่า", Icon: Users }
  ];

  const tenantFeatures = [
    { title: "ดูบิลออนไลน์", Icon: Receipt },
    { title: "แจ้งชำระเงินออนไลน์", Icon: CreditCard },
    { title: "กระดานข่าวสาร", Icon: ClipboardList },
    { title: "การแจ้งเตือน", Icon: Bell },
    { title: "วิเคราะห์ค่าห้อง", Icon: HomeIcon },
    { title: "คอมมูนิตี้", Icon: Users2 },
    { title: "สะสมแต้ม", Icon: Gift },
    { title: "ส่วนกลาง", Icon: Building }
  ];

  const FeatureSection = ({ title, features }) => (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-center mb-8">
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#f8fbff] rounded-lg p-6 flex flex-col items-center cursor-pointer hover:bg-[#f0f7ff] transition-all duration-300"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-sm mb-4">
              <feature.Icon className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-center text-sm font-medium">
              {feature.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <FeatureSection 
        title="ฟังก์ชั่นฝั่งผู้ประกอบการ"
        features={businessFeatures}
      />
      <FeatureSection 
        title="ฟังก์ชั่นฝั่งผู้เช่า"
        features={tenantFeatures}
      />
    </div>
  );
};

export default Features;