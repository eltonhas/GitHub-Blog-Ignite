import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'

import { FaGithub } from 'react-icons/fa'

import {
  AuthorInfos,
  CardTitleContainer,
  NavContainer,
  TitleContainer,
} from './styles'
import { NavLink } from 'react-router-dom'

interface CardPostTitleProps {
  comments: number
  title: string
  url: string
}

export function CardPostTitle({ comments, title, url }: CardPostTitleProps) {
  return (
    <CardTitleContainer>
      <NavContainer>
        <NavLink to="/">
          <span>
            <FontAwesomeIcon icon={faChevronLeft} /> VOLTAR
          </span>
        </NavLink>
        <a href={url}>
          <span>
            VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </span>
        </a>
      </NavContainer>
      <TitleContainer>{title}</TitleContainer>
      <AuthorInfos>
        <span>
          <FaGithub />
          eltonhas
        </span>
        <span>
          <FontAwesomeIcon icon={faBuilding} /> Rocketseat
        </span>
        <span>
          <FontAwesomeIcon icon={faComment} /> {comments} comentários
        </span>
      </AuthorInfos>
    </CardTitleContainer>
  )
}
