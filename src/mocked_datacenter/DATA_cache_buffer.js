import calculate_time from './generate_timestamp';
let initial_time = new Date();
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
            process_age[i][j] = calculate_time(initial_time, getRandomInt(35, 3600));
        }
    }
})()


function mockDataExample() {
    this.timestamp = null;
    this.machines = [
        {
            "machine_name": "Threadripper 3990X",
            "machine_ip": "0001:0001:0001:0001:0001:0001:0001:0001",
            "cpu_core_nr": 32,
            "ram_max_size": 32000000000,
            "processes": [
                {
                    "process_name": "chrome.exe",
                    "display_name": "Chrome",
                    "exe_age": process_age,
                    "cpu_usage": 7,
                    "memory_usage": 10000000000
                },
                {
                    "process_name": "explorer.exe",
                    "display_name": "Explorer",
                    "exe_age":  process_age,
                    "cpu_usage": 1,
                    "memory_usage": 10000000
                },
                {
                    "process_name": "node-js.exe",
                    "display_name": "NodeJS",
                    "exe_age":  process_age,
                    "cpu_usage": 30,
                    "memory_usage": 120000000
                },
                {
                    "process_name": "bitdefender.exe",
                    "display_name": "Bitdefender",
                    "exe_age":  process_age,
                    "cpu_usage": 1,
                    "memory_usage": 250000000
                },
                {
                    "process_name": "steam_client.exe",
                    "display_name": "Steam",
                    "exe_age":  process_age,
                    "cpu_usage": 30,
                    "memory_usage": 500000000
                },
                {
                    "process_name": "spotify_client.exe",
                    "display_name": "Spotify",
                    "exe_age":  process_age,
                    "cpu_usage": 5,
                    "memory_usage": 100000000
                }
            ]
        },
        {
            "machine_name": "Pixel-Cruncher_V2",
            "machine_ip": "0002:0002:0002:0002:0002:0002:0002:0002",
            "cpu_core_nr": 16,
            "ram_max_size": 16000000000,
            "processes": [
                {
                    "process_name": "chrome.exe",
                    "display_name": "Chrome",
                    "exe_age":  process_age,
                    "cpu_usage": 7,
                    "memory_usage": 10000000000
                },
                {
                    "process_name": "explorer.exe",
                    "display_name": "Explorer",
                    "exe_age":  process_age,
                    "cpu_usage": 1,
                    "memory_usage": 10000000
                },
                {
                    "process_name": "node-js.exe",
                    "display_name": "NodeJS",
                    "exe_age":  process_age,
                    "cpu_usage": 30,
                    "memory_usage": 120000000
                },
                {
                    "process_name": "bitdefender.exe",
                    "display_name": "Bitdefender",
                    "exe_age":  process_age,
                    "cpu_usage": 1,
                    "memory_usage": 250000000
                },
                {
                    "process_name": "steam_client.exe",
                    "display_name": "Steam",
                    "exe_age":  process_age,
                    "cpu_usage": 30,
                    "memory_usage": 500000000
                },
                {
                    "process_name": "spotify_client.exe",
                    "display_name": "Spotify",
                    "exe_age":  process_age,
                    "cpu_usage": 5,
                    "memory_usage": 100000000
                }
            ]
        },
        {
            "machine_name": "Pixel-Cruncher_V3",
            "machine_ip": "0003:0003:0003:0003:0003:0003:0003:0003",
            "cpu_core_nr": 8,
            "ram_max_size": 8000000000,
            "processes": [
                {
                    "process_name": "chrome.exe",
                    "display_name": "Chrome",
                    "exe_age":  process_age,
                    "cpu_usage": 7,
                    "memory_usage": 10000000000
                },
                {
                    "process_name": "explorer.exe",
                    "display_name": "Explorer",
                    "exe_age":  process_age,
                    "cpu_usage": 1,
                    "memory_usage": 10000000
                },
                {
                    "process_name": "node-js.exe",
                    "display_name": "NodeJS",
                    "exe_age":  process_age,
                    "cpu_usage": 30,
                    "memory_usage": 120000000
                },
                {
                    "process_name": "bitdefender.exe",
                    "display_name": "Bitdefender",
                    "exe_age":  process_age,
                    "cpu_usage": 1,
                    "memory_usage": 250000000
                },
                {
                    "process_name": "steam_client.exe",
                    "display_name": "Steam",
                    "exe_age":  process_age,
                    "cpu_usage": 30,
                    "memory_usage": 500000000
                },
                {
                    "process_name": "spotify_client.exe",
                    "display_name": "Spotify",
                    "exe_age":  process_age,
                    "cpu_usage": 5,
                    "memory_usage": 100000000
                }
            ]
        },
        {
            "machine_name": "Pixel-Cruncher_V4",
            "machine_ip": "0004:0004:0004:0004:0004:0004:0004:0004",
            "cpu_core_nr": 8,
            "ram_max_size": 8000000000,
            "processes": [
                {
                    "process_name": "chrome.exe",
                    "display_name": "Chrome",
                    "exe_age":  process_age,
                    "cpu_usage": 7,
                    "memory_usage": 10000000000
                },
                {
                    "process_name": "explorer.exe",
                    "display_name": "Explorer",
                    "exe_age":  process_age,
                    "cpu_usage": 1,
                    "memory_usage": 10000000
                },
                {
                    "process_name": "node-js.exe",
                    "display_name": "NodeJS",
                    "exe_age":  process_age,
                    "cpu_usage": 30,
                    "memory_usage": 120000000
                },
                {
                    "process_name": "bitdefender.exe",
                    "display_name": "Bitdefender",
                    "exe_age":  process_age,
                    "cpu_usage": 1,
                    "memory_usage": 250000000
                },
                {
                    "process_name": "steam_client.exe",
                    "display_name": "Steam",
                    "exe_age":  process_age,
                    "cpu_usage": 30,
                    "memory_usage": 500000000
                },
                {
                    "process_name": "spotify_client.exe",
                    "display_name": "Spotify",
                    "exe_age":  process_age,
                    "cpu_usage": 5,
                    "memory_usage": 100000000
                }
            ]
        },
        {
            "machine_name": "Pixel-Cruncher_V5",
            "machine_ip": "0005:0005:0005:0005:0005:0005:0005:0005",
            "cpu_core_nr": 8,
            "ram_max_size": 8000000000,
            "processes": [
                {
                    "process_name": "chrome.exe",
                    "display_name": "Chrome",
                    "exe_age":  process_age,
                    "cpu_usage": 7,
                    "memory_usage": 10000000000
                },
                {
                    "process_name": "explorer.exe",
                    "display_name": "Explorer",
                    "exe_age":  process_age,
                    "cpu_usage": 1,
                    "memory_usage": 10000000
                },
                {
                    "process_name": "node-js.exe",
                    "display_name": "NodeJS",
                    "exe_age":  process_age,
                    "cpu_usage": 30,
                    "memory_usage": 120000000
                },
                {
                    "process_name": "bitdefender.exe",
                    "display_name": "Bitdefender",
                    "exe_age":  process_age,
                    "cpu_usage": 1,
                    "memory_usage": 250000000
                },
                {
                    "process_name": "steam_client.exe",
                    "display_name": "Steam",
                    "exe_age":  process_age,
                    "cpu_usage": 30,
                    "memory_usage": 500000000
                },
                {
                    "process_name": "spotify_client.exe",
                    "display_name": "Spotify",
                    "exe_age":  process_age,
                    "cpu_usage": 5,
                    "memory_usage": 100000000
                }
            ]
        }
    ];
}


export default mockDataExample;