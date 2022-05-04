import React, { Component } from 'react';

class city extends Component {

    constructor(props) {
        super(props);
        this.city={
            city:'Surat'
        };
    }
    Changecity = () => {
        this.setCity({
            city:'Ahmedabad'
        })
    }
    

    render() {
        return (
            <>
              <div>city:{this.city.country}</div>
              <button onClick={()=>this.Changecity()}>Change</button>
            </>
        );
    }
}

export default country;