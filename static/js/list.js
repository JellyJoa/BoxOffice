public class movieDetail {
	public static void main(String[] args) {
		String key = "cdf22d2649b0a1d669e81243e41dcb4d";
		String result = "";
		
		try {
			String apiURL = "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key="
							+ key;
			URL url = new URL(apiURL);

			HttpURLConnection con = (HttpURLConnection)url.openConnection();

			con.setRequestMethod("POST");
			int responseCode = con.getResponseCode();

			BufferedReader bf;

			if(responseCode==200) {
				bf = new BufferedReader(new InputStreamReader(con.getInputStream()));

			} else {
				bf = new BufferedReader(new InputStreamReader(con.getErrorStream()));

			}

			result = bf.readLine();

			JSONParser jsonParser = new JSONParser();
			JSONObject jsonObject = (JSONObject)jsonParser.parse(result);
			JSONObject movieListResult = (JSONObject)jsonObject.get("movieListResult");
			JSONObject movieList = (JSONObject)moiveListResult..get("movieList");

			System.out.println("영화코드 : " + movieList.get("movieCd"))
			System.out.println("영화명(한글) : " + movieList.get("movieNm"))
			System.out.println("영화명(영어) : " + movieList.get("movieNmEn"))
			System.out.println("개봉연도 : " + movieList.get("prdtYear"))
			System.out.println("국가 : " + movieList.get("nationAlt"))
			System.out.println("장르 : " + movieList.get("genreAlt"))



		}catch(Exception e) {
			System.out.println(e);
		}


	}
}