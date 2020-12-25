var oldFunction = require('./books');

function totalBooksCount(books) {
  return books.length;
}

function totalAccountsCount(accounts) {
  return accounts.length;
}

function booksBorrowedCount(books) {
 
  return oldFunction.partitionBooksByBorrowedStatus(books)[0].length;
  
}

function getMostCommonGenres(books) { 
  let mostCom = {};
  const final = [];
  for (let book of books) {
    mostCom[book.genre] ? mostCom[book.genre]++ : mostCom[book.genre] = 1;
  }

  for (let i = 0; i < Object.keys(mostCom).length; i++) {
    final.push({ name: Object.keys(mostCom)[i], count: Object.values(mostCom)[i] });
  }

  return final.sort((a, b) => a.count > b.count ? -1 : 1).slice(0, 5);

}

function getMostPopularBooks(books) {
  let mostPop = [];

  for (book of books) {
    var name = book.title;
    var count = book.borrows.length;
    mostPop.push({ 'name': name, 'count': count});
  

  }
  return mostPop.sort((a, b) => b.count - a.count).slice(0, 5);
}


function getMostPopularAuthors(books, authors) {
  const finalArr = [];
  for (book of books) {
   
    let name = Object.values(oldFunction.findAuthorById(authors, book.authorId).name).join(' ');
    let count = book.borrows.length;
  
    if (finalArr.filter(result => result.name).includes(name)) {
      for (res of finalArr) {
        if (name === finalArr.name) {
          finalArr.count ++;
        }
      }
    }
    else {
      finalArr.push({ 'name': name, 'count': count});
    }   
  }
  return (finalArr.sort((a, b) => b.count - a.count).slice(0, 5));
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
