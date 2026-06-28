import { Button, Result } from 'antd'
import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100svh' }}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, this page does not exist."
        extra={
          <Link to="/">
            <Button type="primary" size="large" style={{ borderRadius: 50 }}>
              Go home
            </Button>
          </Link>
        }
      />
    </div>
  )
}
