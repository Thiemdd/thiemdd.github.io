---
layout: page
title: Post
permalink: /post-list/
---
<main class="page blog-post-list">
    <section class="clean-block clean-blog-list dark">
        <div class="container">
            <div class="block-heading">
                <h2 class="text-info">Blog Post List</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in,
                    mattis vitae leo.</p>
            </div>
            {% for category in site.categories %}
            <h3 style="margin:50px 0px 20px 0px; 
                text-transform: uppercase;
                font-family: Montserrat, sans-serif;
                font-size: 1.5rem;
                font-weight: 700;
                line-height: 1.5;
                color: #212529;
                text-align: left;">{{category[0]}}</h3>
            <div class="block-content">
                {% assign cat = category[0] %}
                {% for post in category[1] %}
                <div class="clean-blog-post">
                    <div class="row">
                        <div class="col-lg-5 d-flex flex-column justify-content-xl-center align-items-xl-center">
                            <img class="rounded img-fluid" src="{{img_url}}" style="
                    background-position: center;
                    background-size: cover;
                    max-height: 170px;
                  " />
                        </div>
                        <div class="col-lg-7 d-flex flex-column justify-content-xl-center">
                            <h3><a class="list-group-item list-group-item-action"
                                    href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
                            <div class="info">
                                <span class="text-muted">{{post.date | date: "%d-%m-%Y"}} - <a
                                        href="{{site.baseurl}}/#about">by Jurgendn</a></span>
                            </div>
                            <p>{{post.description}}</p>
                            <button class="btn btn-outline-primary btn-sm" type="button" style="width: 100px;"><a
                                    href="{{ post.url | relative_url }}">
                                    Đọc tiếp</a>
                            </button>
                        </div>
                    </div>
                </div>
                {% endfor %}
            </div>
            {% endfor %}