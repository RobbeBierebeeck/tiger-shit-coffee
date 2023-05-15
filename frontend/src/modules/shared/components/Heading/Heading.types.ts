import { HEADING_CONST } from '~/shared/components/Heading/Heading.const'
import { ReactNode } from 'react'

export type HeadingProps = {
    type: `${HEADING_CONST}`
    children: ReactNode
    style: `${HEADING_CONST}`
}
