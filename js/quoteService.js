var app = angular.module('quoteApp');

app.service('quoteService', function() {

var quoteSource = [
    {
        image: '../../img/To-Kill-A-Mockingbird.jpg',
        Book: 'To Kill A Mocking Bird',
        Author: 'Harper Lee',
        Quote: '"You never understand a person until you consider things from his point of view… until you climb into his skin and walk around in it."',
        Amazon: 'http://www.amazon.com/s/ref=nb_sb_ss_i_2_10?url=search-alias%3Dstripbooks&field-keywords=to+kill+a+mockingbird+by+harper+lee&sprefix=to+kill+a+mockingbird+by+harper+lee%2Cstripbooks%2C200'
    },
    {
        image: '../../img/Pride-And-Prejudice.jpg',
        Book: 'Pride and Prejudice',
        Author: 'Jane Austen',
        Quote: '"Vanity and pride are different things, though the words are often used synonymously. A person may be proud without being vain. Pride relates more to our opinion of ourselves, vanity to what we would have others think of us."',
        Amazon: 'http://www.amazon.com/s/ref=nb_sb_ss_i_1_34?url=search-alias%3Dstripbooks&field-keywords=pride+and+prejudice+by+jane+austen&sprefix=pride+and+prejudice+by+jane+austen%2Cstripbooks%2C194&rh=n%3A283155%2Ck%3Apride+and+prejudice+by+jane+austen'
    },
    {
        image: '../../img/Jane-Eyre.jpg',
        Book: 'Jane Eyre',
        Author: 'Charlotte Bronte',
        Quote: '"I am no bird; and no net ensnares me: I am a free human being with an independent will."',
        Amazon: 'http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dstripbooks&field-keywords=jayne+eyre+by+charlotte+bronte'
    },
    {
        image: '../../img/Les-Miserables.jpg',
        Book: 'Les Misrables',
        Author: 'Victor Hugo',
        Quote: '"You who suffer because you love, love still more. To die of love, is to live by it"',
        Amazon: 'http://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Dstripbooks&field-keywords=les+miserables+by+victor+hugo&rh=n%3A283155%2Ck%3Ales+miserables+by+victor+hugo'
    },
    {
        image: '../../img/1984.jpg',
        Book: '1984',
        Author: 'George Orwell',
        Quote: '"If you loved someone, you loved him, and when you had nothing else to give, you still gave him love."',
        Amazon: 'http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dstripbooks&field-keywords=1984+by+george+orwell'
    },
    {
        image: '../../img/The-Great-Gatsby.jpg',
        Book: 'The Great Gatsby',
        Author: 'F. Scott Fitzgerald',
        Quote: '"Let us learn to show our friendship for a man when he is alive and not after he is dead."',
        Amazon: 'http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dstripbooks&field-keywords=the+great+gatsby+by+f.+scott+fitzgerald'
    },
    {
        image: '../../img/The-Count-Of-Monte-Cristo.jpg',
        Book: 'The Count of Monte Cristo',
        Author: 'Alexander Dumas',
        Quote: '"Often we pass beside happiness without seeing it, without looking at it, or even if we have seen and looked at it, without recognizing it."',
        Amazon: 'http://www.amazon.com/s/ref=nb_sb_ss_i_1_29?url=search-alias%3Dstripbooks&field-keywords=the+count+of+monte+cristo+by+alexandre+dumas&sprefix=the+count+of+monte+cristo+by+alexandre+dumas%2Cstripbooks%2C191'
    },
    {
        image: '../../img/Little-Women.jpg',
        Book: 'Little Women',
        Author: 'Louisa May Alcott',
        Quote: '"I am not afraid of storms, for I am learning how to sail my ship."',
        Amazon: 'http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dstripbooks&field-keywords=little+women+by+louisa+may+alcott'
    },
    {
        image: '../../img/Wuthering-Heights.jpg',
        Book: 'Wuthering Heights',
        Author: 'Emily Bronte',
        Quote: '"Honest people don\'t hide their deeds."',
        Amazon: 'http://www.amazon.com/s/ref=nb_sb_ss_i_2_10?url=search-alias%3Dstripbooks&field-keywords=wuthering+heights+by+emily+bronte&sprefix=wuthering+heights+by+emily+bronte%2Cstripbooks%2C191'
    },
    {
        image: '../../img/The-Hobbit.jpg',
        Book: 'The Hobbit',
        Author: 'J. R. R. Tolkien',
        Quote: '"There is nothing like looking, if you want to find something. You certainly usually find something, if you look, but it is not always quite the something you were after."',
        Amazon: 'http://www.amazon.com/s/ref=nb_sb_ss_i_1_13?url=search-alias%3Dstripbooks&field-keywords=the+hobbit+by+j.r.r.+tolkien&sprefix=the+hobbit+by+j.r.r.+tolkien%2Cstripbooks%2C203'
    },
    {
        image: '../../img/A-Christmas-Carol.jpg',
        Book: 'A Christmas Carol',
        Author: 'Charles Dickens',
        Quote: '"There is nothing in the world so irresistibly contagious as laughter and good humor."',
        Amazon: 'http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dstripbooks&field-keywords=a+christmas+carol+by+charles+dickens'
    },
    {
        image: '../../img/The-Chronicles-Of-Narnia.jpg',
        Book: 'The Chronicles of Narnia #1-7',
        Author: 'C. S. Lewis',
        Quote: '"She remembered, as every sensible person does, that you should never never shut yourself up in a wardrobe."',
        Amazon: 'http://www.amazon.com/s/ref=nb_sb_ss_i_1_28?url=search-alias%3Dstripbooks&field-keywords=the+chronicles+of+narnia+by+c.s.+lewis&sprefix=the+chronicles+of+narnia+by+c.s.+lewis%2Cstripbooks%2C552'
    },
    {
        image: '../../img/East-Of-Eden.jpg',
        Book: 'East of Eden',
        Author: 'John Steinbeck',
        Quote: '"There\'s more beauty in truth, even if it is dreadful beauty."',
        Amazon: 'http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dstripbooks&field-keywords=east+of+eden+by+john+steinbeck'
    },
    {
        image: '../../img/The-Little-Prince.jpg',
        Book: 'The Little Prince',
        Author: 'Antoine de Saint-Exupery',
        Quote: '"The most beautiful things in the world cannot be seen or touched, they are felt with the heart."',
        Amazon: 'http://www.amazon.com/s/ref=nb_sb_ss_i_1_20?url=search-alias%3Dstripbooks&field-keywords=the+little+prince+by+antoine+de+saint-exup%C3%A9ry&sprefix=the+little+prince+by+antoine+de+saint-exup%C3%A9ry%2Cstripbooks%2C229'
    },
    {
        image: '../../img/Great-Expectations.jpg',
        Book: 'Great Expectations',
        Author: 'Charles Dickens',
        Quote: '"We need never be ashamed of our tears."',
        Amazon: 'http://www.amazon.com/s/ref=nb_sb_ss_i_2_7?url=search-alias%3Dstripbooks&field-keywords=great+expectations+by+charles+dickens&sprefix=great+expectations+by+charles+dickens%2Cstripbooks%2C192'
    },
    {
        image: '../../img/The-Grapes-Of-Wrath.jpg',
        Book: 'The Grapes of Wrath',
        Author: 'John Steinbeck',
        Quote: '"And this you can know- fear the time when Manself will not suffer and die for a concept, for this one quality is man, distinctive in the universe."',
        Amazon: 'http://www.amazon.com/s/ref=nb_sb_ss_i_1_37?url=search-alias%3Dstripbooks&field-keywords=the+grapes+of+wrath+by+john+steinbeck&sprefix=the+grapes+of+wrath+by+john+steinbeck%2Cstripbooks%2C190&rh=n%3A283155%2Ck%3Athe+grapes+of+wrath+by+john+steinbeck'
    },
    {
        image: '../../img/Dracula.jpg',
        Book: 'Dracula',
        Author: 'Bram Stoker',
        Quote: '"Remember my friend, that knowledge is stronger than memory, and we should not trust the weaker"',
        Amazon: 'http://www.amazon.com/s/ref=nb_sb_ss_i_1_15?url=search-alias%3Dstripbooks&field-keywords=dracula+by+bram+stoker&sprefix=dracula+by+bram+stoker%2Cstripbooks%2C200'
    },
    {
        image: '../../img/Alice-In-Wonderland.jpg',
        Book: "Alice's Adventures in Wonderland",
        Author: 'Lewis Carroll',
        Quote: '"It’s no use going back to yesterday, because I was a different person then."',
        Amazon: 'http://www.amazon.com/s/ref=nb_sb_ss_i_1_34?url=search-alias%3Dstripbooks&field-keywords=alices+adventures+in+wonderland+by+lewis+carroll&sprefix=alices+adventures+in+wonderland+by+lewis+carroll%2Cstripbooks%2C192'
    },
    {
        image: '../../img/Emma.jpg',
        Book: 'Emma',
        Author: 'Jane Austen',
        Quote: '"Vanity working on a weak head produces every sort of mischief."',
        Amazon: 'http://www.amazon.com/s/ref=nb_sb_ss_i_1_7?url=search-alias%3Dstripbooks&field-keywords=emma+by+jane+austen&sprefix=emma+by%2Cstripbooks%2C195'
    },
    {
        image: '../../img/A-Tale-Of-Two-Cities.jpg',
        Book: 'A Tale of Two Cities',
        Author: 'Charles Dickens',
        Quote: '"There is prodigious strength in sorrow and despair."',
        Amazon: 'http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dstripbooks&field-keywords=a+tale+of+two+cities+by+charles+dickens'
    },
    {
        image: '../../img/Tom-Sawyer-And-Huckleberry-Finn.jpg',
        Book: 'The Adventures of Tom Sawyer and Huckleberry Finn',
        Author: 'Mark Twain',
        Quote: '\"Well, everybody does it that way, Huck.\" \"Tom, I am not everybody.\"',
        Amazon: 'http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dstripbooks&field-keywords=the+adventures+of+tom+sawyer+and+huckleberry+finn+by+mark+twain'
    },
    {
        image: '../../img/Frankenstein.jpg',
        Book: 'Frankenstein',
        Author: 'Mary Shelley',
        Quote: '"With how many things are we on the brink of becoming acquainted, if cowardice or carelessness did not restrain our inquiries."',
        Amazon: 'http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dstripbooks&field-keywords=frankenstein+by+mary+shelley&rh=n%3A283155%2Ck%3Afrankenstein+by+mary+shelley'
    },
    {
        image: '../../img/The-Odyssey.jpg',
        Book: 'The Odyssey',
        Author: 'Homer',
        Quote: '"Even his griefs are a joy long after to one that remembers all that he wrought and endured."',
        Amazon: 'http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dstripbooks&field-keywords=the+odyssey+by+homer'
    },
    {
        image: '../../img/The-Scarlet-Letter.jpg',
        Book: 'The Scarlet Letter',
        Author: 'Nathaniel Hawthorne',
        Quote: '"Do anything, save to lie down and die!"',
        Amazon: 'http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dstripbooks&field-keywords=the+scarlet+letter+by+nathaniel+hawthorne'
    },
    {
        image: '../../img/The-Old-Man-And-The-Sea.jpg',
        Book: 'The Old Man and the Sea',
        Author: 'Ernest Hemingway',
        Quote: '"But man is not made for defeat," he said. "A man can be destroyed but not defeated."',
        Amazon: 'http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dstripbooks&field-keywords=the+old+man+and+the+sea+by+ernest+hemingway'
    },
    {
        image: '../../img/Lord-Of-The-Flies.jpg',
        Book: 'Lord of the Flies',
        Author: 'William Golding',
        Quote: '"The thing is - fear can\'t hurt you any more than a dream."',
        Amazon: 'http://www.amazon.com/s/ref=nb_sb_ss_i_1_20?url=search-alias%3Dstripbooks&field-keywords=lord+of+the+flies+by+william+golding&sprefix=lord+of+the+flies+by+william+golding%2Cstripbooks%2C199'
    },
    {
        image: '../../img/The-Picture-Of-Dorian-Gray.jpg',
        Book: 'The Picture of Dorian Gray',
        Author: 'Oscar Wilde',
        Quote: '"Behind every exquisite thing that existed, there was something tragic."',
        Amazon: 'http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dstripbooks&field-keywords=the+picture+of+dorian+gray+by+oscar+wilde'
    },
    {
        image: '../../img/The-Catcher-In-The-Rye.jpg',
        Book: 'The Catcher in the Rye',
        Author: 'J. D. Salinger',
        Quote: '"All morons hate it when you call them a moron."',
        Amazon: 'http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dstripbooks&field-keywords=the+catcher+in+the+rye+by+j.d.+salinger'
    },
    {
        image: '../../img/Lolita.jpg',
        Book: 'Lolita',
        Author: 'Vladimir Nabokov',
        Quote: '"Words without experience are meaningless."',
        Amazon: 'http://www.amazon.com/s/ref=nb_sb_ss_i_1_26?url=search-alias%3Dstripbooks&field-keywords=lolita+by+vladimir+nabokov&sprefix=lolita+by+vladimir+nabokov%2Cstripbooks%2C235'
    },
    {
        image: '../../img/Gone-With-The-Wind.jpg',
        Book: 'Gone With the Wind',
        Author: 'Margaret Mitchell',
        Quote: '"Never pass up new experiences, They enrich the mind."',
        Amazon: 'http://www.amazon.com/s/ref=nb_sb_ss_i_1_22?url=search-alias%3Dstripbooks&field-keywords=gone+with+the+wind+by+margaret+mitchell&sprefix=gone+with+the+wind+by+margaret+mitchell%2Cstripbooks%2C185'
    },
    {
        image: '../../img/Steppenwolf.jpg',
        Book: 'Steppenwolf',
        Author: 'Hermann Hesse',
        Quote: '"There is no reality except the one contained within us. That is why so many people live such an unreal life. They take the images outside of them for reality and never allow the world within to assert itself."',
        Amazon: 'http://www.amazon.com/s/ref=nb_sb_ss_i_1_15?url=search-alias%3Dstripbooks&field-keywords=steppenwolf+by+hermann+hesse&sprefix=steppenwolf+by+hermann+hesse%2Cstripbooks%2C201'
    },
    {
        image: "../../img/Tess-Of-The-D'Urbervilles.jpg",
        Book: "Tess of the D'Urbervilles",
        Author: 'Thomas Hardy',
        Quote: '"The beauty or ugliness of a character lay not only in its achievements, but in its aims and impulses; its true history lay, not among things done, but among things willed."',
        Amazon: 'http://www.amazon.com/s/ref=nb_sb_ss_i_1_41?url=search-alias%3Dstripbooks&field-keywords=tess+of+the+d%27urbervilles+by+thomas+hardy&sprefix=tess+of+the+d%27urbervilles+by+thomas+hardy%2Cstripbooks%2C192'
    },
    {
        image: '../../img/Anna-Karenina.jpg',
        Book: 'Anna Karenina',
        Author: 'Leo Tolstoy',
        Quote: '"I always loved you, and if one loves anyone, one loves the whole person, just as they are and not as one would like them to be."',
        Amazon: 'http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dstripbooks&field-keywords=anna+karenina+by+leo+tolstoy'
    },
    {
        image: '../../img/Crime-And-Punishment.jpg',
        Book: 'Crime and Punishment',
        Author: 'Fyodor Dostoyevski',
        Quote: '"To go wrong in one\'s own way is better then to go right in someone else\'s."',
        Amazon: 'http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dstripbooks&field-keywords=crime+and+punishment+by+fyodor+dostoevsky'
    },
    {
        image: '../../img/The-Complete-Works-Of-William-Shakespeare.jpg',
        Book: 'The Complete Works of William Shakespeare',
        Author: 'William Shakespeare',
        Quote: '"Who knows himself a braggart, let him fear this, for it will come to pass that every braggart shall be found an ass."',
        Amazon: 'http://www.amazon.com/s/ref=nb_sb_noss?url=search-alias%3Dstripbooks&field-keywords=the+complete+works+of+william+shakespeare'
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