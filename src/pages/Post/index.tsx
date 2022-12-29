import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import { useContextSelector } from 'use-context-selector'
import { GitHubContext } from '../../context/gitHubContext'

import { CardPostTitle } from './CardPostTitle'
import { PostBody, PostContainer } from './styles'

export function Post() {
  const { id } = useParams()

  const issuePost = useContextSelector(GitHubContext, (context) => {
    return context.issuePost
  })
  const fetchIssuePost = useContextSelector(GitHubContext, (context) => {
    return context.fetchIssuePost
  })

  useEffect(() => {
    if (id) {
      fetchIssuePost(id)
    }
  }, [fetchIssuePost, id])

  if (!issuePost) {
    return <div>Post não encontrtado</div>
  }
  return (
    <PostContainer>
      <CardPostTitle
        comments={issuePost.comments}
        title={issuePost.title}
        url={issuePost.html_url}
      />
      <PostBody>
        <ReactMarkdown>{issuePost?.body}</ReactMarkdown>
      </PostBody>
    </PostContainer>
  )
}
