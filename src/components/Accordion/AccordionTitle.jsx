import React from 'react'
import { useAccordionContext } from './Accordion'

const AccordionTitle = ({ id, children, className }) => {
    const { toggleItem } = useAccordionContext()
    return (<h3 className={className} onClick={() => toggleItem(id)}>{children}</h3>
    )
}

export default AccordionTitle
