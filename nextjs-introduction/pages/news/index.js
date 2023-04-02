import Link from "next/link"

export default function NewsPage() {
    return (
      <>
      <h1>News Page</h1>
        <ul>
          <li><Link href='news/nesto'>Nextjs</Link></li>
          <li><Link href='news/nesto-drugo'>IDK</Link></li>
        </ul>
      </>
    )
  }
  