---
template: 'blog'
slug: 'a-more-creative-side-of-code'
title: 'A More Creative Side of Code'
author: 'Kat Fairbanks'
publishedDate: '09-23-2021'
published: 'true'
summary: 'Explore creative coding and learn how to create a simple animation using p5.js.'
---

I often find myself browsing through old conference talks early in the morning on weekends while sipping my morning coffee (check out our YouTube channel for content from 2020 https://www.youtube.com/channel/UCVycjr4-mFgrFswTSQLQ5Wg). One of these mornings earlier this year, I ran across a talk called “How to Hack a Painting” by Tyler Hobbs (https://youtu.be/5R9eywArFTE). Based on only the title and thumbnail, I wasn’t entirely sure what to expect. It turned out to be the introduction to my newest hobby — generative art and creative coding. 

For most developers coding is primarily about building new functionality in our applications, often solving some kind of problem or providing functionality to our users. Creative coding is instead focused on generating something expressive or artistic. This can apply to a much wider range of projects than I first realized, including images, animations, music, and even physical creations.  These projects are a captivating blend of things I already loved— algorithms, randomness, math, visualizations, and creativity — that have brought a new excitement to programming for me.

![metaballs gif](/blog-images/metaballs.gif)

https://www.shadertoy.com/view/fssXR2 

After playing with these toys for a few weeks, I started to see how we can apply a lot of our usual programming skills to this creative field. Problem solving skills, like breaking down problems into smaller pieces and iterating on the solution, are extremely helpful when trying to put what you are imagining onto the screen. To demonstrate how you might apply this to a real project, let’s walk through making a simple animation of bouncing balls.  We will draw this using p5.js (https://p5js.org/) so that you can see each step rendered live in your browser. Each step includes annotated code to explain how each piece is working.

One of the simplest things we can do is draw a single ball, not moving, in the center of the screen. When using p5.js this only requires a single function call to `circle`. Most creative coding frameworks provide functions to draw simple shapes and lines to help you build images quickly so you can focus on creating your vision.

![single ball image](/blog-images/single-ball.png)

https://editor.p5js.org/katzenbar/sketches/udEY41B_R 

After we have figured out how to draw a single ball, we can apply that knowledge and start to draw several balls in a row. If you aren’t  sure how to go directly to a loop, start by hard coding three or four circles to start understanding how to make the space  between each ball equal to each other.

![row of balls image](/blog-images/row-of-balls.png)

https://editor.p5js.org/katzenbar/sketches/d0GHTc37m 

We are making great progress! The last step is animating the balls to make it look like they are bouncing by manipulating the y-coordinate for each ball. We could dive deep and create a full physics simulation to model the bouncing, but to keep things simple we will use the absolute value of a sine wave which looks close enough. To make the animation a little more interesting, we will randomize the bouncing pattern for each ball so each one does something slightly different. This also changes the animation on each refresh, so check out a few and see how the drawing changes.

![bouncing balls gif](/blog-images/bouncing-bw.gif)

https://editor.p5js.org/katzenbar/sketches/o-DeaDxZL

Success, we made a small animation of  bouncing balls! But our work doesn’t have to end here, there are plenty of other variations and changes we could make. For example, we could add colors, play with the size or shape of the balls, or change how many balls are drawn. And as you learn more patterns and techniques, you can combine them to make something new and interesting. This is what has excited me most about creative coding, and I find myself learning new things every day. I think I actually enjoy the learning and exploration aspect more than creating a final piece.

![bouncing balls in color gif](/blog-images/bouncing.gif)

https://editor.p5js.org/katzenbar/sketches/g3eHS8mGd

If you are interested in learning more about how to start coding up your own creative projects, here are some of the resources that I have found helpful and inspiring:

- https://thecodingtrain.com/ – Daniel Shiffman has created a huge library of beginner-friendly content that is great for getting started with creative coding. 

- https://thatcreativecode.page/ – This is a huge visual reference list of algorithms and techniques that can be used for creative coding.

- https://youtu.be/X-iSQQgOd1A – Sebastian Lague has been posting a series of “Coding Aventures” over the last few years where he takes you along on his development process of creative and fun programming projects. One of his latest videos is looking at slime simulations, which generates really fascinating images.

![momentum logo flock gif](/blog-images/logo-flock.gif)
