import React, { FC } from 'react'
import { useFormik } from 'formik'
import { Input } from '~/shared/components/Input'
import { Button } from '~/shared/components/Button'

export const SignupView: FC = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            passwordConfirmation: '',
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        },
    })
    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <h1 className="text-3xl font-bold">Registreer</h1>
                <Input
                    type="text"
                    label="Naam"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                <Input
                    type="email"
                    label="Emailadres"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <Input
                    type="password"
                    label="Wachtwoord"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                <Input
                    type="password"
                    label="Herhaal wachtwoord"
                    name="passwordConfirmation"
                    onChange={formik.handleChange}
                    value={formik.values.passwordConfirmation}
                />
                <Button
                    type={'submit'}
                    iconEnabled
                    onClick={formik.handleSubmit}
                >
                    Registreren
                </Button>
            </form>
        </>
    )
}
