const {Router} = require("express");
const auth = require("../middlewares/books.auth");
const {
    getBooks,
    deleteBook,
    deleteBookByFind,
} = require("../controllers/booksController");
const {getBooks} = require("../controllers/bookController")


const router =Router();

router.route("/books, getBooks ")
router.route("./books/:title", deleteBook)

router.route("/books")