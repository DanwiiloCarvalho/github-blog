import { styled } from 'styled-components'

export const StyledSearchBar = styled.form`
  width: 54rem;
  margin: auto;
  margin-top: 4.5rem;

  /* display: flex;
  flex-direction: column;
  gap: 0.75rem; */

  display: grid;
  grid-template-areas:
    'publications numberPublications'
    'searchBar searchBar';
  row-gap: 0.75rem;

  label {
    grid-area: publications;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.8rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    grid-area: numberPublications;
    justify-self: right;

    font-size: 0.875rem;
    line-height: 1.4rem;
    color: ${(props) => props.theme['base-span']};
  }

  input {
    grid-area: searchBar;

    display: flex;
    width: 54rem;
    padding: 0.75rem 1rem;
    align-items: center;
    gap: 0.5rem;
    line-height: 1.6rem;
    color: ${(props) => props.theme['base-text']};

    border-radius: 6px;
    border: 1px solid ${(props) => props.theme['base-border']};
    background-color: ${(props) => props.theme['base-input']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      line-height: 1.6rem;
      outline: none;
      border: 1px solid ${(props) => props.theme.blue};
    }
  }
`
