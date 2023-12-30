"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Grid from "@mui/material/Grid";
import bg from "@/public/registerBg.jpg";
import { Layers } from "@mui/icons-material";
import LayoutCs from "../Components/LayoutCs";
import { logging } from "@/next.config";
import { useRouter } from "next/navigation";
import Register from "./Register";

const api_url = "/api/register/rouute";
function Login() {
  const router = useRouter();

  const [isRegister, setIsRegister] = useState(false);

  //change form display
  const registerRun = () => {
    setIsRegister(true);
  };

  //Formic Config

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      password: Yup.string().required(),
      email: Yup.string().email("Invalid email address").required("Required"),
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
        if (dataBack === "true") {
          router.push("/dashboard");
        } else {
          console.error("Unexpected response from the server:", dataBack);
        }
      } catch (error) {
        console.error("Error occurred during registration:", error);
      }
    },
  });
  return (
    <LayoutCs>
      <div className=" flex   pt-3 register-bg  min-h-screen">
        <div className="container  mx-auto py-4 lg:container flex-row items-center justify-center mt-8">
          <Grid
            container
            spacing={2}
            className="d-flex items-center justify-center m-auto"
          >
            {!isRegister ? (
              <Grid item sx={12} lg={4} display={"flex"}>
                <form
                  onSubmit={formik.handleSubmit}
                  className="lg:border-r-2 lg:border-b-0 lg:pr-4 pb-4 border-b-2"
                >
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
                    <p className="text-red-500 text-xs italic">
                      {formik.errors.email}
                    </p>
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
                      Login
                    </button>
                    <button
                      className="border-0 bg-transparent text-white "
                      onClick={() => registerRun()}
                    >
                      {" "}
                      Register
                    </button>
                  </div>
                </form>
              </Grid>
            ) : (
              //Register Form display
              <Register setIsRegister={setIsRegister} />
            )}

            <Grid item sx={12} lg={4} display={"flex"}>
              <h1 className="text-white text-5xl">
                {" "}
                Me <span className="text-yellow-400"> WebSite</span>
              </h1>
            </Grid>
          </Grid>
        </div>
      </div>
    </LayoutCs>
  );
}

export default Login;
