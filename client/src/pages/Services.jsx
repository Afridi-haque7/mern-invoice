import React,{useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { CirclePlus } from "lucide-react";


const Services = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/tax');
  }
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }

      setValidated(true);
    };


  return (
    <div className="bg-gray-100 p-3 h-[100vh]">
      <h3 className="text-2xl font-bold">Add Service Details</h3>
      <div className="form">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <div className="md:flex justify-between">
            <Form.Group
              className="mb-3 w-full md:w-[30%] border-black"
              controlId="formBasicEmail"
            >
              <Form.Label>
                Service Type <span className="text-red-500">&#42;</span>
              </Form.Label>
              <select
                id="servicetype"
                name="currency"
                required
                className="rounded-md border bg-white w-full h-10 py-0 pl-2 pr-7 focus:ring-2 focus:ring-inset"
              >
                <option value="cash">Hotel</option>
                <option value="card">Product</option>
              </select>
            </Form.Group>

            <Form.Group
              className="mb-3 w-full md:w-[30%]"
              controlId="formBasicEmail"
            >
              <Form.Label>
                Selling Price <span className="text-red-500">&#42;</span>
              </Form.Label>
              <span className="flex gap-1">
                <Form.Control type="number" placeholder="1200" required />
              </span>
            </Form.Group>

            <Form.Group
              className="mb-3 w-full md:w-[30%]"
              controlId="formBasicEmail"
            >
              <Form.Label>
                Discount Type <span className="text-red-500">&#42;</span>
              </Form.Label>
              <select
                id="discount"
                name="discount"
                required
                className="rounded-md border bg-white w-full h-10 py-0 pl-2 pr-7 focus:ring-2 focus:ring-inset"
              >
                <option value="cash">Percentage</option>
                <option value="card">Percentile</option>
                <option value="upi">Amount</option>
              </select>
            </Form.Group>
          </div>
          <div className="md:flex justify-between md:w-[65%] w-full">
            <Form.Group
              className="mb-3 w-full md:w-[46%] border-black"
              controlId="formBasicEmail"
            >
              <Form.Label>
                Discount Value <span className="text-red-500">&#42;</span>
              </Form.Label>
              <Form.Control type="number" placeholder="10" required />
            </Form.Group>

            <Form.Group
              className="mb-3 w-full md:w-[46%]"
              controlId="formBasicEmail"
            >
              <Form.Label>
                Tax <span className="text-red-500">&#42;</span>
              </Form.Label>
              <span className="flex gap-1">
                <select
                  id="discount"
                  name="discount"
                  className="rounded-md border bg-white w-full h-10 py-0 pl-2 pr-7 focus:ring-2 focus:ring-inset"
                  required
                >
                  <option value="cash">GST (18%)</option>
                  <option value="card">ServiceChrg+GST (18%)</option>
                  <option value="upi">GST (12%)</option>
                  <option value="card">ServiceChrg+GST (5%)</option>
                </select>
                <Button onClick={handleClick}>{<CirclePlus />}</Button>
              </span>
            </Form.Group>
          </div>

          <div className="flex justify-end gap-4 mt-5 border-t py-5">
            <Button variant="outline-primary" className="border" type="submit">
              Cancel
            </Button>
            <Button variant="primary" className="w-20" type="submit">
              Save
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Services;
