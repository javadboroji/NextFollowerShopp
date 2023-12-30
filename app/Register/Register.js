"use client";
import { Alert, Grid, Slide, Stack } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Snackbar from "@mui/material/Snackbar";
import { useRouter } from "next/navigation";
import React from "react";

function Register({ setIsRegister }) {
  const router = useRouter();
  /**------------------------------------------------------------------------
   *                           Toast Setting
   *------------------------------------------------------------------------**/
  function TransitionUp(props) {

    return <Slide {...props} direction="up" />;
  }
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  const handleClose = () => {
    setOpen(false);
  };

  const loginRun = () => {
    setIsRegister(false);
  };
  //Formic Config

  const formik = useFormik({
    initialValues: {
      firstName: "",

      lastName: "",

      email: "",

      password: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string()

        .max(15, "Must be 15 characters or less")

        .required("Required"),

      lastName: Yup.string()

        .max(20, "Must be 20 characters or less")

        .required("Required"),

      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required(),
    }),

    onSubmit: async (values) => {
      try {
        const api_req_options = {
          method: "POST",
          body: JSON.stringify(values),
        };

        const res = await fetch("/api/register", api_req_options);
        if (!res.ok) {
          throw new Error("Network response was not ok.");
        }

        const dataBack = await res.json();
        
        if (dataBack.register === true) {
          setOpen(true);
          router.push("/dashboard");
        } else {
          console.error("Unexpected response from the server:", dataBack);
          setOpen(true);
        }
      } catch (error) {
        console.error("Error occurred during registration:", error);
      }
    },
  });
  return (
    <Grid item sx={12} lg={4} display={"flex"}>
      <form
        onSubmit={formik.handleSubmit}
        className="lg:border-r-2 lg:border-b-0 lg:pr-4 pb-4 border-b-2"
      >
        <label htmlFor="firstName" className="text-white text-1xl">
          First Name
        </label>

        <input
          className="bg-gray-200 mb-3 bg-transparent text-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none  focus:border-purple-500"
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />

        {formik.touched.firstName && formik.errors.firstName ? (
          <p className="text-red-500 text-xs italic">
            {formik.errors.firstName}
          </p>
        ) : null}

        <label htmlFor="lastName" className="text-white text-1xl">
          Last Name
        </label>

        <input
          className="bg-gray-200 mb-3 bg-transparent appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none text-white  focus:border-purple-500"
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />

        {formik.touched.lastName && formik.errors.lastName ? (
          <p className="text-red-500 text-xs italic">
            {formik.errors.lastName}
          </p>
        ) : null}

        <label htmlFor="email" className="text-white text-1xl">
          Email Address
        </label>

        <input
          className="bg-gray-200 mb-3 bg-transparent appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none text-white focus:border-purple-500"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />

        {formik.touched.email && formik.errors.email ? (
          <p className="text-red-500 text-xs italic">{formik.errors.email}</p>
        ) : null}
        <label htmlFor="lastName" className="text-white text-1xl">
          password{" "}
        </label>

        <input
          className="bg-gray-200 mb-3 bg-transparent appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none text-white  focus:border-purple-500"
          id="password"
          name="password"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />

        {formik.touched.password && formik.errors.password ? (
          <p className="text-red-500 text-xs italic">
            {formik.errors.password}
          </p>
        ) : null}

        <div className="flex justify-between">
          <button
            className="border-amber-600 hover:bg-yellow-400 text-white font-semibold  py-2 my-2 px-4 border   rounded"
            type="submit"
          >
            {" "}
            Register
          </button>
          <button
            className="border-0 bg-transparent text-white "
            onClick={() => loginRun()}
          >
            {" "}
            Login
          </button>
        </div>
      </form>
      <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Register Sucess!
        </Alert>
      </Snackbar>
     
    </Stack>
    </Grid>
  );
}

export default Register;
