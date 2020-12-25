function findAuthorById(authors, id) {
    for (author of authors) {
        if (author.id === id) {
            return author;
        }
    }
}

function findBookById(books, id) {
  for (let book in books) {
    let authId = books[book];
    if (authId.id === id) {
      return authId;
    }
  }
}


function partitionBooksByBorrowedStatus(books) {
  const borrowed = [];
    const returned = [];
    for (book of books) {
        if (book.borrows[0].returned) {
            returned.push(book);
        } else {
            borrowed.push(book);
        }

    }
    return [borrowed, returned]
}

function getBorrowersForBook(book, accounts) {
  let borrArr =[]
  accounts.forEach( account => {
    book.borrows.forEach( info => {
      if(info.id === account.id) {
        let accObj = { ...account }
        accObj.returned = info.returned
        borrArr.push(accObj)
      }
    })
  })
  return borrArr.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
