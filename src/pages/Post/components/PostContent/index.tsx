import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { StyledPostContent } from './styles'

interface PostContentProps {
  body: string
}

export function PostContent({ body }: PostContentProps) {
  return (
    <StyledPostContent>
      <ReactMarkdown>{body}</ReactMarkdown>
    </StyledPostContent>
  )
}
