import React from 'react'
import Tabs, { TabPane } from 'rc-tabs'
import fields from '../content/fields'
import './styles.module.scss'

const FieldsTabs = () => (
  <Tabs defaultActiveKey="1" tabPosition="top">
    {fields.map(field => (
      <TabPane tab={field.name} key={field.key}>
        <h3>{field.title}</h3>
        <p>{field.content}</p>
      </TabPane>
    ))}
  </Tabs>
)

export default FieldsTabs
