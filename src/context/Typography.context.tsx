import { NextFont } from 'next/dist/compiled/@next/font'
import React, { ReactNode, createContext, useContext, useState } from 'react'

import { DEFAULT_FONT, FONTS, FontValues } from 'styles/fonts'

const TypographyContext = createContext<{
  font: { name: FontValues; value: NextFont }
  changeFont: (newFont: FontValues) => void
}>({
  font: { name: DEFAULT_FONT, value: FONTS[DEFAULT_FONT] },
  changeFont: () => {},
})

export const TypographyProvider = ({ children }: { children: ReactNode }) => {
  const [currentFont, setCurrentFont] = useState<FontValues>(DEFAULT_FONT)

  const changeFont = (newFont: FontValues) => {
    setCurrentFont(newFont)
  }

  return (
    <TypographyContext.Provider value={{ font: { name: currentFont, value: FONTS[currentFont] }, changeFont }}>
      {children}
    </TypographyContext.Provider>
  )
}

export const useTypography = () => useContext(TypographyContext)
