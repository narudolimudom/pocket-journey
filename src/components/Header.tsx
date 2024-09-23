import React from "react";
import { Layout, Menu } from "antd";



const Header: React.FC = () => {

  return (
    // <Layout style={{ minHeight: '100vh' }}>
    // <Menu
    //   onClick={onClick}
    //   style={{ width: 256, minHeight: '100vh' }}
    //   defaultSelectedKeys={['1']}
    //   defaultOpenKeys={['sub1']}
    //   mode="inline
    //   items={menuItem}
    // />
    // </Layout>
    <div className="h-[72px] drop-shadow-sm border-b border-grey">
        <div className="mx-[16px] tablet:mx-[20px] desktop:mx-[32px] desktop-large:mx-[220px] max-w-[2000px] flex justify-between">
            <div>fast</div>
            <div>fast</div>
        </div>
    </div>
  );
};

export default Header;
