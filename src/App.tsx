import React, { SyntheticEvent } from 'react';
import './App.scss';
import { Card, Input, List } from 'antd';
import {
  PlusCircleFilled,
  CloseCircleOutlined,
} from '@ant-design/icons';
import {
  useLocalObservable,
  Observer,
} from 'mobx-react-lite';

function App() {
  const todo = useLocalObservable(() => ({
    inputValue: '',
    handleChange(e: SyntheticEvent) {
      const { value } = e.target as HTMLInputElement;
      this.inputValue = value;
    },
    list: [] as string[],
    insert() {
      this.list = [...this.list, this.inputValue];
      this.inputValue = '';
    },
    remove() {
      // console.log(index);
      // this.list = this.list.splice(index, 1);
    },
  }));

  return (
    <Observer>
      {() => (
        <div className="App">
          <Card title="To Do">
            <Input
              placeholder="Insert To Do"
              addonAfter={
                <PlusCircleFilled onClick={todo.insert} />
              }
              value={todo.inputValue}
              onChange={todo.handleChange}
              onPressEnter={todo.insert}
            />
            <List
              className="list"
              bordered
              dataSource={todo.list}
              renderItem={item => (
                <List.Item
                  actions={[
                    <CloseCircleOutlined
                      onClick={todo.remove}
                    />,
                  ]}
                >
                  {item}
                </List.Item>
              )}
            />
          </Card>
        </div>
      )}
    </Observer>
  );
}

export default App;
