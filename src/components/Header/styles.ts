import { styled } from 'styled-components'

export const StyledCover = styled.header`
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
  height: 18.5rem;
  background-color: ${(props) => props.theme['base-profile']};

  img.logo {
    width: 9.25rem;
    height: 6.13rem;
    margin-top: 4rem;
  }

  img.leftEffect {
    width: 25.5625rem;
    height: 11.75rem;
    flex-shrink: 0;
    margin-top: 4.38rem;
  }

  img.rightEffect {
    width: 23.1875rem;
    height: 14.75rem;
    flex-shrink: 0;
    margin-top: 1.88rem;
  }
`
