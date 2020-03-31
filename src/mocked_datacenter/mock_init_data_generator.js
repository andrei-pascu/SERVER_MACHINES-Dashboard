import calculate_time from './generate_timestamp';

// This would be an async request
// The request would pass a number parameter representing how many seconds we want back
// Something like
// Request URL: https://our_server_address/status/details?cache_age=30
const DATA = require('./DATA_cache_buffer.json');


// let current_time = new Date();

// var cached_data = [];


const initial_time = new Date();
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var process_age = [];
function generateAge() {
    for (var i = 0; i < 10; i++) {
        process_age[i] = getRandomInt(35, 3600);
    }
}
generateAge()

function mock_init_data_generator(cache_age) {
    // console.log(process_age)
    // console.log('should be old' , msToTime(false, 0))
    // console.log('should be new' , msToTime(true, 0))

    if (DATA) {
        var cached_data = [];


        DATA.map((value, index) => {
            // console.log(calculate_time(initial_time, 10))
            // console.log(calculate_time(initial_time, 600))
            // console.log(calculate_time(initial_time, 3600))
            if (index < cache_age) {
                cached_data[index] = value;
                // Generate Timestamps
                cached_data[index]["timestamp"] = calculate_time(initial_time, index);


                cached_data[index]["machines"].map((machine_list, machine_index) => {
                    // console.log(x, machine_list[["processes"]])
                    
                    machine_list["processes"].map((process_list, process_index) => {
                        process_list["exe_age"] = calculate_time(initial_time, process_age[process_index]);


                        process_list["cpu_usage"] = getRandomInt(0, 100/machine_list["processes"].length);
                        process_list["memory_usage"] = getRandomInt(0, machine_list["ram_max_size"]/machine_list["processes"].length);
                    });
                });

                // cached_data[index]["machines"]["processes"].map((process_list, process_index) => {
                //         process_list["exe_age"] = calculate_time(initial_time, getRandomInt(35, 3600));
                // });
                // cached_data[index]["machines"].map((machine_list, machine_index) => {
                //     machine_list["processes"].map((process_list, process_index) => {
                //         process_list["exe_age"] = calculate_time(initial_time, index+600)
                //     })
                // })

                // = calculate_time(initial_time, -index);
            };
        });

        return cached_data;
        // console.log(cached_data)
        
    } else {
        throw 'Initial server data returned undefined.'
    }
}



// console.log(mock_init_data_generator(30)[0])




export default mock_init_data_generator;