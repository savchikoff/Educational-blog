import { Container, Stack } from '@mui/material'
import Link from 'next/link'
import { SignInForm } from '@/features/auth'

function SignIn() {
    return (
        <Container maxWidth={false}>
            <Stack direction="column" alignItems="center" justifyContent="center" gap="24px" width="100%">
                <h1>Sign In</h1>
                <SignInForm />
                <p>Don't have an account? <Link href={"/signup"} style={{ color: "#1976d2" }}>Sign Up</Link></p>
            </Stack>
        </Container>
    )
}

export default SignIn