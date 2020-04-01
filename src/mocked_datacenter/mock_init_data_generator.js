import calculate_time from './generate_timestamp';
const DATA = require('./DATA_cache_buffer.json');



const initial_time = new Date();
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var process_age = [];
function generateAge() {
    for (var i = 0; i < 10; i++) {
        process_age[i] = []
        for (var j = 0; j < 10; j++) {
            process_age[i][j] = getRandomInt(35, 3600);
        }
    }
}
generateAge()


function mock_init_data_generator(cache_age) {
    if (DATA) {
        var cached_data = [];
        DATA.map((value, index) => {
            if (index < cache_age) {
                cached_data[index] = value;
                cached_data[index]["timestamp"] = calculate_time(initial_time, index);
                cached_data[index]["machines"].map((machine_list, machine_index) => {
                    machine_list["processes"].map((process_list, process_index) => {
                        process_list["exe_age"] = calculate_time(initial_time, process_age[machine_index][process_index]);
                        process_list["cpu_usage"] = getRandomInt(0, 100/machine_list["processes"].length);
                        process_list["memory_usage"] = getRandomInt(0, machine_list["ram_max_size"]/machine_list["processes"].length);
                    });
                });
            };
        });
        return cached_data;
        
    } else {
        throw 'Initial server data returned undefined.'
    }
}

export default mock_init_data_generator;