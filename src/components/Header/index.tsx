import logo from '../../assets/logo.svg'
import leftEffect from '../../assets/leftEffect.svg'
import rightEffect from '../../assets/rightEffect.svg'
import { StyledCover } from './styles'

export function Cover() {
  return (
    <StyledCover>
      <img className='leftEffect' src={leftEffect} alt="" />
      <img className='logo' src={logo} alt="" />
      <img className='rightEffect' src={rightEffect} alt="" />
    </StyledCover>
  )
}
