export const metadata = {
  title: 'Wscope Flooring',
  description: 'Internal flooring business app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-zinc-50">
        {children}
      </body>
    </html>
  )
}

