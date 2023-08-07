import { useContext } from 'react'
import { Post } from '../Post'
import { PostsContainer, PostsList } from './styles'
import { PostsContext } from '../../../../contexts/IssuesContext'

export function Posts() {
  const { issues } = useContext(PostsContext)
  return (
    <PostsContainer>
      <PostsList>
        {issues.length > 0 &&
          issues.map((issue) => (
            <li key={issue.id}>
              <Post
                title={issue.title}
                description={issue.body}
                createdAt={issue.created_at}
              />
            </li>
          ))}
      </PostsList>
    </PostsContainer>
  )
}
