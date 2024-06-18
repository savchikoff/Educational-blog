"use client"

import { Button, Stack } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod';
import { Field } from '@/shared/ui';
import { verificationFormSchema } from '../model/verificationFormSchema';

type Inputs = {
    code?: string
}


export function VerificationForm() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<Inputs>({
        resolver: zodResolver(verificationFormSchema),
        mode: "onBlur"
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        router.push('/');
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <Stack direction="column" gap="16px" >
                <Field register={register} name="code" label="Code" type="text" error={errors.code} />
                <Button disabled={!isValid} type='submit' variant="contained" > Submit </Button>
            </Stack>
        </form>
    )
}