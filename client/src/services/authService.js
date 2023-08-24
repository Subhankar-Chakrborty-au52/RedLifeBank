export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    console.log("login", e, email, password, role);
  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (
  e,
  name,
  role,
  email,
  password,
  phone,
  organisationName,
  address,
  hospitalName,
  website
) => {
  e.preventDefault();
  try {
    console.log(
      "Register =>",
      name,
      role,
      email,
      password,
      phone,
      organisationName,
      address,
      hospitalName,
      website
    );
  } catch (error) {
    console.log(error);
  }
};
