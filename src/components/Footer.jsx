import React from "react";
import './Footer.css'

const Footer=(props)=>{
const ft = props.ft;

return(
    <>
    {
        ft.map((x)=>{
            return(
                <div className="mt-5 bg-dark text-white">
                    <div className="d-lg-flex d-md-flex justify-content-around br ">
                        <div className=" ft1">
                            <h2 className="fw-bold text-capitlize">{x.ab}</h2>
                            <p className="mt-4">{x.p2}</p>
                        </div>
                        <div  className="ft"  >
                        <h2 className="fw-bold text-capitlize">{x.use}</h2>
                        <p className="mt-4">{x.vid}</p>
                        <p>{x.re}</p>
                        <p>{x.re}</p>
                        </div>
                        <div  className="ft">
                        <h2 className="fw-bold text-capitlize">{x.us}</h2>
                        <p className="mt-4">{x.p2}</p>
                        </div>
                        <div  className="ft">
                            <h2 className="fw-bold text-capitlize">{x.news}</h2>
                            <input type="text" placeholder={x.place} className="mt-4" />
                            <button  className="btn btn-ouline-danger bg-danger text-white pt-2 pb-2 ps-5 pe-5 mt-3 mb-4 ">{x.btn1}</button>
                        </div>
                    </div>
                    <div className="d-flex w-100 justify-content-center mt-3 gap-5 fs-3">
                        <p><i class="bi bi-facebook"></i></p>
                        <p><i class="bi bi-twitter"></i></p>
                        <p><i class="bi bi-linkedin"></i></p>
                        <p><i class="bi bi-instagram"></i></p>
                    </div>
                </div>
            )
        })
    }
    </>
)
}

export default Footer;