import Image from "next/image"
import Link from "next/link"
import { AppBar, Button, Stack, Toolbar } from "@mui/material"
import { Navigation } from "@/widgets/navigation"

export function Header() {
    return (
        <AppBar position="static" elevation={0}>
            <Toolbar>
                <Stack direction="row" justifyContent="space-between" alignItems="center" width="100%">
                    <Link href="/">
                        <Image src={"/logo.svg"} alt="logo" width={174} height={40} />
                    </Link>
                    <Navigation />
                    <Button variant="outlined" color="white" href="/signin">Sign in</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

