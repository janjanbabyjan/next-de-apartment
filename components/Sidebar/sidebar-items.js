import { Icon } from "@iconify/react";
import { SidebarItemType } from "./sidebar";

export const sectionItemsWithTeams = [
  {
    key: "main",
    title: "เมนูหลัก",
    items: [
      {
        key: "room_layout",
        href: "/room-layout",
        icon: "solar:buildings-2-outline",
        title: "ผังห้อง",
      },
      {
        key: "meter",
        href: "/meter",
        icon: "solar:battery-charge-outline",
        title: "มิเตอร์",
      },
      {
        key: "rent_bill",
        href: "/rent-bill",
        icon: "solar:bill-list-outline",
        title: "บิลค่าเช่า",
      },
      {
        key: "payment",
        href: "/payment",
        icon: "solar:hand-money-outline",
        title: "จ่ายบิล",
      },
      {
        key: "calendar",
        href: "/calendar",
        icon: "solar:calendar-mark-outline",
        title: "ปฏิทิน",
      },
      {
        key: "parcel",
        href: "/parcel",
        icon: "solar:box-outline",
        title: "พัสดุ",
      },
      {
        key: "notifications",
        href: "/notifications",
        icon: "solar:bell-outline",
        title: "สรุปการแจ้ง",
      }
    ]
  },
  {
    key: "finance",
    title: "การเงิน",
    items: [
      {
        key: "transactions",
        href: "/transactions",
        icon: "solar:wallet-money-outline",
        title: "รายรับ-จ่าย",
      },
      {
        key: "analytics",
        href: "/analytics",
        icon: "solar:chart-outline",
        title: "วิเคราะห์",
      },
      {
        key: "reports",
        href: "/reports",
        icon: "solar:document-text-outline",
        title: "รายงานสรุป",
      }
    ]
  },
  {
    key: "management",
    title: "การจัดการ",
    items: [
      {
        key: "tenants",
        href: "/tenants",
        icon: "solar:users-group-two-rounded-outline",
        title: "ผู้เช่า",
      },
      {
        key: "vehicles",
        href: "/vehicles",
        icon: "solar:car-outline",
        title: "ยานพาหนะ",
      },
      {
        key: "personnel",
        href: "/personnel",
        icon: "solar:user-id-outline",
        title: "บุคลากร",
      }
    ]
  },
  {
    key: "settings",
    title: "ระบบ",
    items: [
      {
        key: "accounting",
        href: "/accounting",
        icon: "solar:calculator-outline",
        title: "บัญชี",
      },
      {
        key: "settings",
        href: "/settings",
        icon: "solar:settings-outline",
        title: "ตั้งค่าหอ",
      }
    ]
  }
];

// Export other variations if needed
export const items = sectionItemsWithTeams[0].items;
export const sectionItems = sectionItemsWithTeams;
export const brandItems = sectionItemsWithTeams;
export const sectionLongList = sectionItemsWithTeams;
export const sectionNestedItems = items;