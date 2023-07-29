'use client'

import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons";

const ThemeToggle = () => {
  const {setTheme, theme} = useTheme()

  return (
    <Button
      variant={"ghost"}
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <Icons.sun /> : <Icons.moon />}

      <span className="absolute "></span>
    </Button>
  );
}

export default ThemeToggle