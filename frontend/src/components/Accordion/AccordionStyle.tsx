import styled from 'styled-components'
import { motion, Transition, Variants } from 'framer-motion'

/* -------------------------------------------------------------------------- */
/*                             ACCORDION'S HEADER                             */
/* -------------------------------------------------------------------------- */

const headerVariant = {
  active: { backgroundColor: '#0055FF' },
  inactive: { backgroundColor: '#FF0088' }
}
const contentVariant: Variants = {
  animate: { height: 'fit-content', opacity: 1, scale: 1 },
  exit: { height: 0, opacity: 0, scale: 0 },
  initial: { height: 0, opacity: 0, scale: 0 }
}

const contentTransition: Transition = {
  duration: 0.3
}
export const MotionContent = styled(motion.div).attrs(({ initial }) => ({
  initial,
  transition: contentTransition,
  variants: contentVariant
}))`
    display: flex;
`

export const MotionHeader = styled(motion.div).attrs(({ initial }) => ({
  initial,
  variants: headerVariant
}))`
    display: flex;
`

/* -------------------------------------------------------------------------- */
/*                             ACCORDION'S CONTENT                            */
/* -------------------------------------------------------------------------- */
