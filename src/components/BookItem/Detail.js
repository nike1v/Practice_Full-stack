import React from 'react';
import { useParams } from 'react-router-dom';
import './detail.css';

const Detail = () => {

  const { id } = useParams();

  return (
    <main className='detail'>
      123 {id}
    </main>
  )
}

export default Detail;