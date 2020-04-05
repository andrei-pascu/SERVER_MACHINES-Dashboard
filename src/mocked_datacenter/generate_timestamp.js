function calculate_time(current_time, offset) {
    (offset) ? offset = offset : offset = 0;
    var current_time = current_time.getTime();


    current_time = current_time - offset * 1000;
    var seconds = parseInt((current_time / 1000) % 60)
    var minutes = parseInt((current_time / (1000 * 60)) % 60)
    var hours = parseInt((current_time / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
}

export default calculate_time;