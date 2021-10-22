class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle( articleModel, articleName, quantity ) {
        articleModel = articleModel.toLowerCase();
        if (!Object.keys(this.possibleArticles).includes(articleModel)) {
            throw new Error('This article model is not included in this gallery!');
        }
        let article = this.listOfArticles.filter(art => art.articleModel == articleModel && art.articleName == articleName);
        if (article.length == 0) {
            this.listOfArticles.push({articleModel, articleName, quantity});
        }else {
            quantity += article[0].quantity;
            article[0].quantity = quantity;
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest ( guestName, personality) {
        let guest = this.guests.filter(g => g.articleName == guestName);
        if (guest.length == 1) {
            throw new Error(`${guestName} has already been invited.`);
        }
        let points = 50;
        if (personality == 'Vip') {
            points = 500;
        }else if (personality == 'Middle') {
            points = 250;
        }
        this.guests.push({guestName, points, purchaseArticle: 0});
        return `You have successfully invited ${guestName}!`;

    }
    buyArticle ( articleModel, articleName, guestName) {
        let article = this.listOfArticles.filter(a => a.articleModel == articleModel && a.articleName == articleName)
        if (article.length == 0) {
            throw new Error("This article is not found.");
        }
        if (article[0].quantity == 0) {
            return `The ${articleName} is not available.`
        }
        let guest = this.guests.filter(g => g.guestName == guestName);
        if (guest.length == 0) {
            return "This guest is not invited.";
        }
        if (guest[0].points < this.possibleArticles[articleModel]) {
            return "You need to more points to purchase the article.";
        }
        guest[0].points -= this.possibleArticles[articleModel];
        guest[0].purchaseArticle ++;
        article[0].quantity --;
        
        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
    }

    showGalleryInfo (criteria) {
        let output = [];
        if (criteria == 'article') {
            output.push("Articles information:");
            this.listOfArticles.forEach(a => output.push(`${a.articleModel} - ${a.articleName} - ${a.quantity}`));
        }else if (criteria == 'guest') {
            output.push("Guests information:");
            this.guests.forEach(g => output.push(`${g.guestName} - ${g.purchaseArticle}`))
        }
        return output.join('\n');
    }
}

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));
