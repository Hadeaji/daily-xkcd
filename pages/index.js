import styles from '../styles.module.css'
import Header from '../componants/Header'
import Footer from '../componants/Footer'
import MyLayout from '../componants/MyLayout'

export default function Home(props) {
  return (
    <MyLayout >
      <h1>XKCD</h1>
      <div>
        <p>{props.comics[0].safe_title}</p>
        <img src={props.comics[0].img} />
      </div>
      <Footer propsIds={props.comics}/>
    </MyLayout>
    
  )
}

export async function getServerSideProps(){
  let intitialNum = 2413;
  let jsonData = [];

  for(let i=0; i < 10 ; i++){
    let response = await fetch(`https://xkcd.com/${intitialNum-i}/info.0.json`);
    let jsonPartData = await response.json();
    jsonData.push(jsonPartData);
  };

  return {props: {comics: jsonData} } 
}