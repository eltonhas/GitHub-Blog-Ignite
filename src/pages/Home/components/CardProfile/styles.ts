import styled from 'styled-components'

export const CardProfileContainer = styled.main`
  display: flex;
  align-items: center;
  gap: 2rem;

  background: ${(props) => props.theme['base-profile']};

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  padding: 2rem 2.5rem;

  max-width: 54rem;
  height: 13.25rem;

  img {
    width: 9.25rem;
    height: 9.25rem;

    border-radius: 8px;
  }
`

export const CardProfileContent = styled.aside`
  width: 53rem;
  height: 9.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 130%;
  }

  a {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 0.5rem;

    font-size: 0.75rem;

    color: ${(props) => props.theme.blue};

    cursor: pointer;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`

export const CardInfos = styled.div`
  display: flex;
  flex-direction: column;

  text-align: justify;
  gap: 1.5rem;

  div {
    display: flex;
    gap: 1.5rem;

    span {
      display: flex;
      align-items: baseline;
      gap: 0.5rem;

      svg {
        color: ${(props) => props.theme['base-label']};
      }
    }
  }
`
