import React, { Fragment, useState } from "react";
import Container from "../UI/Container";
import Card from "../Layout/Card";
import BreadCrumbs from "../Breadcrumbs/Breadcrumbs";
import Input from "../UI/Input";
import Button from "../UI/Button";

const Login = ({ data }) => {
  const [registerIsClicked, setRegisterIsClicked] = useState(false);
  return (
    <Fragment>
      <Card>
        <h1 className="md:text-4xl text-2xl font-robotoLight text-center">
          Login
        </h1>
        <BreadCrumbs items={data} />
      </Card>
      <Container>
        <div className="md:w-[500px] w-[400px] m-auto p-5">
          <span className="flex justify-between md:w-2/5 w-2/5 m-auto mb-10">
            <button onClick={() => setRegisterIsClicked(false)}>
              <h1 className="font-robotoBold md:text-2xl text-xl">Login</h1>
            </button>
            <button onClick={() => setRegisterIsClicked(true)}>
              <h1 className="font-robotoBold md:text-2xl text-xl">Sign Up</h1>
            </button>
          </span>
          {registerIsClicked ? (
            <form>
              <h2 className="mb-5 font-bold-semibold md:text-xl text-md font-robotoReg">
                Register An Account
              </h2>
              <span>
                <Input
                  placeholder="Username"
                  className="rounded-none py-2 pl-2 mb-5"
                />
                <Input
                  placeholder="Email address"
                  className="rounded-none py-2 pl-2 mb-5"
                />
                <Input
                  placeholder="Password"
                  className="rounded-none py-2 pl-2 mb-5"
                />
              </span>
              <p className="font-robotoLight leading-5">
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our <span className="font-robotoBold cursor-pointer">privacy policy.</span>
              </p>
              <Button className="w-full mt-8 rounded-none">Register</Button>
            </form>
          ) : (
            <form>
              <h2 className="mb-5 font-bold-semibold md:text-xl text-md font-robotoReg">
                Login Your Account
              </h2>
              <span>
                <Input
                  placeholder="Username"
                  className="rounded-none py-2 pl-2 mb-5"
                />
                <Input
                  placeholder="Password"
                  className="rounded-none py-2 pl-2 mb-5"
                />
              </span>
              <span className="flex justify-between">
                <span>
                  <input type="checkbox" />
                  <label className="ml-3">Remember me</label>
                </span>
                <a className="hover:text-sky-500 cursor-pointer">
                  Forgot your password ?
                </a>
              </span>
              <Button className="w-full mt-8 rounded-none">Login</Button>
            </form>
          )}
        </div>
      </Container>
    </Fragment>
  );
};

export default Login;
