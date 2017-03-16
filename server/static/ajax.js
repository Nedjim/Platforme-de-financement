const request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000/project');
request.onload = function(){
  var dataProjects = JSON.parse(request.responseText);
  console.log(dataProjects);
};
request.send();
// var header = getElementById('bum');
// var htmlString = "";
// htmlString += '<p>' + dataProjects[0].name + "</p>";
// header.insertAdjacentHTML('beforeend', htmlString);
