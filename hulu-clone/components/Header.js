import {
    HomeIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import HeaderItem from "./HeaderItem";

export default function Header() {
    return (
        <header className="object-contain">
            <h1>Header</h1>
            <div>
                <HeaderItem title='HOME' Icon={HomeIcon}/>
            </div>
            <Image src="https://links.papareact.com/ua6"
                width={200}
                height={100}
            />
        </header>
    )
}
