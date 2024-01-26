/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import './App.css'
import { AdviceId, AdviceText, DiceIcon, Wrapper } from './App.style'
import desktopDivider from './assets/images/pattern-divider-desktop.svg'
import mobileDivider from './assets/images/pattern-divider-mobile.svg'

function App() {
  return (
    <>
      <Wrapper>
        <AdviceId>Advice #117</AdviceId>
        <AdviceText>
          "it is easy to sit up and take notice, what's difficult is getting up and taking action."
        </AdviceText>
        <picture>
          <source media="(min-width: 600px)" srcset={desktopDivider} />
          <img src={mobileDivider} />
        </picture>
        <DiceIcon/>
      </Wrapper>
    </>
  )
}

export default App
