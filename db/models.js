const mongoose = require("mongoose");
const dbschema = mongoose.Schema({
    agent: {
        type: String
    },
    userType: {
        type: String
    },
    policy_mode: {
        type: Number
    },
    Producer: {
        type: String
    },
    policy_number: {
        type: String
    },
    premium_amount: {
        type: Number
    },
    policy_type: {
        type: String
    },
    company_name: {
        type: String
    },
    category_name: {
        type: String
    },
    policy_start_date: {
        type: String
    },
    policy_end_date: {
        type: String
    },
    csr: {
        type: String
    },
    account_name: {
        type: String
    },
    email: {
        type: String
    },
    firstname: {
        type: String
    },
    city: {
        type: String
    },
    account_type: {
        type: String
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    state: {
        type: String
    },
    zip: {
        type: String
    },
    dob: {
        type: String
    },
    primary: {
        type: String
    },
    applicant_ID: {
        type: String
    },
    agency_ID: {
        type: String
    },
    hasActive_clientPolicy:{
        type: String
    }
});

const dbmodel = mongoose.model("dbmodel",dbschema);

module.exports = dbmodel;