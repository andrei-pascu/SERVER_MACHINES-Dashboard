// import mock_init_data_generator from '../mocked_datacenter/mock_init_data_generator';
// import mock_new_data_generator from '../mocked_datacenter/mock_new_data_generator';


// // var init_data = mock_init_data_generator(30);
// // var init_data = mock_init_data_generator(30);
// // console.log(init_data)
// var buffer = init_data;
// //  new_data;

// function NewDataConstruct(data) {
//     this.data = data;
// }

// var new_entries = 0;
// var test_arr = [];
//     //_________________PARE OK
//     // console.log('__________INIT_______buffer', buffer)

// function data_stream_update() {
//     //_________________PARE OK
//     // console.log('_________________buffer', buffer)
        
//     if (new_entries === 1) {
        
//         // var generated_data = mock_new_data_generator(1);

//         // var new_data = generated_data.map(x=>x)
//         var new_data = Object.create(mock_new_data_generator(1));

//         // var new_data_2 = new NewDataConstruct(mock_new_data_generator(1)[0]);

//         // console.log(new_data)
//         //_________________PARE OK , 1 cate 1
//         // console.log('BBBBBBBBBBBBBBBBBB', new_data[0]['machines'][0]['processes'][0]['cpu_usage'])
//         // console.log('BBBBBBBBBBBBBBBBBB', new_data[1]['machines'][0]['processes'][0]['cpu_usage'])
//         // console.log('BBBBBBBBBBBBBBBBBB', new_data[2]['machines'][0]['processes'][0]['cpu_usage'])

//         for (let i = 0; i < buffer.length; i++) {
//             for (let j = 0; j < new_data.length; j++) {
//                 if(buffer[i]["timestamp"] === new_data[j]["timestamp"]) {
//                     new_entries = j-i;
//                 } 
//             }
//         }
//         for (let k = new_entries -1; k >= 0; k--) {
//             for (let i = 0; i < new_data[k]['machines'][0]['processes'].length; i++) {
//                 new_data[k]['machines'][0]['processes'][i]['cpu_usage'] = parseInt(Math.random()*10)
//                 // console.log(i + '__________' + new_data[k]['machines'][0]['processes'][i]['cpu_usage'])
//             }
//             // la fiecare unshift trebuie sa fie o alta instanta, pentru ca acum e o referinta doar, daia tot se update aiurea dupaia, same reff
//             buffer.unshift(new_data[k])
//             buffer.pop();
//             // console.log(buffer[0]['machines'][0]['processes'][0]['cpu_usage'])
//             // console.log(buffer[1]['machines'][0]['processes'][0]['cpu_usage'])
//             // console.log(buffer[2]['machines'][0]['processes'][0]['cpu_usage'])
//         }
//         // console.log(buffer)

//         // for (let k = new_entries -1; k >= 0; k--) {
//         // }
//         // test_arr.unshift(new_data_2['data'])
//         // if (test_arr.length > 5) {
//         //     console.log(test_arr[0]['machines'][0]['processes'][0]['cpu_usage'])
//         //     console.log(test_arr[1]['machines'][0]['processes'][0]['cpu_usage'])
//         //     console.log(test_arr[2]['machines'][0]['processes'][0]['cpu_usage'])
//         //     console.log(test_arr[3]['machines'][0]['processes'][0]['cpu_usage'])
//         //     console.log(test_arr[4]['machines'][0]['processes'][0]['cpu_usage'])
//         // }
//         // console.log(test_arr)

//         // function arrayFunction(value, oldArray) {
//         //     var newArray = [];
//         //     newArray = buffer;
//         //     // newArray.push(buffer);
//         //     // console.log(newArray)
            
//         //     newArray.unshift(new_data[0])
//         //     newArray.pop();
          
//         //     return newArray;
//         //   }
//         //   arrayFunction()


//         //   console.log(arrayFunction()[0]['machines'][0]['processes'][0]['cpu_usage'])
//         //   console.log(arrayFunction()[1]['machines'][0]['processes'][0]['cpu_usage'])
//         //   console.log(arrayFunction()[2]['machines'][0]['processes'][0]['cpu_usage'])
//         //   console.log(arrayFunction()[3]['machines'][0]['processes'][0]['cpu_usage'])
//         //   console.log(arrayFunction()[4]['machines'][0]['processes'][0]['cpu_usage'])
//         //   console.log(arrayFunction())



//         // console.log('BBBBBBBBBBBBBBBBBB', mock_new_data_generator(1)['machines'][0]['processes'][0]['cpu_usage'])
//         //   buffer.unshift(new_data[0])
//         //   buffer.pop();
//         //   buffer.unshift(mock_new_data_generator(1))
//         //   buffer.pop();
//     }
//     // console.log('3333333333333333333333', buffer[0])
//     // console.log('3333333333333333333333', buffer[1])
//     // console.log('000000', buffer[0]['machines'][0]['processes'][0]['cpu_usage'])
//     // console.log('111111111', buffer[1]['machines'][0]['processes'][0]['cpu_usage'])
//     // console.log('22222222222', buffer[2]['machines'][0]['processes'][0]['cpu_usage'])
//     // console.log('33333333333333', buffer[3]['machines'][0]['processes'][0]['cpu_usage'])
//     // console.log('44444444444444444', buffer[2]['machines'][0]['processes'][0]['cpu_usage'])
    

//     new_entries = 1;
//     var data = new NewDataConstruct(buffer);
//     // console.log('3333333333333333333333', data['data'][3]['machines'][0]['processes'][0]['cpu_usage'])
//     return data;

// }

// export default data_stream_update;