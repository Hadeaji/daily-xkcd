import styles from '../styles.module.css'
import Link from 'next/link'

export default function Footer(props) {
  return (
    <footer >
      <h2>Previous {props.propsIds.length}</h2>
      <ul style={{ display: "inline" }}>
          {props.propsIds.map((comic)=>{
              return(
                    <li key={comic.num} style={{textDecoration: "none",display: "inline", margin:"10px"}}>
                      <Link href="/comic/[num].js" as={`/comic/${comic.num}`}>
                            <a>{comic.num}</a>
                      </Link>
                    </li>
                )
          })}
      </ul>
    </footer>
  )
}
