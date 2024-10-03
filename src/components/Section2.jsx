import React from "react";
import './Section2.css'

const Section2 =(props)=>{

    const sec2 = props.sec1;

    return(
        <>
        {
            sec2.map((x)=>{
                return(

                <div className="mt-5 ">
                    <div className="text-center">
                    <span className="text-center fs-1 text-uppercase">{x.our} </span>
                    <span className="text-primary demo fw-bold">{x.products}</span>
                    </div>
                    <p className="p1">{x.p}</p>
                    <div className="d-lg-flex ">

                    <div className="mt-4 game ">
                        <div className="d-flex justify-content-center"><img src={x.img} alt="" className="w-75" /></div>
                        <p className="text-center mt-3 text-primary fw-bold fs-3">{x.price} <span className="text-dark">{x.price1}</span></p>
                        <p className="text-center fs-3">{x.video}</p>
                        <p className="p1">{x.p}</p>
                    </div>
                    <div className="mt-4 game ">
                    <div className="d-flex justify-content-center"><img src={x.img} alt="" className="w-75" /></div>
                    <p className="text-center mt-3 text-primary fw-bold fs-3">{x.price} <span className="text-dark ">{x.price2}</span></p>
                    <p className="text-center fs-3">{x.video}</p>
                    <p className="p1">{x.p}</p>
                    </div>
                    </div>
                    <div>

                    <button className="btn btn-outline-danger btn2">{x.btn2}</button>
                    </div>
                </div>
                )
            })
        }
        </>
    )
}

export default Section2;