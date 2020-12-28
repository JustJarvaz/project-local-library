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
  


function booksInPossession()(account, books, authors) {
  let bookArr = [];
  for (let eachBook = 0; eachBook < books.length; eachBook++) {
    let book = books[eachBook];
    const {id, title, genre, borrows}=book;
    for(let borrowed = 0; borrowed < borrows.length; borrowed++) {
      let borr = borrows[borrowed]
      if(borr.id === account.id && borr.returned === false) {
        for(let acc = 0; acc < authors.length; acc++) {
          let author = authors[acc];
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
  booksInPossession,
};
