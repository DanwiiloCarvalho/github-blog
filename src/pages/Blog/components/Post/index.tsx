import { PostHeader, StyledPost } from './styles'

interface PostProps {
  title?: string
  description?: string
}
export function Post(props: PostProps) {
  return (
    <StyledPost>
      <PostHeader>
        <h1>JavaScript data types and data structures</h1>
        <time>Há 1 dia</time>
      </PostHeader>
      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in...
      </p>
    </StyledPost>
  )
}
