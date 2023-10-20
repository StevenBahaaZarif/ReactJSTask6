import React from "react";

function Percent(props) {
    console.log(props);

    return ( <>
      
                <p className="w3-wide">{props.name}</p>
                <div className="w3-light-grey">
                  <div  className="w3-container w3-center w3-padding-small w3-dark-grey" style={{width:parseInt(props.width)+'%'}}  >{props.percentage}</div>
                </div>
                {/* <p className="w3-wide">Web Design</p>
                <div className="w3-light-grey">
                  <div className="w3-container w3-center w3-padding-small w3-dark-grey" style={{width:85}}>85%</div>
                </div>
                <p className="w3-wide">Photoshop</p>
                <div className="w3-light-grey">
                  <div className="w3-container w3-center w3-padding-small w3-dark-grey" style={{width:80}}>80%</div>
                </div><br/> */}
    
    
    
    </> );
}

export default Percent;