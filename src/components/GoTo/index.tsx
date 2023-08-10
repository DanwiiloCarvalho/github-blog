import githubIcon from '../../assets/githubIcon.svg'
import { StyledGoTo } from './styles'
interface GoToProps {
  label: string
  link: string
}
export function GoTo({ label, link }: GoToProps) {
  return (
    <StyledGoTo href={link} rel="noreferrer" target="_blank">
      {label}
      <img src={githubIcon} alt="" />
    </StyledGoTo>
  )
}
