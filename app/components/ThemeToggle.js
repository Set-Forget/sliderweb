"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Switch } from "@nextui-org/switch";
import { Moon } from "@/public/Moon";
import { Sun } from "@/public/Sun";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Switch
      defaultSelected={theme === 'light'}
      size="sm"
      color="secondary"
      startContent={<Sun />}
      endContent={<Moon />}
      onChange={handleToggle}
      className=""
    >
    </Switch>
  );
};

export default ThemeToggle;