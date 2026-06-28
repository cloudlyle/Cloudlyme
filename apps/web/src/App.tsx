import { ConfigProvider } from 'antd'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

const queryClient = new QueryClient()

const cloudlymeTheme = {
  token: {
    colorPrimary:        '#D4687A',
    colorBgBase:         '#FFF8FA',
    borderRadius:        20,
    fontFamily:          'DM Sans, sans-serif',
    colorText:           '#3D1A22',
    colorTextSecondary:  '#9B6B75',
    colorBorder:         'rgba(212, 104, 122, 0.3)',
    colorBgContainer:    '#FFFFFF',
    colorLink:           '#D4687A',
    colorLinkHover:      '#3D1A22',
  },
}

export default function App() {
  return (
    <ConfigProvider theme={cloudlymeTheme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ConfigProvider>
  )
}
