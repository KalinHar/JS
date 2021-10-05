function solution(...args) {
    let result = [];
    let actions = args;
    for (let act of actions) {
        if (act == 'upvote') {
            this.upvotes++;
        } else if (act == 'downvote') {
            this.downvotes++;
        } else if (act == 'score') {
            score(this.upvotes, this.downvotes);
        }
    }

    function score(up, down) {
        let upvotes = up;
        let downvotes = down;

        let votes = upvotes + downvotes;
        let balance = upvotes - downvotes;
        let rating = '';

        if (upvotes / downvotes > 2) {
            rating = 'hot';
            if (votes > 50) {
                upvotes = Math.ceil(upvotes * 1.25);
                downvotes = upvotes - balance;
            }
        } else if (balance >= 0 && votes > 100) {
            rating = 'controversial';
            if (votes > 50) {
                upvotes = Math.ceil(upvotes * 1.25);
                downvotes = balance == 0 ? upvotes : upvotes - balance;
            }
        } else {
            rating = 'unpopular';
            if (votes > 50) {
                downvotes = Math.ceil(downvotes * 1.25);
                upvotes = downvotes + balance;
            }
        }

        if (votes < 10 || rating == '') {
            rating = 'new';
        }

        result = [upvotes, downvotes, balance, rating];
    }
    return result;
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 5
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
// let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
// solution.call(post, 'downvote');         // (executed 50 times)



score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
console.log(score)