import React from 'react';
import logo from './../../Logo.png';
import coxsbazar from './../../Image/Rectangle 1.png';
import sazek from './../../Image/Sajek.png';
import sundarban from './../../Image/sundorbon.png';
import srimongol from './../../Image/Sreemongol.png';

const Home = () => {
    return (
        <div>
            <div className="container">
                <div className="mt-5 container">
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-8 text-right">
                                        <h1 className="display-3 font-weight-bold">Cox's Bazar</h1>
                                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quibusdam quam laudantium facilis quia natus similique omnis, reiciendis quo, maiores vel! Ut eos magnam eius tempora iste, accusantium doloribus possimus dolores maiores dicta alias at consequuntur repudiandae nulla commodi cum a id unde, totam error eaque minima numquam perferendis sit!</p>
                                        <button className="btn btn-warning" data-toggle="modal" data-target="#bookingModal">Book now</button>
                                    </div>
                                    <div className="col-4">
                                        <div className="card">
                                            <div className="card-body">
                                                <img src={coxsbazar} alt="" className="img-fluid" style={{ width: '400px', height: '400px' }} srcset="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-8 text-right">
                                        <h1 className="display-3 font-weight-bold">Sundarban</h1>
                                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quibusdam quam laudantium facilis quia natus similique omnis, reiciendis quo, maiores vel! Ut eos magnam eius tempora iste, accusantium doloribus possimus dolores maiores dicta alias at consequuntur repudiandae nulla commodi cum a id unde, totam error eaque minima numquam perferendis sit!</p>
                                        <button className="btn btn-warning" data-toggle="modal" data-target="#bookingModal">Book now</button>
                                    </div>
                                    <div className="col-4">
                                        <div className="card">
                                            <div className="card-body">
                                                <img src={sundarban} alt="" className="img-fluid" style={{ width: '400px', height: '400px' }} srcset="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-8 text-right">
                                        <h1 className="display-3 font-weight-bold">Sajek Valley</h1>
                                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quibusdam quam laudantium facilis quia natus similique omnis, reiciendis quo, maiores vel! Ut eos magnam eius tempora iste, accusantium doloribus possimus dolores maiores dicta alias at consequuntur repudiandae nulla commodi cum a id unde, totam error eaque minima numquam perferendis sit!</p>
                                        <button className="btn btn-warning" data-toggle="modal" data-target="#bookingModal">Book now</button>
                                    </div>
                                    <div className="col-4">
                                        <div className="card">
                                            <div className="card-body">
                                                <img src={sazek} alt="" className="img-fluid" style={{ width: '400px', height: '400px' }} srcset="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-8 text-right">
                                        <h1 className="display-3 font-weight-bold">Srimangal</h1>
                                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quibusdam quam laudantium facilis quia natus similique omnis, reiciendis quo, maiores vel! Ut eos magnam eius tempora iste, accusantium doloribus possimus dolores maiores dicta alias at consequuntur repudiandae nulla commodi cum a id unde, totam error eaque minima numquam perferendis sit!</p>
                                        <button className="btn btn-warning" data-toggle="modal" data-target="#bookingModal">Book now</button>
                                    </div>
                                    <div className="col-4">
                                        <div className="card">
                                            <div className="card-body">
                                                <img src={srimongol} alt="" className="img-fluid" style={{ width: '400px', height: '400px' }} srcset="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div className="">
                    <div className="modal fade" id="bookingModal">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div className="modal-body text-left">
                                    <div className="form-group">
                                        <label for="inputAddress">Origin</label>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="" required />
                                    </div>
                                    <div className="form-group">
                                        <label for="inputAddress2">Destination</label>
                                        <input type="text" className="form-control" id="inputAddress2" placeholder="" required />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label for="inputEmail4">From</label>
                                            <input type="date" className="form-control" id="inputEmail4" required />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label for="inputPassword4">To</label>
                                            <input type="date" className="form-control" id="inputPassword4" required />
                                        </div>
                                    </div>
                                    <a href="/login" className="btn btn-warning mx-auto">Start Booking Now !!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;