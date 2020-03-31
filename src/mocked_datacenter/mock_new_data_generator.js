import calculate_time from './generate_timestamp';
import mock_init_data_generator from './mock_init_data_generator';

// This would be an async request
// The request would pass a number parameter representing how many seconds we want back
// Something like
// Request URL: https://our_server_address/status/details?cache_age=30




function NewData(timestamp, machines) {
    this.timestamp = timestamp;
    this.machines = machines;
  }






var current_time;
function mock_new_data_generator(cache_age) {

    // console.log(mock_init_data_generator(cache_age)[0]["timestamp"]) //checks out
    // console.log(mock_init_data_generator(cache_age)[0]["timestamp"][0]["machine_name"])
    // console.log( mock_init_data_generator(cache_age)[0]["timestamp"] )
    // console.log( mock_init_data_generator(cache_age)[0]["machines"] )

    current_time = new Date();

    // console.log('should be old' , msToTime(false, 0))
    // console.log('should be new' , msToTime(true, 0))

    var new_object_array_by_seconds = [];

    for(let i = 0; i < cache_age; i++) {
        var get_time = calculate_time(current_time, i);
        // console.log(get_time)
        var get_machines = mock_init_data_generator(cache_age)[i]["machines"];
        var newly_constructed = new NewData(get_time, get_machines)
        new_object_array_by_seconds.push(newly_constructed)
    }
    return new_object_array_by_seconds;
}







export default mock_new_data_generator;