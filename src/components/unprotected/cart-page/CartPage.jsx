import React, { useState, useMemo } from "react";
import { Button, Form, Card, InputGroup, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Hero from "../landing-page/Hero";
import Team from "../landing-page/Team";
import Footer from "../landing-page/Footer";
import "/public/css/cart.css";

// Format numbers in Indian style
const formatIndianNumber = (num) => {
  if (!num && num !== 0) return "";
  const str = num.toString().split(".");
  let lastThree = str[0].slice(-3);
  const otherNumbers = str[0].slice(0, -3);
  if (otherNumbers !== "")
    lastThree = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + lastThree;
  return str[1] ? lastThree + "." + str[1] : lastThree;
};

const CartPage = () => {
  const [rows, setRows] = useState([{ item: "", quantity: "", price: "", priceRaw: "", other: "" }]);
  const [submitted, setSubmitted] = useState(false); // ✅ control error visibility

  const { register, handleSubmit, setValue, reset } = useForm({
    defaultValues: {
      cart: rows,
      name: "",
      number: "",
      email: "",
      Instructions: "",
    },
  });

  // ✅ Handle input change
  const handleChange = (index, field, value) => {
    const updated = [...rows];

    if (field === "price") {
      const numeric = value.replace(/\D/g, "");
      updated[index].priceRaw = numeric;
      updated[index].price = numeric ? formatIndianNumber(numeric) : "";
      setValue(`cart.${index}.price`, updated[index].price);
      setValue(`cart.${index}.priceRaw`, numeric);
    } else if (field === "quantity") {
      updated[index][field] = Math.max(parseInt(value) || 0, 0);
      setValue(`cart.${index}.quantity`, updated[index][field]);
    } else {
      updated[index][field] = value;
      setValue(`cart.${index}.${field}`, value);
    }

    setRows(updated);
  };

  const handleAddRow = () =>
    setRows([...rows, { item: "", quantity: "", price: "", priceRaw: "", other: "" }]);

  const handleRemoveRow = (index) => setRows(rows.filter((_, i) => i !== index));

  const handleQuantityChange = (index, type) => {
    const updated = [...rows];
    const currentQty = parseInt(updated[index].quantity) || 0;
    updated[index].quantity = type === "inc" ? currentQty + 1 : Math.max(currentQty - 1, 0);
    setValue(`cart.${index}.quantity`, updated[index].quantity);
    setRows(updated);
  };

  // ✅ Calculate totals
  const rowTotals = useMemo(
    () => rows.map((r) => (parseFloat(r.priceRaw) || 0) * (parseFloat(r.quantity) || 0)),
    [rows]
  );
  const subTotal = rowTotals.reduce((a, b) => a + b, 0);
  const total = subTotal;

  // ✅ On Submit: show errors only on click
  const onSubmit = (data) => {
    setSubmitted(true);
    const isEmpty = rows.some(
      (r) => !r.item || !r.priceRaw || !r.quantity || !r.other
    );

    if (
      !data.name ||
      !data.number ||
      !data.email ||
      !data.Instructions ||
      isEmpty
    ) {
      return; // show errors but don’t submit
    }

    alert("Form submitted!\n" + JSON.stringify(data, null, 2));
    setRows([{ item: "", quantity: "", price: "", priceRaw: "", other: "" }]);
    reset({
      cart: [{ item: "", quantity: "", price: "", priceRaw: "", other: "" }],
      name: "",
      number: "",
      email: "",
      Instructions: "",
    });
    setSubmitted(false);
  };

  return (
    <div className="index-page">
      <main className="main">
        <Hero />
        <section  className="cart-section py-5" >
          <div className="container">
            {/* Table */}
            <div className="cart-table-wrapper shadow-lg rounded-4 bg-white p-4 mb-5">
              <div className="cart-header border-bottom pb-2 mb-3 d-none d-md-block">
                <div className="row fw-bold text-uppercase small text-dark align-items-center">
                  <div className="col-md-4 text-md-start ps-md-3">Product</div>
                  <div className="col-md-2 text-center">Price</div>
                  <div className="col-md-2 text-center">Quantity</div>
                  <div className="col-md-2 text-center">Total</div>
                  <div className="col-md-2 text-center"></div>
                </div>
              </div>

              {rows.map((row, index) => (
                <div key={index} className="cart-item mb-2 border-bottom fade-sep">
                  <div className="row align-items-center mb-2">
                    {/* Product */}
                    <div className="col-md-4 mb-3 mb-md-0">
                      <Form.Control
                        placeholder="Enter product name"
                        value={row.item}
                        onChange={(e) => handleChange(index, "item", e.target.value)}
                      />
                      {submitted && !row.item && (
                        <small className="text-danger">Product required</small>
                      )}
                    </div>

                    {/* Price */}
                    <div className="col-md-2 text-center mb-3 mb-md-0">
                      {/* ✅ Desktop */}
                      <div className="d-none d-md-block">
                        <InputGroup className="mx-auto w-100">
                          <InputGroup.Text>₹</InputGroup.Text>
                          <Form.Control
                            type="text"
                            placeholder="Price"
                            value={row.price}
                            onChange={(e) => handleChange(index, "price", e.target.value)}
                            style={{
                              textAlign: "center",
                            }}
                          />
                        </InputGroup>
                        {submitted && !row.price && (
                          <small className="text-danger">Price required</small>
                        )}
                      </div>

                      {/* ✅ Mobile / iPad Mini */}
                      <div className="price-wrapper-mobile d-md-none position-relative mx-auto w-100">
                        <span className="price-symbol position-absolute">₹</span>
                        <Form.Control
                          type="text"
                          placeholder="Price"
                          className="text-center ps-4"
                          value={row.price}
                          onChange={(e) => handleChange(index, "price", e.target.value)}
                          style={{
                            textAlign: "center",
                            width: "100%",
                          }}
                        />
                        {submitted && !row.price && (
                          <small className="text-danger d-block mt-1">Price required</small>
                        )}
                      </div>
                    </div>


                    {/* Quantity */}
                    <div className="col-md-2 d-flex flex-column align-items-center justify-content-center mb-3 mb-md-0">
                      <div className="d-flex align-items-center">
                        <Button
                          variant="link"
                          className="p-0 fw-bold fs-5 no-underline"
                          onClick={() => handleQuantityChange(index, "dec")}
                        >
                          −
                        </Button>
                        <Form.Control
                          type="number"
                          placeholder="0"
                          className="text-center no-arrow mx-2"
                          style={{ width: "70px" }}
                          value={row.quantity}
                          onChange={(e) =>
                            handleChange(index, "quantity", e.target.value)
                          }
                        />
                        <Button
                          variant="link"
                          className="p-0 fw-bold fs-5 no-underline"
                          onClick={() => handleQuantityChange(index, "inc")}
                        >
                          +
                        </Button>
                      </div>
                      {submitted && !row.quantity && (
                        <small className="text-danger mt-1">
                          Quantity
                        </small>
                      )}
                    </div>

                    {/* Total */}
                    <div className="col-md-2 text-center fw-semibold mb-3 mb-md-0 d-none d-md-block">
                      ₹{formatIndianNumber(rowTotals[index].toFixed(2))}
                    </div>

                    {/* Add/Remove */}
                    <div className="col-md-2 d-none d-md-flex align-items-center justify-content-center">
                      {index === rows.length - 1 ? (
                        <Button
                          variant="link"
                          className="p-0 add-remove-btn no-underline text-primary"
                          onClick={handleAddRow}
                        >
                          <i className="bi bi-plus-lg fw-bold fs-5"></i>
                        </Button>
                      ) : (
                        <Button
                          variant="link"
                          className="p-0 add-remove-btn no-underline"
                          onClick={() => handleRemoveRow(index)}
                        >
                          <i className="bi bi-x-lg fw-bold fs-5"></i>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Other field */}
                  <div className="mt-2">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter other details..."
                      value={row.other}
                      onChange={(e) => handleChange(index, "other", e.target.value)}
                      className="bg-light"
                    />
                    {submitted && !row.other && (
                      <small className="text-danger">Other details required</small>
                    )}

                    {/* Mobile total */}
                    <div className="text-center mt-3 d-md-none fw-semibold fs-6">
                      Total: ₹{formatIndianNumber(rowTotals[index].toFixed(2))}
                    </div>

                    {/* Mobile Add/Remove */}
                    <div className="text-center mt-2 d-md-none">
                      {index === rows.length - 1 ? (
                        <Button variant="link" className="p-0 add-remove-btn no-underline text-primary" onClick={handleAddRow}>
                          <i className="bi bi-plus-lg fw-bold fs-4"></i>
                        </Button>
                      ) : (
                        <Button variant="link" className="p-0 add-remove-btn no-underline" onClick={() => handleRemoveRow(index)}>
                          <i className="bi bi-x-lg fw-bold fs-4"></i>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Billing + Total */}
            <Form onSubmit={handleSubmit(onSubmit)} className="d-flex justify-content-center">
              <Row className="w-100 justify-content-center">
                <Col lg={8} md={12} sm={12} className="mb-4 d-flex justify-content-center">
                  <Card className="border-0 shadow-lg rounded-4 p-4 bg-white w-100">
                    <h5 className="fw-bold mb-4 text-center">Billing Details</h5>
                    <Row className="mb-3">
                      <Col md={4} className="mb-3 mb-md-0">
                        <Form.Control placeholder="First Name" {...register("name")} />
                        {submitted && <small className="text-danger">Name required</small>}
                      </Col>
                      <Col md={4} className="mb-3 mb-md-0">
                        <Form.Control placeholder="Number" {...register("number")} />
                        {submitted && <small className="text-danger">Number required</small>}
                      </Col>
                      <Col md={4}>
                        <Form.Control placeholder="Email" {...register("email")} />
                        {submitted && <small className="text-danger">Email required</small>}
                      </Col>
                    </Row>
                    <Form.Group className="mb-3">
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Instructions"
                        {...register("Instructions")}
                      />
                      {submitted && (
                        <small className="text-danger">Instructions required</small>
                      )}
                    </Form.Group>
                  </Card>
                </Col>

                {/* Cart Totals */}
                <Col lg={4} md={8} sm={12} className="mb-4 d-flex justify-content-center">
                  <Card className="border-0 shadow-lg rounded-4 p-4 bg-white cart-totals-card w-100">
                    <h5 className="fw-bold mb-4 text-center">Cart Totals</h5>
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">Subtotal</span>
                      <span className="fw-semibold">
                        ₹{formatIndianNumber(subTotal.toFixed(2))}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between border-top pt-2 fw-bold fs-6">
                      <span>Total</span>
                      <span>₹{formatIndianNumber(total.toFixed(2))}</span>
                    </div>
                    <div className="text-center mt-4">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="rounded-pill mt-4 px-5 fw-semibold"
                      >
                        Proceed
                      </Button>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Form>
          </div>
        </section>

        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
