import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { signup } from "../features/user/UserSlice";
import axios from "axios";

const Signup = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {

    console.log(data);
  
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', data);
      console.log(response.data);
      reset();
    } catch (error) {
      console.error(error);
    }
    const newUser = {
      name: data.username,
      email: data.email,
      password: data.password,
      role: data.role,
    };
    dispatch(signup(newUser));
    const updatedUsers = [...users, newUser];
    localStorage.setItem("user", JSON.stringify(updatedUsers));

    reset();
  };

  return (
    <div className="w-full h-full px-8 pt-24 pb-12 bg-white flex-col justify-start items-center gap-8 inline-flex">
      <div className=" flex-col justify-start items-center gap-8 ">
        <div className="self-stretch  flex-col justify-start items-center gap-6 flex ">
          <div className="self-stretch flex-col justify-start items-start gap-3 flex font-primary">
            <div className="self-stretch text-center text-gray-900 text-3xl font-semibold">
              Sign up
            </div>
            <div className="self-stretch text-center text-gray-500 text-base font-normal">
              Start your 30-day free trial.
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="self-stretch  rounded-xl flex-col justify-start items-center gap-6 flex mt-5">
            <div className="self-stretch  flex-col justify-start items-start gap-5 flex">
              <div className="self-stretch  flex-col justify-start items-start flex">
                <div className="self-stretch  flex-col justify-start items-start gap-1.5 flex">
                  <div className="self-stretch  flex-col justify-start items-start gap-1.5 flex">
                    <div className="text-slate-700 text-sm font-medium leading-tight">
                      Name
                    </div>
                    <div className=" w-full self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                      <div className="grow shrink basis-0 h-full justify-start items-center gap-2 flex">
                        <Input
                          type="text"
                          {...register("username", {
                            required: true,
                            message: "Enter your name",
                          })}
                          aria-invalid={errors.name ? "true" : "false"}
                          placeholder="Enter your name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="self-stretch  flex-col justify-start items-start gap-1.5 flex">
                    <div className="text-slate-700 text-sm font-medium leading-tight">
                      Email
                    </div>
                    <div className=" w-full self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                      <div className="grow shrink basis-0 h-full justify-start items-center gap-2 flex">
                        <Input
                          type="email"
                          {...register("email", {
                            required: true,
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "invalid email address",
                            },
                          })}
                          aria-invalid={errors.email ? "true" : "false"}
                          placeholder="Enter your email"
                        />
                        {errors.email && (
                          <p role="alert">{errors.email?.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-col justify-start items-start flex">
                <div className="self-stretch flex-col justify-start items-start gap-1.5 flex">
                  <div className="self-stretch flex-col justify-start items-start gap-1.5 flex">
                    <div className="text-slate-700 text-sm font-medium leading-tight">
                      Password
                    </div>
                    <div className="self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 justify-start items-center ">
                      <div className="grow shrink basis-0 h-6 justify-start items-center gap-2">
                        <Input
                          type="password"
                          {...register("password", {
                            required: true,
                            minLength: 8,
                            message:
                              "password must be greater than 8 charachters",
                          })}
                          aria-invalid={errors.password ? "true" : "false"}
                          placeholder="Create a password"
                        />
                        {errors.password && (
                          <p role="alert">{errors.password?.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch  flex-col justify-start items-start gap-1.5 flex">
                    <div className="text-slate-700 text-sm font-medium leading-tight">
                      Role
                    </div>
                    <div className=" w-full self-stretch px-3.5 py-2.5 bg-white rounded-lg shadow border border-gray-300 justify-start items-center gap-2 inline-flex">
                      <div className="grow shrink basis-0 h-full justify-start items-center gap-2 flex">
                        <Input
                          type="text"
                          {...register("role", {
                            required: true,
                            message: "Enter your role",
                          })}
                          aria-invalid={errors.name ? "true" : "false"}
                          placeholder="your role"
                        />
                      </div>
                    </div>
                  </div>
            </div>
            <div className="self-stretch justify-between items-center inline-flex gap-8">
              <div className="justify-start items-center gap-2 flex">
                <input type="checkbox" name="" id="" />
                <div className="text-slate-700 text-sm font-medium leading-tight">
                  <div>Remember for 30 days</div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start flex">
                <div className="justify-center items-center gap-2 flex">
                  <div className="text-violet-700 text-sm font-semibold leading-tight">
                    Forgot password
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-4 flex w-full">
              <Button primary className={"w-full"} type="submit">
                Create account
              </Button>
              <Button
                primary
                className={
                  "bg-white w-full rounded-lg shadow border border-gray-300"
                }
              >
                <div className="flex flex-row gap-3 justify-center text-slate-950">
                  <FcGoogle className="w-6 h-6 relative" />
                  Sign up with Google
                </div>
              </Button>
            </div>
          </div>
        </form>
        <div className="self-stretch justify-center items-start gap-1 inline-flex mt-3 w-full">
          <div className="text-gray-500 text-sm font-normal leading-tight">
            Already have an account?
          </div>
          <div className="justify-start items-start flex">
            <div className="justify-center items-center gap-2 flex">
              <div className="text-violet-700 text-sm font-semibold leading-tight">
                <Link to="/Login">Log in</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;