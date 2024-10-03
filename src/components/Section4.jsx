import React from "react";
import './Section4.css';

const Section4=(props)=>{

    const section04 = props.section04;
    return(

        <>
        {
           section04.map((x)=>{
            return(
                <div>
                    <h2 className="text-center mt-5 text-uppercase fw-bold fs-1">{x.test}</h2>
                    <p className="text-center mt-3 p1">{x.p}</p>

                    <div className="test mt-4 ">
                        <p className="text-primary fw-bold fo ms-4 "><i class="bi bi-quote"></i></p>
                        <p className="ms-4 me-2 mb-4">{x.p1}</p>
                        <div className="d-flex re mb-3 ms-3 ">
                            <div className="ms-3 img-1">
                                <img src={x.img} alt="" />
                            </div>
                            <div >
                            <p className="fw-bold text-uppercase text-white mt-3 ms-3">{x.sandy}</p>
                            <p className=" fw-bold text-uppercase ms-3">{x.rep}</p>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-outline-primary pt-2 pb-2 ps-5 pe-5 mt-3 btn01 ">{x.btn}</button>
                </div>
            )
           })
        }
        </>
    )
}

export default Section4;