			var link = document.querySelector(".write-us");
			
			var popup = document.querySelector(".pop-up");
			var close = popup.querySelector(".pop-up-close");
			
			var form = popup.querySelector("form");
			var login = popup.querySelector("[name=your-name]");
			var email = popup.querySelector("[name=email]");
			var letter = popup.querySelector("[name=letter-text]"); 
			
			var storage = localStorage.getItem("login");
			
			link.addEventListener("click", function(event) {
				event.preventDefault();
				popup.classList.add("pop-up-show");
				
				if (storage) {
					login.value = storage;
					email.focus();
				} else {
					login.focus();
				}
			});
			
			close.addEventListener("click", function(event) {
				event.preventDefault();
				popup.classList.remove("pop-up-show");
				popup.classList.remove("pop-up-error");
			});
			
			form.addEventListener("submit", function(event) {
				if (!login.value || !email.value) {
					event.preventDefault();
					popup.classList.remove("modal-error");
					popup.offsetWidth = popup.offsetWidth;
					popup.classList.add("pop-up-error");
				} else {
					localStorage.setItem("login", login.value);
					localStorage.setItem("email", email.value);
				}
			});
			
			window.addEventListener("keydown", function(event) {
				if (event.keyCode === 27) {
					if (popup.classList.contains("pop-up-show")) {
						popup.classList.remove("pop-up-show");
						popup.classList.remove("pop-up-error");
					}
				}
			});

			function initMap() {
			var mapDiv = document.getElementById("map");
			var map = new google.maps.Map(mapDiv, {
				center: {lat: 59.938613982849, lng: 30.322900507585},
				zoom: 17
				});
			
			var logo = "img/bubble-logo.png";
			var marker = new google.maps.Marker({
				position: {lat: 59.938613982849, lng: 30.323750507585},
				map: map,
				icon: logo
				});
			}