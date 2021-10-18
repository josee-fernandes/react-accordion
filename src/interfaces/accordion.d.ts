export interface IAccordionItem {
   text: string
}

export interface IAccordion {
   items: IAccordionItem[]
}


// styled

export interface IAccordionList {
   isOpen?: boolean
   amountOfItems: number
}