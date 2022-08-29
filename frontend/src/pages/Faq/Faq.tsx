import FaqStyle from './FaqStyle'
import { Accordion } from '../component.reference'

const Faq = () => {
  return (
    <FaqStyle>
      <Accordion
        title="How much does my Economicis cost?"
        content="Your Economicis' account is completely free. It has no cost or fee, neither maintenance cost.
        Also you can cancel your account whenever you want."
      />
      <Accordion
        title="Which are the steps to change an income cashflow to an expense cashflow?"
        content='In order to avoid mistakes our platfform does not allow that type of modification,
        but you can delete it and creater another cashflow.'
      />
      <Accordion
        title="Should I be worried about my personal information?"
        content="No, you shouldn't. Economicis does not share or sell any personal information."
      />
      <Accordion
        title="How much ads does Economicis have?"
        content="Nothing, our objective is to give you the best experience.While you be in our
        site, you won't see any kind of distraction or annoying ads."
      />
      <Accordion
        title="May I have multiple accounts?"
        content="Yes, of course. You can have as much as you want, but a different email to link each of them."
      />
    </FaqStyle>
  )
}
export default Faq
