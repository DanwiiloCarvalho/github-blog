import { Post } from '../Post'
import { PostsContainer, PostsList } from './styles'

export function Posts() {
  return (
    <PostsContainer>
      <PostsList>
        <li>
          <Post />
        </li>
        <li>
          <Post />
        </li>
        <li>
          <Post />
        </li>
        <li>
          <Post />
        </li>
        <li>
          <Post />
        </li>
        <li>
          <Post />
        </li>
      </PostsList>
    </PostsContainer>
  )
}
