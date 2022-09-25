const { HttpError } = require("../errors");
const models = require("../models");
const {errorHandler, withTransaction} = require("../utils");
var mongoose = require('mongoose');

const Customer = errorHandler(withTransaction( async (req, res, session) => {
    const customerData = models.Customer({
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
    });

    await customerData.save({session});

    return{
        id: customerData.id,
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
    };
}));

const Satisfaction = errorHandler(withTransaction( async (req, res, session) => {
    const user = await models.Customer.findById(req.body.owner);
    
    const satisfactionData = models.Satisfaction({
        owner: user._id,
        rides: req.body.rides,
        facilities: req.body.facilities,
        hospitality: req.body.hospitality,
        services: req.body.services,
        equivalence: req.body.equivalence,
        notes: req.body.notes,
    });


    await satisfactionData.save({session});

    return{
        id: satisfactionData.id,
        owner: user._id,
        rides: req.body.rides,
        facilities: req.body.facilities,
        services: req.body.services,
        dontKnow: req.body.dontKnow,
        equivalence: req.body.equivalence,
        notes: req.body.notes,
    };
}));

const Visit = errorHandler(withTransaction( async (req, res, session) => {

    const user = await models.Customer.findById(req.body.owner);

    const visitData = models.Visit({
        owner: user._id,
        frequency: req.body.frequency,
        referal: req.body.referal,
        isRecomended: req.body.isRecomended,
        notes: req.body.notes,
    });

    await visitData.save({session});

    return{
        id: visitData.id,
        owner: user._id,
        frequency: req.body.frequency,
        referal: req.body.referal,
        isRecomended: req.body.isRecomended,
        notes: req.body.notes,
    };
}));

const GetCustomerByID = errorHandler(withTransaction( async (req, res, session) => {
    const customerData = await models.Customer.findById(req.body.owner);

    return{
        id: customerData.id,
        name: customerData.name,
        phone: customerData.phone,
        address: customerData.address,
    };
}));

module.exports = {
    Customer,
    Satisfaction,
    Visit,
    GetCustomerByID
}