import React from 'react';
import TestiomonialCard from './TestiomonialCard';

const Testimonials = () => {


    return (
        <section className='max-w-[1200px] py-16 mx-auto '>
            <h5 className='text-4xl font-bold text-dark-hard text-center mb-16'>Testimoniales</h5>

            <div className='relative mb-7 px-5 md:px10 '>
                {
                    [1, 2, 3, 4].map((index, { name, img, description, review }) => (
                        <TestiomonialCard
                            key={index}
                            name={name}
                            img={img}
                            description={description}
                            review={review}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default Testimonials