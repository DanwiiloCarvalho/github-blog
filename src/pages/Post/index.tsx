import { useEffect, useState } from 'react'
import { MainContainer } from '../Blog/styles'
import { IssueAuthor, IssueAuthorProps } from './components/IssueAuthor'
import { api } from '../../lib/axios'
import { useParams } from 'react-router-dom'
import { PostContent } from './components/PostContent'

interface PostContentType {
  title: string
  html_url: string
  user: { login: string }
  created_at: string
  comments: number
  body: string
}

interface PostContentTypeState {
  title: string
  html_url: string
  login: string
  created_at: string
  comments: number
  body: string
}

export function Post() {
  const { issueId } = useParams()
  const [postContent, setPostContent] = useState<PostContentTypeState>(
    {} as PostContentTypeState,
  )

  async function fetchPost() {
    try {
      const response = await api.get(
        `/repos/gustavoguanabara/git-github/issues/${issueId}`,
      )
      const { title, html_url, user, created_at, comments, body } =
        response.data as PostContentType
      setPostContent({
        title,
        html_url,
        login: user.login,
        created_at,
        comments,
        body,
      })
    } catch (error) {
      console.log(error)
    }
  }

  /* postContent && console.log(postContent.created_at) */

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <MainContainer>
      {postContent && (
        <>
          <IssueAuthor
            author={postContent.login}
            title={postContent.title}
            createdAt={postContent.created_at}
            comments={postContent.comments}
            html_url={postContent.html_url}
          />
          <PostContent body={postContent.body} />
        </>
      )}
    </MainContainer>
  )
}
