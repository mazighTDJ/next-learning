"use client"

import { Moon, Sun } from "lucide-react"
import { Button } from "./ui/button"
import { useTheme } from "next-themes"

export default function ToggleTheme() {
    const { theme, setTheme } = useTheme()
    
    const toggleTheme = () => {
        
        setTheme( theme == "dark" ? "light": "dark")
    }

    return (
        <Button
            variant={"ghost"}
            size={"icon"}
            className="flex justify-center"
            onClick={toggleTheme}

        >
            <Moon className="h6 w6 scale-100 dark:scale-0"/>
            <Sun className="h6 w6 scale-0 dark:scale-100"/>
            
        </Button>
    )
}