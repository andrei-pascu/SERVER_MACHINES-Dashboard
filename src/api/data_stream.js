import mock_init_data_generator from '../mocked_datacenter/mock_init_data_generator';
import mock_new_data_generator from '../mocked_datacenter/mock_new_data_generator';


var init_data = mock_init_data_generator(30);
var buffer = init_data;
var new_data;

function NewDataConstruct(data) {
    this.data = data;
}

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
        for (let k = new_entries -1; k >= 0; k--) {
            buffer.unshift(new_data[k])
            buffer.pop();
        }

    console.log('called')
    var data = new NewDataConstruct(buffer);
    return data;

}

export default data_stream_update;