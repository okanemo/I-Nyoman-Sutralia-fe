**Micro Project Vue**

Requirement
- Nodejs (v^8.10.0 tested) [Download](https://nodejs.org/en/ "Download")



How to run
- enter to root project directory
	- run for development
		`npm i && npm run serve`

	- run production using http-service (needed http-server on your device)
		`npm i -g http-server && npm i && npm run build && http-server dist/ -p 8080`
	
	- run with docker
		`docker build -t vuejs-micro-project . && docker run -it -p 8080:80 --rm --name vuejs-micro-project-1 vuejs-micro-project`

- project will be runnin on port 8080
- you can open http://localhost:8080 on your browser (work perfectly in chrome Version 80.0.3987.163 (Official Build) (64-bit))

***Reference***
- https://vuejs.org/
- https://vuex.vuejs.org/
- https://router.vuejs.org/
- https://element.eleme.io/#/en-US/component/installation

