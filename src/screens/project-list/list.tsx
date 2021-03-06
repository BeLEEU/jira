import {Table} from 'antd'
import React from 'react'
import { User } from './search-panel'
import dayjs from "dayjs"

interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
  created: number;
}

interface ListProps {
  list: Project[],
  users: User[],
}

export const List = ({list, users}: ListProps) => {
  return <Table pagination={false} columns={[{
    title: '名称',
    dataIndex: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name)
  }, {
    title: '部门',
    dataIndex: 'created',
    sorter: (a, b) => a.name.localeCompare(b.name)
  },{
    title: '负责人',
    render(value, project) {
      return <span>
        <td>{users.find(user => user.id === project.personId)?.name || '未知'}</td>
      </span>
    }
  },{
    title: '时间',
    render(value, project) {
      return <span>
        {project.created ? dayjs(project.created).format('YYYY-MM-DD') : '无'}
      </span>
    }
  }]} dataSource={list}/>
}