import requests
import json

def get_movieInfo(movieCd):
    url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=cdf22d2649b0a1d669e81243e41dcb4d&movieCd='+str(movieCd)
    res = requests.get(url)
    text = res.text
    #print(text)

    d = json.loads(text)

    movieInfo = d['movieInfoResult']['movieInfo']

    return movieInfo

movieInfo = get_movieInfo(20170561)
print(movieInfo['movieCd'],
      movieInfo['movieNm'],
      movieInfo['showTm'],
      len(movieInfo['actors']),
      len(movieInfo['showTypes']))