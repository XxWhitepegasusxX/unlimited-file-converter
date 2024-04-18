'use client';

import React from "react";
import { useTheme } from "next-themes";

import { Button } from "../ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

export function ModeToggle(){
    const { theme, setTheme } = useTheme();

    return (
        <Button variant={"ghost"} onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <SunIcon/> : <MoonIcon/>}
        </Button>
    )
}