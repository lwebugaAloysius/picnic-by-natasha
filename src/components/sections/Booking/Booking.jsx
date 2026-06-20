import { useState, useRef, useEffect } from "react";

import { useIsInView } from "../../../hooks/useIsInView";
import { useRotate } from "../../../hooks/useRotate";

import Title from "../../ui/Title/Title";
import Button from "../../ui/Button/Button";

import foodMat4 from "/images/mat-food-4.jpg";

import styles from "./Booking.module.css";

export default function Booking() {
  const rotateRef = useRotate();
  const [isInViewRef, isVisible] = useIsInView(0.4);

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    itemToBring: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    itemToBring: "",
  });

  const [submissionStatus, setSubmissionStatus] = useState({
    type: "",
    msg: "",
  });

  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const itemToBringRef = useRef(null);

  function handleChange(e) {
    let { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  }

  function isEmailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function isValidPhone(value) {
    return /^0\d{9}$/.test(value);
  }

  function isFormDataValid(formData) {
    if (!formData.fullName) {
      fullNameRef.current.focus();

      setErrors((prevErrors) => ({
        ...prevErrors,
        fullName: "Full Name can not be empty",
      }));
      return false;
    }
    if (!formData.email) {
      emailRef.current.focus();

      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email can not be empty",
      }));
      return false;
    }
    if (!formData.phoneNumber) {
      phoneNumberRef.current.focus();

      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Phone Number can not be empty",
      }));
      return false;
    }
    if (!formData.itemToBring) {
      itemToBringRef.current.focus();

      setErrors((prevErrors) => ({
        ...prevErrors,
        itemToBring: "Please bring Something",
      }));
      return false;
    }

    if (!isEmailValid(formData.email)) {
      emailRef.current.focus();

      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please provide a valid Email",
      }));
      return false;
    }

    if (!isValidPhone(formData.phoneNumber)) {
      phoneNumberRef.current.focus();

      setErrors((prevErrors) => ({
        ...prevErrors,
        phoneNumber: "Please provide a valid Phone Number",
      }));
      return false;
    }

    return true;
  }

  function formReset() {
    setErrors({
      fullName: "",
      email: "",
      phoneNumber: "",
      itemToBring: "",
    });
    setForm({
      fullName: "",
      email: "",
      phoneNumber: "",
      itemToBring: "",
    });
  }

  async function sendToFormspree(finalForm) {
    const response = await fetch("https://formspree.io/f/mvzneqrg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalForm),
    });

    return response.ok;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (isFormDataValid(form)) {
      try {
        const responseStatus = sendToFormspree(form);

        if (responseStatus) {
          setSubmissionStatus({
            type: "success",
            msg: `You're spot is secured`,
          });
          formReset();
        } else {
          setSubmissionStatus({
            type: "error",
            msg: `Something went wrong! re-try form`,
          });
        }
      } catch (error) {
        setSubmissionStatus({
          type: "error",
          msg: `an error ocurred: ${error}`,
        });
      }
    }
  }

  return (
    <section
      id="booking"
      ref={isInViewRef}
      className={`${styles["booking-section"]} ${isVisible ? "fadeUp-animation" : ""}`}
      style={{
        backgroundImage: `url(${foodMat4})`,
      }}
    >
      <div
        ref={rotateRef}
        className={`${styles["booking-text-container"]} rotate`}
      >
        <Title size="5rem" weight={900} color="white" lineHeight="4.5rem">
          <span className={styles["booking-title"]}>
            A Moment worth <span className={styles["break"]}>Having</span>
          </span>
        </Title>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
          reiciendis numquam aspernatur veniam cupiditate magnam. Quaerat
          repellat excepturi minus nostrum cum iusto aliquid illum. Sunt
          recusandae dicta ut dolorum soluta.
        </p>
      </div>

      <form className={styles["booking-form"]} onSubmit={handleSubmit}>
        <div className={styles["booking-input-group"]}>
          <label htmlFor="fullName" className={styles["booking-input-label"]}>
            <Title color="white" size="1.5rem" weight={900}>
              Full Name
            </Title>
          </label>
          <input
            id="fullName"
            ref={fullNameRef}
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            type="text"
            className={styles["booking-input"]}
            placeholder="Natasha Passy"
          />
          {errors.fullName && (
            <p className={styles["error-msg"]}>{errors.fullName}</p>
          )}
        </div>
        <div className={styles["booking-input-group"]}>
          <label htmlFor="email" className={styles["booking-input-label"]}>
            <Title color="white" size="1.5rem" weight={900}>
              Email
            </Title>
          </label>
          <input
            id="email"
            ref={emailRef}
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            className={styles["booking-input"]}
            placeholder="natashapassy@gmail.com"
          />
          {errors.email && (
            <p className={styles["error-msg"]}>{errors.email}</p>
          )}
        </div>
        <div className={styles["booking-input-group"]}>
          <label
            htmlFor="phoneNumber"
            className={styles["booking-input-label"]}
          >
            <Title color="white" size="1.5rem" weight={900}>
              Phone Number
            </Title>
          </label>
          <input
            id="phoneNumber"
            ref={phoneNumberRef}
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleChange}
            type="tel"
            className={styles["booking-input"]}
            placeholder="0702160372"
          />
          {errors.phoneNumber && (
            <p className={styles["error-msg"]}>{errors.phoneNumber}</p>
          )}
        </div>
        <div className={styles["booking-input-group"]}>
          <label htmlFor="item" className={styles["booking-input-label"]}>
            <Title color="white" size="1.5rem" weight={900}>
              Item To Bring
            </Title>
          </label>
          <input
            id="item"
            ref={itemToBringRef}
            name="itemToBring"
            value={form.itemToBring}
            onChange={handleChange}
            type="text"
            className={styles["booking-input"]}
            placeholder="4 Chocolate Bars, 3 Pringels Cans"
          />
          {errors.itemToBring && (
            <p className={styles["error-msg"]}>{errors.itemToBring}</p>
          )}
        </div>
        <div
          className={`${styles["booking-input-group"]} ${styles["booking-input-group-btn"]}`}
        >
          <Button type="filled" size="sm">
            Submit
          </Button>
        </div>
        {submissionStatus.type && (
          <div
            className={`${styles["booking-input-group"]} ${styles["final-form-msg"]} 
            ${submissionStatus.type == "success" ? styles["final-form-msg-success"] : styles["final-form-msg-error"]}`}
          >
            <p>{submissionStatus.msg}</p>
          </div>
        )}
        <div
          className={`${styles["booking-input-group"]} ${styles["form-phoneNumber-group"]}`}
        >
          <p className={styles["form-phoneNumber"]}>
            Call/WhatsApp:{" "}
            <a
              href="https://wa.me/256751554508"
              className={styles["form-phoneNumber-link"]}
            >
              0751554508
            </a>
          </p>
        </div>
      </form>
    </section>
  );
}
