import Header from '../componants/Header'
import Footer from '../componants/Footer'

export default function MyLayout(props){
    return(
    <div>
        <Header />
        {props.children}
        <style jsx>{`
            color: darkcyan;
            padding: 10px;
            text-align: center;
            transition: 100ms ease-in background;
            background: whitesmoke;
        `}</style>
    </div>
)
}