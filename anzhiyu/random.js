var posts=["2025/03/06/hello-world/","2024/03/06/first-blog/","2024/03/07/近期总结与计划/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };