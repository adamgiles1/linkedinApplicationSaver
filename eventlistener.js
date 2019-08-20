window.onload = attachListener();
function attachListener(){
	var timer = setInterval(function(){
		var buttons = document.getElementsByClassName('jobs-apply-button');
		if(buttons.length > 0){
			clearInterval(timer);
			buttons[0].addEventListener('click', function(){
				var jobTitle = document.getElementsByClassName('jobs-top-card__job-title')[0].innerHTML;
				var jobDescription = document.getElementsByClassName('jobs-box__html-content')[0].innerHTML;
				var companyName = document.getElementsByClassName('jobs-top-card__company-url')[0].innerHTML;
				
				var keyName = 'las-job-' + companyName + '-' + jobTitle;
				chrome.storage.local.set({keyName: jobDescription}, function(){
					console.log('logged to console successfully with name: ' + keyName);
				});
			});
		}
	}, 500);
}
/*
function attachListener(){
	console.log('test');
	/*window.webkitRequestFileSystem(window.PERSISTENT, 1024*1024, function(){
		localstorage.root.getFile("C:/linkedinApplications/test.txt", {create: true}, function(file){
			var blob =  new Blob(['text here'], {type: 'text/plain'});
			file.write(blob);
		});
	});

	chrome.fileSystem.get
	console.log('testing has ended');
}*/