import React from 'react';
import './Section3.css';

const Section3 =(props)=>{

    const sec5 = props.sec4;
    return(
        <>
        {
               
               sec5.map((x)=>{

                return(
                    <div className='bg-1 d-lg-flex'>
                         
                         <div className='vd-0'>
                           <h2 className='text-primary fw-bold text-uppercase mt-5 vd'>{x.d3}</h2>
                           <h2 className='text-white text-uppercase vd-1 '>{x.remote}</h2>
                           <p className='text-white fw-bold'>{x.p}</p>
                           <button className='btn btn-outline-primary btn-01'>{x.btn}</button>
                         </div>
                         
                            <div className='img-3'>
                                <img src={x.img} alt="" className='w-100'/>
                            </div>
                         
                    </div>
                )
               })
        }
        </>
    )
}

export default Section3;