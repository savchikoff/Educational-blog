import { anchors } from "@/shared/consts/routes"
import Link from "next/link"

export function Navigation() {
    return (
        <nav>
            <ul className="flex border-b">
                {anchors.map(({ id, text, anchor }) => (
                    <li key={id} className="-mb-px mr-1">
                        <Link href={anchor}>{text}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
