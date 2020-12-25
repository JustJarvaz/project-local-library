function findAccountById(accounts, id) {
  return accounts.find((user) => user.id === id);
}

function sortAccountsByLastName(accounts) {
  const sorted = accounts.map(account => account.name.last).sort();
  let accArr = [];
  for (lastName in sorted){
    accArr.push(accounts.find(account => account.name.last === sorted[lastName]));
  
  }
  return accArr;
}

function numberOfBorrows(account, books) { 
  let sum = 0;
  for (let book in books) {
    if(books[book].borrows.reduce((eachBook) => eachBook.id === account.id))
      sum += 2;
  }
  return sum;
}
  


function getBooksPossessedByAccount(account, books, authors) {
  let bookArr = [];
  for (let i = 0; i < books.length; i++) {
    var book = books[i];
    const {id, title, genre, borrows}=book;
    for(let j = 0; j < borrows.length; j++) {
      let borr = borrows[j]
      if(borr.id === account.id && borr.returned === false) {
        for(let k = 0; k < authors.length; k++) {
          let author = authors[k];
          if(author.id === book.authorId){
            let finalObj = { id, title, genre, author, borrows};
            bookArr.push(finalObj);
          }
        }
      }
    }
  }
  return bookArr;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
