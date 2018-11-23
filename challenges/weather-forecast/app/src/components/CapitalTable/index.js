import React from 'react';
import CapitalRow from './../CapitalRow/';

class CapitalTable extends React.Component {
    render() {
        let capitalsChunks = [
            this.props.capitals.slice(0, this.props.capitals.length/2),
            this.props.capitals.slice(this.props.capitals.length/2)
        ];
        
        return (
            <section className="capitals">
                <h3 className="capitals__title">Capitals</h3>
                <div>
                    {capitalsChunks.map((capitals, key) =>
                        <div key={key} className="capitals__column-wrapper">
                            <table className="capitals__table">
                                <thead>
                                    <tr>
                                        <th>Min</th>
                                        <th>Max</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {capitals.map(capital => 
                                        <CapitalRow key={capital.key} capital={capital} />
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </section>
        );
    }
}

export default CapitalTable;
