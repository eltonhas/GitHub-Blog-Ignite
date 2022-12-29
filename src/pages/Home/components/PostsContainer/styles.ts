import styled from 'styled-components'

export const PostCardContainer = styled.div`
  max-width: 54rem;

  display: flex;
  gap: 2rem;

  flex-wrap: wrap;

  a {
    text-decoration: none;

    &:visited {
      text-decoration: none;
    }
  }
`

export const CardContainer = styled.main`
  width: 26rem;
  height: 16.25rem;
  padding: 2rem;

  background: ${(props) => props.theme['base-post']};

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  span {
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`

export const TitleCard = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.25rem;

  p {
    flex: 1;
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme['base-title']};
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  span {
    font-size: 0.85rem;
    color: ${(props) => props.theme['base-span']};
  }
`
