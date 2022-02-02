class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {
            picture: 200,
            photo: 50,
            item: 250,
        };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        let articleModelToLower = articleModel.toLowerCase();
        if (!this.possibleArticles[articleModelToLower]) {
            throw new Error('This article model is not included in this gallery!');
        }

        let article = {
            articleModel,
            articleName,
            quantity,
        }

        let existsArticle = this.listOfArticles.find(x => x.articleName === article.articleName && x.articleModel === article.articleModel);
        if (existsArticle) {
            existsArticle.quantity += quantity;
            return `Successfully added article ${articleName} with a new quantity- ${existsArticle.quantity}.`
        } else {
            this.listOfArticles.push(article);
            return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
        }

    }

    inviteGuest ( guestName, personality) {

        if (this.guests.includes(guestName)) {
            throw new Error(`${guestName} has already been invited.`)
        }

        if (personality==='Vip') {
            let guest = {
                guestName: guestName,
                points: 500,
                purchaseArticle: 0,
            }
            this.guests.push(guest);
        } else if (personality==='Middle') {
            let guest = {
                guestName: guestName,
                points: 250,
                purchaseArticle: 0,
            }
            this.guests.push(guest);
        } else {
            let guest = {
                guestName: guestName,
                points: 50,
                purchaseArticle: 0,
            }
            this.guests.push(guest);
        }

        return `You have successfully invited ${guestName}!`

    }

}

const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

console.log(artGallery.inviteGuest('John', 'Vip'));
console.log(artGallery.inviteGuest('Peter', 'Middle'));
console.log(artGallery.inviteGuest('John', 'Middle'));



