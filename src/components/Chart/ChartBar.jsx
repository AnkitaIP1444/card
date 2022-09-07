import React from 'react'
import "./ChartBar.css"

const ChartBar = (props) => {
    let barHeight = '0%'
    if (props.maxValue > 0) {

        barHeight = Math.round((props.value / props.maxValue) * 100) + '%';

    }

    return (


        <div class="display_chart" >
          <div className='bar_chart_in'>
            
         
           

                <div className='display_fill' style={{ height: barHeight }}></div>

            
            </div>
            <div className='label_container'>{props.label}</div>

        </div>




    )
}

export default ChartBar