import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { DASHBOARD_PATHS } from '~/dashboard/dashboard.const'
import { Icon } from '~/shared/components/Icon'
import { ICONS } from '~/shared/components/Icon/Icon.const'
import { PointsCard } from '~/dashboard/components/PointsCard'
import { Button } from '~/shared/components/Button'
import { Heading } from '~/shared/components/Heading'
import { HEADING_CONST } from '~/shared/components/Heading/Heading.const'

export const OrderView: FC = () => {
    return (
        <div className="col-span-4 lg:col-start-5 mt-28 mb-12 md:col-start-3 sm:col-start-1">
            <Link className="flex gap-2" to={DASHBOARD_PATHS.root}>
                <Icon icon={ICONS.arrowLeft} />
                <p className="underline">terug naar startscherm</p>
            </Link>
            <PointsCard
                points={20}
                title="🤑 coffee points"
                className="mt-8 mb-6"
            />
            <Heading type={HEADING_CONST.h3} style={HEADING_CONST.h3}>
                How much you want?
            </Heading>
            <Button
                type={'button'}
                className="bg-light-grey w-full py-6 rounded-2xl mt-24"
                iconEnabled={true}
                iconPosition={'right'}
                icon={ICONS.arrowRight}
            >
                Continue to checkout
            </Button>
        </div>
    )
}
