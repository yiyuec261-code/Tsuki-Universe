for(let i=0;i<80;i++){

let star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.animationDuration=
Math.random()*3+2+"s";

document.body.appendChild(star);

}


function enterUniverse(){

document.querySelector(
".enterButton"
).style.display="none";

document.getElementById(
"universeContent"
).style.display="block";

}



function showContent(type){

let box=document.getElementById(
"contentBox"
);


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

`;

}


if(type==="study"){

box.innerHTML=`

<h2>📚 Study Life</h2>

<p>Learning AI and programming.</p>

<p>Building projects and exploring new things.</p>

`;

}


if(type==="projects"){

box.innerHTML=`

<h2>⭐ Projects</h2>

<div class="card">

<h3>English-to-French Translator</h3>

<p>NLP Translation Chatbot</p>

</div>


<div class="card">

<h3>GPT2 Poetic Chatbot</h3>

<p>AI-generated poetic responses</p>

</div>

`;

}

}
