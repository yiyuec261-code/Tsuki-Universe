for (let i = 0; i < 80; i++) {

let star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDuration=Math.random()*3+2+"s";

document.body.appendChild(star);

}


function showContent(type){

let box=document.getElementById("contentBox");


if(type==="about"){

box.innerHTML=`

<h2>🌙 About Me</h2>

<p>Hi, I'm Tsuki.</p>

<p>Computer Science student at UPM.</p>

<p>Interested in AI, HCI and creative projects.</p>

`;

}


if(type==="debate"){

box.innerHTML=`

<h2>🎭 Debate Journey</h2>

<p>UPM Chinese Debate Team</p>

<p>Champion of Debate 15.0</p>

<p>Love expressing ideas and critical thinking.</p>

`;

}


if(type==="study"){

box.innerHTML=`

<h2>📚 Study Life</h2>

<p>Learning AI and programming.</p>

<p>Building projects and exploring new things.</p>

`;

}

}
