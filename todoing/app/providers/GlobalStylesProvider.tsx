 "use client"
import { styled } from 'styled-components'
 import React from 'react'

 interface Props {
  children: React.ReactNode
 }

 const GlobalStyles = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2.5rem;
  gap: 2.5rem;
  height:100%;
 `;
 
 export const GlobalStylesProvider = ( { children }: Props ) => {
   return (
     <GlobalStyles>
      { children }
     </GlobalStyles>
   )
 }
 