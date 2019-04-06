var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

function detailFollow(data) {
  var friendID = "";
  var name = "";

  var fIDholder;

  var friendsFollowed = "";
  var friendsWhoFollow = "";

  for (var i = 0; i < Object.keys(data).length; i++) {
    friendID = Object.keys(data)[i];
    name = data[friendID]["name"];

    // console.log(name);

    for (var j = 0; j < data[friendID]["follows"].length; j++) {
      fIDholder = data[friendID]["follows"][j];

      friendsFollowed += data[fIDholder]["name"] + " ";
    }

    // go to person
    // check who they follow
    // if they follow person of interest, add this person to the list
    for (var k = 0; k < Object.keys(data).length; k++) {
      fIDholder = Object.keys(data)[k];
      if (data[Object.keys(data)[k]]["follows"].indexOf(friendID) > -1) {
        // console.log(data[Object.keys(data)[k]]["name"], " follows ", name, "!");
        friendsWhoFollow += data[fIDholder]["name"] + " ";
      }
    }

    console.log(name, "follows", friendsFollowed, "\b\b, and is followed by", friendsWhoFollow, "\n");
    friendsFollowed = "";
    friendsWhoFollow = "";
  }
}
detailFollow(data);