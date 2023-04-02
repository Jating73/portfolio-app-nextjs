import React from 'react'
import { Card } from 'react-bootstrap';

function ProjectItem({ project }) {
    return (
        <Card>
            <a href={project.url} target="_blank" rel="noreferrer">
                <Card.Img variant="top" src={project.screenshot_url} height="200px" style={{ objectFit: "cover" }} />
            </a>
        </Card>
    )
}

export default ProjectItem
