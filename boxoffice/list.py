from django.shortcuts import render
import requests
import json


# def get_movieInfo(request, movieNm):
#     movieNm = '블랙 팬서'
    url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=cdf22d2649b0a1d669e81243e41dcb4d&movieNm=FBI'
    res = requests.get(url)
    text = res.text
    # print(text)

    d = json.loads(text)

    movieList = d['movieListResult']['movieList']['movie']

    print(movieList['movieNmEn'],
    movieList['prdtYear'],
    movieList['nationAlt'],
    movieList['genreAlt'],
    d['movieListResult']['movieList']['directors']))