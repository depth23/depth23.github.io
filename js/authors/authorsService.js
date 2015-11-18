var app = angular.module('quoteApp');

app.service('authorsService', function() {
    var authors = [
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/4/4f/Louisa_May_Alcott_headshot.jpg',
        name: 'Louisa May Alcott',
        url: 'https://en.wikipedia.org/wiki/Louisa_May_Alcott'
        },
        {
        photo: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Jane_Austen_coloured_version.jpg',
        name: 'Jane Austen',
        url: 'https://en.wikipedia.org/wiki/Jane_Austen'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/0/04/Emily_Bront%C3%AB_cropped.jpg/200px-Emily_Bront%C3%AB_cropped.jpg',
        name: 'Emily Bronte',
        url: 'https://en.wikipedia.org/wiki/Emily_Bront%C3%AB'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/1/13/CharlotteBronte.jpg/220px-CharlotteBronte.jpg',
        name: 'Charlotte Bronte',
        url: 'https://en.wikipedia.org/wiki/Charlotte_Bront%C3%AB'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/f/fb/LewisCarrollSelfPhoto.jpg/220px-LewisCarrollSelfPhoto.jpg',
        name: 'Lewis Carroll',
        url: 'https://en.wikipedia.org/wiki/Lewis_Carroll'
        },
        {
        photo: 'http://a3.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,q_80,w_620/MTE5NDg0MDU0OTQ0OTc0MzUx.jpg',
        name: 'Charles Dickens',
        url: 'https://en.wikipedia.org/wiki/Charles_Dickens'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/7/78/Vasily_Perov_-_%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%A4.%D0%9C.%D0%94%D0%BE%D1%81%D1%82%D0%BE%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_-_Google_Art_Project.jpg/220px-Vasily_Perov_-_%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%A4.%D0%9C.%D0%94%D0%BE%D1%81%D1%82%D0%BE%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_-_Google_Art_Project.jpg',
        name: 'Fyodor Dostoyevski',
        url: 'https://en.wikipedia.org/wiki/Fyodor_Dostoyevsky'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Nadar_-_Alexander_Dumas_p%C3%A8re_%281802-1870%29_-_Google_Art_Project_2.jpg/220px-Nadar_-_Alexander_Dumas_p%C3%A8re_%281802-1870%29_-_Google_Art_Project_2.jpg',
        name: 'Alexander Dumas',
        url: 'https://en.wikipedia.org/wiki/Alexandre_Dumas'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/7/7f/11exupery-inline1-500.jpg/275px-11exupery-inline1-500.jpg',
        name: 'Antoine de Saint-Exupery',
        url: 'https://en.wikipedia.org/wiki/Antoine_de_Saint-Exup%C3%A9ry'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/5/5c/F_Scott_Fitzgerald_1921.jpg/220px-F_Scott_Fitzgerald_1921.jpg',
        name: 'F. Scott Fitzgerald',
        url: 'https://en.wikipedia.org/wiki/F._Scott_Fitzgerald'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/f/f9/William_Golding_1983.jpg/220px-William_Golding_1983.jpg',
        name: 'William Golding',
        url: 'https://en.wikipedia.org/wiki/William_Golding'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Thomashardy_restored.jpg/220px-Thomashardy_restored.jpg',
        name: 'Thomas Hardy',
        url: 'https://en.wikipedia.org/wiki/Thomas_Hardy'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Nathaniel_Hawthorne_by_Brady%2C_1860-64.jpg/220px-Nathaniel_Hawthorne_by_Brady%2C_1860-64.jpg',
        name: 'Nathaniel Hawthorne',
        url: 'https://en.wikipedia.org/wiki/Nathaniel_Hawthorne'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/2/28/ErnestHemingway.jpg/220px-ErnestHemingway.jpg',
        name: 'Ernest Hemingway',
        url: 'https://en.wikipedia.org/wiki/Ernest_Hemingway'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/d/da/Hermann_Hesse_2.jpg/220px-Hermann_Hesse_2.jpg',
        name: 'Hermann Hesse',
        url: 'https://en.wikipedia.org/wiki/Hermann_Hesse'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Homer_British_Museum.jpg/225px-Homer_British_Museum.jpg',
        name: 'Homer',
        url: 'https://en.wikipedia.org/wiki/Homer'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg/220px-Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg',
        name: 'Victor Hugo',
        url: 'https://en.wikipedia.org/wiki/Victor_Hugo'
        },
        {
        photo: 'http://www.neabigread.org/2009_images/books/mockingbird/001-Harper-Lee.png',
        name: 'Harper Lee',
        url: 'https://en.wikipedia.org/wiki/Harper_Lee'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/en/thumb/1/1e/C.s.lewis3.JPG/220px-C.s.lewis3.JPG',
        name: 'C. S. Lewis',
        url: 'https://en.wikipedia.org/wiki/C._S._Lewis'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Margaret_Mitchell_NYWTS.jpg/220px-Margaret_Mitchell_NYWTS.jpg',
        name: 'Margaret Mitchell',
        url: 'https://en.wikipedia.org/wiki/Margaret_Mitchell'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/1/19/Vladimir_Nabokov_1969b.jpg/240px-Vladimir_Nabokov_1969b.jpg',
        name: 'Vladimir Nabokov',
        url: 'https://en.wikipedia.org/wiki/Vladimir_Nabokov'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/7/7e/George_Orwell_press_photo.jpg/220px-George_Orwell_press_photo.jpg',
        name: 'George Orwell',
        url: 'https://en.wikipedia.org/wiki/George_Orwell'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/en/thumb/8/8c/JD_Salinger.jpg/220px-JD_Salinger.jpg',
        name: 'J. D. Salinger',
        url: 'https://en.wikipedia.org/wiki/J._D._Salinger'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/250px-Shakespeare.jpg',
        name: 'William Shakespeare',
        url: 'https://en.wikipedia.org/wiki/William_Shakespeare'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/6/65/RothwellMaryShelley.jpg/200px-RothwellMaryShelley.jpg',
        name: 'Mary Shelley',
        url: 'https://en.wikipedia.org/wiki/Mary_Shelley'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/e/e7/John_Steinbeck_1962.jpg/220px-John_Steinbeck_1962.jpg',
        name: 'John Steinbeck',
        url: 'https://en.wikipedia.org/wiki/John_Steinbeck'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/3/34/Bram_Stoker_1906.jpg/220px-Bram_Stoker_1906.jpg',
        name: 'Bram Stoker',
        url: 'https://en.wikipedia.org/wiki/Bram_Stoker'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Tolkien_1916.jpg/220px-Tolkien_1916.jpg',
        name: 'J. R. R. Tolkien',
        url: 'https://en.wikipedia.org/wiki/J._R._R._Tolkien'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/c/c6/L.N.Tolstoy_Prokudin-Gorsky.jpg/220px-L.N.Tolstoy_Prokudin-Gorsky.jpg',
        name: 'Leo Tolstoy',
        url: 'https://en.wikipedia.org/wiki/Leo_Tolstoy'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/2/25/Mark_Twain%2C_Brady-Handy_photo_portrait%2C_Feb_7%2C_1871%2C_cropped.jpg/200px-Mark_Twain%2C_Brady-Handy_photo_portrait%2C_Feb_7%2C_1871%2C_cropped.jpg',
        name: 'Mark Twain',
        url: 'https://en.wikipedia.org/wiki/Mark_Twain'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Oscar_Wilde_Sarony.jpg/220px-Oscar_Wilde_Sarony.jpg',
        name: 'Oscar Wilde',
        url: 'https://en.wikipedia.org/wiki/Oscar_Wilde'
        }
    ];
    this.getAuthors = function() {
        return authors;  
    };
});