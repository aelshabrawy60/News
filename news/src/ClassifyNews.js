


export const ClassifyNews = (news_list = []) => {
    var news = []
    var music = []
    var tech = []
    var politics =[]
    var sport = []

    for(let i =0; i< news_list.length; i++){
        if(news_list[i].topic == 'news'){
            news.push(news_list[i])
        }else if(news_list[i].topic == 'music'){
            music.push(news_list[i])
        }else if(news_list[i].topic == 'tech'){
            tech.push(news_list[i])
        }else if(news_list[i].topic == 'politics'){
            politics.push(news_list[i])
        }else if(news_list[i].topic == 'sport'){
            sport.push(news_list[i])
        }else{
            news.push(news_list[i])
        }
    }
    console.log(news)
    return {news : news, music : music, tech : tech, politics : politics,sport: sport}
}