import calculate_time from './generate_timestamp';

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
    current_time = new Date();

    // console.log('should be old' , msToTime(false, 0))
    // console.log('should be new' , msToTime(true, 0))

    var new_object_array_by_seconds = [];

    for(let i = 0; i < cache_age; i++) {
        var get_time = calculate_time(current_time, i);
        // console.log(get_time)
        var get_machines = [
            {
                "machine_name": "Pixel-Cruncher_V2",
                "machine_ip": "0000:0000:0000:0000:0000:0000:0000:0001"
            },
            {
                "machine_name": "Threadripper",
                "machine_ip": "0000:0000:0000:0000:0000:0000:0000:0002",
                "processes": [
                    {
                        "process_name": "steam_client.exe"
                    },
                    {
                        "process_name": "spotify_client.exe",
                        "display_name": "Spotify",
                        "exe_age": 50,
                        "usage_cpu": 5,
                        "usage_memory_bytes": 654654654
                    }
                ]
            }
        ]
        var newly_constructed = new NewData(get_time, get_machines)
        new_object_array_by_seconds.push(newly_constructed)
    }
    return new_object_array_by_seconds;
}







export default mock_new_data_generator;