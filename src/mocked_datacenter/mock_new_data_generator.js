import calculate_time from './generate_timestamp';

// This would be an async request
// The request would pass a number parameter representing how many seconds we want back
// Something like
// Request URL: https://our_server_address/status/details?cache_age=30
const DATA = require('./DATA_buffer_real-time.json');


// let current_time = new Date();

// var cached_data = [];


var current_time;


function mock_new_data_generator(cache_age) {
    current_time = new Date();

    // console.log('should be old' , msToTime(false, 0))
    // console.log('should be new' , msToTime(true, 0))

    if (DATA) {
        var cached_data = [];

        DATA.map((value, index) => {
            if (index < cache_age) {
                cached_data[index] = value;
    
                // Generate Timestamps
                cached_data[index]["timestamp"] = calculate_time(current_time, index);
                // Generate Machines
                // Generate ExE Age
                // Generate CPU usage
                // Generate RAM usage
            };
        
        });

        return cached_data;
        // console.log(cached_data)
        
    } else {
        throw 'Initial server data returned undefined.'
    }
}



console.log(mock_new_data_generator(30)[0])




export default mock_new_data_generator;