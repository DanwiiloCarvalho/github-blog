import { Route, Routes } from 'react-router-dom'
import { Blog } from './pages/Blog'
import { Post } from './pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/github-blog" element={<Blog />} />
      <Route path="/github-blog/post/:issueId" element={<Post />} />
    </Routes>
  )
}
