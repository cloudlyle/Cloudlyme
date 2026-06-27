import { Form, Input, Button, Alert } from 'antd'
import { MailOutlined, LockOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'

export function LoginForm() {
  const navigate = useNavigate()
  const { mutate: login, isPending, isError, error } = useLogin()

  function handleFinish(values: { email: string; password: string }) {
    login(values, { onSuccess: () => navigate('/inbox') })
  }

  return (
    <Form layout="vertical" onFinish={handleFinish} autoComplete="off" requiredMark={false}
      initialValues={{ email: 'cloudly@gmail.com', password: '123456' }}
    >
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
      >
        <Input
          prefix={<MailOutlined style={{ color: '#9B6B75' }} />}
          placeholder="you@example.com"
          autoComplete="email"
          size="large"
          style={{ borderRadius: 12 }}
        />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[{ required: true, message: 'Please enter your password' }]}
      >
        <Input.Password
          prefix={<LockOutlined style={{ color: '#9B6B75' }} />}
          autoComplete="current-password"
          size="large"
          style={{ borderRadius: 12 }}
        />
      </Form.Item>

      {isError && (
        <Form.Item>
          <Alert
            type="error"
            message={error instanceof Error ? error.message : 'Login failed. Please try again.'}
            showIcon
            style={{ borderRadius: 12 }}
          />
        </Form.Item>
      )}

      <Form.Item style={{ marginBottom: 0 }}>
        <Button
          type="primary"
          htmlType="submit"
          loading={isPending}
          block
          size="large"
          style={{ borderRadius: 50 }}
        >
          Sign in
        </Button>
      </Form.Item>
    </Form>
  )
}
