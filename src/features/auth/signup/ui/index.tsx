"use client"

import { Button, Stack } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod';
import { Field } from '@/shared/ui';
import { signupFormSchema } from '../model/signupFormSchema';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { signupUser } from '@/shared/lib/features/auth/authActions';

type Inputs = {
    email: string,
    password: string,
    userName: string
}


export function SignUpForm() {
    const { loading, userInfo, error, success } = useAppSelector((state) => state.authReducer);
    const dispatch = useAppDispatch();

    const router = useRouter();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid },
    } = useForm<Inputs>({
        resolver: zodResolver(signupFormSchema),
        mode: "onBlur"
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        dispatch(signupUser(data));

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack direction="column" gap="16px">
                <Field register={register} name="email" label="Email" type="email" error={errors.email} />
                <Field register={register} name="password" label="Password" type="password" error={errors.password} />
                <Field register={register} name="userName" label="Username" type="text" error={errors.userName} />
                <Button disabled={!isValid || loading} type='submit' variant="contained">Submit</Button>
            </Stack>
        </form>
    )
}