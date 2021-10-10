import axios from 'axios'
import _ from 'lodash'

import { createNotification } from 'Components/utilities/Notification/Notification';

const forecast = axios.create({
	baseURL: process.env.API_URL,
	headers: {
	  'Accept': 'application/json',
	  'Content-Type': 'application/json',
	  'Access-Control-Allow-Origin': '*',
	}
});


const forecastML = axios.create({
    baseURL: process.env.API_URL_ML,
	headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
	}
});

export const apiService = {
    get (resource) {
        return forecast
            .get(resource)
            .then((res) => { return res.data })
            .catch((err) => {
                createNotification('error', _.get(err, 'response.data.message', 'Please contact Developer for the detail.'), 'Something went wrong');

                throw err;
            })
    },

    put (resource, params) {
        return forecast
            .put(resource, params)
            .catch((err) => {
                createNotification('error', _.get(err, 'response.data.message', 'Please contact Developer for the detail.'), 'Something went wrong');

                throw err;
            })
    },

    post (resource, params) {
        return forecast
            .post(resource, params)
            .then((res) => { return res.data })
            .catch((err) => {
                createNotification('error', _.get(err, 'response.data.message', 'Please contact Developer for the detail.'), 'Something went wrong');

                throw err;
            })
    },

    delete (resource) {
        return forecast
            .delete(resource)
            .catch((err) => {
                createNotification('error', _.get(err, 'response.data.message', 'Please contact Developer for the detail.'), 'Something went wrong');

                throw err;
            })
    }
}

export const apiServiceML = {
    get (resource) {
        return forecastML
            .get(resource)
            .then((res) => { return res.data })
            .catch((err) => {
                createNotification('error', _.get(err, 'response.data.message', 'Please contact Developer for the detail.'), 'Something went wrong');

                throw err;
            })
    },

    put (resource, params) {
        return forecastML
            .put(resource, params)
            .catch((err) => {
                createNotification('error', _.get(err, 'response.data.message', 'Please contact Developer for the detail.'), 'Something went wrong');

                throw err;
            })
    },

    post (resource, params) {
        return forecastML
            .post(resource, params)
            .then((res) => { return res.data })
            .catch((err) => {
                createNotification('error', _.get(err, 'response.data.message', 'Please contact Developer for the detail.'), 'Something went wrong');

                throw err;
            })
    },

    delete (resource) {
        return forecastML
            .delete(resource)
            .catch((err) => {
                createNotification('error', _.get(err, 'response.data.message', 'Please contact Developer for the detail.'), 'Something went wrong');

                throw err;
            })
    }
}