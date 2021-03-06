function boxoffice_daily() {
    let my_date = $('#searchDate').val()

    if (my_date == ""){
        alert('날짜를 선택해 주세요!')
    }

    else{

        let modified_date = my_date.replace(/-/g, '')

        $.ajax({
            async : true,
            url: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
            data : {
                key : 'cdf22d2649b0a1d669e81243e41dcb4d',
                targetDt : modified_date
            },
            method : 'GET',
            timeout : 3000,
            dataType : 'json',
            success : function(result) {
                $('tbody').empty()

                // <th scope="col">Rank</th>
                // <th scope="col">포스터 이미지</th>
                // <th scope="col">영화제목</th>
                // <th scope="col">개봉일</th>
                // <th scope="col">상세보기</th>

                for(i=0;i<10;i++) {
                    let tr = $('<tr></tr>')
                    let rankTd = $('<td></td>').text(result['boxOfficeResult']['dailyBoxOfficeList'][i]['rank'])
                    let imgTd = $('<td></td>>')
                    let searchTitle = result['boxOfficeResult']['dailyBoxOfficeList'][i]['movieNm'] + " 포스터 사진"
                    let movieCode = result['boxOfficeResult']['dailyBoxOfficeList'][i]['movieCd']
                    let img = $('<img />')
                    imgTd.append(img)
                    $.ajax({
                        async: true,
                        url: 'https://dapi.kakao.com/v2/search/image',
                        method: 'GET',
                        headers: {
                            Authorization: "KakaoAK " + 'cf0517506a09c39e970bb3cef7b670f9'
                        },
                        data: {
                            query: searchTitle
                        },
                        timeout: 4000,
                        dataType: 'json',
                        success: function(result) {
                            $('#myDiv').empty()
                            let imgUrl = result['documents'][0]['thumbnail_url']
                            img.attr('src',imgUrl)
                        },
                        error: function() {
                            alert('Error')
                        }
                    })
                    let titleTd = $('<td></td>').text(result['boxOfficeResult']['dailyBoxOfficeList'][i]['movieNm'])
                    let openTd = $('<td></td>').text(result['boxOfficeResult']['dailyBoxOfficeList'][i]['openDt'])
                    let detailTd = $('<td></td>')
                    let detailBtn = $('<input/>').attr('type','button').attr('value','상세보기')

                    detailBtn.addClass('btn btn-warning')
                    detailBtn.on('click',function(){
                        document.location.href='/movie/' + movieCode + '/detail/'
                    })

                    detailTd.append(detailBtn)
                    tr.append(rankTd)
                    tr.append(imgTd)
                    tr.append(titleTd)
                    tr.append(openTd)
                    tr.append(detailBtn)
                    $('tbody').append(tr)
                }

            },
            error : function (){
                alert('Error')
            }

        });
    }
}

function boxoffice_weekly(){
    let my_date = $('#searchDate').val()

    if (my_date == ""){
        alert('검색을 위해 날짜를 선택해 주세요!')
    }
    else{

        let modified_date = my_date.replace(/-/g, '')

        $.ajax({
            async : true,
            url: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json',
            data : {
                key : 'cdf22d2649b0a1d669e81243e41dcb4d',
                targetDt : modified_date
            },
            method : 'GET',
            timeout : 3000,
            dataType : 'json',
            success : function(result) {
                $('tbody').empty()

                for(i=0;i<10;i++) {
                    let tr = $('<tr></tr>')
                    let rankTd = $('<td></td>').text(result['boxOfficeResult']['weeklyBoxOfficeList'][i]['rank'])
                    let imgTd = $('<td></td>>')
                    let searchTitle = result['boxOfficeResult']['weeklyBoxOfficeList'][i]['movieNm'] + " 포스터"
                    let movieCode = result['boxOfficeResult']['weeklyBoxOfficeList'][i]['movieCd']
                    let img = $('<img />')
                    imgTd.append(img)
                    $.ajax({
                        async: true,
                        url: 'https://dapi.kakao.com/v2/search/image',
                        method: 'GET',
                        headers: {
                            Authorization: "KakaoAK " + 'cf0517506a09c39e970bb3cef7b670f9'
                        },
                        data: {
                            query: searchTitle
                        },
                        timeout: 4000,
                        dataType: 'json',
                        success: function(result) {
                            $('#myDiv').empty()
                            let imgUrl = result['documents'][0]['thumbnail_url']
                            img.attr('src',imgUrl)
                        },
                        error: function() {
                            alert('Error')
                        }
                    })
                    let titleTd = $('<td></td>').text(result['boxOfficeResult']['weeklyBoxOfficeList'][i]['movieNm'])
                    let openTd = $('<td></td>').text(result['boxOfficeResult']['weeklyBoxOfficeList'][i]['openDt'])
                    let detailTd = $('<td></td>')
                    let detailBtn = $('<input/>').attr('type','button').attr('value','상세보기')

                    detailBtn.addClass('btn btn-warning')
                    detailBtn.on('click',function(){
                        document.location.href='/movie/' + movieCode + '/detail/'
                    })

                    detailTd.append(detailBtn)
                    tr.append(rankTd)
                    tr.append(imgTd)
                    tr.append(titleTd)
                    tr.append(openTd)
                    tr.append(detailBtn)
                    $('tbody').append(tr)

                }
            },
            error : function (){
                alert('Error')
            }

        });
    }
}

function search_mlist() {
    let search_movie = $('#searchMovie').val()

    if (search_movie == ""){
        alert('검색어를 입력해주세요!')
    }
    else{
        $.ajax({
            async : true,
            url: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json',
            data : {
                key : 'cdf22d2649b0a1d669e81243e41dcb4d',
                movieNm : search_movie
            },
            method : 'GET',
            timeout : 3000,
            dataType : 'json',
            success : function(result) {
                $('tbody').empty()

                for(i=0;i<10;i++) {
                    let tr = $('<tr></tr>')
                    let titleTd = $('<td></td>').text(result['movieListResult']['movieList'][i]['movieNm'])
                    let imgTd = $('<td></td>>')
                    let searchTitle = result['movieListResult']['movieList'][i]['movieNm'] + " 포스터"
                    let movieCode = result['movieListResult']['movieList'][i]['movieCd']
                    let img = $('<img />')
                    imgTd.append(img)
                    $.ajax({
                        async: true,
                        url: 'https://dapi.kakao.com/v2/search/image',
                        method: 'GET',
                        headers: {
                            Authorization: "KakaoAK " + 'cf0517506a09c39e970bb3cef7b670f9'
                        },
                        data: {
                            query: searchTitle
                        },
                        timeout: 4000,
                        dataType: 'json',
                        success: function(result) {
                            $('#myDiv').empty()
                            let imgUrl = result['documents'][0]['thumbnail_url']
                            img.attr('src',imgUrl)
                        },
                        error: function() {
                            alert('Error')
                        }
                    })
                    let openTd = $('<td></td>').text(result['movieListResult']['movieList'][i]['openDt'])
                    let genreTd = $('<td></td>').text(result['movieListResult']['movieList'][i]['genreAlt'])
                    let detailTd = $('<td></td>')
                    let detailBtn = $('<input/>').attr('type','button').attr('value','상세보기')

                    detailBtn.addClass('btn btn-warning')
                    detailBtn.on('click',function(){
                        document.location.href='/movie/' + movieCode + '/detail/'
                    })

                    detailTd.append(detailBtn)
                    tr.append(imgTd)
                    tr.append(titleTd)
                    tr.append(openTd)
                    tr.append(genreTd)
                    tr.append(detailTd)
                    tr.append(detailBtn)
                    $('tbody').append(tr)

                }
            },
            error : function (){
                alert('Error')
            }

        });
    }



    // let search_movie = $('#searchMovie').val()
    //
    // if (search_movie == "") {
    //     alert('검색어를 입력해주세요!')
    // }
    //
    // else {
    //
    //     alert(search_movie)
    //
    //     $.ajax({
    //         async: true,
    //         url: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json',
    //         data: {
    //             key: '5b015a49a0f1ae63cd63b5a1ba139a86',
    //             movieNm: search_movie,
    //             movieCd: movieCode
    //         },
    //         method : 'GET',
    //         timeout: 3000,
    //         // 결과로 전달되는 JSON은 문자열. 이 문자열은 처리하기가 힘듦.
    //         // javascript 객체로 변환
    //         dataType: 'json',
    //         // 만약 성공하면 아래의 함수가 호출
    //         success : function(result) {
    //
    //             $('tbody').empty()
    //
    //             // <th scope="col">영화 제목</th>
    //             // <th scope="col">포스터 이미지</th>
    //             // <th scope="col">제작년도</th>
    //             // <th scope="col">장르</th>
    //             // <th scope="col">상세보기</th>
    //
    //             for (i = 0; i < 10; i++) {
    //                 let tr = $('<tr></tr>')
    //                 let titleTd = $('<td></td>>').text(result['movieListResult']['movieList'][i]['movieNm'])
    //                 let imgTd = $('<td></td>')
    //                 let searchTitle = result['movieListResult']['movieList'][i]['movieNm'] + " 영화 포스터"
    //                 let movieCode = result['movieListResult']['movieList'][i]['movieCd']
    //                 let img = $('<img />')
    //                 imgTd.append(img)
    //                 $.ajax({
    //                     async: true,
    //                     url: 'https://dapi.kakao.com/v2/search/image',
    //                     method: 'GET',
    //                     headers: {
    //                         Authorization: "KakaoAK " + 'cf0517506a09c39e970bb3cef7b670f9'
    //                     },
    //                     data: {
    //                         query: searchTitle
    //                     },
    //                     timeout: 4000,
    //                     dataType: 'json',
    //                     success: function (result) {
    //                         $('#myDiv').empty()
    //                         let imgUrl = result['documents'][0]['thumbnail_url']
    //                         img.attr('src', imgUrl)
    //                     },
    //                     error: function () {
    //                         alert('이상해요!')
    //                     }
    //                 })
    //
    //                 let openTd = $('<td></td>>').text(result['movieListResult']['movieList'][i]['openDt'])
    //                 let genreTd = $('<td></td>>').text(result['movieListResult']['movieList'][i]['genreAlt'])
    //                 let detailTd = $('<td></td>')
    //                 let detailBtn = $('<input/>').attr('type','button').text('상세보기')
    //                 detailBtn.addClass('btn btn-warning')
    //                 detailBtn.on('click', function () {
    //                     document.location.href = '/movie/' + movieCode + '/detail/'
    //
    //                     // $.ajax({
    //                     //     async: true,
    //                     //     url: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json',
    //                     //     type: GET,
    //                     //     data: {
    //                     //         key: '5b015a49a0f1ae63cd63b5a1ba139a86',
    //                     //         movieNm: search_movie,
    //                     //         movieCd: movieCode
    //                     //         // api에 넘겨야하는 데이터
    //                     //     },
    //                     //     dataType: 'json',
    //                     //     timeout: 3000,
    //                     //     success: function (result) {
    //                     //
    //                     //
    //                     //
    //                     //     },
    //                     //     error: function () {
    //                     //         alert('먼가 이상해요!')
    //                     //     }
    //                     // })
    //                 })
    //
    //                 detailTd.append(detailBtn)
    //
    //                 tr.append(imgTd)
    //                 tr.append(titleTd)
    //                 tr.append(openTd)
    //                 tr.append(genreTd)
    //                 tr.append(detailTd)
    //                 $('tbody').append(tr)
    //             }
    //             },
    //
    //         // 만약 호출에 실패하면 아래의 함수가 호출
    //         error: function () {
    //             alert('먼가 이상해요!!')
    //         }
    //     });
    // }
    }

