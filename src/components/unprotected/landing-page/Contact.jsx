import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/helper/email.helper"
import { TYPE } from "@/helper/constants/status.constants";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    console.log("🚀 ~ onSubmit ~ data:", data)
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // await sendEmail(data, TYPE.SUPPORT);
    reset(); // Reset form after success
    setIsLoading(false)
  };

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>For inquiries, quotations, or bulk order discussions, feel free to connect with us.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {/* Info Section */}
          <div className="col-lg-6">
            <div className="row gy-4">
              <div className="col-lg-12">
                <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
                  <i className="bi bi-geo-alt"></i>
                  <h3>Address</h3>
                  <p>F-323 B, Sector-11, Pratap Vihar, Ghaziabad, Uttar Pradesh – 201009</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="300">
                  <i className="bi bi-telephone"></i>
                  <h3>Call Us</h3>
                  <p>+91 70119 88749</p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="400">
                  <i className="bi bi-envelope"></i>
                  <h3>Email Us</h3>
                  <p>youngsolutions27@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="col-lg-6">
            <form onSubmit={handleSubmit(onSubmit)} className="php-email-form" data-aos="fade-up" data-aos-delay="500">
              <div className="row gy-4">
                {/* Name */}
                <div className="col-md-6">
                  <input
                    type="text"
                    className={`form-control ${errors.userName ? "is-invalid" : ""}`}
                    placeholder="Your Name"
                    {...register("userName", {
                      required: "Name is required",
                      minLength: { value: 3, message: "Name must be at least 3 characters" },
                    })}
                  />
                  {errors.userName && <div className="invalid-feedback">{errors.userName.message}</div>}
                </div>

                {/* Email */}
                <div className="col-md-6">
                  <input
                    type="email"
                    className={`form-control ${errors.userEmail ? "is-invalid" : ""}`}
                    placeholder="Your Email"
                    {...register("userEmail", {
                      required: "Email is required",
                      pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: "Invalid email address" },
                    })}
                  />
                  {errors.userEmail && <div className="invalid-feedback">{errors.userEmail.message}</div>}
                </div>

                {/* Mobile Number */}
                <div className="col-md-6">
                  <input
                    type="text"
                    className={`form-control ${errors.userPhone ? "is-invalid" : ""}`}
                    placeholder="Mobile Number"
                    {...register("userPhone", {
                      required: "Mobile number is required",
                      pattern: { value: /^[0-9]{10}$/, message: "Mobile number must be 10 digits" },
                    })}
                  />
                  {errors.userPhone && <div className="invalid-feedback">{errors.userPhone.message}</div>}
                </div>

                {/* Subject */}
                <div className="col-md-6">
                  <input
                    type="text"
                    className={`form-control ${errors.userSubject ? "is-invalid" : ""}`}
                    placeholder="Subject"
                    {...register("userSubject", {
                      required: "Subject is required",
                      minLength: { value: 3, message: "Subject must be at least 3 characters" },
                    })}
                  />
                  {errors.userSubject && <div className="invalid-feedback">{errors.userSubject.message}</div>}
                </div>

                {/* Message */}
                <div className="col-md-12">
                  <textarea
                    className={`form-control ${errors.userInstructions ? "is-invalid" : ""}`}
                    rows="6"
                    placeholder="Message"
                    {...register("userInstructions", {
                      required: "Message is required",
                      minLength: { value: 10, message: "Message must be at least 10 characters" },
                    })}
                  ></textarea>
                  {errors.userInstructions && <div className="invalid-feedback">{errors.userInstructions.message}</div>}
                </div>

                {/* Status & Submit */}
                <div className="col-md-12 text-center">
                  {isSubmitting && <div className="loading">Loading</div>}
                  <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

