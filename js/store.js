export const store = {
    posts: JSON.parse(localStorage.getItem("posts") || "[]"),
    subscribers: [],

    addPost(post) {
        this.posts?.push(post)
        this.subscribers.forEach(fn => fn('posts', this.posts))
    },

    observer(cb) {
        this.subscribers.push(cb)
    }

}