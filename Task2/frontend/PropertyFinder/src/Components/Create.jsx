import { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useNavigate } from "react-router-dom";
import SideNavbar from "./SideNavbar";
import { toast } from "react-toastify";


const Create = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: {
      street: "",
      city: "",
      state: "",
      pinCode: "",
    },
    description: "",
    startDate: null,
    endDate: null,
    Bhktype: "",
    owner: "",
    price: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [field, subField] = name.split(".");

    if (subField) {
      setFormData((prevState) => ({
        ...prevState,
        [field]: {
          ...prevState[field],
          [subField]: value,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [field]: value,
      }));
    }
  };

  const handleDateChange = (name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const Errorsobj = {};
    if (!formData.name || formData.name.length < 5)
      Errorsobj.name = "Name must be at least 5 characters long";
    if (!formData.address.street) Errorsobj.street = "Street is required";
    if (!formData.address.city) Errorsobj.city = "City is required";
    if (!formData.address.state) Errorsobj.state = "State is required";
    if (!formData.address.pinCode) Errorsobj.pinCode = "Pin Code is required";
    if (
      !formData.description ||
      formData.description.length < 20 ||
      formData.description.length > 1000
    )
      Errorsobj.description =
        "Description must be between 20 and 100 characters";
    if (!formData.startDate) {
      Errorsobj.startDate = "Start Date is required";
    }
    if (!formData.endDate) {
      Errorsobj.endDate = "End Date is required";
    } else if (new Date(formData.endDate) <= new Date(formData.startDate)) {
      Errorsobj.endDate = "End Date must be after Start Date";
    }
    if (!formData.Bhktype || formData.Bhktype.length < 3)
      Errorsobj.Bhktype = "BHK type must be at least 3 characters long";
    if (!formData.owner || formData.owner.length < 3)
      Errorsobj.owner = "Owner must be at least 3 characters long";
    if (!formData.price || formData.price < 3)
      Errorsobj.price = "Price must be at least 3";
    setErrors(Errorsobj);
    return Object.keys(Errorsobj).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm() === false) return;

    try {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:4000/v1/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(formData),
      });

      if(response.status===403)
      {
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        navigate("/");
      }
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      toast.success("Successfully Created");
      navigate("/list");
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <Box display="flex">
      <SideNavbar />
      <Container sx={{ marginLeft: "100px", marginTop: "16px" }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome To Create
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              "& .MuiTextField-root": { m: 1 },
              "& .MuiButton-root": { m: 2 },
              backgroundColor: "white",
              padding: 3,
              borderRadius: 7,
              boxShadow: 3,
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  label="Name (Enter your full name)"
                  fullWidth
                  value={formData.name}
                  onChange={handleChange}
                  error={!!errors.name}
                  helperText={errors.name}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="address.street"
                  label="Street"
                  fullWidth
                  value={formData.address.street}
                  onChange={handleChange}
                  error={!!errors.street}
                  helperText={errors.street}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="address.city"
                  label="City"
                  fullWidth
                  value={formData.address.city}
                  onChange={handleChange}
                  error={!!errors.city}
                  helperText={errors.city}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="address.state"
                  label="State"
                  fullWidth
                  value={formData.address.state}
                  onChange={handleChange}
                  error={!!errors.state}
                  helperText={errors.state}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="address.pinCode"
                  label="Pin Code"
                  fullWidth
                  value={formData.address.pinCode}
                  onChange={handleChange}
                  error={!!errors.pinCode}
                  helperText={errors.pinCode}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="description"
                  label="Description (20-100 words)"
                  fullWidth
                  multiline
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  error={!!errors.description}
                  helperText={errors.description}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="Bhktype"
                  label="BHK Type"
                  fullWidth
                  value={formData.Bhktype}
                  onChange={handleChange}
                  error={!!errors.Bhktype}
                  helperText={errors.Bhktype}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="owner"
                  label="Owner"
                  fullWidth
                  value={formData.owner}
                  onChange={handleChange}
                  error={!!errors.owner}
                  helperText={errors.owner}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="price"
                  label="Price"
                  type="number"
                  fullWidth
                  value={formData.price}
                  onChange={handleChange}
                  error={!!errors.price}
                  helperText={errors.price}
                />
              </Grid>
              <Grid item xs={6}>
                <MobileDatePicker
                  label="Start Date"
                  value={formData.startDate}
                  onChange={(newValue) =>
                    handleDateChange("startDate", newValue)
                  }
                  textField={(props) => (
                    <TextField
                      {...props}
                      fullWidth
                      error={!!errors.startDate}
                      helperText={errors.startDate}
                    />
                  )}
                  inputFormat="DD/MM/YYYY"
                />
              </Grid>
              <Grid item xs={6}>
                <MobileDatePicker
                  label="End Date"
                  value={formData.endDate}  
                  onChange={(newValue) => handleDateChange("endDate", newValue)}
                  textField={(props) => (
                    <TextField
                      {...props}
                      fullWidth
                      error={!!errors.endDate}
                      helperText={errors.endDate}
                    />
                  )}
                  inputFormat="DD/MM/YYYY"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{ backgroundColor: "#337ab7" }}
                >
                  Create
                </Button>
              </Grid>
            </Grid>
          </Box>
        </LocalizationProvider>
      </Container>
    </Box>
  );
};

export default Create;
