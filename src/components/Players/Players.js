import React from 'react';
import SinglePlayer from '../SinglePlayer/SinglePlayer';
import './Players.css'

const Players = ({ players, cart, setCart }) => {
    return (
        <div>
            <div className="players-container">
                {
                    players.map((player) => (
                        <SinglePlayer
                            player={player}
                            key={player.idPlayer}
                            cart={cart}
                            setCart={setCart}
                        ></SinglePlayer>
                    ))
                }
            </div>
        </div>
    );
};

export default Players;