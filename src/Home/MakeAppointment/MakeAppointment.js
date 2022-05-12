import React from 'react';
import doctorSmall from '../../assets/images/doctor-small.png'

const MakeAppointment = () => {
    return (
        <div class="">

            <div class="hero    primary-content bg-[url('/src/assets/images/appointment.png')]">
                <div class="hero-content flex-col lg:flex-row-reverse ">

                    <div class=" ">
                        <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p class="py-5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button class="btn bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                    </div>
                    <img src={doctorSmall} class=" mt-[-200px] mb-[-20px] pb-[-10px]" />
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;