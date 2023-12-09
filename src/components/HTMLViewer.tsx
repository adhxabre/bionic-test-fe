import React from "react"

interface DescriptionProps {
    html: string;
}

const Description: React.FC<DescriptionProps> = ({ html }) => {
    return (
        <div dangerouslySetInnerHTML={{ __html: html }} />
    )
}

export default Description;