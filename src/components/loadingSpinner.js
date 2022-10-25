import React from "react";

const Spinner=() =>{
    return(
        <div style={{width:"800px",height:"400px",marginLeft:"auto",marginRight:"auto",padding:"auto"}}className="ui active dimmer">
            <div className="ui big text loader">
                Trazim najjaci klip na svetu
            </div>
        </div>
    );
};

export default Spinner;