import { Icon } from "@iconify/react";
import { SidebarItemType } from "./sidebar";

export const sectionItemsWithTeams = [
  {
    key: "main",
    title: "เมนูหลัก",
    items: [
      {
        key: "room_layout",
        href: "/owner",
        icon: "solar:buildings-2-outline",
        title: "ผังห้อง",
      },
      {
        key: "meter",
        href: "/owner/meter",
        icon: "solar:battery-charge-outline",
        title: "มิเตอร์",
      },
      {
        key: "rent_bill",
        href: "/owner/rent-bill",
        icon: "solar:bill-list-outline",
        title: "บิลค่าเช่า",
      },
      {
        key: "payment",
        href: "#",
        icon: "solar:hand-money-outline",
        title: "จ่ายบิล",
      },
      {
        key: "calendar",
        href: "#",
        icon: "solar:calendar-mark-outline",
        title: "ปฏิทิน",
      },
      {
        key: "parcel",
        href: "#",
        icon: "solar:box-outline",
        title: "พัสดุ",
      },
      {
        key: "notifications",
        href: "#",
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
        href: "#",
        icon: "solar:wallet-money-outline",
        title: "รายรับ-จ่าย",
      },
      {
        key: "analytics",
        href: "#",
        icon: "solar:chart-outline",
        title: "วิเคราะห์",
      },
      {
        key: "reports",
        href: "#",
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
        href: "#",
        icon: "solar:users-group-two-rounded-outline",
        title: "ผู้เช่า",
      },
      {
        key: "vehicles",
        href: "#",
        icon: "solar:car-outline",
        title: "ยานพาหนะ",
      },
      {
        key: "personnel",
        href: "#",
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
        href: "#",
        icon: "solar:calculator-outline",
        title: "บัญชี",
      },
      {
        key: "settings",
        href: "#",
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