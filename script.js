document.getElementById('app').innerHTML = 'Hi from script';


fetch('https://randomuser.me/api/?results=10')
	.then(data => data.json())
	.then((data) => {
		console.log(data.results)
		var friends = "<div>";

		data.results.map((friend) => {
			console.log(friend)
			friends+= `<div class="myfriends"><img src=${friend.picture.large} /><br />`;
			friends+= `<p>${friend.name.first[0].toUpperCase()}${friend.name.first.slice(1)} ${friend.name.last[0].toUpperCase()}${friend.name.last.slice(1)}</p></div>`
		});

		friends+= '</div>'
		document.getElementById('app').innerHTML = friends;
	})
	.catch((err) => {
		console.log(err)
	})

