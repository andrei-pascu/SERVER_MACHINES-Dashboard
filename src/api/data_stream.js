// import mock_data_generator from '../mocked_datacenter/mock_data_generator';
import mock_init_data_generator from '../mocked_datacenter/mock_init_data_generator';
import mock_new_data_generator from '../mocked_datacenter/mock_new_data_generator';

// console.log(get_data["history"](30)[0]["timestamp"])
// setInterval(() => {
//     console.log(get_data["new"](10)[0]["timestamp"])
// }, 2000);
// // console.log(mock_data_generator(30, true));


// var buffer = get_data[0];
// console.log('buffer', buffer[0]["timestamp"])
// var new_data;

var init_data = mock_init_data_generator(30);
var buffer = init_data;
var new_data;

var new_entries = 0;


function data_stream_update() {


    console.log('before data', buffer[0]["timestamp"])
    console.log('before data', buffer[1]["timestamp"])
    console.log('before data', buffer[2]["timestamp"])



    new_data = mock_new_data_generator(10);
    for (let i = 0; i < buffer.length; i++) {
        for (let j = 0; j < new_data.length; j++) {
            if(buffer[i]["timestamp"] === new_data[j]["timestamp"]) {
                new_entries = j-i;
            } 
        }
    }
// console.log(new_entries)


    for (let x = new_entries-1; x >= 0; x--) {
        // buffer[new_data[x]]
            buffer[x] = new_data[x]
        // console.log(new_data[x])
        // console.log(buffer)
    //     buffer.pop();
    //     buffer[x] = new_data[x]
    //     // console.log(new_entries)
    //     // console.log(buffer)
    }
    // console.log(buffer)
        // console.log(buffer)
        // console.log(new_data)


        console.log('newly added', buffer[0]["timestamp"])
        console.log('newly added', buffer[1]["timestamp"])
        console.log('newly added', buffer[2]["timestamp"])

        console.log('updating forse', new_data[0]["timestamp"])
        console.log('updating forse', new_data[1]["timestamp"])
        console.log('updating forse', new_data[2]["timestamp"])
}






var data_streaming = setInterval(data_stream_update, 1000)

// For development
setTimeout(() => {
    clearInterval(data_streaming);
}, 7000);



var data_stream = '';

export default data_stream;