const express = require('express');
const app = express();

const cors = require('cors');


app.use(express.json());

app.use(cors());

app.get("/" , (req , res) => {
  res.status(200).json({
    internName : "Shubham Rawat",
    referralCode : "REF123XYZ",
    totalDonation : "₹12,500",
    rewards : ['Amazon Gift Card', 'Certificate of Appreciation', 'Free Swag Pack']
  })
})



app.listen(3000 , () => {
  console.log("Server is running on port 3000");
})