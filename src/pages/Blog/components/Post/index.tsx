import { formatDistanceToNow } from 'date-fns'
import { PostHeader, StyledPost } from './styles'
import ptBR from 'date-fns/locale/pt-BR'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

interface PostProps {
  title: string
  createdAt: string
  description: string
}
export function Post({ title, description, createdAt }: PostProps) {
  const dateDistanceToNow = formatDistanceToNow(new Date(createdAt), {
    addSuffix: true,
    locale: ptBR,
  })

  const splitedDescription = description
    .split('\r\n\r\n')
    .slice(0, 1)
    .join('\r\n\r\n')

  return (
    <a href="">
      <StyledPost>
        <PostHeader>
          <h1>{title}</h1>
          <time>{dateDistanceToNow}</time>
        </PostHeader>
        <div>
          <ReactMarkdown>{splitedDescription}</ReactMarkdown>
        </div>
      </StyledPost>
    </a>
  )
}
