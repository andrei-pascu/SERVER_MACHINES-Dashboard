import mock_init_data_generator from '../mocked_datacenter/mock_init_data_generator';
import mock_new_data_generator from '../mocked_datacenter/mock_new_data_generator';


var init_data = mock_init_data_generator(30);
var buffer = init_data;
var new_data;

var new_entries = 0;


function data_stream_update() {
    
    new_data = mock_new_data_generator(10);

    for (let i = 0; i < buffer.length; i++) {
        for (let j = 0; j < new_data.length; j++) {
            if(buffer[i]["timestamp"] === new_data[j]["timestamp"]) {
                new_entries = j-i;
            } 
        }
    }

    console.log(new_entries)
    for (let k = new_entries -1; k >= 0; k--) {

        buffer.unshift(new_data[k])
        buffer.pop();
    }
        console.log('_________________________________')
        console.log('newly added', buffer[0])
        console.log('newly added', buffer[1])
        console.log('newly added', buffer[2])
        console.log('newly added', buffer[3])
        console.log('newly added', buffer[4])
        console.log('newly added', buffer[5])
        console.log('newly added', buffer[6])
        console.log('newly added', buffer[7])
        console.log('newly added', buffer[8])
}






var data_streaming = setInterval(data_stream_update, 1000)

// For development
setTimeout(() => {
    clearInterval(data_streaming);
}, 10000);



var data_stream = '';

export default data_stream;