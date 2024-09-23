import Tab from "@components/tabs/Tab";
import { Card } from "antd";
import React, { useEffect } from "react";

const Cetegory: React.FC = () => {

  return (
    <div className="w-full ml-[10px]">
      <Card bordered={true}>
       <Tab/>
      </Card>
    </div>
  );
};

export default Cetegory;
