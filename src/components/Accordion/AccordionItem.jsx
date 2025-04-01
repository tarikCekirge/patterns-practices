import React from 'react'

const AccordionItem = ({ className, title, children }) => {
    return (
        <li className={className}>
            <h3>{title}</h3>
            <div>{children}</div>
        </li>
    )
}

export default AccordionItem
