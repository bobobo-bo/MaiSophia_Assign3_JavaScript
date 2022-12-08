//sound effect "Slash" by 666HeroHero on Pixabay
//https://pixabay.com/sound-effects/slash-21834/
var slashingSFX = document.getElementById("swordSlash")
var boughtSFX = document.getElementById("dinging")

//all arrays
var slimeHealth = ["<img src='imgs/green1.png'>", "<img src='imgs/green2.png'>", "<img src='imgs/green3.png'>", "<img src='imgs/green4.png'>", "<img src='imgs/yellow1.png'>", "<img src='imgs/yellow2.png'>", "<img src='imgs/yellow3.png'>", "<img src='imgs/yellow4.png'>", "<img src='imgs/orange1.png'>", "<img src='imgs/orange2.png'>", "<img src='imgs/orange3.png'>", "<img src='imgs/orange4.png'>", "<img src='imgs/red1.png'>", "<img src='imgs/red2.png'>", "<img src='imgs/red3.png'>", "<img src='imgs/red4.png'>", "<img src='imgs/slimeAlive.png'>"];

var swordProfile = ["<img src='imgs/sword2.png'>", "<img src='imgs/sword3.png'>", "<img src='imgs/sword4.png'>", "<img src='imgs/sword5.png'>", "<img src='imgs/sword6.png'>"];

var swordTitle = ["Sword: [BRONZE]", "Sword: [STEEL]", "Sword: [OBSIDIAN]", "Sword: [VOLCANIC]", "Sword: [SLIME ERADICATOR]"]

var swordUpgrade = ["Sword Upgrade: [STEEL]", "Sword Upgrade: [OBSIDIAN]", "Sword Upgrade: [VOLCANIC]", "Sword Upgrade: [SLIME ERADICATOR]", "Pay for Sophia's [TUITION]"]

//sound played each time slime is hit
$("#slimeStatus").on("click", function () {
    slashingSFX.play();
    console.log("WHOOSH!");
})

//slime health bar click event
var hits = 0;
$('#slimeStatus').on("click", dying);

function dying() {
    $(".AOE").html(slimeHealth[hits]);
    hits += 1;
    if (hits >= 17) {
        hits = 0;
    }

    //code must be run here to ensure hit damage stacks
    if (swordNumber >= 1) {
        hits += 1;
    }

    if (swordNumber >= 3) {
        hits += 1;
    }

    if (swordNumber >= 5) {
        hits += 1;
    }


    $("#slimeStatus").addClass("slimed-sword");
    console.log(dying);
}

//money counter
var coins = 0;
$('#slimeStatus').on("click", money);

function money() {
    if (hits >= 16) {
        coins += 10;
        document.getElementById("coinsTotal").innerHTML = coins;
    }

    if (coins >= 100) {
        $("#bagTransition img").replaceWith("<img src='imgs/bag_full.png'>");
    }
}

//sound played each time a new sword is bought
$("#upgradePressed").on("click", function () {
    boughtSFX.play();
    console.log("CHA-CHING!");
})

//pressing the upgrade button
var swordNumber = 0;
$('#upgradePressed').on("click", swordBought);
function swordBought() {
    if (coins >= 100) {
        coins -= 100;
        document.getElementById("coinsTotal").innerHTML = coins;

        swordNumber++;
    }

    if (swordNumber == 1) {
        $("#swordType img").replaceWith(swordProfile[0]);
        $("#swordType span").text(swordTitle[0]);
        $("#upgradePressed span").text(swordUpgrade[0]);
    }
    if (swordNumber == 2) {
        $("#swordType img").replaceWith(swordProfile[1]);
        $("#swordType span").text(swordTitle[1]);
        $("#upgradePressed span").text(swordUpgrade[1]);
    }
    if (swordNumber == 3) {
        $("#swordType img").replaceWith(swordProfile[2]);
        $("#swordType span").text(swordTitle[2]);
        $("#upgradePressed span").text(swordUpgrade[2]);
    }
    if (swordNumber == 4) {
        $("#swordType img").replaceWith(swordProfile[3]);
        $("#swordType span").text(swordTitle[3]);
        $("#upgradePressed span").text(swordUpgrade[3]);
    }
    if (swordNumber >= 5) {
        $("#swordType img").replaceWith(swordProfile[4]);
        $("#swordType span").text(swordTitle[4]);
        $("#upgradePressed span").text(swordUpgrade[4]);
    }

    if (coins < 100) {
        $("#bagTransition img").replaceWith("<img src='imgs/bag_empty.png'>");
    }

    console.log(swordBought);
}
