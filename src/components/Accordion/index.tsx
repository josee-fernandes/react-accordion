import React from 'react'

import { Div, AccordionTrigger, Ul } from './styles'

import { IAccordion } from '../../interfaces/accordion'

import { AccordionItem } from '../AccordionItem'

export const Accordion: React.FC<IAccordion> = ({ items }) => {
   return (
      <Div>
         <AccordionTrigger>
            Accordion
         </AccordionTrigger>
         <Ul>
            {items?.map(item => <AccordionItem text={item.text} />)}
         </Ul>
      </Div>
   )
}