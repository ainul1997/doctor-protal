import React from 'react';
import clock from '../../assets/images/fluoride.png'

const InfoCard = () => {
    return (
        <div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
                <img src={clock} alt="" />
                <div class="card-body">
                    <h2 class="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>

                </div>
            </div>
        </div>
    );
};

export default InfoCard;