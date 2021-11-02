import styled from "@emotion/styled";
import { Button } from "antd";
import { useAuth } from "context/auth-context"
import { ProjectListScreen } from "screens/project-list"
import {Row} from 'components/lib'

export const AuthenticatedApp = () => {

  const {logout} = useAuth();

  return <div>
    <Header between={true}>
      <HeaderLeft gap={true}>
        <h2>Logo</h2>
        <h2>项目</h2>
        <h2>用户</h2>
      </HeaderLeft>
      <HeaderRight>
        <Button onClick={logout}>登出</Button>
      </HeaderRight>
    </Header>
    <Main>
      <ProjectListScreen/>
    </Main>    
  </div>
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr 6rem;
  height: 100vh;
`
const Header = styled(Row)`
`

const HeaderLeft = styled(Row)`
  display: flex;
  align-items: center;
`
const HeaderRight = styled.div`

`
const Main = styled.main`
  grid-area: main;
`

