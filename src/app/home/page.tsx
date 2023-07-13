"use client";
// ===================================all imports===================================

// ==========================import from react==========================
import { useEffect } from "react";

// ==========================import from next==========================
import { useRouter } from "next/navigation";

// ==========================import state management==========================
import useUser from "@/store/userStore";

// ==========================import chakraui components==========================
import { Heading, Box } from "@chakra-ui/react";

// ==========================import custom components==========================
import MainMenu from "@/components/general/MainMenu";

// ==========================import external functions==========================
import { userLoginProtection } from "@/routeProtectors";

// ==========================import external variables==========================

// ==========================import types/interfaces==========================
import { MenuOption } from "@/types/HomePage/menuOptions";

// ==========================etc==========================

import TeamsImage from "../../images/homepage/TeamsImage.png";
import CalendarImage from "../../images/homepage/CalendarImage.png";
import ProfileImage from "../../images/homepage/ProfileImage.png";
import NotificationImage from "../../images/homepage/NotificationImage.png";
import LogoutImage from "../../images/homepage/LogoutImage.png";

// ===================================main component===================================
// ===============component exclusive interface(s)/type(s) if any===============

export default function HomePage() {
    // ===============constants===============
    const { user } = useUser();
    const router = useRouter();
    const menuOptions: MenuOption[] = [
        {
            label: "Manage Teams",
            icon: TeamsImage,
            path: "/teams",
        },
        {
            label: "View Calendar",
            icon: CalendarImage,
            path: "/profile/calendar",
        },
        {
            label: "Manage Profile",
            icon: ProfileImage,
            path: "/home/profile",
        },
        {
            label: "Manage Notifications",
            icon: NotificationImage,
            path: "/home/notifications",
        },
        {
            label: "Logout",
            icon: LogoutImage,
            path: "/logout",
        },
    ];

    // ===============states===============

    // ===============helper functions (will not be directly triggered)===============

    // ===============main functions (will be directly triggered)===============

    // ===============useEffect===============
    useEffect(() => {
        userLoginProtection(user, router);
    }, []);
    return (
        <Box p={10}>
            {user ? (
                <>
                    <Heading textAlign={"center"} fontWeight={"normal"}>
                        Hello {user.username}, what would you like to do today?
                    </Heading>
                </>
            ) : null}
            <MainMenu menuOptions={menuOptions} />
        </Box>
    );
}

// ===================================sub component(s) if any===================================
// ===============component exclusive interface(s)/type(s) if any===============
// the rest are pretty much similar like the main components