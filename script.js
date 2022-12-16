let sideBar = document.getElementById("sideBar");
sideBar.style.display = "none";

let hamburger = document.getElementById("hamburger");
hamburger.style.display = "block";
let cross = document.getElementById("cross");
cross.style.display = "none";

hamburger.addEventListener("click", () => {
  sideBar.style.display = "block";
  hamburger.style.display = "none";
  cross.style.display = "block";
});

cross.addEventListener("click", () => {
  sideBar.style.display = "none";
  hamburger.style.display = "block";
  cross.style.display = "none";
});

//  -------------------------------dark and light mode

// -------------------------------------------------------------------------------------------------------------------

var title = document.querySelector(".title");
var blog = document.querySelector(".textArea");
var allBlogs = document.getElementById("allBlogs");

var arr = [];

var myBlog = JSON.parse(localStorage.getItem("myBlog"));
if (myBlog) {
  let html = "";
  myBlog.map((element, zeeshan) => {
    // map is used to change index number everytime
    html += ` <div class="firstBox" id=${zeeshan}>
        <div class="returnTitleAndImages">
            <p class="returnTitle">${element.title}</p>
            <img src="delete.png" class="delete" alt="">
            <img src="pen.png" class="pen" alt="">
        </div>
            <p class="returnTextArea">${element.blog}</p>
    </div>`;
  });
  console.log(html);
  if (allBlogs !== null) allBlogs.innerHTML = html;
}

let btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  let object = {
    title: title.value,
    blog: blog.value,
  };
  console.log(arr);

  arr.push(object);

  localStorage.setItem("myBlog", JSON.stringify(arr));

  console.log("Key = " + localStorage.key(0).value);
  title.value = "";
  blog.value = "";
});
