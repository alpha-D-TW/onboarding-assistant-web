import { Layout } from "antd";
import { RouterProvider } from "react-router-dom";
import className from './App.module.less'
import router from './routes.tsx'


function App() {
  return (
  <Layout>
      <Layout.Header className={className.header}>
          <div className={className.logo}></div>
      </Layout.Header>
      <Layout.Content className={className.content}>
          <RouterProvider router={router} />
      </Layout.Content>
  </Layout>
  )
}

export default App
