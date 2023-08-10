import { styled } from 'styled-components'

export const StyledProfile = styled.section`
  width: 54rem;
  flex-shrink: 0;
  background-color: ${(props) => props.theme['base-profile']};
  margin: auto;
  padding: 2rem 2rem 2rem 2.5rem;
  display: flex;
  gap: 2rem;
  position: relative;

  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);

  img {
    width: 9.25rem;
    height: 9.25rem;
    flex-shrink: 0;
    border-radius: 8px;
  }
`

export const Bio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  strong {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.95rem;
    color: ${(props) => props.theme['base-title']};
  }

  /* a {
    position: absolute;
    top: 2.5rem;
    right: 2rem;
    font-size: 0.75rem;

    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.2rem;
    color: ${(props) => props.theme.blue};

    display: inline-flex;
    gap: 0.5rem;
    align-items: center;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }

    img {
      width: 0.75rem;
      height: 0.75rem;
    }
  } */

  p {
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme['base-text']};
    line-height: 1.6rem;
  }
`

export const Info = styled.div`
  display: flex;
  color: ${(props) => props.theme['base-subtitle']};
  gap: 1.5rem;

  div {
    display: inline-flex;
    gap: 0.5rem;
    align-items: center;

    span,
    time {
      line-height: 1.6rem;
    }
  }

  img {
    width: 1.125rem;
    height: 1.125rem;
  }
`
