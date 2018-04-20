import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import Panel from '../../components/panel.js';
import SimpleLineChart from '../../charts/simpleLineChart.js';
import SimpleAreaChart from '../../charts/simpleAreaChart.js';

import Service from '../../service';

class Analitics extends Component {
    constructor(props) {
        super(props);
        this.service = new Service();
        this.service.setToken(localStorage.getItem('token'))
        this.state = null
    }

    generateBills = () => {

    }

    render() {
        return (
            <div className="content">
                <div className="row">
                    <div className="col-md-6">
                        <Panel
                            title="Acessos em paginas"
                            righticon={true}>
                            <SimpleLineChart />
                        </Panel>
                    </div>
                    <div className="col-md-6">
                        <Panel
                            title="Ganhos Totais"
                            righticon={true}>
                            <SimpleAreaChart />
                        </Panel>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Analitics)