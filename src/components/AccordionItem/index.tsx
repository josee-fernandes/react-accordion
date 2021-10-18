import React from 'react'

import { IAccordionItem } from '../../interfaces/accordion'

import { Li } from './styles'

export const AccordionItem: React.FC<IAccordionItem> = ({ text }) => {
   return (
      <Li>
         {text}
      </Li>
   )
}