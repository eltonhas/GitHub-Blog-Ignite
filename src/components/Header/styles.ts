import styled from 'styled-components'

import effect from '../../assets/effect.svg'
import effect2 from '../../assets/effect2.svg'

export const MainHeader = styled.main`
  max-width: 90rem;
  height: 18.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: linear-gradient(
      to top left,
      transparent 25%,
      ${(props) => props.theme['base-post']}
    ),
    linear-gradient(
      to bottom right,
      transparent 25%,
      ${(props) => props.theme['base-post']}
    ),
    url(${effect}), url(${effect2});
  background-repeat: repeat-y;

  background-position: left, right;

  img {
    width: 9rem;
    height: 6.125rem;
    margin-top: -5rem;
  }
`
