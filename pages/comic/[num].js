import MyLayout from '../../componants/MyLayout'

export default function UserDetails(props){
    return(
        <MyLayout>
            <h2>{props.comics.safe_title} </h2>
            <img src={props.comics.img}/>
        </MyLayout>
    )
}

export async function getServerSideProps(context){
    const num = context.query.num;
  
    let response = await fetch(`https://xkcd.com/${num}/info.0.json`);
    let jsonData = await response.json();
  
    return {props: {comics: jsonData} }
  }