import AcademicFieldItem from "./AcademicFieldItem";
import {Stack} from '@mui/material';

function AcademicFields() {
    const fields = [
        {
            name: "Stream/Field of Study",
            field: [
                {
                    name: "Humanities",
                    link: "/logos/humanities.png"
                },
                {
                    name: "Science",
                    link: "/logos/science.png"
                },
                {
                    name: "Commerce",
                    link: "/logos/commerce.png"
                },
                {
                    name: "Information Technology",
                    link: "/logos/informationTechnology.png"
                }
            ]
        },
        {
            name: "Subject Domain",
            field: [
                {
                    name: "Philosophy & Psychology",
                    link: "/logos/philosophy.png"
                },
                {
                    name: "Fine Arts",
                    link: "/logos/fineArts.png"
                },
                {
                    name: "Geography",
                    link: "/logos/geography.png"
                },
                {
                    name: "Social Science",
                    link: "/logos/socialScience.png"
                }
            ]
        },
        {
            name: "Prepare for Exams",
            field: [
                {
                    name: "GATE",
                    link: "/logos/gate.png"
                },
                {
                    name: "IIT JEE",
                    link: "/logos/IIT-JEE.png"
                },
                {
                    name: "NEET",
                    link: "/logos/NEET.png"
                },
                {
                    name: "CBSE",
                    link: "/logos/CBSE.png"
                }
            ]
        }
    ]

    return (
        <div>
            {fields.map(item => {
                return (
                    <div>
                        <p>{item.name}</p>
                        <Stack direction = "row">
                        {item.field.map(data => {
                            return(
                                <AcademicFieldItem text = {data.name} link = {data.link}/>
                            )
                        })}
                        </Stack>
                    </div>
                )  
            })}
        </div>
    )

}

export default AcademicFields;