import React from "react";
import { NavLink as Anchor } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter
} from "@material-tailwind/react";

export function HorizontalCard({ cityName, photo, country, description, id }) { // Not horizontal xD

  return (
    <Card className="mt-6 w-[90%] md:w-5/12 lg:w-3/12 my-5 mx-2 overflow-hidden flex flex-column justify-between">
      <CardHeader color="blue-gray" className="relative h-56 mt-0 mx-0 rounded-none">
        <img
          src={photo}
          alt="card-image"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="Flex flex-column justify-between grow" >
        <Typography variant="h6" color="gray" className="mb-4 uppercase">
          {country}
        </Typography>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {cityName}
        </Typography>
        <Typography>
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Anchor to={`/details/${id}`}><Button>Details</Button></Anchor>
      </CardFooter>
    </Card>
  );
}
