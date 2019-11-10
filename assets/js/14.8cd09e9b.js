(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{197:function(e,r,n){"use strict";n.r(r);var a=n(0),t=Object(a.a)({},function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"docker-getting-started-01"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-getting-started-01","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker Getting Started 01")]),e._v(" "),n("p",[e._v("이 주제를 잡게 된 이유?\n1.Why? 최근에 개발 환경을 세팅할 때 가장 많이 쓰는 도구인 것 같고, 자연스레 많이 접하기는 하는데 모르는 것 투성이라 공부하고 싶었다.")]),e._v(" "),n("h3",{attrs:{id:"docker"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker","aria-hidden":"true"}},[e._v("#")]),e._v(" DOCKER")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://docs.docker.com/get-started/",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker-doc"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("docker란 무엇일까?")]),e._v(" "),n("p",[e._v("Docker는 개발자와 시스템 관리자가 컨테이너를 사용하여 응용 프로그램을 개발, 배포 및 실행하기위한 플랫폼입니다.")]),e._v(" "),n("p",[e._v("Linux 컨테이너를 사용하여 응용 프로그램을 배포하는 것을 컨테이너 화라고합니다. 컨테이너는 새로운 것은 아니지만 쉽게 응용 프로그램을 배포하는 데 사용됩니다.")]),e._v(" "),n("p",[e._v("기존에 가상화 기술에 비해서 빠르고 경량화 되었다고 한다.")]),e._v(" "),n("p",[e._v("컨테이너화 시켜놓으면 다른데다 가져다 쓰기 아주 좋음")]),e._v(" "),n("h3",{attrs:{id:"공식-문서-getting-started-따라가기"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#공식-문서-getting-started-따라가기","aria-hidden":"true"}},[e._v("#")]),e._v(" 공식 문서 Getting Started 따라가기")]),e._v(" "),n("p",[e._v("1: Orientation\n2: Containers\n3: Services\n4: Swarms\n5: Stacks\n6: Deploy your app")]),e._v(" "),n("h3",{attrs:{id:"_1-orientation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-orientation","aria-hidden":"true"}},[e._v("#")]),e._v(" 1. Orientation")]),e._v(" "),n("p",[e._v("1.1\n컨테이너를 사용한 배포 플랫폼 & 장점들\n유연하고 경량화 되어 있고 쌓기 좋고 ....등등")]),e._v(" "),n("p",[e._v("1.2. Image and Containers")]),e._v(" "),n("p",[e._v("컨테이너는 이미지를 실행시키면서 동작합니다.\n이 이미지는 실행시키기 위한 설정 파일등 이라고 합니다.\n(the code, a runtime, libraries, environment variables, and configuration files.)")]),e._v(" "),n("p",[e._v("컨테이너는 이미지의 런타임 인스턴스")]),e._v(" "),n("p",[n("code",[e._v("docker ps")]),e._v("로 실행중인 컨테이너 목록을 볼 수 있다\n"),n("code",[e._v("docker --version")]),e._v(" version 과 client server 정보를 볼 수 있다.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("docker --version\nDocker version 18.09.2, build 6247962\ndocker version\nClient: Docker Engine - Community\n Version:           18.09.2\n API version:       1.39\n Go version:        go1.10.8\n Git commit:        6247962\n Built:             Sun Feb 10 04:12:39 2019\n OS/Arch:           darwin/amd64\n Experimental:      false\n\nServer: Docker Engine - Community\n Engine:\n  Version:          18.09.2\n  API version:      1.39 (minimum version 1.12)\n  Go version:       go1.10.6\n  Git commit:       6247962\n  Built:            Sun Feb 10 04:13:06 2019\n  OS/Arch:          linux/amd64\n  Experimental:     false\n")])])]),n("p",[n("code",[e._v("docker run hello-world")]),e._v("를 입력하자\nimage가 로컬에는 없다. 하고 -> image를 가져온다고 한다.\n그리고 docker client가 docker daemon과 핑퐁하면서\n실행환경 준비를 마친다.")]),e._v(" "),n("p",[e._v("image들은 "),n("code",[e._v("docker-hub")]),e._v("에 있나보다.")]),e._v(" "),n("h3",{attrs:{id:"dokcerhub"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#dokcerhub","aria-hidden":"true"}},[e._v("#")]),e._v(" DokcerHub")]),e._v(" "),n("p",[e._v("github 처럼 dokcer image들의 저장소\ndocker hub에 들어가보자 😄\n"),n("a",{attrs:{href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("docker-hub"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("img",{attrs:{src:"https://user-images.githubusercontent.com/25189066/61185414-3705ac00-a694-11e9-8394-f5e1c83fdd2f.png",alt:"docker-hub"}}),e._v("\n(repo에는 (star | 몇 번 pull했는지가 나온다))")]),e._v(" "),n("p",[e._v("접속해보면 내가 만든 repository\n그리고 검색을 통해서 image들을 찾을 수 있다.")]),e._v(" "),n("p",[n("code",[e._v("ubuntu")]),e._v("를 검색해보자")]),e._v(" "),n("p",[e._v("cli 환경에서도 똑같이\n"),n("code",[e._v("docker search")]),e._v("라는 명령어로 알아볼수가 있다.")]),e._v(" "),n("p",[e._v("실행하면서 몇가지 명령어들을 익혀 봅시다.")]),e._v(" "),n("p",[n("code",[e._v("docker pull ubuntu")]),e._v(" pull image 가지고 오기\n"),n("code",[e._v("docker run ubuntu")]),e._v(" 이미지 실행하기\n"),n("code",[e._v("docker run -d")]),e._v(" demon으로 실행하겠다.\n"),n("code",[e._v("docker run -i")]),e._v(" interactive mode로 하겠다.\n"),n("code",[e._v("docker run -t")]),e._v(" tty기능을 키겠다.")]),e._v(" "),n("p",[n("code",[e._v("docker run -dit name <my-name> <imagename>")])]),e._v(" "),n("p",[n("code",[e._v("docker ps")]),e._v(" 실행되고 있는 컨테이너\n"),n("code",[e._v("docker ps -a")]),e._v(" all 컨테이너\n"),n("code",[e._v("docker rm Remove one or more containers")]),e._v(" "),n("code",[e._v("docker image ls")]),e._v(" 다운로드한 image 목록으 볼 수 있다.\n"),n("code",[e._v("docker container ls --all")])]),e._v(" "),n("p",[n("code",[e._v("docker run -dit --name my-ubuntu ubuntu")])]),e._v(" "),n("p",[n("code",[e._v("docker attach <container-name>")]),n("br"),e._v(" "),n("code",[e._v("docker inspect <container-name>")])]),e._v(" "),n("h3",{attrs:{id:"_1-orientation-정리"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-orientation-정리","aria-hidden":"true"}},[e._v("#")]),e._v(" 1.orientation 정리")]),e._v(" "),n("p",[e._v("컨테이너화는 cI/cd를 간편하게 만들어준다.")]),e._v(" "),n("ol",[n("li",[e._v("시스템 종속성이 없다.")]),e._v(" "),n("li",[e._v("업데이트를 모든 부분에 푸시할 수 있다.")]),e._v(" "),n("li",[e._v("자원을 최적화 할 수 있다.")]),e._v(" "),n("li",[e._v("vmHost를 실행시키지 않고 새로운 실행 파일 작성할 수 있다.")])]),e._v(" "),n("p",[e._v("만능은 아니고")]),e._v(" "),n("ol",[n("li",[e._v("엄밀한 리눅스 내부 환경 구성 이나 비리눅스 환경에서는 예전\nVMWare나 VirtualBox 방식이 더 적합할 수 있다.")])]),e._v(" "),n("h3",{attrs:{id:"_2-containers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-containers","aria-hidden":"true"}},[e._v("#")]),e._v(" 2.Containers")]),e._v(" "),n("p",[e._v("제일 하단에 컨테이너에 대해서 알아봅시다.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("Stack\nServices\nContainer (you are here)\n")])])]),n("p",[e._v("Docker는 같은 Portable image만 설정해주면 모두 같은 실행환경을 갖출 수 있어서 편리하다.\nPortable Images는 Dockerfile이라고도 한다.")]),e._v(" "),n("p",[e._v("Docker 방식으로 앱을 제작해보자\n제일 아래 부터 쌓아 올리는 식으로 진행할 예정\n파트 3 컨테이너 프로덕션에서 작용하는 방식\n최상위 레벨 스택 모든 서비스의 상호 작용")]),e._v(" "),n("h4",{attrs:{id:"app-build"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#app-build","aria-hidden":"true"}},[e._v("#")]),e._v(" app.build")]),e._v(" "),n("p",[e._v("docker build Build an image from a Dockerfile")]),e._v(" "),n("p",[n("code",[e._v("docker build --tag=friendlyhello .")])]),e._v(" "),n("p",[e._v("dockerFile을 통해서 --tag -> 이 이름으로 이미지를 만들겠다는 명령어다.")]),e._v(" "),n("h3",{attrs:{id:"run-app"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#run-app","aria-hidden":"true"}},[e._v("#")]),e._v(" run App")]),e._v(" "),n("p",[e._v("docker run Run a command in a new container\n"),n("code",[e._v("docker run -p 4000:80 friendlyhello")]),e._v("\n-p: Publish a container's port(s) tothe host\npublish port 지정 내쪽 4000 컨테이너는 80포트로 돌리겠다\nmachine’s port 4000 to the container’s published port 80 using")]),e._v(" "),n("p",[n("code",[e._v("docker container ls")]),e._v("를 통해서 상태들을 확인 할 수 있다.\n"),n("code",[e._v("docker container stop <id>")]),e._v("를 통해서 멈출 수 있다.")]),e._v(" "),n("h3",{attrs:{id:"share-image"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#share-image","aria-hidden":"true"}},[e._v("#")]),e._v(" Share Image")]),e._v(" "),n("p",[n("code",[e._v("docker login")]),e._v("\n로그인 하고\n"),n("code",[e._v("docker tag image username/repository:tag")]),e._v(" "),n("code",[e._v("docker tag friendlyhello gordon/get-started:part2")]),e._v("\ndocker tag imagename username/repository:")]),e._v(" "),n("p",[e._v("docker tag imagename -> usernmae/repository:tag으로 생성하고\ndocker push usernmae/repository:tag 허브에 생성한 이미지를 push해준다.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('docker build -t friendlyhello .  # Create image using this directory\'s Dockerfile\ndocker run -p 4000:80 friendlyhello  # Run "friendlyhello" mapping port 4000 to 80\ndocker run -d -p 4000:80 friendlyhello         # Same thing, but in detached mode\ndocker container ls                                # List all running containers\ndocker container ls -a             # List all containers, even those not running\ndocker container stop <hash>           # Gracefully stop the specified container\ndocker container kill <hash>         # Force shutdown of the specified container\ndocker container rm <hash>        # Remove specified container from this machine\ndocker container rm $(docker container ls -a -q)         # Remove all containers\ndocker image ls -a                             # List all images on this machine\ndocker image rm <image id>            # Remove specified image from this machine\ndocker image rm $(docker image ls -a -q)   # Remove all images from this machine\ndocker login             # Log in this CLI session using your Docker credentials\ndocker tag <image> username/repository:tag  # Tag <image> for upload to registry\ndocker push username/repository:tag            # Upload tagged image to registry\ndocker run username/repository:tag                   # Run image from a registry\n\n')])])]),n("h3",{attrs:{id:"service"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#service","aria-hidden":"true"}},[e._v("#")]),e._v(" Service")]),e._v(" "),n("p",[e._v("Stack\nServices (you are here)\nContainer")]),e._v(" "),n("p",[e._v("이번엔 서비스에 대해서 알아보겠다.")]),e._v(" "),n("p",[e._v("분산 앱에서 app의 다른 조각 ?\n예를 들면 비디오공유 사이트에서\n데이터 베이스에서 응용프로그램을 저장하는 서비스\n사용자가 업로드를 한 후에 비디오 트렌스코딩을 위한 서비스 ...")]),e._v(" "),n("p",[e._v("여러 앱의 기능단위인가? 서비스가 무엇을 뜻하는지 아직 와 닿지는 않는다. ... 마이크로 서비스 같은 개념인가? -> 나중에 공부해서 채워넣기")]),e._v(" "),n("p",[e._v("서비스는 실제로 프로덕션 컨테이너이다.\n하나의 이미지를 실행하지만 어떤 포트가 사용되야 하는지, 복제본 양을 어떻게 실행해야 할지, 용량이 어떻게 될지, ...\n이런 것들은 docker-compose.yml을 작성하여 서비스를 정의 실행 및 확장할 수 있다.")]),e._v(" "),n("h4",{attrs:{id:"docker-compose-yml"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-yml","aria-hidden":"true"}},[e._v("#")]),e._v(" docker-compose.yml")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('version: "3"\nservices:\n  web:\n    # replace username/repo:tag with your name and image details\n    image: username/repo:tag\n    deploy:\n      replicas: 5\n      resources:\n        limits:\n          cpus: "0.1"\n          memory: 50M\n      restart_policy:\n        condition: on-failure\n    ports:\n      - "4000:80"\n    networks:\n      - webnet\nnetworks:\n  webnet:\n')])])]),n("p",[e._v("가지고 올 image 몇개로 실행할지 limits (cpu & memory )\n실패시 즉시 재 실행 ,포트 정의 로드 밸런스 등을 정의한다.")]),e._v(" "),n("h4",{attrs:{id:"run-your-new-load-balanced-app"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#run-your-new-load-balanced-app","aria-hidden":"true"}},[e._v("#")]),e._v(" Run your new load-balanced app")]),e._v(" "),n("p",[e._v("docker stack deploy\n"),n("code",[e._v("docker swarm init")]),e._v("\n이 명령에 대한 부분은 Swarms에서 다루고 진행해보자")]),e._v(" "),n("p",[n("code",[e._v("docker stack deploy -c docker-compose.yml getstartedlab")])]),e._v(" "),n("h3",{attrs:{id:"reference"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reference","aria-hidden":"true"}},[e._v("#")]),e._v(" Reference")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://subicura.com/2017/01/19/docker-guide-for-beginners-1.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("도커란 무엇인가?"),n("OutboundLink")],1)])])])},[],!1,null,null,null);r.default=t.exports}}]);