import { Link } from 'react-router-dom'
import goBack from '../../../../assets/goback.svg'
import { GoTo } from '../../../../components/GoTo'
import { Info } from '../../../Blog/components/Profile/styles'
import githubInfo from '../../../../assets/githubInfo.svg'
import calendar from '../../../../assets/calendar.svg'
import commentsIcon from '../../../../assets/comments.svg'
import { StyledIssueAuthor } from './styles'
import ptBR from 'date-fns/locale/pt-BR'
import { formatDistanceToNow } from 'date-fns'

export interface IssueAuthorProps {
  title: string
  author: string
  createdAt: string
  comments: number
  html_url: string
}
export function IssueAuthor({
  title,
  author,
  createdAt,
  comments,
  html_url,
}: IssueAuthorProps) {
  return (
    <StyledIssueAuthor>
      <div>
        <Link to={'/'}>
          <img src={goBack} alt="" /> voltar
        </Link>
        <GoTo label="ver no github" link={html_url} />
      </div>
      <h1>{title}</h1>
      <Info>
        <div className="info">
          <img src={githubInfo} alt="" />
          <span>{author}</span>
        </div>
        <div className="info">
          <img src={calendar} alt="" />
          <time>
            {createdAt &&
              formatDistanceToNow(new Date(createdAt), {
                addSuffix: true,
                locale: ptBR,
              })}
          </time>
        </div>
        <div className="info">
          <img src={commentsIcon} alt="" />
          <span>{comments} comentários</span>
        </div>
      </Info>
    </StyledIssueAuthor>
  )
}
