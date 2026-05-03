"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Language = "es" | "en"

interface Translations {
  hero: {
    title: string
  }
  subtitle: {
    line1: string
    line2: string
  }
  ticker: {
    industrial: string
    financial: string
    amount: string
    cap: string
    operations: string
  }
  language: {
    spanish: string
    english: string
    changeLanguage: string
  }
  biography: {
    intro: string
    passion: string
    web3: string
    experience: string
    growth: string
    quote1: string
    future: string
    technology: string
    quote2: string
    design: string
    believer: string
  }
}

const translations: Record<Language, Translations> = {
  es: {
    hero: {
      title: "Explorando la Nueva Frontera Digital:"
    },
    subtitle: {
      line1: "Como navegar el ecosistema de inversiones",
      line2: "en bolsa, criptomonedas y tecnología blockchain."
    },
    ticker: {
      industrial: "INDUSTRIAL",
      financial: "FINANCIERO",
      amount: "MONTO BS.",
      cap: "CAP. USD",
      operations: "OPERACIONES"
    },
    language: {
      spanish: "Español",
      english: "English",
      changeLanguage: "Cambiar idioma"
    },
    biography: {
      intro: "Soy Nelson Salinas Venezolano, Caraqueño.",
      passion: "Apasionado por la tecnología, la fotografía y videografía móvil.",
      web3: "Actualmente incursionando en la Web3, Blockchain e inversiones en la bolsa.",
      experience: "El mundo de la tecnología me atrapó desde el mismo momento en que apareció en nuestras vidas la red Internet y gracias a ella he podido acumular más de 30 años de experiencias y conocimientos.",
      growth: "En ese sentido, mi crecimiento profesional ha estado siempre vinculado con la integración de servicios de tecnología.",
      quote1: "MI TRABAJO SOÑADO ES AQUEL QUE ME PERMITA HACER LO QUE ME APASIONA, DONDE CADA DÍA ME SIENTA CÓMODO, MOTIVADO Y FELIZ DE ESTAR AHÍ.",
      future: "Me gustaría que el futuro del trabajo se convierta en un espacio donde la pasión y el bienestar sean el centro de todo, y no solo de cumplir horarios o tareas por una remuneración.",
      technology: "Que usemos la tecnología y flexibilidad para que cada quien diseñe su jornada de trabajo según su ritmo, sus valores y talentos.",
      quote2: "EL TRABAJO IDEAL SERÁ AQUEL QUE SE ADAPTE A UNO, Y NO AL REVÉS.",
      design: "Es diseñar una actividad que nos apasione y permita realizarla con libertad, a nuestra manera, rodeado de valores que nos hagan sentir cómodos, motivados y plenos.",
      believer: "Fiel creyente de qué #ElFuturoEsMóvil."
    }
  },
  en: {
    hero: {
      title: "Exploring the New Digital Frontier:"
    },
    subtitle: {
      line1: "How to navigate the investment ecosystem",
      line2: "in stock market, cryptocurrencies and blockchain technology."
    },
    ticker: {
      industrial: "INDUSTRIAL",
      financial: "FINANCIAL",
      amount: "AMOUNT BS.",
      cap: "CAP. USD",
      operations: "OPERATIONS"
    },
    language: {
      spanish: "Español",
      english: "English",
      changeLanguage: "Change language"
    },
    biography: {
      intro: "I am Nelson Salinas, Venezuelan, from Caracas.",
      passion: "Passionate about technology, photography and mobile videography.",
      web3: "Currently venturing into Web3, Blockchain and stock market investments.",
      experience: "The world of technology captivated me from the very moment the Internet appeared in our lives and thanks to it I have been able to accumulate more than 30 years of experiences and knowledge.",
      growth: "In that sense, my professional growth has always been linked to the integration of technology services.",
      quote1: "MY DREAM JOB IS ONE THAT ALLOWS ME TO DO WHAT I AM PASSIONATE ABOUT, WHERE EVERY DAY I FEEL COMFORTABLE, MOTIVATED AND HAPPY TO BE THERE.",
      future: "I would like the future of work to become a space where passion and well-being are at the center of everything, and not just fulfilling schedules or tasks for compensation.",
      technology: "Let us use technology and flexibility so that everyone can design their workday according to their rhythm, values and talents.",
      quote2: "THE IDEAL JOB WILL BE ONE THAT ADAPTS TO YOU, AND NOT THE OTHER WAY AROUND.",
      design: "It is designing an activity that we are passionate about and allows us to do it freely, in our own way, surrounded by values that make us feel comfortable, motivated and fulfilled.",
      believer: "A true believer that #TheFutureIsMobile."
    }
  }
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  const value = {
    language,
    setLanguage,
    t: translations[language]
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
