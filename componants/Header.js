import styles from '../styles.module.css'
import Link from 'next/link'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  return (
    <header >

      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Comics</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Navbar>

        {/* <nav>
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
        </nav> */}
    </header>
  )
}
