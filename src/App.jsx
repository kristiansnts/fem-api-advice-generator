/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import './App.css'
import { DiceIcon, Wrapper } from './App.style'
import desktopDivider from './assets/images/pattern-divider-desktop.svg'
import mobileDivider from './assets/images/pattern-divider-mobile.svg'
import AdviceData from './data/AdviceData'

function App() {
  return (
    <>
      <Wrapper>
        <AdviceData />
        <picture>
          <source media="(min-width: 600px)" srcSet={desktopDivider} />
          <img src={mobileDivider} />
        </picture>
        <DiceIcon/>
      </Wrapper>
    </>
  )
}

export default App
