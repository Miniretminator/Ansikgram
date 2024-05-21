let dataLikes = [764, 1079, 145];
let dataTexts = ["Эй какой хороший день чтобы подарить цветов", "Все мамы идеальные люди", "Я хочу донер"];
let dataImgs = ["https://donnarosa.by/upload/iblock/b16/processed-_1_.jpeg", "https://img.freepik.com/premium-vector/smiling-mom-hugs-her-children-mom-daughter-son_101980-276.jpg", "https://imageproxy.wolt.com/menu/menu-images/63bffe3f18e44f2eb919d73e/62fb822c-09c2-11ee-878f-86f3687d9b18_1ff9655c_9f37_11ed_aec0_9695c69b1d03_5c6a3256.jpeg"];
let korobkaPostov = document.getElementById("postsBox");
let originalPost = document.getElementById("pervPost");

for (let i = 0; i < 100; i++) {
    let newPost = originalPost.cloneNode(true);
    newPost.style.display = "block";

    let img = newPost.getElementsByClassName("img")[0];
    img.setAttribute("src", dataImgs[i % 3]);

    let numberOfLikes = newPost.getElementsByClassName("numberOfLikes")[0];
    numberOfLikes.innerHTML = dataLikes[i % 3];

    let postText = newPost.getElementsByClassName("miniText")[0];
    postText.innerHTML = dataTexts[i % 3];

    let likeBtn = newPost.getElementsByClassName("likeASD")[0];
    likeBtn.setAttribute("onclick", `like(${i})`);

    korobkaPostov.appendChild(newPost);
}

function like(index) {
    dataLikes[index % 3]++;
    let posts = document.getElementsByClassName("post");
    let numberOfLikes = posts[index + 1].getElementsByClassName("numberOfLikes")[0];
    numberOfLikes.innerHTML = dataLikes[index % 3];
}