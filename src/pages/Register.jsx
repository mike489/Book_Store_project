import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const handleLogin = () => {};

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
                        placeholder="Enter your name"
                        handleChange={setEmail}
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
                        placeholder="Enter your email"
                        handleChange={setEmail}
                      />
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
                        placeholder="Password"
                        handleChange={setPassword}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch justify-between items-center inline-flex gap-3">
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
            <Button
              primary
              className={"w-full"}
              onClick={() => alert("Sign in clicked")}
            >
              Create account
            </Button>
            <Button
              primary
              className={
                "bg-white text-slate-950 w-full rounded-lg shadow border border-gray-300"
              }
              onClick={() => alert("google clicked")}
            >
              <div className="flex flex-row gap-3 justify-center">
                <FcGoogle className="w-6 h-6 relative" />
                Sign up with Google
              </div>
            </Button>
          </div>
        </div>
        <div className="self-stretch justify-center items-start gap-1 inline-flex mt-3 w-full">
          <div className="text-gray-500 text-sm font-normal leading-tight">
            Already have an account?
          </div>
          <div className="justify-start items-start flex">
            <div className="justify-center items-center gap-2 flex">
              <div className="text-violet-700 text-sm font-semibold leading-tight">
                <Link to="/">Log in</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
