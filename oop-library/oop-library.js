function Library(creator = 'Anonymous') {
  this.creator = creator;
  this.playlists = [];
}

function Playlist(name = 'Fresh Playlist') {
  this.name = name;
  this.tracks = [];

  this.avgRating = function() {
    let totRating = 0;
    for (let i = 0; i < this.tracks.length; i++) {
      totRating += this.tracks[i].rating;
    }
    return totRating / this.tracks.length;
  };

  this.totDuration = function() {
    let totDuration = 0;
    for (let i = 0; i < this.tracks.length; i++) {
      totDuration += this.tracks[i].duration;
    }
    return totDuration;
  };
}

function Track(title = 'Hot Track', rating = 0, duration = 0) {
  this.title = title;
  this.rating = rating;
  this.duration = duration;
}

// Define fake tracks.
let song1 = new Track('Song1', 5, 180);
let song2 = new Track('meh', 3, 240);

// Define fake playlist.
let play1 = new Playlist();
play1.tracks.push(song1, song2);

// Define fake library.
let lib1 = new Library();
lib1.playlists.push(play1);