import pandas as pd
from bs4 import BeautifulSoup
import requests

page=1
movie_list = {}

movieCdlist = []
movieNmlist = []
movieNmEnlist = []
prdtYearlist = []
typeNmlist = []
nationAltlist = []
genreAltlist = []

while page <= 10000:
    url='http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.xml?key=cdf22d2649b0a1d669e81243e41dcb4d&curPage='+str(page)
    req = requests.get(url)
    html = req.text
    soup = BeautifulSoup(html, 'html.parser')

    movieCd = soup.find_all('moviecd')
    movieNm = soup.find_all('movienm')
    movieNmEn = soup.find_all('movienmen')
    prdtYear = soup.find_all('prdtyear')
    typeNm = soup.find_all('typenm')
    nationAlt = soup.find_all('nationalt')
    genreAlt = soup.find_all('genrealt')

    for code in movieCd:
       movieCdlist.append(code.text)
    for code in movieNm:
        movieNmlist.append(code.text)
    for code in movieNmEn:
        movieNmEnlist.append(code.text)
    for code in prdtYear:
        prdtYearlist.append(code.text)
    for code in typeNm:
        typeNmlist.append(code.text)
    for code in nationAlt:
        nationAltlist.append(code.text)
    for code in genreAlt:
        genreAltlist.append(code.text)

    page += 1



movie_list['영화코드'] = movieCdlist
movie_list['영화제목(한글)'] = movieNmlist
movie_list['영화제목(영어)'] = movieNmEnlist
movie_list['개봉연도'] = prdtYearlist
movie_list['type'] = typeNmlist
movie_list['국가'] = nationAltlist
movie_list['장르'] = genreAltlist

df = pd.DataFrame(movie_list)
df.to_csv("./movieList.csv", encoding='cp949')
