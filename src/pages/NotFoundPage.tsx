import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh gap-4 text-center">
      <h1 className="text-8xl font-medium text-[var(--text-h)] m-0">404</h1>
      <p className="text-[var(--text)]">Page not found.</p>
      <Link to="/" className="text-[var(--accent)] underline">
        Go home
      </Link>
    </div>
  )
}
