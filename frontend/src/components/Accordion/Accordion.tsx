import { useState } from 'react'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import { MotionHeader } from './AccordionStyle'

const variants: Variants = {
  animate: { height: 'fit-content', opacity: 1, scale: 1 },
  exit: { height: 0, opacity: 0, scale: 0 },
  initial: { height: 0, opacity: 0, scale: 0 }
}

const Accordion = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div>
          <>
      <MotionHeader
        initial={false}
        animate={isOpen ? 'active' : 'inactive'}
        onClick={() => setIsOpen(prev => !prev)}
        >
      <p>FAQs title</p>
      </MotionHeader>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            transition={{ duration: 0.3 }}
          >
            FAQs response
            Economicis es tu aplicacion de finanzas personales donde podes clasificar sus ingresos y gastos por categorias. Podras ver un resumen de tu flujo de dinero actual de manera simple y sencilla.

Completamente gratuita, no contiene publicidad, ni anuncios de terceros y proximamente graficos historicos de tus movimientos!!
          </motion.section>
        )}
      </AnimatePresence>
    </>
    </div>
  )
}
export default Accordion
