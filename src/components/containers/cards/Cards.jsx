import React, { Component } from "react";
import Card from "../../components/card/Card";
import { connect } from "react-redux";

class Cards extends Component {
    render() {

        return(
            <div>
                {this.props.characters.map(character => <Card key= {character.id} character={{...character}} />)}
            </div>
        )
        
    }
}
const mapStateToProps = (state) =>{
    return {
        characters: state.character
    }
}
export default connect(mapStateToProps,null)(Cards)