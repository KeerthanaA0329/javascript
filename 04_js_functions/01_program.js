// Displaying an object's properties on the console

var movie1;

movie1 = {
  title: "Inside Out",
  actors: "Amy Poehler, Bill Hader",
  directors: "Pete Doctor, Ronaldo Del Carmen"
};

console.log("Movie information for " + movie1.title);
console.log("------------------------------");
console.log("Actors: " + movie1.actors);
console.log("Directors: " + movie1.directors);
console.log("------------------------------");

var movie2 = {
    title: "Inception",
    actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
    directors: "Christopher Nolan"
  };
  
  
  console.log("\nMovie information for " + movie2.title);
  console.log("------------------------------");
  console.log("Actors: " + movie2.actors);
  console.log("Directors: " + movie2.directors);
  console.log("------------------------------");

  var blogPost = {
    title: "JavaScript Basics",
    author: "John Doe",
    content: "In this blog post, we'll cover the basics of JavaScript programming...",
    published: "2023-05-15",
    tags: ["JavaScript", "Programming", "Basics"]
  };
  
 
  console.log("\nBlog Post: " + blogPost.title);
  console.log("------------------------------");
  console.log("Author: " + blogPost.author);
  console.log("Published Date: " + blogPost.published);
  console.log("Tags: " + blogPost.tags.join(", "));
  console.log("\nContent:");
  console.log(blogPost.content);
  console.log("------------------------------");



/* Further Adventures
 *
 * 1) Add a second movie and display the same info for it.
 *
 * 2) Create an object to represent a blog post.
 *
 * 3) Write code to display info about the blog post.
 *
 */
