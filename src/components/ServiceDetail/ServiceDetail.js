import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const ExactItem = data.filter((td) => td._id === id);

  return (
    <div>
      <h1>This is service Detail Page {id}</h1>
      <h3>Name: {ExactItem[0]?.name}</h3>
      <h3>Name: {ExactItem[0]?.price}</h3>
      <h3>Name: {ExactItem[0]?.description}</h3>
    </div>
  );
};

export default ServiceDetail;
