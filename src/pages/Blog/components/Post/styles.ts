import { styled } from 'styled-components'

export const StyledPost = styled.article`
  width: 26rem;
  height: 16.25rem;
  flex-shrink: 0;

  border: 2px solid transparent;
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-post']};
  padding: 2rem 2rem; //zerando o padding lateral

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

  overflow: hidden;

  p {
    line-height: 1.6rem;
    color: ${(props) => props.theme['base-text']};

    //Adição de largura e altura ao parágrafo
    width: 22rem;
    height: 7rem;
    flex-shrink: 0;

    //overflow: hidden;
  }

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`

export const PostHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 1rem;

  h1 {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 2rem;
    color: ${(props) => props.theme['base-title']};
  }

  time {
    font-size: 0.875rem;
    line-height: 1.4rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-span']};
    text-align: right;
  }
`
