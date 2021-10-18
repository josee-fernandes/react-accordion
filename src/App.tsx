import React from 'react'

import { IAccordion } from './interfaces/accordion'

import { accordion1, accordion2, accordion3 } from './services/data'

import { GlobalStyles } from './styles'

import { Accordion } from './components/Accordion'

function App() {
  const [accordions, setAccordions] = React.useState<IAccordion[]>()

  React.useEffect(() => {
    setAccordions([
      accordion1,
      accordion2,
      accordion3
    ])
  }, [])


  return (
    <>
      <GlobalStyles />
      {accordions?.map(accordion => <Accordion items={accordion.items} />)}
    </>
  )
}

export default App
