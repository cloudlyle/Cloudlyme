import { Layout, Card, Typography, Space } from 'antd'
import { Link } from 'react-router-dom'
import { LoginForm } from '@features/auth'

const { Content } = Layout
const { Title, Text } = Typography

export function LoginPage() {
  return (
    <Layout style={{ minHeight: '100vh', background: '#FFF8FA' }}>
      <Content style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '64px 16px' }}>
        <Space direction="vertical" size={24} style={{ width: '100%', maxWidth: 400, alignItems: 'center' }}>

          <div style={{ textAlign: 'center' }}>
            <Title
              level={2}
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', margin: 0, color: '#3D1A22' }}
            >
              Sign in
            </Title>
            <Text type="secondary">Enter your credentials to continue.</Text>
          </div>

          <Card
            style={{ width: '100%', borderRadius: 20, boxShadow: '0 4px 20px rgba(242,167,181,0.15)', border: '1px solid rgba(242,167,181,0.3)' }}
            styles={{ body: { padding: '28px 32px' } }}
          >
            <LoginForm />
          </Card>

          <Text type="secondary" style={{ fontSize: 14 }}>
            Back to <Link to="/">home</Link>
          </Text>

        </Space>
      </Content>
    </Layout>
  )
}
