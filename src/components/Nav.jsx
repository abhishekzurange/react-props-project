import React from 'react'
import './Nav.css'

const Nav = (props) => {
    const nav2 = props.nav1;

    return (
        <>
            {
                nav2.map((x) => {
                    return (
                        <div className='hero'>
                            <div className=' '>


                                <nav className=' navv ' >



                                    <div className='nav text-capitalize'>
                                        <div className='nav gap-3'>

                                            <li>
                                                <a href=""><i class="bi bi-controller fs-2"></i></a>
                                            </li>
                                            <li >
                                                <a href="" className='text-primary fs-3'>{x.gamepad}</a>
                                            </li>
                                        </div>
                                        <div className='nav1 d-none  d-lg-flex'>

                                            <li>
                                                <a href="">{x.home}</a>
                                            </li>
                                            <li>
                                                <a href="">{x.about}</a>
                                            </li>
                                            <li>
                                                <a href="">{x.product}</a>
                                            </li>
                                            <li>
                                                <a href="">{x.service}</a>
                                            </li>
                                            <li>
                                                <a href="">{x.contact}</a>
                                            </li>
                                        </div>
                                        <div className='nav gap-3 d-none d-lg-flex'>
                                            <li>
                                                <a href=""><i class="bi bi-search fs-2" ></i></a>
                                            </li>

                                            <li>
                                                <a href="">{x.sign}</a>
                                            </li>
                                        </div>

                                        <li className='d-none d-lg-block'>
                                            <a href="">{x.register}</a>
                                        </li>
                                        <div className='d-lg-none '>
                                        <i class="bi bi-list fs-1" ></i>
                                        </div>

                                    </div>
                                </nav>
                            </div>
                            <div className='nav2 d-lg-flex '>
                                <div className='ms-3'>
                                    <h2 className='text-uppercase fs-1'>{x.viga}</h2>
                                    <h1 className='abc'>{x.control}</h1>
                                    <p className='fw-bold w-75 mt-5'>{x.p1}</p>
                                    <button className='btn btn-outline-danger text-white p-3  mt-4'>{x.btn}</button>
                                </div>
                                <div className='mt-5 mt-md-0 mt-lg-0 img1'>
                                    <img src={x.img} alt="" className='w-100  ' />
                            
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Nav;