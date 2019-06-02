import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MULTIPLY, SUB } from './CalculateAction';

class CalculateScreen extends Component {
    render() {
        return (
            <div>
                Welcome to CalculateScreen
                <div>
                {this.props.cal}
                </div>
            </div>
        );
    }
}
const mapStateToProps = s =>{
    return{
        cal : s.calculate.defaultValue
    }
}

export default connect(mapStateToProps, { MULTIPLY, SUB})(CalculateScreen);