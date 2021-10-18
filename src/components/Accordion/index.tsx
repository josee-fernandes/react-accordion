import React from 'react'

import { Div, AccordionTrigger, AccordionItems } from './styles'

import { IAccordion } from '../../interfaces/accordion'

import { AccordionItem } from '../AccordionItem'

export const Accordion: React.FC<IAccordion> = ({ items }) => {
   const [isOpen, setIsOpen] = React.useState(false)

   const handleToggleAccordion = () => {
      setIsOpen(!isOpen)
   }

   return (
      <Div>
         <AccordionTrigger onClick={handleToggleAccordion}>
            Accordion
         </AccordionTrigger>
         <AccordionItems amountOfItems={items.length} isOpen={isOpen}>
            {items?.map(item => <AccordionItem text={item.text} />)}
         </AccordionItems>
      </Div>
   )
}