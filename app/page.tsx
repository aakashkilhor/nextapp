import Link from "next/link"

export default function Home() {
  return (
    <>
    <main>
    <h1>Hi Aakash</h1>
    <Link href='/about'>About Page</Link>
    <br/>
    <Link href='/signin'>Signin Page</Link>
    <br/>
    <Link href='/signup'>Signup Page</Link>
    </main>

    </>
  )
}
