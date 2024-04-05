import React from 'react'

const Billing = () => {
  return (
    <div>
      <div className="border rounded-lg p-4 md:w-[50%] my-3">
        <p className="flex justify-between">
          <span className="text-gray-500 text-md font-semibold">Amount</span>
          <span className="text-gray-700 text-md font-semibold">$1200.00</span>
        </p>
        <p className="flex justify-between">
          <span className="text-gray-500 text-md font-semibold">Discount</span>
          <span className="text-gray-700 text-md font-semibold">$120.00</span>
        </p>
        <p className="flex justify-between">
          <span className="text-gray-500 text-md font-semibold">Tax</span>
          <span className="text-gray-700 text-md font-semibold">$194.40</span>
        </p>
        <p className="flex justify-between">
          <span className="text-gray-500 text-md font-semibold">Round off</span>
          <span className="text-gray-700 text-md font-semibold">$0.00</span>
        </p>
        <p className="flex justify-between">
          <span className="text-gray-800 text-lg font-semibold">
            Total Amount
          </span>
          <span className="text-gray-800 text-lg font-semibold">$1274.40</span>
        </p>
      </div>
    </div>
  );
}

export default Billing
