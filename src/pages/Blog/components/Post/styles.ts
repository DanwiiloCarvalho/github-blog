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

  /* p {
    line-height: 1.6rem;
    color: ${(props) => props.theme['base-text']};

    width: 22rem;
    flex-shrink: 0;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  } */

  div {
    /* width: 22rem; */
    width: 100%;
    height: 16.25rem;
    overflow: hidden;
    line-height: 1.6rem;
    color: ${(props) => props.theme['base-text']};

    /* p {
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    } */

    a {
      pointer-events: none;
      color: inherit;
    }

    p {
      overflow: hidden;

      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
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

  height: 4rem;

  h1 {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 2rem;
    color: ${(props) => props.theme['base-title']};

    overflow: hidden; // Removendo barra de rolagem
    text-overflow: ellipsis; // Adicionando "..." ao final
    display: -webkit-box;
    -webkit-line-clamp: 2; // Quantidade de linhas
    -webkit-box-orient: vertical;
  }

  time {
    font-size: 0.875rem;
    line-height: 1.4rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-span']};
    text-align: right;

    width: 10rem;
    padding-top: 0.31rem;
  }
`
