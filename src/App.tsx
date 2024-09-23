import Header from "@components/Header";
import NevigationBar from "@components/nevigation/NevigationBar";
import { ConfigProvider } from "antd";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Category from "@app/pages/Category";
import Home from "./pages/Home";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Home/>}>
//       <Route path="/category" element={<Category/>} />
//     </Route>
//   )
// )

function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          // Menu: {
          //   /* here is your component tokens */
          //   // colorBgElevated: "#91caff"
          //   colorSplit: "red",
          //   // colorTextLightSolid: "red",
          //   borderRadius: 15,
          //   itemSelectedColor: "black",
          //   itemSelectedBg: "white",
          //   itemHoverBg: "#EDF2F7"
          // },
        },
      }}
    >
      <div>
        <div className="mx-[16px] flex">
          <NevigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
          </Routes>
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;
