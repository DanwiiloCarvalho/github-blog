import { createContext, useState } from 'react'

// interface IssuesContextProps {}
export interface Issue {
  id: number
  title: string
  created_at: string
  body: string
}
interface IssuesProviderProps {
  children: React.ReactNode
}

interface PostContextType {
  issues: Issue[]
  setIssues: (issues: Issue[]) => void
}

export const PostsContext = createContext({} as PostContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])

  return (
    <PostsContext.Provider value={{ issues, setIssues }}>
      {children}
    </PostsContext.Provider>
  )
}
