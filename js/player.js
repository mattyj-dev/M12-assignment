// The Music Player Application v2

// In Lab 19 you created a music player application using object-oriented
// programming techniques. The downside to this application is that it was for
// the most part, static. Albums were added manually in code, albums were added
// to the player manually in code, and the albums were also played manually in
// code. Your job in this assignment will be to do a minimal rewrite of the
// application that allows the user to pick an artist/album from a drop down
// menu on a web page and then click a play button to play the actual album.
// Every time the play button is clicked, you need to keep track of which albums
// are being played and how often. There should be a button on the screen that
// reads “Show my favorite album”. When the user clicks this button, it should
// show the user’s favorite album based on how many times it’s been played. When
// building the application, keep the following in mind:

//     Store artists/albums within an array Bind that array to the drop down menu
//     on the web page In code, iterate through the array and programmatically
//     create new Album class instances based on each album within the array.
//     You’ll also need to add these instances to the player. Add a play button
//     to the web page. When the user selects an artist/album from the drop down
//     menu and clicks the play button, the play() method should be called for
//     that album. This will track that album as being played. When the user
//     clicks the “show my favorite album” button, the favoriteAlbum() method
//     should be called and the user’s favorite album based on number of plays
    // should be displayed in the web page.




    class Album {
        constructor(artist, title) {
            this.artist = artist;
            this.title = title;
            this.played = 0;
        }
    
        play() {
            this.played++;
        }
    
        display() {
            return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`;
        }
    }
    
    const albumsData = [
        { artist: 'Operation Ivy', title: 'Energy' },
        { artist: 'Blink 182', title: 'Dude Ranch' },
        { artist: 'New Found Glory', title: 'Sticks and Stones' }
    ];
    
    const jukebox = {
        albums: [],
    
        addAlbum(album) {
            this.albums.push(album);
        },
    
        favoriteAlbum() {
            let max = -1;
            let fav;
            for (let i = 0; i < this.albums.length; i++) {
                if (this.albums[i].played > max) {
                    max = this.albums[i].played;
                    fav = this.albums[i];
                }
            }
            return fav;
        }
    };
    
    // Populate dropdown menu with albums
    const dropdown = document.getElementById('albums');
    albumsData.forEach(albumData => {
        const option = document.createElement('option');
        option.text = `${albumData.artist} - ${albumData.title}`;
        dropdown.add(option);
    });
    
    // Event listener for play button
    const playButton = document.getElementById('playButton');
    playButton.addEventListener('click', () => {
        const selectedAlbumIndex = dropdown.selectedIndex;
        const selectedAlbumData = albumsData[selectedAlbumIndex];
        const selectedAlbum = new Album(selectedAlbumData.artist, selectedAlbumData.title);
        selectedAlbum.play();
        jukebox.addAlbum(selectedAlbum);
    });
    
    // Event listener for show favorite button
    const showFavoriteButton = document.getElementById('showFavoriteButton');
    showFavoriteButton.addEventListener('click', () => {
        const favoriteAlbum = jukebox.favoriteAlbum();
        const favoriteAlbumDisplay = favoriteAlbum ? favoriteAlbum.display() : 'No favorite album yet';
        document.getElementById('favoriteAlbum').textContent = favoriteAlbumDisplay;
    });
    