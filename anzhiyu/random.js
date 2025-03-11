var posts=["2025/03/06/hello-world/","2024/03/06/first-blog/","2024/03/07/近期总结与计划/","2025/03/08/云图库项目/","2025/03/10/云图库开发笔记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };