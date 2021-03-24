import PropTypes from 'prop-types';
import './greeting.css';

const Greeting = ({text,description}) =>{
    return(
        <div>
            <h1>{text}</h1>
            <p>{description}</p>
        </div>
    )
}

Greeting.prototypes = {
    text: PropTypes.string,
    description:PropTypes.string
}

export default Greeting;