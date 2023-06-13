import Link from "next/link"
import type {Metadata} from 'next'


export const metadata : Metadata = {
  title: 'About Us',
  description: 'Generated by create next app',
}


export default function About() {
    // throw new Error("test")
  return (
    <>
    <h1>About Us</h1>
    <div>You are on about page</div>
    <div>Do you know why can't we use a tag of html and import link from next in
        some frameworks is because a tag will work but will make the whole page
        re render which we avoid in such frameworks.
    </div>
    <Link href='/'>Return to home</Link>
    </>
  )
}