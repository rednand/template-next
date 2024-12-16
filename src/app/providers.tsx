import GlobalStyles from '@/styles/global'

import { PropsWithChildren } from 'react'

export function Provider({ children }: PropsWithChildren) {
  //PropsWithChildren: Generico que tem um children como propriedade a ser passada mais qualquer coisa ali dentro
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}
