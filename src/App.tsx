import { Layout } from "antd";
import { Link, Outlet } from "react-router-dom";
import className from './App.module.less'


function App() {
  return (
  <Layout>
      <Layout.Header className={className.header}>
          <Link to="/">
              <div className={className.logo}></div>
          </Link>
      </Layout.Header>
      <Layout.Content className={className.content}>
            <Outlet />
      </Layout.Content>
  </Layout>
  )
}

export default App
