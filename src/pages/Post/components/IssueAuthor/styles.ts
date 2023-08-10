import { styled } from 'styled-components'

export const StyledIssueAuthor = styled.section`
  width: 54rem;
  /* height: 10.5rem; */
  flex-shrink: 0;
  margin: auto;
  padding: 2rem;

  border-radius: 0.625rem;
  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  & > div:nth-child(1) {
    display: flex;
    justify-content: space-between;

    a:nth-child(1) {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;

      color: ${(props) => props.theme.blue};
    }

    a:nth-child(2) {
      position: static;
    }
  }

  h1 {
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
  }
`
