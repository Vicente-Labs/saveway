import { AuthenticatedHeader } from '@/components/auth-header'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthenticatedHeader />
      {children}
    </>
  )
}
