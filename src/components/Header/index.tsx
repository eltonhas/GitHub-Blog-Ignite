import logo from '../../assets/logo.svg'
import { MainHeader } from './styles'

export function Header() {
  return (
    <MainHeader>
      <img src={logo} alt="GitHub Blog" />
    </MainHeader>
  )
}
