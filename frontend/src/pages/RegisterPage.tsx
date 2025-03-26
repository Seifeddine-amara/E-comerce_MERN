import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";
import { BASE_URL } from "../constants/baseUrl";
import { useAuth } from "../context/Auth/AuthContext";

function RegisterPage() {
  const [error, setError] = useState("");
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { login } = useAuth();

  const onSubmit = async () => {
    const firstName = firstNameRef.current?.value;
    const lastName = lastNameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    //Validate the form data
    if (!firstName || !lastName || !email || !password) {
      setError("Check submitted data")
      return;
    }

    //console.log(firstName, lastName, email, password);

    //Make the call to API to create the user
    const response = await fetch(`${BASE_URL}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
    });

    if (!response.ok) {
      setError(await response.json());
      return;
    }
    const token = await response.json();
    if (!token) {
      setError("Incorrect Token");
      return;
    }
    login(email, token);

    console.log(token);
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh", // Ensures full viewport height
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 2, // Adds some spacing before the form
        }}
      >
        <Typography variant="h4">Register New Account</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          border: 1,
          p: 3,
          borderColor: "gray",
          borderRadius: "8px",
          maxWidth: 400,
          width: "100%",
          textAlign: "center",
        }}
      >
        <TextField
          inputRef={firstNameRef}
          label="First Name"
          name="firstName"
        />
        <TextField inputRef={lastNameRef} label="Last Name" name="lastName" />
        <TextField inputRef={emailRef} label="Email" name="email" />
        <TextField
          inputRef={passwordRef}
          label="Password"
          name="password"
          type="password"
        />
        <Button variant="contained" onClick={onSubmit}>
          Register
        </Button>
        {error && <Typography sx={{ color: "red" }}> {error}</Typography>}
      </Box>
    </Container>
  );
}

export default RegisterPage;
