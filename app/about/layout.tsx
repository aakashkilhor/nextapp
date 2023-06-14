import style from './style.module.css'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
        <main className= {style.main}>
            {children}
        </main>
        </>
        )
}
