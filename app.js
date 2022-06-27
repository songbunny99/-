var enemyHP = document.getElementById("enemy_hp");
var playerHP = document.getElementById("player_hp");
var playerDmg = document.getElementById("player_dmg");
var enemyDmg = document.getElementById("enemy_dmg");
var battlelog = document.getElementById("battle_log");

var enemyhealth = enemyHP.value;
enemyhealth = 10;
enemyHP.innerHTML = enemyhealth + " HP";

var playerhealth = playerHP.value;
playerhealth = 15;
playerHP.innerHTML = playerhealth + " HP";

var playerdamage = playerDmg.value;
playerdamage = 5;
playerDmg.innerHTML = "DMG: " + playerdamage;

var enemydamage = enemyDmg.value;
enemydamage = 3;
enemyDmg.innerHTML = "DMG: " + enemydamage;

battlelog.innerHTML = "Choose an option..."

document.getElementById("attk_btn").onclick = function () {

    if (!(enemyhealth <= 0)) {
        battlelog.innerHTML = "You strike the enemy...";
        document.getElementById("attk_btn").disabled = false;
        document.getElementById("attk_btn").style.color = "gray";
        enemyhealth.style.color = "red";
        enemyhealth -= playerdamage;
    }
    enemyHP.innerHTML = enemyhealth + " HP";
    setTimeout(function () {
        if (!(playerhealth <= 0)) {
            battlelog.innerHTML = "The enemey strikes back...";
            document.getElementById("attk_btn").disabled = true;
            document.getElementById("attk_btn").style.color = "white";
            enemyhealth.style.color = "white";


            playerhealth -= enemydamage;
        }
        playerHP.innerHTML = playerhealth + " HP";
        setTimeout(BasicLog, 2000);
    }, 2000);
}

function BasicLog() {
    battlelog.innerHTML = "Choose an option..."
}