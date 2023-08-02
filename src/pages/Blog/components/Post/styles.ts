import { styled } from 'styled-components'

export const StyledPost = styled.article`
  width: 26rem;
  height: 16.25rem;
  flex-shrink: 0;

  border: 2px solid transparent;
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-post']};
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  p {
    line-height: 1.6rem;
    color: ${(props) => props.theme['base-text']};
  }

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
    padding: 2rem;
    /* background-color: ${(props) => props.theme['base-post']}; */
  }
`

export const PostHeader = styled.header`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  h1 {
    width: 17.6875rem;
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 2rem;
    color: ${(props) => props.theme['base-title']};
  }

  time {
    font-size: 0.875rem;
    line-height: 1.4rem;
    color: ${(props) => props.theme['base-span']};
  }
`
