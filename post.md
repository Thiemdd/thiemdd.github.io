---
layout: page
title: Posts
permalink: /posts/
---

<main class="page blog-post-list">
  <section class="clean-block clean-blog-list dark">
    <div class="container">
      <div class="block-heading">
        <h2 class="text-info">Blog Post List</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis
          vitae leo.</p>
      </div>
      <div class="block-content">
        {% for post in site.posts %}
        <div class="clean-blog-post">
          <div class="row">
            <div class="col-lg-5"><img class="rounded img-fluid" src="{{post.image}}" /></div>
            <div class="col-lg-7">
              <h3><a href="{{ post.url | prepend: site.baseurl }}" class="bold">{{ post.title }}</a></h3>
            </div>
          </div>
        </div>
        {% endfor %}        
      </div>
    </div>
  </section>
</main>
