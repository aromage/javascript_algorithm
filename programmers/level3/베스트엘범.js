function solution(genres, plays) {
    const answer = [];
    const genresPlay = new Map();
    const genresSong = new Map();
    
    //해시맵 생성
    genres.forEach((value, key) => {
        //장르 총 재생수 해시맵
        genresPlay.has(value)
        ? genresPlay.set(value, genresPlay.get(value) + plays[key])
        : genresPlay.set(value, plays[key]);
        //장르별 노래 해시맵
        genresSong.has(value)
        ? genresSong.get(value).push({
                id:key,
                playCount:plays[key],
        })
        : genresSong.set(value, [{
                id:key,
                playCount:plays[key]
        }])  

    })
    //총 재생수로 장르 정렬
    const sorted = new Map([...genresPlay].sort((a, b) => b[1]-a[1]))
    sorted.forEach((value, key) => {
        //장르별 노래 재생수 정렬, playCount가 같을 경우 id값이 작은 쪽으로 정렬
        const songs = 
              genresSong.get(key).sort((a, b) => {
                  return b['playCount'] === a['playCount']
                  ? a['id'] - b['id']
                  : b['playCount'] - a['playCount'];
              });
        //노래 2개 선택하기(1개 있을 경우 1개만 선택)
        answer.push(songs[0].id)
        if(songs.length > 1) answer.push(songs[1].id)
    })

    return answer;
}