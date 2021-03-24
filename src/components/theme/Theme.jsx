import {useState} from 'react';
import PropTypes from 'prop-types';
import ColorBtn from "../buttons/ColorBtn";
import './theme.css'

const Theme = ({initialBgColor,initialTextColor}) =>{
    const [backgroundColor,setBackgroundColor] = useState(initialBgColor);
    const [textColor,setTextColor] = useState(initialTextColor);

    const changeFrame = (colorBg,colorTxt) =>{
        setBackgroundColor(colorBg);
        setTextColor(colorTxt);
    }

    return(
        <div>
            <div className={'frame'} style={{backgroundColor:backgroundColor,
                color:textColor}}>
                text
            </div>
            {
                ['white','yellowgreen','yellow']
                    .map(color=> <ColorBtn color={color} onClick={
                        () => changeFrame(color,'black')}/>)
            }

            {
                ['blue','purple','black']
                    .map(color => <ColorBtn color={color} onClick={
                        () => changeFrame(color,'white')}/>)
            }

        </div>
    )
}

Theme.prototypes = {
    initialColor : PropTypes.string
}

export default Theme;