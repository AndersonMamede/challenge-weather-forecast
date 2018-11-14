import React from 'react';
import CapitalRow from './../CapitalRow/';

class CapitalTable extends React.Component {
    render() {
        return (
            <section className="capitals">
                <h3 className="capitals__title">Capitals</h3>
                <table className="capitals__table">
                    <thead>
                        <tr>
                            <th>Min</th>
                            <th>Max</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.capitals.map(capital => 
                            <CapitalRow key={capital.key} capital={capital} />
                        )}
                    </tbody>
                </table>
            </section>
        );
    }
}

export default CapitalTable;
