import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import TaxTable from "../components/TaxTable";
import AddTaxModal from "../components/AddTaxModal";

const Tax = () => {
  // Controls the Modal toogling for Adding new Tax
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="p-3 md:p-10 h-[100vh]">
      <div className="flex justify-between">
        <h3>Tax Rates</h3>
        <Button onClick={handleOpen}>Add Tax</Button>
      </div>
      <TaxTable className="pl-2" />
      <AddTaxModal state={open} handler={handleClose} />
    </div>
  );
};

export default Tax;
