import React from 'react'
import { Link as Anchor } from 'react-router-dom'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import Itineraries from './Itineraries';
const initialCity = {
    photo: "",
    country: "",
    city: "",
    description: "",
    foundation: "",
    population: "",
    featuredLocation: "",
    _id: 0,
}

const DetailsCard = ({ detailsCity = initialCity }) => {
    return (
        <Card className="my-10 w-4/5 mx-auto overflow-hidden">
            <CardHeader color="blue-gray" className="h-2/5 mt-0 mx-0 rounded-none ">
                <img
                    src={detailsCity.photo}
                    alt="card-image"
                    className='object-cover h-full w-full max-h-[500px]'
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h6" color="gray" className="mb-4 uppercase">
                    {detailsCity.country}
                </Typography>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    {detailsCity.city}
                </Typography>
                <Typography className="mb-2">
                    {detailsCity.description}
                </Typography >
                <Typography className="mb-2" >
                    Foundation: <span className='font-bold text-black'>{detailsCity.foundation}</span>
                </Typography>
                <Typography className="mb-2" >
                    Population: <span className='font-bold text-black'>{detailsCity.population}</span>
                </Typography>
                <Typography className="mb-4">
                    Featured Location: <span className='font-bold text-black'>{detailsCity.featuredLocation}</span>
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Anchor to="/cities"><Button>Back to cities</Button></Anchor>
            </CardFooter>
            <Itineraries idCity={detailsCity._id} />
        </Card>
    )
}

export default DetailsCard