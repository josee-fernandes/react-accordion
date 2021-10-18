import React from 'react'

import { Div } from './styles'

import { IAccordion } from '../../interfaces/accordion'

import { AccordionItem } from '../AccordionItem'

export const Accordion: React.FC<IAccordion> = ({ items }) => {
   return (
      <Div>
         Accordion
         {items?.map(item => <AccordionItem text={item.text} />)}
      </Div>
   )
}