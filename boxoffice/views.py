from django.shortcuts import render
import requests
import json


def get_movieInfo(request, movieCd):
    url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=cdf22d2649b0a1d669e81243e41dcb4d&movieCd='+str(movieCd)
    res = requests.get(url)
    text = res.text

    d = json.loads(text)

    movieInfo = d['movieInfoResult']['movieInfo']
    movieNm = movieInfo['movieNm']
    movieNmEn = movieInfo['movieNmEn']
    openDt = movieInfo['openDt']
    nation = movieInfo['nations']
    genre = movieInfo['genres']
    showTm = movieInfo['showTm']
    director = movieInfo['directors']
    actor = movieInfo['actors']

    context = {
        'movieNm': movieNm,
        'movieNmEn': movieNmEn,
        'openDt': openDt,
        'nation': nation,
        'genre': genre,
        'showTm': showTm,
        'director': director,
        'actor': actor

    }


    return render(request, 'detail.html', context)
