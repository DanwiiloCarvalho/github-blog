import { styled } from 'styled-components'

export const StyledGoTo = styled.a`
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
`
