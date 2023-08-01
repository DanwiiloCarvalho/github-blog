import { StyledSearchBar } from './styles'

interface SearchBarProps {
  label: string
  placeholder?: string
}
export function SearchBar({ label, placeholder }: SearchBarProps) {
  return (
    <StyledSearchBar>
      <label htmlFor="search">{label}</label>
      <span>6 publicações</span>
      <input type="text" name="" id="search" placeholder={placeholder} />
    </StyledSearchBar>
  )
}
