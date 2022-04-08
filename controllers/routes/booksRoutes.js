const {Router} =require("express");
const { deleteBook } = require("../booksControllers");

const {getBooks} = require("../controllers/bookController")


const router =Router();

router.route("/books, getBooks ")
router.route("./books/:title", deleteBook)

router.route("/books")