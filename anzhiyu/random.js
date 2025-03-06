var posts=["2025/03/06/hello-world/","2025/03/06/first-blog/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };