import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { MotionHeader, MotionContent } from './AccordionStyle'
import { AccordionProps } from '../ts.reference'

const Accordion:React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <>
      <MotionHeader
        animate={isOpen ? 'active' : 'inactive'}
        onClick={() => setIsOpen(prev => !prev)}
        >
      <p>{title}</p>
      </MotionHeader>
      <AnimatePresence initial={false}>
        {isOpen && (
          <MotionContent
          >
            {content}
          </MotionContent>
        )}
      </AnimatePresence>
    </>
  )
}
export default Accordion
