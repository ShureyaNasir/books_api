const books = require("../books")


//get all books
const getBooks = (req, res)=>{
    res.status (200).json(books)
}


//delete a book
const deleteBook =(req, res)=>{
    

    res.json(books.filter((book)=>book.title=req.params.title))
    
}
module.exports={getBooks, deleteBook}









module.exports={getBooks, deleteBook}