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
        const colName = <td className="capitals__colName">{this.props.capital.name}</td>;

        return (
            <tr onClick={this.handleClick}>
                {this.props.side === "right" ? colName : null}
                <td className="capitals__colMin">{this.props.capital.min}º</td>
                <td className="capitals__colMax">{this.props.capital.max}º</td>
                {this.props.side === "right" ? null : colName}
            </tr>
        );
    }
}

export default CapitalRow;
