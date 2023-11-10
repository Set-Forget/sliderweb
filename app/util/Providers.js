"use client";
import { ThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <NextUIProvider>{children}</NextUIProvider>
    </ThemeProvider>
  );
}