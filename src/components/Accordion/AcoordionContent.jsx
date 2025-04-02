import { useAccordionContext } from "./Accordion"

const AcoordionContent = ({ children, id, className }) => {
    const { openItemId } = useAccordionContext()
    const isOpen = openItemId === id;
    return (
        <div className={`${className ?? ''} ${isOpen ? 'open' : 'close'}`}>
            {children}
        </div>

    )
}

export default AcoordionContent
