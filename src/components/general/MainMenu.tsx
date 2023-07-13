"use client";
// ===================================all imports===================================

// ==========================import from react==========================

// ==========================import from next==========================
import Image from "next/image";
import NextLink from "next/link";

// ==========================import state management==========================

// ==========================import chakraui components==========================
import { SimpleGrid, Box, Text } from "@chakra-ui/react";

// ==========================import custom components==========================

// ==========================import external functions==========================

// ==========================import external variables==========================

// ==========================import types/interfaces==========================
import { MenuOption } from "@/types/HomePage/menuOptions";

// ===================================main component===================================
// ===============component exclusive interface(s)/type(s) if any===============

export default function MainMenu({
    menuOptions,
}: {
    menuOptions: MenuOption[];
}) {
    // ===============constants===============

    // ===============states===============

    // ===============helper functions (will not be directly triggered)===============

    // ===============main functions (will be directly triggered)===============

    // ===============useEffect===============

    return (
        <>
            {menuOptions ? (
                <>
                    <SimpleGrid columns={[1, 2, null, 4]} width="100%">
                        {menuOptions.map(
                            (
                                { label, icon, path }: MenuOption,
                                index: number
                            ) => {
                                return (
                                    <NextLink href={path} key={index}>
                                        <Box
                                            margin="10px"
                                            background="white"
                                            p={5}
                                            borderRadius={5}
                                        >
                                            <Image alt={label} src={icon} />
                                            <Text textAlign={"center"}>
                                                {label}
                                            </Text>
                                        </Box>
                                    </NextLink>
                                );
                            }
                        )}
                    </SimpleGrid>
                </>
            ) : (
                <></>
            )}
        </>
    );
}

// ===================================sub component(s) if any===================================
// ===============component exclusive interface(s)/type(s) if any===============
// the rest are pretty much similar like the main components