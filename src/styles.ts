import { createGlobalStyle }from 'styled-components'

export const GlobalStyles = createGlobalStyle`
   *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Poppins, Roboto, sans-serif;
   }

   html, body{
      width: 100vw;
      height: 100vh;
   }

   body{
      overflow-x: hidden;
   }
`