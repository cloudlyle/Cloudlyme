import { Link } from 'react-router-dom'
import { LoginForm } from '@features/auth'

export function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center grow gap-8 px-4 py-16">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-3xl font-medium text-[var(--text-h)] m-0">Sign in</h1>
        <p className="text-[var(--text)]">Enter your credentials to continue.</p>
      </div>

      <LoginForm />

      <p className="text-sm text-[var(--text)]">
        Back to{' '}
        <Link to="/" className="text-[var(--accent)] underline">
          home
        </Link>
      </p>
    </div>
  )
}
