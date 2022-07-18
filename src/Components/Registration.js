import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form"; 
import axios from "axios"

const Registration = () => {
   const form = useRef();
   const [submit, setSubmit] = useState("Submit");
  
   const {
     register,
     handleSubmit,
     formState: { errors },
     reset,
     watch,
   } = useForm();
    const password = watch("password");
  const onSubmit = (data) => {
    setSubmit("Submitting...");
     console.log(JSON.stringify(data, null, 2));
      let formData = new FormData();
      formData.append("fullName", data.fullName);
      formData.append("roll", data.roll);
      formData.append("city", data.city);
      formData.append("confirmPassword", data.confirmPassword);
 

      axios({
        method: "post",
        url: "http://127.0.0.1:8000/",
        data: formData,
        config: { headers: { "Content-Type": "multipart/form-data" } },
      })
        .then(function (response) {
          //handle success
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
      reset();
   };
  
  return (
    <section className="vh-100 login_Background">
      <div className="container py-5 h-100 ">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-4">
            <div className="card shadow">
              <div className="card-body p-4 position-relative">
                <img
                  className="position-absolute rounded-circle registration_profile"
                  src="Images/profile.png"
                  alt="profile card"
                />
                <h3 className="mb-5 text-center">a</h3>
                <form action="" ref={form} onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="typeEmailX-2"
                      placeholder="UserName"
                      className="form-control shadow-sm form-control-lg fs-6"
                      {...register("fullName", {
                        required: true,
                        minLength: 4,
                        pattern: /^[a-z ,.'-]+$/i,
                      })}
                    />
                    {errors?.fullName?.type === "required" && (
                      <p>Full Name is required !</p>
                    )}
                    {errors?.fullName?.type === "minLength" && (
                      <p>Name is Too short !</p>
                    )}
                    {errors?.fullName?.type === "pattern" && (
                      <p>Alphabetical characters only</p>
                    )}
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="number"
                      id="typeEmailX-2"
                      placeholder="Email"
                      className="form-control shadow-sm  form-control-lg fs-6"
                      {...register("roll", {
                        required: true,
                        // pattern:
                        //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                    />
                    {errors?.Email?.type === "required" && (
                      <p>Roll no is required !</p>
                    )}
                    {/* {errors?.Email?.type === "pattern" && (
                      <p>Invalid Email Address!</p>
                    )} */}
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="typeEmailX-2"
                      placeholder="Email"
                      className="form-control shadow-sm  form-control-lg fs-6"
                      {...register("city", {
                        required: true,
                        // pattern:
                        //   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      })}
                    />
                    {errors?.city?.type === "required" && (
                      <p>City is required !</p>
                    )}
                    {/* {errors?.Email?.type === "pattern" && (
                      <p>Invalid Email Address!</p>
                    )} */}
                  </div>
                  {/* <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="typePasswordX-2"
                      placeholder="Passowrd"
                      className="form-control shadow-sm  form-control-lg fs-6"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Minimum Required length is 8",
                        },
                        maxLength: {
                          value: 20,
                          message: "Maximum Required length is 20",
                        },
                      })}
                    />
                    {errors.password && (
                      <span className="text-sm text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="typePasswordX-2"
                      placeholder="Confirm Password"
                      className="form-control shadow-sm  form-control-lg fs-6"
                      {...register("confirmPassword", {
                        required: "confirm password is required",
                        validate: (value) =>
                          value === password || "The passwords do not match",
                      })}
                    />
                    {errors.confirmPassword && (
                      <span className="text-sm text-red-500">
                        {errors.confirmPassword.message}
                      </span>
                    )}
                  </div> */}

                  <button
                    className="btn btn-primary btn-lg btn-block w-100"
                    type="submit"
                  >
                    {submit}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Registration