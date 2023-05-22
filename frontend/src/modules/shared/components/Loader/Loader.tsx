import React, { FC } from 'react'
import { LoaderProps } from './Loader.types'

export const Loader: FC<LoaderProps> = ({ children, isLoading = false }) => {
    return (
        <>
            {isLoading ? (
                <div className="loader">
                    <div className="loader__overlay">
                        <div className="loader__spinner"></div>
                    </div>
                    <div>{children}</div>
                </div>
            ) : (
                <div>{children}</div>
            )}
        </>
    )
}
