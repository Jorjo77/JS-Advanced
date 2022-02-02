function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = Number(likes);
            this.dislikes = Number(dislikes);
            this._comments = [];
        }

        addComment(comment) {
            this._comments.push(comment);
        }

        toString() {
            let comments = this._comments.join('\n * ');
            let rating = this.likes - this.dislikes;
            let baseToString = super.toString();
            if (this._comments.length === 0) {
                return `${baseToString}\n
                Rating: ${rating}`;
            } else {
                return `${baseToString}\nRating: ${rating}\nComments:\n * ${comments}`;
            }
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = Number(views);
        }

        view() {
            this.views += 1;
            return this;
        }

        toString() {
            let baseToString = super.toString();
            return `${baseToString}\nViews: ${this.views}`;
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}

const classes = solution();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

let blogPost = new classes.BlogPost("blogPost", "blogContent", 3);
blogPost.view().view().view();
console.log(blogPost.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!

