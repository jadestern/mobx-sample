import React from 'react';
import { Card, Input, List } from 'antd';
import {
  PlusCircleFilled,
  CloseCircleOutlined,
} from '@ant-design/icons';

export default () => {
  return (
    <Card title="To Do(Global)">
      <Input
        placeholder="Insert To Do"
        addonAfter={<PlusCircleFilled />}
      />
      <List
        className="list"
        bordered
        dataSource={[]}
        renderItem={_ => (
          <List.Item
            className="item"
            actions={[<CloseCircleOutlined />]}
          >
            {/*<button onClick={() => {}}>{item}</button>*/}
          </List.Item>
        )}
      />
    </Card>
  );
};
