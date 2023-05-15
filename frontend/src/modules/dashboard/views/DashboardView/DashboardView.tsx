import React, { FC } from 'react'
import { Heading } from '~/shared/components/Heading'
import { HEADING_CONST } from '~/shared/components/Heading/Heading.const'
import { ICONS } from '~/shared/components/Icon/Icon.const'
import { Button } from '~/shared/components/Button'
import { PointsCard } from '~/dashboard/components/PointsCard'
import { Navigation } from '~/dashboard/components/Navigation'
import { Link } from 'react-router-dom'
import { ORDER_PATHS } from '~/order/order.const'
import { useUser } from '~/app/hooks'
import { trimUsername } from '~/dashboard/helpers'

export const DashboardView: FC = () => {
    const { data: user, isFetching: isLoadingUser } = useUser()
    return (
        <div className="col-span-4 lg:col-start-5 mt-28 mb-12 md:col-start-3 sm:col-start-1">
            <Heading type={HEADING_CONST.h1} style={HEADING_CONST.h1}>
                👋 Hi {trimUsername(user?.email || '')}
            </Heading>
            <Heading type={HEADING_CONST.h2} style={HEADING_CONST.h2}>
                Let’s get you caffenaited!
            </Heading>
            <PointsCard
                points={user?.coffeePoints || 0}
                title="🤑 coffee points"
                className="mt-8 mb-6"
            />
            <Button
                type="button"
                onClick={() => console.log('poor my coffee')}
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
            <Navigation />
        </div>
    )
}
