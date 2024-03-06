import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      < Button variant={"default"}> 
        <Eye size={24} />
      Clique me, test de la taille du boutton</Button>
    </main>
  );
}
