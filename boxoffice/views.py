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


def get_movieList(request, movieNm):
    url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=cdf22d2649b0a1d669e81243e41dcb4d&movieNm=' + movieNm
    res = requests.get(url)
    text = res.text

    d = json.loads(text)

    movieList = d['movieListResult']['movieList']['movie']
    movieNmEn = movieList['movieNmEn']
    prdtYear = movieList['prdtYear']
    nation = movieList['nationAlt']
    genre = movieList['genreAlt']
    director = d['movieListResult']['movieList']['directors']

    context = {
        'movieNm': movieNm,
        'movieNmEn': movieNmEn,
        'prdtYear': prdtYear,
        'nation': nation,
        'genre': genre,
        'director': director

    }

    return render(request, 'list.html', context)