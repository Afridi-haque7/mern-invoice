import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom'
import TaxTable from '../components/TaxTable';

const Tax = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
    };

  return (
    <div className="p-3 md:p-10 h-[100vh]">
      <div className="flex justify-between">
        <h3>Tax Rates</h3>
        <Button onClick={handleClick}>Add Custom Tax</Button>
      </div>
      <TaxTable className="pl-2" />
    </div>
  );
}

export default Tax
