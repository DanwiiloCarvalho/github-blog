import { styled } from 'styled-components'

export const StyledPostContent = styled.section`
  width: 54rem;
  margin: auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  /* color: ${(props) => props.theme['base-text']}; */

  line-height: 1.6rem;

  p {
    font-weight: 400;
  }

  strong {
    font-weight: 700;
  }

  pre {
    background-color: ${(props) => props.theme['base-post']};
    padding: 1rem;
    border-radius: 0.125rem;
  }

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: underline;
  }
`
