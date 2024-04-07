import React, {useState, useEffect} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ServiceTable from "../components/ServiceTable";
import { useNavigate } from "react-router-dom";
import { CirclePlus } from "lucide-react";
import axios from "axios";



const Invoice = () => {
  // Using useNavigate() hook to navigate to different pages
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/services');
  }

  // Using useState() hook to store data from database array after fetching
  const [data, setData] = useState([]);

  // Fetching data from service data model using axios.get() method, it is an asynchronous function
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://mern-invoice-zc6k.onrender.com/api/service/get"
      );
      setData(response.data);
    } catch (error) {
      console.log("Error fetching data: " + error.message);
    }
  };

  // Using useEffect() hook to call fetchData() function whenever the data array is changed
  useEffect(() => {
    fetchData();
  }, [data]);

  // For form validation purpose
  const [validated, setValidated] = useState(false);

  // Checking Form Validation when user submit the form
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };

  // For selecting the current index of data[] upon selection 
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Function for handling index selection
  const handleSelectChange = (event) => {
    const index = event.target.value;
    setSelectedIndex(index);
  };

  return (
    <div className="p-5 lg:p-3  bg-gray-100">
      <h3 className="text-2xl font-bold">Add Invoice</h3>
      <div className="form">
      {/* Main Form Component, Used Bootstrap Form for convenience */}
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <div className="lg:flex justify-between">
            <Form.Group
              className="mb-3 w-full lg:w-[30%] border-black"
            >
              <Form.Label>Invoice Number</Form.Label>
              <Form.Control type="text" placeholder="HHINV001238" />
            </Form.Group>

            <Form.Group
              className="mb-3 w-full lg:w-[30%]"
            >
              <Form.Label>
                Customer Name <span className="text-red-500">&#42;</span>
              </Form.Label>
              <span className="flex gap-1">
                <Form.Control type="text" placeholder="Ravi" required />
                <Button>{<CirclePlus />}</Button>
              </span>
            </Form.Group>

            <Form.Group
              className="mb-3 w-full lg:w-[30%]"
            >
              <Form.Label>
                Invoice Date <span className="text-red-500">&#42;</span>
              </Form.Label>
              <Form.Control type="date" placeholder="Select a date" required />
            </Form.Group>
          </div>

          <div className="lg:flex justify-between">
            <Form.Group
              className="mb-3 w-full lg:w-[30%]"
            >
              <Form.Label>
                Due Date <span className="text-red-500">&#42;</span>
              </Form.Label>
              <Form.Control type="date" placeholder="Select a date" required />
            </Form.Group>

            <Form.Group
              className="mb-3 w-full lg:w-[30%]"
            >
              <Form.Label>Reference Number</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>

            <Form.Group
              className="mb-3 w-full lg:w-[30%]"
            >
              <Form.Label>
                Payment Method <span className="text-red-500">&#42;</span>
              </Form.Label>
              <br />
              <select
                id="payment"
                name="payment"
                className="rounded-md border bg-white w-full h-10 py-0 pl-2 pr-7 focus:ring-2 focus:ring-inset"
                required
              >
                <option value="cash">Cash</option>
                <option value="card">Credit Card</option>
                <option value="upi">UPI</option>
              </select>
            </Form.Group>
          </div>
          <div className="flex">
            <Form.Group className="mb-5 w-full" >
              <Form.Label>
                Services <span className="text-red-500">&#42;</span>
              </Form.Label>
              <span className="flex gap-1">
                <select
                  id="service-type"
                  name="serviceType"
                  required
                  onChange={handleSelectChange}
                  className="rounded-md border bg-white w-full h-10 py-0 px-2 pl-2 pr-7 focus:ring-2 focus:ring-inset"
                >
                  {/* Mapping data from data[] array to show service available */}
                  {data.map((i, index) => (
                    <option key={index} value={index}>
                      {i.type}
                    </option>
                  ))}
                </select>
                <Button onClick={handleClick}>{<CirclePlus />}</Button>
              </span>
            </Form.Group>
          </div>
          {/* Service table component, sending index as props */}
          <ServiceTable ind={selectedIndex} />

          {/* Form submitting buttons */}
          <div className="flex justify-end gap-4">
            <Button variant="outline-primary" type="submit">
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

export default Invoice;
