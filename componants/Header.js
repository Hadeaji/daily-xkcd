import styles from '../styles.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <header >
        <nav>
            <li>
            <Link href="/">
                <a>Home</a>
            </Link>
            </li>
            <li>
            <Link href="/about">
                <a>About</a>
            </Link>
            </li>
        </nav>
    </header>
  )
}
