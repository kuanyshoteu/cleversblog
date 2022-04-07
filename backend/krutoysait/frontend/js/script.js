

function register(){
	username = document.getElementById('username').value
	mail = document.getElementById('emailAddress').value
	password1 = document.getElementById('password').value
	password2 = document.getElementById('passwordConfirmation').value
	if(password1 == password2){
		csrf = document.getElementsByName("csrfmiddlewaretoken")[0].getAttribute("value")
		data = new FormData() // JSON
		data.append('csrfmiddlewaretoken', csrf)
		data.append('username', username)
		data.append('mail', mail)
		data.append('password1', password1)
		data.append('password2', password2)
		fetch('/api/sign_in/', {
			method: 'POST',
			body: data
		})	
	}
}
	
	

function sendMessage(){
    response = fetch("/api/privet/");
	console.log(response)
}


b = a()
function a(){
	return 5
}










postnum = 0
async function createPost(){
	origPost = document.getElementById("origPost")
	clonePost = origPost.cloneNode(true)
	clonePost.setAttribute('id', 'post' + postnum)
	postText = clonePost.getElementsByClassName("postText")[0]
	textareaPost = document.getElementById("textareaPost")
	// Меняем текст
	newtext = textareaPost.value
	postText.innerHTML = newtext
	// Меняем айди
	img1 = clonePost.getElementsByClassName('kvadrat')[0]
	img2 = clonePost.getElementsByClassName('kvadrat2')[0]
	img1.setAttribute("id", "img_" + postnum)
	img2.setAttribute("id", "img2_" + postnum)
	likeButton = clonePost.getElementsByClassName('likeButton')[0]
	likeButton.setAttribute("onclick", 'like('+ postnum + ')')
	var lft = screen.width/3 //За левую координату
	img1.style.left = 0 + "px";
	img2.style.left = lft + "px";

	rghtButton = clonePost.getElementsByClassName("btn-right")[0]
	rghtButton.setAttribute("onclick", "moveCaruselRight(" + postnum + ")")
	
	commentBox = clonePost.getElementsByClassName('commentBox')[0]
	commentBox.setAttribute("id", "commentBox" + postnum)
	commentTextarea = clonePost.getElementsByClassName('commentTextarea')[0]
	commentTextarea.setAttribute("id", "commentTextarea" + postnum)
	commentButton = clonePost.getElementsByClassName('commentButton')[0]
	commentButton.setAttribute("onclick", "comment(" + postnum + ")")
	postnum += 1
	postBox = document.getElementById("postBox")
	postBox.prepend(clonePost)

	csrf = document.getElementsByName("csrfmiddlewaretoken")[0].getAttribute("value")
	data = new FormData() // JSON
	
	data.append('csrfmiddlewaretoken', csrf)
	data.append('text', newtext)
	a = await fetch('/api/create_post/', {
		method: 'POST',
		body: data
	})	
	data = await a.json()
	ok = data.ok
	if(ok == true){
		alert("Kruto")
	}
	console.log(ok)
}
async function like(postnum){
	csrf = document.getElementsByName("csrfmiddlewaretoken")[0].getAttribute("value")
	data = new FormData() // JSON
	
	data.append('csrfmiddlewaretoken', csrf)
	data.append('id', postnum + 1)
	a = await fetch('/api/like/', {
		method: 'POST',
		body: data
	})	
	data = await a.json()
}
function comment(id){
    orig = document.getElementById("origComment")
    clone = orig.cloneNode(true)
    box = document.getElementById("commentBox"+id)
    box.appendChild(clone)
    clone.getElementsByClassName('comment-div')[0].innerHTML = document.getElementById('commentTextarea' + id).value
}




// КНопки и движения картин
function moveRight(img, lft, endCoord){
	// Что здесь Происходит?
	lft += 5;
	// Что здесь Происходит?
	img.style.left = lft + "px";
	// Что здесь Происходит?
	if (lft < endCoord) {
		// Что здесь Происходит?
		setTimeout(moveRight, 2, img, lft, endCoord)
	}
}
function moveCaruselRight(id){
	// Что здесь Происходит?
	img = document.getElementById('img_' + id)
	// Что здесь Происходит?
	img2 = document.getElementById('img2_' + id)
	// Что здесь Происходит?
	moveRight(img, 0, screen.width/3 - 10)
	// Что здесь Происходит?
	moveRight(img2, screen.width/3 - 10, screen.width*2/3 - 10)
}

lft_btn_right = screen.width*2/3 - 50
topp_btn_right = 200
btn_right = document.getElementById('btn-right')//Находим сам див
btn_right.style.left = lft_btn_right + "px"
btn_right.style.top = topp_btn_right + "px"

lft_btn_left = screen.width*1/3 
topp_btn_left = 200
btn_right = document.getElementById('btn-left')//Находим сам див
btn_right.style.left = lft_btn_left + "px"
btn_right.style.top = topp_btn_left + "px"
