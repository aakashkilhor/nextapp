"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./style.module.css";

const Signin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    // Validate password
    if (password.length < 8) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    // Send login data to server
    // axios
    //   .post("http://localhost:3000/login", {
    //     email: email,
    //     password: password,
    //   },{
    //     withCredentials:true,
    //   })

    //   .then((response) => {
    //    if (response.data.success === true) {
    //     navigate("/");
    //    }

    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Link href = '/' className={style.link}>Home</Link>
      <div className={style.outercont}>
        <div className={style.imagediv}>
          <Image
            src="/assets/myMage.png"
            alt="image"
            width={100}
            height={100}
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
            <input
              placeholder="Email Address"
              // label="Email"
              // variant="outlined"
              value={email}
              onChange={handleEmailChange}
              // error={emailError}
              // helperText={emailError ? "Please enter a valid email" : ""}
              className={style.input}
            />
          </div>
          <div className={style.inputdiv}>
            <input
              // fullWidth
              // label="Password"
              type={showPassword ? "text" : "password"}
              // variant="outlined"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              // error={passwordError}
              // helperText={
              // passwordError ? "Password must be 8 characters long" : ""
              // }
              // InputProps={{
              //   endAdornment: (
              //     <InputAdornment position="end">
              //       <IconButton
              //         aria-label="toggle password visibility"
              //         onClick={handleClickShowPassword}
              //       >
              //         {showPassword ? <Switch /> : <Switch />}
              //       </IconButton>
              //     </InputAdornment>
              //   ),
              // }}
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
