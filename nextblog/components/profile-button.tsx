import Link from "next/link";
import { Button } from "./ui/button";


export default function ProfileButton() {

    // user not connected => afficher le button login
    return (
        <Link href={"/login"}>
            <Button>
                login
            </Button>
        </Link>
    )
}