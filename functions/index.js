const functions = require('firebase-functions');
const express = require("express"); 
const cors = require("cors");
const stripe = require("stripe")('sk_test_51JDNR1SICyEzBPHdmh8oMGZ1VP6GGtYuk2xX6iQvtIiQIhoVqrCMoSGaycQFSjyQ7rm0y0xqkq5TIxnKzliootAT00aYZSW0bq')

//API

//App config
const app = express();

//Middlewares
app.use(cors({origin: true }));
app.use(express.json());


//API routes
app.get("/", (request, response) => response.status(200).send
("hello world"));

app.post("/payment/create", async(request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({

        amount: total, //subunits of currency
        currency: "usd",
    });
    //OK - CREATED
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

//Listem command
exports.api = functions.https.onRequest(app);



//Example Endpoint
//http://localhost:5001/clone-a8fcc/us-central1/api




