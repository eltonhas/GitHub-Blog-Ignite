import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;

  gap: 4.5rem;
`

export const ContentPosts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const PostForm = styled.div`
  max-width: 54rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  input {
    width: 54rem;

    padding: 0.75rem 1rem;

    background: ${(props) => props.theme['base-input']};

    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;

    &:focus {
      box-shadow: none;
      border-color: ${(props) => props.theme.blue};
    }
  }
`
export const TitleForm = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 1.125rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.85rem;
    color: ${(props) => props.theme['base-span']};
  }
`
