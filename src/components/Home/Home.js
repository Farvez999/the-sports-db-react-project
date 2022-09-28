import React, { useEffect, useState } from 'react';
import Players from '../Players/Players';
import './Home.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    const [search, setSearch] = useState('');
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);
    // console.log(players)

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
            .then(res => res.json())
            .then(data => setPlayers(data?.player))
    }, [search])


    const handleDelete = (id) => {
        const leftPlayer = cart.filter(pd => pd.idPlayer !== id);
        setCart(leftPlayer)
        toast("Wow Delete Cart Item!");
    }

    return (
        <div className='home-container'>
            <div className="player-container">
                <input onChange={(e) => setSearch(e.target.value)} type="text" className='search-input' />
                <button className='search-btn'>Search</button>
                <div>
                    <Players players={players}
                        cart={cart}
                        setCart={setCart}
                    ></Players>
                </div>
            </div>
            <div className="cart-container">
                <div className="cart">
                    <h3>This is Cart</h3>
                    {
                        cart?.map((p) => (
                            <div className="cart-info-container">
                                <li>{p.strPlayer}</li>
                                <button onClick={() => { handleDelete(p.idPlayer) }} className='delete-btn'>X</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;