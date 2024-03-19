
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

  
export default function ResponsiveMenu() {

    return (
        <Sheet>

            {
                /**Definir l'icon du menu */
            }
            <SheetTrigger >
                <Menu className="h-6 w-6 md:hidden"   />
            </SheetTrigger>
        </Sheet>
    )


}