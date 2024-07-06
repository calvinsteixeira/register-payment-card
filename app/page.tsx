"use client";
import { useThemeStore } from "@/store";
import { Button } from "@/components/ui/button";
import { Plus } from "@/icons";

export default function Home() {
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <main>
      <div className="flex flex-row gap-2 items-center">
        <h1 className="text-2xl font-bold">Seus cartões</h1>
        <Button variant={"outline"} size={"xsm"}>
          <Plus className="i-sm mr-1" /> Novo cartão
        </Button>
      </div>
    </main>
  );
}
