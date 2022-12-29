import styled from 'styled-components'

export const CardTitleContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;

  background: ${(props) => props.theme['base-profile']};

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  padding: 2rem;

  width: 54rem;
  height: 10.5rem;
`

export const NavContainer = styled.div`
  width: 50rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;

    font-size: 0.75rem;

    color: ${(props) => props.theme.blue};

    cursor: pointer;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`

export const AuthorInfos = styled.div`
  display: flex;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    color: ${(props) => props.theme['base-span']};
  }
`

export const TitleContainer = styled.span`
  font-size: 1.5rem;
  font-weight: bold;

  color: ${(props) => props.theme['base-title']};

  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
