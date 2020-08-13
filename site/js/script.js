

function share_article(){
	var share_state = document.getElementById('share-state');
	var share_text = document.getElementById('share-text');
	if(share_state.classList.contains("active")){
		share_state.classList.remove("active");
		share_state.classList.add("inactive");
		share_text.style.display = "none";
		return false
	}
	else{
		share_state.classList.remove("inactive");
		share_state.classList.add("active");
		share_text.style.display = "block";
		return true
	}
}

$("#share_article").on("click", share_article);