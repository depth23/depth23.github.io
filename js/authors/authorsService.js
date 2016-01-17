var app = angular.module('quoteApp');

app.service('authorsService', function() {
    var authors = [
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/4/4f/Louisa_May_Alcott_headshot.jpg',
        first: 'Louisa May',
        last: 'Alcott',
        url: 'https://en.wikipedia.org/wiki/Louisa_May_Alcott'
        },
        {
        photo: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Jane_Austen_coloured_version.jpg',
        first: 'Jane',
        last: 'Austen',
        url: 'https://en.wikipedia.org/wiki/Jane_Austen'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/0/04/Emily_Bront%C3%AB_cropped.jpg/200px-Emily_Bront%C3%AB_cropped.jpg',
        first: 'Emily',
        last: 'Bront\353',
        url: 'https://en.wikipedia.org/wiki/Emily_Bront%C3%AB'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/1/13/CharlotteBronte.jpg/220px-CharlotteBronte.jpg',
        first: 'Charlotte',
        last: 'Bront\353',
        url: 'https://en.wikipedia.org/wiki/Charlotte_Bront%C3%AB'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/f/fb/LewisCarrollSelfPhoto.jpg/220px-LewisCarrollSelfPhoto.jpg',
        first: 'Lewis',
        last: 'Carroll',
        url: 'https://en.wikipedia.org/wiki/Lewis_Carroll'
        },
        {
        photo: 'http://a3.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,q_80,w_620/MTE5NDg0MDU0OTQ0OTc0MzUx.jpg',
        first: 'Charles',
        last: 'Dickens',
        url: 'https://en.wikipedia.org/wiki/Charles_Dickens'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/7/78/Vasily_Perov_-_%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%A4.%D0%9C.%D0%94%D0%BE%D1%81%D1%82%D0%BE%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_-_Google_Art_Project.jpg/220px-Vasily_Perov_-_%D0%9F%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82_%D0%A4.%D0%9C.%D0%94%D0%BE%D1%81%D1%82%D0%BE%D0%B5%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE_-_Google_Art_Project.jpg',
        first: 'Fyodor',
        last: 'Dostoyevski',
        url: 'https://en.wikipedia.org/wiki/Fyodor_Dostoyevsky'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Nadar_-_Alexander_Dumas_p%C3%A8re_%281802-1870%29_-_Google_Art_Project_2.jpg/220px-Nadar_-_Alexander_Dumas_p%C3%A8re_%281802-1870%29_-_Google_Art_Project_2.jpg',
        first: 'Alexander',
        last: 'Dumas',
        url: 'https://en.wikipedia.org/wiki/Alexandre_Dumas'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/7/7f/11exupery-inline1-500.jpg/275px-11exupery-inline1-500.jpg',
        first: 'Antoine de',
        last: 'Saint-Exup\351ry',
        url: 'https://en.wikipedia.org/wiki/Antoine_de_Saint-Exup%C3%A9ry'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/5/5c/F_Scott_Fitzgerald_1921.jpg/220px-F_Scott_Fitzgerald_1921.jpg',
        first: 'F. Scott',
        last: 'Fitzgerald',
        url: 'https://en.wikipedia.org/wiki/F._Scott_Fitzgerald'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/f/f9/William_Golding_1983.jpg/220px-William_Golding_1983.jpg',
        first: 'William',
        last: 'Golding',
        url: 'https://en.wikipedia.org/wiki/William_Golding'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Thomashardy_restored.jpg/220px-Thomashardy_restored.jpg',
        first: 'Thomas',
        last: 'Hardy',
        url: 'https://en.wikipedia.org/wiki/Thomas_Hardy'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Nathaniel_Hawthorne_by_Brady%2C_1860-64.jpg/220px-Nathaniel_Hawthorne_by_Brady%2C_1860-64.jpg',
        first: 'Nathaniel',
        last: 'Hawthorne',
        url: 'https://en.wikipedia.org/wiki/Nathaniel_Hawthorne'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/2/28/ErnestHemingway.jpg/220px-ErnestHemingway.jpg',
        first: 'Ernest',
        last: 'Hemingway',
        url: 'https://en.wikipedia.org/wiki/Ernest_Hemingway'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/d/da/Hermann_Hesse_2.jpg/220px-Hermann_Hesse_2.jpg',
        first: 'Hermann',
        last: 'Hesse',
        url: 'https://en.wikipedia.org/wiki/Hermann_Hesse'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Homer_British_Museum.jpg/225px-Homer_British_Museum.jpg',
        first: 'Homer',
        last: '',
        url: 'https://en.wikipedia.org/wiki/Homer'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg/220px-Victor_Hugo_by_%C3%89tienne_Carjat_1876_-_full.jpg',
        first: 'Victor',
        last: 'Hugo',
        url: 'https://en.wikipedia.org/wiki/Victor_Hugo'
        },
        {
        photo: 'http://www.neabigread.org/2009_images/books/mockingbird/001-Harper-Lee.png',
        first: 'Harper',
        last: 'Lee',
        url: 'https://en.wikipedia.org/wiki/Harper_Lee'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/en/thumb/1/1e/C.s.lewis3.JPG/220px-C.s.lewis3.JPG',
        first: 'C. S.',
        last: 'Lewis',
        url: 'https://en.wikipedia.org/wiki/C._S._Lewis'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Margaret_Mitchell_NYWTS.jpg/220px-Margaret_Mitchell_NYWTS.jpg',
        first: 'Margaret',
        last: 'Mitchell',
        url: 'https://en.wikipedia.org/wiki/Margaret_Mitchell'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/1/19/Vladimir_Nabokov_1969b.jpg/240px-Vladimir_Nabokov_1969b.jpg',
        first: 'Vladimir',
        last: 'Nabokov',
        url: 'https://en.wikipedia.org/wiki/Vladimir_Nabokov'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/7/7e/George_Orwell_press_photo.jpg/220px-George_Orwell_press_photo.jpg',
        first: 'George',
        last: 'Orwell',
        url: 'https://en.wikipedia.org/wiki/George_Orwell'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/en/thumb/8/8c/JD_Salinger.jpg/220px-JD_Salinger.jpg',
        first: 'J. D.',
        last: 'Salinger',
        url: 'https://en.wikipedia.org/wiki/J._D._Salinger'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/250px-Shakespeare.jpg',
        first: 'William',
        last: 'Shakespeare',
        url: 'https://en.wikipedia.org/wiki/William_Shakespeare'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/6/65/RothwellMaryShelley.jpg/200px-RothwellMaryShelley.jpg',
        first: 'Mary',
        last: 'Shelley',
        url: 'https://en.wikipedia.org/wiki/Mary_Shelley'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/e/e7/John_Steinbeck_1962.jpg/220px-John_Steinbeck_1962.jpg',
        first: 'John',
        last: 'Steinbeck',
        url: 'https://en.wikipedia.org/wiki/John_Steinbeck'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/3/34/Bram_Stoker_1906.jpg/220px-Bram_Stoker_1906.jpg',
        first: 'Bram',
        last: 'Stoker',
        url: 'https://en.wikipedia.org/wiki/Bram_Stoker'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Tolkien_1916.jpg/220px-Tolkien_1916.jpg',
        first: 'J. R. R.',
        last: 'Tolkien',
        url: 'https://en.wikipedia.org/wiki/J._R._R._Tolkien'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/c/c6/L.N.Tolstoy_Prokudin-Gorsky.jpg/220px-L.N.Tolstoy_Prokudin-Gorsky.jpg',
        first: 'Leo',
        last: 'Tolstoy',
        url: 'https://en.wikipedia.org/wiki/Leo_Tolstoy'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/2/25/Mark_Twain%2C_Brady-Handy_photo_portrait%2C_Feb_7%2C_1871%2C_cropped.jpg/200px-Mark_Twain%2C_Brady-Handy_photo_portrait%2C_Feb_7%2C_1871%2C_cropped.jpg',
        first: 'Mark',
        last: 'Twain',
        url: 'https://en.wikipedia.org/wiki/Mark_Twain'
        },
        {
        photo: '//upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Oscar_Wilde_Sarony.jpg/220px-Oscar_Wilde_Sarony.jpg',
        first: 'Oscar',
        last: 'Wilde',
        url: 'https://en.wikipedia.org/wiki/Oscar_Wilde'
        }
    ];
    this.getAuthors = function() {
        return authors;  
    };
});