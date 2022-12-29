import { useEffect } from 'react'

import { useContextSelector } from 'use-context-selector'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

import { FaGithub } from 'react-icons/fa'

import {
  CardInfos,
  CardProfileContainer,
  CardProfileContent,
  CardTitle,
} from './styles'

import { GitHubContext } from '../../../../context/gitHubContext'

export function CardProfile() {
  const fetchUser = useContextSelector(GitHubContext, (context) => {
    return context.fetchUser
  })
  const user = useContextSelector(GitHubContext, (context) => {
    return context.user
  })

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  if (!user) {
    return <div>Usuario não encontrado</div>
  }

  return (
    <CardProfileContainer>
      <img src={user?.avatar_url} alt="" />
      <CardProfileContent>
        <CardTitle>
          <p>{user?.name}</p>
          <a href={user.html_url}>
            GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </CardTitle>
        <CardInfos>
          <p>{user.bio}</p>
          <div>
            <span>
              <FaGithub />
              {user.login}
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} /> {user.company}
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} /> {user.followers} seguidores
            </span>
          </div>
        </CardInfos>
      </CardProfileContent>
    </CardProfileContainer>
  )
}
