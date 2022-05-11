import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import mobile from '../../assets/icons/phone.svg';

const InfoCard = () => {
    return (
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 m-4">
            <div class="card lg:card-side bg-primary shadow-xl ">
                <figure><img class="ml-4 mt-4" src={clock} alt="" /></figure>
                <div class="card-body text-white">
                    <h2 class="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
            <div class="card lg:card-side bg-accent shadow-xl">
                <figure>
                    <img class="ml-4 mt-4" src={marker} alt="" />
                </figure>
                <div class="card-body text-white">
                    <h2 class="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
            <div class="card lg:card-side bg-primary shadow-xl">
                <figure>
                    <img class="ml-4 mt-4" src={mobile} alt="" />
                </figure>
                <div class="card-body text-white">
                    <h2 class="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;