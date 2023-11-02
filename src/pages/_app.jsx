import AppLayout from '@/layout/AppLayout'
import '@/styles/global.sass'

export default function App({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}
