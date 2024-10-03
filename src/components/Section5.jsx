import React from "react";
import './Section5.css';

const Section5 = (props) => {

    const sec5 = props.sec5
    return (
        <>
            {
                sec5.map((x) => {
                    return (
                        <div className="mt-5 w-100 sec-1 ">
                            <div className="form">
                                <form action="" className="w-75">

                                    <input type="text" placeholder={x.name} id="" className="w-100 form-1" />
                                    <input type="text" placeholder={x.no} id="" className="w-100 form-1" />
                                    <input type="text" placeholder={x.email} id="" className="w-100 form-1" />
                                    <textarea name="" placeholder={x.message} id="" className="w-100 form-1" rows="10"></textarea>
                                    <button className="btn btn-ouline-danger bg-danger text-white pt-2 pb-2 ps-5 pe-5 mt-3 bt-1">{x.btn}</button>
                                </form>
                            </div>
                            <div className="im-1">
                                <div className="w-100">
                                <img src={x.img} alt="" className="w-100" />
                                </div>
                            </div>
                            
                        </div>
                    )
                })
            }
        </>
    )
}

export default Section5;