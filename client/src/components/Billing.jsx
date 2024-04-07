import React from 'react'

const Billing = (props) => {
  const { amount, discount, tax, total } = props.data;

  return (
    <div>
      <div className="border rounded-lg p-4 md:w-[50%] my-3">
        <p className="flex justify-between">
          <span className="text-gray-500 text-md font-semibold">Amount</span>
          <span className="text-gray-700 text-md font-semibold">
            &#x20b9;{amount.toFixed(2)}
          </span>
        </p>
        <p className="flex justify-between">
          <span className="text-gray-500 text-md font-semibold">Discount</span>
          <span className="text-gray-700 text-md font-semibold">
            &#x20b9;{discount.toFixed(2)}
          </span>
        </p>
        <p className="flex justify-between">
          <span className="text-gray-500 text-md font-semibold">Tax</span>
          <span className="text-gray-700 text-md font-semibold">
            &#x20b9;{tax.toFixed(2)}
          </span>
        </p>
        
        <p className="flex justify-between">
          <span className="text-gray-800 text-lg font-semibold">
            Total Amount
          </span>
          <span className="text-gray-800 text-lg font-semibold">
            &#x20b9;{total.toFixed(2)}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Billing
