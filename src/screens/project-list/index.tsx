import React from 'react'
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import {useState, useEffect} from 'react'
import * as qs from 'qs'
import { cleanObject, useDebounce } from 'utils'
import { useHttp } from 'utils/http'

const apiUrl = process.env.REACT_APP_API_URL

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
  }, [debouncedParam])

  useEffect(() =>{
    client('users').then(setUsers)
  }, [])

  return <div>
    <SearchPanel param={param} setParam={setParam} users={users}/>
    <List list={list} users={users}/>
  </div>
}