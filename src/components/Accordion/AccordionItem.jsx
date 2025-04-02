import React from 'react'
import { useAccordionContext } from './Accordion'

const AccordionItem = ({ className, children }) => {



    return (
        <li className={className}>
            {children}
        </li>
    )
}

export default AccordionItem
