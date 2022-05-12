import React from 'react';
import cavity from '../../assets/images/cavity.png';
import treatment from '../../assets/images/treatment.png'

const Services = () => {
    return (
        <div class="mt-20 ml-20">
            <div class="text-left md:text-center ">
                <p class="text-xl text-[#19D3AE]"> OUR SERVICES</p>
                <p class="text-4xl"> Services We Provide</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="card  w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={cavity} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Fluoride Treatment</h2>
                        <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>

                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={cavity} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Fluoride Treatment</h2>
                        <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>

                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={cavity} alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Fluoride Treatment</h2>
                        <p>Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>

                    </div>
                </div>
            </div>

            <div class="hero min-h-screen   primary-content ">
                <div class="hero-content flex-col lg:flex-row-reverse">

                    <div class=" mx-16 ">
                        <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button class="btn bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                    </div>
                    <img src={treatment} class="max-w-sm rounded-lg shadow-2xl ml-20 " />
                </div>
            </div>

        </div>
    );
};

export default Services;