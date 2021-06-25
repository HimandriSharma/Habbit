import React from 'react'
import './Card.css'

function card(props) {
    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={props.image} alt='url not working'/>
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{props.title}</h3>
                </div>
                {/* <div className="card-body">
                    <p>{props.body}</p>
                </div> */}
            </div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                {/* <button style={{border:'none'}}>
                    <a href='/'>
                        Expand
                    </a>
                </button> */}
                
            </div>
        </div>
    )
}

export default card
