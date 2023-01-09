import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function TestParent() {
  const [count, setCount] = useState(0);
  return <Outlet context={[count, setCount]} />;
}