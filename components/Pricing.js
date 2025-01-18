import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Building2, Gauge, DollarSign, FileText, Package, BarChart3, ClipboardList, Users, Receipt, CreditCard, Bell, HomeIcon, Users2, Gift, Building } from 'lucide-react';

const Features = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const businessFeatures = [
    {
      title: "ผังห้อง",
      Icon: Building2
    },
    {
      title: "มิเตอร์",
      Icon: Gauge
    },
    {
      title: "ทำบิล",
      Icon: DollarSign
    },
    {
      title: "สัญญาเช่า",
      Icon: FileText
    },
    {
      title: "พัสดุ",
      Icon: Package
    },
    {
      title: "วิเคราะห์ข้อมูล",
      Icon: BarChart3
    },
    {
      title: "รายการสรุป",
      Icon: ClipboardList
    },
    {
      title: "สื่อสารผู้เช่า",
      Icon: Users
    },
  ];

  const tenantFeatures = [
    {
      title: "ดูบิลออนไลน์",
      Icon: Receipt
    },
    {
      title: "แจ้งชำระเงินออนไลน์",
      Icon: CreditCard
    },
    {
      title: "กระดานข่าวสาร",
      Icon: ClipboardList
    },
    {
      title: "การแจ้งเตือน",
      Icon: Bell
    },
    {
      title: "วิเคราะห์ค่าห้อง",
      Icon: HomeIcon
    },
    {
      title: "คอมมูนิตี้",
      Icon: Users2
    },
    {
      title: "สะสมแต้ม",
      Icon: Gift
    },
    {
      title: "ส่วนกลาง",
      Icon: Building
    },
  ];

  const FeatureGrid = ({ features, title }) => (
    <motion.div
      variants={scrollAnimation}
      className="flex flex-col w-full items-center mb-20"
    >
      <h2 className="text-3xl lg:text-4xl font-bold text-black-600 leading-normal text-center mb-12">
        {title}
      </h2>
  
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={scrollAnimation}
            className="flex flex-col items-center p-4 rounded-xl hover:shadow-lg transition-shadow"
            style={{ backgroundColor: 'rgba(191, 234, 245, 0.3)' }}
            whileHover={{
              scale: 1.05,
              transition: {
                duration: 0.2
              }
            }}
          >
            <div className="p-4 bg-white rounded-full mb-4 shadow-sm">
              <feature.Icon size={24} className="text-blue-600" />
            </div>
            <h3 className="text-lg font-medium text-black-600 text-center">
              {feature.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="w-full py-14 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto">
        <ScrollAnimationWrapper>
          <div className="flex flex-col gap-16" >
            <FeatureGrid 
              features={businessFeatures} 
              title="ฟังก์ชั่นฝั่งผู้ประกอบการ" 
            />
            <FeatureGrid 
              features={tenantFeatures} 
              title="ฟังก์ชั่นฝั่งผู้เช่า" 
            />
          </div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Features;