// 썸네일 이미지 목록 & 프로젝트명
    const projects = [
		{ img: "img/re_thumbnail/thumb_likeapurespirit_03.jpg", title: "Like a Pure Spirit", link: "https://yejinschoi.com/html/likeapurespirit.html",tags: "#Graphic #MotionGraphic #Print and Publication #Exhibition"},
		{ img: "img/re_thumbnail/mainimage_01_resize.jpg", title: "Flower Sick", link: "https://yejinschoi.com/html/flowersick.html",tags: "#VideoProduction"},
		{ img: "img/re_thumbnail/gestures_screened_gathered.jpg", title: "Gestures", link: "https://yejinschoi.com/html/gestures.html",tags: "#Graphic #MotionGraphic #Drawing"},
		{ img: "img/re_thumbnail/03.jpg", title: "Royal Salute", link: "https://yejinschoi.com/html/royalsalute.html",tags: "#VideoProduction #Production"},
		{ img: "img/re_thumbnail/face0013.png", title: "Beyond Your Imagination", link: "https://yejinschoi.com/html/beyondyourimagination.html",tags: "#Graphic #Web.Interaction #Production #Exhibition"},
		{ img: "img/re_thumbnail/thumb_csmidentity_01.jpg", title: "Central Saint Martins Graduate Show Identity[Finalist]", link: "https://yejinschoi.com/html/csmidentity.html",tags: "#Graphic #MotionGraphic #Branding"},
		 { img: "img/re_thumbnail/thumb_browsers.jpg", title: "Browsers and Browsers", link: "https://yejinschoi.com/html/browsersandbrowsers.html",tags: "#Graphic #Web.Interaction #Print and Publication"},
		{ img: "img/re_thumbnail/0t.png", title: "Between Your Memories", link: "https://yejinschoi.com/html/betweenyourmemories.html",tags: "#Graphic #Web.Interaction"},
		 { img: "img/re_thumbnail/thumb_movement_01.jpg", poster: "../img/re_thumbnail/thumb_movement_01.png", title: "Movement and Non-movement", link: "https://yejinschoi.com/html/movement.html",tags: "#Graphic #Motion Graphics #Illustration.Drawing #EverydayPractice"},
		{ img: "img/re_thumbnail/collection1_04.jpg", title: "SanSan Press", link: "https://yejinschoi.com/html/sansanpress.html",tags: "#Graphic #Illustration.Drawing #EverydayPractice"},
		 { img: "img/re_thumbnail/thumb_dualistic_05.jpg", title: "Dualistic Relationship: Does It Reveal or Conceal? -part 2", link: "https://yejinschoi.com/html/dualisticrelationship_part2.html",tags: "#Graphic #Print and Publication #EverydayPractice"},
		{ img: "img/re_thumbnail/thumb_dualistic_04.jpg", title: "Dualistic Relationship: Does It Reveal or Conceal? -part 1", link: "https://yejinschoi.com/html/dualisticrelationship_part1.html",tags: "#Graphic #Print and Publication #EverydayPractice"},
		{ img: "img/re_thumbnail/scene_03.jpg", title: "From the Sun", link: "https://yejinschoi.com/html/fromthesun.html",tags: "#Graphic #MotionGraphic #Mobile"}
    ];
const container = document.getElementById("projectContainer");

projects.forEach((project) => {
    const projectDiv = document.createElement("a");
    projectDiv.href = project.link;
    projectDiv.classList.add("project");

    const img = document.createElement("img");
    img.src = project.img;
    img.alt = project.title;

    const textContainer = document.createElement("div");
    textContainer.classList.add("project-text");

    const title = document.createElement("div");
    title.classList.add("project-title");
    title.textContent = project.title;

    const tags = document.createElement("div");
    tags.classList.add("project-tags");
    tags.textContent = project.tags;

    textContainer.appendChild(title);
    textContainer.appendChild(tags);
    projectDiv.appendChild(img);
    projectDiv.appendChild(textContainer);
    container.appendChild(projectDiv);
});

// 일반 글리터 생성 함수
function createSingleGlitter() {
    const glitter = document.createElement('div');
    glitter.classList.add('glitter');

    // 랜덤 크기 설정 (5px ~ 15px)
    const size = Math.random() * 10 + 5;
    glitter.style.width = `${size}px`;
    glitter.style.height = `${size}px`;

    // 랜덤 위치 및 속도 설정
    glitter.style.left = Math.random() * 100 + 'vw';
    glitter.style.top = '-10px'; // 처음에는 화면 위쪽에서 시작
    glitter.style.animationDuration = Math.random() * 5 + 3 + 's';
    glitter.style.animationDelay = Math.random() * 2 + 's';

    document.body.appendChild(glitter);

    // 애니메이션 종료 후 삭제
    glitter.addEventListener('animationend', () => {
        glitter.remove();
    });
}

// 다이아몬드 글리터 생성 함수
function createDiamondGlitter() {
    const diamondCount = 100; // 생성할 다이아몬드 글리터 개수
    const initialCount = 25; // 초기 로드 시 즉시 생성할 글리터 개수

    function createSingleDiamond() {
        const glitterDiamond = document.createElement('div');
        glitterDiamond.classList.add('glitter-plus');

        // 다양한 색상 클래스에서 랜덤 선택
        const colorClasses = ['color-gold', 'color-lightblue', 'color-lightpink', 'color-lightgreen'];
        const randomColorClass = colorClasses[Math.floor(Math.random() * colorClasses.length)];
        glitterDiamond.classList.add(randomColorClass);

        // 랜덤 크기 설정 (3px ~ 6px)
        const size = Math.random() * 3 + 3;
        glitterDiamond.style.width = `${size}px`;
        glitterDiamond.style.height = `${size}px`;

        // 랜덤 위치 및 애니메이션 설정
        glitterDiamond.style.left = Math.random() * 100 + 'vw';
        glitterDiamond.style.top = Math.random() * 100 + 'vh';
        glitterDiamond.style.animationDuration = Math.random() * 3 + 2 + 's';
        glitterDiamond.style.animationDelay = Math.random() * 2 + 's';

        document.body.appendChild(glitterDiamond);

        // 애니메이션 종료 후 글리터 제거
        glitterDiamond.addEventListener('animationend', () => {
            glitterDiamond.remove();
        });
    }

    // 초기 글리터 생성
    for (let i = 0; i < initialCount; i++) {
        createSingleDiamond();
    }

    // 나머지 글리터 생성 (일정 시간 간격으로 생성)
    let remainingCount = diamondCount - initialCount;
    let diamondInterval = setInterval(() => {
        if (remainingCount <= 0) {
            clearInterval(diamondInterval);
            return;
        }

        createSingleDiamond();
        remainingCount--;
    }, 800);
}

// 페이지 로드 시 글리터 생성
window.onload = () => {
    createSingleGlitter();   // 기존 글리터 생성
    createDiamondGlitter(); // 다이아몬드 글리터 생성
};
