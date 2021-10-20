class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._coments = [];
        this._likes = [];
    }

    get likes () {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`;
        }else if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`
        }else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
        }
    }

    like (username) {
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        }
        if (username == this.creator) {
            throw new Error("You can't like your own story!")
        }
        this._likes.push(username);
        return `${username} liked ${this.title}!`
    }

    dislike (username) {
        let indName = this._likes.indexOf(username);
        if (indName == -1) {
            throw new Error("You can't dislike this story!");
        }
        this._likes.splice(indName, 1);

        return `${username} disliked ${this.title}`
    }

    comment (username, content, id) {
        if (!this._coments.some(c => c.Id == id) || id == undefined) {
            let newId = String(this._coments.length + 1);
            this._coments.push({
                Id: newId,
                Username: username, 
                Content: content, 
                Replies: []
            });
            return `${username} commented on ${this.title}`;
        }
        let com = this._coments.filter(c => c.Id == id)[0];
        let repId = com.Id + '.' + String(com.Replies.length + 1);
        com.Replies.push({
            Id: repId,
            Username: username, 
            Content: content
        });
        return "You replied successfully";
    }

    toString(sortingType) {
        function sortBy(a, b) {
            if (sortingType == 'asc') {
                return a.Id.localeCompare(b.Id);
            }else if (sortingType == 'desc') {
                return b.Id.localeCompare(a.Id);
            }else if (sortingType == 'username') {
                return a.Username.localeCompare(b.Username);
            }
        }
        let output = [
            `Title: ${this.title}`,
            `Creator: ${this.creator}`,
            `Likes: ${this._likes.length}`,
            `Comments:`
        ];
        this._coments.sort((a, b) => sortBy(a, b))
            .forEach(c => {
            output.push(`-- ${c.Id}. ${c.Username}: ${c.Content}`);
            c.Replies.sort((a, b) => sortBy(a, b))
                .forEach(r => output.push(`--- ${r.Id}. ${r.Username}: ${r.Content}`))
        });
        return output.join('\n')
    }
}


let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('asc'));
console.log()
art.like("Zane");
console.log(art.toString('username'));

