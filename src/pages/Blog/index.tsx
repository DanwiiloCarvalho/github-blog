import { Posts } from './components/Posts'
import { Profile } from './components/Profile'
import { SearchBar } from './components/SearchBar'
import { MainContainer } from './styles'

export function Blog() {
  return (
    <MainContainer>
      <Profile />
      <SearchBar label="Publicações" placeholder="Buscar conteúdo" />
      <Posts />
    </MainContainer>
  )
}
