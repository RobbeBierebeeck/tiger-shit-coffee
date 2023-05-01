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
            <div className="flex flex-col w-full h-screen xl:flex-row">
                <div className="w-full h-1/2 bg-coffee-background bg-no-repeat bg-cover bg-center xl:w-1/2 xl:h-screen"></div>
                <div className="w-full flex justify-center items-center xl:w-1/2 p-4">
                    <form
                        onSubmit={formik.handleSubmit}
                        className="flex flex-col"
                    >
                        <h1 className="h1 pb-8">Signup</h1>
                        <Input
                            type="email"
                            label="Email"
                            name="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        <Input
                            type="password"
                            label="Password"
                            name="password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />
                        <Input
                            type="password"
                            label="Confirm password"
                            name="passwordConfirmation"
                            onChange={formik.handleChange}
                            value={formik.values.passwordConfirmation}
                        />
                        <Button
                            type={'submit'}
                            iconEnabled={false}
                            onClick={formik.handleSubmit}
                        >
                            Signup
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}
