import React from 'react'

function Testimonial() {

    const testimonials = [
        {
            "id": 1,
            "name": "John Doe",
            "text": `[name] is my go-to [expertise]. Whenever I need [add description] I make sure to reach out to her, as she is the best at it. She has been collaborating with my team for a couple of years, and on top of being a great [role], she is also an easy-going person. 
                    I definitely recommend [name] to any job.`
        },
        {
            "id": 2,
            "name": "Amber Heard",
            "text": `I'm amazed by [person]'s ability to [add a skill], a skill he uses to his benefit when making presentations to clients and colleagues.
                    He is a highly focused person as well as analytical and can add to any team he is a part of. 
                    His energy to make things happen was contagious and it helped us achieve great goals. One of the best analysts we had for sure.`
        },
        {
            "id": 3,
            "name": "Johny Depp",
            "text": `[name] is such a nice person to have around. He is not only a great colleague but also a very good [expertise] with over [XX] years of valuable experience.
                    He is very creative, hands-on, and organized. He is the guy to go to when you need help with [add a skill] or [add another skill] and is always open to discuss ideas and suggestions.
                    I learned a lot about leadership from [name], and it was a pleasure to be managed by him for [XX] years.`
        }
    ];

    return (
        <div className='testimonial-section d-flex flex-column my-4' id='testimonial'>
            <span className='heading text-center'>Testimonials</span>
            <span className='sub-heading text-center'>What my clients say about me?</span>
            <div className='row mx-5 my-4'>
                {testimonials.map(testimonial => {
                    return (
                        <div className='col-lg-4 col-md-6 col-sm-12 my-3' key={testimonial.id}>
                            <div className='card shadow testimonial-card d-flex flex-column'>
                                <span className='description'>{testimonial.text}</span>
                                <span className='stars'>⭐⭐⭐⭐⭐</span>
                                <span className='name'>{testimonial.name}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Testimonial
