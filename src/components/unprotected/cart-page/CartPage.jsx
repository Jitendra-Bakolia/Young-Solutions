import React, { useState, useMemo } from "react";
import { Button, Form, Card, InputGroup, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Hero from "../landing-page/Hero";
import Team from "../landing-page/Team";
import Footer from "../landing-page/Footer";
import "/public/css/cart.css";

const formatIndianNumber = (num) => {
  if (!num) return "";
  const str = num.toString().replace(/\D/g, "");
  let lastThree = str.slice(-3);
  const otherNumbers = str.slice(0, -3);
  if (otherNumbers !== "")
    lastThree = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + lastThree;
  return lastThree;
};

const CartPage = () => {
  const [rows, setRows] = useState([{ item: "", quantity: 0, price: "", other: "" }]);

  const handleChange = (index, field, value) => {
    const updated = [...rows];
    if (field === "price") {
      value = value.replace(/\D/g, "");
      updated[index][field] = value;
    } else if (field === "quantity") {
      updated[index][field] = Math.max(parseInt(value) || 0, 0);
    } else {
      updated[index][field] = value;
    }
    setRows(updated);
  };

  const handleAddRow = () => setRows([...rows, { item: "", quantity: 0, price: "", other: "" }]);
  const handleRemoveRow = (index) => setRows(rows.filter((_, i) => i !== index));

  const handleQuantityChange = (index, type) => {
    const updated = [...rows];
    const currentQty = parseInt(updated[index].quantity) || 0;
    updated[index].quantity = type === "inc" ? currentQty + 1 : Math.max(currentQty - 1, 0);
    setRows(updated);
  };

  const rowTotals = useMemo(
    () => rows.map((r) => (parseFloat(r.quantity) || 0) * (parseFloat(r.price) || 0)),
    [rows]
  );

  const subTotal = rowTotals.reduce((a, b) => a + b, 0);
  const total = subTotal;

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    alert("Form submitted!\n" + JSON.stringify({ billing: data, cart: rows }, null, 2));
  };

  return (
    <div className="index-page">
      <main className="main">
        <Hero />

        <section className="cart-section py-5">
          <div className="container">
            <div className="cart-table-wrapper shadow-sm rounded-4 bg-white p-4 mb-5">
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
                <div key={index} className="cart-item mb-4 border-bottom fade-sep">
                  <div className="row align-items-center mb-2">
                    {/* Product */}
                    <div className="col-md-4 mb-3 mb-md-0">
                      <Form.Control
                        placeholder="Enter product name"
                        value={row.item}
                        onChange={(e) => handleChange(index, "item", e.target.value)}
                      />
                    </div>

                    {/* Price */}
                    <div className="col-md-2 text-center mb-3 mb-md-0">
                      <div className="price-wrapper d-none d-md-block">
                        <InputGroup className="mx-auto w-100">
                          <InputGroup.Text>₹</InputGroup.Text>
                          <Form.Control
                            type="text"
                            value={formatIndianNumber(row.price)}
                            onChange={(e) => handleChange(index, "price", e.target.value)}
                            className="text-center"
                          />
                        </InputGroup>
                      </div>

                      <div className="price-wrapper-mobile d-md-none position-relative mx-auto w-100">
                        <Form.Control
                          type="text"
                          className="text-center ps-4"
                          placeholder="Price"
                          value={formatIndianNumber(row.price)}
                          onChange={(e) => handleChange(index, "price", e.target.value)}
                        />
                        <span className="price-symbol position-absolute">₹</span>
                      </div>
                    </div>

                    {/* Quantity */}
                    <div className="col-md-2 d-flex align-items-center justify-content-center mb-3 mb-md-0">
                      <Button variant="link" className="p-0 fw-bold fs-5 no-underline" onClick={() => handleQuantityChange(index, "dec")}>−</Button>
                      <Form.Control
                        type="number"
                        className="text-center no-arrow mx-2"
                        style={{ width: "70px" }}
                        value={row.quantity}
                        onChange={(e) => handleChange(index, "quantity", e.target.value)}
                      />
                      <Button variant="link" className="p-0 fw-bold fs-5 no-underline" onClick={() => handleQuantityChange(index, "inc")}>+</Button>
                    </div>

                    {/* Total */}
                    <div className="col-md-2 text-center fw-semibold mb-3 mb-md-0 d-none d-md-block">
                      ₹{formatIndianNumber(rowTotals[index].toFixed(2))}
                    </div>

                    {/* Add/Remove */}
                    <div className="col-md-2 d-none d-md-flex align-items-center justify-content-center">
                      {index === rows.length - 1 ? (
                        <Button variant="link" className="p-0 add-remove-btn no-underline" onClick={handleAddRow}>
                          <i className="bi bi-plus-lg fw-bold text-dark fs-5"></i>
                        </Button>
                      ) : (
                        <Button variant="link" className="p-0 add-remove-btn no-underline" onClick={() => handleRemoveRow(index)}>
                          <i className="bi bi-x-lg fw-bold text-dark fs-5"></i>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Other textarea + Mobile total + Mobile add/remove */}
                  <div className="mt-2">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter other details or customization request..."
                      value={row.other}
                      onChange={(e) => handleChange(index, "other", e.target.value)}
                      className="bg-light"
                    />

                    {/* Mobile total */}
                    <div className="text-center mt-3 d-md-none fw-semibold fs-6">
                      Total: ₹{formatIndianNumber(rowTotals[index].toFixed(2))}
                    </div>

                    {/* Mobile Add/Remove */}
                    <div className="text-center mt-2 d-md-none">
                      {index === rows.length - 1 ? (
                        <Button variant="link" className="p-0 add-remove-btn no-underline" onClick={handleAddRow}>
                          <i className="bi bi-plus-lg fw-bold text-dark fs-4"></i>
                        </Button>
                      ) : (
                        <Button variant="link" className="p-0 add-remove-btn no-underline" onClick={() => handleRemoveRow(index)}>
                          <i className="bi bi-x-lg fw-bold text-dark fs-4"></i>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Billing + Totals */}
            <Form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-wrap">
              <Row className="w-100">
                <Col lg={8} md={12} className="mb-4">
                  <Card className="border-0 shadow-sm rounded-4 p-4 bg-white h-100">
                    <h5 className="fw-bold mb-4 text-center">Billing Details</h5>

                    <Row className="mb-3">
                      <Col md={4} className="mb-3 mb-md-0">
                        <Form.Control {...register("name", { required: true })} placeholder="First Name" />
                        {errors.name && <small className="text-danger">Required</small>}
                      </Col>
                      <Col md={4} className="mb-3 mb-md-0">
                        <Form.Control {...register("number", { required: true, pattern: /^[0-9]{10}$/ })} placeholder="Number" />
                        {errors.number && <small className="text-danger">10 digits required</small>}
                      </Col>
                      <Col md={4}>
                        <Form.Control {...register("email", { required: true, pattern: /^\S+@\S+$/i })} placeholder="Email" />
                        {errors.email && <small className="text-danger">Valid email required</small>}
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Control {...register("Instructions", { required: true })} as="textarea" rows={3} placeholder="Instructions" />
                      {errors.Instructions && <small className="text-danger">Required</small>}
                    </Form.Group>
                  </Card>
                </Col>

                <Col lg={4} md={12} className="mb-4">
                  <Card className="border-0 shadow-sm rounded-4 p-4 bg-white cart-totals-card">
                    <h5 className="fw-bold mb-4 text-center">Cart Totals</h5>
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">Subtotal</span>
                      <span className="fw-semibold">₹{formatIndianNumber(subTotal.toFixed(2))}</span>
                    </div>
                    <div className="d-flex justify-content-between border-top pt-2 fw-bold fs-6">
                      <span>Total</span>
                      <span>₹{formatIndianNumber(total.toFixed(2))}</span>
                    </div>
                    <div className="text-center mt-4">
                      <Button type="submit" variant="primary" size="lg" className="rounded-pill mt-4 px-5 fw-semibold">
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
