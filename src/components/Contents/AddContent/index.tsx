import React from 'react'
import { useParams } from 'react-router-dom';

const AddContent = () => {
  const {id, type} = useParams() as {id: string, type: string}
  console.log('123', id, type)
  return (
    <div>index</div>
  )
}

export default AddContent
