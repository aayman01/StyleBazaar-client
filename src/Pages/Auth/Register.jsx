import log from "../../assets/log.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
const Register = () => {
    const { createUser } = useAuth();
    const navigate = useNavigate();
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        createUser(data.email, data.password)
          .then(() => {
            reset();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Successfully Sign up",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          })
          .catch((error) => {
            toast.error(error.message);
          });
    }
    return (
      <div className="max-w-6xl mx-auto px-4">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <div>
                <img src={log} alt="" />
              </div>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl">
              <h2 className="text-3xl text-center font-bold p-4 mt-6">
                Please Register!
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type your name"
                    className="input input-bordered"
                    {...register("name", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-500 mt-2">Name is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Type your email"
                    className="input input-bordered"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-500 mt-2">Email is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Type your password"
                    className="input input-bordered"
                    {...register("password", { required: true, minLength: 6 })}
                  />
                  {errors.password && (
                    <span className="text-red-500 mt-2">
                      Password is required
                    </span>
                  )}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Register"
                  />
                </div>
              </form>
              <p className="text-center text-black mt-4 pb-10 font-medium">
                Already have an account?
                <Link
                  className="text-red-600 font-medium underline decoration-red-600"
                  to="/login"
                >
                  {" "}
                  Login
                </Link>
              </p>
            </div>
          </div>
          <Toaster position="top-left" reverseOrder={false} />
        </div>
      </div>
    );
};

export default Register;