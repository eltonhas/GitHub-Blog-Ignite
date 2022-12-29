import { useContextSelector } from 'use-context-selector'
import { GitHubContext } from '../../context/gitHubContext'

import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { CardProfile } from './components/CardProfile'
import { PostsContainer } from './components/PostsContainer'
import { ContentPosts, HomeContainer, TitleForm, PostForm } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Home() {
  const issues = useContextSelector(GitHubContext, (context) => {
    return context.issues
  })
  const fetchIssues = useContextSelector(GitHubContext, (context) => {
    return context.fetchIssues
  })
  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSubmitSearchPost(data: SearchFormInputs) {
    fetchIssues(data.query)
  }

  return (
    <HomeContainer>
      <CardProfile />

      <ContentPosts>
        <PostForm>
          <TitleForm>
            <span>Publicações</span>
            <p>{issues.length} publicações</p>
          </TitleForm>
          <form onSubmit={handleSubmit(handleSubmitSearchPost)}>
            <input
              type="text"
              placeholder="Buscar Conteúdo"
              {...register('query')}
            />
          </form>
        </PostForm>
        <PostsContainer />
      </ContentPosts>
    </HomeContainer>
  )
}
