import React, { FC } from 'react'
import { Formik } from 'formik'
import { Input } from '~/shared/components/Input'
import { Button } from '~/shared/components/Button'
import { inputValidation } from '~/auth/views/SignupView/signup.const'

export const SignupView: FC = () => {
    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    passwordConfirmation: '',
                }}
                validationSchema={inputValidation}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        setSubmitting(false)
                    }, 400)
                }}
            >
                {({
                    handleSubmit,
                    values,
                    errors,
                    setFieldValue,
                    touched,
                    setFieldTouched,
                }) => (
                    <div className="flex flex-col w-full h-screen xl:flex-row">
                        <div className="w-full h-1/2 bg-coffee-background bg-no-repeat bg-cover bg-center xl:w-1/2 xl:h-screen"></div>
                        <div className="w-full flex justify-center items-center xl:w-1/2 p-4">
                            <form
                                onSubmit={handleSubmit}
                                className="flex flex-col"
                            >
                                <h1 className="h1 pb-8">Signup</h1>
                                <Input
                                    type="email"
                                    label="Email"
                                    name="email"
                                    onChange={(value: string) => {
                                        setFieldTouched('email', true)
                                        setFieldValue('email', value)
                                    }}
                                    value={values.email}
                                    error={errors.email}
                                    touched={touched.email}
                                />

                                <Input
                                    type="password"
                                    label="Password"
                                    name="password"
                                    onChange={(value: string) => {
                                        setFieldTouched('password', true)
                                        setFieldValue('password', value)
                                    }}
                                    value={values.password}
                                    error={errors.password}
                                    touched={touched.password}
                                />

                                <Input
                                    type="password"
                                    label="Confirm password"
                                    name="passwordConfirmation"
                                    onChange={(value: string) => {
                                        setFieldTouched(
                                            'passwordConfirmation',
                                            true
                                        )
                                        setFieldValue(
                                            'passwordConfirmation',
                                            value
                                        )
                                    }}
                                    value={values.passwordConfirmation}
                                    error={errors.passwordConfirmation}
                                    touched={touched.passwordConfirmation}
                                />

                                <Button
                                    type={'submit'}
                                    iconEnabled={false}
                                    onClick={handleSubmit}
                                >
                                    Signup
                                </Button>
                            </form>
                        </div>
                    </div>
                )}
            </Formik>
        </>
    )
}
