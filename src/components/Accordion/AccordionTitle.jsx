import React from 'react'
import { useAccordionContext } from './Accordion'
import { useAccordionItemContext } from './AccordionItem'

const AccordionTitle = ({ children, className }) => {
    const id = useAccordionItemContext()
    const { toggleItem } = useAccordionContext()
    return (<h3 className={className} onClick={() => toggleItem(id)}>{children}</h3>
    )
}

export default AccordionTitle
