import './globals.css'

export const metadata = {
  title: 'Luca Pipolo | Senior Full-Stack Developer',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
