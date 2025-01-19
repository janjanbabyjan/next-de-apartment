"use client";

import React from "react";
import { HeroUIProvider } from "@heroui/react";
import App from "../../components/Sidebar/App";
import RoomLayout from "./RoomLayout";

export default function OwnerDashboard() {
    return (
        <HeroUIProvider>
            <App title="Room Management">
                <RoomLayout />
            </App>
        </HeroUIProvider>
    );
}