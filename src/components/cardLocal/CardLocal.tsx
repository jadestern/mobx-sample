import React, { SyntheticEvent } from 'react';
import {
  useLocalObservable,
  Observer,
} from 'mobx-react-lite';
import { Card, Input, List } from 'antd';
import {
  PlusCircleFilled,
  CloseCircleOutlined,
} from '@ant-design/icons';

export default () => {
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
    remove(index: number) {
      this.list = this.list.filter(
        (_, _index: number) => _index !== index,
      );
    },
    edit(value: string, index: number) {
      this.list = this.list.map(
        (item: string, _index: number) =>
          _index === index ? value : item,
      );
    },
  }));

  const removeItem = (index: number) => () => {
    todo.remove(index);
  };

  const edit = (index: number) => () => {
    const editValue = window.prompt('수정해보삼');

    if (editValue) {
      todo.edit(editValue, index);
    }
  };

  return (
    <Observer>
      {() => (
        <Card title="To Do(Local)">
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
            renderItem={(item, index: number) => (
              <List.Item
                className="item"
                actions={[
                  <CloseCircleOutlined
                    onClick={removeItem(index)}
                  />,
                ]}
              >
                <button onClick={edit(index)}>
                  {item}
                </button>
              </List.Item>
            )}
          />
        </Card>
      )}
    </Observer>
  );
};
