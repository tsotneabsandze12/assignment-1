import { useState } from "react";
import PropTypes from   'prop-types'
import Button from "../buttons/Button";

const Count = ({initialNumber}) => {
    const [counter, setCounter] = useState(initialNumber);

    const onIncrement = (number) =>{
        setCounter(counter + number);
    }
    const onDecrement = (number) =>{
        setCounter(counter - number);
    }
    return(
        <div>
            <h3>{counter}</h3>

            <Button color={'green'} text={'+1'} onClick={() => onIncrement(1)}/>
            <Button color={'green'} text={'+5'} onClick={() => onIncrement(5)} />
            <Button color={'green'} text={'+100'} onClick={() => onIncrement(100)}/>

            <Button color={'red'} text={'-1'} onClick={()=>onDecrement(1)}/>
            <Button color={'red'} text={'-5'} onClick={()=>onDecrement(5)}/>
            <Button color={'red'} text={'-100'} onClick={()=>onDecrement(100)}/>
        </div>
    );
}

Count.propTypes = {
    initialNumber:PropTypes.number
}

export default Count;