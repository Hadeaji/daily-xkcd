import styles from '../styles.module.css'
import Link from 'next/link'

import SplitButton from 'react-bootstrap/SplitButton'
import Dropdown from 'react-bootstrap/Dropdown'

export default function Footer(props) {
  return (
    <footer >
      {/* <h2>Previous {props.propsIds.length}</h2>
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
      </ul> */}
      
      <>
      {['Other comics',].map(
        (variant) => (
          <SplitButton
            key={variant}
            id={`dropdown-split-variants-${variant}`}
            variant={variant.toLowerCase()}
            title={variant}
          >
            
          {props.propsIds.map((comic)=>{
              return(
                  <>
                    <Dropdown.Item key={comic.num}>
                      <Link href="/comic/[num].js" as={`/comic/${comic.num}`}>
                            <a>{comic.num}</a>
                      </Link>
                    </Dropdown.Item>
                  </>
                )
          })}

          </SplitButton>
        ),
      )}
    </>
    </footer>
  )
}
