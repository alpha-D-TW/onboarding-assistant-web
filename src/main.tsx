import React from 'react'
import ReactDOM from 'react-dom/client'
import { ConfigProvider } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import { RecoilRoot } from 'recoil';
import App from './App.tsx'
import './index.css'

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
  <React.StrictMode>
      <RecoilRoot>
      <StyleProvider hashPriority="high">
          <ConfigProvider theme={theme}>
            <App/>
          </ConfigProvider>
      </StyleProvider>
      </RecoilRoot>
  </React.StrictMode>,
)
