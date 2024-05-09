import React from 'react'
import { useParams } from 'react-router-dom';

export const Signup = () => {
  const param = useParams();
  return (
    <div>Signup {param?.name}</div>
  )
}
