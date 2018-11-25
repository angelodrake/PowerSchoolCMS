import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

class barChart extends React.Component {

  render() {
   console.log(this.props.classes)
   console.log(this.props.average)
  let xlabel = this.props.average.map(score =>score/25)
    const data = {
      labels: this.props.classes ,
      datasets: [
        {
          backgroundColor: 'rgba(0,128,225,0.2)',
          hoverBackgroundColor: 'rgba(0,128,225,0.4)',
          borderColor: 'rgba(0,128,225,1)',
          hoverBorderColor: 'rgba(0,128,225,1)',
          borderWidth: 1, 
          data:xlabel
        }
      ]
    };


    return (
      <div style={{padding:1+'rem'}}>
        <h3>Individual Class Performace</h3>
        <HorizontalBar
          data={data}
          width={100}
          height={50}
          
          options={{
           
            legend: {
              display: false
            },
            maintainAspectRatio: false,
            scales: {
              xAxes: [{
                ticks: {
                   max: 4,
                   min: 0,
                   stepSize: 2
                 }
               }]
              }

          }}
        />
      </div>
    );
  }
}

export default barChart;

