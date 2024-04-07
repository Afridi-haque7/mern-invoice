import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { CirclePlus } from "lucide-react";
import axios from "axios";

const Services = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/tax");
  };

  const [validated, setValidated] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/tax/get");
      setData(response.data);
    } catch (error) {
      console.log("Error fetching data: " + error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    // const [taxData, setTaxData] = useState(null);
    const formData = {
      type: event.target[0].value,
      price: event.target[1].value,
      disType: event.target[2].value,
      disValue: event.target[3].value,
      taxType: '',
      taxRate: '',
    };

    const selectedIndex = event.target[4].selectedIndex;
    const selectedOptionValue = event.target[4][selectedIndex].value;
    const selectedOptionData = JSON.parse(selectedOptionValue);
    formData.taxType = selectedOptionData.name;
    formData.taxRate = selectedOptionData.rate;

    // console.log(formData);

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      await axios
        .post("http://localhost:8000/api/service/post", formData)
        .then((response) => response.data)
        .then((data) => {
          console.log("Success:", data);
          alert("Successfully Data Added!");
          navigate('/');
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log("Error:", error.response.data);
    }

    setValidated(true);
    // if(validated) navigate("/");
  };

  return (
    <div className="bg-gray-100 p-5 lg:p-3 h-[100vh]">
      <h3 className="text-2xl font-bold">Add Service Details</h3>
      <div className="form">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <div className="lg:flex justify-between">
            <Form.Group
              className="mb-3 w-full lg:w-[30%] border-black"
              controlId="formBasicEmail"
            >
              <Form.Label>
                Service Type <span className="text-red-500">&#42;</span>
              </Form.Label>
              <select
                id="servicetype"
                name="serviceType"
                required
                className="rounded-md border bg-white w-full h-10 py-0 pl-2 pr-7 focus:ring-2 focus:ring-inset"
              >
                <option value="Hotel">Hotel</option>
                <option value="Product">Product</option>
                <option value="Other">Other</option>
              </select>
            </Form.Group>

            <Form.Group
              className="mb-3 w-full lg:w-[30%]"
              controlId="formBasicEmail"
            >
              <Form.Label>
                Selling Price <span className="text-red-500">&#42;</span>
              </Form.Label>
              <span className="flex gap-1">
                <Form.Control type="number" placeholder="e.g.1200" min="0" required />
              </span>
            </Form.Group>

            <Form.Group
              className="mb-3 w-full lg:w-[30%]"
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
                <option value="Percentage">Percentage</option>
              </select>
            </Form.Group>
          </div>
          <div className="lg:flex justify-between lg:w-[65%] w-full">
            <Form.Group
              className="mb-3 w-full lg:w-[46%] border-black"
              controlId="formBasicEmail"
            >
              <Form.Label>
                Discount Value <span className="text-red-500">&#42;</span>
              </Form.Label>
              <Form.Control type="number" placeholder="e.g.10" min="0" max="100" required />
            </Form.Group>

            <Form.Group
              className="mb-3 w-full lg:w-[46%]"
              controlId="formBasicEmail"
            >
              <Form.Label>
                Tax <span className="text-red-500">&#42;</span>
              </Form.Label>
              <span className="flex gap-1">
                <select
                  id="tax"
                  name="tax"
                  className="rounded-md border bg-white w-full h-10 py-0 pl-2 pr-7 focus:ring-2 focus:ring-inset"
                  required
                >
                  {data.map((i, index) => (
                    <option
                      key={index}
                      value={JSON.stringify({ name: i.name, rate: i.rate })}
                    >{`${i.name} ${i.rate}%`}</option>
                  ))}
                </select>
                <Button onClick={handleClick}>{<CirclePlus />}</Button>
              </span>
            </Form.Group>
          </div>

          <div className="flex justify-end gap-4 mt-5 border-t py-5">
            <Button
              variant="outline-primary"
              className=""
              type="submit"
              onClick={() => {
                navigate("/");
              }}
            >
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
