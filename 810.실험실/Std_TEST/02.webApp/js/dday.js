function dayCount() {
    const remainDate = document.querySelectorAll(".value_day"); 
    const remainHour = document.querySelectorAll(".value_hour"); 
    const remainMinute = document.querySelectorAll(".value_min"); 
    const remainSecond = document.querySelectorAll(".value_sec"); 

    const today = new Date();
    const dday = new Date(2023, 4, 21);
    const timeGap = dday.getTime() - today.getTime();

    // 남은 일수 카운트
    const remainTime = Math.ceil(timeGap / (1000 * 60 * 60 * 24));

    // 남은 시간 카운트
    const seconds = String(Math.floor(timeGap / 1000) % 60).padStart(2,'0'); // 초 단위 변환
    const minutes = String(Math.floor(timeGap / (1000 * 60)) % 60).padStart(2,'0'); // 분 단위 변환
    const hours = String(Math.floor(timeGap / (1000 * 60 * 60)) % 24).padStart(2,'0'); // 시 단위 변환

    if (timeGap <= 0) {
        clearInterval(countdownInterval);
    }
    
    remainDate.forEach(ele => ele.innerText = remainTime);
    remainHour.forEach(ele => ele.innerText = hours);
    remainMinute.forEach(ele => ele.innerText = minutes);
    remainSecond.forEach(ele => ele.innerText = seconds);
}

// 1초마다 업데이트
let countdownInterval = setInterval(dayCount, 1000);
