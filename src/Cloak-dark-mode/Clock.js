import React, {useState} from 'react';
import '../Cloak-dark-mode/Clock.css'
class ClockDM extends React.Component{

    handleDarkMode = ()=>{
        //icon
        const Sun = document.querySelector('.bxs-sun');
        const Moon = document.querySelector('.bxs-moon');
        Moon.classList.toggle('moon');
        Sun.classList.toggle('sun');

     
    }
    render(){
        return(
            <div className="calculadora ">
                <div className="mode-dark">
                    <button className="btn btn-dark-mode" onClick={this.handleDarkMode}>
                    <i className='bx bxs-sun' ></i>   
                    <i className='bx bxs-moon'></i>
                    </button>
                </div>
                <div className="screen">
                    <input
                    className="form-control"
                    type="text"
                    />

                </div>
                <div className=" container keyboard  ">
                    <div className="row">
                        <div className="col p-0 ">
                            <button className="py-4 simbol">AC</button>
                        </div>
                        <div className="col p-0 me-0">
                            <button className="simbol">DEL</button>
                        </div>
                        <div className="col p-0">
                            <button className="simbol">%</button>
                        </div>
                        <div className="col p-0">
                            <button className="simbol">/</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col p-0">
                            <button className="py-4 numbers">7</button>
                        </div>
                        <div className="col p-0">
                            <button className="numbers">8</button>
                        </div>
                        <div className="col p-0">
                            <button className="numbers">9</button>
                        </div>
                        <div className="col p-0">
                            <button className="simbol">*</button>
                        </div>

                    </div>



                    <div className="row">
                        <div className="col p-0">
                            <button className="py-4 numbers">4</button>
                        </div>
                        <div className="col p-0">
                            <button className="numbers">5</button>
                        </div>
                        <div className='col p-0'>
                            <button className="numbers">6</button>
                        </div>
                        <div className='col p-0'>
                            <button className="simbol">-</button>
                        </div>
                    </div>


                    <div className="row">
                        <div className='col p-0'>
                            <button className="py-4 numbers">3</button>
                        </div>
                        <div className='col p-0'>
                            <button className="numbers">2</button>
                        </div>
                        <div className='col p-0'>
                            <button className="numbers">1</button>
                        </div>
                        <div className='col p-0'>
                            <button className="simbol">+</button>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col p-0'>
                            <button className="py-4 numbers">0</button>
                        </div>
                        <div className='col p-0'>
                            <button className="simbol">.</button>
                        </div>
                        <div className='col p-0'>
                            <button className="equal">=</button>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}

export default ClockDM;