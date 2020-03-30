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
    new_data = mock_new_data_generator(10);
    // tentative de dynamic stuff
    // gen unshift si pop cate sunt noi

    // for (let i = 0; i < buffer.length; i++) {
    //     for (let j = 0; j < new_data.length; j++) {
    //         if(buffer[i]["timestamp"] === new_data[j]["timestamp"]) {
    //             new_entries = j-i;
    //         } 
    //     }
    // }
    


    // buffer.unshift(new_data[1], new_data[0])
    // buffer = buffer.unshift()

        // ushift asta
        // nu mege ok, gen face
        // nd1, nd0, old, old, old, old
        // nd1, nd0, nd1, nd0, old, old
        // gen face update si la the last unshifts..
                // => cre ca e de la time function ala tho
                // pare ca face o referinta la functia aia in loc de fking una noua
            // buffer.unshift(new_data[1])
            // buffer.pop();
            // buffer.unshift(new_data[0])
            // buffer.pop();



        buffer.unshift(new_data[1]['timestamp'])
        buffer.pop();
        buffer.unshift(new_data[0]['timestamp'])
        buffer.pop();



        console.log('newly added', buffer)

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






var data_streaming = setInterval(data_stream_update, 2000)

// For development
setTimeout(() => {
    clearInterval(data_streaming);
}, 10000);



var data_stream = '';

export default data_stream;