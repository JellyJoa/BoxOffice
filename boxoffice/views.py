from django.shortcuts import render
import requests
import json


def get_movieInfo(request, movieCd):
    url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=cdf22d2649b0a1d669e81243e41dcb4d&movieCd='+str(movieCd)
    res = requests.get(url)
    text = res.text

    d = json.loads(text)

    movieInfo = d['movieInfoResult']['movieInfo']
    movieNm = d['movieInfoResult']['movieInfo']['movieNm']
    movieNmEn = d['movieInfoResult']['movieInfo']['movieNmEn']
    openDt = d['movieInfoResult']['movieInfo']['openDt']
    # nation = d['movieInfoResult']['movieInfo']['nations']['nation']['nationNm']
    # genre1 = d['movieInfoResult']['movieInfo']['genres'][1]['genreNm']
    # genre2 = movieInfo['genres'][2]['genreNm']

    context = {
        'movieNm': movieNm,
        'movieNmEn': movieNmEn,
        'openDt': openDt,
        # 'nation': nation,
        # 'genre1': genre1,

    }



    return render(request, 'detail.html', context)
