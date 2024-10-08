import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import log from "../../assets/log.png"
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn, googleSignIn } = useAuth();
  const navigate = useNavigate();
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();

      const onSubmit = (data) => {
        signIn(data.email, data.password)
          .then(() => {
            reset();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Successfully logged in",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(location.state ? location.state : "/");
          })
          .catch();
      };

      const handleGoogleLogIn = () => {
        googleSignIn()
        .then(()=>{
           Swal.fire({
             position: "center",
             icon: "success",
             title: "Successfully logged in",
             showConfirmButton: false,
             timer: 1500,
           });
           navigate(location.state ? location.state : "/");
        })
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
                Please Login!
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
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
                    placeholder="password"
                    className="input input-bordered"
                    {...register("password", { required: true })}
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
                    value="Login"
                  />
                </div>
              </form>
              <p className="text-center text-black mb-4 font-medium">
                -Or login with-
              </p>
              <div className="flex text-2xl items-center gap-3 justify-center">
                <button onClick={handleGoogleLogIn}>
                  <FcGoogle />
                </button>
              </div>
              <p className="text-center text-black mt-4 pb-10 font-medium">
                Do not have an account?
                <Link
                  className="text-red-600 font-medium underline decoration-red-600"
                  to="/register"
                >
                  {" "}
                  Sign Up
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;