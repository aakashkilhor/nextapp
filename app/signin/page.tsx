"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./style.module.css";
import axios from "axios";
import { useRouter } from 'next/navigation'

const Signin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter()

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  // const navigate = useNavigate();

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validate email
    // if (!/\S+@\S+\.\S+/.test(email)) {
    //   setEmailError(true);
    // } else {
    //   setEmailError(false);
    // }

    // Validate password
    // if (password.length < 8) {
    //   setPasswordError(true);
    // } else {
    //   setPasswordError(false);
    // }

    // Send login data to server
    axios.post("http://localhost:4000/login", {
        email: email,
        password: password,
      },{
        withCredentials:true,
      })

      .then((response) => {
        console.log(response)
       if (response.data.success === true) {
        router.push('/dashboard')
       }

      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const handleClickShowPassword = () => {
  //   setShowPassword(!showPassword);
  // };

  return (
    <form onSubmit={handleSubmit}>
      <Link href = '/' className={style.link}>Home</Link>
      <div className={style.outercont}>
        <div className={style.imagediv}>
          <Image
            src="/assets/myMage.png"
            alt="image"
            width={80}
            height={80}
            className={style.person}
          />
        </div>
        <div className={style.innercontainer}>
          <div className={style.welcome}>Welcome!
          </div>
          <div className={style.description}>
            Let's connect to your workspace. <br />
            Please enter your email to continue.
          </div>
          <div className={style.inputdiv}>
            Email
            <input
              placeholder="Email Address"
              value={email}
              onChange={handleEmailChange}
              // error={emailError}
              // helperText={emailError ? "Please enter a valid email" : ""}
              className={style.input}
            />
          </div>
          <div className={style.inputdiv}>
            Password
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              // error={passwordError}
              // helperText={passwordError ? "Password must be 8 characters long" : ""}
              className={style.input}
            />
          </div>
          <div className={style.password}>Forgot Password?</div>
          <button className={style.button} type="submit">
            Sign In
          </button>
        </div>
      </div>
    </form>
  );
};

export default Signin;
