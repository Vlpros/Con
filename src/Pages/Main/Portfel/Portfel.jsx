import React from "react";
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryLabel, VictoryPie, VictorySharedEvents } from 'victory';
import Diagram from "./Diagram/Diagram";
import s from "./Portfel.css"




const Portfel = (props) => {

    // Курс самописный
    let btc = 61003;
    let eth = 4563;
    let usd = 1;
    let rub = 0;
    let port = 0;

    //создание ссылок  
    let btcval = React.createRef();
    let ethval = React.createRef();
    let usdval = React.createRef();
    let sumval = React.createRef();


    let addPost = () => {


        //приведение к числу
        let f1 = parseInt(btcval.current.value)
        let f2 = parseInt(ethval.current.value)
        let f3 = parseInt(usdval.current.value)
        let sum = f1 + f2 + f3

        sumval.current.value = sum;
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
                                                style: Object.assign({}, props.style, { fill: "tomato" })
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
                                style={{ labels: { fontSize: 25, padding: 10 } }}
                                data={[
                                    { x: "BTC", y: f1 }, { x: "ETH", y: f2 }, { x: "USD", y: f3 }
                                ]}
                            />
                        </g>
                    </VictorySharedEvents>
                </svg>
            </div>
        )
    }

    let deletePost = () => {
        btcval.current.value = " ";
        ethval.current.value = " ";
        usdval.current.value = " ";
        sumval.current.value = " ";
    }




    return (

        <div className="box-portfel">
            <div className="portfel">
                <button className='first' type='submit'>1</button>
                <h3>Портфель</h3>
                <p>Сумма портфеля в USD</p>
                <input className='inputt' ref={sumval} type='text' id='port' placeholder="Общая сумма портфеля"></input>
                <button className='count' onClick={addPost} type='submit' >Расчет портфеля</button>
                <button className='deletecount' onClick={deletePost} type='submit'>Очистить</button>
                <p>BTC</p>
                <input className='inputt' min="0" ref={btcval} type='number' placeholder="Добавьте в портфель"></input>
                <p>ETH</p>
                <input className='inputt' ref={ethval} type='number' placeholder="Добавьте в портфель" ></input>
                <p>USD</p>
                <input className='inputt' ref={usdval} type='number' placeholder="Добавьте в портфель"></input>

            </div>
            <div className="diagram">
                <div>
                
                </div>
            </div>

        </div>

    )
}
export default Portfel;
