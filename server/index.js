const express = require("express");
const { generate } = require("short-uuid");
const Razorpay = require('razorpay');
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const instance = new Razorpay({
  key_id: 'rzp_test_aMcM3XT5Bnmh1l',
  key_secret: '8C0kSJ7LZlw6YpUtlZb6t4a0',
});





app.post("/auth", (req, res) => {
  const { email, password } = req.body;

  if (email === "john@gmail.com" && password === "admin@123") {
    return res.status(200).json({
      message: "auth success",
      token: generate(),
    });
  }

  else {
    res.status(400).json({
      message: "email or password is incorrect",
    });
  }
});

app.get("/profile", (req, res) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      message: "unauthorized. please login or provide a valid token",
    });
  }

  //   if (authorization) {
  return res.status(200).json({
    message: "profile fetched successfully",
    profile: {
      name: "Bhawani Shankar",
      email: "john@example.com",
      phone: "9411255965",
      address: {
        city: "Jaipur",
        state: "Rajasthan",
        country: "INDIA",
      },
      avatar: "https://i.pravatar.cc/300"
    },
  });
  //   }
});


app.post("/order", async (req, res) => {
  const { amount, receipt } = req.body;
  try {
    const newOrder = await instance.orders.create({
      "amount": amount,
      "currency": "INR",
      "receipt": receipt,
      "notes": {
        "key1": "value3",
        "key2": "value2"
      }
    })
    console.log("new order", newOrder);

    return res.status(200).json({ message: "order_id created successfully", data: newOrder })
  } catch (e) {
    console.log(e);
  }
});

app.listen(4500, () => {
  console.log("server is running on port 4500");
});