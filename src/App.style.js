import styled from 'styled-components'
import diceIcon from './assets/images/icon-dice.svg'

const Wrapper = styled.div`
  width: min(90%, 450px);
  margin: 0 auto;
  background-color: hsl(217, 19%, 24%);
  border-radius: 10px;
  padding: 30px;
  padding-bottom: 60px;
  position: relative;
`

const AdviceId = styled.span`
  color: hsl(150, 100%, 66%);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
`

const AdviceText = styled.p`
  font-size: 28px;
  font-weight: 700;
  color: hsl(193, 38%, 86%);
`

const DiceIcon = styled.div`
  background-image: url(${diceIcon});
  background-position: center;
  background-repeat: no-repeat;
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: -30px;
  left: 43%;
  background-color: hsl(150, 100%, 66%);
  padding: 20px;
  border-radius: 50%;

  @media screen and (min-width: 600px) {
    left: 45%;
  }
`

export {Wrapper, AdviceId, AdviceText, DiceIcon}