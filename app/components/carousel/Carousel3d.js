'use client'
import React, { useState } from 'react';
import './3d.scss';

export default function Carousel3d() {
    const [cards, setCards] = useState([
        {
            image: 'https://randomuser.me/api/portraits/men/25.jpg',
            name: 'Andrew Neil',
            job: 'Web Designer',
            description: 'I ujsnu ujUj IjIJIn JiJ jJi JiJi JijI Jijijiji juju'
        },
        {
            image: 'https://randomuser.me/api/portraits/men/25.jpg',
            name: 'Andrew Neil',
            job: 'Web Designer',
            description: 'I ujsnu ujUj IjIJIn JiJ jJi JiJi JijI Jijijiji juju'
        },
        {
            image: 'https://randomuser.me/api/portraits/men/25.jpg',
            name: 'Andrew Neil',
            job: 'Web Designer',
            description: 'I ujsnu ujUj IjIJIn JiJ jJi JiJi JijI Jijijiji juju mjijijijjijIJ jiji jn jij ijij jij ijiji i ijij ij j j j iji jijijijij jiji ijijij ij ij ij ij ijijijji.'
        },
        {
            image: 'https://randomuser.me/api/portraits/men/25.jpg',
            name: 'Andrew Neil',
            job: 'Web Designer',
            description: 'I ujsnu ujUj IjIJIn JiJ jJi JiJi JijI Jijijiji juju'
        },
        {
            image: 'https://randomuser.me/api/portraits/men/25.jpg',
            name: 'Andrew Neil',
            job: 'Web Designer',
            description: 'I ujsnu ujUj IjIJIn JiJ jJi JiJi JijI Jijijiji juju'
        },
        {
            image: 'https://randomuser.me/api/portraits/men/25.jpg',
            name: 'Andrew Neil',
            job: 'Web Designer',
            description: 'I ujsnu ujUj IjIJIn JiJ jJi JiJi JijI Jijijiji juju'
        }
    ]);

    return (
        <div className='bg-gray-200 sb-c mt-5'>
            <h1 className='heading text-4xl font-bold'>Foreschool has expert teachers who care!</h1>
            <p className='subheading text-sm font-thin'>Only the top 5% applicants are selected and trained to be Foreschool-certified.</p>
        
            <div className='s-container'>
                <div className='s-body'>
                    <div className="container">
                        <input type="radio" name="dot" id="one" />
                        <input type="radio" name="dot" id="two" />
                        <div className="main-card font-serif">
                            <div className="cards cards-ppp-o">
                                {cards.slice(0, 3).map((card, index) => (
                                    <div className="card" key={index}>
                                        <div className="content">
                                            <div className="circle" style={{ backgroundImage: `url(${card.image})` }} />
                                            <div className="details">
                                                <div className="name">{card.name}</div>
                                                <div className="job">{card.job}</div>
                                            </div>
                                            <div className="media-icons">
                                                <p>{card.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="cards">
                                {cards.slice(3).map((card, index) => (
                                    <div className="card" key={index + 3}>
                                        <div className="content">
                                            <div className="circle" style={{ backgroundImage: `url(${card.image})` }} />
                                            <div className="details">
                                                <div className="name">{card.name}</div>
                                                <div className="job">{card.job}</div>
                                            </div>
                                            <div className="media-icons">
                                                <p>{card.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="buttons">
                            <label htmlFor="one" className="active one" />
                            <label htmlFor="two" className="two" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
