import styled, { keyframes } from 'styled-components';

import { IAccordionList } from '../../interfaces/accordion'

export const Div = styled.div`

`

export const AccordionTrigger = styled.div`
   padding: 1rem;
   background-color: #5061d3;
   color: #efefef;
   font-weight: 600;
   cursor: pointer;
   transition: all 0.2s ease;

   &:hover{
      background-color: #6574d3;
   }
`

export const AccordionItems = styled.ul<IAccordionList>`
   overflow: clip;
   height: ${props => props?.isOpen ? `${props?.amountOfItems * 51}px` : '0'};
   transition: all 0.5s ease;
`