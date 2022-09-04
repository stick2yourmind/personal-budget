import styled from 'styled-components'
import { motion, Transition, Variants } from 'framer-motion'

/* -------------------------------------------------------------------------- */
/*                              ACCORDION'S STYLE                             */
/* -------------------------------------------------------------------------- */

export const AccordionStyle = styled.div`
  width: 100%;
`

/* -------------------------------------------------------------------------- */
/*                             ACCORDION'S HEADER                             */
/* -------------------------------------------------------------------------- */

const headerVariant = {
  active: { backgroundColor: '#0055FF' },
  inactive: { backgroundColor: '#FF0088' }
}

export const MotionHeader = styled(motion.div).attrs(({ initial }) => ({
  initial: initial || false,
  variants: headerVariant
}))`
    display: flex;
    width: 30rem;
    padding: 0 1rem;
    .text--title{
      line-height: 3.3rem;
      font-size: 3rem;
      padding: 1.5rem 0;
      font-weight: 600;
    }
    @media screen and (min-width: 768px) {
    width: 66rem;
    }
`
/* -------------------------------------------------------------------------- */
/*                             ACCORDION'S CONTENT                            */
/* -------------------------------------------------------------------------- */

const contentVariant: Variants = {
  animate: { height: 'auto', opacity: 1, scale: 1 },
  exit: { height: 0, opacity: 0, scale: 0 },
  initial: { height: 0, opacity: 0, scale: 0 }
}

const contentTransition: Transition = {
  duration: 0.3
}

export const MotionContent = styled(motion.div).attrs(({ initial }) => ({
  animate: initial || 'animate',
  exit: 'exit',
  initial: 'initial',
  transition: contentTransition,
  variants: contentVariant
}))`
    display: flex;
    width: 30rem;
    .text{
      font-size: 2.5rem;
      padding: 1.5rem 0;
      line-height: 3rem;
      word-spacing: 0.5rem;
    }
    @media screen and (min-width: 768px) {
    width: 66rem;
    }
`
