
import './3d.scss'

export default function Carousel3d() {

    return (
        <div className='s-container'>
            <div className='s-body'>
                <div className="container">
                    <input type="radio" name="dot" id="one" />
                    <input type="radio" name="dot" id="two" />
                    <div className="main-card font-serif">
                        <div className="cards">
                        <div className="card">
                                <div className="content">
                                    <div className="circle" style={{ backgroundImage: 'url("https://randomuser.me/api/portraits/men/25.jpg")' }} />
                                    <div className="details">
                                        <div className="name">Andrew Neil</div>
                                        <div className="job">Web Designer</div>
                                    </div>
                                    <div className="media-icons">
                                        <p>I ujsnu ujUj IjIJIn JiJ jJi JiJi JijI Jijijiji juju </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="content">
                                    <div className="circle" style={{ backgroundImage: 'url("https://randomuser.me/api/portraits/men/25.jpg")' }} />
                                    <div className="details">
                                        <div className="name">Andrew Neil</div>
                                        <div className="job">Web Designer</div>
                                    </div>
                                    <div className="media-icons">
                                        <p>I ujsnu ujUj IjIJIn JiJ jJi JiJi JijI Jijijiji juju </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="content">
                                    <div className="circle" style={{ backgroundImage: 'url("https://randomuser.me/api/portraits/men/25.jpg")' }} />
                                    <div className="details">
                                        <div className="name">Andrew Neil</div>
                                        <div className="job">Web Designer</div>
                                    </div>
                                    <div className="media-icons">
                                        <p>I ujsnu ujUj IjIJIn JiJ jJi JiJi JijI Jijijiji juju
                                            mjijijijjijIJ jiji jn jij ijij jij ijiji 
                                             i ijij ij j j j iji jijijijij jiji 
                                              ijijij ij ij ij ij ijijijji. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* next silde */}
                        <div className="cards">
                            <div className="card">
                                <div className="content">
                                    <div className="circle" style={{ backgroundImage: 'url("https://randomuser.me/api/portraits/men/25.jpg")' }} />
                                    <div className="details">
                                        <div className="name">Andrew Neil</div>
                                        <div className="job">Web Designer</div>
                                    </div>
                                    <div className="media-icons">
                                        <p>I ujsnu ujUj IjIJIn JiJ jJi JiJi JijI Jijijiji juju </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="content">
                                    <div className="circle" style={{ backgroundImage: 'url("https://randomuser.me/api/portraits/men/25.jpg")' }} />
                                    <div className="details">
                                        <div className="name">Andrew Neil</div>
                                        <div className="job">Web Designer</div>
                                    </div>
                                    <div className="media-icons">
                                        <p>I ujsnu ujUj IjIJIn JiJ jJi JiJi JijI Jijijiji juju </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="content">
                                    <div className="circle" style={{ backgroundImage: 'url("https://randomuser.me/api/portraits/men/25.jpg")' }} />
                                    <div className="details">
                                        <div className="name">Andrew Neil</div>
                                        <div className="job">Web Designer</div>
                                    </div>
                                    <div className="media-icons">
                                        <p>I ujsnu ujUj IjIJIn JiJ jJi JiJi JijI Jijijiji juju </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="buttons">
                        <label htmlFor="one" className="active one" />
                        <label htmlFor="two" className="two" />
                    </div>
                </div>
            </div>
        </div>
    );
}
