import React from 'react'

function Volunteer({ volunteers }) {
    return (
        volunteers.map(volunteer => {
            return (
                <div className='work-section my-4' key={volunteer.id}>
                    <div className='d-flex flex-column '>
                        <div className='d-flex flex-row justify-content-between'>
                            <span className='company-name'>{volunteer.organisation}</span>
                            <span className='year-passed'>{volunteer.start_month} {volunteer.start_year} - {volunteer.end_month} {volunteer.end_year}</span>
                        </div>
                    </div>
                    <div className='d-flex flex-column'>
                        <span className='position'>{volunteer.volunteering_job}</span>
                        <span className='description'>
                            <ul>
                                {volunteer.descriptions.map(description => {
                                    return <li key={description}>{description}</li>
                                })}
                            </ul>
                        </span>
                    </div>
                </div>
            )
        })
    )
}

export default Volunteer;