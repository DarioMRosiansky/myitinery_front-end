import React, { useEffect, useState } from "react";
import DetailsCard from "./DetailsCard";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCitiesIdAction } from "../redux/actions/cityActions";

export function DetailsComponent() {
  let { id } = useParams()
  const dispatch = useDispatch();
  const city = useSelector(store => store.city.city)
  useEffect(() => {
    if (id != undefined) dispatch(getCitiesIdAction(id))
  }, [])



  return (
    <div className="min-h-[70vh] w-100 z-0">
      <DetailsCard detailsCity={city} />
    </div>

  );
}