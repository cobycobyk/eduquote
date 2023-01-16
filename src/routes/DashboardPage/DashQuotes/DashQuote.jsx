import React, {useState} from "react"
import { useLocation, useNavigate } from "react-router-dom";

export default function DashQuote() {
  const location = useLocation();
  const quote = location.state?.data;
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(quote)
    navigate(`/dashboard/quotes/${quote.id}/edit`, {
      state: { data: quote },
    });
  }

  return (
    <div>
      <div>Quote information</div>
      <div>{quote.salesperson}</div>
      <button onClick={handleClick}>Edit</button>
    </div>
  )
}