import React, { useState } from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";

const ItineraryCard = ({ itinerary }) => {

  let showPrice = []
  for (let i = 0; i < itinerary.price; i++) {
    showPrice.push("💵")
  }
  const [showActivities,setShowActivities]=useState(false)
  function handleClick (){
    setShowActivities(!showActivities)
  }
  return (
    <Card className="w-full max-w-[26rem] shadow-lg">
      <CardHeader floated={false} color="blue-gray" className='h-3/6'>
        <img
          src={itinerary.img}
          alt="itinerary img"
          className='object-cover h-[100%] w-[100%]'
          
        />
      </CardHeader>
      <CardBody>
        
          <Typography variant="h5" color="blue-gray" className="font-medium">
            {itinerary.name}
          </Typography>
          <Tooltip content="Price">
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
              {showPrice}
            </Typography>
          </Tooltip>
        <Typography
          color="blue-gray"
          className="flex items-center gap-1.5 font-normal"
        >
          Author: <img src={itinerary.usrImg} className='h-10 w-10' /> {itinerary.usrName}
        </Typography>
        <Typography
          color="blue-gray"
          className="flex items-center gap-1.5 font-normal justify-between"
        >
          <span>Duration: {itinerary.duration}</span> <span>👍 {itinerary.likes}</span>
        </Typography>
        <Typography
          color="blue"
          className="flex items-center wrap gap-1.5 font-normal cursor-pointer"
        >
          {itinerary.hashtags.map((hashtag)=>`${hashtag} `)}
        </Typography>
        <Button size="lg" className="mt-10" fullWidth={true} onClick={handleClick}>
          View more
        </Button>
        {showActivities&&<><Typography
          color="blue-gray"
          className="flex items-center gap-1.5  text-4xl mt-5 mx-10"
        >
          Activities:
        </Typography><Typography
          color="blue-gray"
          className="flex items-center gap-1.5  text-6xl mt-5 mx-auto"
        >
            Under construction
          </Typography></>}
      </CardBody>
    </Card>
  )
}

export default ItineraryCard