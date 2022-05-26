import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryLabel, VictoryPie, VictorySharedEvents } from 'victory';
import Portfel from '../Portfel';



const Diagram = (props) => {
    

    



    return (
        <div>
            <svg viewBox="0 0 450 350">
  <VictorySharedEvents
    events={[{
      childName: ["pie", "bar"],
      target: "data",
      eventHandlers: {
        onMouseOver: () => {
          return [{
            childName: ["pie", "bar"],
            mutation: (props) => {
              return {
                style: Object.assign({}, props.style, {fill: "tomato"})
              };
            }
          }];
        },
        onMouseOut: () => {
          return [{
            childName: ["pie", "bar"],
            mutation: () => {
              return null;
            }
          }];
        }
      }
    }]}
  >
    <g transform={"translate(150, 50)"}>
      
      <VictoryPie name="pie"
        width={300}
        standalone={false} 
        style={{ labels: {fontSize: 25, padding: 10}}}
        data={[
          {x: "BTC", y:props.f1 }, {x: "ETH", y: 2}, {x: "USD", y:1 }
        ]}
      />
    </g>
  </VictorySharedEvents>
</svg>
        </div>
    )
}
export default Diagram;