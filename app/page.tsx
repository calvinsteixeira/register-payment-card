"use client";
import { useThemeStore } from "@/store";
import { Button } from "@/components/ui/button";
import { Plus } from "@/icons";
import { PaymentCardPreview } from "@/components/index";

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
      <div className="flex flex-col gap-6 mt-8">
        <h3 className="text-sm">Você pode adicionar até <span className="text-primary">5 cartões</span></h3>
        <div>
          <PaymentCardPreview />
        </div>
      </div>
    </main>
  );
}
