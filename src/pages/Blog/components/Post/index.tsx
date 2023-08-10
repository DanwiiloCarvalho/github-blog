import { formatDistanceToNow } from 'date-fns'
import { PostHeader, StyledPost } from './styles'
import ptBR from 'date-fns/locale/pt-BR'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { Link } from 'react-router-dom'

interface PostProps {
  number: number
  title: string
  createdAt: string
  description: string | null
}
export function Post({ number, title, description, createdAt }: PostProps) {
  const dateDistanceToNow = formatDistanceToNow(new Date(createdAt), {
    addSuffix: true,
    locale: ptBR,
  })

  /* const splitedDescription = description
    .split('\r\n\r\n')
    .slice(0, 1)
    .join('\r\n\r\n') */

  let splitedDescription = '[Issue sem conteúdo]'

  if (description !== null) {
    splitedDescription = description
      .split('\r\n\r\n')
      .slice(0, 1)
      .toString()
      .split('\r\n')
      .slice(0, 1)
      .toString()
  }

  return (
    <Link to={'/post/' + number}>
      <StyledPost>
        <PostHeader>
          <h1>{title}</h1>
          <time>{dateDistanceToNow}</time>
        </PostHeader>
        <div>
          <ReactMarkdown>{splitedDescription}</ReactMarkdown>
        </div>
      </StyledPost>
    </Link>
  )
}
