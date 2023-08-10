import { useForm } from 'react-hook-form'
import { StyledSearchBar } from './styles'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '../../../../lib/axios'
import { useContext } from 'react'
import { Issue, PostsContext } from '../../../../contexts/IssuesContext'

interface SearchBarProps {
  label: string
  placeholder?: string
}

/* interface SearchBarContent {
  keyword: string
} */

interface ResponseDataType {
  total_count: number
  incomplete_results: boolean
  items: Issue[]
}

const mySchema = z.object({
  keyword: z.string(), // .max(5, 'Deve conter no máximo 100 caracteres'),
})

type SearchBarContent = z.infer<typeof mySchema>

export function SearchBar({ label, placeholder }: SearchBarProps) {
  const { issues, setIssues } = useContext(PostsContext)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchBarContent>({
    resolver: zodResolver(mySchema),
  })

  async function searchIssues(data: SearchBarContent) {
    const response = await api.get('/search/issues', {
      params: {
        q: data.keyword.concat(' repo:gustavoguanabara/git-github'),
      },
    })

    const responseData = response.data as ResponseDataType

    const issuesList = responseData.items.map((issue) => {
      return {
        id: issue.id,
        number: issue.number,
        title: issue.title,
        body: issue.body,
        created_at: issue.created_at,
      }
    })
    setIssues(issuesList)
  }

  // issues.length > 0 && console.log(issues)

  return (
    <StyledSearchBar onSubmit={handleSubmit(searchIssues)}>
      <label htmlFor="search">{label}</label>
      <span>{issues.length} publicações</span>
      <input
        type="text"
        id="search"
        placeholder={placeholder}
        {...register('keyword')}
        required
        disabled={isSubmitting}
      />
    </StyledSearchBar>
  )
}
