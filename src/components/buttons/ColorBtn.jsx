import PropTypes from "prop-types";

const ColorBtn = ({color,onClick}) =>{
    return(
        <button className={'color-btn'} onClick={onClick} style={{
            backgroundColor: color
        }}/>
    )
}

ColorBtn.propTypes = {
    color : PropTypes.string,
    onClick : PropTypes.func
}
export default ColorBtn;