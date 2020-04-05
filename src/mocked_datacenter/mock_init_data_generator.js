import calculate_time from './generate_timestamp';

let process_age = [];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
(function generateAge() {
    for (let i = 0; i < 10; i++) {
        process_age[i] = []
        for (let j = 0; j < 10; j++) {
            process_age[i][j] = getRandomInt(35, 3600);
        }
    }
})()


function secondGenerator(data) {
    this.generate = (history_length) => {
        let initial_time = new Date();
        let result = [];
        for (let i = 0; i < history_length; i++) {
            let second = {
                'timestamp': calculate_time(initial_time, i),
                'machines': []
            }

            for (let j = 0; j < data['machines'].length; j++) {
                second['machines'][j] = {};
                second['machines'][j]['machine_name'] = data['machines'][j]['machine_name']
                second['machines'][j]['machine_ip'] = data['machines'][j]['machine_ip']
                second['machines'][j]['cpu_core_nr'] = data['machines'][j]['cpu_core_nr']
                second['machines'][j]['ram_max_size'] = data['machines'][j]['ram_max_size']
                second['machines'][j]['processes'] = [];

                for (let k = 0; k < data['machines'][j]['processes'].length; k++) {
                    second['machines'][j]['processes'].push({
                        'process_name': data['machines'][j]['processes'][k]['process_name'],
                        'display_name': data['machines'][j]['processes'][k]['display_name'],
                        // 'exe_age': calculate_time(initial_time, process_age[j][k]),
                        'exe_age': data['machines'][j]['processes'][k]['exe_age'][j][k],
                        'cpu_usage': getRandomInt(0, 100 / data['machines'][j]['processes'].length),
                        'memory_usage': getRandomInt(0, data['machines'][j]["ram_max_size"] / data['machines'][j]["processes"].length)
                        // 'memory_usage': 300000000 * j
                    })
                }
            }
            result.push(second)
        }
        return result
    };
}

export default secondGenerator;