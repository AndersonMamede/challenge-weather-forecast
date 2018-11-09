import React, { Component } from 'react';

class Capitals extends Component {
    constructor() {
        super();
        this.state = {
            capitals: [
                {name: "Rio de Janeiro"},
                {name: "São Paulo"},
                {name: "Belo Horizonte"},
                {name: "Rio de Janeiro"},
                {name: "Brasília"},
                {name: "Belem"},
                {name: "Rio de Janeiro"}
            ]
        };
    }

    render() {
        return (
            <section className="capitals">
                <h3 className="capitals-title">Capitals</h3>
                <table className="capitals-table">
                    <tbody>
                        {this.state.capitals.map((capital, key) => {
                            console.info(key)
                        })}
                    </tbody>
                </table>
            </section>
        );
    }
}

export default Capitals;
