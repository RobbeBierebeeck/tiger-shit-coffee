import React, { FC, useEffect, useState } from 'react'
import { Heading } from '~/shared/components/Heading'
import { HEADING_CONST } from '~/shared/components/Heading/Heading.const'
import { ICONS } from '~/shared/components/Icon/Icon.const'
import { Button } from '~/shared/components/Button'
import { PointsCard } from '~/dashboard/components/PointsCard'
import { Navigation } from '~/dashboard/components/Navigation'
import { Link, useNavigate } from 'react-router-dom'
import { ORDER_PATHS } from '~/order/order.const'
import { useUser } from '~/app/hooks'
import { trimUsername } from '~/dashboard/helpers'
import { useTransactionMutation } from '~/dashboard/hooks'
import { AUTH_PATHS } from '~/auth/auth.const'
import { ConfirmationModal } from '~/shared/components/ConfirmationModal'
import Cookies from 'universal-cookie'

export const DashboardView: FC = () => {
    const cookies = new Cookies()
    const navigate = useNavigate()
    const { data: user } = useUser()
    const { mutate: transaction } = useTransactionMutation()
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [points, setPoints] = useState(0)

    useEffect(() => {
        setPoints(user?.coffeePoints || 0)
    }, [user])

    const handlePoorCoffee = () => {
        setIsModalOpen(true)
    }
    const handleConfirm = () => {
        transaction({ userId: user?._id || '' })
        setIsModalOpen(false)
        setPoints(points ? points - 1 : 0)
    }
    const handleLogout = () => {
        cookies.remove('token')

        navigate(AUTH_PATHS.login)
    }
    return (
        <>
            <div className="col-span-4 lg:col-start-5 mt-28 mb-12 md:col-start-3 sm:col-start-1">
                <Heading type={HEADING_CONST.h1} style={HEADING_CONST.h1}>
                    👋 Hi {trimUsername(user?.email || '')}
                </Heading>
                <Heading type={HEADING_CONST.h2} style={HEADING_CONST.h2}>
                    Let&#39;s get you caffeinated!
                </Heading>
                <PointsCard
                    points={points}
                    title="🤑 coffee points"
                    className="mt-8 mb-6"
                />
                <Button
                    type="button"
                    onClick={handlePoorCoffee}
                    className="bg-black text-white w-full py-6 rounded-2xl"
                    iconEnabled={true}
                    iconPosition={'right'}
                    icon={ICONS.coffee}
                >
                    Poor my coffee
                </Button>

                <Link to={ORDER_PATHS.root}>
                    <Button
                        type="button"
                        className="bg-light-grey w-full py-6 rounded-2xl mt-24"
                        iconEnabled={true}
                        iconPosition={'right'}
                        icon={ICONS.arrowRight}
                    >
                        Buy more
                    </Button>
                </Link>
                <Navigation onLogout={handleLogout} />
            </div>
            <ConfirmationModal
                title="Ben je zeker dat je een koffie wil poor'n?"
                description="Bij het poor'n van een koffie zal er 1 punt van je totaal aantal punten afgetrokken worden."
                onConfirm={handleConfirm}
                onCancel={() => {
                    setIsModalOpen(false)
                }}
                isOpen={isModalOpen}
            />
        </>
    )
}
