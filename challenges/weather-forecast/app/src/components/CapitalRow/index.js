import React from 'react';

class CapitalRow extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.info(this.props);
    }

    render() {
        return (
            <tr onClick={this.handleClick}>
                <td>{this.props.capital.min}º</td>
                <td>{this.props.capital.max}º</td>
                <td>{this.props.capital.name}</td>
            </tr>
        );
    }
}

export default CapitalRow;
