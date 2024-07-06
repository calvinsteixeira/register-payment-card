'use client'
import { useThemeStore } from "@/store";

export default function Home() {
  const toggleTheme = useThemeStore((state) => state.toggleTheme)

  return (
    <main>      
      <h1 className="text-2xl font-bold">Seus cartões</h1>      
    </main>
  );
}
