var app = angular.module('quoteApp');

app.service('quoteService', function() {

var quoteSource = [
    {
        image: '../../img/To-Kill-A-Mockingbird.jpg',
        Book: 'To Kill A Mocking Bird',
        Author: 'Harper Lee',
        Quote: '"You never understand a person until you consider things from his point of view… until you climb into his skin and walk around in it."',
        Amazon: 'http://ecx.images-amazon.com/images/I/418Q9Azt1pL._SX267_BO1,204,203,200_.jpg'
    },
    {
        image: 'https://d.gr-assets.com/books/1320399351s/1885.jpg',
        Book: 'Pride and Prejudice',
        Author: 'Jane Austen',
        Quote: '"Vanity and pride are different things, though the words are often used synonymously. A person may be proud without being vain. Pride relates more to our opinion of ourselves, vanity to what we would have others think of us."',
        Amazon: 'http://www.amazon.com/Pride-Prejudice-Jane-Austen/dp/1503290565/ref=sr_1_3?s=books&ie=UTF8&qid=1442962735&sr=1-3&keywords=pride+and+prejudice'
    },
    {
        image: 'https://d.gr-assets.com/books/1327867269s/10210.jpg',
        Book: 'Jane Eyre',
        Author: 'Charlotte Bronte',
        Quote: '"I am no bird; and no net ensnares me: I am a free human being with an independent will."',
        Amazon: 'http://www.amazon.com/Jane-Eyre-Annotated-Literary-Collection-ebook/dp/B006FROVNE/ref=sr_1_3?s=books&ie=UTF8&qid=1442962798&sr=1-3&keywords=jayne+eyre+by+charlotte+bronte'
    },
    {
        image: 'https://d.gr-assets.com/books/1411852091s/24280.jpg',
        Book: 'Les Misrables',
        Author: 'Victor Hugo',
        Quote: '"You who suffer because you love, love still more. To die of love, is to live by it"',
        Amazon: 'http://www.amazon.com/Miserables-Signet-Classics-Victor-Hugo/dp/045141943X/ref=sr_1_1?s=books&ie=UTF8&qid=1442962841&sr=1-1&keywords=les+miserables'
    },
    {
        image: 'https://d.gr-assets.com/books/1348990566s/5470.jpg',
        Book: '1984',
        Author: 'George Orwell',
        Quote: '"If you loved someone, you loved him, and when you had nothing else to give, you still gave him love."',
        Amazon: 'http://www.amazon.com/1984-Signet-Classics-George-Orwell/dp/B00817NW2M/ref=sr_1_1?s=books&ie=UTF8&qid=1442962862&sr=1-1&keywords=1984+by+george+orwell'
    },
    {
        image: 'https://d.gr-assets.com/books/1438728255s/4671.jpg',
        Book: 'The Great Gatsby',
        Author: 'F. Scott Fitzgerald',
        Quote: '"Let us learn to show our friendship for a man when he is alive and not after he is dead."',
        Amazon: 'http://www.amazon.com/Great-Gatsby-F-Scott-Fitzgerald/dp/0743273567/ref=sr_1_2?s=books&ie=UTF8&qid=1442962882&sr=1-2&keywords=the+great+gatsby+by+f.+scott+fitzgerald'
    },
    {
        image: 'https://d.gr-assets.com/books/1309203605s/7126.jpg',
        Book: 'The Count of Monte Cristo',
        Author: 'Alexander Dumas',
        Quote: '"Often we pass beside happiness without seeing it, without looking at it, or even if we have seen and looked at it, without recognizing it."',
        Amazon: 'http://www.amazon.com/Count-Monte-Cristo-Penguin-Classics/dp/0140449264/ref=sr_1_1?s=books&ie=UTF8&qid=1442962906&sr=1-1&keywords=the+count+of+monte+cristo+unabridged'
    },
    {
        image: 'https://d.gr-assets.com/books/1388269517s/1934.jpg',
        Book: 'Little Woman',
        Author: 'Louisa May Alcott',
        Quote: '"I am not afraid of storms, for I am learning how to sail my ship."',
        Amazon: 'http://www.amazon.com/Little-Women-Louisa-May-Alcott/dp/1503280292/ref=sr_1_1?s=books&ie=UTF8&qid=1442962943&sr=1-1&keywords=little+women+by+louisa+may+alcott'
    },
    {
        image: 'https://d.gr-assets.com/books/1388212715s/6185.jpg',
        Book: 'Wuthering Heights',
        Author: 'Emily Bronte',
        Quote: '"Honest people don\'t hide their deeds."',
        Amazon: ''
    },
    {
        image: 'https://d.gr-assets.com/books/1372847500s/5907.jpg',
        Book: 'The Hobbit',
        Author: 'J. R. R. Tolkien',
        Quote: '"There is nothing like looking, if you want to find something. You certainly usually find something, if you look, but it is not always quite the something you were after."',
        Amazon: 'http://www.amazon.com/Hobbit-J-R-Tolkien/dp/054792822X/ref=sr_1_1?s=books&ie=UTF8&qid=1442962984&sr=1-1&keywords=the+hobbit'
    },
    {
        image: 'https://d.gr-assets.com/books/1406512317s/5326.jpg',
        Book: 'A Christmas Carol',
        Author: 'Charles Dickens',
        Quote: '"There is nothing in the world so irresistibly contagious as laughter and good humor."',
        Amazon: 'http://www.amazon.com/Christmas-Carol-Dover-Thrift-Editions/dp/0486268659/ref=sr_1_1?s=books&ie=UTF8&qid=1442963006&sr=1-1&keywords=a+christmas+carol+by+charles+dickens'
    },
    {
        image: 'https://d.gr-assets.com/books/1388178573s/11127.jpg',
        Book: 'The Chronicles of Narnia #1-7',
        Author: 'C. S. Lewis',
        Quote: '"She remembered, as every sensible person does, that you should never never shut yourself up in a wardrobe."',
        Amazon: 'http://www.amazon.com/Chronicles-Narnia-Box-Set-Magicians/dp/B003LNWEMU/ref=sr_1_2?s=books&ie=UTF8&qid=1442963027&sr=1-2&keywords=the+chronicles+of+narnia+box+set'
    },
    {
        image: 'https://d.gr-assets.com/books/1441547516s/4406.jpg',
        Book: 'East of Eden',
        Author: 'John Steinbeck',
        Quote: '"There\'s more beauty in truth, even if it is dreadful beauty."',
        Amazon: 'http://www.amazon.com/East-Penguin-Twentieth-Century-Classics/dp/0140186395/ref=sr_1_1?s=books&ie=UTF8&qid=1442963049&sr=1-1&keywords=east+of+eden+by+john+steinbeck'
    },
    {
        image: 'https://d.gr-assets.com/books/1367545443s/157993.jpg',
        Book: 'The Little Prince',
        Author: 'Antoine de Saint-Exupery',
        Quote: '"The most beautiful things in the world cannot be seen or touched, they are felt with the heart."',
        Amazon: 'http://www.amazon.com/Little-Prince-Antoine-Saint-Exup%C3%A9ry/dp/0156012197/ref=sr_1_1?s=books&ie=UTF8&qid=1442963073&sr=1-1&keywords=the+little+prince'
    },
    {
        image: 'https://d.gr-assets.com/books/1327920219s/2623.jpg',
        Book: 'Great Expectations',
        Author: 'Charles Dickens',
        Quote: '"We need never be ashamed of our tears."',
        Amazon: 'http://www.amazon.com/Little-Prince-Antoine-Saint-Exup%C3%A9ry/dp/0156012197/ref=sr_1_1?s=books&ie=UTF8&qid=1442963073&sr=1-1&keywords=the+little+prince'
    },
    {
        image: 'https://d.gr-assets.com/books/1352912927s/4395.jpg',
        Book: 'The Grapes of Wrath',
        Author: 'John Steinbeck',
        Quote: '"And this you can know- fear the time when Manself will not suffer and die for a concept, for this one quality is man, distinctive in the universe."',
        Amazon: 'http://www.amazon.com/Grapes-Wrath-John-Steinbeck/dp/0143039431/ref=sr_1_1?s=books&ie=UTF8&qid=1442963134&sr=1-1&keywords=the+grapes+of+wrath+john+steinbeck'
    },
    {
        image: 'https://d.gr-assets.com/books/1387151694s/17245.jpg',
        Book: 'Dracula',
        Author: 'Bram Stoker',
        Quote: '"Remember my friend, that knowledge is stronger than memory, and we should not trust the weaker"',
        Amazon: 'http://www.amazon.com/Dracula-Bram-Stoker/dp/0486411095/ref=sr_1_1?s=books&ie=UTF8&qid=1442963159&sr=1-1&keywords=dracula'
    },
    {
        image: 'https://d.gr-assets.com/books/1327872220s/24213.jpg',
        Book: "Alice's Adventures in Wonderland",
        Author: 'Lewis Carroll',
        Quote: '"It’s no use going back to yesterday, because I was a different person then."',
        Amazon: 'http://www.amazon.com/Adventures-Wonderland-Through-Looking-Glass-Classics/dp/0553213458/ref=sr_1_1?s=books&ie=UTF8&qid=1442963181&sr=1-1&keywords=alices+adventures+in+wonderland'
    },
    {
        image: 'https://d.gr-assets.com/books/1373627931s/6969.jpg',
        Book: 'Emma',
        Author: 'Jane Austen',
        Quote: '"Vanity working on a weak head produces every sort of mischief."',
        Amazon: 'http://www.amazon.com/Emma-Dover-Thrift-Editions-Austen/dp/0486406482/ref=sr_1_1?s=books&ie=UTF8&qid=1442963205&sr=1-1&keywords=emma'
    },
    {
        image: 'https://d.gr-assets.com/books/1344922523s/1953.jpg',
        Book: 'A Tale of Two Cities',
        Author: 'Charles Dickens',
        Quote: '"There is prodigious strength in sorrow and despair."',
        Amazon: 'http://www.amazon.com/Tale-Two-Cities-Charles-Dickens/dp/1503219704/ref=sr_1_2?s=books&ie=UTF8&qid=1442963225&sr=1-2&keywords=a+tale+of+two+cities+by+charles+dickens'
    },
    {
        image: 'https://d.gr-assets.com/books/1404811979s/24583.jpg',
        Book: 'The Adventures of Tom Sawyer and Huckleberry Finn',
        Author: 'Mark Twain',
        Quote: '\"Well, everybody does it that way, Huck.\" \"Tom, I am not everybody.\"',
        Amazon: 'http://www.amazon.com/Sawyer-Huckleberry-Wordsworth-Classics-Collection/dp/1853260118/ref=sr_1_2?s=books&ie=UTF8&qid=1442963257&sr=1-2&keywords=the+adventures+of+tom+sawyer+and+huckleberry+finn'
    },
    {
        image: 'https://d.gr-assets.com/books/1381512375s/18490.jpg',
        Book: 'Frankenstein',
        Author: 'Mary Shelley',
        Quote: '"With how many things are we on the brink of becoming acquainted, if cowardice or carelessness did not restrain our inquiries."',
        Amazon: 'http://www.amazon.com/Frankenstein-Mary-Shelley/dp/0486282112/ref=sr_1_1?s=books&ie=UTF8&qid=1442963283&sr=1-1&keywords=frankenstein+by+mary+shelley'
    },
    {
        image: 'https://d.gr-assets.com/books/1390173285s/1381.jpg',
        Book: 'The Odyssey',
        Author: 'Homer',
        Quote: '"Even his griefs are a joy long after to one that remembers all that he wrought and endured."',
        Amazon: 'http://www.amazon.com/Odyssey-Homer/dp/0140268863/ref=sr_1_1?s=books&ie=UTF8&qid=1442963307&sr=1-1&keywords=the+odyssey+by+homer'
    },
    {
        image: 'https://d.gr-assets.com/books/1404810944s/12296.jpg',
        Book: 'The Scarlet Letter',
        Author: 'Nathaniel Hawthorne',
        Quote: '"Do anything, save to lie down and die!"',
        Amazon: 'http://www.amazon.com/Scarlet-Letter-Nathaniel-Hawthorne/dp/1512090565/ref=sr_1_1?s=books&ie=UTF8&qid=1442963342&sr=1-1&keywords=the+scarlet+letter+by+nathaniel+hawthorne'
    },
    {
        image: 'https://d.gr-assets.com/books/1329189714s/2165.jpg',
        Book: 'The Old Man and the Sea',
        Author: 'Ernest Hemingway',
        Quote: '"But man is not made for defeat," he said. "A man can be destroyed but not defeated."',
        Amazon: 'http://www.amazon.com/Old-Man-Sea-Ernest-Hemingway/dp/0684801221/ref=sr_1_1?s=books&ie=UTF8&qid=1442963363&sr=1-1&keywords=the+old+man+and+the+sea+by+ernest+hemingway'
    },
    {
        image: 'https://d.gr-assets.com/books/1327869409s/7624.jpg',
        Book: 'Lord of the Flies',
        Author: 'William Golding',
        Quote: '"The thing is - fear can\'t hurt you any more than a dream."',
        Amazon: 'http://www.amazon.com/Lord-Flies-William-Golding/dp/0399501487/ref=sr_1_1?s=books&ie=UTF8&qid=1442963403&sr=1-1&keywords=lord+of+the+flies'
    },
    {
        image: 'https://d.gr-assets.com/books/1424596966s/5297.jpg',
        Book: 'The Picture of Dorian Gray',
        Author: 'Oscar Wilde',
        Quote: '"Behind every exquisite thing that existed, there was something tragic."',
        Amazon: 'http://www.amazon.com/Picture-Dorian-Gray-Oscar-Wilde/dp/1515190994/ref=sr_1_3?s=books&ie=UTF8&qid=1442963442&sr=1-3&keywords=the+picture+of+dorian+gray+by+oscar+wilde'
    },
    {
        image: 'https://d.gr-assets.com/books/1398034300s/5107.jpg',
        Book: 'The Catcher in the Rye',
        Author: 'J. D. Salinger',
        Quote: '"All morons hate it when you call them a moron."',
        Amazon: 'http://www.amazon.com/Catcher-Rye-J-D-Salinger/dp/0316769487/ref=sr_1_1?s=books&ie=UTF8&qid=1442963466&sr=1-1&keywords=the+catcher+in+the+rye+by+j.d.+salinger'
    },
    {
        image: 'https://d.gr-assets.com/books/1377756377s/7604.jpg',
        Book: 'Lolita',
        Author: 'Vladimir Nabokov',
        Quote: '"Words without experience are meaningless."',
        Amazon: 'http://www.amazon.com/Lolita-Vladimir-Nabokov/dp/0679723161/ref=sr_1_1?s=books&ie=UTF8&qid=1442963493&sr=1-1&keywords=lolita+vladimir+nabokov'
    },
    {
        image: 'https://d.gr-assets.com/books/1328025229s/18405.jpg',
        Book: 'Gone With the Wind',
        Author: 'Margaret Mitchell',
        Quote: '"Never pass up new experiences, They enrich the mind."',
        Amazon: 'http://www.amazon.com/Gone-Wind-Anniversary-Margaret-Mitchell/dp/1451635621/ref=sr_1_1?s=books&ie=UTF8&qid=1442963516&sr=1-1&keywords=gone+with+the+wind'
    },
    {
        image: 'https://d.gr-assets.com/books/1389332672s/16631.jpg',
        Book: 'Steppenwolf',
        Author: 'Hermann Hesse',
        Quote: '"There is no reality except the one contained within us. That is why so many people live such an unreal life. They take the images outside of them for reality and never allow the world within to assert itself."',
        Amazon: 'http://www.amazon.com/Steppenwolf-Novel-Hermann-Hesse/dp/0312278675/ref=sr_1_1?s=books&ie=UTF8&qid=1442963535&sr=1-1&keywords=steppenwolf'
    },
    {
        image: 'https://d.gr-assets.com/books/1434302708s/32261.jpg',
        Book: "Tess of the D'Ubervilles",
        Author: 'Thomas Hardy',
        Quote: '"The beauty or ugliness of a character lay not only in its achievements, but in its aims and impulses; its true history lay, not among things done, but among things willed."',
        Amazon: 'http://www.amazon.com/Tess-DUrbervilles-Dover-Thrift-Editions/dp/0486415899/ref=sr_1_1?s=books&ie=UTF8&qid=1442963558&sr=1-1&keywords=tess+of+the+d%27urbervilles+-+thomas+hardy'
    },
    {
        image: 'https://d.gr-assets.com/books/1352422904s/15823480.jpg',
        Book: 'Anna Karenina',
        Author: 'Leo Tolstoy',
        Quote: '"I always loved you, and if one loves anyone, one loves the whole person, just as they are and not as one would like them to be."',
        Amazon: 'http://www.amazon.com/Anna-Karenina-Leo-Tolstoy/dp/0143035002/ref=sr_1_1?s=books&ie=UTF8&qid=1442963580&sr=1-1&keywords=anna+karenina+by+leo+tolstoy'
    },
    {
        image: 'https://d.gr-assets.com/books/1388706751s/181309.jpg',
        Book: 'Crime and Punishment',
        Author: 'Fyodor Dostoyevski',
        Quote: '"To go wrong in one\'s own way is better then to go right in someone else\'s."',
        Amazon: 'http://www.amazon.com/Crime-Punishment-Fyodor-Dostoyevsky/dp/0486415872/ref=sr_1_1?s=books&ie=UTF8&qid=1442963601&sr=1-1&keywords=crime+and+punishment+by+fyodor+dostoevsky'
    },
    {
        image: 'https://d.gr-assets.com/books/1327884293s/569564.jpg',
        Book: 'The Complete Works of William Shakespeare',
        Author: 'William Shakespeare',
        Quote: '"Who knows himself a braggart, let him fear this, for it will come to pass that every braggart shall be found an ass."',
        Amazon: 'http://www.amazon.com/Complete-William-Shakespeare-Knickerbocker-Classics/dp/1631060244/ref=sr_1_1?s=books&ie=UTF8&qid=1442963623&sr=1-1&keywords=the+complete+works+of+william+shakespeare'
    }
    ];

    this.getQuote = function() {
        return quoteSource;
    };
//    this.getRandomQuote = function() {
//        return quoteSource[Math.floor(Math.random() * quoteSource.length)].Quote;
//    };
    
    this.getRandomQuote = function() {
        var data = quoteSource[Math.floor(Math.random() * quoteSource.length)];
        var obj = {};
        obj.Quote = data.Quote;
        obj.Book = data.Book;
        obj.Author = data.Author;
        return obj;
    };
});