let oldFunction = require('./books');

function totalBooksCount(books) {
  return books.length;
}

function totalAccountsCount(accounts) {
  return accounts.length;
}

function booksBorrowedCount(books) {
 
  return oldFunction.partitionBooksByBorrowedStatus(books)[0].length;
  
}

function mostCommonGenres(books) { 
  let mostCom = {};
  const final = [];
  for (let book of books) {
    mostCom[book.genre] ? mostCom[book.genre]++ : mostCom[book.genre] = 1;
  }

  for (let start = 0; start < Object.keys(mostCom).length; start++) {
    final.push({ name: Object.keys(mostCom)[start], count: Object.values(mostCom)[start] });
  }

  return final.sort((gen1, gen2) => gen1.count > gen2.count ? -1 : 1).slice(0, 5);

}

function mostPopularBooks(books) {
  let mostPop = [];

  for (book of books) {
    let name = book.title;
    let count = book.borrows.length;
    mostPop.push({ 'name': name, 'count': count});
  

  }
  return mostPop.sort((book1, book2) => book2.count - book1.count).slice(0, 5);
}

function getName(authors, id){
  let authName = ' ';
  authors.forEach((auth) => {
    if (auth.id === id)
      authName = `${auth.name.first} ${auth.name.last}`;
  });
  return authName;
}

function sortData(array) {
  return array.sort((firstItem, secondItem) => {
    if (firstItem.count < secondItem.count) return 1;
    if (firstItem.count > secondItem.count) return -1;
    return 0;
  });
}

function mostPopularAuthors(books, authors) {
  let array = [];
  let red = books.reduce((account, book) => {
    account[book.authorId] ? (account[book.authorId] += book.borrows.length) : (account[book.authorId] = book.borrows.length);
    return account;
  }, {});
  for (let key in red) {
    let value = red[key];
    let accObj = {};
    accObj['name'] = getName(authors, parseInt(key));
    accObj['count'] = value;
    array.push(accObj);
  }
  return sortData(array).slice(0, 5);
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  mostCommonGenres,
  mostPopularBooks,
  mostPopularAuthors,
};
