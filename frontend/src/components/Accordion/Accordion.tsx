import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { AccordionStyle, MotionHeader, MotionContent } from './AccordionStyle'
import { AccordionProps } from '../ts.reference'

const Accordion:React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <AccordionStyle>
      <MotionHeader
        animate={isOpen ? 'active' : 'inactive'}
        onClick={() => setIsOpen(prev => !prev)}
        >
      <p className='text--title'>{title}</p>
      </MotionHeader>
      <AnimatePresence initial={false}>
        {isOpen && (
          <MotionContent
          >
            <p className='text'>{content}</p>
          </MotionContent>
        )}
      </AnimatePresence>
    </AccordionStyle>
  )
}
export default Accordion
