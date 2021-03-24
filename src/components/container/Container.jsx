import Greeting from "../greeting/Greeting";
import Count from "../count/Count";
import Theme from "../theme/Theme";
import './container.css';



const Container = () =>{
    return(
        <div className={'container'}>
            <Greeting text={'Hello'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
            <Count initialNumber={1000}/>
            <Theme initialBgColor={'cyan'} initialTextColor={'black'}/>
        </div>
    )
}

export default Container;