'use client'

import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons";

const ThemeToggle = () => {
  const {setTheme, themes} = useTheme()

  return (
    <Button>
      <Icons.sun />
      <Icons.moon />
    </Button>
  )
}

export default ThemeToggle