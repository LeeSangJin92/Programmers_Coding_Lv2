const solution = (users, emoticons) => {

    // 이모티콘 할인 조정 범위
    let userDCs = users.map(data=>data[0]);
    let minDC = Math.min(...userDCs);
    let maxDC = Math.max(...userDCs);

    // 유저 구매 금액 리스트
    let userPays = users.map(data=>data[1]);

    // 반환 데이터
    let [user, money] = [0,0];

    // 할인율에 따른 계산
    let pointDC = minDC;
    while(pointDC<=maxDC){





    }

}

// console.log(solution([[40, 10000], [25, 10000]], [7000, 9000]));
console.log(solution([[40, 2900], [23, 10000], [11, 5200], [5, 5900], [40, 3100], [27, 9200], [32, 6900]],
                     [1300, 1500, 1600, 4900]));