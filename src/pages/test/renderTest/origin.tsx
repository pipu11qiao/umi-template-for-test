import { useState, useEffect } from 'react';
import { Button } from 'antd';
import { nanoidCharacter } from '@/utils/utils';
import TestTag from './TestTag';

// testStatus 佣金:1,服务费:2,保证金扣款:3,营销补贴:4

type Item = {
  id: string;
  text: string;
};
const baseList: Item[] = new Array(8).fill(0).map((_, index) => ({
  id: nanoidCharacter(),
  text: `test-${index}`,
}));

function Box(props: { data: Item; onClick: (data: Item) => void }) {
  const { data, onClick } = props;
  return (
    <div>
      <span>{data.text}</span>
      <Button
        onClick={() => {
          onClick({
            ...data,
            text: data.text + '+1',
          });
        }}
      >
        ++
      </Button>
    </div>
  );
}

export default function Test() {
  const [list, setList] = useState<Item[]>(baseList);
  const [changeInfo, setChangeInfo] = useState<Item>();
  useEffect(() => {
    if (changeInfo?.id) {
      const index = list.findIndex((item) => item.id === changeInfo?.id);
      const curList = [...list];
      curList[index] = {
        ...curList[index],
        ...changeInfo,
      };
      setList(curList);
      setChangeInfo(undefined);
    }
  }, [changeInfo?.id, list]);
  return (
    <div>
      <TestTag />
      {list.map((item) => (
        <Box
          key={item.id}
          onClick={(data) => {
            setChangeInfo(data);
          }}
          data={item}
        />
      ))}
    </div>
  );
}
