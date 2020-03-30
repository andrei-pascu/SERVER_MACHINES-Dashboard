// const requested_cached_data = require('../mocked_datacenter/DATA_buffer_real-time.json'); //(with path)

// Would be an async request
const DATA_cache_buffer = require('../mocked_datacenter/DATA_cache_buffer.json'); //(with path)

// Variable to map the data we need from the request
var cached_data = [];

if (DATA_cache_buffer) {
    // Extracting (mapping) the data from the request
    const get_cached_data = DATA_cache_buffer.map((value, index) => {
        if (index <= 3) {
            // console.log('here', value)
            // console.log('here', index)
            cached_data[index] = value
        };
        // (index >= 30) ? value => value : null;
        // console.log(value)
        // console.log(index)
        // x => x * 2
        console.log(cached_data)
    
    });
    // let get_cached_data = (data) => cached_data = data;
    // console.log('here', cached_data)
    // get_cached_data(DATA_cache_buffer);
} else {
    throw 'error'
}


export default cached_data;