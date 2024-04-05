import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom'

const Tax = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };

  return (
    <div className="bg-gray-100 p-5 h-[100vh]">
      <div className='flex justify-between'>
        <h3>Tax Rates</h3>
        <Button onClick={handleClick}>Add Custom Tax</Button>
      </div>
      
    </div>
  );
}

export default Tax
