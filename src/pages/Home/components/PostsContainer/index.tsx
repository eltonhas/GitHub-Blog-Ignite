import { useEffect } from 'react'
import { useContextSelector } from 'use-context-selector'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import ReactMarkdown from 'react-markdown'

import { GitHubContext } from '../../../../context/gitHubContext'

import { CardContainer, PostCardContainer, TitleCard } from './styles'
import { NavLink } from 'react-router-dom'

export function PostsContainer() {
  const fetchIssues = useContextSelector(GitHubContext, (context) => {
    return context.fetchIssues
  })
  const issues = useContextSelector(GitHubContext, (context) => {
    return context.issues
  })

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <PostCardContainer>
      {issues.map((issue) => {
        return (
          <NavLink to={`/post/${issue.number}`} key={issue.id}>
            <CardContainer>
              <TitleCard>
                <p>{issue.title}</p>
                <span>
                  {formatDistanceToNow(new Date(issue.created_at), {
                    locale: ptBR,
                  })}
                </span>
              </TitleCard>
              <span>
                <ReactMarkdown>{issue.body}</ReactMarkdown>
              </span>
            </CardContainer>
          </NavLink>
        )
      })}
    </PostCardContainer>
  )
}
