import React from 'react'

import ChartBar from './ChartBar';
import "./Chart.css"
const Chart = (props) => {
    const ChartDatavalues = props.datacharts.map(Datavalue => Datavalue.value)
    const totalMax = Math.max(...ChartDatavalues)

    return (

        <div className='chart'>
            {props.datacharts.map((Datavalue) => (

                <ChartBar

                    key={Datavalue.label}

                    value={Datavalue.value}

                    maxValue={totalMax}

                    label={Datavalue.label}

                />

            ))}

        </div>

    );

};

export default Chart