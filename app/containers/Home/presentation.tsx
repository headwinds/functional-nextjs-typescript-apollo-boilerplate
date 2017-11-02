/* eslint-disable */

import * as React from 'react'
import { Table, Button } from 'antd'
import { TableColumnConfig } from 'antd/lib/table/Table'
import { Post } from '~/graphql'
import { WrappedProps } from './apollo'

const columns: TableColumnConfig<Post>[] = [
  {
    title: 'N',
    dataIndex: 'id',
    render: (_, _rec, index: number) => index + 1,
  },
  {
    title: 'Title',
    dataIndex: 'title',
    render: (text: string) => <p>{text}</p>,
  },
  {
    title: 'Action',
    render: (record: Post) => (
      <span>
        <a href="#">Delete {record.createdAt}</a>
        <span className="ant-divider" />
        <Button icon="down" size="small">
          {record.votes} wow
        </Button>
      </span>
    ),
  },
]

export const Home: React.StatelessComponent<WrappedProps> = props => {
  console.log('pr', props)
  const { data, loadMorePosts } = props
  const { allPosts, _allPostsMeta, loading } = data
  const pagination = {
    defaultCurrent: 1,
    total: _allPostsMeta.count,
  }

  return (
    <div>
      <Table
        columns={columns}
        dataSource={allPosts}
        pagination={pagination}
        rowKey="id"
        loading={loading}
        onChange={loadMorePosts}
      />
    </div>
  )
}
