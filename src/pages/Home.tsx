import React, { useState } from "react";
import { Button, Flex } from "antd";

const Home: React.FC = () => {
  // let a = 4
  const [count, setCount] = useState(4);
  return (
    <div className="w-full pt-[73px] ml-[10px]">
      {/* home */}
      <div className="">{count}</div>
      <div className=" grid grid-cols-2">
        <Button onClick={() => setCount(count + 1)}>click</Button>
        <Button className="row-start-2 col-start-2" type="primary" onClick={() => setCount(count - 1)}>
          click2
        </Button>
      </div>
    </div>
  );
};

export default Home;
