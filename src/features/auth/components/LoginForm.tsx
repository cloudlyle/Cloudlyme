import { useLogin } from '../hooks/useLogin'

const inputClass =
  'px-3 py-2 rounded-md border border-[var(--border)] bg-transparent text-[var(--text-h)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent'

export function LoginForm() {
  const { mutate: login, isPending, isError, error } = useLogin()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    login({
      email: form.get('email') as string,
      password: form.get('password') as string,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm">
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-medium text-[var(--text-h)]">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-sm font-medium text-[var(--text-h)]">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className={inputClass}
        />
      </div>

      {isError && (
        <p className="text-sm text-red-500" role="alert">
          {error instanceof Error ? error.message : 'Login failed. Please try again.'}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="px-4 py-2 rounded-md bg-[var(--accent)] text-white font-medium transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? 'Signing in…' : 'Sign in'}
      </button>
    </form>
  )
}
