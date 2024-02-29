import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import { RecoilRoot } from 'recoil';
import App from './App.tsx'
import './index.css'
import router from "./routes.tsx";
import {RouterProvider} from "react-router-dom";

const theme = {
    token: {
        colorPrimary: '#0bc279',
        colorTextBase: '#014751'
    },
    components: {
        Layout: {
            headerBg: '#fff',
        },
    },
}


ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
      <RecoilRoot>
      <StyleProvider hashPriority="high">
          <ConfigProvider theme={theme}>
            <RouterProvider router={router} >
            </RouterProvider>
          </ConfigProvider>
      </StyleProvider>
      </RecoilRoot>
  </>,
)
