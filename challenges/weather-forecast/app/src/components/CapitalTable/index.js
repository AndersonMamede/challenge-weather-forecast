import React from 'react';
import CapitalRow from './../CapitalRow/';
import './index.css';

class CapitalTable extends React.Component {
    render() {
        const capitalsChunks = [
            this.props.capitals.slice(0, this.props.capitals.length/2),
            this.props.capitals.slice(this.props.capitals.length/2)
        ];
        
        return (
            <section className="capitals">
                <div className="capitals__content">
                    <h3 className="capitals__title">Capitals</h3>
                    {capitalsChunks.map((capitals, tableNumber) => {
                        const side = tableNumber%2 === 1 ? "right" : "left";
                        const tableSideClass = "capitals__table--Side--" + (side === "right" ? "Right" : "Left");
                        const thName = <th></th>;

                        return <div key={tableNumber} className="capitals__column-wrapper">
                            <table className={"capitals__table " + tableSideClass} data-side={side} border="0">
                                <thead>
                                    <tr>
                                        {side === "right" ? thName : null}
                                        <th>Min</th>
                                        <th>Max</th>
                                        {side === "right" ? null : thName}
                                    </tr>
                                </thead>
                                <tbody>
                                    {capitals.map(capital => 
                                        <CapitalRow key={capital.name} capital={capital} side={side} />
                                    )}
                                </tbody>
                            </table>
                        </div>
                    })}
                </div>
            </section>
        );
    }
}

export default CapitalTable;
