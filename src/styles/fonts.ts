import { NextFont } from 'next/dist/compiled/@next/font'
import { Inter, JetBrains_Mono, Playfair_Display, Shrikhand } from 'next/font/google'

const inter = Inter({ 
  weight: ['400', '500', '700'], 
  subsets: ['latin'],
  display: 'swap',
  preload: false,
})
const jetbrains = JetBrains_Mono({ 
  weight: ['400'], 
  subsets: ['latin'],
  display: 'swap',
  preload: true, // Default font, preload it
})
const playfair = Playfair_Display({ 
  weight: ['400'], 
  subsets: ['latin'],
  display: 'swap',
  preload: false,
})
const shrikhand = Shrikhand({ 
  weight: '400', 
  subsets: ['latin'],
  display: 'swap',
  preload: true, // Used in "hola." heading, preload it
})

export enum FontValues {
  inter = 'inter',
  jetbrains = 'jetbrains',
  playfair = 'playfair',
  shrikhand = 'shrikhand',
}

export const FONTS: { [key: string]: NextFont } = {
  [FontValues.inter]: inter,
  [FontValues.jetbrains]: jetbrains,
  [FontValues.playfair]: playfair,
  [FontValues.shrikhand]: shrikhand,
}

export const DEFAULT_FONT = FontValues.jetbrains
