import React from 'react'
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import {useState, useEffect} from 'react'
import { cleanObject, useDebounce } from 'utils'
import { useHttp } from 'utils/http'
import styled from '@emotion/styled'

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const [users, setUsers] = useState([])
  const [list, setList] = useState([])
  const debouncedParam = useDebounce(param, 500)
  const client = useHttp()
  useEffect(() =>{
    client('projects', {data:cleanObject(debouncedParam)}).then(setList)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedParam])

  useEffect(() =>{
    client('users').then(setUsers)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <Container>
    <h1>项目列表</h1>
    <SearchPanel param={param} setParam={setParam} users={users}/>
    <List list={list} users={users}/>
  </Container>
}

const Container = styled.div`
  padding: 3.2rem
`