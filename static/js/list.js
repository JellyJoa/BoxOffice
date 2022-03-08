const Searching = Search.prototype;

function Search(){
	this.keywrod = document.querySelector('input[name="search"]');
	this.form = document.querySelector('#searchMovie');
}
Searching.Engine = function (){
	this.form.addEventListener('submit', e => {
		e.preventDefault();
		let keyword = this.keyword.value;
		location.href = '/movie/' + keyword + '/list/';

	})
}

new Search();