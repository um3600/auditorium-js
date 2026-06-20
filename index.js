
var audi = [
    ["R1S1", "R1S2", "R1S3"],
    ["R2S1", "R2S2", "R2S3"],
    ["R3S1", "R3S2", "R3S3"]
];

for (var i = "i"; i;) {

    var booked = 0;

    for (var i = 0; i < audi.length; i++) {
        for (var j = 0; j < audi[i].length; j++) {
            if (audi[i][j] === "BOOKED") {
                booked++;
            }
        }
    }

    if (booked === 9) {
        console.log("All seats booked. Program ended.");
        running = false;
    } else {

        var option = prompt("0. Exit\n1. Book Seat");

        if (option === "0") {
            break;
        }

        else if (option === "1") {

            var seats = "";

            for (var i = 0; i < audi.length; i++) {
                for (var j = 0; j < audi[i].length; j++) {
                    seats += audi[i][j] + " ";
                }
                seats += "\n";
            }

            console.log(seats);

            var r = +prompt("Select Row");

            if (r < 1 || r > audi.length) {
                console.log("Invalid Row");
            }

            else {

                var c = +prompt("Select Column");

                if (c < 1 || c > audi[r - 1].length) {
                    console.log("Invalid Column");
                }

                else if (audi[r - 1][c - 1] === "X") {
                    console.log("Already Booked");
                }

                else {
                    audi[r - 1][c - 1] = "X";
                    console.log("Seat Booked");
                }
            }
        }

        else {
            console.log("Wrong Input");
        }
    }
}
