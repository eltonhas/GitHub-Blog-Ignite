/* eslint-disable camelcase */
import { ReactNode, useCallback, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../api/axios'

interface GitHubProviderProps {
  children: ReactNode
}

interface UserProps {
  avatar_url: string
  bio: string
  company: string
  followers: number
  html_url: string
  id: number
  login: string
  name: string
}

interface IssueProps {
  id: number
  number: number
  title: string
  body: string
  created_at: string
  html_url: string
}

interface IssuePostProps {
  body: string
  comments: number
  id: number
  number: number
  title: string
  html_url: string
}

interface GitHubContextType {
  user: UserProps | undefined
  issuePost: IssuePostProps | undefined
  issues: IssueProps[]
  fetchUser: () => Promise<void>
  fetchIssues: (query: string) => Promise<void>
  fetchIssuePost: (idParam: string) => Promise<void>
}

export const GitHubContext = createContext({} as GitHubContextType)

export function GitHubProvider({ children }: GitHubProviderProps) {
  const [user, setUser] = useState<UserProps | undefined>(undefined)
  const [issuePost, setIssuePost] = useState<IssuePostProps | undefined>(
    undefined,
  )
  const [issues, setIssues] = useState<IssueProps[]>([])

  const fetchUser = useCallback(async () => {
    try {
      const response = await api.get('users/eltonhas')

      const { avatar_url, bio, company, followers, html_url, id, login, name } =
        response.data

      const data = {
        avatar_url,
        bio,
        company,
        followers,
        html_url,
        id,
        login,
        name,
      }

      setUser(data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  const fetchIssues = useCallback(async (query = '') => {
    try {
      const response = await api.get('search/issues', {
        params: {
          q: encodeURIComponent(query) + 'repo:eltonhas/GitHub-Blog-Ignite',
          sort: 'created',
        },
      })

      const data = response.data.items.map((item: any) => {
        const { id, number, title, body, created_at, html_url } = item
        const data = { id, number, title, body, created_at, html_url }
        return data
      })

      setIssues(data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  const fetchIssuePost = useCallback(async (idParam: string) => {
    try {
      const idIssue = idParam
      const response = await api.get(
        `/repos/eltonhas/GitHub-Blog-Ignite/issues/${idIssue}`,
      )

      const { body, comments, id, number, title, html_url } = response.data

      const data = {
        body,
        comments,
        id,
        number,
        title,
        html_url,
      }

      setIssuePost(data)
    } catch (error) {
      console.log(error)
    }
  }, [])
  return (
    <GitHubContext.Provider
      value={{
        user,
        issues,
        issuePost,
        fetchUser,
        fetchIssues,
        fetchIssuePost,
      }}
    >
      {children}
    </GitHubContext.Provider>
  )
}
