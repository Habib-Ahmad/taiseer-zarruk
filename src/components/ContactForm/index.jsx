import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Formik } from "formik";
import * as Yup from "yup";
import home from "../../assets/home.svg";
import phone from "../../assets/phone.svg";
import email from "../../assets/email.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import dribble from "../../assets/dribble.svg";
import artstation from "../../assets/artstation.svg";
import styles from "./styles.module.scss";
import { Button, CircularProgress, TextField } from "@mui/material";

const ContactForm = () => {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setTimeout(() => setSuccess(false), 5000);
  }, [success]);

  const handleSubmit = (values, resetForm) => {
    console.log(values);
    // emailjs
    //   .send("service_cyfscx9", "template_jyteidq", values, "pJi64IHFE-CNe9YlB")
    //   .then(
    //     (result) => {
    //       setSubmitting(false);
    //       setSuccess(true);
    //       resetForm();
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  return (
    <div className={styles.container}>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur. Sit massa arcu scelerisque
          consequat phasellus rhoncus euismod.
        </p>

        <p className={styles.visit}>Visit us:</p>

        <div className={styles.details}>
          <Link
            className={styles.detail}
            href="https://goo.gl/maps/X3MiPf9JTB9XtsHF9"
          >
            <Image src={home} alt="address" />
            <p>
              Elevators and Escalators Nigeria Limited Mabushi Abuja Nigeria.
            </p>
          </Link>
          <Link className={styles.detail} href="tel:+2348064402562">
            <Image src={phone} alt="phone" />
            <p>+2348064402562</p>
          </Link>
          <Link
            className={styles.detail}
            href="mailTo:info@taiseerzarrukltd.com"
          >
            <Image src={email} alt="email" />
            <p>info@taiseerzarrukltd.com</p>
          </Link>
        </div>

        <p className={styles.follow}>Follow us:</p>

        <div className={styles.icons}>
          {socialLinks.map((item, idx) => (
            <Link key={idx} className={styles.icon} href={item.link}>
              <Image src={item.src} alt={item.name} />
            </Link>
          ))}
        </div>
      </div>

      <div className={styles.form}>
        <Formik
          initialValues={{
            name: "",
            email: "",
            subject: "",
            message: "",
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("This field is required"),
            email: Yup.string()
              .trim()
              .required("This field is required")
              .email("E-mail is not valid"),
            subject: Yup.string().required("This field is required"),
            message: Yup.string().required("This field is required"),
          })}
          onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
        >
          {({
            handleSubmit,
            handleChange,
            values,
            touched,
            errors,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} noValidate>
              <div className={styles.row}>
                <TextField
                  placeholder="Name"
                  name="name"
                  size="small"
                  fullWidth
                  helperText={touched.name ? errors.name : ""}
                  error={touched.name && Boolean(errors.name)}
                  value={values.name}
                  onChange={handleChange}
                />

                <div className={styles.space} />

                <TextField
                  placeholder="E-mail"
                  name="email"
                  size="small"
                  fullWidth
                  helperText={touched.email ? errors.email : ""}
                  error={touched.email && Boolean(errors.email)}
                  value={values.email}
                  onChange={handleChange}
                />
              </div>

              <TextField
                placeholder="Subject"
                name="subject"
                size="small"
                fullWidth
                helperText={touched.subject ? errors.subject : ""}
                error={touched.subject && Boolean(errors.subject)}
                value={values.subject}
                onChange={handleChange}
              />

              <TextField
                placeholder="Message"
                name="message"
                size="medium"
                multiline
                minRows={4}
                fullWidth
                helperText={touched.message ? errors.message : ""}
                error={touched.message && Boolean(errors.message)}
                value={values.message}
                onChange={handleChange}
              />

              <Button variant="contained" type="submit" size="large">
                {isSubmitting ? <CircularProgress size={25} /> : "Submit"}
              </Button>
              {success && (
                <p className={styles.success}>Email sent successfully!</p>
              )}
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;

const socialLinks = [
  {
    name: "facebook",
    src: facebook,
    link: "",
  },
  {
    name: "twitter",
    src: twitter,
    link: "",
  },
  {
    name: "dribble",
    src: dribble,
    link: "",
  },
  {
    name: "artstation",
    src: artstation,
    link: "",
  },
];
