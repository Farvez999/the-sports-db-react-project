import React from 'react';
import './SinglePlayer.css'

const SinglePlayer = ({ player, cart, setCart }) => {
    console.log(player)
    const { idPlayer, strPlayer, strNationality, strDescriptionEN, strCutout } = player;

    const handleAddToCart = () => {
        const info = {
            idPlayer,
            strPlayer,
            strDescriptionEN,
            strCutout,
            price: '115'
        }
        if (cart) {
            const newPlayer = [...cart, info]
            setCart(newPlayer)
        }
    }
    console.log(cart);

    return (
        <div className='card'>
            <img className='player-img' src={strCutout} alt="" />
            <h3>{strPlayer}</h3>
            <p>{strDescriptionEN ? strDescriptionEN?.slice(0, 20) : 'No Description'}</p>
            <button className='card-btn'>Details</button>
            <button onClick={handleAddToCart} className='card-btn'>Add to Cart</button>
            <button className='card-btn'>BookMark</button>
        </div>
    );
};

export default SinglePlayer;