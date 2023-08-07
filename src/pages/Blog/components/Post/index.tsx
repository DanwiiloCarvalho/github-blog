import { PostHeader, StyledPost } from './styles'

interface PostProps {
  title?: string
  createdAt?: string
  description?: string
}
export function Post({ title, description, createdAt }: PostProps) {
  return (
    <a href="">
      <StyledPost>
        <PostHeader>
          <h1>{title}</h1>
          <time>{createdAt}</time>
        </PostHeader>
        <p>
          {/* Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in... */}
          {description}
        </p>
      </StyledPost>
    </a>
  )
}
