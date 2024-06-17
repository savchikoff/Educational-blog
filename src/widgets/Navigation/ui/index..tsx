import { anchors } from "@/shared/consts/routes"
import { List, ListItemButton, ListItemText } from "@mui/material"
import Link from "next/link"

export function Navigation() {
    return (
        <nav>
            <List sx={{ display: 'flex', gap: "8px" }}>
                {anchors.map(({ id, text, anchor }) => (
                    <Link key={id} href={anchor}>
                        <ListItemButton alignItems="center">
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </Link>
                ))}
            </List>
        </nav>
    )
}
