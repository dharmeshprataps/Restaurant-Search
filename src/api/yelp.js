import axios from'axios'
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer XvG5Z9pCvFUUSc5qbM2ReVDy1w5gQc0AJRdeUAKXj0s7U2rBEjdYDgGrLoFhddHUaZQP8P8YTEXrnTmcBmdheMEJaPQkasjU2xrqKpHttz5hg3GbyLQoJcxHpkG3XXYx'
    }
});

