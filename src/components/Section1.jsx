import React from 'react'
import './Section1.css'

const Section1 =(props)=>{

    let section2 = props.section1;

    return(

        <>
        {
            section2.map((x)=>{
                return(
                    <div className='d-lg-flex mt-3'>
                        <div>
                      <img src={x.img} alt="" className='w-100' />
                        </div>
                        <div className='ms-3 about '>
                        <h3 className='text-uppercase text-center mt-4 fw-bold fs-1 '>{x.about}</h3>
                        <p className='mt-3 p'>{x.p}</p>
                        <button className='btn btn-outline-danger mt-3 btn1'>{x.btn }</button>
                        </div>
                    </div>
                )
            })
        }
        </>
    )
}

export default Section1;