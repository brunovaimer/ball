var room = HBInit({ roomName: "✓|FUTSAL x4 |INICIANTES|NOVATOS|PRO|✓", maxPlayers: 16, playerName : "🏁 Áʀʙɪᴛʀᴏ ʙᴏᴛ 🤖", public : true});
room.setDefaultStadium("Classic");
room.setScoreLimit(3);
room.setTimeLimit(4);
room.setTeamsLock(true);
var playerName = "🏁 Áʀʙɪᴛʀᴏ ʙᴏᴛ 🤖";
 
/* STADIUM */
//Os valores se aplicam ao campo em que a partida é jogada - os valores padrão são o mapa oficial
var stadiumWidth = 1150;
var stadiumHeight = 600;
var radiusBall = 6.25;
var throwInLeeway = 350;
var greenLine = 510;
 
/* SETTINGS */
 
var triggerDistance = radiusBall + 15 + 0.01;
var outLineY = stadiumWidth - (radiusBall / 2) + 6;
stadiumWidth += (radiusBall / 2) + 6;
stadiumHeight += (radiusBall / 2) + 6;
var abuser = 0;
 
var Team = {
    SPECTATORS: 0,
    RED: 1,
    BLUE: 2
};
var lastScores = 0;
var lastTeamTouched = 0;
var lineBallPosition;
var exitingPos = null;
var previousBallPos;
var assistingTouch = "";
var lastPlayerTouched = "";
var lat = -14.2;
var long = -51.9;
var senha;
var backMSG = false;
var lastCall;
var isBallUp = false;
var crossed = false;
var isTimeAddedShown = false;
var isTimeAddedShowndos = false;
var isTimeAddedShowntres = false;
var isTimeAddedShowncuatro = false;
var isTimeAddedShowncinco = false;
var isTimeAddedShownseis = false;
var isTimeAddedShownquince = false;
var isTimeAddedShownsiete = false;
var lineCrossedPlayers = [{name: "temp", times: 0}];
var isBallKickedOutside = false;
var previousPlayerTouched;
var timeOutside = 0;
var db = { p: { N: 13, kt: 2 }, log: [] }; function f(a, b, c) { for (var i = 0; i < a.length; i += 1) { if (a[i][b] === c) { return i; } } return -1; } function spammerosFilter(player, message) { if (player.id == 0) { return; } var ind = f(db.log, 'id', player.id); db.log[ind].lm.push({ ts: Date.now() }); if (db.log[ind].lm.length >= db.p.N) { db.log[ind].lm.splice(0, db.log[ind].lm.length - db.p.N); if (db.log[ind].lm.length / ((db.log[ind].lm[db.log[ind].lm.length - 1].ts - db.log[ind].lm[0].ts) / 500) > db.p.kt) { room.kickPlayer(player.id, "[👎] ❌ 🚫 𝐏𝐑𝐎𝐈𝐁𝐈𝐃𝐎 𝐒𝐏𝐀𝐌𝐌 🚫 ❌ ", true); } } }
var db = { p: { N: 6, kt: 1 }, log: [] }; function f(a, b, c) { for (var i = 0; i < a.length; i += 1) { if (a[i][b] === c) { return i; } } return -1; } function spamFilter(player, message) { if (player.id == 0) { return; } var ind = f(db.log, 'id', player.id); db.log[ind].lm.push({ ts: Date.now() }); if (db.log[ind].lm.length >= db.p.N) { db.log[ind].lm.splice(0, db.log[ind].lm.length - db.p.N); if (db.log[ind].lm.length / ((db.log[ind].lm[db.log[ind].lm.length - 1].ts - db.log[ind].lm[0].ts) /500) > db.p.kt) { room.kickPlayer(player.id, "🚫 𝐏𝐑𝐎𝐇𝐈𝐁𝐈𝐃𝐎 𝐒𝐏𝐀𝐌𝐌𝐄𝐑𝐒 🚫", true); } } }
var Futsalx7=`
{

	"name" : "Escreva !help para mais informações",

	"width" : 1275,

	"height" : 635,

	"spawnDistance" : 350,

	"redSpawnPoints" : [
		[ -213, -430
		],
		[ -263, 0
		],
		[ -213, 430
		],
		[ -575, 0
		],
		[ -800, -430
		],
		[ -800, 430
		],
		[ -1200, 0
		]

	],

	"blueSpawnPoints" : [
		[ 213, 430
		],
		[ 263, 0
		],
		[ 213, -430
		],
		[ 575, 0
		],
		[ 800, 430
		],
		[ 800, -430
		],
		[ 1200, 0
		]

	],

	"bg" : { "type" : "hockey", "width" : 0, "height" : 0, "kickOffRadius" : 8, "cornerRadius" : 0 },

	"vertexes" : [
		/* 0 */ { "x" : -1200, "y" : -600, "trait" : "ballArea" },
		
		/* 1 */ { "x" : 0, "y" : 600, "trait" : "kickOffBarrier" },
		/* 2 */ { "x" : 0, "y" : 180, "trait" : "kickOffBarrier", "color" : "878787", "vis" : true, "curve" : 180 },
		/* 3 */ { "x" : 0, "y" : -180, "trait" : "kickOffBarrier", "color" : "878787", "vis" : true, "curve" : 180 },
		/* 4 */ { "x" : 0, "y" : -600, "trait" : "kickOffBarrier" },
		
		/* 5 */ { "x" : -1200, "y" : -110, "trait" : "goalNet", "curve" : 0, "color" : "878787" },
		/* 6 */ { "x" : -1250, "y" : -110, "trait" : "goalNet", "curve" : 0, "color" : "878787", "cMask" : ["ball" ] },
		/* 7 */ { "x" : -1250, "y" : 110, "trait" : "goalNet", "curve" : 0, "color" : "878787", "cMask" : ["ball" ], "radius" : 7 },
		/* 8 */ { "x" : -1200, "y" : 110, "trait" : "goalNet", "curve" : 0, "color" : "878787" },
		/* 9 */ { "x" : 1200, "y" : -110, "trait" : "goalNet", "curve" : 0, "color" : "878787" },
		/* 10 */ { "x" : 1250, "y" : -110, "trait" : "goalNet", "curve" : 0, "color" : "878787" },
		/* 11 */ { "x" : 1250, "y" : 110, "trait" : "goalNet", "curve" : 0, "color" : "878787" },
		/* 12 */ { "x" : 1200, "y" : 110, "trait" : "goalNet", "curve" : 0, "color" : "878787" },
		
		/* 13 */ { "x" : -1200, "y" : 110, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "878787" },
		/* 14 */ { "x" : -1200, "y" : 600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "878787" },
		/* 15 */ { "x" : -1200, "y" : -110, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "878787" },
		/* 16 */ { "x" : -1200, "y" : -600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "878787" },
		/* 17 */ { "x" : -1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 18 */ { "x" : 1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 19 */ { "x" : 1200, "y" : 110, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 20 */ { "x" : 1200, "y" : 600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 21 */ { "x" : 1200, "y" : -600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "878787" },
		/* 22 */ { "x" : 1200, "y" : -110, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "878787" },
		/* 23 */ { "x" : -1200, "y" : -600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		/* 24 */ { "x" : 1200, "y" : -600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		
		/* 25 */ { "x" : 0, "y" : -600, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 26 */ { "x" : 0, "y" : -180, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 27 */ { "x" : 0, "y" : 180, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 28 */ { "x" : 0, "y" : 600, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 29 */ { "x" : 0, "y" : -180, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "878787" },
		/* 30 */ { "x" : 0, "y" : 180, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "878787" },
		/* 31 */ { "x" : 0, "y" : 180, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 32 */ { "x" : 0, "y" : 180, "trait" : "kickOffBarrier", "color" : "878787", "vis" : true, "curve" : -180 },
		/* 33 */ { "x" : 0, "y" : -180, "trait" : "kickOffBarrier", "color" : "878787", "vis" : true, "curve" : -180 },
		/* 34 */ { "x" : 0, "y" : 180, "trait" : "kickOffBarrier", "color" : "878787", "vis" : true, "curve" : 0 },
		/* 35 */ { "x" : 0, "y" : -180, "trait" : "kickOffBarrier", "color" : "878787", "vis" : true, "curve" : 0 },
		
		/* 36 */ { "x" : -1200, "y" : 110, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 37 */ { "x" : -1200, "y" : 600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 38 */ { "x" : -1200, "y" : -600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 39 */ { "x" : -1200, "y" : -110, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 40 */ { "x" : 1200, "y" : -600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 41 */ { "x" : 1200, "y" : -110, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 42 */ { "x" : 1200, "y" : 110, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 43 */ { "x" : 1200, "y" : 600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 44 */ { "x" : -1200, "y" : 600, "trait" : "ballArea" },
		/* 45 */ { "x" : -1200, "y" : -600, "trait" : "ballArea" },
		
		/* 46 */ { "x" : 0, "y" : 600, "trait" : "kickOffBarrier" },
		/* 47 */ { "x" : 0, "y" : 180, "trait" : "kickOffBarrier", "color" : "878787", "vis" : true, "curve" : 180 },
		/* 48 */ { "x" : 0, "y" : -180, "trait" : "kickOffBarrier", "color" : "878787", "vis" : true, "curve" : 180 },
		/* 49 */ { "x" : 0, "y" : -600, "trait" : "kickOffBarrier" },
		
		/* 50 */ { "x" : -1200, "y" : 110, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "878787", "curve" : 0 },
		/* 51 */ { "x" : -1200, "y" : 600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "878787", "curve" : 0 },
		/* 52 */ { "x" : -1200, "y" : -110, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "878787", "curve" : 0 },
		/* 53 */ { "x" : -1200, "y" : -600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "878787", "curve" : 0 },
		/* 54 */ { "x" : -1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 55 */ { "x" : 1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 56 */ { "x" : 1200, "y" : 110, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 57 */ { "x" : 1200, "y" : 600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 58 */ { "x" : 1200, "y" : -600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "878787" },
		/* 59 */ { "x" : 1200, "y" : -110, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "878787" },
		/* 60 */ { "x" : -1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 61 */ { "x" : 1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		
		/* 62 */ { "x" : 0, "y" : -600, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 63 */ { "x" : 0, "y" : -180, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 64 */ { "x" : 0, "y" : -180, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 65 */ { "x" : 0, "y" : 600, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 66 */ { "x" : 0, "y" : -180, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "878787" },
		/* 67 */ { "x" : 0, "y" : 180, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "878787" },
		/* 68 */ { "x" : 0, "y" : 180, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 69 */ { "x" : 0, "y" : 180, "trait" : "kickOffBarrier", "color" : "878787", "vis" : true, "curve" : -180 },
		/* 70 */ { "x" : 0, "y" : -180, "trait" : "kickOffBarrier", "color" : "878787", "vis" : true, "curve" : -180 },
		/* 71 */ { "x" : 0, "y" : 180, "trait" : "kickOffBarrier", "color" : "878787", "vis" : true, "curve" : 0 },
		/* 72 */ { "x" : 0, "y" : -180, "trait" : "kickOffBarrier", "color" : "878787", "vis" : true, "curve" : 0 },
		
		/* 73 */ { "x" : -1200, "y" : 600, "trait" : "ballArea" },
		/* 74 */ { "x" : -1200, "y" : -600, "trait" : "ballArea" },
		
		/* 75 */ { "x" : 0, "y" : 600, "trait" : "kickOffBarrier", "color" : "878787", "vis" : true },
		/* 76 */ { "x" : 0, "y" : 180, "trait" : "kickOffBarrier", "color" : "878787", "vis" : true, "curve" : 180 },
		/* 77 */ { "x" : 0, "y" : -180, "trait" : "kickOffBarrier", "color" : "878787", "vis" : true, "curve" : 180 },
		/* 78 */ { "x" : 0, "y" : -600, "trait" : "kickOffBarrier" },
		
		/* 79 */ { "x" : -1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 80 */ { "x" : 1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 81 */ { "x" : 1200, "y" : 110, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 82 */ { "x" : 1200, "y" : 600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 83 */ { "x" : 1200, "y" : -600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "878787" },
		/* 84 */ { "x" : 1200, "y" : -110, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "878787" },
		/* 85 */ { "x" : -1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 86 */ { "x" : 1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		
		/* 87 */ { "x" : 0, "y" : -600, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 88 */ { "x" : 0, "y" : -180, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 89 */ { "x" : 0, "y" : -180, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "878787" },
		/* 90 */ { "x" : 0, "y" : 180, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "878787" },
		/* 91 */ { "x" : 0, "y" : 180, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 92 */ { "x" : 0, "y" : 180, "trait" : "kickOffBarrier", "color" : "878787", "vis" : true, "curve" : -180 },
		/* 93 */ { "x" : 0, "y" : -180, "trait" : "kickOffBarrier", "color" : "878787", "vis" : true, "curve" : -180 },
		/* 94 */ { "x" : 0, "y" : 180, "trait" : "kickOffBarrier", "color" : "878787", "vis" : true, "curve" : 0 },
		/* 95 */ { "x" : 0, "y" : -180, "trait" : "kickOffBarrier", "color" : "878787", "vis" : true, "curve" : 0 },
		
		/* 96 */ { "x" : -1200, "y" : 600, "trait" : "ballArea" },
		/* 97 */ { "x" : -1200, "y" : -600, "trait" : "ballArea" },
		
		/* 98 */ { "x" : 0, "y" : 600, "trait" : "kickOffBarrier", "vis" : false },
		/* 99 */ { "x" : 0, "y" : 180, "trait" : "kickOffBarrier", "color" : "878787", "vis" : true, "curve" : 180 },
		/* 100 */ { "x" : 0, "y" : -180, "trait" : "kickOffBarrier", "color" : "878787", "vis" : true, "curve" : 180 },
		/* 101 */ { "x" : 0, "y" : -600, "trait" : "kickOffBarrier", "vis" : false, "color" : "878787" },
		
		/* 102 */ { "x" : -1200, "y" : 110, "bCoef" : 2, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "color" : "878787", "curve" : 0 },
		/* 103 */ { "x" : -1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "color" : "878787", "curve" : 0 },
		/* 104 */ { "x" : -1200, "y" : -110, "bCoef" : 2, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "color" : "878787", "curve" : 0 },
		/* 105 */ { "x" : -1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "color" : "878787", "curve" : 0 },
		/* 106 */ { "x" : -1200, "y" : 600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		/* 107 */ { "x" : 1200, "y" : 600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		/* 108 */ { "x" : 1200, "y" : 110, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 109 */ { "x" : 1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 110 */ { "x" : 1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "878787" },
		/* 111 */ { "x" : 1200, "y" : -110, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "878787" },
		/* 112 */ { "x" : -1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 113 */ { "x" : 1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		
		/* 114 */ { "x" : 0, "y" : 180, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "878787" },
		/* 115 */ { "x" : 0, "y" : 180, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 116 */ { "x" : -1, "y" : 180, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		
		/* 117 */ { "x" : -1200, "y" : 110, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 118 */ { "x" : -1200, "y" : 600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 119 */ { "x" : -1200, "y" : 110, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 120 */ { "x" : -1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 121 */ { "x" : -1200, "y" : -600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 122 */ { "x" : -1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 123 */ { "x" : 1200, "y" : -110, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 124 */ { "x" : 1200, "y" : -110, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 125 */ { "x" : -1207, "y" : 110, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		/* 126 */ { "x" : -1207, "y" : 600, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		/* 127 */ { "x" : -1207, "y" : -600, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		/* 128 */ { "x" : -1207, "y" : -110, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		/* 129 */ { "x" : 1207, "y" : -600, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		/* 130 */ { "x" : 1207, "y" : -110, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		/* 131 */ { "x" : 1207, "y" : 110, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		/* 132 */ { "x" : 1207, "y" : 600, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		
		/* 133 */ { "x" : 1200, "y" : -110, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0, "color" : "ffffff" },
		/* 134 */ { "x" : 1200, "y" : 110, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0, "color" : "ffffff" },
		/* 135 */ { "x" : 0, "y" : -180, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0 },
		/* 136 */ { "x" : 0, "y" : 180, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0 },
		/* 137 */ { "x" : 0, "y" : -11, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 180 },
		/* 138 */ { "x" : 0, "y" : 11, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 180 },
		/* 139 */ { "x" : 0, "y" : -11, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -180 },
		/* 140 */ { "x" : 0, "y" : 11, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -180 },
		/* 141 */ { "x" : -525.1982581967213, "y" : 584, "bCoef" : 0.1, "trait" : "line" },
		/* 142 */ { "x" : -525.1982581967213, "y" : 616, "bCoef" : 0.1, "trait" : "line" },
		/* 143 */ { "x" : -267.4933401639344, "y" : 584, "bCoef" : 0.1, "trait" : "line" },
		/* 144 */ { "x" : -267.4933401639344, "y" : 616, "bCoef" : 0.1, "trait" : "line" },
		/* 145 */ { "x" : 505.62141393442624, "y" : 584, "bCoef" : 0.1, "trait" : "line" },
		/* 146 */ { "x" : 505.62141393442624, "y" : 616, "bCoef" : 0.1, "trait" : "line" },
		/* 147 */ { "x" : 247.91649590163934, "y" : 584, "bCoef" : 0.1, "trait" : "line" },
		/* 148 */ { "x" : 247.91649590163934, "y" : 616, "bCoef" : 0.1, "trait" : "line" },
		/* 149 */ { "x" : -828.0015368852459, "y" : 600, "bCoef" : 0.1, "trait" : "line" },
		/* 150 */ { "x" : -828.0015368852459, "y" : 616, "bCoef" : 0.1, "trait" : "line" },
		/* 151 */ { "x" : 1220.33349609375, "y" : 251.9681483400014, "bCoef" : 0.1, "trait" : "line" },
		/* 152 */ { "x" : 1201.33349609375, "y" : 251.9681483400014, "bCoef" : 0.1, "trait" : "line" },
		/* 153 */ { "x" : 1219.33349609375, "y" : -251.9681483400014, "bCoef" : 0.1, "trait" : "line" },
		/* 154 */ { "x" : 1200.33349609375, "y" : -251.9681483400014, "bCoef" : 0.1, "trait" : "line" },
		/* 155 */ { "x" : -841.1245088945966, "y" : -601, "bCoef" : 0.1, "trait" : "line" },
		/* 156 */ { "x" : -841.1245088945966, "y" : -617, "bCoef" : 0.1, "trait" : "line" },
		/* 157 */ { "x" : 808.4246926229508, "y" : 600, "bCoef" : 0.1, "trait" : "line" },
		/* 158 */ { "x" : 808.4246926229508, "y" : 616, "bCoef" : 0.1, "trait" : "line" },
		/* 159 */ { "x" : 837.7690984113394, "y" : -601, "bCoef" : 0.1, "trait" : "line" },
		/* 160 */ { "x" : 837.7690984113394, "y" : -617, "bCoef" : 0.1, "trait" : "line" },
		/* 161 */ { "x" : -1220.0747488827305, "y" : -251.82895884262769, "bCoef" : 0.1, "trait" : "line" },
		/* 162 */ { "x" : -1201.0752587242073, "y" : -251.9681483400014, "bCoef" : 0.1, "trait" : "line" },
		/* 163 */ { "x" : -1218.9226063416277, "y" : 251.9681483400014, "bCoef" : 0.1, "trait" : "line" },
		/* 164 */ { "x" : -1199.9231161831044, "y" : 251.9681483400014, "bCoef" : 0.1, "trait" : "line" },
		/* 165 */ { "x" : -1200, "y" : 570.456511053482, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 166 */ { "x" : -1171.6369452864983, "y" : 600, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 167 */ { "x" : -1200, "y" : -569.6420271253103, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 168 */ { "x" : -1170.6369452864983, "y" : -600, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 169 */ { "x" : 1200, "y" : -571.0124590189979, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 170 */ { "x" : 1170.319141439366, "y" : -600, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 171 */ { "x" : 1200, "y" : 569.9997004222528, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 172 */ { "x" : 1171.319141439366, "y" : 600, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 173 */ { "x" : -787, "y" : 205, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0 },
		/* 174 */ { "x" : -787, "y" : -205, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 44.33638217658901 },
		/* 175 */ { "x" : -787, "y" : -205, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90 },
		/* 176 */ { "x" : -1075, "y" : -470, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90 },
		/* 177 */ { "x" : -787, "y" : 205, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 90 },
		/* 178 */ { "x" : -787, "y" : -5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 179 */ { "x" : -787, "y" : 0.1561968168675687, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 180 */ { "x" : -787, "y" : -5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 181 */ { "x" : -787, "y" : 4.614580423494619, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 182 */ { "x" : -787, "y" : 2.3853886201811116, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 183 */ { "x" : -787, "y" : -5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 184 */ { "x" : -787, "y" : 5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 185 */ { "x" : -787, "y" : -5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 186 */ { "x" : -610, "y" : -1.1475001518364962, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 187 */ { "x" : -610, "y" : 2.077131467790089, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 188 */ { "x" : -610, "y" : -4.372131771463081, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 189 */ { "x" : -610, "y" : 5.301763087416674, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 190 */ { "x" : -610, "y" : 3.6894472776033993, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 191 */ { "x" : -610, "y" : -2.759815961649778, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 192 */ { "x" : -610, "y" : 6.107920992323329, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 193 */ { "x" : -610, "y" : -5.178289676369722, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		
		/* 194 */ { "x" : 0, "y" : -660, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "vis" : false },
		/* 195 */ { "x" : 0, "y" : 660, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "vis" : false },
		
		/* 196 */ { "x" : -610, "y" : -299, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 197 */ { "x" : -610, "y" : -296, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 198 */ { "x" : -610, "y" : 296, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 199 */ { "x" : -610, "y" : 299, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		
		/* 200 */ { "bCoef" : 0.1, "trait" : "goalNet", "x" : -1252, "y" : -110, "vis" : false, "cGroup" : ["wall" ], "curve" : 0 },
		/* 201 */ { "bCoef" : 0.1, "trait" : "goalNet", "x" : -1252, "y" : 110, "vis" : false, "cGroup" : ["wall" ], "curve" : 0 },
		/* 202 */ { "bCoef" : 0.1, "trait" : "goalNet", "x" : 1252, "y" : -110, "vis" : false, "cGroup" : ["wall" ], "curve" : 0 },
		/* 203 */ { "bCoef" : 0.1, "trait" : "goalNet", "x" : 1252, "y" : 110, "vis" : false, "cGroup" : ["wall" ], "curve" : 0 },
		
		/* 204 */ { "bCoef" : 0, "trait" : "line", "x" : -1200, "y" : 110, "color" : "c85963" },
		/* 205 */ { "bCoef" : 0, "trait" : "line", "x" : -1200, "y" : -110, "color" : "c85963" },
		/* 206 */ { "bCoef" : 0, "trait" : "line", "x" : -1200, "y" : 110, "color" : "a21217" },
		/* 207 */ { "bCoef" : 0, "trait" : "line", "x" : -1200, "y" : 66, "color" : "a21217" },
		/* 208 */ { "bCoef" : 0, "trait" : "line", "x" : -1200, "y" : 39, "color" : "a21217" },
		/* 209 */ { "bCoef" : 0, "trait" : "line", "x" : -1200, "y" : 12, "color" : "a21217" },
		/* 210 */ { "bCoef" : 0, "trait" : "line", "x" : -1200, "y" : -69, "color" : "a21217" },
		/* 211 */ { "bCoef" : 0, "trait" : "line", "x" : -1200, "y" : -110, "color" : "a21217" },
		/* 212 */ { "bCoef" : 0, "trait" : "line", "x" : -1200, "y" : -15, "color" : "a21217" },
		/* 213 */ { "bCoef" : 0, "trait" : "line", "x" : -1200, "y" : -42, "color" : "a21217" },
		/* 214 */ { "bCoef" : 0, "trait" : "line", "x" : 1200, "y" : 110, "color" : "4a46f2" },
		/* 215 */ { "bCoef" : 0, "trait" : "line", "x" : 1200, "y" : -110, "color" : "4a46f2" },
		/* 216 */ { "bCoef" : 0, "trait" : "line", "x" : 1200, "y" : 110, "color" : "092cff" },
		/* 217 */ { "bCoef" : 0, "trait" : "line", "x" : 1200, "y" : 66, "color" : "092cff" },
		/* 218 */ { "bCoef" : 0, "trait" : "line", "x" : 1200, "y" : 39, "color" : "092cff" },
		/* 219 */ { "bCoef" : 0, "trait" : "line", "x" : 1200, "y" : 12, "color" : "092cff" },
		/* 220 */ { "bCoef" : 0, "trait" : "line", "x" : 1200, "y" : -69, "color" : "092cff" },
		/* 221 */ { "bCoef" : 0, "trait" : "line", "x" : 1200, "y" : -110, "color" : "092cff" },
		/* 222 */ { "bCoef" : 0, "trait" : "line", "x" : 1200, "y" : -15, "color" : "092cff" },
		/* 223 */ { "bCoef" : 0, "trait" : "line", "x" : 1200, "y" : -42, "color" : "092cff" },
		/* 224 */ { "bCoef" : 0, "trait" : "line", "x" : -1200, "y" : -470, "curve" : 0 },
		/* 225 */ { "bCoef" : 0, "trait" : "line", "x" : -1075, "y" : 470, "curve" : 90 },
		/* 226 */ { "bCoef" : 0, "trait" : "line", "x" : -1200, "y" : 470 },
		/* 227 */ { "x" : 787, "y" : -205, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0, "color" : "878787" },
		/* 228 */ { "x" : 787, "y" : 205, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 44.33638217658901, "color" : "878787" },
		/* 229 */ { "x" : 787, "y" : 205, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90, "color" : "878787" },
		/* 230 */ { "x" : 1075, "y" : 470, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90, "color" : "878787" },
		/* 231 */ { "x" : 787, "y" : -205, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 90, "color" : "878787" },
		/* 232 */ { "x" : 787, "y" : 5.145341211815264, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "878787" },
		/* 233 */ { "x" : 787, "y" : -0.010663810350735048, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "878787" },
		/* 234 */ { "x" : 787, "y" : 5.145207323606769, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "878787" },
		/* 235 */ { "x" : 787, "y" : -4.468863459043746, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "878787" },
		/* 236 */ { "x" : 787, "y" : -2.2397636346972547, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "878787" },
		/* 237 */ { "x" : 787, "y" : 5.145274267711017, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "878787" },
		/* 238 */ { "x" : 787, "y" : -4.854245235055558, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "878787" },
		/* 239 */ { "x" : 787, "y" : 5.145173851554631, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "878787" },
		/* 240 */ { "bCoef" : 0, "trait" : "line", "x" : 1200, "y" : 470, "curve" : 0, "color" : "878787" },
		/* 241 */ { "bCoef" : 0, "trait" : "line", "x" : 1075, "y" : -470, "curve" : 90, "color" : "878787" },
		/* 242 */ { "bCoef" : 0, "trait" : "line", "x" : 1200, "y" : -470 },
		/* 243 */ { "x" : 610, "y" : -1.1475001518364962, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "878787" },
		/* 244 */ { "x" : 610, "y" : 2.077131467790089, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "878787" },
		/* 245 */ { "x" : 610, "y" : -4.372131771463081, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "878787" },
		/* 246 */ { "x" : 610, "y" : 5.301763087416674, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "878787" },
		/* 247 */ { "x" : 610, "y" : 3.6894472776033993, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "878787" },
		/* 248 */ { "x" : 610, "y" : -2.759815961649778, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "878787" },
		/* 249 */ { "x" : 610, "y" : 6.107920992323329, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "878787" },
		/* 250 */ { "x" : 610, "y" : -5.178289676369722, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "color" : "878787" },
		/* 251 */ { "x" : 610, "y" : -299, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "878787" },
		/* 252 */ { "x" : 610, "y" : -296, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "878787" },
		/* 253 */ { "x" : 610, "y" : 296, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "878787" },
		/* 254 */ { "x" : 610, "y" : 299, "bCoef" : 0.1, "trait" : "line", "curve" : 200, "color" : "878787" }

	],

	"segments" : [
		{ "v0" : 5, "v1" : 6, "curve" : 0, "color" : "878787", "trait" : "goalNet", "y" : -110 },
		{ "v0" : 7, "v1" : 8, "curve" : 0, "color" : "878787", "trait" : "goalNet", "y" : 110 },
		{ "v0" : 9, "v1" : 10, "curve" : 0, "color" : "878787", "trait" : "goalNet", "y" : -110 },
		{ "v0" : 11, "v1" : 12, "curve" : 0, "color" : "878787", "trait" : "goalNet", "y" : 110 },
		
		{ "v0" : 1, "v1" : 2, "trait" : "kickOffBarrier" },
		{ "v0" : 3, "v1" : 4, "trait" : "kickOffBarrier" },
		
		{ "v0" : 13, "v1" : 14, "vis" : true, "color" : "878787", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" },
		{ "v0" : 15, "v1" : 16, "vis" : true, "color" : "878787", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -1200 },
		{ "v0" : 19, "v1" : 20, "vis" : true, "color" : "878787", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		{ "v0" : 21, "v1" : 22, "vis" : true, "color" : "878787", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		{ "v0" : 23, "v1" : 24, "curve" : 0, "vis" : true, "color" : "878787", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : -600 },
		
		{ "v0" : 25, "v1" : 26, "vis" : true, "color" : "878787", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 27, "v1" : 28, "vis" : true, "color" : "878787", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		
		{ "v0" : 36, "v1" : 37, "curve" : 0, "vis" : false, "color" : "878787", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -700 },
		{ "v0" : 38, "v1" : 39, "curve" : 0, "vis" : false, "color" : "878787", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -1200 },
		{ "v0" : 40, "v1" : 41, "curve" : 0, "vis" : false, "color" : "878787", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		{ "v0" : 42, "v1" : 43, "curve" : 2.50208708167, "vis" : false, "color" : "878787", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		
		{ "v0" : 46, "v1" : 47, "trait" : "kickOffBarrier" },
		{ "v0" : 48, "v1" : 49, "trait" : "kickOffBarrier" },
		
		{ "v0" : 50, "v1" : 51, "curve" : 0, "vis" : true, "color" : "878787", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" },
		{ "v0" : 52, "v1" : 53, "curve" : 0, "vis" : true, "color" : "878787", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -1200 },
		{ "v0" : 56, "v1" : 57, "vis" : true, "color" : "878787", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		{ "v0" : 58, "v1" : 59, "vis" : true, "color" : "878787", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		
		{ "v0" : 62, "v1" : 63, "vis" : true, "color" : "878787", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 75, "v1" : 76, "vis" : true, "color" : "878787", "trait" : "kickOffBarrier" },
		{ "v0" : 77, "v1" : 78, "trait" : "kickOffBarrier" },
		
		{ "v0" : 81, "v1" : 82, "vis" : true, "color" : "878787", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		{ "v0" : 83, "v1" : 84, "vis" : true, "color" : "878787", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		
		{ "v0" : 87, "v1" : 88, "vis" : true, "color" : "878787", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 99, "v1" : 100, "curve" : 180, "vis" : true, "color" : "878787", "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 99, "v1" : 100, "curve" : -180, "vis" : true, "color" : "878787", "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 100, "v1" : 101, "vis" : true, "color" : "878787", "trait" : "kickOffBarrier" },
		
		{ "v0" : 102, "v1" : 103, "curve" : 0, "vis" : true, "color" : "878787", "bCoef" : 2, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		{ "v0" : 104, "v1" : 105, "curve" : 0, "vis" : true, "color" : "878787", "bCoef" : 2, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "x" : -1200 },
		{ "v0" : 106, "v1" : 107, "curve" : 0, "vis" : true, "color" : "878787", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : 600 },
		{ "v0" : 108, "v1" : 109, "vis" : true, "color" : "878787", "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		{ "v0" : 110, "v1" : 111, "vis" : true, "color" : "878787", "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		{ "v0" : 125, "v1" : 126, "vis" : false, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "x" : -707 },
		{ "v0" : 127, "v1" : 128, "vis" : false, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "x" : -1207 },
		{ "v0" : 129, "v1" : 130, "vis" : false, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "x" : 1207 },
		{ "v0" : 131, "v1" : 132, "vis" : false, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "x" : 1207 },
		
		{ "v0" : 133, "v1" : 134, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 135, "v1" : 136, "curve" : 0, "vis" : true, "color" : "878787", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 137, "v1" : 138, "curve" : 180, "vis" : true, "color" : "878787", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 139, "v1" : 140, "curve" : -180, "vis" : true, "color" : "878787", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 141, "v1" : 142, "curve" : 0, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : -240 },
		{ "v0" : 143, "v1" : 144, "curve" : 0, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : -120 },
		{ "v0" : 145, "v1" : 146, "curve" : 0, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : 240 },
		{ "v0" : 147, "v1" : 148, "curve" : 0, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : 120 },
		{ "v0" : 149, "v1" : 150, "curve" : 0, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 151, "v1" : 152, "curve" : 0, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 251.9681483400014 },
		{ "v0" : 153, "v1" : 154, "curve" : 0, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -251.9681483400014 },
		{ "v0" : 155, "v1" : 156, "curve" : 0, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 157, "v1" : 158, "curve" : 0, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		{ "v0" : 159, "v1" : 160, "curve" : 0, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		{ "v0" : 161, "v1" : 162, "curve" : 0, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },
		{ "v0" : 163, "v1" : 164, "curve" : 0, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 251.9681483400014 },
		{ "v0" : 166, "v1" : 165, "curve" : -90, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 168, "v1" : 167, "curve" : 90, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 170, "v1" : 169, "curve" : -90, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 172, "v1" : 171, "curve" : 90, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 173, "v1" : 174, "curve" : 0, "vis" : true, "color" : "878787", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 175, "v1" : 176, "curve" : -90, "vis" : true, "color" : "878787", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 179, "v1" : 178, "curve" : 180, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 178, "v1" : 179, "curve" : 180, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 181, "v1" : 180, "curve" : 180, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 180, "v1" : 181, "curve" : 180, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 183, "v1" : 182, "curve" : 180, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 182, "v1" : 183, "curve" : 180, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 185, "v1" : 184, "curve" : 180, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 184, "v1" : 185, "curve" : 180, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : -787 },
		{ "v0" : 187, "v1" : 186, "curve" : 180, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 186, "v1" : 187, "curve" : 180, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 189, "v1" : 188, "curve" : 180, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 188, "v1" : 189, "curve" : 180, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 191, "v1" : 190, "curve" : 180, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 190, "v1" : 191, "curve" : 180, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 193, "v1" : 192, "curve" : 180, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 192, "v1" : 193, "curve" : 180, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		
		{ "v0" : 101, "v1" : 194, "vis" : false, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 98, "v1" : 195, "vis" : false, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		
		{ "v0" : 196, "v1" : 197, "curve" : -197.38121949057748, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 197, "v1" : 196, "curve" : -213.29219661707097, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 198, "v1" : 199, "curve" : -197.38121949057748, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		{ "v0" : 199, "v1" : 198, "curve" : -213.29219661707097, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : -610 },
		
		{ "curve" : 0, "vis" : true, "color" : "878787", "bCoef" : 0, "trait" : "goalNet", "v0" : 7, "v1" : 6, "cMask" : ["ball" ] },
		{ "curve" : 0, "vis" : true, "color" : "878787", "bCoef" : 0, "trait" : "goalNet", "v0" : 11, "v1" : 10 },
		{ "curve" : 0, "vis" : false, "color" : "878787", "bCoef" : 0.1, "trait" : "goalNet", "v0" : 200, "v1" : 201, "x" : -1252, "cGroup" : ["wall" ] },
		{ "curve" : 0, "vis" : false, "color" : "878787", "bCoef" : 0.1, "trait" : "goalNet", "v0" : 202, "v1" : 203, "x" : 1252, "cGroup" : ["wall" ] },
		
		{ "curve" : 0, "vis" : true, "color" : "c85963", "bCoef" : 0, "trait" : "line", "v0" : 204, "v1" : 205, "x" : -1200 },
		{ "curve" : 0, "vis" : true, "color" : "a21217", "bCoef" : 0, "trait" : "line", "v0" : 206, "v1" : 207, "x" : -1200 },
		{ "curve" : 0, "vis" : true, "color" : "a21217", "bCoef" : 0, "trait" : "line", "v0" : 208, "v1" : 209, "x" : -1200 },
		{ "curve" : 0, "vis" : true, "color" : "a21217", "bCoef" : 0, "trait" : "line", "v0" : 210, "v1" : 211, "x" : -1200 },
		{ "curve" : 0, "vis" : true, "color" : "a21217", "bCoef" : 0, "trait" : "line", "v0" : 212, "v1" : 213, "x" : -1200 },
		{ "curve" : 0, "vis" : true, "color" : "4a46f2", "bCoef" : 0, "trait" : "line", "v0" : 214, "v1" : 215, "x" : 1200 },
		{ "curve" : 0, "vis" : true, "color" : "092cff", "bCoef" : 0, "trait" : "line", "v0" : 216, "v1" : 217, "x" : 1200 },
		{ "curve" : 0, "vis" : true, "color" : "092cff", "bCoef" : 0, "trait" : "line", "v0" : 218, "v1" : 219, "x" : 1200 },
		{ "curve" : 0, "vis" : true, "color" : "092cff", "bCoef" : 0, "trait" : "line", "v0" : 220, "v1" : 221, "x" : 1200 },
		{ "curve" : 0, "vis" : true, "color" : "092cff", "bCoef" : 0, "trait" : "line", "v0" : 222, "v1" : 223, "x" : 1200 },
		{ "curve" : 0, "vis" : true, "color" : "878787", "bCoef" : 0, "trait" : "line", "v0" : 176, "v1" : 224, "y" : -470 },
		{ "curve" : 90, "vis" : true, "color" : "878787", "bCoef" : 0, "trait" : "line", "v0" : 177, "v1" : 225 },
		{ "curve" : 0, "vis" : true, "color" : "878787", "bCoef" : 0, "trait" : "line", "v0" : 225, "v1" : 226, "y" : 470 },
		{ "v0" : 227, "v1" : 228, "curve" : 0, "vis" : true, "color" : "878787", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 229, "v1" : 230, "curve" : -90, "vis" : true, "color" : "878787", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 233, "v1" : 232, "curve" : 180, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 232, "v1" : 233, "curve" : 180, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 235, "v1" : 234, "curve" : 180, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 234, "v1" : 235, "curve" : 180, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 237, "v1" : 236, "curve" : 180, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 236, "v1" : 237, "curve" : 180, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 239, "v1" : 238, "curve" : 180, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "v0" : 238, "v1" : 239, "curve" : 180, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : 787 },
		{ "curve" : 0, "vis" : true, "color" : "878787", "bCoef" : 0, "trait" : "line", "v0" : 230, "v1" : 240, "y" : -470 },
		{ "curve" : 90, "vis" : true, "color" : "878787", "bCoef" : 0, "trait" : "line", "v0" : 231, "v1" : 241 },
		{ "curve" : 0, "vis" : true, "color" : "878787", "bCoef" : 0, "trait" : "line", "v0" : 241, "v1" : 242, "y" : 470 },
		{ "v0" : 244, "v1" : 243, "curve" : 180, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 243, "v1" : 244, "curve" : 180, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 246, "v1" : 245, "curve" : 180, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 245, "v1" : 246, "curve" : 180, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 248, "v1" : 247, "curve" : 180, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 247, "v1" : 248, "curve" : 180, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 250, "v1" : 249, "curve" : 180, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 249, "v1" : 250, "curve" : 180, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 251, "v1" : 252, "curve" : -197.38121949057748, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 252, "v1" : 251, "curve" : -213.29219661707097, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 253, "v1" : 254, "curve" : -197.38121949057748, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : 610 },
		{ "v0" : 254, "v1" : 253, "curve" : -213.29219661707097, "vis" : true, "color" : "878787", "bCoef" : 0.1, "trait" : "line", "x" : 610 }

	],

	"goals" : [
		{ "p0" : [1206.25,109 ], "p1" : [1206.25,-109 ], "team" : "blue" },
		{ "p0" : [-1206.25,109 ], "p1" : [-1206.25,-109 ], "team" : "red" }

	],

	"discs" : [
		{ "radius" : 6, "pos" : [1200,110 ], "color" : "00008b", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [1200,-110 ], "color" : "00008b", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [-1200,110 ], "color" : "a00000", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [-1200,-110 ], "color" : "a00000", "trait" : "goalPost" },
		
		{ "radius" : 3, "invMass" : 0, "pos" : [-1200,600 ], "color" : "8b0000", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [-1200,-600 ], "color" : "8b0000", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 4, "invMass" : 0, "pos" : [1200,-600 ], "color" : "0e00ad", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 4, "invMass" : 0, "pos" : [1200,600 ], "color" : "0e00ad", "bCoef" : 0.1, "trait" : "line" }

	],

	"planes" : [
		{ "normal" : [0,-1 ], "dist" : -600, "trait" : "ballArea", "bCoef" : 1, "curve" : 0 },
		{ "normal" : [0,1 ], "dist" : -600, "trait" : "ballArea", "vis" : false, "curve" : 0, "bCoef" : 1 },
		
		{ "normal" : [1,0 ], "dist" : -1275, "bCoef" : 0.1 },
		{ "normal" : [0,1 ], "dist" : -635, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -635, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -1275, "bCoef" : 0.1 },
		
		{ "normal" : [1,0 ], "dist" : -1250, "bCoef" : 0.1, "trait" : "ballArea" },
		{ "normal" : [-1,0 ], "dist" : -1250, "bCoef" : 0.1, "trait" : "ballArea" }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] },
		"line" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] }

	},

	"playerPhysics" : {
		"bCoef" : 0,
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.083,
		"kickStrength" : 5

	},

	"ballPhysics" : {
		"radius" : 6.25,
		"bCoef" : 0.35,
		"invMass" : 1.5,
		"damping" : 0.99,
		"color" : "FFCC00"

	}
}`;
var Futsalx7ConRedes=`
{

	"name" : "Escreva !help para mais informações",

	"width" : 1500,

	"height" : 1100,

	"spawnDistance" : 350,

	"redSpawnPoints" : [
		[ -213, -430
		],
		[ -263, 0
		],
		[ -213, 430
		],
		[ -575, 0
		],
		[ -800, -430
		],
		[ -800, 430
		],
		[ -1200, 0
		]

	],

	"blueSpawnPoints" : [
		[ 213, 430
		],
		[ 263, 0
		],
		[ 213, -430
		],
		[ 575, 0
		],
		[ 800, 430
		],
		[ 800, -430
		],
		[ 1200, 0
		]

	],

	"bg" : { "type" : "hockey", "width" : 1200, "height" : 600, "kickOffRadius" : 8, "cornerRadius" : 0 },

	"vertexes" : [
		/* 0 */ { "x" : -1200, "y" : -600, "trait" : "ballArea" },
		
		/* 1 */ { "x" : 0, "y" : 600, "trait" : "kickOffBarrier" },
		/* 2 */ { "x" : 0, "y" : 220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 180 },
		/* 3 */ { "x" : 0, "y" : -220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 180 },
		/* 4 */ { "x" : 0, "y" : -600, "trait" : "kickOffBarrier" },
		
		/* 5 */ { "x" : -1200, "y" : -95, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		/* 6 */ { "x" : -1250, "y" : -95, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		/* 7 */ { "x" : -1250, "y" : 95, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball","red","blue" ], "radius" : 7 },
		/* 8 */ { "x" : -1200, "y" : 95, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		/* 9 */ { "x" : 1200, "y" : -95, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		/* 10 */ { "x" : 1250, "y" : -95, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		/* 11 */ { "x" : 1250, "y" : 95, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		/* 12 */ { "x" : 1200, "y" : 95, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		
		/* 13 */ { "x" : -1200, "y" : 95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 14 */ { "x" : -1200, "y" : 600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 15 */ { "x" : -1200, "y" : -95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 16 */ { "x" : -1200, "y" : -600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 17 */ { "x" : -1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 18 */ { "x" : 1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 19 */ { "x" : 1200, "y" : 95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 20 */ { "x" : 1200, "y" : 600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 21 */ { "x" : 1200, "y" : -600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 22 */ { "x" : 1200, "y" : -95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 23 */ { "x" : -1200, "y" : -600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		/* 24 */ { "x" : 1200, "y" : -600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		
		/* 25 */ { "x" : 0, "y" : -600, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 26 */ { "x" : 0, "y" : -220, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 27 */ { "x" : 0, "y" : 220, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 28 */ { "x" : 0, "y" : 600, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 29 */ { "x" : 0, "y" : -220, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "F8F8F8" },
		/* 30 */ { "x" : 0, "y" : 220, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "F8F8F8" },
		/* 31 */ { "x" : 0, "y" : 220, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 32 */ { "x" : 0, "y" : 220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : -180 },
		/* 33 */ { "x" : 0, "y" : -220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : -180 },
		/* 34 */ { "x" : 0, "y" : 220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 0 },
		/* 35 */ { "x" : 0, "y" : -220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 0 },
		
		/* 36 */ { "x" : -1200, "y" : 95, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 37 */ { "x" : -1200, "y" : 600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 38 */ { "x" : -1200, "y" : -600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 39 */ { "x" : -1200, "y" : -95, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 40 */ { "x" : 1200, "y" : -600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 41 */ { "x" : 1200, "y" : -95, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 42 */ { "x" : 1200, "y" : 95, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 43 */ { "x" : 1200, "y" : 600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 44 */ { "x" : -1200, "y" : 600, "trait" : "ballArea" },
		/* 45 */ { "x" : -1200, "y" : -600, "trait" : "ballArea" },
		
		/* 46 */ { "x" : 0, "y" : 600, "trait" : "kickOffBarrier" },
		/* 47 */ { "x" : 0, "y" : 220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 180 },
		/* 48 */ { "x" : 0, "y" : -220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 180 },
		/* 49 */ { "x" : 0, "y" : -600, "trait" : "kickOffBarrier" },
		
		/* 50 */ { "x" : -1200, "y" : 95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "curve" : 0 },
		/* 51 */ { "x" : -1200, "y" : 600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "curve" : 0 },
		/* 52 */ { "x" : -1200, "y" : -95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "curve" : 0 },
		/* 53 */ { "x" : -1200, "y" : -600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "curve" : 0 },
		/* 54 */ { "x" : -1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 55 */ { "x" : 1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 56 */ { "x" : 1200, "y" : 95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 57 */ { "x" : 1200, "y" : 600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 58 */ { "x" : 1200, "y" : -600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 59 */ { "x" : 1200, "y" : -95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 60 */ { "x" : -1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 61 */ { "x" : 1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		
		/* 62 */ { "x" : 0, "y" : -600, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 63 */ { "x" : 0, "y" : -220, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 64 */ { "x" : 0, "y" : -220, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 65 */ { "x" : 0, "y" : 600, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 66 */ { "x" : 0, "y" : -220, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "F8F8F8" },
		/* 67 */ { "x" : 0, "y" : 220, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "F8F8F8" },
		/* 68 */ { "x" : 0, "y" : 220, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 69 */ { "x" : 0, "y" : 220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : -180 },
		/* 70 */ { "x" : 0, "y" : -220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : -180 },
		/* 71 */ { "x" : 0, "y" : 220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 0 },
		/* 72 */ { "x" : 0, "y" : -220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 0 },
		
		/* 73 */ { "x" : -1200, "y" : 600, "trait" : "ballArea" },
		/* 74 */ { "x" : -1200, "y" : -600, "trait" : "ballArea" },
		
		/* 75 */ { "x" : 0, "y" : 600, "trait" : "kickOffBarrier", "color" : "ffffff", "vis" : true },
		/* 76 */ { "x" : 0, "y" : 220, "trait" : "kickOffBarrier", "color" : "ffffff", "vis" : true, "curve" : 180 },
		/* 77 */ { "x" : 0, "y" : -220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 180 },
		/* 78 */ { "x" : 0, "y" : -600, "trait" : "kickOffBarrier" },
		
		/* 79 */ { "x" : -1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 80 */ { "x" : 1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 81 */ { "x" : 1200, "y" : 95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 82 */ { "x" : 1200, "y" : 600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 83 */ { "x" : 1200, "y" : -600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 84 */ { "x" : 1200, "y" : -95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 85 */ { "x" : -1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 86 */ { "x" : 1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		
		/* 87 */ { "x" : 0, "y" : -600, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 88 */ { "x" : 0, "y" : -220, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 89 */ { "x" : 0, "y" : -220, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "F8F8F8" },
		/* 90 */ { "x" : 0, "y" : 220, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "F8F8F8" },
		/* 91 */ { "x" : 0, "y" : 220, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 92 */ { "x" : 0, "y" : 220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : -180 },
		/* 93 */ { "x" : 0, "y" : -220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : -180 },
		/* 94 */ { "x" : 0, "y" : 220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 0 },
		/* 95 */ { "x" : 0, "y" : -220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 0 },
		
		/* 96 */ { "x" : -1200, "y" : 600, "trait" : "ballArea" },
		/* 97 */ { "x" : -1200, "y" : -600, "trait" : "ballArea" },
		
		/* 98 */ { "x" : 0, "y" : 600, "trait" : "kickOffBarrier", "vis" : false },
		/* 99 */ { "x" : 0, "y" : 220, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 180 },
		/* 100 */ { "x" : 0, "y" : -220, "trait" : "kickOffBarrier", "color" : "ffffff", "vis" : true, "curve" : 180 },
		/* 101 */ { "x" : 0, "y" : -600, "trait" : "kickOffBarrier", "vis" : false, "color" : "ffffff" },
		
		/* 102 */ { "x" : -1200, "y" : 95, "bCoef" : 2, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "curve" : 0 },
		/* 103 */ { "x" : -1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "curve" : 0 },
		/* 104 */ { "x" : -1200, "y" : -95, "bCoef" : 2, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "curve" : 0 },
		/* 105 */ { "x" : -1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "curve" : 0 },
		/* 106 */ { "x" : -1200, "y" : 600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		/* 107 */ { "x" : 1200, "y" : 600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		/* 108 */ { "x" : 1200, "y" : 95, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 109 */ { "x" : 1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 110 */ { "x" : 1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 111 */ { "x" : 1200, "y" : -95, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 112 */ { "x" : -1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 113 */ { "x" : 1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		
		/* 114 */ { "x" : 0, "y" : 220, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "F8F8F8" },
		/* 115 */ { "x" : 0, "y" : 220, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 116 */ { "x" : -1, "y" : 220, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		
		/* 117 */ { "x" : 800, "y" : -147, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0 },
		/* 118 */ { "x" : 800, "y" : 147, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 44.33638217658901 },
		
		/* 119 */ { "x" : -1200, "y" : 95, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 120 */ { "x" : -1200, "y" : 600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 121 */ { "x" : -1200, "y" : 95, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 122 */ { "x" : -1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 123 */ { "x" : -1200, "y" : -600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 124 */ { "x" : -1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 125 */ { "x" : 1200, "y" : -95, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 126 */ { "x" : 1200, "y" : -95, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 127 */ { "x" : -1207, "y" : 95, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		/* 128 */ { "x" : -1207, "y" : 600, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		/* 129 */ { "x" : -1207, "y" : -600, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		/* 130 */ { "x" : -1207, "y" : -95, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		/* 131 */ { "x" : 1207, "y" : -600, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		/* 132 */ { "x" : 1207, "y" : -95, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		/* 133 */ { "x" : 1207, "y" : 95, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		/* 134 */ { "x" : 1207, "y" : 600, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		
		/* 135 */ { "x" : 800, "y" : 147, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -78.04299828129014 },
		/* 136 */ { "x" : 1200, "y" : 424, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -78.04299828129014 },
		/* 137 */ { "x" : 800, "y" : -147, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 78.04299828129014 },
		/* 138 */ { "x" : 1200, "y" : -95, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0, "color" : "ffffff" },
		/* 139 */ { "x" : 1200, "y" : 95, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0, "color" : "ffffff" },
		/* 140 */ { "x" : 0, "y" : -220, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0 },
		/* 141 */ { "x" : 0, "y" : 220, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0 },
		/* 142 */ { "x" : 0, "y" : -11, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 180 },
		/* 143 */ { "x" : 0, "y" : 11, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 180 },
		/* 144 */ { "x" : 0, "y" : -11, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -180 },
		/* 145 */ { "x" : 0, "y" : 11, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -180 },
		/* 146 */ { "x" : -525.1982581967213, "y" : 584, "bCoef" : 0.1, "trait" : "line" },
		/* 147 */ { "x" : -525.1982581967213, "y" : 616, "bCoef" : 0.1, "trait" : "line" },
		/* 148 */ { "x" : -267.4933401639344, "y" : 584, "bCoef" : 0.1, "trait" : "line" },
		/* 149 */ { "x" : -267.4933401639344, "y" : 616, "bCoef" : 0.1, "trait" : "line" },
		/* 150 */ { "x" : 505.62141393442624, "y" : 584, "bCoef" : 0.1, "trait" : "line" },
		/* 151 */ { "x" : 505.62141393442624, "y" : 616, "bCoef" : 0.1, "trait" : "line" },
		/* 152 */ { "x" : 247.91649590163934, "y" : 584, "bCoef" : 0.1, "trait" : "line" },
		/* 153 */ { "x" : 247.91649590163934, "y" : 616, "bCoef" : 0.1, "trait" : "line" },
		/* 154 */ { "x" : -828.0015368852459, "y" : 600, "bCoef" : 0.1, "trait" : "line" },
		/* 155 */ { "x" : -828.0015368852459, "y" : 616, "bCoef" : 0.1, "trait" : "line" },
		/* 156 */ { "x" : 1220.33349609375, "y" : 251.9681483400014, "bCoef" : 0.1, "trait" : "line" },
		/* 157 */ { "x" : 1201.33349609375, "y" : 251.9681483400014, "bCoef" : 0.1, "trait" : "line" },
		/* 158 */ { "x" : 1219.33349609375, "y" : -251.9681483400014, "bCoef" : 0.1, "trait" : "line" },
		/* 159 */ { "x" : 1200.33349609375, "y" : -251.9681483400014, "bCoef" : 0.1, "trait" : "line" },
		/* 160 */ { "x" : -841.1245088945966, "y" : -601, "bCoef" : 0.1, "trait" : "line" },
		/* 161 */ { "x" : -841.1245088945966, "y" : -617, "bCoef" : 0.1, "trait" : "line" },
		/* 162 */ { "x" : 808.4246926229508, "y" : 600, "bCoef" : 0.1, "trait" : "line" },
		/* 163 */ { "x" : 808.4246926229508, "y" : 616, "bCoef" : 0.1, "trait" : "line" },
		/* 164 */ { "x" : 837.7690984113394, "y" : -601, "bCoef" : 0.1, "trait" : "line" },
		/* 165 */ { "x" : 837.7690984113394, "y" : -617, "bCoef" : 0.1, "trait" : "line" },
		/* 166 */ { "x" : 800.1766668775302, "y" : 2.2940757844129678, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 167 */ { "x" : 800.1766668775302, "y" : -0.9306205718623346, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 168 */ { "x" : 800.1766668775302, "y" : 5.51877214068827, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 169 */ { "x" : 800.1766668775302, "y" : -4.155316928137637, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 170 */ { "x" : 800.1766668775302, "y" : -2.54296875, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 171 */ { "x" : 800.1766668775302, "y" : 3.9064239625506048, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 172 */ { "x" : 800.1766668775302, "y" : -4.96149101720647, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 173 */ { "x" : 800.1766668775302, "y" : 6.324946229757089, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 174 */ { "x" : 608.9727195091092, "y" : 2.2940757844129678, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 175 */ { "x" : 608.9727195091092, "y" : -0.9306205718623346, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 176 */ { "x" : 608.9727195091092, "y" : 5.51877214068827, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 177 */ { "x" : 608.9727195091092, "y" : -4.155316928137637, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 178 */ { "x" : 608.9727195091092, "y" : -2.54296875, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 179 */ { "x" : 608.9727195091092, "y" : 3.9064239625506048, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 180 */ { "x" : 608.9727195091092, "y" : -4.96149101720647, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 181 */ { "x" : 608.9727195091092, "y" : 6.324946229757089, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 182 */ { "x" : -1220.0747488827305, "y" : -251.82895884262769, "bCoef" : 0.1, "trait" : "line" },
		/* 183 */ { "x" : -1201.0752587242073, "y" : -251.9681483400014, "bCoef" : 0.1, "trait" : "line" },
		/* 184 */ { "x" : -1218.9226063416277, "y" : 251.9681483400014, "bCoef" : 0.1, "trait" : "line" },
		/* 185 */ { "x" : -1199.9231161831044, "y" : 251.9681483400014, "bCoef" : 0.1, "trait" : "line" },
		/* 186 */ { "x" : -1199.4694375680187, "y" : 570.456511053482, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 187 */ { "x" : -1171.6369452864983, "y" : 598.2890033350025, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 188 */ { "x" : -1198.4694375680187, "y" : -569.6420271253103, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 189 */ { "x" : -1170.6369452864983, "y" : -597.4745194068307, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 190 */ { "x" : 1198.1516337208868, "y" : -571.0124590189979, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 191 */ { "x" : 1170.319141439366, "y" : -598.8449513005185, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 192 */ { "x" : 1199.1516337208868, "y" : 569.9997004222528, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 193 */ { "x" : 1171.319141439366, "y" : 597.8321927037732, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 194 */ { "x" : 1200, "y" : -424, "bCoef" : 0, "trait" : "line", "curve" : 78.04299828129014 },
		/* 195 */ { "x" : -800, "y" : 147, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0 },
		/* 196 */ { "x" : -800, "y" : -147, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 44.33638217658901 },
		/* 197 */ { "x" : -800, "y" : -147, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 44.33638217658901 },
		/* 198 */ { "x" : -1200, "y" : -424, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -38.52299398255091 },
		/* 199 */ { "x" : -800, "y" : 147, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 78.04299828129014 },
		/* 200 */ { "x" : -800, "y" : 147, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90 },
		/* 201 */ { "x" : -800.1940394442979, "y" : -2.3590474271793553, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 202 */ { "x" : -800.2144724538566, "y" : 0.8655841924472334, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 203 */ { "x" : -800.1736064347391, "y" : -5.5836790468059405, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 204 */ { "x" : -800.2349054634154, "y" : 4.090215812073822, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 205 */ { "x" : -800.2246889586361, "y" : 2.47790000226054, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 206 */ { "x" : -800.1838229395186, "y" : -3.9713632369926337, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 207 */ { "x" : -800.2400137158052, "y" : 4.896373716980474, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 208 */ { "x" : -800.1684981823495, "y" : -6.3898369517125815, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 209 */ { "x" : -608.993930546668, "y" : -1.1475001518364962, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 210 */ { "x" : -609.0143635562267, "y" : 2.077131467790089, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 211 */ { "x" : -608.9734975371092, "y" : -4.372131771463081, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 212 */ { "x" : -609.0347965657855, "y" : 5.301763087416674, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 213 */ { "x" : -609.0245800610062, "y" : 3.6894472776033993, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 214 */ { "x" : -608.9837140418886, "y" : -2.759815961649778, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 215 */ { "x" : -609.0399048181753, "y" : 6.107920992323329, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 216 */ { "x" : -608.9683892847195, "y" : -5.178289676369722, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 217 */ { "x" : -1200, "y" : 424, "bCoef" : 0, "trait" : "line", "curve" : 78.04299828129014 },
		
		/* 218 */ { "x" : 0, "y" : -660, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "vis" : false },
		/* 219 */ { "x" : 0, "y" : 660, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "vis" : false },
		
		/* 220 */ { "x" : 611.0222584506541, "y" : -288.4501960600154, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 221 */ { "x" : 610.7537074861809, "y" : -284.7949449013963, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 222 */ { "x" : 609.0222584506541, "y" : 296.5498039399846, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 223 */ { "x" : 608.7537074861809, "y" : 300.2050550986037, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 224 */ { "x" : -610.9777415493459, "y" : -292.4501960600154, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 225 */ { "x" : -611.2462925138191, "y" : -288.7949449013963, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 226 */ { "x" : -609.9777415493459, "y" : 294.5498039399846, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 227 */ { "x" : -610.2462925138191, "y" : 298.2050550986037, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		
		/* 228 */ { "bCoef" : 0.1, "trait" : "goalNet", "x" : -1252, "y" : -95.49609375, "vis" : false, "cGroup" : ["wall" ], "curve" : 0 },
		/* 229 */ { "bCoef" : 0.1, "trait" : "goalNet", "x" : -1252, "y" : 93.50390625, "vis" : false, "cGroup" : ["wall" ], "curve" : 0 },
		/* 230 */ { "bCoef" : 0.1, "trait" : "goalNet", "x" : 1252, "y" : -95.49609375, "vis" : false, "cGroup" : ["wall" ], "curve" : 0 },
		/* 231 */ { "bCoef" : 0.1, "trait" : "goalNet", "x" : 1252, "y" : 93.50390625, "vis" : false, "cGroup" : ["wall" ], "curve" : 0 },
		
		/* 232 */ { "bCoef" : 0, "trait" : "line", "x" : -1200, "y" : 94, "color" : "b61e33" },
		/* 233 */ { "bCoef" : 0, "trait" : "line", "x" : -1200, "y" : -96.24609375 },
		/* 234 */ { "bCoef" : 0, "trait" : "line", "x" : -1200, "y" : 94, "color" : "b61e33" },
		/* 235 */ { "bCoef" : 0, "trait" : "line", "x" : -1200, "y" : 66, "color" : "ffffff" },
		/* 236 */ { "bCoef" : 0, "trait" : "line", "x" : -1200, "y" : 39, "color" : "b61e33" },
		/* 237 */ { "bCoef" : 0, "trait" : "line", "x" : -1200, "y" : 12, "color" : "ffffff" },
		/* 238 */ { "bCoef" : 0, "trait" : "line", "x" : -1200, "y" : -69, "color" : "b61e33" },
		/* 239 */ { "bCoef" : 0, "trait" : "line", "x" : -1200, "y" : -96, "color" : "b61e33" },
		/* 240 */ { "bCoef" : 0, "trait" : "line", "x" : -1200, "y" : -15, "color" : "b61e33" },
		/* 241 */ { "bCoef" : 0, "trait" : "line", "x" : -1200, "y" : -42, "color" : "ffffff" },
		/* 242 */ { "bCoef" : 0, "trait" : "line", "x" : 1200, "y" : 94, "color" : "b61e33" },
		/* 243 */ { "bCoef" : 0, "trait" : "line", "x" : 1200, "y" : -96.24609375 },
		/* 244 */ { "bCoef" : 0, "trait" : "line", "x" : 1200, "y" : 94, "color" : "b61e33" },
		/* 245 */ { "bCoef" : 0, "trait" : "line", "x" : 1200, "y" : 66, "color" : "ffffff" },
		/* 246 */ { "bCoef" : 0, "trait" : "line", "x" : 1200, "y" : 39, "color" : "b61e33" },
		/* 247 */ { "bCoef" : 0, "trait" : "line", "x" : 1200, "y" : 12, "color" : "ffffff" },
		/* 248 */ { "bCoef" : 0, "trait" : "line", "x" : 1200, "y" : -69, "color" : "b61e33" },
		/* 249 */ { "bCoef" : 0, "trait" : "line", "x" : 1200, "y" : -96, "color" : "b61e33" },
		/* 250 */ { "bCoef" : 0, "trait" : "line", "x" : 1200, "y" : -15, "color" : "b61e33" },
		/* 251 */ { "bCoef" : 0, "trait" : "line", "x" : 1200, "y" : -42, "color" : "ffffff" }

	],

	"segments" : [
		{ "v0" : 5, "v1" : 6, "curve" : 0, "color" : "F8F8F8", "trait" : "goalNet" },
		{ "v0" : 7, "v1" : 8, "curve" : 0, "color" : "F8F8F8", "trait" : "goalNet" },
		{ "v0" : 9, "v1" : 10, "curve" : 0, "color" : "F8F8F8", "trait" : "goalNet" },
		{ "v0" : 11, "v1" : 12, "curve" : 0, "color" : "F8F8F8", "trait" : "goalNet" },
		
		{ "v0" : 1, "v1" : 2, "trait" : "kickOffBarrier" },
		{ "v0" : 3, "v1" : 4, "trait" : "kickOffBarrier" },
		
		{ "v0" : 13, "v1" : 14, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" },
		{ "v0" : 15, "v1" : 16, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -1200 },
		{ "v0" : 19, "v1" : 20, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		{ "v0" : 21, "v1" : 22, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		{ "v0" : 23, "v1" : 24, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : -600 },
		
		{ "v0" : 25, "v1" : 26, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 27, "v1" : 28, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		
		{ "v0" : 36, "v1" : 37, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -700 },
		{ "v0" : 38, "v1" : 39, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -1200 },
		{ "v0" : 40, "v1" : 41, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		{ "v0" : 42, "v1" : 43, "curve" : 2.50208708167, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		
		{ "v0" : 46, "v1" : 47, "trait" : "kickOffBarrier" },
		{ "v0" : 48, "v1" : 49, "trait" : "kickOffBarrier" },
		
		{ "v0" : 50, "v1" : 51, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" },
		{ "v0" : 52, "v1" : 53, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -1200 },
		{ "v0" : 56, "v1" : 57, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		{ "v0" : 58, "v1" : 59, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		
		{ "v0" : 62, "v1" : 63, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 75, "v1" : 76, "vis" : true, "color" : "ffffff", "trait" : "kickOffBarrier" },
		{ "v0" : 77, "v1" : 78, "trait" : "kickOffBarrier" },
		
		{ "v0" : 81, "v1" : 82, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		{ "v0" : 83, "v1" : 84, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		
		{ "v0" : 87, "v1" : 88, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 99, "v1" : 100, "curve" : 180, "vis" : true, "color" : "F8F8F8", "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 99, "v1" : 100, "curve" : -180, "vis" : true, "color" : "F8F8F8", "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 100, "v1" : 101, "vis" : true, "color" : "ffffff", "trait" : "kickOffBarrier" },
		
		{ "v0" : 102, "v1" : 103, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 2, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		{ "v0" : 104, "v1" : 105, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 2, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "x" : -1200 },
		{ "v0" : 106, "v1" : 107, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : 600 },
		{ "v0" : 108, "v1" : 109, "vis" : true, "color" : "F8F8F8", "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		{ "v0" : 110, "v1" : 111, "vis" : true, "color" : "F8F8F8", "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		
		{ "v0" : 117, "v1" : 118, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		
		{ "v0" : 127, "v1" : 128, "vis" : false, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "x" : -707 },
		{ "v0" : 129, "v1" : 130, "vis" : false, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "x" : -1207 },
		{ "v0" : 131, "v1" : 132, "vis" : false, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "x" : 1207 },
		{ "v0" : 133, "v1" : 134, "vis" : false, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "x" : 1207 },
		
		{ "v0" : 135, "v1" : 136, "curve" : -78.04299828129014, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 138, "v1" : 139, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 140, "v1" : 141, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 142, "v1" : 143, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 144, "v1" : 145, "curve" : -180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 146, "v1" : 147, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240 },
		{ "v0" : 148, "v1" : 149, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -120 },
		{ "v0" : 150, "v1" : 151, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 240 },
		{ "v0" : 152, "v1" : 153, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 120 },
		{ "v0" : 154, "v1" : 155, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 156, "v1" : 157, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 251.9681483400014 },
		{ "v0" : 158, "v1" : 159, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -251.9681483400014 },
		{ "v0" : 160, "v1" : 161, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 162, "v1" : 163, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		{ "v0" : 164, "v1" : 165, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		{ "v0" : 167, "v1" : 166, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 166, "v1" : 167, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 169, "v1" : 168, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 168, "v1" : 169, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 171, "v1" : 170, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 170, "v1" : 171, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 173, "v1" : 172, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 172, "v1" : 173, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 175, "v1" : 174, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 174, "v1" : 175, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 177, "v1" : 176, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 176, "v1" : 177, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 179, "v1" : 178, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 178, "v1" : 179, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 181, "v1" : 180, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 180, "v1" : 181, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 182, "v1" : 183, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },
		{ "v0" : 184, "v1" : 185, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 251.9681483400014 },
		{ "v0" : 187, "v1" : 186, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 189, "v1" : 188, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 191, "v1" : 190, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 193, "v1" : 192, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 137, "v1" : 194, "curve" : 78.04299828129014, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 195, "v1" : 196, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 197, "v1" : 198, "curve" : -78.04299828129014, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 202, "v1" : 201, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 201, "v1" : 202, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 204, "v1" : 203, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 203, "v1" : 204, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 206, "v1" : 205, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 205, "v1" : 206, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 208, "v1" : 207, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 207, "v1" : 208, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 210, "v1" : 209, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 209, "v1" : 210, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 212, "v1" : 211, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 211, "v1" : 212, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 214, "v1" : 213, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 213, "v1" : 214, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 216, "v1" : 215, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 215, "v1" : 216, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 199, "v1" : 217, "curve" : 78.04299828129014, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "trait" : "line" },
		
		{ "v0" : 101, "v1" : 218, "vis" : false, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 98, "v1" : 219, "vis" : false, "color" : "ffffff", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		
		{ "v0" : 220, "v1" : 221, "curve" : -197.38121949057748, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 221, "v1" : 220, "curve" : -213.29219661707097, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 222, "v1" : 223, "curve" : -197.38121949057748, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 223, "v1" : 222, "curve" : -213.29219661707097, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 224, "v1" : 225, "curve" : -197.38121949057748, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 225, "v1" : 224, "curve" : -213.29219661707097, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 226, "v1" : 227, "curve" : -197.38121949057748, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 227, "v1" : 226, "curve" : -213.29219661707097, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "trait" : "line", "v0" : 7, "v1" : 6 },
		{ "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "trait" : "line", "v0" : 11, "v1" : 10 },
		
		{ "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "goalNet", "v0" : 228, "v1" : 229, "x" : -1252, "cGroup" : ["wall" ] },
		{ "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "goalNet", "v0" : 230, "v1" : 231, "x" : 1252, "cGroup" : ["wall" ] },
		
		{ "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "trait" : "line", "v0" : 232, "v1" : 233, "x" : -1200 },
		{ "curve" : 0, "vis" : true, "color" : "b61e33", "bCoef" : 0, "trait" : "line", "v0" : 234, "v1" : 235, "x" : -1200 },
		{ "curve" : 0, "vis" : true, "color" : "b61e33", "bCoef" : 0, "trait" : "line", "v0" : 236, "v1" : 237, "x" : -1200 },
		{ "curve" : 0, "vis" : true, "color" : "b61e33", "bCoef" : 0, "trait" : "line", "v0" : 238, "v1" : 239, "x" : -1200 },
		{ "curve" : 0, "vis" : true, "color" : "b61e33", "bCoef" : 0, "trait" : "line", "v0" : 240, "v1" : 241, "x" : -1200 },
		{ "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "trait" : "line", "v0" : 242, "v1" : 243, "x" : 1200 },
		{ "curve" : 0, "vis" : true, "color" : "b61e33", "bCoef" : 0, "trait" : "line", "v0" : 244, "v1" : 245, "x" : 1200 },
		{ "curve" : 0, "vis" : true, "color" : "b61e33", "bCoef" : 0, "trait" : "line", "v0" : 246, "v1" : 247, "x" : 1200 },
		{ "curve" : 0, "vis" : true, "color" : "b61e33", "bCoef" : 0, "trait" : "line", "v0" : 248, "v1" : 249, "x" : 1200 },
		{ "curve" : 0, "vis" : true, "color" : "b61e33", "bCoef" : 0, "trait" : "line", "v0" : 250, "v1" : 251, "x" : 1200 }

	],

	"goals" : [
		{ "p0" : [1206.4,94 ], "p1" : [1206.4,-94 ], "team" : "blue" },
		{ "p0" : [-1206.4,94 ], "p1" : [-1206.4,-94 ], "team" : "red" }

	],

	"discs" : [
		{ "radius" : 6, "pos" : [-1200,95 ], "color" : "FF0000", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [-1200,-95 ], "color" : "FF0000", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [1199,95 ], "color" : "0033FF", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [1199,-95 ], "color" : "0033FF", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [-1200,95 ], "color" : "FF0000", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [-1200,-95 ], "color" : "FF0000", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [1199,95 ], "color" : "0033FF", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [1199,-95 ], "color" : "0033FF", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [-1200,95 ], "color" : "FF0000", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [-1200,-95 ], "color" : "FF0000", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [1199,95 ], "color" : "0033FF", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [1199,-95 ], "color" : "0033FF", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [-1200,95 ], "color" : "6666CC", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [-1200,-95 ], "color" : "6666CC", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [1199,95 ], "color" : "6666CC", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [1199,-95 ], "color" : "6666CC", "trait" : "goalPost" },
		
		{ "radius" : 3, "invMass" : 0, "pos" : [-1200,600 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [-1200,-600 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [1200,-600 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [1200,600 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },
		
		{ "radius" : 1.3, "invMass" : 0, "pos" : [-1250,-95 ], "color" : "000001", "cMask" : ["ball" ], "damping" : 0, "trait" : "goalPost", "bCoef" : 0 },
		{ "radius" : 1.3, "invMass" : 0, "pos" : [-1250,95 ], "color" : "000002", "cMask" : ["ball" ], "damping" : 0, "trait" : "goalPost", "bCoef" : 0 },
		
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-1256,-85 ], "color" : "FFFFFF", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-1257,-69 ], "color" : "FFFFFF", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-1257,-51 ], "color" : "FFFFFF", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-1257,-33 ], "color" : "FFFFFF", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-1257,-14 ], "color" : "FFFFFF", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-1257,4 ], "color" : "FFFFFF", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-1256,22 ], "color" : "FFFFFF", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-1257,40 ], "color" : "FFFFFF", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-1257,55 ], "color" : "FFFFFF", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-1255,70 ], "color" : "FFFFFF", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-1253,87 ], "color" : "FFFFFF", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		
		{ "radius" : 1.3, "invMass" : 0, "pos" : [1249.3900075419842,95.4976906314504 ], "color" : "000003", "cMask" : ["ball" ], "damping" : 0, "trait" : "goalPost", "bCoef" : 0 },
		{ "radius" : 1.3, "invMass" : 0, "pos" : [1249.6215734882212,-94.50216825589865 ], "color" : "000004", "cMask" : ["ball" ], "damping" : 0, "trait" : "goalPost", "bCoef" : 0 },
		
		{ "radius" : 4, "invMass" : 1.5, "pos" : [1255.4046283034522,84.5050121526569 ], "color" : "ffffff", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [1259.4265639018436,68.50868182563809 ], "color" : "ffffff", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [1260.449719753769,50.509914705041275 ], "color" : "ffffff", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [1259.4667825077022,32.50992510281555 ], "color" : "ffffff", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [1259.4875015660498,15.50993772868432 ], "color" : "ffffff", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [1259.505783088121,0.5099488691567586 ], "color" : "ffffff", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [1260.5240638674943,-14.488821222232701 ], "color" : "ffffff", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [1260.5435641577037,-30.4888093390621 ], "color" : "ffffff", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [1260.5679395204654,-48.48879448509885 ], "color" : "ffffff", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [1260.5910968577873,-67.48999914197185 ], "color" : "ffffff", "cMask" : ["ball","red","blue" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [1255.6118174015312,-84.49242405237925 ], "color" : "ffffff", "cMask" : ["ball","red","blue" ], "damping" : 0.96 }

	],

	"joints" : [
		{ "d0" : 21, "d1" : 23, "length" : 9, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 23, "d1" : 24, "length" : 9, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 24, "d1" : 25, "length" : 9, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 25, "d1" : 26, "length" : 9, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 26, "d1" : 27, "length" : 9, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 27, "d1" : 28, "length" : 9, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 28, "d1" : 29, "length" : 9, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 29, "d1" : 30, "length" : 9, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 30, "d1" : 31, "length" : 9, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 31, "d1" : 32, "length" : 9, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 32, "d1" : 33, "length" : 9, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 33, "d1" : 22, "length" : 9, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 34, "d1" : 36, "length" : 9, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 36, "d1" : 37, "length" : 9, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 37, "d1" : 38, "length" : 9, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 38, "d1" : 39, "length" : 9, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 39, "d1" : 40, "length" : 9, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 40, "d1" : 41, "length" : 9, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 41, "d1" : 42, "length" : 9, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 42, "d1" : 43, "length" : 9, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 43, "d1" : 44, "length" : 9, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 44, "d1" : 45, "length" : 9, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 45, "d1" : 46, "length" : 9, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 46, "d1" : 35, "length" : 9, "strength" : 0.1, "color" : "EBEBEB" }

	],

	"planes" : [
		{ "normal" : [0,-1 ], "dist" : -600, "trait" : "ballArea", "bCoef" : 1, "curve" : 0 },
		
		{ "normal" : [0,1 ], "dist" : -660, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -660, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -1330, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -1330, "bCoef" : 0.1 },
		{ "normal" : [0,1 ], "dist" : -660, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -660, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -1330, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -1330, "bCoef" : 0.1 },
		
		{ "normal" : [0,1 ], "dist" : -600, "trait" : "ballArea", "vis" : false, "curve" : 0, "bCoef" : 1 },
		
		{ "normal" : [0,1 ], "dist" : -660, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -660, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -1330, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -1330, "bCoef" : 0.1 },
		{ "normal" : [0,1 ], "dist" : -660, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -660, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -1330, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -1330, "bCoef" : 0.1 }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] },
		"line" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] }

	},

	"playerPhysics" : {
		"bCoef" : 0,
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.083,
		"kickStrength" : 5

	},

	"ballPhysics" : {
		"radius" : 6.4,
		"bCoef" : 0.4,
		"invMass" : 1.5,
		"damping" : 0.99,
		"color" : "FFCC00"

	}
}`;
var PensRedHandball=`
{

	"name" : "Escreva !help para mais informações",

	"width" : 790,

	"height" : 350,

	"spawnDistance" : 300,

	"redSpawnPoints" : [
		[ 45, -90
		],
		[ 45, -30
		],
		[ 45, 30
		],
		[ 45, 90
		]

	],

	"blueSpawnPoints" : [
		[ 773, -90
		],
		[ 773, -30
		],
		[ 773, 30
		],
		[ 773, 90
		]

	],

	"bg" : { "type" : "none", "width" : 0, "height" : 0, "kickOffRadius" : 0, "cornerRadius" : 0, "color" : "253D97" },

	"playerPhysics" : {
		"bCoef" : 0.5,
		"invMass" : 0.5,
		"damping" : 0.96,
		"acceleration" : 0.12,
		"kickingAcceleration" : 0.07,
		"kickingDamping" : 0.96,
		"kickStrength" : 5.65

	},

	"ballPhysics" : {
		"pos" : [ 397, 0
		],
		"radius" : 10,
		"color" : "fff100"

	},

	"vertexes" : [
		/* 0 */ { "x" : -174, "y" : -142, "bCoef" : 0, "cMask" : ["blue" ], "cGroup" : ["blueKO","redKO" ], "curve" : 235 },
		/* 1 */ { "x" : -176, "y" : 131, "bCoef" : 0, "cMask" : ["blue" ], "cGroup" : ["blueKO","redKO" ], "curve" : 235 },
		/* 2 */ { "x" : 937, "y" : -155, "bCoef" : 0, "cMask" : ["blue" ], "dist" : -1400 },
		/* 3 */ { "x" : 747, "y" : -156, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 4 */ { "x" : 747, "y" : 144, "bCoef" : 0, "cMask" : ["blue" ], "curve" : 0 },
		/* 5 */ { "x" : 936, "y" : 144, "bCoef" : 0, "cMask" : ["blue" ], "dist" : -1400, "curve" : 0 },
		
		/* 6 */ { "x" : 742, "y" : -156, "trait" : "kickOffBarrier", "cMask" : ["blue" ] },
		
		/* 7 */ { "x" : 858, "y" : -125, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 8 */ { "x" : 858, "y" : 115, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 9 */ { "x" : -477.93953763264415, "y" : 731, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		
		/* 10 */ { "x" : 395, "y" : -15, "trait" : "powerboost", "bCoef" : -2.2, "vis" : false, "cMask" : ["ball" ], "pos" : [955,0 ], "radius" : 10, "curve" : 216 },
		/* 11 */ { "x" : 395, "y" : 5, "trait" : "powerboost", "bCoef" : -2.2, "vis" : false, "cMask" : ["ball" ], "pos" : [955,0 ], "radius" : 10, "curve" : 216 },
		
		/* 12 */ { "x" : 576, "y" : 111.23596984067328, "bCoef" : 0, "cMask" : ["blue" ], "cGroup" : ["redKO" ], "vis" : false, "curve" : 0 },
		/* 13 */ { "x" : 576, "y" : -128.763613824687, "bCoef" : 0, "cMask" : ["blue" ], "cGroup" : ["redKO" ], "vis" : false, "curve" : 0 },
		/* 14 */ { "bCoef" : 0, "cMask" : ["blue" ], "x" : 742, "y" : 144 },
		/* 15 */ { "bCoef" : 0, "cMask" : ["blue" ], "x" : 742, "y" : 12 },
		/* 16 */ { "bCoef" : 0, "cMask" : ["blue" ], "x" : 622, "y" : 12 },
		/* 17 */ { "bCoef" : 0, "cMask" : ["blue" ], "x" : 742, "y" : -24 },
		/* 18 */ { "bCoef" : 0, "cMask" : ["blue" ], "x" : 622, "y" : -24 },
		/* 19 */ { "bCoef" : -2.4, "cMask" : ["blue" ], "x" : 706.0188554822, "y" : 59.50390625 },
		/* 20 */ { "bCoef" : -2.4, "cMask" : ["blue" ], "x" : 706.0188554822, "y" : -71.49609375 },
		/* 21 */ { "bCoef" : 0, "cMask" : ["red" ], "x" : 177, "y" : 615, "curve" : -77 },
		/* 22 */ { "bCoef" : 0, "cMask" : ["red" ], "x" : 177, "y" : -625, "curve" : -77 },
		/* 23 */ { "x" : 576, "y" : 111.23596984067328, "bCoef" : 0, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "vis" : false, "curve" : 0, "radius" : 15, "pos" : [67,0 ], "_selected" : "segment" },
		/* 24 */ { "x" : 576, "y" : -128.763613824687, "bCoef" : 0, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "vis" : false, "curve" : 0, "radius" : 15, "pos" : [67,0 ], "_selected" : "segment" },
		/* 25 */ { "x" : 592, "y" : -224, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["red" ], "curve" : -85, "color" : "E9CC6D" },
		
		/* 26 */ { "x" : 492, "y" : 316, "trait" : "line", "color" : "EF7E29" },
		
		/* 27 */ { "x" : 397, "y" : -19, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "FFFFFF", "radius" : 10 },
		/* 28 */ { "x" : 397, "y" : 11, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "FFFFFF", "radius" : 10 },
		
		/* 29 */ { "x" : 592, "y" : 90, "cMask" : ["red" ], "cGroup" : ["red" ], "trait" : "ballArea", "vis" : false, "color" : "E9CC6D" },
		/* 30 */ { "x" : 592, "y" : -98, "cMask" : ["red" ], "cGroup" : ["red" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "color" : "E9CC6D" },
		
		/* 31 */ { "x" : 592, "y" : -224, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : -85, "color" : "88A9D9", "vis" : false },
		
		/* 32 */ { "x" : 592, "y" : 87.33920484545074, "cMask" : ["ball" ], "cGroup" : ["red" ], "trait" : "ballArea", "vis" : false, "color" : "FFFFFF", "curve" : 0 },
		/* 33 */ { "x" : 592, "y" : -98, "cMask" : ["ball" ], "cGroup" : ["red" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "color" : "FFFFFF" },
		
		/* 34 */ { "x" : 592, "y" : 216, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["red" ], "curve" : 0, "color" : "E9CC6D", "vis" : false },
		/* 35 */ { "x" : 592, "y" : -224, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : 0, "color" : "88A9D9", "vis" : false },
		
		/* 36 */ { "x" : 592, "y" : -98, "cMask" : ["ball" ], "cGroup" : ["red" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "color" : "FFFFFF", "bCoef" : 1 },
		/* 37 */ { "x" : 592, "y" : -325, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 1 },
		/* 38 */ { "x" : 592, "y" : 315, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : true, "color" : "FFFFFF", "curve" : 0, "bCoef" : 1 },
		/* 39 */ { "x" : 592, "y" : 90, "cMask" : ["ball" ], "cGroup" : ["red" ], "trait" : "ballArea", "vis" : false, "color" : "FFFFFF", "curve" : 0, "bCoef" : 1 },
		
		/* 40 */ { "x" : 590, "y" : 216, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : 85, "color" : "2CAAFF" },
		/* 41 */ { "x" : 425, "y" : 106, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : 8, "color" : "2CAAFF" },
		/* 42 */ { "x" : 590, "y" : -224, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : -85, "color" : "2CAAFF" },
		/* 43 */ { "x" : 425, "y" : -114, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : 8, "color" : "2CAAFF" },
		
		/* 44 */ { "x" : 460.90125641831196, "y" : 301.9572422383344, "trait" : "line", "color" : "EF7E29" },
		/* 45 */ { "x" : 492, "y" : -324, "trait" : "line", "color" : "EF7E29" },
		/* 46 */ { "x" : 491.0899057985382, "y" : 316.2098043123669, "trait" : "line", "color" : "EF7E29" },
		/* 47 */ { "x" : 460.2378162708901, "y" : 302.93813422703, "trait" : "line", "color" : "EF7E29" },
		/* 48 */ { "x" : 462.713123102581, "y" : -310.762625798387, "trait" : "line", "color" : "EF7E29" },
		/* 49 */ { "x" : 444.78555149359147, "y" : 292.43458264259755, "trait" : "line", "color" : "EF7E29" },
		/* 50 */ { "x" : 408.18816225723685, "y" : 265.07561802353257, "trait" : "line", "color" : "EF7E29" },
		/* 51 */ { "x" : 371.05522503972065, "y" : 230.24226584512587, "trait" : "line", "color" : "EF7E29" },
		/* 52 */ { "x" : 313.982193163891, "y" : 54.49880675209518, "trait" : "line", "color" : "EF7E29" },
		/* 53 */ { "x" : 312.9981406555976, "y" : 36.50506230916902, "trait" : "line", "color" : "EF7E29" },
		/* 54 */ { "x" : 357.01407293866214, "y" : 209.2796018870813, "trait" : "line", "color" : "EF7E29" },
		/* 55 */ { "x" : 325.6930868351151, "y" : 139.43964430949083, "trait" : "line", "color" : "EF7E29" },
		/* 56 */ { "x" : 440.87812114968597, "y" : -301.1040865966373, "trait" : "line", "color" : "EF7E29" },
		/* 57 */ { "x" : 404.6441117593936, "y" : -273.26565259885837, "trait" : "line", "color" : "EF7E29" },
		/* 58 */ { "x" : 420.98876130101564, "y" : -286.396305985508, "trait" : "line", "color" : "EF7E29" },
		/* 59 */ { "x" : 385.5288007685749, "y" : -256.45907536158984, "trait" : "line", "color" : "EF7E29" },
		/* 60 */ { "x" : 318.09410267505655, "y" : 107.97650354787007, "trait" : "line", "color" : "EF7E29" },
		/* 61 */ { "x" : 315.0783239836344, "y" : 86.49214151361383, "trait" : "line", "color" : "EF7E29" },
		/* 62 */ { "x" : 424.7042731236562, "y" : 277.9899398735921, "trait" : "line", "color" : "EF7E29" },
		/* 63 */ { "x" : 312.7974096944257, "y" : 6.014029307165885, "trait" : "line", "color" : "EF7E29" },
		/* 64 */ { "x" : 388.85323292648945, "y" : 248.5221694256424, "trait" : "line", "color" : "EF7E29" },
		/* 65 */ { "x" : 346.4723211500617, "y" : 190.79991793630217, "trait" : "line", "color" : "EF7E29" },
		/* 66 */ { "x" : 334.3014196476447, "y" : 164.87947896203968, "trait" : "line", "color" : "EF7E29" },
		/* 67 */ { "x" : 369.959798881452, "y" : -239.95955080301712, "trait" : "line", "color" : "EF7E29" },
		/* 68 */ { "x" : 354.2090675592799, "y" : -216.80071524108587, "trait" : "line", "color" : "EF7E29" },
		/* 69 */ { "x" : 343.9115327471668, "y" : -198.18384046344227, "trait" : "line", "color" : "EF7E29" },
		/* 70 */ { "x" : 332.08295430734483, "y" : -172.10540622952055, "trait" : "line", "color" : "EF7E29" },
		/* 71 */ { "x" : 323.79714186893466, "y" : -148.55439605331273, "trait" : "line", "color" : "EF7E29" },
		/* 72 */ { "x" : 317.5867054225696, "y" : -121.0004307084653, "trait" : "line", "color" : "EF7E29" },
		/* 73 */ { "x" : 314.86063407766346, "y" : -98.47824680692861, "trait" : "line", "color" : "EF7E29" },
		/* 74 */ { "x" : 313.1595111996012, "y" : -70.46658362353033, "trait" : "line", "color" : "EF7E29" },
		/* 75 */ { "x" : 312.6360681855451, "y" : -18.493745891795022, "trait" : "line", "color" : "EF7E29" },
		/* 76 */ { "x" : 312.4419203601924, "y" : -47.984800562871555, "trait" : "line", "color" : "EF7E29" },
		
		/* 77 */ { "x" : 469, "y" : -12, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "FFFFFF" },
		/* 78 */ { "x" : 469, "y" : 4, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "FFFFFF" },
		
		/* 79 */ { "x" : 591.2715278479752, "y" : -95.9828225460283, "trait" : "ballArea" },
		
		/* 80 */ { "x" : 592.722625690124, "y" : 87.33920484545074, "trait" : "goalNet", "color" : "FFFFFF", "cMask" : ["blue","ball" ] },
		/* 81 */ { "x" : 622.7216858912061, "y" : 87.10174526602265, "trait" : "goalNet", "color" : "FFFFFF", "cMask" : ["blue","ball" ], "bCoef" : 0, "curve" : 0 },
		/* 82 */ { "x" : 622, "y" : -96.2202821254564, "trait" : "goalNet", "color" : "FFFFFF", "cMask" : ["blue","ball" ], "bCoef" : 0, "curve" : 0 },
		/* 83 */ { "x" : 591.2715278479752, "y" : -95.9828225460283, "trait" : "goalNet", "color" : "FFFFFF", "cMask" : ["blue","ball" ] },
		
		/* 84 */ { "x" : 591.2715278479752, "y" : -95.9828225460283, "trait" : "fieldArea" },
		
		/* 85 */ { "x" : 592, "y" : -95.9828225460283, "trait" : "line", "color" : "FFFFFF" },
		/* 86 */ { "x" : 592, "y" : 87.33920484545074, "trait" : "line", "color" : "FFFFFF" },
		/* 87 */ { "x" : 592, "y" : 58.69513806553215, "trait" : "line", "color" : "FFFFFF" },
		/* 88 */ { "x" : 592, "y" : -68.48451843730645, "trait" : "line", "color" : "FFFFFF" },
		/* 89 */ { "x" : 606.7221871172956, "y" : 87.22839037505096, "trait" : "line", "color" : "FFFFFF" },
		/* 90 */ { "x" : 609.2709639686243, "y" : -96.12529829368515, "trait" : "line", "color" : "FFFFFF" },
		/* 91 */ { "x" : -211, "y" : 301, "trait" : "line", "color" : "FFFFFF" },
		/* 92 */ { "x" : -211, "y" : 331, "trait" : "line", "color" : "FFFFFF" },
		/* 93 */ { "x" : 89, "y" : 301, "trait" : "line", "color" : "FFFFFF" },
		/* 94 */ { "x" : 89, "y" : 331, "trait" : "line", "color" : "FFFFFF" },
		/* 95 */ { "x" : -211, "y" : -339, "trait" : "line", "color" : "FFFFFF" },
		/* 96 */ { "x" : -211, "y" : -309, "trait" : "line", "color" : "FFFFFF" },
		/* 97 */ { "x" : 89, "y" : -339, "trait" : "line", "color" : "FFFFFF" },
		/* 98 */ { "x" : 89, "y" : -309, "trait" : "line", "color" : "FFFFFF" },
		/* 99 */ { "x" : 592, "y" : -55.95715121697479, "trait" : "line", "color" : "CF0000" },
		/* 100 */ { "x" : 592, "y" : -35.33277704328226, "trait" : "line", "color" : "CF0000" },
		/* 101 */ { "x" : 592, "y" : -10, "trait" : "line", "color" : "CF0000" },
		/* 102 */ { "x" : 592, "y" : 12, "trait" : "line", "color" : "CF0000" },
		/* 103 */ { "x" : 592, "y" : -95.9828225460283, "trait" : "line", "color" : "CF0000" },
		/* 104 */ { "x" : 592, "y" : -73.60211534710332, "trait" : "line", "color" : "CF0000" },
		/* 105 */ { "x" : 592, "y" : 66, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "trait" : "line", "color" : "CF0000" },
		/* 106 */ { "x" : 592, "y" : 90.08069095559071, "trait" : "line", "color" : "CF0000" },
		/* 107 */ { "x" : 592, "y" : 31, "trait" : "line", "color" : "CF0000" },
		/* 108 */ { "x" : 592, "y" : 46, "trait" : "line", "color" : "CF0000" },
		
		/* 109 */ { "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["red" ], "x" : 591, "y" : -224, "vis" : false, "curve" : 0 },
		/* 110 */ { "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["red" ], "x" : 592, "y" : 216, "vis" : false, "curve" : 0 },
		
		/* 111 */ { "x" : -715, "y" : 315, "trait" : "ballArea", "vis" : true, "color" : "ffffff", "curve" : 0, "bCoef" : 1 },
		
		/* 112 */ { "trait" : "line", "x" : -61, "y" : -75.65621948242188, "curve" : -180, "color" : "EF7E29" },
		/* 113 */ { "trait" : "line", "x" : -61, "y" : 88.34378051757812, "curve" : -180, "color" : "EF7E29" },
		
		/* 114 */ { "bCoef" : 0, "cMask" : ["blue" ], "x" : 622, "y" : 82.00390625 },
		/* 115 */ { "x" : -715, "y" : 214.00781250000003, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["red" ], "curve" : -85, "color" : "E9CC6D" },
		
		/* 116 */ { "x" : -615, "y" : -325, "trait" : "line", "color" : "EF7E29" },
		
		/* 117 */ { "x" : -520, "y" : 9.0078125, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "FFFFFF", "radius" : 10 },
		/* 118 */ { "x" : -520, "y" : -20.992187500000014, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "FFFFFF", "radius" : 10 },
		
		/* 119 */ { "x" : -715, "y" : -99.99218750000003, "cMask" : ["red" ], "cGroup" : ["red" ], "trait" : "ballArea", "vis" : false, "color" : "E9CC6D" },
		/* 120 */ { "x" : -715, "y" : 88.00781250000001, "cMask" : ["red" ], "cGroup" : ["red" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "color" : "E9CC6D" },
		
		/* 121 */ { "x" : -715, "y" : 214.00781250000003, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : -85, "color" : "88A9D9", "vis" : false },
		
		/* 122 */ { "x" : -715, "y" : -97.33139234545078, "cMask" : ["ball" ], "cGroup" : ["red" ], "trait" : "ballArea", "vis" : false, "color" : "FFFFFF", "curve" : 0 },
		/* 123 */ { "x" : -715, "y" : 88.00781250000001, "cMask" : ["ball" ], "cGroup" : ["red" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "color" : "FFFFFF" },
		
		/* 124 */ { "x" : -715, "y" : -225.99218750000006, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["red" ], "curve" : 0, "color" : "E9CC6D", "vis" : false },
		/* 125 */ { "x" : -715, "y" : 214.00781250000003, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : 0, "color" : "88A9D9", "vis" : false },
		
		/* 126 */ { "x" : -715, "y" : 88.00781250000001, "cMask" : ["ball" ], "cGroup" : ["red" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "color" : "FFFFFF", "bCoef" : 1 },
		/* 127 */ { "x" : -715, "y" : 315, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 1 },
		/* 128 */ { "x" : -715, "y" : -325, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : true, "color" : "FFFFFF", "curve" : 0, "bCoef" : 1 },
		/* 129 */ { "x" : -715, "y" : -99.99218750000003, "cMask" : ["ball" ], "cGroup" : ["red" ], "trait" : "ballArea", "vis" : false, "color" : "FFFFFF", "curve" : 0, "bCoef" : 1 },
		
		/* 130 */ { "x" : -713, "y" : -225.99218750000006, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : 85, "color" : "2CAAFF" },
		/* 131 */ { "x" : -548, "y" : -115.99218750000003, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : 8, "color" : "2CAAFF" },
		/* 132 */ { "x" : -713, "y" : 214.00781250000003, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : -85, "color" : "2CAAFF" },
		/* 133 */ { "x" : -548, "y" : 104.00781250000001, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : 8, "color" : "2CAAFF" },
		
		/* 134 */ { "x" : -583.901256418312, "y" : -311.94942973833446, "trait" : "line", "color" : "EF7E29" },
		/* 135 */ { "x" : -615, "y" : 315, "trait" : "line", "color" : "EF7E29" },
		/* 136 */ { "x" : -583.2378162708901, "y" : -312.93032172703005, "trait" : "line", "color" : "EF7E29" },
		/* 137 */ { "x" : -585.713123102581, "y" : 300.77043829838703, "trait" : "line", "color" : "EF7E29" },
		/* 138 */ { "x" : -567.7855514935915, "y" : -302.4267701425976, "trait" : "line", "color" : "EF7E29" },
		/* 139 */ { "x" : -531.1881622572369, "y" : -275.0678055235326, "trait" : "line", "color" : "EF7E29" },
		/* 140 */ { "x" : -494.05522503972065, "y" : -240.23445334512593, "trait" : "line", "color" : "EF7E29" },
		/* 141 */ { "x" : -436.982193163891, "y" : -64.4909942520952, "trait" : "line", "color" : "EF7E29" },
		/* 142 */ { "x" : -435.9981406555976, "y" : -46.497249809169034, "trait" : "line", "color" : "EF7E29" },
		/* 143 */ { "x" : -480.01407293866214, "y" : -219.27178938708136, "trait" : "line", "color" : "EF7E29" },
		/* 144 */ { "x" : -448.6930868351151, "y" : -149.43183180949086, "trait" : "line", "color" : "EF7E29" },
		/* 145 */ { "x" : -563.878121149686, "y" : 291.11189909663733, "trait" : "line", "color" : "EF7E29" },
		/* 146 */ { "x" : -527.6441117593936, "y" : 263.2734650988584, "trait" : "line", "color" : "EF7E29" },
		/* 147 */ { "x" : -543.9887613010156, "y" : 276.40411848550804, "trait" : "line", "color" : "EF7E29" },
		/* 148 */ { "x" : -508.5288007685749, "y" : 246.4668878615899, "trait" : "line", "color" : "EF7E29" },
		/* 149 */ { "x" : -441.09410267505655, "y" : -117.9686910478701, "trait" : "line", "color" : "EF7E29" },
		/* 150 */ { "x" : -438.0783239836344, "y" : -96.48432901361386, "trait" : "line", "color" : "EF7E29" },
		/* 151 */ { "x" : -547.7042731236562, "y" : -287.98212737359216, "trait" : "line", "color" : "EF7E29" },
		/* 152 */ { "x" : -435.7974096944258, "y" : -16.0062168071659, "trait" : "line", "color" : "EF7E29" },
		/* 153 */ { "x" : -511.85323292648945, "y" : -258.51435692564246, "trait" : "line", "color" : "EF7E29" },
		/* 154 */ { "x" : -469.4723211500618, "y" : -200.79210543630222, "trait" : "line", "color" : "EF7E29" },
		/* 155 */ { "x" : -457.3014196476447, "y" : -174.87166646203974, "trait" : "line", "color" : "EF7E29" },
		/* 156 */ { "x" : -492.9597988814521, "y" : 229.96736330301715, "trait" : "line", "color" : "EF7E29" },
		/* 157 */ { "x" : -477.2090675592799, "y" : 206.8085277410859, "trait" : "line", "color" : "EF7E29" },
		/* 158 */ { "x" : -466.9115327471668, "y" : 188.1916529634423, "trait" : "line", "color" : "EF7E29" },
		/* 159 */ { "x" : -455.08295430734483, "y" : 162.11321872952058, "trait" : "line", "color" : "EF7E29" },
		/* 160 */ { "x" : -446.79714186893466, "y" : 138.56220855331276, "trait" : "line", "color" : "EF7E29" },
		/* 161 */ { "x" : -440.5867054225696, "y" : 111.00824320846532, "trait" : "line", "color" : "EF7E29" },
		/* 162 */ { "x" : -437.86063407766346, "y" : 88.48605930692862, "trait" : "line", "color" : "EF7E29" },
		/* 163 */ { "x" : -436.1595111996012, "y" : 60.47439612353034, "trait" : "line", "color" : "EF7E29" },
		/* 164 */ { "x" : -435.6360681855451, "y" : 8.501558391795015, "trait" : "line", "color" : "EF7E29" },
		/* 165 */ { "x" : -435.4419203601924, "y" : 37.992613062871555, "trait" : "line", "color" : "EF7E29" },
		
		/* 166 */ { "x" : -592, "y" : 2.007812499999993, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "FFFFFF" },
		/* 167 */ { "x" : -592, "y" : -13.9921875, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "FFFFFF" },
		
		/* 168 */ { "x" : -714.2715278479752, "y" : 85.99063504602832, "trait" : "ballArea" },
		
		/* 169 */ { "x" : -715.722625690124, "y" : -97.33139234545078, "trait" : "goalNet", "color" : "FFFFFF", "cMask" : ["red","ball" ] },
		/* 170 */ { "x" : -745.7216858912061, "y" : -97.09393276602268, "trait" : "goalNet", "color" : "FFFFFF", "cMask" : ["blue" ], "bCoef" : 0, "curve" : 0 },
		/* 171 */ { "x" : -745, "y" : 86.22809462545641, "trait" : "goalNet", "color" : "FFFFFF", "cMask" : ["blue" ], "bCoef" : 0, "curve" : 0 },
		/* 172 */ { "x" : -714.2715278479752, "y" : 85.99063504602832, "trait" : "goalNet", "color" : "FFFFFF", "cMask" : ["red","ball" ] },
		
		/* 173 */ { "x" : -714.2715278479752, "y" : 85.99063504602832, "trait" : "fieldArea" },
		
		/* 174 */ { "x" : -715, "y" : 85.99063504602832, "trait" : "line", "color" : "FFFFFF" },
		/* 175 */ { "x" : -715, "y" : -97.33139234545078, "trait" : "line", "color" : "FFFFFF" },
		/* 176 */ { "x" : -715, "y" : -68.68732556553218, "trait" : "line", "color" : "FFFFFF" },
		/* 177 */ { "x" : -715, "y" : 58.49233093730646, "trait" : "line", "color" : "FFFFFF" },
		/* 178 */ { "x" : -729.7221871172956, "y" : -97.22057787505099, "trait" : "line", "color" : "FFFFFF" },
		/* 179 */ { "x" : -732.2709639686243, "y" : 86.13311079368516, "trait" : "line", "color" : "FFFFFF" },
		/* 180 */ { "x" : -715, "y" : 45.96496371697479, "trait" : "line", "color" : "CF0000" },
		/* 181 */ { "x" : -715, "y" : 25.340589543282263, "trait" : "line", "color" : "CF0000" },
		/* 182 */ { "x" : -715, "y" : 0.007812499999992895, "trait" : "line", "color" : "CF0000" },
		/* 183 */ { "x" : -715, "y" : -21.992187500000014, "trait" : "line", "color" : "CF0000" },
		/* 184 */ { "x" : -715, "y" : 85.99063504602832, "trait" : "line", "color" : "CF0000" },
		/* 185 */ { "x" : -715, "y" : 63.609927847103336, "trait" : "line", "color" : "CF0000" },
		/* 186 */ { "x" : -715, "y" : -75.99218750000003, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "trait" : "line", "color" : "CF0000" },
		/* 187 */ { "x" : -715, "y" : -100.07287845559074, "trait" : "line", "color" : "CF0000" },
		/* 188 */ { "x" : -715, "y" : -40.992187500000014, "trait" : "line", "color" : "CF0000" },
		/* 189 */ { "x" : -715, "y" : -55.992187500000014, "trait" : "line", "color" : "CF0000" },
		
		/* 190 */ { "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["red" ], "x" : -714, "y" : 214.00781250000003, "vis" : false, "curve" : 0 },
		/* 191 */ { "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["red" ], "x" : -715, "y" : -225.99218750000006, "vis" : false, "curve" : 0 },
		
		/* 192 */ { "x" : -715, "y" : 315, "trait" : "ballArea", "vis" : true, "color" : "ffffff", "curve" : 0, "bCoef" : 1 },
		/* 193 */ { "x" : 592, "y" : 315, "trait" : "ballArea", "vis" : true, "color" : "ffffff", "curve" : 0, "bCoef" : 1 },
		/* 194 */ { "x" : -715, "y" : -325, "trait" : "ballArea", "color" : "ffffff", "vis" : true, "curve" : 0, "bCoef" : 1 },
		/* 195 */ { "x" : 592, "y" : -325, "trait" : "ballArea", "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 1 },
		
		/* 196 */ { "x" : -61, "y" : 350, "trait" : "line", "color" : "EF7E29" },
		/* 197 */ { "x" : -61, "y" : -357, "trait" : "line", "color" : "EF7E29" }

	],

	"segments" : [
		{ "v0" : 0, "v1" : 1, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "x" : -1300, "curve" : 259.83403647248304, "cGroup" : ["blueKO","redKO" ] },
		{ "v0" : 2, "v1" : 3, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "y" : -150 },
		{ "v0" : 4, "v1" : 5, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "y" : 150, "curve" : 0 },
		{ "v0" : 7, "v1" : 8, "vis" : false, "bCoef" : 1000000, "cMask" : ["blue" ], "x" : 1410 },
		
		{ "v0" : 10, "v1" : 11, "curve" : 216, "trait" : "powerboost", "bCoef" : -2.2, "vis" : false, "cMask" : ["ball" ], "pos" : [955,0 ], "radius" : 10 },
		
		{ "v0" : 12, "v1" : 13, "curve" : 0, "vis" : false, "color" : "C7E6BD", "bCoef" : 0, "cMask" : ["blue" ], "cGroup" : ["redKO" ], "x" : 1134 },
		{ "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "v0" : 14, "v1" : 15 },
		{ "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "v0" : 15, "v1" : 16, "y" : 18 },
		{ "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "v0" : 17, "v1" : 18, "y" : -18 },
		{ "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "v0" : 17, "v1" : 6 },
		{ "vis" : false, "bCoef" : -2.4, "cMask" : ["blue" ], "v0" : 19, "v1" : 20, "x" : 1233.0188554822 },
		{ "curve" : -79.41835780463073, "vis" : false, "bCoef" : 0, "cMask" : ["red" ], "v0" : 21, "v1" : 22 },
		{ "v0" : 23, "v1" : 24, "curve" : 0, "vis" : false, "color" : "C7E6BD", "bCoef" : 0, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "x" : 1134, "radius" : 15, "pos" : [67,0 ], "_selected" : true },
		
		{ "v0" : 27, "v1" : 28, "curve" : 0, "vis" : true, "color" : "FFFFFF", "trait" : "line" },
		
		{ "v0" : 36, "v1" : 37, "curve" : 0, "vis" : true, "color" : "FFFFFF", "cMask" : ["ball" ], "trait" : "ballArea", "bCoef" : 1 },
		{ "v0" : 38, "v1" : 39, "vis" : true, "color" : "FFFFFF", "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "bCoef" : 1 },
		
		{ "v0" : 40, "v1" : 41, "curve" : 85, "vis" : true, "color" : "2CAAFF", "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ] },
		{ "v0" : 42, "v1" : 43, "curve" : -85, "vis" : true, "color" : "2CAAFF", "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ] },
		{ "v0" : 41, "v1" : 43, "curve" : 8, "vis" : true, "color" : "2CAAFF", "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ] },
		
		{ "v0" : 26, "v1" : 44, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 48, "v1" : 45, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 49, "v1" : 62, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 51, "v1" : 54, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 55, "v1" : 60, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 61, "v1" : 52, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 53, "v1" : 63, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 59, "v1" : 57, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 58, "v1" : 56, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 50, "v1" : 64, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 65, "v1" : 66, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 60, "v1" : 60, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 67, "v1" : 68, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 69, "v1" : 70, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 71, "v1" : 72, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 73, "v1" : 74, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 75, "v1" : 76, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 77, "v1" : 78, "curve" : 0, "vis" : true, "color" : "FFFFFF", "trait" : "line" },
		
		{ "v0" : 80, "v1" : 81, "color" : "FFFFFF", "trait" : "goalNet", "cMask" : ["blue","ball" ] },
		{ "v0" : 81, "v1" : 82, "curve" : 0, "color" : "FFFFFF", "trait" : "goalNet", "cMask" : ["red" ], "bCoef" : 0 },
		{ "v0" : 82, "v1" : 83, "color" : "FFFFFF", "trait" : "goalNet", "cMask" : ["blue","ball" ] },
		
		{ "v0" : 86, "v1" : 85, "curve" : 0, "vis" : true, "color" : "FFFFFF", "trait" : "line" },
		{ "v0" : 87, "v1" : 89, "curve" : 0, "vis" : true, "color" : "FFFFFF", "trait" : "line" },
		{ "v0" : 88, "v1" : 90, "curve" : 0, "vis" : true, "color" : "FFFFFF", "trait" : "line" },
		{ "v0" : 91, "v1" : 92, "curve" : 0, "vis" : true, "color" : "FFFFFF", "trait" : "line" },
		{ "v0" : 93, "v1" : 94, "curve" : 0, "vis" : true, "color" : "FFFFFF", "trait" : "line" },
		{ "v0" : 95, "v1" : 96, "curve" : 0, "vis" : true, "color" : "FFFFFF", "trait" : "line" },
		{ "v0" : 97, "v1" : 98, "curve" : 0, "vis" : true, "color" : "FFFFFF", "trait" : "line" },
		{ "v0" : 99, "v1" : 100, "curve" : 0, "vis" : true, "color" : "CF0000", "trait" : "line" },
		{ "v0" : 101, "v1" : 102, "curve" : 0, "vis" : true, "color" : "CF0000", "trait" : "line" },
		{ "v0" : 103, "v1" : 104, "curve" : 0, "vis" : true, "color" : "CF0000", "trait" : "line" },
		{ "v0" : 105, "v1" : 106, "curve" : 0, "vis" : true, "color" : "CF0000", "trait" : "line" },
		{ "v0" : 107, "v1" : 108, "curve" : 0, "vis" : true, "color" : "CF0000", "trait" : "line" },
		{ "vis" : true, "color" : "EF7E29", "trait" : "line", "v0" : 112, "v1" : 113, "curve" : 180 },
		{ "vis" : true, "color" : "EF7E29", "trait" : "line", "v0" : 113, "v1" : 112, "curve" : 184.01604679055436 },
		
		{ "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "v0" : 18, "v1" : 82, "x" : 1180 },
		{ "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "v0" : 16, "v1" : 114, "x" : 1180 },
		
		{ "v0" : 117, "v1" : 118, "curve" : 0, "vis" : true, "color" : "FFFFFF", "trait" : "line" },
		
		{ "v0" : 126, "v1" : 127, "curve" : 0, "vis" : true, "color" : "FFFFFF", "cMask" : ["ball" ], "trait" : "ballArea", "bCoef" : 1 },
		{ "v0" : 128, "v1" : 129, "vis" : true, "color" : "FFFFFF", "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "bCoef" : 1 },
		
		{ "v0" : 130, "v1" : 131, "curve" : 85, "vis" : true, "color" : "2CAAFF", "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ] },
		{ "v0" : 132, "v1" : 133, "curve" : -85, "vis" : true, "color" : "2CAAFF", "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ] },
		{ "v0" : 131, "v1" : 133, "curve" : 8, "vis" : true, "color" : "2CAAFF", "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ] },
		
		{ "v0" : 116, "v1" : 134, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 137, "v1" : 135, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 138, "v1" : 151, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 140, "v1" : 143, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 144, "v1" : 149, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 150, "v1" : 141, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 142, "v1" : 152, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 148, "v1" : 146, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 147, "v1" : 145, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 139, "v1" : 153, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 154, "v1" : 155, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 149, "v1" : 149, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 156, "v1" : 157, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 158, "v1" : 159, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 160, "v1" : 161, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 162, "v1" : 163, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 164, "v1" : 165, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 166, "v1" : 167, "curve" : 0, "vis" : true, "color" : "FFFFFF", "trait" : "line" },
		
		{ "v0" : 169, "v1" : 170, "color" : "FFFFFF", "trait" : "goalNet", "cMask" : ["red","ball" ] },
		{ "v0" : 170, "v1" : 171, "curve" : 0, "color" : "FFFFFF", "trait" : "goalNet", "cMask" : ["blue" ], "bCoef" : 0 },
		{ "v0" : 171, "v1" : 172, "color" : "FFFFFF", "trait" : "goalNet", "cMask" : ["red","ball" ] },
		
		{ "v0" : 175, "v1" : 174, "curve" : 0, "vis" : true, "color" : "FFFFFF", "trait" : "line" },
		{ "v0" : 176, "v1" : 178, "curve" : 0, "vis" : true, "color" : "FFFFFF", "trait" : "line" },
		{ "v0" : 177, "v1" : 179, "curve" : 0, "vis" : true, "color" : "FFFFFF", "trait" : "line" },
		{ "v0" : 180, "v1" : 181, "curve" : 0, "vis" : true, "color" : "CF0000", "trait" : "line" },
		{ "v0" : 182, "v1" : 183, "curve" : 0, "vis" : true, "color" : "CF0000", "trait" : "line" },
		{ "v0" : 184, "v1" : 185, "curve" : 0, "vis" : true, "color" : "CF0000", "trait" : "line" },
		{ "v0" : 186, "v1" : 187, "curve" : 0, "vis" : true, "color" : "CF0000", "trait" : "line" },
		{ "v0" : 188, "v1" : 189, "curve" : 0, "vis" : true, "color" : "CF0000", "trait" : "line" },
		
		{ "v0" : 193, "v1" : 192, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : 290 },
		{ "v0" : 194, "v1" : 195, "vis" : true, "color" : "ffffff", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : -320, "curve" : 0.09261129897399809 },
		
		{ "v0" : 196, "v1" : 197, "color" : "EF7E29", "trait" : "line", "x" : 840 }

	],

	"goals" : [
		{ "p0" : [592.1393591516376,-96.47239042901694 ], "p1" : [308.5412460785576,8.46728888038227 ], "team" : "red" },
		{ "p0" : [596.0888745458144,91.95874017803774 ], "p1" : [298.51678185229196,-23.848942732672967 ], "team" : "red" },
		{ "p0" : [602,-97.986883372199 ], "p1" : [602,92.011511591401 ], "team" : "blue" },
		{ "p0" : [-725,87.99469587219902 ], "p1" : [-725,-102.00369909140105 ], "team" : "red" }

	],

	"discs" : [
		{ "radius" : 5.352099039641226, "pos" : [592,-95.9828225460283 ], "color" : "FFFFFF", "cMask" : ["ball","blue","red" ], "trait" : "goalPost", "vis" : false },
		{ "radius" : 5.352099039641226, "pos" : [592,87.33920484545074 ], "color" : "FFFFFF", "bCoef" : 2, "cMask" : ["ball","blue","red" ], "trait" : "goalPost", "vis" : false },
		{ "radius" : 1.3, "invMass" : 0, "pos" : [622,-96 ], "color" : "000003", "cMask" : ["ball" ], "damping" : 0, "trait" : "goalPost", "bCoef" : 0 },
		{ "radius" : 1.3, "invMass" : 0, "pos" : [623,87 ], "color" : "000004", "cMask" : ["ball" ], "damping" : 0, "trait" : "goalPost", "bCoef" : 0 },
		
		{ "radius" : 4, "invMass" : 1.5, "pos" : [630,-86 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [633,-70 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [636,-56 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [635,-39 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [636,-22 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [635,-8 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [635,11 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [635,32 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [635,47 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [634,63 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [632,79 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		
		{ "radius" : 5.352099039641226, "pos" : [-715,85.99063504602832 ], "color" : "FFFFFF", "cMask" : ["ball","blue","red" ], "trait" : "goalPost", "vis" : false },
		{ "radius" : 5.352099039641226, "pos" : [-715,-97.33139234545078 ], "color" : "FFFFFF", "bCoef" : 2, "cMask" : ["ball","blue","red" ], "trait" : "goalPost", "vis" : false },
		{ "radius" : 1.3, "invMass" : 0, "pos" : [-745,86.00781250000001 ], "color" : "000003", "cMask" : ["ball" ], "damping" : 0, "trait" : "goalPost", "bCoef" : 0 },
		{ "radius" : 1.3, "invMass" : 0, "pos" : [-746,-96.99218750000003 ], "color" : "000004", "cMask" : ["ball" ], "damping" : 0, "trait" : "goalPost", "bCoef" : 0 },
		
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-753,76.0078125 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-756,60.0078125 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-759,46.0078125 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-758,29.0078125 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-759,12.0078125 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-758,-1.992187500000007 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-758,-20.992187500000014 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-758,-41.992187500000014 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-758,-56.992187500000014 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-757,-72.99218750000003 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-755,-88.99218750000003 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 }

	],

	"joints" : [
		{ "d0" : 3, "d1" : 5, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 5, "d1" : 6, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 6, "d1" : 7, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 7, "d1" : 8, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 8, "d1" : 9, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 9, "d1" : 10, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 10, "d1" : 11, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 11, "d1" : 12, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 12, "d1" : 13, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 13, "d1" : 14, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 14, "d1" : 15, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 15, "d1" : 4, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 18, "d1" : 20, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 20, "d1" : 21, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 21, "d1" : 22, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 22, "d1" : 23, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 23, "d1" : 24, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 24, "d1" : 25, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 25, "d1" : 26, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 26, "d1" : 27, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 27, "d1" : 28, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 28, "d1" : 29, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 29, "d1" : 30, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 30, "d1" : 19, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" }
	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -328, "bCoef" : 0, "trait" : "ballArea" },
		{ "normal" : [0,-1 ], "dist" : -320, "bCoef" : 0, "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -368, "bCoef" : 0 },
		{ "normal" : [0,-1 ], "dist" : -355, "bCoef" : 0 },
		{ "normal" : [1,0 ], "dist" : -1767, "bCoef" : 0, "cMask" : ["ball" ] },
		{ "normal" : [-1,0 ], "dist" : -653, "bCoef" : 0, "cMask" : ["ball" ] },
		{ "normal" : [1,0 ], "dist" : -185, "bCoef" : 0 },
		{ "normal" : [-1,0 ], "dist" : -902, "bCoef" : 0 }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 0, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 5, "invMass" : 0, "bCoef" : 2 },
		"stanchion" : { "radius" : 3, "invMass" : 0, "bCoef" : 3, "cMask" : ["none" ] },
		"cornerflag" : { "radius" : 3, "invMass" : 0, "bCoef" : 0.5, "color" : "FFFF00", "cGroup" : [ ] },
		"reargoalNetleft" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "curve" : 10, "color" : "C7E6BD" },
		"reargoalNetright" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "curve" : -10, "color" : "C7E6BD" },
		"sidegoalNet" : { "vis" : true, "bCoef" : 1, "cMask" : ["ball","red","blue" ], "color" : "C7E6BD" },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] },
		"line" : { "vis" : true, "cMask" : [ ], "color" : "C7E6BD" },
		"tunnel" : { "vis" : true, "cMask" : ["red","blue" ], "color" : "000000" },
		"advertising" : { "vis" : true, "cMask" : ["red","blue" ], "color" : "333333" },
		"teambench" : { "vis" : true, "cMask" : [ ], "color" : "000000" },
		"manager" : { "radius" : 15, "vis" : true, "cMask" : ["red","blue" ], "invMass" : 0, "color" : "333333" },
		"physio" : { "radius" : 15, "vis" : true, "cMask" : ["red","blue" ], "invMass" : 0, "color" : "666666" },
		"redsubs" : { "radius" : 15, "vis" : true, "cMask" : ["red","blue" ], "invMass" : 0, "color" : "E56E56" },
		"bluesubs" : { "radius" : 15, "vis" : true, "cMask" : ["red","blue" ], "invMass" : 0, "color" : "5689E5" }

	}
}`;
var PensBlueHandball=`
{

	"name" : "Escreva !help para mais informações",

	"width" : 790,

	"height" : 350,

	"spawnDistance" : 300,

	"redSpawnPoints" : [
		[ 773, -90
		],
		[ 773, -30
		],
		[ 773, 30
		],
		[ 773, 90
		]

	],

	"blueSpawnPoints" : [
		[ 45, -90
		],
		[ 45, -30
		],
		[ 45, 30
		],
		[ 45, 90
		]

	],

	"bg" : { "type" : "none", "width" : 0, "height" : 0, "kickOffRadius" : 0, "cornerRadius" : 0, "color" : "253D97" },

	"playerPhysics" : {
		"bCoef" : 0.5,
		"invMass" : 0.5,
		"damping" : 0.96,
		"acceleration" : 0.12,
		"kickingAcceleration" : 0.07,
		"kickingDamping" : 0.96,
		"kickStrength" : 5.65

	},

	"ballPhysics" : {
		"pos" : [ 397, 0
		],
		"radius" : 10,
		"color" : "fff100"

	},

	"vertexes" : [
		/* 0 */ { "x" : -174, "y" : -142, "bCoef" : 0, "cMask" : ["red" ], "cGroup" : ["blueKO","redKO" ], "curve" : 235 },
		/* 1 */ { "x" : -176, "y" : 131, "bCoef" : 0, "cMask" : ["red" ], "cGroup" : ["blueKO","redKO" ], "curve" : 235 },
		/* 2 */ { "x" : 937, "y" : -155, "bCoef" : 0, "cMask" : ["red" ], "dist" : -1400 },
		/* 3 */ { "x" : 747, "y" : -156, "bCoef" : 0, "cMask" : ["red" ] },
		/* 4 */ { "x" : 747, "y" : 144, "bCoef" : 0, "cMask" : ["red" ], "curve" : 0 },
		/* 5 */ { "x" : 936, "y" : 144, "bCoef" : 0, "cMask" : ["red" ], "dist" : -1400, "curve" : 0 },
		
		/* 6 */ { "x" : 742, "y" : -156, "trait" : "kickOffBarrier", "cMask" : ["red" ] },
		
		/* 7 */ { "x" : 858, "y" : -125, "bCoef" : 0, "cMask" : ["red" ] },
		/* 8 */ { "x" : 858, "y" : 115, "bCoef" : 0, "cMask" : ["red" ] },
		/* 9 */ { "x" : -477.93953763264415, "y" : 731, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		
		/* 10 */ { "x" : 395, "y" : -15, "trait" : "powerboost", "bCoef" : -2.2, "vis" : false, "cMask" : ["ball" ], "pos" : [955,0 ], "radius" : 10, "curve" : 216 },
		/* 11 */ { "x" : 395, "y" : 5, "trait" : "powerboost", "bCoef" : -2.2, "vis" : false, "cMask" : ["ball" ], "pos" : [955,0 ], "radius" : 10, "curve" : 216 },
		
		/* 12 */ { "x" : 576, "y" : 111.23596984067328, "bCoef" : 0, "cMask" : ["red" ], "cGroup" : ["redKO" ], "vis" : false, "curve" : 0 },
		/* 13 */ { "x" : 576, "y" : -128.763613824687, "bCoef" : 0, "cMask" : ["red" ], "cGroup" : ["redKO" ], "vis" : false, "curve" : 0 },
		/* 14 */ { "bCoef" : 0, "cMask" : ["red" ], "x" : 742, "y" : 144 },
		/* 15 */ { "bCoef" : 0, "cMask" : ["red" ], "x" : 742, "y" : 12 },
		/* 16 */ { "bCoef" : 0, "cMask" : ["red" ], "x" : 622, "y" : 12 },
		/* 17 */ { "bCoef" : 0, "cMask" : ["red" ], "x" : 742, "y" : -24 },
		/* 18 */ { "bCoef" : 0, "cMask" : ["red" ], "x" : 622, "y" : -24 },
		/* 19 */ { "bCoef" : -2.4, "cMask" : ["red" ], "x" : 706.0188554822, "y" : 59.50390625 },
		/* 20 */ { "bCoef" : -2.4, "cMask" : ["red" ], "x" : 706.0188554822, "y" : -71.49609375 },
		/* 21 */ { "bCoef" : 0, "cMask" : ["blue" ], "x" : 177, "y" : 615, "curve" : -77 },
		/* 22 */ { "bCoef" : 0, "cMask" : ["blue" ], "x" : 177, "y" : -625, "curve" : -77 },
		/* 23 */ { "x" : 576, "y" : 111.23596984067328, "bCoef" : 0, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "vis" : false, "curve" : 0, "radius" : 15, "pos" : [67,0 ] },
		/* 24 */ { "x" : 576, "y" : -128.763613824687, "bCoef" : 0, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "vis" : false, "curve" : 0, "radius" : 15, "pos" : [67,0 ] },
		/* 25 */ { "x" : 592, "y" : -224, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["red" ], "curve" : -85, "color" : "E9CC6D" },
		
		/* 26 */ { "x" : 492, "y" : 316, "trait" : "line", "color" : "EF7E29" },
		
		/* 27 */ { "x" : 397, "y" : -19, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "FFFFFF", "radius" : 10 },
		/* 28 */ { "x" : 397, "y" : 11, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "FFFFFF", "radius" : 10 },
		
		/* 29 */ { "x" : 592, "y" : 90, "cMask" : ["red" ], "cGroup" : ["red" ], "trait" : "ballArea", "vis" : false, "color" : "E9CC6D" },
		/* 30 */ { "x" : 592, "y" : -98, "cMask" : ["red" ], "cGroup" : ["red" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "color" : "E9CC6D" },
		
		/* 31 */ { "x" : 592, "y" : -224, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : -85, "color" : "88A9D9", "vis" : false },
		
		/* 32 */ { "x" : 592, "y" : 87.33920484545074, "cMask" : ["ball" ], "cGroup" : ["red" ], "trait" : "ballArea", "vis" : false, "color" : "FFFFFF", "curve" : 0 },
		/* 33 */ { "x" : 592, "y" : -98, "cMask" : ["ball" ], "cGroup" : ["red" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "color" : "FFFFFF" },
		
		/* 34 */ { "x" : 592, "y" : 216, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["red" ], "curve" : 0, "color" : "E9CC6D", "vis" : false },
		/* 35 */ { "x" : 592, "y" : -224, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : 0, "color" : "88A9D9", "vis" : false },
		
		/* 36 */ { "x" : 592, "y" : -98, "cMask" : ["ball" ], "cGroup" : ["red" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "color" : "FFFFFF", "bCoef" : 1 },
		/* 37 */ { "x" : 592, "y" : -325, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 1 },
		/* 38 */ { "x" : 592, "y" : 315, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : true, "color" : "FFFFFF", "curve" : 0, "bCoef" : 1 },
		/* 39 */ { "x" : 592, "y" : 90, "cMask" : ["ball" ], "cGroup" : ["red" ], "trait" : "ballArea", "vis" : false, "color" : "FFFFFF", "curve" : 0, "bCoef" : 1 },
		
		/* 40 */ { "x" : 590, "y" : 216, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : 85, "color" : "2CAAFF" },
		/* 41 */ { "x" : 425, "y" : 106, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : 8, "color" : "2CAAFF" },
		/* 42 */ { "x" : 590, "y" : -224, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : -85, "color" : "2CAAFF" },
		/* 43 */ { "x" : 425, "y" : -114, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : 8, "color" : "2CAAFF" },
		
		/* 44 */ { "x" : 460.90125641831196, "y" : 301.9572422383344, "trait" : "line", "color" : "EF7E29" },
		/* 45 */ { "x" : 492, "y" : -324, "trait" : "line", "color" : "EF7E29" },
		/* 46 */ { "x" : 491.0899057985382, "y" : 316.2098043123669, "trait" : "line", "color" : "EF7E29" },
		/* 47 */ { "x" : 460.2378162708901, "y" : 302.93813422703, "trait" : "line", "color" : "EF7E29" },
		/* 48 */ { "x" : 462.713123102581, "y" : -310.762625798387, "trait" : "line", "color" : "EF7E29" },
		/* 49 */ { "x" : 444.78555149359147, "y" : 292.43458264259755, "trait" : "line", "color" : "EF7E29" },
		/* 50 */ { "x" : 408.18816225723685, "y" : 265.07561802353257, "trait" : "line", "color" : "EF7E29" },
		/* 51 */ { "x" : 371.05522503972065, "y" : 230.24226584512587, "trait" : "line", "color" : "EF7E29" },
		/* 52 */ { "x" : 313.982193163891, "y" : 54.49880675209518, "trait" : "line", "color" : "EF7E29" },
		/* 53 */ { "x" : 312.9981406555976, "y" : 36.50506230916902, "trait" : "line", "color" : "EF7E29" },
		/* 54 */ { "x" : 357.01407293866214, "y" : 209.2796018870813, "trait" : "line", "color" : "EF7E29" },
		/* 55 */ { "x" : 325.6930868351151, "y" : 139.43964430949083, "trait" : "line", "color" : "EF7E29" },
		/* 56 */ { "x" : 440.87812114968597, "y" : -301.1040865966373, "trait" : "line", "color" : "EF7E29" },
		/* 57 */ { "x" : 404.6441117593936, "y" : -273.26565259885837, "trait" : "line", "color" : "EF7E29" },
		/* 58 */ { "x" : 420.98876130101564, "y" : -286.396305985508, "trait" : "line", "color" : "EF7E29" },
		/* 59 */ { "x" : 385.5288007685749, "y" : -256.45907536158984, "trait" : "line", "color" : "EF7E29" },
		/* 60 */ { "x" : 318.09410267505655, "y" : 107.97650354787007, "trait" : "line", "color" : "EF7E29" },
		/* 61 */ { "x" : 315.0783239836344, "y" : 86.49214151361383, "trait" : "line", "color" : "EF7E29" },
		/* 62 */ { "x" : 424.7042731236562, "y" : 277.9899398735921, "trait" : "line", "color" : "EF7E29" },
		/* 63 */ { "x" : 312.7974096944257, "y" : 6.014029307165885, "trait" : "line", "color" : "EF7E29" },
		/* 64 */ { "x" : 388.85323292648945, "y" : 248.5221694256424, "trait" : "line", "color" : "EF7E29" },
		/* 65 */ { "x" : 346.4723211500617, "y" : 190.79991793630217, "trait" : "line", "color" : "EF7E29" },
		/* 66 */ { "x" : 334.3014196476447, "y" : 164.87947896203968, "trait" : "line", "color" : "EF7E29" },
		/* 67 */ { "x" : 369.959798881452, "y" : -239.95955080301712, "trait" : "line", "color" : "EF7E29" },
		/* 68 */ { "x" : 354.2090675592799, "y" : -216.80071524108587, "trait" : "line", "color" : "EF7E29" },
		/* 69 */ { "x" : 343.9115327471668, "y" : -198.18384046344227, "trait" : "line", "color" : "EF7E29" },
		/* 70 */ { "x" : 332.08295430734483, "y" : -172.10540622952055, "trait" : "line", "color" : "EF7E29" },
		/* 71 */ { "x" : 323.79714186893466, "y" : -148.55439605331273, "trait" : "line", "color" : "EF7E29" },
		/* 72 */ { "x" : 317.5867054225696, "y" : -121.0004307084653, "trait" : "line", "color" : "EF7E29" },
		/* 73 */ { "x" : 314.86063407766346, "y" : -98.47824680692861, "trait" : "line", "color" : "EF7E29" },
		/* 74 */ { "x" : 313.1595111996012, "y" : -70.46658362353033, "trait" : "line", "color" : "EF7E29" },
		/* 75 */ { "x" : 312.6360681855451, "y" : -18.493745891795022, "trait" : "line", "color" : "EF7E29" },
		/* 76 */ { "x" : 312.4419203601924, "y" : -47.984800562871555, "trait" : "line", "color" : "EF7E29" },
		
		/* 77 */ { "x" : 469, "y" : -12, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "FFFFFF" },
		/* 78 */ { "x" : 469, "y" : 4, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "FFFFFF" },
		
		/* 79 */ { "x" : 591.2715278479752, "y" : -95.9828225460283, "trait" : "ballArea" },
		
		/* 80 */ { "x" : 592.722625690124, "y" : 87.33920484545074, "trait" : "goalNet", "color" : "FFFFFF", "cMask" : ["red","ball" ] },
		/* 81 */ { "x" : 622.7216858912061, "y" : 87.10174526602265, "trait" : "goalNet", "color" : "FFFFFF", "cMask" : ["blue" ], "bCoef" : 0, "curve" : 0 },
		/* 82 */ { "x" : 622, "y" : -96.2202821254564, "trait" : "goalNet", "color" : "FFFFFF", "cMask" : ["blue" ], "bCoef" : 0, "curve" : 0 },
		/* 83 */ { "x" : 591.2715278479752, "y" : -95.9828225460283, "trait" : "goalNet", "color" : "FFFFFF", "cMask" : ["red","ball" ] },
		
		/* 84 */ { "x" : 591.2715278479752, "y" : -95.9828225460283, "trait" : "fieldArea" },
		
		/* 85 */ { "x" : 592, "y" : -95.9828225460283, "trait" : "line", "color" : "FFFFFF" },
		/* 86 */ { "x" : 592, "y" : 87.33920484545074, "trait" : "line", "color" : "FFFFFF" },
		/* 87 */ { "x" : 592, "y" : 58.69513806553215, "trait" : "line", "color" : "FFFFFF" },
		/* 88 */ { "x" : 592, "y" : -68.48451843730645, "trait" : "line", "color" : "FFFFFF" },
		/* 89 */ { "x" : 606.7221871172956, "y" : 87.22839037505096, "trait" : "line", "color" : "FFFFFF" },
		/* 90 */ { "x" : 609.2709639686243, "y" : -96.12529829368515, "trait" : "line", "color" : "FFFFFF" },
		/* 91 */ { "x" : -211, "y" : 301, "trait" : "line", "color" : "FFFFFF" },
		/* 92 */ { "x" : -211, "y" : 331, "trait" : "line", "color" : "FFFFFF" },
		/* 93 */ { "x" : 89, "y" : 301, "trait" : "line", "color" : "FFFFFF" },
		/* 94 */ { "x" : 89, "y" : 331, "trait" : "line", "color" : "FFFFFF" },
		/* 95 */ { "x" : -211, "y" : -339, "trait" : "line", "color" : "FFFFFF" },
		/* 96 */ { "x" : -211, "y" : -309, "trait" : "line", "color" : "FFFFFF" },
		/* 97 */ { "x" : 89, "y" : -339, "trait" : "line", "color" : "FFFFFF" },
		/* 98 */ { "x" : 89, "y" : -309, "trait" : "line", "color" : "FFFFFF" },
		/* 99 */ { "x" : 592, "y" : -55.95715121697479, "trait" : "line", "color" : "CF0000" },
		/* 100 */ { "x" : 592, "y" : -35.33277704328226, "trait" : "line", "color" : "CF0000" },
		/* 101 */ { "x" : 592, "y" : -10, "trait" : "line", "color" : "CF0000" },
		/* 102 */ { "x" : 592, "y" : 12, "trait" : "line", "color" : "CF0000" },
		/* 103 */ { "x" : 592, "y" : -95.9828225460283, "trait" : "line", "color" : "CF0000" },
		/* 104 */ { "x" : 592, "y" : -73.60211534710332, "trait" : "line", "color" : "CF0000" },
		/* 105 */ { "x" : 592, "y" : 66, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "trait" : "line", "color" : "CF0000" },
		/* 106 */ { "x" : 592, "y" : 90.08069095559071, "trait" : "line", "color" : "CF0000" },
		/* 107 */ { "x" : 592, "y" : 31, "trait" : "line", "color" : "CF0000" },
		/* 108 */ { "x" : 592, "y" : 46, "trait" : "line", "color" : "CF0000" },
		
		/* 109 */ { "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["red" ], "x" : 591, "y" : -224, "vis" : false, "curve" : 0 },
		/* 110 */ { "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["red" ], "x" : 592, "y" : 216, "vis" : false, "curve" : 0 },
		
		/* 111 */ { "x" : -715, "y" : 315, "trait" : "ballArea", "vis" : true, "color" : "ffffff", "curve" : 0, "bCoef" : 1 },
		
		/* 112 */ { "trait" : "line", "x" : -61, "y" : -75.65621948242188, "curve" : -180, "color" : "EF7E29" },
		/* 113 */ { "trait" : "line", "x" : -61, "y" : 88.34378051757812, "curve" : -180, "color" : "EF7E29" },
		
		/* 114 */ { "bCoef" : 0, "cMask" : ["red" ], "x" : 622, "y" : 82.00390625 },
		/* 115 */ { "x" : -715, "y" : 214.00781250000003, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["red" ], "curve" : -85, "color" : "E9CC6D" },
		
		/* 116 */ { "x" : -615, "y" : -325, "trait" : "line", "color" : "EF7E29" },
		
		/* 117 */ { "x" : -520, "y" : 9.0078125, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "FFFFFF", "radius" : 10 },
		/* 118 */ { "x" : -520, "y" : -20.992187500000014, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "FFFFFF", "radius" : 10 },
		
		/* 119 */ { "x" : -715, "y" : -99.99218750000003, "cMask" : ["red" ], "cGroup" : ["red" ], "trait" : "ballArea", "vis" : false, "color" : "E9CC6D" },
		/* 120 */ { "x" : -715, "y" : 88.00781250000001, "cMask" : ["red" ], "cGroup" : ["red" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "color" : "E9CC6D" },
		
		/* 121 */ { "x" : -715, "y" : 214.00781250000003, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : -85, "color" : "88A9D9", "vis" : false },
		
		/* 122 */ { "x" : -715, "y" : -97.33139234545078, "cMask" : ["ball" ], "cGroup" : ["red" ], "trait" : "ballArea", "vis" : false, "color" : "FFFFFF", "curve" : 0 },
		/* 123 */ { "x" : -715, "y" : 88.00781250000001, "cMask" : ["ball" ], "cGroup" : ["red" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "color" : "FFFFFF" },
		
		/* 124 */ { "x" : -715, "y" : -225.99218750000006, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["red" ], "curve" : 0, "color" : "E9CC6D", "vis" : false },
		/* 125 */ { "x" : -715, "y" : 214.00781250000003, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : 0, "color" : "88A9D9", "vis" : false },
		
		/* 126 */ { "x" : -715, "y" : 88.00781250000001, "cMask" : ["ball" ], "cGroup" : ["red" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "color" : "FFFFFF", "bCoef" : 1 },
		/* 127 */ { "x" : -715, "y" : 315, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 1 },
		/* 128 */ { "x" : -715, "y" : -325, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : true, "color" : "FFFFFF", "curve" : 0, "bCoef" : 1 },
		/* 129 */ { "x" : -715, "y" : -99.99218750000003, "cMask" : ["ball" ], "cGroup" : ["red" ], "trait" : "ballArea", "vis" : false, "color" : "FFFFFF", "curve" : 0, "bCoef" : 1 },
		
		/* 130 */ { "x" : -713, "y" : -225.99218750000006, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : 85, "color" : "2CAAFF" },
		/* 131 */ { "x" : -548, "y" : -115.99218750000003, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : 8, "color" : "2CAAFF" },
		/* 132 */ { "x" : -713, "y" : 214.00781250000003, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : -85, "color" : "2CAAFF" },
		/* 133 */ { "x" : -548, "y" : 104.00781250000001, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : 8, "color" : "2CAAFF" },
		
		/* 134 */ { "x" : -583.901256418312, "y" : -311.94942973833446, "trait" : "line", "color" : "EF7E29" },
		/* 135 */ { "x" : -615, "y" : 315, "trait" : "line", "color" : "EF7E29" },
		/* 136 */ { "x" : -583.2378162708901, "y" : -312.93032172703005, "trait" : "line", "color" : "EF7E29" },
		/* 137 */ { "x" : -585.713123102581, "y" : 300.77043829838703, "trait" : "line", "color" : "EF7E29" },
		/* 138 */ { "x" : -567.7855514935915, "y" : -302.4267701425976, "trait" : "line", "color" : "EF7E29" },
		/* 139 */ { "x" : -531.1881622572369, "y" : -275.0678055235326, "trait" : "line", "color" : "EF7E29" },
		/* 140 */ { "x" : -494.05522503972065, "y" : -240.23445334512593, "trait" : "line", "color" : "EF7E29" },
		/* 141 */ { "x" : -436.982193163891, "y" : -64.4909942520952, "trait" : "line", "color" : "EF7E29" },
		/* 142 */ { "x" : -435.9981406555976, "y" : -46.497249809169034, "trait" : "line", "color" : "EF7E29" },
		/* 143 */ { "x" : -480.01407293866214, "y" : -219.27178938708136, "trait" : "line", "color" : "EF7E29" },
		/* 144 */ { "x" : -448.6930868351151, "y" : -149.43183180949086, "trait" : "line", "color" : "EF7E29" },
		/* 145 */ { "x" : -563.878121149686, "y" : 291.11189909663733, "trait" : "line", "color" : "EF7E29" },
		/* 146 */ { "x" : -527.6441117593936, "y" : 263.2734650988584, "trait" : "line", "color" : "EF7E29" },
		/* 147 */ { "x" : -543.9887613010156, "y" : 276.40411848550804, "trait" : "line", "color" : "EF7E29" },
		/* 148 */ { "x" : -508.5288007685749, "y" : 246.4668878615899, "trait" : "line", "color" : "EF7E29" },
		/* 149 */ { "x" : -441.09410267505655, "y" : -117.9686910478701, "trait" : "line", "color" : "EF7E29" },
		/* 150 */ { "x" : -438.0783239836344, "y" : -96.48432901361386, "trait" : "line", "color" : "EF7E29" },
		/* 151 */ { "x" : -547.7042731236562, "y" : -287.98212737359216, "trait" : "line", "color" : "EF7E29" },
		/* 152 */ { "x" : -435.7974096944258, "y" : -16.0062168071659, "trait" : "line", "color" : "EF7E29" },
		/* 153 */ { "x" : -511.85323292648945, "y" : -258.51435692564246, "trait" : "line", "color" : "EF7E29" },
		/* 154 */ { "x" : -469.4723211500618, "y" : -200.79210543630222, "trait" : "line", "color" : "EF7E29" },
		/* 155 */ { "x" : -457.3014196476447, "y" : -174.87166646203974, "trait" : "line", "color" : "EF7E29" },
		/* 156 */ { "x" : -492.9597988814521, "y" : 229.96736330301715, "trait" : "line", "color" : "EF7E29" },
		/* 157 */ { "x" : -477.2090675592799, "y" : 206.8085277410859, "trait" : "line", "color" : "EF7E29" },
		/* 158 */ { "x" : -466.9115327471668, "y" : 188.1916529634423, "trait" : "line", "color" : "EF7E29" },
		/* 159 */ { "x" : -455.08295430734483, "y" : 162.11321872952058, "trait" : "line", "color" : "EF7E29" },
		/* 160 */ { "x" : -446.79714186893466, "y" : 138.56220855331276, "trait" : "line", "color" : "EF7E29" },
		/* 161 */ { "x" : -440.5867054225696, "y" : 111.00824320846532, "trait" : "line", "color" : "EF7E29" },
		/* 162 */ { "x" : -437.86063407766346, "y" : 88.48605930692862, "trait" : "line", "color" : "EF7E29" },
		/* 163 */ { "x" : -436.1595111996012, "y" : 60.47439612353034, "trait" : "line", "color" : "EF7E29" },
		/* 164 */ { "x" : -435.6360681855451, "y" : 8.501558391795015, "trait" : "line", "color" : "EF7E29" },
		/* 165 */ { "x" : -435.4419203601924, "y" : 37.992613062871555, "trait" : "line", "color" : "EF7E29" },
		
		/* 166 */ { "x" : -592, "y" : 2.007812499999993, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "FFFFFF" },
		/* 167 */ { "x" : -592, "y" : -13.9921875, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "FFFFFF" },
		
		/* 168 */ { "x" : -714.2715278479752, "y" : 85.99063504602832, "trait" : "ballArea" },
		
		/* 169 */ { "x" : -715.722625690124, "y" : -97.33139234545078, "trait" : "goalNet", "color" : "FFFFFF", "cMask" : ["red","ball" ] },
		/* 170 */ { "x" : -745.7216858912061, "y" : -97.09393276602268, "trait" : "goalNet", "color" : "FFFFFF", "cMask" : ["blue" ], "bCoef" : 0, "curve" : 0 },
		/* 171 */ { "x" : -745, "y" : 86.22809462545641, "trait" : "goalNet", "color" : "FFFFFF", "cMask" : ["blue" ], "bCoef" : 0, "curve" : 0 },
		/* 172 */ { "x" : -714.2715278479752, "y" : 85.99063504602832, "trait" : "goalNet", "color" : "FFFFFF", "cMask" : ["red","ball" ] },
		
		/* 173 */ { "x" : -714.2715278479752, "y" : 85.99063504602832, "trait" : "fieldArea" },
		
		/* 174 */ { "x" : -715, "y" : 85.99063504602832, "trait" : "line", "color" : "FFFFFF" },
		/* 175 */ { "x" : -715, "y" : -97.33139234545078, "trait" : "line", "color" : "FFFFFF" },
		/* 176 */ { "x" : -715, "y" : -68.68732556553218, "trait" : "line", "color" : "FFFFFF" },
		/* 177 */ { "x" : -715, "y" : 58.49233093730646, "trait" : "line", "color" : "FFFFFF" },
		/* 178 */ { "x" : -729.7221871172956, "y" : -97.22057787505099, "trait" : "line", "color" : "FFFFFF" },
		/* 179 */ { "x" : -732.2709639686243, "y" : 86.13311079368516, "trait" : "line", "color" : "FFFFFF" },
		/* 180 */ { "x" : -715, "y" : 45.96496371697479, "trait" : "line", "color" : "CF0000" },
		/* 181 */ { "x" : -715, "y" : 25.340589543282263, "trait" : "line", "color" : "CF0000" },
		/* 182 */ { "x" : -715, "y" : 0.007812499999992895, "trait" : "line", "color" : "CF0000" },
		/* 183 */ { "x" : -715, "y" : -21.992187500000014, "trait" : "line", "color" : "CF0000" },
		/* 184 */ { "x" : -715, "y" : 85.99063504602832, "trait" : "line", "color" : "CF0000" },
		/* 185 */ { "x" : -715, "y" : 63.609927847103336, "trait" : "line", "color" : "CF0000" },
		/* 186 */ { "x" : -715, "y" : -75.99218750000003, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "trait" : "line", "color" : "CF0000" },
		/* 187 */ { "x" : -715, "y" : -100.07287845559074, "trait" : "line", "color" : "CF0000" },
		/* 188 */ { "x" : -715, "y" : -40.992187500000014, "trait" : "line", "color" : "CF0000" },
		/* 189 */ { "x" : -715, "y" : -55.992187500000014, "trait" : "line", "color" : "CF0000" },
		
		/* 190 */ { "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["red" ], "x" : -714, "y" : 214.00781250000003, "vis" : false, "curve" : 0 },
		/* 191 */ { "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["red" ], "x" : -715, "y" : -225.99218750000006, "vis" : false, "curve" : 0 },
		
		/* 192 */ { "x" : -715, "y" : 315, "trait" : "ballArea", "vis" : true, "color" : "ffffff", "curve" : 0, "bCoef" : 1 },
		/* 193 */ { "x" : 592, "y" : 315, "trait" : "ballArea", "vis" : true, "color" : "ffffff", "curve" : 0, "bCoef" : 1 },
		/* 194 */ { "x" : -715, "y" : -325, "trait" : "ballArea", "color" : "ffffff", "vis" : true, "curve" : 0, "bCoef" : 1 },
		/* 195 */ { "x" : 592, "y" : -325, "trait" : "ballArea", "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 1 },
		
		/* 196 */ { "x" : -61, "y" : 350, "trait" : "line", "color" : "EF7E29" },
		/* 197 */ { "x" : -61, "y" : -357, "trait" : "line", "color" : "EF7E29" }

	],

	"segments" : [
		{ "v0" : 0, "v1" : 1, "vis" : false, "bCoef" : 0, "cMask" : ["red" ], "x" : -1300, "curve" : 259.83403647248304, "cGroup" : ["blueKO","redKO" ] },
		{ "v0" : 2, "v1" : 3, "vis" : false, "bCoef" : 0, "cMask" : ["red" ], "y" : -150 },
		{ "v0" : 4, "v1" : 5, "vis" : false, "bCoef" : 0, "cMask" : ["red" ], "y" : 150, "curve" : 0 },
		{ "v0" : 7, "v1" : 8, "vis" : false, "bCoef" : 1000000, "cMask" : ["red" ], "x" : 1410 },
		
		{ "v0" : 10, "v1" : 11, "curve" : 216, "trait" : "powerboost", "bCoef" : -2.2, "vis" : false, "cMask" : ["ball" ], "pos" : [955,0 ], "radius" : 10 },
		
		{ "v0" : 12, "v1" : 13, "curve" : 0, "vis" : false, "color" : "C7E6BD", "bCoef" : 0, "cMask" : ["red" ], "cGroup" : ["redKO" ], "x" : 1134 },
		{ "vis" : false, "bCoef" : 0, "cMask" : ["red" ], "v0" : 14, "v1" : 15 },
		{ "vis" : false, "bCoef" : 0, "cMask" : ["red" ], "v0" : 15, "v1" : 16, "y" : 18 },
		{ "vis" : false, "bCoef" : 0, "cMask" : ["red" ], "v0" : 17, "v1" : 18, "y" : -18 },
		{ "vis" : false, "bCoef" : 0, "cMask" : ["red" ], "v0" : 17, "v1" : 6 },
		{ "vis" : false, "bCoef" : -2.4, "cMask" : ["red" ], "v0" : 19, "v1" : 20, "x" : 1233.0188554822 },
		{ "curve" : -79.41835780463073, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "v0" : 21, "v1" : 22 },
		{ "v0" : 23, "v1" : 24, "curve" : 0, "vis" : false, "color" : "C7E6BD", "bCoef" : 0, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "x" : 1134, "radius" : 15, "pos" : [67,0 ] },
		
		{ "v0" : 27, "v1" : 28, "curve" : 0, "vis" : true, "color" : "FFFFFF", "trait" : "line" },
		
		{ "v0" : 36, "v1" : 37, "curve" : 0, "vis" : true, "color" : "FFFFFF", "cMask" : ["ball" ], "trait" : "ballArea", "bCoef" : 1 },
		{ "v0" : 38, "v1" : 39, "vis" : true, "color" : "FFFFFF", "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "bCoef" : 1 },
		
		{ "v0" : 40, "v1" : 41, "curve" : 85, "vis" : true, "color" : "2CAAFF", "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ] },
		{ "v0" : 42, "v1" : 43, "curve" : -85, "vis" : true, "color" : "2CAAFF", "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ] },
		{ "v0" : 41, "v1" : 43, "curve" : 8, "vis" : true, "color" : "2CAAFF", "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ] },
		
		{ "v0" : 26, "v1" : 44, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 48, "v1" : 45, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 49, "v1" : 62, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 51, "v1" : 54, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 55, "v1" : 60, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 61, "v1" : 52, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 53, "v1" : 63, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 59, "v1" : 57, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 58, "v1" : 56, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 50, "v1" : 64, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 65, "v1" : 66, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 60, "v1" : 60, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 67, "v1" : 68, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 69, "v1" : 70, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 71, "v1" : 72, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 73, "v1" : 74, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 75, "v1" : 76, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 77, "v1" : 78, "curve" : 0, "vis" : true, "color" : "FFFFFF", "trait" : "line" },
		
		{ "v0" : 80, "v1" : 81, "color" : "FFFFFF", "trait" : "goalNet", "cMask" : ["red","ball" ] },
		{ "v0" : 81, "v1" : 82, "curve" : 0, "color" : "FFFFFF", "trait" : "goalNet", "cMask" : ["blue" ], "bCoef" : 0 },
		{ "v0" : 82, "v1" : 83, "color" : "FFFFFF", "trait" : "goalNet", "cMask" : ["red","ball" ] },
		
		{ "v0" : 86, "v1" : 85, "curve" : 0, "vis" : true, "color" : "FFFFFF", "trait" : "line" },
		{ "v0" : 87, "v1" : 89, "curve" : 0, "vis" : true, "color" : "FFFFFF", "trait" : "line" },
		{ "v0" : 88, "v1" : 90, "curve" : 0, "vis" : true, "color" : "FFFFFF", "trait" : "line" },
		{ "v0" : 91, "v1" : 92, "curve" : 0, "vis" : true, "color" : "FFFFFF", "trait" : "line" },
		{ "v0" : 93, "v1" : 94, "curve" : 0, "vis" : true, "color" : "FFFFFF", "trait" : "line" },
		{ "v0" : 95, "v1" : 96, "curve" : 0, "vis" : true, "color" : "FFFFFF", "trait" : "line" },
		{ "v0" : 97, "v1" : 98, "curve" : 0, "vis" : true, "color" : "FFFFFF", "trait" : "line" },
		{ "v0" : 99, "v1" : 100, "curve" : 0, "vis" : true, "color" : "CF0000", "trait" : "line" },
		{ "v0" : 101, "v1" : 102, "curve" : 0, "vis" : true, "color" : "CF0000", "trait" : "line" },
		{ "v0" : 103, "v1" : 104, "curve" : 0, "vis" : true, "color" : "CF0000", "trait" : "line" },
		{ "v0" : 105, "v1" : 106, "curve" : 0, "vis" : true, "color" : "CF0000", "trait" : "line" },
		{ "v0" : 107, "v1" : 108, "curve" : 0, "vis" : true, "color" : "CF0000", "trait" : "line" },
		{ "vis" : true, "color" : "EF7E29", "trait" : "line", "v0" : 112, "v1" : 113, "curve" : 180 },
		{ "vis" : true, "color" : "EF7E29", "trait" : "line", "v0" : 113, "v1" : 112, "curve" : 184.01604679055436 },
		
		{ "vis" : false, "bCoef" : 0, "cMask" : ["red" ], "v0" : 18, "v1" : 82, "x" : 1180 },
		{ "vis" : false, "bCoef" : 0, "cMask" : ["red" ], "v0" : 16, "v1" : 114, "x" : 1180 },
		
		{ "v0" : 117, "v1" : 118, "curve" : 0, "vis" : true, "color" : "FFFFFF", "trait" : "line" },
		
		{ "v0" : 126, "v1" : 127, "curve" : 0, "vis" : true, "color" : "FFFFFF", "cMask" : ["ball" ], "trait" : "ballArea", "bCoef" : 1 },
		{ "v0" : 128, "v1" : 129, "vis" : true, "color" : "FFFFFF", "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "bCoef" : 1 },
		
		{ "v0" : 130, "v1" : 131, "curve" : 85, "vis" : true, "color" : "2CAAFF", "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ] },
		{ "v0" : 132, "v1" : 133, "curve" : -85, "vis" : true, "color" : "2CAAFF", "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ] },
		{ "v0" : 131, "v1" : 133, "curve" : 8, "vis" : true, "color" : "2CAAFF", "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ] },
		
		{ "v0" : 116, "v1" : 134, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 137, "v1" : 135, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 138, "v1" : 151, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 140, "v1" : 143, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 144, "v1" : 149, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 150, "v1" : 141, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 142, "v1" : 152, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 148, "v1" : 146, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 147, "v1" : 145, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 139, "v1" : 153, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 154, "v1" : 155, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 149, "v1" : 149, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 156, "v1" : 157, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 158, "v1" : 159, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 160, "v1" : 161, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 162, "v1" : 163, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 164, "v1" : 165, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "line" },
		{ "v0" : 166, "v1" : 167, "curve" : 0, "vis" : true, "color" : "FFFFFF", "trait" : "line" },
		
		{ "v0" : 169, "v1" : 170, "color" : "FFFFFF", "trait" : "goalNet", "cMask" : ["red","ball" ] },
		{ "v0" : 170, "v1" : 171, "curve" : 0, "color" : "FFFFFF", "trait" : "goalNet", "cMask" : ["blue" ], "bCoef" : 0 },
		{ "v0" : 171, "v1" : 172, "color" : "FFFFFF", "trait" : "goalNet", "cMask" : ["red","ball" ] },
		
		{ "v0" : 175, "v1" : 174, "curve" : 0, "vis" : true, "color" : "FFFFFF", "trait" : "line" },
		{ "v0" : 176, "v1" : 178, "curve" : 0, "vis" : true, "color" : "FFFFFF", "trait" : "line" },
		{ "v0" : 177, "v1" : 179, "curve" : 0, "vis" : true, "color" : "FFFFFF", "trait" : "line" },
		{ "v0" : 180, "v1" : 181, "curve" : 0, "vis" : true, "color" : "CF0000", "trait" : "line" },
		{ "v0" : 182, "v1" : 183, "curve" : 0, "vis" : true, "color" : "CF0000", "trait" : "line" },
		{ "v0" : 184, "v1" : 185, "curve" : 0, "vis" : true, "color" : "CF0000", "trait" : "line" },
		{ "v0" : 186, "v1" : 187, "curve" : 0, "vis" : true, "color" : "CF0000", "trait" : "line" },
		{ "v0" : 188, "v1" : 189, "curve" : 0, "vis" : true, "color" : "CF0000", "trait" : "line" },
		
		{ "v0" : 193, "v1" : 192, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : 290 },
		{ "v0" : 194, "v1" : 195, "vis" : true, "color" : "ffffff", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : -320, "curve" : 0.09261129897399809 },
		
		{ "v0" : 196, "v1" : 197, "color" : "EF7E29", "trait" : "line", "x" : 840 }

	],

	"goals" : [
		{ "p0" : [592.1393591516376,-96.47239042901694 ], "p1" : [308.5412460785576,8.46728888038227 ], "team" : "blue" },
		{ "p0" : [596.0888745458144,91.95874017803774 ], "p1" : [298.51678185229196,-23.848942732672967 ], "team" : "blue" },
		{ "p0" : [602,-97.986883372199 ], "p1" : [602,92.011511591401 ], "team" : "red" },
		{ "p0" : [-725,87.99469587219902 ], "p1" : [-725,-102.00369909140105 ], "team" : "red" }

	],

	"discs" : [
		{ "radius" : 5.352099039641226, "pos" : [592,-95.9828225460283 ], "color" : "FFFFFF", "cMask" : ["ball","blue","red" ], "trait" : "goalPost", "vis" : false },
		{ "radius" : 5.352099039641226, "pos" : [592,87.33920484545074 ], "color" : "FFFFFF", "bCoef" : 2, "cMask" : ["ball","blue","red" ], "trait" : "goalPost", "vis" : false },
		{ "radius" : 1.3, "invMass" : 0, "pos" : [622,-96 ], "color" : "000003", "cMask" : ["ball" ], "damping" : 0, "trait" : "goalPost", "bCoef" : 0 },
		{ "radius" : 1.3, "invMass" : 0, "pos" : [623,87 ], "color" : "000004", "cMask" : ["ball" ], "damping" : 0, "trait" : "goalPost", "bCoef" : 0 },
		
		{ "radius" : 4, "invMass" : 1.5, "pos" : [630,-86 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [633,-70 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [636,-56 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [635,-39 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [636,-22 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [635,-8 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [635,11 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [635,32 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [635,47 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [634,63 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [632,79 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		
		{ "radius" : 5.352099039641226, "pos" : [-715,85.99063504602832 ], "color" : "FFFFFF", "cMask" : ["ball","blue","red" ], "trait" : "goalPost", "vis" : false },
		{ "radius" : 5.352099039641226, "pos" : [-715,-97.33139234545078 ], "color" : "FFFFFF", "bCoef" : 2, "cMask" : ["ball","blue","red" ], "trait" : "goalPost", "vis" : false },
		{ "radius" : 1.3, "invMass" : 0, "pos" : [-745,86.00781250000001 ], "color" : "000003", "cMask" : ["ball" ], "damping" : 0, "trait" : "goalPost", "bCoef" : 0 },
		{ "radius" : 1.3, "invMass" : 0, "pos" : [-746,-96.99218750000003 ], "color" : "000004", "cMask" : ["ball" ], "damping" : 0, "trait" : "goalPost", "bCoef" : 0 },
		
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-753,76.0078125 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-756,60.0078125 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-759,46.0078125 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-758,29.0078125 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-759,12.0078125 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-758,-1.992187500000007 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-758,-20.992187500000014 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-758,-41.992187500000014 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-758,-56.992187500000014 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-757,-72.99218750000003 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-755,-88.99218750000003 ], "color" : "FFFFFF", "cMask" : ["ball" ], "damping" : 0.96 }

	],

	"joints" : [
		{ "d0" : 3, "d1" : 5, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 5, "d1" : 6, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 6, "d1" : 7, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 7, "d1" : 8, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 8, "d1" : 9, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 9, "d1" : 10, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 10, "d1" : 11, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 11, "d1" : 12, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 12, "d1" : 13, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 13, "d1" : 14, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 14, "d1" : 15, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 15, "d1" : 4, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 18, "d1" : 20, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 20, "d1" : 21, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 21, "d1" : 22, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 22, "d1" : 23, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 23, "d1" : 24, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 24, "d1" : 25, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 25, "d1" : 26, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 26, "d1" : 27, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 27, "d1" : 28, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 28, "d1" : 29, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 29, "d1" : 30, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 30, "d1" : 19, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" }
	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -328, "bCoef" : 0, "trait" : "ballArea" },
		{ "normal" : [0,-1 ], "dist" : -320, "bCoef" : 0, "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -368, "bCoef" : 0 },
		{ "normal" : [0,-1 ], "dist" : -355, "bCoef" : 0 },
		{ "normal" : [1,0 ], "dist" : -1767, "bCoef" : 0, "cMask" : ["ball" ] },
		{ "normal" : [-1,0 ], "dist" : -653, "bCoef" : 0, "cMask" : ["ball" ] },
		{ "normal" : [1,0 ], "dist" : -185, "bCoef" : 0 },
		{ "normal" : [-1,0 ], "dist" : -902, "bCoef" : 0 }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 0, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 5, "invMass" : 0, "bCoef" : 2 },
		"stanchion" : { "radius" : 3, "invMass" : 0, "bCoef" : 3, "cMask" : ["none" ] },
		"cornerflag" : { "radius" : 3, "invMass" : 0, "bCoef" : 0.5, "color" : "FFFF00", "cGroup" : [ ] },
		"reargoalNetleft" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "curve" : 10, "color" : "C7E6BD" },
		"reargoalNetright" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "curve" : -10, "color" : "C7E6BD" },
		"sidegoalNet" : { "vis" : true, "bCoef" : 1, "cMask" : ["ball","red","blue" ], "color" : "C7E6BD" },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] },
		"line" : { "vis" : true, "cMask" : [ ], "color" : "C7E6BD" },
		"tunnel" : { "vis" : true, "cMask" : ["red","blue" ], "color" : "000000" },
		"advertising" : { "vis" : true, "cMask" : ["red","blue" ], "color" : "333333" },
		"teambench" : { "vis" : true, "cMask" : [ ], "color" : "000000" },
		"manager" : { "radius" : 15, "vis" : true, "cMask" : ["red","blue" ], "invMass" : 0, "color" : "333333" },
		"physio" : { "radius" : 15, "vis" : true, "cMask" : ["red","blue" ], "invMass" : 0, "color" : "666666" },
		"redsubs" : { "radius" : 15, "vis" : true, "cMask" : ["red","blue" ], "invMass" : 0, "color" : "E56E56" },
		"bluesubs" : { "radius" : 15, "vis" : true, "cMask" : ["red","blue" ], "invMass" : 0, "color" : "5689E5" }

	}
}`;

var Futsalx4=`
{

	"name" : "Escreva !help para mais informações",

	"width" : 800,

	"height" : 350,

	"spawnDistance" : 350,

	"bg" : { "type" : "hockey", "width" : 700, "height" : 320, "kickOffRadius" : 100, "cornerRadius" : 0 },

	"vertexes" : [
		/* 0 */ { "x" : 701, "y" : 320, "trait" : "ballArea" },
		/* 1 */ { "x" : 698, "y" : -317, "trait" : "ballArea" },
		
		/* 2 */ { "x" : 0, "y" : 350, "trait" : "kickOffBarrier" },
		/* 3 */ { "x" : 0, "y" : 100, "bCoef" : 0.15, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 180 },
		/* 4 */ { "x" : 0, "y" : -100, "bCoef" : 0.15, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 180 },
		/* 5 */ { "x" : 0, "y" : -349, "trait" : "kickOffBarrier" },
		
		/* 6 */ { "x" : -701, "y" : -80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ], "p0" : [-707.25,0 ] },
		/* 7 */ { "x" : -740, "y" : -80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ], "p0" : [-707.25,0 ] },
		/* 8 */ { "x" : -740, "y" : 80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ], "p0" : [-707.25,0 ] },
		/* 9 */ { "x" : -701, "y" : 80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ], "p0" : [-707.25,0 ] },
		/* 10 */ { "x" : 699, "y" : -80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,-80 ] },
		/* 11 */ { "x" : 740, "y" : -80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,-80 ] },
		/* 12 */ { "x" : 740, "y" : 80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,80 ] },
		/* 13 */ { "x" : 699, "y" : 80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,80 ] },
		
		/* 14 */ { "x" : -700, "y" : 80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [-700,80 ], "p0" : [-707.25,0 ] },
		/* 15 */ { "x" : -700, "y" : 321, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 16 */ { "x" : -700, "y" : -80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [-700,-80 ], "p0" : [-707.25,0 ] },
		/* 17 */ { "x" : -700, "y" : -319, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 18 */ { "x" : -700, "y" : 320, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 19 */ { "x" : 701, "y" : 320, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 20 */ { "x" : 700, "y" : 80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "pos" : [700,80 ] },
		/* 21 */ { "x" : 700, "y" : 320, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 22 */ { "x" : 700, "y" : -317, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 23 */ { "x" : 700, "y" : -80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [700,-80 ] },
		/* 24 */ { "x" : 698, "y" : -317, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 25 */ { "x" : 698, "y" : -317, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 26 */ { "x" : -701, "y" : -320, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		/* 27 */ { "x" : 698, "y" : -320, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		
		/* 28 */ { "x" : 0, "y" : -319, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 29 */ { "x" : 0, "y" : -100, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 30 */ { "x" : 0, "y" : 100, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 31 */ { "x" : 0, "y" : 320, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 32 */ { "x" : 0, "y" : -100, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "F8F8F8" },
		/* 33 */ { "x" : 0, "y" : 100, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "F8F8F8" },
		/* 34 */ { "x" : 0, "y" : 100, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : -180 },
		/* 35 */ { "x" : 0, "y" : -100, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : -180 },
		/* 36 */ { "x" : 0, "y" : 100, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 0 },
		/* 37 */ { "x" : 0, "y" : -100, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 0 },
		
		/* 38 */ { "x" : -707.5, "y" : 80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "pos" : [-700,80 ], "p0" : [-707.25,0 ] },
		/* 39 */ { "x" : -707.5, "y" : 321, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 40 */ { "x" : -707.5, "y" : -320, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 41 */ { "x" : -707.5, "y" : -81, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "pos" : [-700,-80 ], "p0" : [-707.25,0 ] },
		/* 42 */ { "x" : 707.5, "y" : -319, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 43 */ { "x" : 707.5, "y" : -82, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "pos" : [700,-80 ] },
		/* 44 */ { "x" : 707.5, "y" : 81, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "pos" : [700,80 ] },
		/* 45 */ { "x" : 707.5, "y" : 321, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		
		/* 46 */ { "x" : 0, "y" : -100, "bCoef" : 0.1, "trait" : "line" },
		/* 47 */ { "x" : 0, "y" : 100, "bCoef" : 0.1, "trait" : "line" },
		/* 48 */ { "x" : -700, "y" : -80, "bCoef" : 0.1, "trait" : "line", "p0" : [-707.25,0 ] },
		/* 49 */ { "x" : -700, "y" : 80, "bCoef" : 0.1, "trait" : "line", "p0" : [-707.25,0 ] },
		/* 50 */ { "x" : 700, "y" : -80, "bCoef" : 0.1, "trait" : "line" },
		/* 51 */ { "x" : 700, "y" : 80, "bCoef" : 0.1, "trait" : "line" },
		/* 52 */ { "x" : -700, "y" : 270, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 },
		/* 53 */ { "x" : -470, "y" : 65, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },
		/* 54 */ { "x" : -700, "y" : 307, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 55 */ { "x" : -686, "y" : 320, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 56 */ { "x" : -700, "y" : -270, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 },
		/* 57 */ { "x" : -470, "y" : -75, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },
		/* 58 */ { "x" : -700, "y" : -305, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 59 */ { "x" : -687, "y" : -320, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 60 */ { "x" : 700, "y" : -303, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 61 */ { "x" : 684, "y" : -320, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 62 */ { "x" : 700, "y" : 306, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 63 */ { "x" : 687, "y" : 320, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 64 */ { "x" : 700, "y" : 270, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 },
		/* 65 */ { "x" : 470, "y" : 66, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 },
		/* 66 */ { "x" : 700, "y" : -270, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 },
		/* 67 */ { "x" : 470, "y" : -74, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 },
		/* 68 */ { "x" : 470, "y" : 66, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },
		/* 69 */ { "x" : 470, "y" : -74, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },
		/* 70 */ { "x" : -414, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 71 */ { "x" : -414, "y" : -5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 72 */ { "x" : -414, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 73 */ { "x" : -414, "y" : -7, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 74 */ { "x" : -414, "y" : -6, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 75 */ { "x" : -414, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 76 */ { "x" : -414, "y" : -7.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 77 */ { "x" : -414, "y" : -0.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 78 */ { "x" : 398, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 79 */ { "x" : 398, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 80 */ { "x" : 398, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 81 */ { "x" : 398, "y" : -5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 82 */ { "x" : 398, "y" : -4, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 83 */ { "x" : 398, "y" : 0, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 84 */ { "x" : 398, "y" : -5.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 85 */ { "x" : 398, "y" : 1.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 86 */ { "x" : -316.5, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 87 */ { "x" : -316.5, "y" : -5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 88 */ { "x" : -316.5, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 89 */ { "x" : -316.5, "y" : -7, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 90 */ { "x" : -316.5, "y" : -6, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 91 */ { "x" : -316.5, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 92 */ { "x" : -316.5, "y" : -7.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 93 */ { "x" : -316.5, "y" : -0.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 94 */ { "x" : 300.5, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 95 */ { "x" : 300.5, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 96 */ { "x" : 300.5, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 97 */ { "x" : 300.5, "y" : -5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 98 */ { "x" : 300.5, "y" : -4, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 99 */ { "x" : 300.5, "y" : 0, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 100 */ { "x" : 300.5, "y" : -5.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 101 */ { "x" : 300.5, "y" : 1.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 102 */ { "x" : -246, "y" : 305, "bCoef" : 0.1, "trait" : "line" },
		/* 103 */ { "x" : -246, "y" : 335, "bCoef" : 0.1, "trait" : "line" },
		/* 104 */ { "x" : -126, "y" : 305, "bCoef" : 0.1, "trait" : "line" },
		/* 105 */ { "x" : -126, "y" : 335, "bCoef" : 0.1, "trait" : "line" },
		/* 106 */ { "x" : 246, "y" : 305, "bCoef" : 0.1, "trait" : "line" },
		/* 107 */ { "x" : 246, "y" : 335, "bCoef" : 0.1, "trait" : "line" },
		/* 108 */ { "x" : 126, "y" : 305, "bCoef" : 0.1, "trait" : "line" },
		/* 109 */ { "x" : 126, "y" : 335, "bCoef" : 0.1, "trait" : "line" },
		/* 110 */ { "x" : -387, "y" : 320, "bCoef" : 0.1, "trait" : "line" },
		/* 111 */ { "x" : -387, "y" : 337, "bCoef" : 0.1, "trait" : "line" },
		/* 112 */ { "x" : -706, "y" : 123, "bCoef" : 0.1, "trait" : "line", "p0" : [-707.25,0 ] },
		/* 113 */ { "x" : -726, "y" : 123, "bCoef" : 0.1, "trait" : "line", "p0" : [-707.25,0 ] },
		/* 114 */ { "x" : 706, "y" : 123, "bCoef" : 0.1, "trait" : "line" },
		/* 115 */ { "x" : 724, "y" : 123, "bCoef" : 0.1, "trait" : "line" },
		/* 116 */ { "x" : -706, "y" : -123, "bCoef" : 0.1, "trait" : "line", "p0" : [-707.25,0 ] },
		/* 117 */ { "x" : -726, "y" : -123, "bCoef" : 0.1, "trait" : "line", "p0" : [-707.25,0 ] },
		/* 118 */ { "x" : 706, "y" : -123, "bCoef" : 0.1, "trait" : "line" },
		/* 119 */ { "x" : 724, "y" : -123, "bCoef" : 0.1, "trait" : "line" },
		/* 120 */ { "x" : -380, "y" : -320, "bCoef" : 0.1, "trait" : "line" },
		/* 121 */ { "x" : -380, "y" : -337, "bCoef" : 0.1, "trait" : "line" },
		/* 122 */ { "x" : 380, "y" : 320, "bCoef" : 0.1, "trait" : "line" },
		/* 123 */ { "x" : 380, "y" : 337, "bCoef" : 0.1, "trait" : "line" },
		/* 124 */ { "x" : 380, "y" : -320, "bCoef" : 0.1, "trait" : "line" },
		/* 125 */ { "x" : 380, "y" : -337, "bCoef" : 0.1, "trait" : "line" },
		
		/* 126 */ { "x" : 703, "y" : -319, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "vis" : false, "curve" : 0 },
		/* 127 */ { "x" : 703, "y" : -82, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [700,-80 ], "vis" : false, "curve" : 0 },
		/* 128 */ { "x" : 703, "y" : 81, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "pos" : [700,80 ], "vis" : false, "curve" : 0 },
		/* 129 */ { "x" : 703, "y" : 321, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 130 */ { "x" : -703, "y" : 78, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [-700,80 ], "vis" : false, "p0" : [-707.25,0 ] },
		/* 131 */ { "x" : -703, "y" : 319, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "vis" : false },
		/* 132 */ { "x" : -703, "y" : -82, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [-700,-80 ], "vis" : false, "p0" : [-707.25,0 ] },
		/* 133 */ { "x" : -703, "y" : -321, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "vis" : false }

	],

	"segments" : [
		{ "v0" : 6, "v1" : 7, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [-700,-80 ], "y" : -80, "p0" : [-707.25,0 ] },
		{ "v0" : 7, "v1" : 8, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "x" : -740, "p0" : [-707.25,0 ] },
		{ "v0" : 8, "v1" : 9, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [-700,80 ], "y" : 80, "p0" : [-707.25,0 ] },
		{ "v0" : 10, "v1" : 11, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [700,-80 ], "y" : -80 },
		{ "v0" : 11, "v1" : 12, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "x" : 740 },
		{ "v0" : 12, "v1" : 13, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [700,80 ], "y" : 80 },
		
		{ "v0" : 2, "v1" : 3, "trait" : "kickOffBarrier" },
		{ "v0" : 3, "v1" : 4, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.15, "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 3, "v1" : 4, "curve" : -180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.15, "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 4, "v1" : 5, "trait" : "kickOffBarrier" },
		
		{ "v0" : 14, "v1" : 15, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -700 },
		{ "v0" : 16, "v1" : 17, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -700 },
		{ "v0" : 18, "v1" : 19, "vis" : true, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : 320 },
		{ "v0" : 20, "v1" : 21, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 700 },
		{ "v0" : 22, "v1" : 23, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 700 },
		{ "v0" : 24, "v1" : 25, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550, "y" : -240 },
		{ "v0" : 26, "v1" : 27, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : -320 },
		
		{ "v0" : 28, "v1" : 29, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 30, "v1" : 31, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		
		{ "v0" : 38, "v1" : 39, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -707.5 },
		{ "v0" : 40, "v1" : 41, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -707.5 },
		{ "v0" : 42, "v1" : 43, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 707.5 },
		{ "v0" : 44, "v1" : 45, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 707.5 },
		
		{ "v0" : 46, "v1" : 47, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 0 },
		{ "v0" : 48, "v1" : 49, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -700, "p0" : [-707.25,0 ] },
		{ "v0" : 50, "v1" : 51, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 700 },
		{ "v0" : 52, "v1" : 53, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 55, "v1" : 54, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 56, "v1" : 57, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 53, "v1" : 57, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -470 },
		{ "v0" : 59, "v1" : 58, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 61, "v1" : 60, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 63, "v1" : 62, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 64, "v1" : 65, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 66, "v1" : 67, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 68, "v1" : 69, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 470 },
		{ "v0" : 71, "v1" : 70, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 70, "v1" : 71, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 73, "v1" : 72, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 72, "v1" : 73, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 75, "v1" : 74, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 74, "v1" : 75, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 77, "v1" : 76, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 76, "v1" : 77, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 79, "v1" : 78, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 78, "v1" : 79, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 81, "v1" : 80, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 80, "v1" : 81, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 83, "v1" : 82, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 82, "v1" : 83, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 85, "v1" : 84, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 84, "v1" : 85, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 87, "v1" : 86, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 86, "v1" : 87, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 89, "v1" : 88, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 88, "v1" : 89, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 91, "v1" : 90, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 90, "v1" : 91, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 93, "v1" : 92, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 92, "v1" : 93, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 95, "v1" : 94, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 94, "v1" : 95, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 97, "v1" : 96, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 96, "v1" : 97, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 99, "v1" : 98, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 98, "v1" : 99, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 101, "v1" : 100, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 100, "v1" : 101, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 102, "v1" : 103, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240 },
		{ "v0" : 104, "v1" : 105, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -120 },
		{ "v0" : 106, "v1" : 107, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 240 },
		{ "v0" : 108, "v1" : 109, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 120 },
		{ "v0" : 110, "v1" : 111, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 112, "v1" : 113, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123, "p0" : [-707.25,0 ] },
		{ "v0" : 114, "v1" : 115, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },
		{ "v0" : 116, "v1" : 117, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123, "p0" : [-707.25,0 ] },
		{ "v0" : 118, "v1" : 119, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 },
		{ "v0" : 120, "v1" : 121, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -380 },
		{ "v0" : 122, "v1" : 123, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 380 },
		{ "v0" : 124, "v1" : 125, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 380 },
		
		{ "v0" : 126, "v1" : 127, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 703, "curve" : 0 },
		{ "v0" : 128, "v1" : 129, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 703, "curve" : 0 },
		{ "v0" : 130, "v1" : 131, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -703 },
		{ "v0" : 132, "v1" : 133, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -703 }

	],

	"goals" : [
		{ "p0" : [-706.25,-75 ], "p1" : [-706.25,80 ], "team" : "red" },
		{ "p0" : [706.25,80 ], "p1" : [706.25,-80 ], "team" : "blue" }

	],

	"discs" : [
		{ "radius" : 5, "pos" : [-700,80 ], "color" : "6666CC", "trait" : "goalPost", "y" : 80, "p0" : [-707.25,0 ] },
		{ "radius" : 5, "pos" : [-700,-80 ], "color" : "6666CC", "trait" : "goalPost", "y" : -80, "x" : -560, "p0" : [-707.25,0 ] },
		{ "radius" : 5, "pos" : [700,80 ], "color" : "6666CC", "trait" : "goalPost", "y" : 80 },
		{ "radius" : 5, "pos" : [700,-80 ], "color" : "6666CC", "trait" : "goalPost", "y" : -80 },
		
		{ "radius" : 3, "invMass" : 0, "pos" : [-700,320 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [-700,-320 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [700,-320 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [700,320 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -320, "bCoef" : 1, "trait" : "ballArea", "vis" : false, "curve" : 0 },
		{ "normal" : [0,-1 ], "dist" : -320, "bCoef" : 1, "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -350, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -350, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -760, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -760, "bCoef" : 0.1 },
		
		{ "normal" : [1,0 ], "dist" : -760, "bCoef" : 0.1, "trait" : "ballArea", "vis" : false, "curve" : 0 },
		{ "normal" : [-1,0 ], "dist" : -760, "bCoef" : 0.1, "trait" : "ballArea", "vis" : false, "curve" : 0 }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] },
		"line" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] }

	},

	"playerPhysics" : {
		"bCoef" : 0,
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.083,
		"kickStrength" : 5

	},

	"ballPhysics" : {
		"radius" : 6.25,
		"bCoef" : 0.35,
		"invMass" : 1.5,
		"damping" : 0.99,
		"color" : "FFCC00"

	}
}`;

var PenalesFutsalRed=`
{

	"name" : "Escreva !help para mais informações",

	"width" : 1500,

	"height" : 1100,

	"spawnDistance" : 300,

	"redSpawnPoints" : [
		[ 65, -90
		],
		[ 65, -30
		],
		[ 65, 30
		],
		[ 65, 90
		]

	],

	"blueSpawnPoints" : [
		[ 1400, -90
		],
		[ 1400, -30
		],
		[ 1400, 30
		],
		[ 1400, 90
		]

	],

	"bg" : { "type" : "hockey", "width" : 1200, "height" : 600, "kickOffRadius" : 0, "cornerRadius" : 0, "color" : "253D97" },

	"playerPhysics" : {
		"bCoef" : 0.5,
		"invMass" : 0.5,
		"damping" : 0.96,
		"acceleration" : 0.12,
		"kickingAcceleration" : 0.07,
		"kickingDamping" : 0.96,
		"kickStrength" : 5.65

	},

	"ballPhysics" : {
		"pos" : [ 920, 0
		],
		"radius" : 6.25,
		"color" : "FFCC00"

	},

	"vertexes" : [
		/* 0 */ { "x" : -522.9395376326441, "y" : 735, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		
		/* 1 */ { "x" : 917, "y" : -6.25, "trait" : "powerboost", "bCoef" : -2.3, "vis" : false, "cMask" : ["ball" ], "pos" : [955,0 ], "radius" : 10, "curve" : 216, "_selected" : "segment" },
		/* 2 */ { "x" : 917, "y" : 6.25, "trait" : "powerboost", "bCoef" : -2.3, "vis" : false, "cMask" : ["ball" ], "pos" : [955,0 ], "radius" : 10, "curve" : 216, "_selected" : "segment" },
		
		/* 3 */ { "bCoef" : -2.4, "cMask" : ["blue" ], "x" : 1308.0188554822, "y" : 61.50390625 },
		/* 4 */ { "bCoef" : -2.4, "cMask" : ["blue" ], "x" : 1308.0188554822, "y" : -69.49609375 },
		/* 5 */ { "bCoef" : 0, "cMask" : ["red" ], "x" : 132, "y" : -621, "curve" : -77 },
		
		/* 6 */ { "x" : -1200, "y" : -600, "trait" : "ballArea" },
		
		/* 7 */ { "x" : -1200, "y" : -95, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		/* 8 */ { "x" : -1250, "y" : -95, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		/* 9 */ { "x" : -1250, "y" : 95, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball","red","blue" ], "radius" : 7 },
		/* 10 */ { "x" : -1200, "y" : 95, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		/* 11 */ { "x" : 1200, "y" : -95, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball","blue" ] },
		/* 12 */ { "x" : 1250, "y" : -95, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball","blue" ], "bCoef" : 0 },
		/* 13 */ { "x" : 1250, "y" : 95, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball","blue" ], "bCoef" : 0 },
		/* 14 */ { "x" : 1200, "y" : 95, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball","blue" ] },
		
		/* 15 */ { "x" : -1200, "y" : 95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 16 */ { "x" : -1200, "y" : 600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 17 */ { "x" : -1200, "y" : -95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 18 */ { "x" : -1200, "y" : -600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 19 */ { "x" : -1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 20 */ { "x" : 1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 21 */ { "x" : 1200, "y" : 95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 22 */ { "x" : 1200, "y" : 600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 23 */ { "x" : 1200, "y" : -600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 24 */ { "x" : 1200, "y" : -95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 25 */ { "x" : -1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		/* 26 */ { "x" : 1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		/* 27 */ { "x" : -1200, "y" : 95, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 28 */ { "x" : -1200, "y" : 600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 29 */ { "x" : -1200, "y" : -600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 30 */ { "x" : -1200, "y" : -95, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 31 */ { "x" : 1200, "y" : -600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 32 */ { "x" : 1200, "y" : -95, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 33 */ { "x" : 1200, "y" : 95, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 34 */ { "x" : 1200, "y" : 600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 35 */ { "x" : -1200, "y" : 600, "trait" : "ballArea" },
		/* 36 */ { "x" : -1200, "y" : -600, "trait" : "ballArea" },
		/* 37 */ { "x" : -1200, "y" : 95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "curve" : 0 },
		/* 38 */ { "x" : -1200, "y" : 600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "curve" : 0 },
		/* 39 */ { "x" : -1200, "y" : -95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "curve" : 0 },
		/* 40 */ { "x" : -1200, "y" : -600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "curve" : 0 },
		/* 41 */ { "x" : -1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 42 */ { "x" : 1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 43 */ { "x" : 1200, "y" : 95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 44 */ { "x" : 1200, "y" : 600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 45 */ { "x" : 1200, "y" : -600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 46 */ { "x" : 1200, "y" : -95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 47 */ { "x" : -1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 48 */ { "x" : 1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 49 */ { "x" : -1200, "y" : 600, "trait" : "ballArea" },
		/* 50 */ { "x" : -1200, "y" : -600, "trait" : "ballArea" },
		/* 51 */ { "x" : -1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 52 */ { "x" : 1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 53 */ { "x" : 1200, "y" : 95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 54 */ { "x" : 1200, "y" : 600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 55 */ { "x" : 1200, "y" : -600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 56 */ { "x" : 1200, "y" : -95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 57 */ { "x" : -1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 58 */ { "x" : 1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 59 */ { "x" : -1200, "y" : 600, "trait" : "ballArea" },
		/* 60 */ { "x" : -1200, "y" : -600, "trait" : "ballArea" },
		/* 61 */ { "x" : -1200, "y" : 95, "bCoef" : 2, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "curve" : 0 },
		/* 62 */ { "x" : -1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "curve" : 0 },
		/* 63 */ { "x" : -1200, "y" : -95, "bCoef" : 2, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "curve" : 0 },
		/* 64 */ { "x" : -1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "curve" : 0 },
		/* 65 */ { "x" : -1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		/* 66 */ { "x" : 1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		/* 67 */ { "x" : 1200, "y" : 95, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 68 */ { "x" : 1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 69 */ { "x" : 1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 70 */ { "x" : 1200, "y" : -95, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 71 */ { "x" : -1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 72 */ { "x" : 1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		
		/* 73 */ { "x" : 920, "y" : -148, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0 },
		/* 74 */ { "x" : 920, "y" : 146, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 44.33638217658901 },
		
		/* 75 */ { "x" : -1200, "y" : 95, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 76 */ { "x" : -1200, "y" : 600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 77 */ { "x" : -1200, "y" : 95, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 78 */ { "x" : -1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 79 */ { "x" : -1200, "y" : -600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 80 */ { "x" : -1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 81 */ { "x" : 1200, "y" : -95, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 82 */ { "x" : 1200, "y" : -95, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 83 */ { "x" : -1207, "y" : 95, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		/* 84 */ { "x" : -1207, "y" : 600, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		/* 85 */ { "x" : -1207, "y" : -600, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		/* 86 */ { "x" : -1207, "y" : -95, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		/* 87 */ { "x" : 1207, "y" : -600, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		/* 88 */ { "x" : 1207, "y" : -95, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		/* 89 */ { "x" : 1207, "y" : 95, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		/* 90 */ { "x" : 1207, "y" : 600, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		
		/* 91 */ { "x" : 920, "y" : 146, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -78.04299828129014 },
		/* 92 */ { "x" : 1200, "y" : 424, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -78.04299828129014 },
		/* 93 */ { "x" : 920, "y" : -148, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 78.04299828129014 },
		/* 94 */ { "x" : -1200, "y" : -95, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0, "color" : "ffffff" },
		/* 95 */ { "x" : -1200, "y" : 95, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0, "color" : "ffffff" },
		/* 96 */ { "x" : 1200, "y" : -95, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0, "color" : "ffffff" },
		/* 97 */ { "x" : 1200, "y" : 95, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0, "color" : "ffffff" },
		/* 98 */ { "x" : 0, "y" : -11, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 180 },
		/* 99 */ { "x" : 0, "y" : 11, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 180 },
		/* 100 */ { "x" : 0, "y" : -11, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -180 },
		/* 101 */ { "x" : 0, "y" : 11, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -180 },
		/* 102 */ { "x" : -525.1982581967213, "y" : 584, "bCoef" : 0.1, "trait" : "line" },
		/* 103 */ { "x" : -525.1982581967213, "y" : 616, "bCoef" : 0.1, "trait" : "line" },
		/* 104 */ { "x" : -267.4933401639344, "y" : 584, "bCoef" : 0.1, "trait" : "line" },
		/* 105 */ { "x" : -267.4933401639344, "y" : 616, "bCoef" : 0.1, "trait" : "line" },
		/* 106 */ { "x" : 505.62141393442624, "y" : 584, "bCoef" : 0.1, "trait" : "line" },
		/* 107 */ { "x" : 505.62141393442624, "y" : 616, "bCoef" : 0.1, "trait" : "line" },
		/* 108 */ { "x" : 247.91649590163934, "y" : 584, "bCoef" : 0.1, "trait" : "line" },
		/* 109 */ { "x" : 247.91649590163934, "y" : 616, "bCoef" : 0.1, "trait" : "line" },
		/* 110 */ { "x" : -828.0015368852459, "y" : 600, "bCoef" : 0.1, "trait" : "line" },
		/* 111 */ { "x" : -828.0015368852459, "y" : 616, "bCoef" : 0.1, "trait" : "line" },
		/* 112 */ { "x" : 1220.33349609375, "y" : 251.9681483400014, "bCoef" : 0.1, "trait" : "line" },
		/* 113 */ { "x" : 1201.33349609375, "y" : 251.9681483400014, "bCoef" : 0.1, "trait" : "line" },
		/* 114 */ { "x" : 1219.33349609375, "y" : -251.9681483400014, "bCoef" : 0.1, "trait" : "line" },
		/* 115 */ { "x" : 1200.33349609375, "y" : -251.9681483400014, "bCoef" : 0.1, "trait" : "line" },
		/* 116 */ { "x" : -841.1245088945966, "y" : -601, "bCoef" : 0.1, "trait" : "line" },
		/* 117 */ { "x" : -841.1245088945966, "y" : -617, "bCoef" : 0.1, "trait" : "line" },
		/* 118 */ { "x" : 808.4246926229508, "y" : 600, "bCoef" : 0.1, "trait" : "line" },
		/* 119 */ { "x" : 808.4246926229508, "y" : 616, "bCoef" : 0.1, "trait" : "line" },
		/* 120 */ { "x" : 837.7690984113394, "y" : -601, "bCoef" : 0.1, "trait" : "line" },
		/* 121 */ { "x" : 837.7690984113394, "y" : -617, "bCoef" : 0.1, "trait" : "line" },
		/* 122 */ { "x" : 920.1766668775302, "y" : 1.2940757844129678, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 123 */ { "x" : 920.1766668775302, "y" : -1.9306205718623346, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 124 */ { "x" : 920.1766668775302, "y" : 4.51877214068827, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 125 */ { "x" : 920.1766668775302, "y" : -5.155316928137637, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 126 */ { "x" : 920.1766668775302, "y" : -3.54296875, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 127 */ { "x" : 920.1766668775302, "y" : 2.9064239625506048, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "radius" : 6.4 },
		/* 128 */ { "x" : 920.1766668775302, "y" : -5.96149101720647, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 129 */ { "x" : 920.1766668775302, "y" : 5.324946229757089, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 130 */ { "x" : 608.9727195091092, "y" : 2.2940757844129678, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 131 */ { "x" : 608.9727195091092, "y" : -0.9306205718623346, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 132 */ { "x" : 608.9727195091092, "y" : 5.51877214068827, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 133 */ { "x" : 608.9727195091092, "y" : -4.155316928137637, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 134 */ { "x" : 608.9727195091092, "y" : -2.54296875, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 135 */ { "x" : 608.9727195091092, "y" : 3.9064239625506048, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 136 */ { "x" : 608.9727195091092, "y" : -4.96149101720647, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 137 */ { "x" : 608.9727195091092, "y" : 6.324946229757089, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 138 */ { "x" : -1220.0747488827305, "y" : -251.82895884262769, "bCoef" : 0.1, "trait" : "line" },
		/* 139 */ { "x" : -1201.0752587242073, "y" : -251.9681483400014, "bCoef" : 0.1, "trait" : "line" },
		/* 140 */ { "x" : -1218.9226063416277, "y" : 251.9681483400014, "bCoef" : 0.1, "trait" : "line" },
		/* 141 */ { "x" : -1199.9231161831044, "y" : 251.9681483400014, "bCoef" : 0.1, "trait" : "line" },
		/* 142 */ { "x" : -1199.4694375680187, "y" : 570.456511053482, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 143 */ { "x" : -1171.6369452864983, "y" : 598.2890033350025, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 144 */ { "x" : -1198.4694375680187, "y" : -569.6420271253103, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 145 */ { "x" : -1170.6369452864983, "y" : -597.4745194068307, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 146 */ { "x" : 1198.1516337208868, "y" : -571.0124590189979, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 147 */ { "x" : 1170.319141439366, "y" : -598.8449513005185, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 148 */ { "x" : 1199.1516337208868, "y" : 569.9997004222528, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 149 */ { "x" : 1171.319141439366, "y" : 597.8321927037732, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 150 */ { "x" : 1200, "y" : -424, "bCoef" : 0, "trait" : "line", "curve" : 78.04299828129014 },
		/* 151 */ { "x" : -800, "y" : 147, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0 },
		/* 152 */ { "x" : -800, "y" : -147, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 44.33638217658901 },
		/* 153 */ { "x" : -800, "y" : -147, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 44.33638217658901 },
		/* 154 */ { "x" : -1200, "y" : -424, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -38.52299398255091 },
		/* 155 */ { "x" : -800, "y" : 147, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 78.04299828129014 },
		/* 156 */ { "x" : -800, "y" : 147, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90 },
		/* 157 */ { "x" : -800.1940394442979, "y" : -2.3590474271793553, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 158 */ { "x" : -800.2144724538566, "y" : 0.8655841924472334, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 159 */ { "x" : -800.1736064347391, "y" : -5.5836790468059405, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 160 */ { "x" : -800.2349054634154, "y" : 4.090215812073822, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 161 */ { "x" : -800.2246889586361, "y" : 2.47790000226054, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 162 */ { "x" : -800.1838229395186, "y" : -3.9713632369926337, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 163 */ { "x" : -800.2400137158052, "y" : 4.896373716980474, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 164 */ { "x" : -800.1684981823495, "y" : -6.3898369517125815, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 165 */ { "x" : -608.993930546668, "y" : -1.1475001518364962, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 166 */ { "x" : -609.0143635562267, "y" : 2.077131467790089, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 167 */ { "x" : -608.9734975371092, "y" : -4.372131771463081, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 168 */ { "x" : -609.0347965657855, "y" : 5.301763087416674, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 169 */ { "x" : -609.0245800610062, "y" : 3.6894472776033993, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 170 */ { "x" : -608.9837140418886, "y" : -2.759815961649778, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 171 */ { "x" : -609.0399048181753, "y" : 6.107920992323329, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 172 */ { "x" : -608.9683892847195, "y" : -5.178289676369722, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 173 */ { "x" : -1200, "y" : 424, "bCoef" : 0, "trait" : "line", "curve" : 78.04299828129014 },
		/* 174 */ { "x" : 611.0222584506541, "y" : -288.4501960600154, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 175 */ { "x" : 610.7537074861809, "y" : -284.7949449013963, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 176 */ { "x" : 609.0222584506541, "y" : 296.5498039399846, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 177 */ { "x" : 608.7537074861809, "y" : 300.2050550986037, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 178 */ { "x" : -610.9777415493459, "y" : -292.4501960600154, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 179 */ { "x" : -611.2462925138191, "y" : -288.7949449013963, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 180 */ { "x" : -609.9777415493459, "y" : 294.5498039399846, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 181 */ { "x" : -610.2462925138191, "y" : 298.2050550986037, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		
		/* 182 */ { "x" : -85, "y" : -203, "bCoef" : 0, "cMask" : ["blue" ], "cGroup" : ["blueKO","redKO" ], "curve" : 235 },
		/* 183 */ { "x" : -88, "y" : 201, "bCoef" : 0, "cMask" : ["blue" ], "cGroup" : ["blueKO","redKO" ], "curve" : 235 },
		/* 184 */ { "x" : 1499, "y" : -241, "bCoef" : 0, "cMask" : ["blue" ], "dist" : -1400 },
		/* 185 */ { "x" : 1330, "y" : -240, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 186 */ { "x" : 1330, "y" : 240, "bCoef" : 0, "cMask" : ["blue" ], "curve" : 0 },
		/* 187 */ { "x" : 1499, "y" : 239, "bCoef" : 0, "cMask" : ["blue" ], "dist" : -1400, "curve" : 0 },
		
		/* 188 */ { "x" : 1330, "y" : -240, "trait" : "kickOffBarrier", "cMask" : ["blue" ] },
		
		/* 189 */ { "x" : 1182, "y" : 119.23596984067328, "bCoef" : 0, "cMask" : ["blue" ], "cGroup" : ["redKO" ], "vis" : false, "curve" : 0 },
		/* 190 */ { "x" : 1182, "y" : -120.76361382468701, "bCoef" : 0, "cMask" : ["blue" ], "cGroup" : ["redKO" ], "vis" : false, "curve" : 0 },
		/* 191 */ { "bCoef" : 0, "cMask" : ["blue" ], "x" : 1330, "y" : 240 },
		/* 192 */ { "bCoef" : 0, "cMask" : ["blue" ], "x" : 1330, "y" : 20 },
		/* 193 */ { "bCoef" : 0, "cMask" : ["blue" ], "x" : 1250, "y" : 20 },
		/* 194 */ { "bCoef" : 0, "cMask" : ["blue" ], "x" : 1330, "y" : -20 },
		/* 195 */ { "bCoef" : 0, "cMask" : ["blue" ], "x" : 1250, "y" : -20, "vis" : false },
		/* 196 */ { "bCoef" : 0, "cMask" : ["red" ], "x" : 694, "y" : 660, "curve" : -77 },
		/* 197 */ { "bCoef" : 0, "cMask" : ["red" ], "x" : 694, "y" : -660, "curve" : -77 },
		/* 198 */ { "x" : 1182, "y" : 119.23596984067328, "bCoef" : 0, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "vis" : false, "curve" : 0, "radius" : 15, "pos" : [67,0 ] },
		/* 199 */ { "x" : 1182, "y" : -120.76361382468701, "bCoef" : 0, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "vis" : false, "curve" : 0, "radius" : 15, "pos" : [67,0 ] },
		
		/* 200 */ { "bCoef" : 0.1, "trait" : "line", "x" : 0, "y" : -220, "vis" : true, "curve" : -180 },
		/* 201 */ { "bCoef" : 0.1, "trait" : "line", "x" : 0, "y" : 220, "vis" : true, "curve" : -180 },
		/* 202 */ { "bCoef" : 0.1, "trait" : "line", "x" : 0, "y" : 600, "curve" : 0 },
		/* 203 */ { "bCoef" : 0.1, "trait" : "line", "x" : 0, "y" : -220, "curve" : 0 },
		/* 204 */ { "bCoef" : 0.1, "trait" : "line", "x" : 0, "y" : -600, "curve" : 0 },
		
		/* 205 */ { "bCoef" : 0, "cMask" : ["blue" ], "x" : 1250, "y" : -95.24609375, "vis" : false },
		/* 206 */ { "x" : -87, "y" : -202, "bCoef" : 0, "cMask" : ["blue" ], "cGroup" : ["blueKO","redKO" ], "curve" : 235 },
		/* 207 */ { "x" : -87, "y" : 202, "bCoef" : 0, "cMask" : ["blue" ], "cGroup" : ["blueKO","redKO" ], "curve" : 235 },
		/* 208 */ { "x" : 1420, "y" : -98, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 209 */ { "x" : 1420, "y" : 142, "bCoef" : 0, "cMask" : ["blue" ] }

	],

	"segments" : [
		{ "v0" : 1, "v1" : 2, "curve" : 240.69576377250274, "trait" : "powerboost", "bCoef" : -2.3, "vis" : false, "cMask" : ["ball" ], "pos" : [955,0 ], "radius" : 10, "_selected" : true },
		
		{ "vis" : false, "bCoef" : -2.4, "cMask" : ["blue" ], "v0" : 3, "v1" : 4, "x" : 1233.0188554822 },
		
		{ "v0" : 7, "v1" : 8, "curve" : 0, "color" : "F8F8F8", "trait" : "goalNet" },
		{ "v0" : 9, "v1" : 10, "curve" : 0, "color" : "F8F8F8", "trait" : "goalNet" },
		{ "v0" : 11, "v1" : 12, "curve" : 0, "color" : "F8F8F8", "trait" : "goalNet", "cMask" : ["ball","blue" ] },
		{ "v0" : 13, "v1" : 14, "curve" : 0, "color" : "F8F8F8", "trait" : "goalNet", "cMask" : ["ball","blue" ] },
		
		{ "v0" : 15, "v1" : 16, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" },
		{ "v0" : 17, "v1" : 18, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -1200 },
		{ "v0" : 21, "v1" : 22, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		{ "v0" : 23, "v1" : 24, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		{ "v0" : 25, "v1" : 26, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "y" : -600 },
		{ "v0" : 27, "v1" : 28, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -700 },
		{ "v0" : 29, "v1" : 30, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -1200 },
		{ "v0" : 31, "v1" : 32, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		{ "v0" : 33, "v1" : 34, "curve" : 2.50208708167, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		{ "v0" : 37, "v1" : 38, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" },
		{ "v0" : 39, "v1" : 40, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -1200 },
		{ "v0" : 43, "v1" : 44, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		{ "v0" : 45, "v1" : 46, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		{ "v0" : 53, "v1" : 54, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		{ "v0" : 55, "v1" : 56, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		{ "v0" : 61, "v1" : 62, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 2, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		{ "v0" : 63, "v1" : 64, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 2, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "x" : -1200 },
		{ "v0" : 65, "v1" : 66, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "y" : 600 },
		{ "v0" : 67, "v1" : 68, "vis" : true, "color" : "F8F8F8", "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		{ "v0" : 69, "v1" : 70, "vis" : true, "color" : "F8F8F8", "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		
		{ "v0" : 73, "v1" : 74, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		
		{ "v0" : 83, "v1" : 84, "vis" : false, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "x" : -707 },
		{ "v0" : 85, "v1" : 86, "vis" : false, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "x" : -1207 },
		{ "v0" : 87, "v1" : 88, "vis" : false, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "x" : 1207 },
		{ "v0" : 89, "v1" : 90, "vis" : false, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "x" : 1207 },
		
		{ "v0" : 91, "v1" : 92, "curve" : -78.04299828129014, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 94, "v1" : 95, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 96, "v1" : 97, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 98, "v1" : 99, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 100, "v1" : 101, "curve" : -180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 102, "v1" : 103, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240 },
		{ "v0" : 104, "v1" : 105, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -120 },
		{ "v0" : 106, "v1" : 107, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 240 },
		{ "v0" : 108, "v1" : 109, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 120 },
		{ "v0" : 110, "v1" : 111, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 112, "v1" : 113, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 251.9681483400014 },
		{ "v0" : 114, "v1" : 115, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -251.9681483400014 },
		{ "v0" : 116, "v1" : 117, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 118, "v1" : 119, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		{ "v0" : 120, "v1" : 121, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		{ "v0" : 123, "v1" : 122, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 122, "v1" : 123, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 125, "v1" : 124, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 124, "v1" : 125, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 127, "v1" : 126, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 126, "v1" : 127, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 129, "v1" : 128, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 128, "v1" : 129, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 131, "v1" : 130, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 130, "v1" : 131, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 133, "v1" : 132, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 132, "v1" : 133, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 135, "v1" : 134, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 134, "v1" : 135, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 137, "v1" : 136, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 136, "v1" : 137, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 138, "v1" : 139, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },
		{ "v0" : 140, "v1" : 141, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 251.9681483400014 },
		{ "v0" : 143, "v1" : 142, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 145, "v1" : 144, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 147, "v1" : 146, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 149, "v1" : 148, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 93, "v1" : 150, "curve" : 78.04299828129014, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 151, "v1" : 152, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 153, "v1" : 154, "curve" : -78.04299828129014, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 158, "v1" : 157, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 157, "v1" : 158, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 160, "v1" : 159, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 159, "v1" : 160, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 162, "v1" : 161, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 161, "v1" : 162, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 164, "v1" : 163, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 163, "v1" : 164, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 166, "v1" : 165, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 165, "v1" : 166, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 168, "v1" : 167, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 167, "v1" : 168, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 170, "v1" : 169, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 169, "v1" : 170, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 172, "v1" : 171, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 171, "v1" : 172, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 155, "v1" : 173, "curve" : 78.04299828129014, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 174, "v1" : 175, "curve" : -197.38121949057748, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 175, "v1" : 174, "curve" : -213.29219661707097, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 176, "v1" : 177, "curve" : -197.38121949057748, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 177, "v1" : 176, "curve" : -213.29219661707097, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 178, "v1" : 179, "curve" : -197.38121949057748, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 179, "v1" : 178, "curve" : -213.29219661707097, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 180, "v1" : 181, "curve" : -197.38121949057748, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 181, "v1" : 180, "curve" : -213.29219661707097, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "trait" : "line", "v0" : 9, "v1" : 8 },
		{ "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "trait" : "line", "v0" : 13, "v1" : 12, "cMask" : ["ball" ] },
		
		{ "v0" : 182, "v1" : 183, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "x" : -1300, "curve" : 226.23422450028582, "cGroup" : ["blueKO","redKO" ] },
		{ "v0" : 184, "v1" : 185, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "y" : -240 },
		{ "v0" : 186, "v1" : 187, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "y" : 240, "curve" : 0 },
		{ "v0" : 189, "v1" : 190, "curve" : 0, "vis" : false, "color" : "C7E6BD", "bCoef" : 0, "cMask" : ["blue" ], "cGroup" : ["redKO" ], "x" : 1134 },
		{ "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "v0" : 191, "v1" : 192 },
		{ "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "v0" : 192, "v1" : 193, "y" : 20 },
		{ "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "v0" : 194, "v1" : 195, "y" : -20 },
		{ "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "v0" : 194, "v1" : 188 },
		{ "curve" : -76.40572705824569, "vis" : false, "bCoef" : 0, "cMask" : ["red" ], "v0" : 196, "v1" : 197 },
		{ "v0" : 198, "v1" : 199, "curve" : 0, "vis" : false, "color" : "C7E6BD", "bCoef" : 0, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "x" : 1134, "radius" : 15, "pos" : [67,0 ] },
		
		{ "vis" : true, "color" : "ffffff", "bCoef" : 0.1, "trait" : "line", "v0" : 200, "v1" : 201, "curve" : -180 },
		{ "curve" : -180, "vis" : true, "color" : "ffffff", "bCoef" : 0.1, "trait" : "line", "v0" : 201, "v1" : 200 },
		{ "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0.1, "trait" : "line", "v0" : 201, "v1" : 202 },
		{ "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0.1, "trait" : "line", "v0" : 203, "v1" : 204 },
		{ "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0.1, "trait" : "line", "v0" : 201, "v1" : 101 },
		{ "curve" : 0, "vis" : true, "color" : "ffffff", "trait" : "line", "v0" : 203, "v1" : 100 },
		
		{ "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["blue" ], "v0" : 195, "v1" : 205, "x" : 1250 },
		{ "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["blue" ], "v0" : 193, "v1" : 13 },
		{ "v0" : 206, "v1" : 207, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "x" : -1300, "curve" : 226.4219890816236, "cGroup" : ["blueKO","redKO" ] },
		{ "v0" : 208, "v1" : 209, "vis" : false, "bCoef" : 1000000, "cMask" : ["blue" ], "x" : 1410 },
		
		{ "curve" : 0, "vis" : true, "color" : "ffffff", "trait" : "line", "v0" : 101, "v1" : 100 }

	],

	"goals" : [
		{ "p0" : [-1207,95 ], "p1" : [-1207,-95 ], "team" : "red" },
		{ "p0" : [-1207,95 ], "p1" : [-1207,-95 ], "team" : "red" },
		{ "p0" : [-1207,95 ], "p1" : [-1207,-95 ], "team" : "red" },
		{ "p0" : [-1206.4,95 ], "p1" : [-1206.4,-95 ], "team" : "red" },
		{ "p0" : [1206.4,93 ], "p1" : [1206.4,-93 ], "team" : "blue" },
		{ "p0" : [1193.982468239122,-94.3365799256912 ], "p1" : [734.459005139397,48.17201616138806 ], "team" : "red" },
		{ "p0" : [1274.8853227728482,126.33301976242268 ], "p1" : [818.4082481676676,-25.65116842098992 ], "team" : "red" }

	],

	"discs" : [
		{ "radius" : 6, "pos" : [-1200,95 ], "color" : "FF0000", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [-1200,-95 ], "color" : "FF0000", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [1199,95 ], "color" : "0033FF", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [1199,-95 ], "color" : "0033FF", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [-1200,95 ], "color" : "FF0000", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [-1200,-95 ], "color" : "FF0000", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [1199,95 ], "color" : "0033FF", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [1199,-95 ], "color" : "0033FF", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [-1200,95 ], "color" : "FF0000", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [-1200,-95 ], "color" : "FF0000", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [1199,95 ], "color" : "0033FF", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [1199,-95 ], "color" : "0033FF", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [-1200,95 ], "color" : "6666CC", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [-1200,-95 ], "color" : "6666CC", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [1199,95 ], "color" : "6666CC", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [1199,-95 ], "color" : "6666CC", "trait" : "goalPost" },
		
		{ "radius" : 3, "invMass" : 0, "pos" : [-1200,600 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [-1200,-600 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [1200,-600 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [1200,600 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -600, "trait" : "ballArea", "vis" : false, "curve" : 0 },
		{ "normal" : [0,-1 ], "dist" : -600, "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -660, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -660, "bCoef" : 0.1 },
		
		{ "normal" : [0,1 ], "dist" : -600, "trait" : "ballArea", "vis" : false, "curve" : 0 },
		{ "normal" : [0,-1 ], "dist" : -600, "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -660, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -660, "bCoef" : 0.1 },
		
		{ "normal" : [0,1 ], "dist" : -600, "trait" : "ballArea", "vis" : false, "curve" : 0 },
		{ "normal" : [0,-1 ], "dist" : -600, "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -660, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -660, "bCoef" : 0.1 },
		
		{ "normal" : [0,1 ], "dist" : -600, "trait" : "ballArea", "vis" : false, "curve" : 0 },
		
		{ "normal" : [0,1 ], "dist" : -660, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -660, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -1250, "bCoef" : 0, "cMask" : ["ball" ] },
		{ "normal" : [1,0 ], "dist" : -87, "bCoef" : 0 },
		{ "normal" : [-1,0 ], "dist" : -1498, "bCoef" : 0 }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 0, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 5, "invMass" : 0, "bCoef" : 2 },
		"stanchion" : { "radius" : 3, "invMass" : 0, "bCoef" : 3, "cMask" : ["none" ] },
		"cornerflag" : { "radius" : 3, "invMass" : 0, "bCoef" : 0.5, "color" : "FFFF00", "cGroup" : [ ] },
		"reargoalNetleft" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "curve" : 10, "color" : "C7E6BD" },
		"reargoalNetright" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "curve" : -10, "color" : "C7E6BD" },
		"sidegoalNet" : { "vis" : true, "bCoef" : 1, "cMask" : ["ball","red","blue" ], "color" : "C7E6BD" },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] },
		"line" : { "vis" : true, "cMask" : [ ], "color" : "C7E6BD" },
		"tunnel" : { "vis" : true, "cMask" : ["red","blue" ], "color" : "000000" },
		"advertising" : { "vis" : true, "cMask" : ["red","blue" ], "color" : "333333" },
		"teambench" : { "vis" : true, "cMask" : [ ], "color" : "000000" },
		"manager" : { "radius" : 15, "vis" : true, "cMask" : ["red","blue" ], "invMass" : 0, "color" : "333333" },
		"physio" : { "radius" : 15, "vis" : true, "cMask" : ["red","blue" ], "invMass" : 0, "color" : "666666" },
		"redsubs" : { "radius" : 15, "vis" : true, "cMask" : ["red","blue" ], "invMass" : 0, "color" : "E56E56" },
		"bluesubs" : { "radius" : 15, "vis" : true, "cMask" : ["red","blue" ], "invMass" : 0, "color" : "5689E5" }

	}
}`;

var PenalesFutsalBlue=`
{

	"name" : "Escreva !help para mais informações",

	"width" : 1500,

	"height" : 1100,

	"spawnDistance" : 300,

	"redSpawnPoints" : [
		[ 1400, -90
		],
		[ 1400, -30
		],
		[ 1400, 30
		],
		[ 1400, 90
		]

	],

	"blueSpawnPoints" : [
		[ 65, -90
		],
		[ 65, -30
		],
		[ 65, 30
		],
		[ 65, 90
		]

	],

	"bg" : { "type" : "hockey", "width" : 1200, "height" : 600, "kickOffRadius" : 0, "cornerRadius" : 0, "color" : "253D97" },

	"playerPhysics" : {
		"bCoef" : 0.5,
		"invMass" : 0.5,
		"damping" : 0.96,
		"acceleration" : 0.12,
		"kickingAcceleration" : 0.07,
		"kickingDamping" : 0.96,
		"kickStrength" : 5.65

	},

	"ballPhysics" : {
		"pos" : [ 920, 0
		],
		"radius" : 6.25,
		"color" : "FFCC00"

	},

	"vertexes" : [
		/* 0 */ { "x" : -522.9395376326441, "y" : 735, "bCoef" : 0.001, "cMask" : ["wall" ], "cGroup" : ["all" ] },
		
		/* 1 */ { "x" : 917, "y" : -6.25, "trait" : "powerboost", "bCoef" : -2.3, "vis" : false, "cMask" : ["ball" ], "pos" : [955,0 ], "radius" : 10, "curve" : 216 },
		/* 2 */ { "x" : 917, "y" : 6.25, "trait" : "powerboost", "bCoef" : -2.3, "vis" : false, "cMask" : ["ball" ], "pos" : [955,0 ], "radius" : 10, "curve" : 216 },
		
		/* 3 */ { "bCoef" : -2.4, "cMask" : ["red" ], "x" : 1308.0188554822, "y" : 61.50390625 },
		/* 4 */ { "bCoef" : -2.4, "cMask" : ["red" ], "x" : 1308.0188554822, "y" : -69.49609375 },
		/* 5 */ { "bCoef" : 0, "cMask" : ["red" ], "x" : 132, "y" : -621, "curve" : -77 },
		
		/* 6 */ { "x" : -1200, "y" : -600, "trait" : "ballArea" },
		
		/* 7 */ { "x" : -1200, "y" : -95, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		/* 8 */ { "x" : -1250, "y" : -95, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		/* 9 */ { "x" : -1250, "y" : 95, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball","red","blue" ], "radius" : 7 },
		/* 10 */ { "x" : -1200, "y" : 95, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8" },
		/* 11 */ { "x" : 1200, "y" : -95, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball","red" ] },
		/* 12 */ { "x" : 1250, "y" : -95, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball" ], "bCoef" : 0 },
		/* 13 */ { "x" : 1250, "y" : 95, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "cMask" : ["red" ], "bCoef" : 0 },
		/* 14 */ { "x" : 1200, "y" : 95, "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "cMask" : ["ball","red" ] },
		
		/* 15 */ { "x" : -1200, "y" : 95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 16 */ { "x" : -1200, "y" : 600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 17 */ { "x" : -1200, "y" : -95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 18 */ { "x" : -1200, "y" : -600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 19 */ { "x" : -1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 20 */ { "x" : 1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 21 */ { "x" : 1200, "y" : 95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 22 */ { "x" : 1200, "y" : 600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 23 */ { "x" : 1200, "y" : -600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 24 */ { "x" : 1200, "y" : -95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 25 */ { "x" : -1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		/* 26 */ { "x" : 1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		/* 27 */ { "x" : -1200, "y" : 95, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 28 */ { "x" : -1200, "y" : 600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 29 */ { "x" : -1200, "y" : -600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 30 */ { "x" : -1200, "y" : -95, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 31 */ { "x" : 1200, "y" : -600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 32 */ { "x" : 1200, "y" : -95, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 33 */ { "x" : 1200, "y" : 95, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 34 */ { "x" : 1200, "y" : 600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 35 */ { "x" : -1200, "y" : 600, "trait" : "ballArea" },
		/* 36 */ { "x" : -1200, "y" : -600, "trait" : "ballArea" },
		/* 37 */ { "x" : -1200, "y" : 95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "curve" : 0 },
		/* 38 */ { "x" : -1200, "y" : 600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "curve" : 0 },
		/* 39 */ { "x" : -1200, "y" : -95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "curve" : 0 },
		/* 40 */ { "x" : -1200, "y" : -600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "curve" : 0 },
		/* 41 */ { "x" : -1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 42 */ { "x" : 1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 43 */ { "x" : 1200, "y" : 95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 44 */ { "x" : 1200, "y" : 600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 45 */ { "x" : 1200, "y" : -600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 46 */ { "x" : 1200, "y" : -95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 47 */ { "x" : -1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 48 */ { "x" : 1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 49 */ { "x" : -1200, "y" : 600, "trait" : "ballArea" },
		/* 50 */ { "x" : -1200, "y" : -600, "trait" : "ballArea" },
		/* 51 */ { "x" : -1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 52 */ { "x" : 1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 53 */ { "x" : 1200, "y" : 95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 54 */ { "x" : 1200, "y" : 600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 55 */ { "x" : 1200, "y" : -600, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 56 */ { "x" : 1200, "y" : -95, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 57 */ { "x" : -1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 58 */ { "x" : 1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 59 */ { "x" : -1200, "y" : 600, "trait" : "ballArea" },
		/* 60 */ { "x" : -1200, "y" : -600, "trait" : "ballArea" },
		/* 61 */ { "x" : -1200, "y" : 95, "bCoef" : 2, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "curve" : 0 },
		/* 62 */ { "x" : -1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "curve" : 0 },
		/* 63 */ { "x" : -1200, "y" : -95, "bCoef" : 2, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "curve" : 0 },
		/* 64 */ { "x" : -1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "curve" : 0 },
		/* 65 */ { "x" : -1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		/* 66 */ { "x" : 1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		/* 67 */ { "x" : 1200, "y" : 95, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 68 */ { "x" : 1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 69 */ { "x" : 1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 70 */ { "x" : 1200, "y" : -95, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 71 */ { "x" : -1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 72 */ { "x" : 1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea" },
		
		/* 73 */ { "x" : 920, "y" : -148, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0 },
		/* 74 */ { "x" : 920, "y" : 146, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 44.33638217658901 },
		
		/* 75 */ { "x" : -1200, "y" : 95, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 76 */ { "x" : -1200, "y" : 600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 77 */ { "x" : -1200, "y" : 95, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 78 */ { "x" : -1200, "y" : 600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 79 */ { "x" : -1200, "y" : -600, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 80 */ { "x" : -1200, "y" : -600, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 81 */ { "x" : 1200, "y" : -95, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 82 */ { "x" : 1200, "y" : -95, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 83 */ { "x" : -1207, "y" : 95, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		/* 84 */ { "x" : -1207, "y" : 600, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		/* 85 */ { "x" : -1207, "y" : -600, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		/* 86 */ { "x" : -1207, "y" : -95, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		/* 87 */ { "x" : 1207, "y" : -600, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		/* 88 */ { "x" : 1207, "y" : -95, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		/* 89 */ { "x" : 1207, "y" : 95, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		/* 90 */ { "x" : 1207, "y" : 600, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		
		/* 91 */ { "x" : 920, "y" : 146, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -78.04299828129014 },
		/* 92 */ { "x" : 1200, "y" : 424, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -78.04299828129014 },
		/* 93 */ { "x" : 920, "y" : -148, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 78.04299828129014 },
		/* 94 */ { "x" : -1200, "y" : -95, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0, "color" : "ffffff" },
		/* 95 */ { "x" : -1200, "y" : 95, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0, "color" : "ffffff" },
		/* 96 */ { "x" : 1200, "y" : -95, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0, "color" : "ffffff" },
		/* 97 */ { "x" : 1200, "y" : 95, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0, "color" : "ffffff" },
		/* 98 */ { "x" : 0, "y" : -11, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 180 },
		/* 99 */ { "x" : 0, "y" : 11, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 180 },
		/* 100 */ { "x" : 0, "y" : -11, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -180 },
		/* 101 */ { "x" : 0, "y" : 11, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -180 },
		/* 102 */ { "x" : -525.1982581967213, "y" : 584, "bCoef" : 0.1, "trait" : "line" },
		/* 103 */ { "x" : -525.1982581967213, "y" : 616, "bCoef" : 0.1, "trait" : "line" },
		/* 104 */ { "x" : -267.4933401639344, "y" : 584, "bCoef" : 0.1, "trait" : "line" },
		/* 105 */ { "x" : -267.4933401639344, "y" : 616, "bCoef" : 0.1, "trait" : "line" },
		/* 106 */ { "x" : 505.62141393442624, "y" : 584, "bCoef" : 0.1, "trait" : "line" },
		/* 107 */ { "x" : 505.62141393442624, "y" : 616, "bCoef" : 0.1, "trait" : "line" },
		/* 108 */ { "x" : 247.91649590163934, "y" : 584, "bCoef" : 0.1, "trait" : "line" },
		/* 109 */ { "x" : 247.91649590163934, "y" : 616, "bCoef" : 0.1, "trait" : "line" },
		/* 110 */ { "x" : -828.0015368852459, "y" : 600, "bCoef" : 0.1, "trait" : "line" },
		/* 111 */ { "x" : -828.0015368852459, "y" : 616, "bCoef" : 0.1, "trait" : "line" },
		/* 112 */ { "x" : 1220.33349609375, "y" : 251.9681483400014, "bCoef" : 0.1, "trait" : "line" },
		/* 113 */ { "x" : 1201.33349609375, "y" : 251.9681483400014, "bCoef" : 0.1, "trait" : "line" },
		/* 114 */ { "x" : 1219.33349609375, "y" : -251.9681483400014, "bCoef" : 0.1, "trait" : "line" },
		/* 115 */ { "x" : 1200.33349609375, "y" : -251.9681483400014, "bCoef" : 0.1, "trait" : "line" },
		/* 116 */ { "x" : -841.1245088945966, "y" : -601, "bCoef" : 0.1, "trait" : "line" },
		/* 117 */ { "x" : -841.1245088945966, "y" : -617, "bCoef" : 0.1, "trait" : "line" },
		/* 118 */ { "x" : 808.4246926229508, "y" : 600, "bCoef" : 0.1, "trait" : "line" },
		/* 119 */ { "x" : 808.4246926229508, "y" : 616, "bCoef" : 0.1, "trait" : "line" },
		/* 120 */ { "x" : 837.7690984113394, "y" : -601, "bCoef" : 0.1, "trait" : "line" },
		/* 121 */ { "x" : 837.7690984113394, "y" : -617, "bCoef" : 0.1, "trait" : "line" },
		/* 122 */ { "x" : 920.1766668775302, "y" : 1.2940757844129678, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 123 */ { "x" : 920.1766668775302, "y" : -1.9306205718623346, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 124 */ { "x" : 920.1766668775302, "y" : 4.51877214068827, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 125 */ { "x" : 920.1766668775302, "y" : -5.155316928137637, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 126 */ { "x" : 920.1766668775302, "y" : -3.54296875, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 127 */ { "x" : 920.1766668775302, "y" : 2.9064239625506048, "bCoef" : 0.1, "trait" : "line", "curve" : 180, "radius" : 6.4 },
		/* 128 */ { "x" : 920.1766668775302, "y" : -5.96149101720647, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 129 */ { "x" : 920.1766668775302, "y" : 5.324946229757089, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 130 */ { "x" : 608.9727195091092, "y" : 2.2940757844129678, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 131 */ { "x" : 608.9727195091092, "y" : -0.9306205718623346, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 132 */ { "x" : 608.9727195091092, "y" : 5.51877214068827, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 133 */ { "x" : 608.9727195091092, "y" : -4.155316928137637, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 134 */ { "x" : 608.9727195091092, "y" : -2.54296875, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 135 */ { "x" : 608.9727195091092, "y" : 3.9064239625506048, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 136 */ { "x" : 608.9727195091092, "y" : -4.96149101720647, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 137 */ { "x" : 608.9727195091092, "y" : 6.324946229757089, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 138 */ { "x" : -1220.0747488827305, "y" : -251.82895884262769, "bCoef" : 0.1, "trait" : "line" },
		/* 139 */ { "x" : -1201.0752587242073, "y" : -251.9681483400014, "bCoef" : 0.1, "trait" : "line" },
		/* 140 */ { "x" : -1218.9226063416277, "y" : 251.9681483400014, "bCoef" : 0.1, "trait" : "line" },
		/* 141 */ { "x" : -1199.9231161831044, "y" : 251.9681483400014, "bCoef" : 0.1, "trait" : "line" },
		/* 142 */ { "x" : -1199.4694375680187, "y" : 570.456511053482, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 143 */ { "x" : -1171.6369452864983, "y" : 598.2890033350025, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 144 */ { "x" : -1198.4694375680187, "y" : -569.6420271253103, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 145 */ { "x" : -1170.6369452864983, "y" : -597.4745194068307, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 146 */ { "x" : 1198.1516337208868, "y" : -571.0124590189979, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 147 */ { "x" : 1170.319141439366, "y" : -598.8449513005185, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 148 */ { "x" : 1199.1516337208868, "y" : 569.9997004222528, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 149 */ { "x" : 1171.319141439366, "y" : 597.8321927037732, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 150 */ { "x" : 1200, "y" : -424, "bCoef" : 0, "trait" : "line", "curve" : 78.04299828129014 },
		/* 151 */ { "x" : -800, "y" : 147, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 0 },
		/* 152 */ { "x" : -800, "y" : -147, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 44.33638217658901 },
		/* 153 */ { "x" : -800, "y" : -147, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 44.33638217658901 },
		/* 154 */ { "x" : -1200, "y" : -424, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -38.52299398255091 },
		/* 155 */ { "x" : -800, "y" : 147, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : 78.04299828129014 },
		/* 156 */ { "x" : -800, "y" : 147, "bCoef" : 0, "cMask" : ["" ], "trait" : "line", "curve" : -90 },
		/* 157 */ { "x" : -800.1940394442979, "y" : -2.3590474271793553, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 158 */ { "x" : -800.2144724538566, "y" : 0.8655841924472334, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 159 */ { "x" : -800.1736064347391, "y" : -5.5836790468059405, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 160 */ { "x" : -800.2349054634154, "y" : 4.090215812073822, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 161 */ { "x" : -800.2246889586361, "y" : 2.47790000226054, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 162 */ { "x" : -800.1838229395186, "y" : -3.9713632369926337, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 163 */ { "x" : -800.2400137158052, "y" : 4.896373716980474, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 164 */ { "x" : -800.1684981823495, "y" : -6.3898369517125815, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 165 */ { "x" : -608.993930546668, "y" : -1.1475001518364962, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 166 */ { "x" : -609.0143635562267, "y" : 2.077131467790089, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 167 */ { "x" : -608.9734975371092, "y" : -4.372131771463081, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 168 */ { "x" : -609.0347965657855, "y" : 5.301763087416674, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 169 */ { "x" : -609.0245800610062, "y" : 3.6894472776033993, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 170 */ { "x" : -608.9837140418886, "y" : -2.759815961649778, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 171 */ { "x" : -609.0399048181753, "y" : 6.107920992323329, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 172 */ { "x" : -608.9683892847195, "y" : -5.178289676369722, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 173 */ { "x" : -1200, "y" : 424, "bCoef" : 0, "trait" : "line", "curve" : 78.04299828129014 },
		/* 174 */ { "x" : 611.0222584506541, "y" : -288.4501960600154, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 175 */ { "x" : 610.7537074861809, "y" : -284.7949449013963, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 176 */ { "x" : 609.0222584506541, "y" : 296.5498039399846, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 177 */ { "x" : 608.7537074861809, "y" : 300.2050550986037, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 178 */ { "x" : -610.9777415493459, "y" : -292.4501960600154, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 179 */ { "x" : -611.2462925138191, "y" : -288.7949449013963, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 180 */ { "x" : -609.9777415493459, "y" : 294.5498039399846, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		/* 181 */ { "x" : -610.2462925138191, "y" : 298.2050550986037, "bCoef" : 0.1, "trait" : "line", "curve" : 200 },
		
		/* 182 */ { "x" : -85, "y" : -203, "bCoef" : 0, "cMask" : ["red" ], "cGroup" : ["blueKO","redKO" ], "curve" : 235 },
		/* 183 */ { "x" : -88, "y" : 201, "bCoef" : 0, "cMask" : ["red" ], "cGroup" : ["blueKO","redKO" ], "curve" : 235 },
		/* 184 */ { "x" : 1499, "y" : -241, "bCoef" : 0, "cMask" : ["red" ], "dist" : -1400 },
		/* 185 */ { "x" : 1330, "y" : -240, "bCoef" : 0, "cMask" : ["red" ] },
		/* 186 */ { "x" : 1330, "y" : 240, "bCoef" : 0, "cMask" : ["red" ], "curve" : 0 },
		/* 187 */ { "x" : 1499, "y" : 239, "bCoef" : 0, "cMask" : ["red" ], "dist" : -1400, "curve" : 0 },
		
		/* 188 */ { "x" : 1330, "y" : -240, "trait" : "kickOffBarrier", "cMask" : ["red" ] },
		
		/* 189 */ { "x" : 1182, "y" : 119.23596984067328, "bCoef" : 0, "cMask" : ["red" ], "cGroup" : ["redKO" ], "vis" : false, "curve" : 0 },
		/* 190 */ { "x" : 1182, "y" : -120.76361382468701, "bCoef" : 0, "cMask" : ["red" ], "cGroup" : ["redKO" ], "vis" : false, "curve" : 0 },
		/* 191 */ { "bCoef" : 0, "cMask" : ["red" ], "x" : 1330, "y" : 240 },
		/* 192 */ { "bCoef" : 0, "cMask" : ["red" ], "x" : 1330, "y" : 20 },
		/* 193 */ { "bCoef" : 0, "cMask" : ["red" ], "x" : 1250, "y" : 20 },
		/* 194 */ { "bCoef" : 0, "cMask" : ["red" ], "x" : 1330, "y" : -20 },
		/* 195 */ { "bCoef" : 0, "cMask" : ["red" ], "x" : 1250, "y" : -20, "vis" : false },
		/* 196 */ { "bCoef" : 0, "cMask" : ["blue" ], "x" : 694, "y" : 660, "curve" : -77 },
		/* 197 */ { "bCoef" : 0, "cMask" : ["blue" ], "x" : 694, "y" : -660, "curve" : -77 },
		/* 198 */ { "x" : 1182, "y" : 119.23596984067328, "bCoef" : 0, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "vis" : false, "curve" : 0, "radius" : 15, "pos" : [67,0 ] },
		/* 199 */ { "x" : 1182, "y" : -120.76361382468701, "bCoef" : 0, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "vis" : false, "curve" : 0, "radius" : 15, "pos" : [67,0 ] },
		
		/* 200 */ { "bCoef" : 0.1, "trait" : "line", "x" : 0, "y" : -220, "vis" : true, "curve" : -180, "cMask" : ["red" ] },
		/* 201 */ { "bCoef" : 0.1, "trait" : "line", "x" : 0, "y" : 220, "vis" : true, "curve" : -180, "cMask" : ["red" ] },
		/* 202 */ { "bCoef" : 0.1, "trait" : "line", "x" : 0, "y" : 600, "curve" : 0 },
		/* 203 */ { "bCoef" : 0.1, "trait" : "line", "x" : 0, "y" : -220, "curve" : 0 },
		/* 204 */ { "bCoef" : 0.1, "trait" : "line", "x" : 0, "y" : -600, "curve" : 0 },
		
		/* 205 */ { "bCoef" : 0, "cMask" : ["red" ], "x" : 1250, "y" : -95.24609375, "vis" : false },
		/* 206 */ { "x" : -87, "y" : -202, "bCoef" : 0, "cMask" : ["red" ], "cGroup" : ["blueKO","redKO" ], "curve" : 180 },
		/* 207 */ { "x" : -87, "y" : 202, "bCoef" : 0, "cMask" : ["red" ], "cGroup" : ["blueKO","redKO" ], "curve" : 180 },
		/* 208 */ { "x" : 1420, "y" : -98, "bCoef" : 0, "cMask" : ["red" ] },
		/* 209 */ { "x" : 1420, "y" : 142, "bCoef" : 0, "cMask" : ["red" ] }

	],

	"segments" : [
		{ "v0" : 1, "v1" : 2, "curve" : 240.69576377250274, "trait" : "powerboost", "bCoef" : -2.3, "vis" : false, "cMask" : ["ball" ], "pos" : [955,0 ], "radius" : 10 },
		
		{ "vis" : false, "bCoef" : -2.4, "cMask" : ["red" ], "v0" : 3, "v1" : 4, "x" : 1233.0188554822 },
		
		{ "v0" : 7, "v1" : 8, "curve" : 0, "color" : "F8F8F8", "trait" : "goalNet" },
		{ "v0" : 9, "v1" : 10, "curve" : 0, "color" : "F8F8F8", "trait" : "goalNet" },
		{ "v0" : 11, "v1" : 12, "curve" : 0, "color" : "F8F8F8", "trait" : "goalNet", "cMask" : ["ball","red" ] },
		{ "v0" : 13, "v1" : 14, "curve" : 0, "color" : "F8F8F8", "trait" : "goalNet", "cMask" : ["ball","red" ] },
		
		{ "v0" : 15, "v1" : 16, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" },
		{ "v0" : 17, "v1" : 18, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -1200 },
		{ "v0" : 21, "v1" : 22, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		{ "v0" : 23, "v1" : 24, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		{ "v0" : 25, "v1" : 26, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "y" : -600 },
		{ "v0" : 27, "v1" : 28, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -700 },
		{ "v0" : 29, "v1" : 30, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -1200 },
		{ "v0" : 31, "v1" : 32, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		{ "v0" : 33, "v1" : 34, "curve" : 2.50208708167, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		{ "v0" : 37, "v1" : 38, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" },
		{ "v0" : 39, "v1" : 40, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -1200 },
		{ "v0" : 43, "v1" : 44, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		{ "v0" : 45, "v1" : 46, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		{ "v0" : 53, "v1" : 54, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		{ "v0" : 55, "v1" : 56, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		{ "v0" : 61, "v1" : 62, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 2, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea" },
		{ "v0" : 63, "v1" : 64, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 2, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "x" : -1200 },
		{ "v0" : 65, "v1" : 66, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "y" : 600 },
		{ "v0" : 67, "v1" : 68, "vis" : true, "color" : "F8F8F8", "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		{ "v0" : 69, "v1" : 70, "vis" : true, "color" : "F8F8F8", "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 1200 },
		
		{ "v0" : 73, "v1" : 74, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		
		{ "v0" : 83, "v1" : 84, "vis" : false, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "x" : -707 },
		{ "v0" : 85, "v1" : 86, "vis" : false, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "x" : -1207 },
		{ "v0" : 87, "v1" : 88, "vis" : false, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "x" : 1207 },
		{ "v0" : 89, "v1" : 90, "vis" : false, "bCoef" : 1.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "trait" : "ballArea", "x" : 1207 },
		
		{ "v0" : 91, "v1" : 92, "curve" : -78.04299828129014, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 94, "v1" : 95, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 96, "v1" : 97, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 98, "v1" : 99, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 100, "v1" : 101, "curve" : -180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 102, "v1" : 103, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240 },
		{ "v0" : 104, "v1" : 105, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -120 },
		{ "v0" : 106, "v1" : 107, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 240 },
		{ "v0" : 108, "v1" : 109, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 120 },
		{ "v0" : 110, "v1" : 111, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 112, "v1" : 113, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 251.9681483400014 },
		{ "v0" : 114, "v1" : 115, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -251.9681483400014 },
		{ "v0" : 116, "v1" : 117, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 118, "v1" : 119, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		{ "v0" : 120, "v1" : 121, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		{ "v0" : 123, "v1" : 122, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 122, "v1" : 123, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 125, "v1" : 124, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 124, "v1" : 125, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 127, "v1" : 126, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 126, "v1" : 127, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 129, "v1" : 128, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 128, "v1" : 129, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 131, "v1" : 130, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 130, "v1" : 131, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 133, "v1" : 132, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 132, "v1" : 133, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 135, "v1" : 134, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 134, "v1" : 135, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 137, "v1" : 136, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 136, "v1" : 137, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 138, "v1" : 139, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },
		{ "v0" : 140, "v1" : 141, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 251.9681483400014 },
		{ "v0" : 143, "v1" : 142, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 145, "v1" : 144, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 147, "v1" : 146, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 149, "v1" : 148, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 93, "v1" : 150, "curve" : 78.04299828129014, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 151, "v1" : 152, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 153, "v1" : 154, "curve" : -78.04299828129014, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["" ], "trait" : "line" },
		{ "v0" : 158, "v1" : 157, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 157, "v1" : 158, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 160, "v1" : 159, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 159, "v1" : 160, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 162, "v1" : 161, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 161, "v1" : 162, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 164, "v1" : 163, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 163, "v1" : 164, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 166, "v1" : 165, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 165, "v1" : 166, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 168, "v1" : 167, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 167, "v1" : 168, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 170, "v1" : 169, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 169, "v1" : 170, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 172, "v1" : 171, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 171, "v1" : 172, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 155, "v1" : 173, "curve" : 78.04299828129014, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "trait" : "line" },
		{ "v0" : 174, "v1" : 175, "curve" : -197.38121949057748, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 175, "v1" : 174, "curve" : -213.29219661707097, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 176, "v1" : 177, "curve" : -197.38121949057748, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 177, "v1" : 176, "curve" : -213.29219661707097, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 178, "v1" : 179, "curve" : -197.38121949057748, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 179, "v1" : 178, "curve" : -213.29219661707097, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 180, "v1" : 181, "curve" : -197.38121949057748, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 181, "v1" : 180, "curve" : -213.29219661707097, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "trait" : "line", "v0" : 9, "v1" : 8 },
		{ "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "trait" : "line", "v0" : 13, "v1" : 12, "cMask" : ["ball" ] },
		
		{ "v0" : 182, "v1" : 183, "vis" : false, "bCoef" : 0, "cMask" : ["red" ], "x" : -1300, "curve" : 226.23422450028582, "cGroup" : ["blueKO","redKO" ] },
		{ "v0" : 184, "v1" : 185, "vis" : false, "bCoef" : 0, "cMask" : ["red" ], "y" : -240 },
		{ "v0" : 186, "v1" : 187, "vis" : false, "bCoef" : 0, "cMask" : ["red" ], "y" : 240, "curve" : 0 },
		{ "v0" : 189, "v1" : 190, "curve" : 0, "vis" : false, "color" : "C7E6BD", "bCoef" : 0, "cMask" : ["red" ], "cGroup" : ["redKO" ], "x" : 1134 },
		{ "vis" : false, "bCoef" : 0, "cMask" : ["red" ], "v0" : 191, "v1" : 192 },
		{ "vis" : false, "bCoef" : 0, "cMask" : ["red" ], "v0" : 192, "v1" : 193, "y" : 20 },
		{ "vis" : false, "bCoef" : 0, "cMask" : ["red" ], "v0" : 194, "v1" : 195, "y" : -20 },
		{ "vis" : false, "bCoef" : 0, "cMask" : ["red" ], "v0" : 194, "v1" : 188 },
		{ "curve" : -76.40572705824569, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "v0" : 196, "v1" : 197 },
		{ "v0" : 198, "v1" : 199, "curve" : 0, "vis" : false, "color" : "C7E6BD", "bCoef" : 0, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "x" : 1134, "radius" : 15, "pos" : [67,0 ] },
		
		{ "vis" : true, "color" : "ffffff", "bCoef" : 0.1, "trait" : "line", "v0" : 200, "v1" : 201, "curve" : -180 },
		{ "curve" : -180, "vis" : true, "color" : "ffffff", "bCoef" : 0.1, "trait" : "line", "v0" : 201, "v1" : 200, "cMask" : ["red" ] },
		{ "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0.1, "trait" : "line", "v0" : 201, "v1" : 202 },
		{ "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0.1, "trait" : "line", "v0" : 203, "v1" : 204 },
		{ "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 0.1, "trait" : "line", "v0" : 201, "v1" : 101 },
		{ "curve" : 0, "vis" : true, "color" : "ffffff", "trait" : "line", "v0" : 203, "v1" : 100 },
		
		{ "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["red" ], "v0" : 195, "v1" : 205, "x" : 1250 },
		{ "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["red" ], "v0" : 193, "v1" : 13 },
		{ "v0" : 206, "v1" : 207, "vis" : false, "bCoef" : 0, "cMask" : ["red" ], "x" : -1300, "curve" : 226.58462330515184, "cGroup" : ["blueKO","redKO" ] },
		{ "v0" : 208, "v1" : 209, "vis" : false, "bCoef" : 1000000, "cMask" : ["red" ], "x" : 1410 },
		
		{ "curve" : 0, "vis" : true, "color" : "ffffff", "trait" : "line", "v0" : 101, "v1" : 100 }

	],

	"goals" : [
		{ "p0" : [-1207,95 ], "p1" : [-1207,-95 ], "team" : "red" },
		{ "p0" : [-1207,95 ], "p1" : [-1207,-95 ], "team" : "red" },
		{ "p0" : [-1207,95 ], "p1" : [-1207,-95 ], "team" : "red" },
		{ "p0" : [-1206.4,95 ], "p1" : [-1206.4,-95 ], "team" : "red" },
		{ "p0" : [1206.4,93 ], "p1" : [1206.4,-93 ], "team" : "red" },
		{ "p0" : [1193.982468239122,-94.3365799256912 ], "p1" : [734.459005139397,48.17201616138806 ], "team" : "blue" },
		{ "p0" : [1274.8853227728482,126.33301976242268 ], "p1" : [818.4082481676676,-25.65116842098992 ], "team" : "blue" }

	],

	"discs" : [
		{ "radius" : 6, "pos" : [-1200,95 ], "color" : "FF0000", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [-1200,-95 ], "color" : "FF0000", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [1199,95 ], "color" : "0033FF", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [1199,-95 ], "color" : "0033FF", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [-1200,95 ], "color" : "FF0000", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [-1200,-95 ], "color" : "FF0000", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [1199,95 ], "color" : "0033FF", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [1199,-95 ], "color" : "0033FF", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [-1200,95 ], "color" : "FF0000", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [-1200,-95 ], "color" : "FF0000", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [1199,95 ], "color" : "0033FF", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [1199,-95 ], "color" : "0033FF", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [-1200,95 ], "color" : "6666CC", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [-1200,-95 ], "color" : "6666CC", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [1199,95 ], "color" : "6666CC", "trait" : "goalPost" },
		{ "radius" : 6, "pos" : [1199,-95 ], "color" : "6666CC", "trait" : "goalPost" },
		
		{ "radius" : 3, "invMass" : 0, "pos" : [-1200,600 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [-1200,-600 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [1200,-600 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [1200,600 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -600, "trait" : "ballArea", "vis" : false, "curve" : 0 },
		{ "normal" : [0,-1 ], "dist" : -600, "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -660, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -660, "bCoef" : 0.1 },
		
		{ "normal" : [0,1 ], "dist" : -600, "trait" : "ballArea", "vis" : false, "curve" : 0 },
		{ "normal" : [0,-1 ], "dist" : -600, "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -660, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -660, "bCoef" : 0.1 },
		
		{ "normal" : [0,1 ], "dist" : -600, "trait" : "ballArea", "vis" : false, "curve" : 0 },
		{ "normal" : [0,-1 ], "dist" : -600, "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -660, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -660, "bCoef" : 0.1 },
		
		{ "normal" : [0,1 ], "dist" : -600, "trait" : "ballArea", "vis" : false, "curve" : 0 },
		
		{ "normal" : [0,1 ], "dist" : -660, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -660, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -1250, "bCoef" : 0, "cMask" : ["ball" ] },
		{ "normal" : [1,0 ], "dist" : -87, "bCoef" : 0 },
		{ "normal" : [-1,0 ], "dist" : -1498, "bCoef" : 0 }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 0, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 5, "invMass" : 0, "bCoef" : 2 },
		"stanchion" : { "radius" : 3, "invMass" : 0, "bCoef" : 3, "cMask" : ["none" ] },
		"cornerflag" : { "radius" : 3, "invMass" : 0, "bCoef" : 0.5, "color" : "FFFF00", "cGroup" : [ ] },
		"reargoalNetleft" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "curve" : 10, "color" : "C7E6BD" },
		"reargoalNetright" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "curve" : -10, "color" : "C7E6BD" },
		"sidegoalNet" : { "vis" : true, "bCoef" : 1, "cMask" : ["ball","red","blue" ], "color" : "C7E6BD" },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] },
		"line" : { "vis" : true, "cMask" : [ ], "color" : "C7E6BD" },
		"tunnel" : { "vis" : true, "cMask" : ["red","blue" ], "color" : "000000" },
		"advertising" : { "vis" : true, "cMask" : ["red","blue" ], "color" : "333333" },
		"teambench" : { "vis" : true, "cMask" : [ ], "color" : "000000" },
		"manager" : { "radius" : 15, "vis" : true, "cMask" : ["red","blue" ], "invMass" : 0, "color" : "333333" },
		"physio" : { "radius" : 15, "vis" : true, "cMask" : ["red","blue" ], "invMass" : 0, "color" : "666666" },
		"redsubs" : { "radius" : 15, "vis" : true, "cMask" : ["red","blue" ], "invMass" : 0, "color" : "E56E56" },
		"bluesubs" : { "radius" : 15, "vis" : true, "cMask" : ["red","blue" ], "invMass" : 0, "color" : "5689E5" }

	}
}`;

var MiniRS=`
{

	"name" : "Escreva !help para mais informações",

	"width" : 960,

	"height" : 395,

	"spawnDistance" : 350,

	"bg" : { "type" : "hockey", "width" : 700, "height" : 320, "kickOffRadius" : 80, "cornerRadius" : 0 },

	"playerPhysics" : {
		"bCoef" : 0.5,
		"invMass" : 0.5,
		"damping" : 0.96,
		"acceleration" : 0.12,
		"kickingAcceleration" : 0.07,
		"kickingDamping" : 0.96,
		"kickStrength" : 5.7

	},

	"ballPhysics" : {
		"radius" : 10,
		"bCoef" : 0.5,
		"invMass" : 1,
		"damping" : 0.99,
		"color" : "FFDD00",
		"cMask" : [ "all"
		],
		"cGroup" : [ "ball"
		]

	},

	"vertexes" : [
		/* 0 */ { "x" : 700, "y" : 206, "trait" : "line", "color" : "FFDD00" },
		/* 1 */ { "x" : 491, "y" : 206, "trait" : "line", "color" : "FFDD00" },
		/* 2 */ { "x" : 700, "y" : -206, "trait" : "line", "color" : "FFDD00" },
		/* 3 */ { "x" : 491, "y" : -206, "trait" : "line", "color" : "FFDD00" },
		/* 4 */ { "x" : 700, "y" : 125, "trait" : "line", "color" : "004DFF" },
		/* 5 */ { "x" : 614, "y" : 125, "trait" : "line", "color" : "004DFF" },
		/* 6 */ { "x" : 700, "y" : -125, "trait" : "line", "color" : "004DFF" },
		/* 7 */ { "x" : 614, "y" : -125, "trait" : "line", "color" : "004DFF" },
		/* 8 */ { "x" : 491, "y" : -90, "trait" : "line", "curve" : -130, "color" : "004DFF" },
		/* 9 */ { "x" : 491, "y" : 79, "trait" : "line", "curve" : -130, "color" : "004DFF" },
		/* 10 */ { "x" : -700, "y" : -206, "trait" : "line", "color" : "FFDD00" },
		/* 11 */ { "x" : -491, "y" : -206, "trait" : "line", "color" : "FFDD00" },
		/* 12 */ { "x" : -700, "y" : 206, "trait" : "line", "color" : "FFDD00" },
		/* 13 */ { "x" : -491, "y" : 206, "trait" : "line", "color" : "FFDD00" },
		/* 14 */ { "x" : -700, "y" : -125, "trait" : "line", "color" : "F00000" },
		/* 15 */ { "x" : -614, "y" : -125, "trait" : "line", "color" : "F00000" },
		/* 16 */ { "x" : -700, "y" : 125, "trait" : "line", "color" : "F00000" },
		/* 17 */ { "x" : -614, "y" : 125, "trait" : "line", "color" : "F00000" },
		/* 18 */ { "x" : -491, "y" : 85, "trait" : "line", "curve" : -130, "color" : "F00000" },
		/* 19 */ { "x" : -491, "y" : -89, "trait" : "line", "curve" : -130, "color" : "F00000" },
		/* 20 */ { "x" : 556, "y" : 2, "trait" : "line", "color" : "2e2604" },
		/* 21 */ { "x" : 556, "y" : -6, "trait" : "line", "color" : "2e2604" },
		/* 22 */ { "x" : -553, "y" : 2, "trait" : "line", "color" : "2e2604" },
		/* 23 */ { "x" : -553, "y" : -6, "trait" : "line", "color" : "2e2604" },
		
		/* 24 */ { "x" : -700, "y" : -320, "bCoef" : 2, "cMask" : ["ball" ], "color" : "FFFFFF", "vis" : false },
		/* 25 */ { "x" : -700, "y" : -386, "cMask" : ["ball" ], "vis" : false },
		/* 26 */ { "x" : -700, "y" : -320, "bCoef" : 2, "cMask" : ["ball" ], "color" : "FFFFFF", "vis" : false },
		/* 27 */ { "x" : -700, "y" : -386, "cMask" : ["ball" ], "vis" : false },
		/* 28 */ { "x" : 700, "y" : -320, "bCoef" : 2, "cMask" : ["ball" ], "color" : "FFFFFF", "vis" : false },
		/* 29 */ { "x" : 700, "y" : -390, "cMask" : ["ball" ], "vis" : false },
		/* 30 */ { "x" : 700, "y" : 390, "bCoef" : 2, "cMask" : ["ball" ], "color" : "FFFFFF", "vis" : false },
		/* 31 */ { "x" : 700, "y" : 320, "cMask" : ["ball" ], "vis" : false },
		/* 32 */ { "x" : -700, "y" : 390, "bCoef" : 2, "cMask" : ["ball" ], "color" : "FFFFFF", "vis" : false },
		/* 33 */ { "x" : -700, "y" : 320, "cMask" : ["ball" ], "vis" : false },
		/* 34 */ { "x" : -969, "y" : -123, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 35 */ { "x" : -822, "y" : -124, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 36 */ { "x" : -822, "y" : 123, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 37 */ { "x" : -967, "y" : 123, "bCoef" : 0, "cMask" : ["blue" ] },
		
		/* 38 */ { "x" : -969, "y" : -123, "trait" : "kickOffBarrier" },
		/* 39 */ { "x" : -822, "y" : -123, "trait" : "kickOffBarrier" },
		/* 40 */ { "x" : -822, "y" : 123, "trait" : "kickOffBarrier" },
		/* 41 */ { "x" : -969, "y" : 123, "trait" : "kickOffBarrier" },
		
		/* 42 */ { "x" : -909, "y" : -83, "bCoef" : 0, "cMask" : ["blue" ], "color" : "2257D2" },
		/* 43 */ { "x" : -909, "y" : 77, "bCoef" : 0, "cMask" : ["blue" ], "color" : "2257D2" },
		/* 44 */ { "x" : -914, "y" : -83, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 45 */ { "x" : -904, "y" : -83, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 46 */ { "x" : -914, "y" : 77, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 47 */ { "x" : -904, "y" : 77, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 48 */ { "x" : -959, "y" : -83, "bCoef" : 0, "cMask" : ["red" ] },
		/* 49 */ { "x" : -959, "y" : 77, "bCoef" : 0, "cMask" : ["red" ] },
		/* 50 */ { "x" : 969, "y" : -123, "bCoef" : 0, "cMask" : ["red" ] },
		/* 51 */ { "x" : 822, "y" : -123, "bCoef" : 0, "cMask" : ["red" ] },
		/* 52 */ { "x" : 822, "y" : 123, "bCoef" : 0, "cMask" : ["red" ] },
		/* 53 */ { "x" : 969, "y" : 123, "bCoef" : 0, "cMask" : ["red" ] },
		
		/* 54 */ { "x" : 969, "y" : -123, "trait" : "kickOffBarrier" },
		/* 55 */ { "x" : 823, "y" : -123, "trait" : "kickOffBarrier" },
		/* 56 */ { "x" : 822, "y" : 123, "trait" : "kickOffBarrier" },
		/* 57 */ { "x" : 969, "y" : 123, "trait" : "kickOffBarrier" },
		
		/* 58 */ { "x" : 911, "y" : -90, "bCoef" : 0, "cMask" : ["red" ], "color" : "FF2121" },
		/* 59 */ { "x" : 911, "y" : 70, "bCoef" : 0, "cMask" : ["red" ], "color" : "FF2121" },
		/* 60 */ { "x" : 916, "y" : -90, "bCoef" : 0, "cMask" : ["red" ] },
		/* 61 */ { "x" : 906, "y" : -90, "bCoef" : 0, "cMask" : ["red" ] },
		/* 62 */ { "x" : 916, "y" : 70, "bCoef" : 0, "cMask" : ["red" ] },
		/* 63 */ { "x" : 906, "y" : 70, "bCoef" : 0, "cMask" : ["red" ] },
		/* 64 */ { "x" : 961, "y" : -90, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 65 */ { "x" : 961, "y" : 70, "bCoef" : 0, "cMask" : ["blue" ] },
		
		/* 66 */ { "x" : -719, "y" : 225, "bCoef" : -4.7, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "FFDD00" },
		/* 67 */ { "x" : -719, "y" : 150, "bCoef" : -4.7, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "FFDD00" },
		/* 68 */ { "x" : -719, "y" : -150, "bCoef" : -4.7, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "FFDD00" },
		/* 69 */ { "x" : -719, "y" : -225, "bCoef" : -4.7, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "FFDD00" },
		/* 70 */ { "x" : 719, "y" : -225, "bCoef" : -4.7, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "FFDD00" },
		/* 71 */ { "x" : 719, "y" : -150, "bCoef" : -4.7, "cMask" : ["ball" ], "trait" : "line", "curve" : -40, "color" : "FFDD00" },
		/* 72 */ { "x" : 719, "y" : 150, "bCoef" : -4.7, "cMask" : ["ball" ], "trait" : "line", "curve" : 40, "color" : "FFDD00" },
		/* 73 */ { "x" : 719, "y" : 225, "bCoef" : -4.7, "cMask" : ["ball" ], "trait" : "line", "curve" : 40, "color" : "FFDD00" },
		/* 74 */ { "x" : -702.08569760776, "y" : 77.724026349663, "bCoef" : 1.1, "cMask" : ["ball","red","blue" ], "trait" : "line", "color" : "F00000", "curve" : 0 },
		/* 75 */ { "x" : -760, "y" : 75.904128092658, "bCoef" : 1.1, "cMask" : ["ball","red","blue" ], "trait" : "line", "color" : "F00000", "vis" : false, "curve" : 12 },
		/* 76 */ { "x" : -702.08569760776, "y" : -87.886715037721, "bCoef" : 1.1, "cMask" : ["ball","red","blue" ], "trait" : "line", "color" : "F00000", "curve" : 0 },
		/* 77 */ { "x" : -760, "y" : -86.066816780717, "bCoef" : 1.1, "cMask" : ["ball","red","blue" ], "trait" : "line", "color" : "F00000", "vis" : false, "curve" : 12 },
		/* 78 */ { "x" : -760, "y" : 75.904128092658, "trait" : "line", "color" : "ffffff" },
		/* 79 */ { "x" : -760, "y" : -86.066816780717, "trait" : "line", "color" : "ffffff" },
		/* 80 */ { "x" : -760, "y" : 75.904128092658, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "line", "color" : "FFF7F7", "vis" : true, "curve" : 12 },
		/* 81 */ { "x" : -760, "y" : -86.066816780717, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "line", "color" : "FFF7F7", "vis" : true, "curve" : 12 },
		/* 82 */ { "x" : 702.01261034953, "y" : -87.251405791383, "bCoef" : 1.1, "cMask" : ["ball","red","blue" ], "trait" : "line", "color" : "004DFF", "curve" : 0 },
		/* 83 */ { "x" : 760, "y" : -86.066816780717, "bCoef" : 1.1, "cMask" : ["ball","red","blue" ], "trait" : "line", "color" : "004DFF", "vis" : false, "curve" : 12 },
		/* 84 */ { "x" : 702.57590893252, "y" : 78.358377607985, "bCoef" : 1.1, "cMask" : ["ball","red","blue" ], "trait" : "line", "color" : "004DFF", "curve" : 0 },
		/* 85 */ { "x" : 760, "y" : 75.904128092658, "bCoef" : 1.1, "cMask" : ["ball","red","blue" ], "trait" : "line", "color" : "004DFF", "vis" : false, "curve" : 12 },
		/* 86 */ { "x" : 760, "y" : -86.066816780717, "trait" : "line", "color" : "ffffff" },
		/* 87 */ { "x" : 760, "y" : 75.904128092658, "trait" : "line", "color" : "ffffff" },
		/* 88 */ { "x" : 760, "y" : -86.066816780717, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "line", "color" : "FFF7F7", "vis" : true, "curve" : 12 },
		/* 89 */ { "x" : 760, "y" : 75.904128092658, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "line", "color" : "FFF7F7", "vis" : true, "curve" : 12 },
		
		/* 90 */ { "x" : 0, "y" : -80, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "color" : "585757", "vis" : false, "curve" : 0 },
		/* 91 */ { "x" : 0, "y" : -390, "trait" : "kickOffBarrier", "color" : "585757", "vis" : false, "curve" : 0 },
		/* 92 */ { "x" : -1, "y" : 390, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "color" : "585757", "vis" : false, "curve" : 0 },
		/* 93 */ { "x" : 0, "y" : 80, "trait" : "kickOffBarrier", "color" : "585757", "vis" : false, "curve" : 0 },
		
		/* 94 */ { "x" : -491, "y" : -206, "trait" : "line", "color" : "FFDD00" },
		/* 95 */ { "x" : -491, "y" : 206, "trait" : "line", "color" : "FFDD00" },
		/* 96 */ { "x" : 491, "y" : 206, "trait" : "line", "color" : "FFDD00" },
		/* 97 */ { "x" : 491, "y" : -206, "trait" : "line", "color" : "FFDD00" },
		/* 98 */ { "x" : -700, "y" : 320, "trait" : "line", "color" : "FFDD00" },
		/* 99 */ { "x" : -700, "y" : -320, "trait" : "line", "color" : "FFDD00" },
		/* 100 */ { "x" : 700, "y" : 320, "trait" : "line", "color" : "FFDD00" },
		/* 101 */ { "x" : 700, "y" : -320, "trait" : "line", "color" : "FFDD00" },
		
		/* 102 */ { "x" : 0, "y" : 81, "trait" : "kickOffBarrier", "color" : "fcfcfc", "vis" : false },
		
		/* 103 */ { "x" : 0, "y" : -5, "trait" : "line", "color" : "FFDD00" },
		/* 104 */ { "x" : 0, "y" : 3, "trait" : "line", "color" : "FFDD00" },
		/* 105 */ { "x" : 0, "y" : -5, "trait" : "line", "color" : "FFDD00" },
		/* 106 */ { "x" : 0, "y" : 3, "trait" : "line", "color" : "FFDD00" },
		
		/* 107 */ { "x" : -30, "y" : -49, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "curve" : 0 },
		/* 108 */ { "x" : -30, "y" : 34, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "curve" : 0 },
		/* 109 */ { "x" : 30, "y" : -49, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "trait" : "kickOffBarrier", "curve" : 0 },
		/* 110 */ { "x" : 30, "y" : 34, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "trait" : "kickOffBarrier", "curve" : 0, "color" : "FFFFFF" },
		/* 111 */ { "x" : 80.5, "y" : 3, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "eec215", "vis" : true, "curve" : 12 },
		/* 112 */ { "x" : -80.5, "y" : 4, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "eec215", "vis" : true, "curve" : -12 },
		/* 113 */ { "x" : 72, "y" : 34, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "curve" : -160.5, "vis" : true, "color" : "eec215" },
		/* 114 */ { "x" : -72, "y" : 35, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "curve" : -160.5, "vis" : true, "color" : "eec215" },
		/* 115 */ { "x" : 78.8, "y" : -19, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "eec215", "vis" : true, "curve" : 12 },
		/* 116 */ { "x" : -78.8, "y" : -18, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "eec215", "vis" : true, "curve" : -12 },
		/* 117 */ { "x" : 63, "y" : -49, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "curve" : 154, "vis" : true, "color" : "eec215" },
		/* 118 */ { "x" : -64, "y" : -49, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "curve" : 154, "vis" : true, "color" : "eec215" },
		/* 119 */ { "x" : 63, "y" : -49, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "trait" : "kickOffBarrier", "curve" : 0, "vis" : true, "color" : "004dff" },
		/* 120 */ { "x" : 72, "y" : 34, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "trait" : "kickOffBarrier", "curve" : 0, "vis" : true, "color" : "004dff" },
		/* 121 */ { "x" : -64, "y" : -49, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "curve" : 0, "vis" : true, "color" : "f73131" },
		/* 122 */ { "x" : -72, "y" : 35, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "curve" : 0, "vis" : true, "color" : "f73131" },
		/* 123 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "FFDD00" },
		/* 124 */ { "x" : 0, "y" : -320, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "FFDD00" },
		/* 125 */ { "x" : 0, "y" : 320, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "FFDD00" },
		/* 126 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "FFDD00" },
		
		/* 127 */ { "x" : 0, "y" : -80, "trait" : "line", "color" : "FFDD00" },
		/* 128 */ { "x" : 0, "y" : 80, "trait" : "line", "color" : "FFDD00" },
		/* 129 */ { "x" : -700, "y" : 294, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "FFDD00" },
		/* 130 */ { "x" : -675, "y" : 320, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "FFDD00" },
		/* 131 */ { "x" : -672.85422349049, "y" : -320, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "FFDD00" },
		/* 132 */ { "x" : -700, "y" : -295.14627021274, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "FFDD00" },
		/* 133 */ { "x" : 671.84288219525, "y" : 320, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "FFDD00" },
		/* 134 */ { "x" : 700, "y" : 294.15582349306, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "FFDD00" },
		/* 135 */ { "x" : 700, "y" : -293.03342928015, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "FFDD00" },
		/* 136 */ { "x" : 673.92337307118, "y" : -320, "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line", "color" : "FFDD00" },
		/* 137 */ { "x" : -712, "y" : -318, "bCoef" : -2.25, "cMask" : ["ball" ], "trait" : "line", "curve" : 45, "color" : "FFDD00" },
		/* 138 */ { "x" : -740, "y" : -298, "bCoef" : -2.25, "cMask" : ["ball" ], "trait" : "line", "curve" : 45, "color" : "FFDD00" },
		/* 139 */ { "x" : -740, "y" : 298, "bCoef" : -2.25, "cMask" : ["ball" ], "trait" : "line", "curve" : 45, "color" : "FFDD00" },
		/* 140 */ { "x" : -712, "y" : 318, "bCoef" : -2.25, "cMask" : ["ball" ], "trait" : "line", "curve" : 45, "color" : "FFDD00" },
		/* 141 */ { "x" : 712, "y" : 318, "bCoef" : -2.25, "cMask" : ["ball" ], "trait" : "line", "curve" : 45, "color" : "FFDD00" },
		/* 142 */ { "x" : 740, "y" : 298, "bCoef" : -2.25, "cMask" : ["ball" ], "trait" : "line", "curve" : 45, "color" : "FFDD00" },
		/* 143 */ { "x" : 740, "y" : -298, "bCoef" : -2.25, "cMask" : ["ball" ], "trait" : "line", "curve" : 45, "color" : "FFDD00" },
		/* 144 */ { "x" : 712, "y" : -318, "bCoef" : -2.25, "cMask" : ["ball" ], "trait" : "line", "curve" : 45, "color" : "FFDD00" },
		
		/* 145 */ { "x" : 760, "y" : -86, "bCoef" : 1.1, "cMask" : ["ball" ], "vis" : false, "curve" : 0 },
		/* 146 */ { "x" : 776, "y" : -86, "bCoef" : 1.1, "cMask" : ["ball" ], "vis" : false, "curve" : 0 },
		/* 147 */ { "x" : 760, "y" : 76, "bCoef" : 1.1, "cMask" : ["ball" ], "vis" : false, "curve" : 0 },
		/* 148 */ { "x" : 777, "y" : 76, "bCoef" : 1.1, "cMask" : ["ball" ], "vis" : false, "curve" : 0 },
		/* 149 */ { "x" : -760, "y" : -86.066816780717, "bCoef" : 1.1, "cMask" : ["ball" ], "vis" : false, "curve" : 0 },
		/* 150 */ { "x" : -776, "y" : -86.066816780717, "bCoef" : 1.1, "cMask" : ["ball" ], "vis" : false, "curve" : 0 },
		/* 151 */ { "x" : -776, "y" : 75.904128092658, "bCoef" : 1.1, "cMask" : ["ball" ], "vis" : false, "curve" : 0 },
		/* 152 */ { "x" : -760, "y" : 75.904128092658, "bCoef" : 1.1, "cMask" : ["ball" ], "vis" : false, "curve" : 0 },
		/* 153 */ { "x" : -700, "y" : -320, "bCoef" : 1.4, "cMask" : ["ball" ], "curve" : 0, "color" : "222223" },
		/* 154 */ { "x" : 700, "y" : -320, "bCoef" : 1.4, "cMask" : ["ball" ], "curve" : 0, "color" : "222223" },
		/* 155 */ { "x" : -700, "y" : 320, "bCoef" : 1.4, "cMask" : ["ball" ], "curve" : 0, "color" : "222223" },
		/* 156 */ { "x" : 700, "y" : 320, "bCoef" : 1.4, "cMask" : ["ball" ], "curve" : 0, "color" : "222223" },
		/* 157 */ { "x" : -682, "y" : -323, "bCoef" : -5, "cMask" : ["ball" ], "color" : "FFFFFF", "vis" : false },
		/* 158 */ { "x" : -682, "y" : -389, "bCoef" : -5, "cMask" : ["ball" ], "vis" : false },
		/* 159 */ { "x" : -682, "y" : 390, "bCoef" : -5, "cMask" : ["ball" ], "color" : "FFFFFF", "vis" : false },
		/* 160 */ { "x" : -682, "y" : 324, "bCoef" : -5, "cMask" : ["ball" ], "vis" : false },
		/* 161 */ { "x" : 682, "y" : 325.00001268704, "bCoef" : -5, "cMask" : ["ball" ], "color" : "FFFFFF", "vis" : false },
		/* 162 */ { "x" : 682, "y" : 390.99998652002, "bCoef" : -5, "cMask" : ["ball" ], "vis" : false },
		/* 163 */ { "x" : 682, "y" : -389.99998731296, "bCoef" : -5, "cMask" : ["ball" ], "color" : "FFFFFF", "vis" : false },
		/* 164 */ { "x" : 682, "y" : -324.00001347998, "bCoef" : -5, "cMask" : ["ball" ], "vis" : false }

	],

	"segments" : [
		{ "v0" : 0, "v1" : 1, "color" : "FFDD00", "trait" : "line", "y" : 206 },
		{ "v0" : 1, "v1" : 3, "color" : "e9cc6e", "trait" : "line", "x" : 840 },
		{ "v0" : 2, "v1" : 3, "color" : "FFDD00", "trait" : "line", "y" : -206 },
		{ "v0" : 4, "v1" : 5, "color" : "004DFF", "trait" : "line", "y" : 150 },
		{ "v0" : 5, "v1" : 7, "color" : "FFDD00", "trait" : "line", "x" : 1030 },
		{ "v0" : 6, "v1" : 7, "color" : "004DFF", "trait" : "line", "y" : -150 },
		{ "v0" : 8, "v1" : 9, "curve" : -130, "color" : "004DFF", "trait" : "line", "x" : 840 },
		{ "v0" : 10, "v1" : 11, "color" : "FFDD00", "trait" : "line", "y" : -206 },
		{ "v0" : 11, "v1" : 13, "color" : "e9cc6e", "trait" : "line", "x" : -840 },
		{ "v0" : 12, "v1" : 13, "color" : "FFDD00", "trait" : "line", "y" : 206 },
		{ "v0" : 14, "v1" : 15, "color" : "F00000", "trait" : "line", "y" : -150 },
		{ "v0" : 15, "v1" : 17, "color" : "FFDD00", "trait" : "line", "x" : -1030 },
		{ "v0" : 16, "v1" : 17, "color" : "F00000", "trait" : "line", "y" : 150 },
		{ "v0" : 18, "v1" : 19, "curve" : -130, "color" : "F00000", "trait" : "line", "x" : -491 },
		{ "v0" : 20, "v1" : 21, "curve" : -180, "color" : "2e2604", "trait" : "line", "x" : 935 },
		{ "v0" : 22, "v1" : 23, "curve" : -180, "color" : "2e2604", "trait" : "line", "x" : -935 },
		{ "v0" : 20, "v1" : 21, "curve" : 180, "color" : "2e2604", "trait" : "line", "x" : 935 },
		{ "v0" : 22, "v1" : 23, "curve" : 180, "color" : "2e2604", "trait" : "line", "x" : -935 },
		{ "v0" : 20, "v1" : 21, "curve" : 90, "color" : "2e2604", "trait" : "line", "x" : 935 },
		{ "v0" : 22, "v1" : 23, "curve" : 90, "color" : "2e2604", "trait" : "line", "x" : -935 },
		{ "v0" : 20, "v1" : 21, "curve" : -90, "color" : "2e2604", "trait" : "line", "x" : 935 },
		{ "v0" : 22, "v1" : 23, "curve" : -90, "color" : "2e2604", "trait" : "line", "x" : -935 },
		{ "v0" : 20, "v1" : 21, "color" : "2e2604", "trait" : "line", "x" : 935 },
		{ "v0" : 22, "v1" : 23, "color" : "2e2604", "trait" : "line", "x" : -935 },
		
		{ "v0" : 25, "v1" : 24, "curve" : 10, "vis" : false, "color" : "FFFFFF", "cMask" : ["ball" ] },
		{ "v0" : 27, "v1" : 26, "curve" : 10, "vis" : false, "color" : "FFFFFF", "cMask" : ["ball" ] },
		{ "v0" : 29, "v1" : 28, "curve" : 10, "vis" : false, "color" : "FFFFFF", "cMask" : ["ball" ] },
		{ "v0" : 31, "v1" : 30, "curve" : 10, "vis" : false, "color" : "FFFFFF", "cMask" : ["ball" ] },
		{ "v0" : 33, "v1" : 32, "curve" : 10, "vis" : false, "color" : "FFFFFF", "cMask" : ["ball" ] },
		{ "v0" : 34, "v1" : 35, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ] },
		{ "v0" : 35, "v1" : 36, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ] },
		{ "v0" : 36, "v1" : 37, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ] },
		
		{ "v0" : 38, "v1" : 39, "trait" : "kickOffBarrier" },
		{ "v0" : 40, "v1" : 41, "trait" : "kickOffBarrier" },
		
		{ "v0" : 42, "v1" : 43, "color" : "2257D2", "bCoef" : 1000000, "cMask" : ["blue" ] },
		{ "v0" : 44, "v1" : 45, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ] },
		{ "v0" : 46, "v1" : 47, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ] },
		{ "v0" : 48, "v1" : 49, "vis" : false, "bCoef" : 1000000, "cMask" : ["red" ] },
		{ "v0" : 50, "v1" : 51, "vis" : false, "bCoef" : 0, "cMask" : ["red" ] },
		{ "v0" : 51, "v1" : 52, "vis" : false, "bCoef" : 0, "cMask" : ["red" ] },
		{ "v0" : 52, "v1" : 53, "vis" : false, "bCoef" : 0, "cMask" : ["red" ] },
		
		{ "v0" : 54, "v1" : 55, "trait" : "kickOffBarrier" },
		{ "v0" : 56, "v1" : 57, "trait" : "kickOffBarrier" },
		
		{ "v0" : 58, "v1" : 59, "color" : "FF2121", "bCoef" : 1000000, "cMask" : ["red" ] },
		{ "v0" : 60, "v1" : 61, "vis" : false, "bCoef" : 0, "cMask" : ["red" ] },
		{ "v0" : 62, "v1" : 63, "vis" : false, "bCoef" : 0, "cMask" : ["red" ] },
		{ "v0" : 64, "v1" : 65, "vis" : false, "bCoef" : 1000000, "cMask" : ["blue" ] },
		
		{ "v0" : 66, "v1" : 67, "curve" : -40, "vis" : true, "color" : "FFDD00", "bCoef" : -4.7, "cMask" : ["ball" ], "trait" : "line", "x" : -730 },
		{ "v0" : 68, "v1" : 69, "curve" : -40, "vis" : true, "color" : "FFDD00", "bCoef" : -4.7, "cMask" : ["ball" ], "trait" : "line", "x" : -730 },
		{ "v0" : 70, "v1" : 71, "curve" : -40, "vis" : true, "color" : "FFDD00", "bCoef" : -4.7, "cMask" : ["ball" ], "trait" : "line", "x" : -730 },
		
		{ "v0" : 75, "v1" : 77, "curve" : 12, "vis" : false, "color" : "FFFFFF", "cMask" : ["ball" ], "trait" : "reargoalNetleft", "x" : -760 },
		
		{ "v0" : 74, "v1" : 75, "curve" : 0, "color" : "F00000", "bCoef" : 1.1, "cMask" : ["ball","red","blue" ], "trait" : "sidegoalNet" },
		{ "v0" : 76, "v1" : 77, "curve" : 0, "color" : "F00000", "bCoef" : 1.1, "cMask" : ["ball","red","blue" ], "trait" : "sidegoalNet" },
		
		{ "v0" : 80, "v1" : 81, "curve" : 12, "vis" : true, "color" : "FFF7F7", "cMask" : ["ball" ], "trait" : "reargoalNetleft", "x" : -760 },
		{ "v0" : 83, "v1" : 85, "curve" : 12, "vis" : false, "color" : "FFFFFF", "cMask" : ["ball" ], "trait" : "reargoalNetleft", "x" : 760 },
		
		{ "v0" : 82, "v1" : 83, "curve" : 0, "color" : "004DFF", "bCoef" : 1.1, "cMask" : ["ball","red","blue" ], "trait" : "sidegoalNet" },
		{ "v0" : 84, "v1" : 85, "curve" : 0, "color" : "004DFF", "bCoef" : 1.1, "cMask" : ["ball","red","blue" ], "trait" : "sidegoalNet" },
		
		{ "v0" : 88, "v1" : 89, "curve" : 12, "vis" : true, "color" : "FFF7F7", "cMask" : ["ball" ], "trait" : "reargoalNetleft", "x" : 760 },
		
		{ "v0" : 90, "v1" : 91, "curve" : 0, "vis" : false, "color" : "585757", "trait" : "kickOffBarrier", "x" : 0 },
		{ "v0" : 92, "v1" : 93, "curve" : 0, "vis" : false, "color" : "585757", "trait" : "kickOffBarrier", "x" : 0 },
		
		{ "v0" : 94, "v1" : 95, "color" : "FFDD00", "trait" : "line", "x" : -840 },
		{ "v0" : 96, "v1" : 97, "color" : "FFDD00", "trait" : "line", "x" : 840 },
		{ "v0" : 98, "v1" : 99, "vis" : true, "color" : "FFDD00", "trait" : "line" },
		{ "v0" : 100, "v1" : 101, "vis" : true, "color" : "FFDD00", "trait" : "line" },
		{ "v0" : 103, "v1" : 104, "curve" : -180, "color" : "FFDD00", "trait" : "line" },
		{ "v0" : 105, "v1" : 106, "curve" : 180, "color" : "FFDD00", "trait" : "line" },
		{ "v0" : 103, "v1" : 104, "curve" : -90, "color" : "FFDD00", "trait" : "line" },
		{ "v0" : 105, "v1" : 106, "curve" : 90, "color" : "FFDD00", "trait" : "line" },
		
		{ "v0" : 107, "v1" : 108, "curve" : 0, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "x" : -10 },
		{ "v0" : 109, "v1" : 110, "curve" : 0, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "trait" : "kickOffBarrier", "x" : 10 },
		{ "v0" : 111, "v1" : 112, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "y" : 5 },
		{ "v0" : 113, "v1" : 114, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "y" : 35 },
		{ "v0" : 115, "v1" : 116, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "y" : -20 },
		{ "v0" : 117, "v1" : 118, "vis" : false, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "y" : -50 },
		{ "v0" : 114, "v1" : 113, "curve" : -129.997900266, "vis" : true, "color" : "FFDD00", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 118, "v1" : 117, "curve" : 103.422024528, "vis" : true, "color" : "FFDD00", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 119, "v1" : 120, "curve" : 64.5746162722, "vis" : true, "color" : "004dff", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "trait" : "kickOffBarrier", "x" : 200 },
		{ "v0" : 121, "v1" : 122, "curve" : -60.1197451124, "vis" : true, "color" : "f73131", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "x" : -200 },
		{ "v0" : 116, "v1" : 112, "curve" : -12, "vis" : true, "color" : "FFDD00", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "x" : -180 },
		{ "v0" : 115, "v1" : 111, "curve" : 12, "vis" : true, "color" : "FFDD00", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "x" : 180 },
		{ "v0" : 123, "v1" : 124, "curve" : 0, "vis" : true, "color" : "FFDD00", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 125, "v1" : 126, "curve" : 0, "vis" : true, "color" : "FFDD00", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		
		{ "v0" : 127, "v1" : 128, "vis" : true, "color" : "FFDD00", "trait" : "line" },
		{ "v0" : 129, "v1" : 130, "curve" : 90, "color" : "FFDD00", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		{ "v0" : 131, "v1" : 132, "curve" : 90, "color" : "FFDD00", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		{ "v0" : 133, "v1" : 134, "curve" : 90, "color" : "FFDD00", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		{ "v0" : 135, "v1" : 136, "curve" : 90, "color" : "FFDD00", "bCoef" : 0, "cMask" : ["wall" ], "trait" : "line" },
		{ "v0" : 137, "v1" : 138, "curve" : 45, "vis" : true, "color" : "FFDD00", "bCoef" : -2.25, "cMask" : ["ball" ], "trait" : "line" },
		{ "v0" : 139, "v1" : 140, "curve" : 45, "vis" : true, "color" : "FFDD00", "bCoef" : -2.25, "cMask" : ["ball" ], "trait" : "line" },
		{ "v0" : 141, "v1" : 142, "curve" : 45, "vis" : true, "color" : "FFDD00", "bCoef" : -2.25, "cMask" : ["ball" ], "trait" : "line" },
		{ "v0" : 143, "v1" : 144, "curve" : 45, "vis" : true, "color" : "FFDD00", "bCoef" : -2.25, "cMask" : ["ball" ], "trait" : "line" },
		
		{ "v0" : 145, "v1" : 146, "curve" : 0, "vis" : false, "color" : "f9f6e8", "bCoef" : 1.1, "cMask" : ["ball" ] },
		{ "v0" : 147, "v1" : 148, "curve" : 0, "vis" : false, "color" : "f9f6e8", "bCoef" : 1.1, "cMask" : ["ball" ] },
		{ "v0" : 149, "v1" : 150, "curve" : 0, "vis" : false, "color" : "f9f6e8", "bCoef" : 1.1, "cMask" : ["ball" ] },
		{ "v0" : 151, "v1" : 152, "curve" : 0, "vis" : false, "color" : "f9f6e8", "bCoef" : 1.1, "cMask" : ["ball" ] },
		
		{ "v0" : 73, "v1" : 72, "curve" : 40, "vis" : true, "color" : "FFDD00", "bCoef" : -4.7, "cMask" : ["ball" ], "trait" : "line" },
		
		{ "v0" : 153, "v1" : 154, "curve" : 0, "vis" : true, "color" : "222223", "bCoef" : 1.4, "cMask" : ["ball" ], "y" : -320 },
		{ "v0" : 155, "v1" : 156, "curve" : 0, "vis" : true, "color" : "222223", "bCoef" : 1.4, "cMask" : ["ball" ] },
		{ "v0" : 158, "v1" : 157, "curve" : 10, "vis" : false, "color" : "FFFFFF", "bCoef" : -5, "cMask" : ["ball" ] },
		{ "v0" : 160, "v1" : 159, "curve" : 10, "vis" : false, "color" : "FFFFFF", "bCoef" : -5, "cMask" : ["ball" ], "x" : -682 },
		{ "v0" : 162, "v1" : 161, "curve" : 10, "vis" : false, "color" : "FFFFFF", "bCoef" : -5, "cMask" : ["ball" ], "x" : 682 },
		{ "v0" : 164, "v1" : 163, "curve" : 10, "vis" : false, "color" : "FFFFFF", "bCoef" : -5, "cMask" : ["ball" ], "x" : 682 }

	],

	"goals" : [
		{ "p0" : [-710,-87 ], "p1" : [-710,76 ], "team" : "red" },
		{ "p0" : [710,77 ], "p1" : [710,-87 ], "team" : "blue" }

	],

	"discs" : [
		{ "radius" : 3.1622776601684, "invMass" : 0, "pos" : [-700,-320 ], "color" : "f3e600", "trait" : "cornerflag" },
		{ "radius" : 3.1622776601684, "invMass" : 0, "pos" : [700,320 ], "color" : "f3e600", "trait" : "cornerflag" },
		{ "radius" : 3.1622776601684, "invMass" : 0, "pos" : [700,-320 ], "color" : "f3e600", "trait" : "cornerflag" },
		{ "radius" : 3.1622776601684, "invMass" : 0, "pos" : [-700,320 ], "color" : "f3e600", "trait" : "cornerflag" },
		
		{ "radius" : 4.8, "pos" : [-702.08569760776,77.724026349663 ], "color" : "f73131", "trait" : "goalPost" },
		{ "radius" : 4.8, "pos" : [-702.08569760776,-87.886715037721 ], "color" : "f73131", "trait" : "goalPost" },
		{ "radius" : 4.8, "pos" : [702.01261034953,-87.251405791383 ], "color" : "004DFF", "trait" : "goalPost" },
		{ "radius" : 4.8, "pos" : [702.57590893252,78.358377607985 ], "color" : "004DFF", "trait" : "goalPost" }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -346, "bCoef" : 0, "trait" : "ballArea" },
		{ "normal" : [0,-1 ], "dist" : -346, "bCoef" : 0, "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -390, "bCoef" : 0 },
		{ "normal" : [0,-1 ], "dist" : -392, "bCoef" : 0 },
		
		{ "normal" : [1,0 ], "dist" : -763, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		{ "normal" : [-1,0 ], "dist" : -763, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		
		{ "normal" : [1,0 ], "dist" : -970, "bCoef" : 0 },
		{ "normal" : [-1,0 ], "dist" : -971, "bCoef" : 0 }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 0, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 5, "invMass" : 0, "bCoef" : 2 },
		"stanchion" : { "radius" : 3, "invMass" : 0, "bCoef" : 3, "cMask" : ["none" ] },
		"cornerflag" : { "radius" : 3, "invMass" : 0, "bCoef" : 0.5, "color" : "FFFF00", "cGroup" : [ ] },
		"reargoalNetleft" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "curve" : 10, "color" : "C7E6BD" },
		"reargoalNetright" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball","red","blue" ], "curve" : -10, "color" : "C7E6BD" },
		"sidegoalNet" : { "vis" : true, "bCoef" : 1, "cMask" : ["ball","red","blue" ], "color" : "C7E6BD" },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] },
		"line" : { "vis" : true, "cMask" : [ ], "color" : "C7E6BD" },
		"tunnel" : { "vis" : true, "cMask" : ["red","blue" ], "color" : "000000" },
		"advertising" : { "vis" : true, "cMask" : ["red","blue" ], "color" : "333333" },
		"teambench" : { "vis" : true, "cMask" : [ ], "color" : "000000" },
		"manager" : { "radius" : 15, "vis" : true, "cMask" : ["red","blue" ], "invMass" : 0, "color" : "333333" },
		"physio" : { "radius" : 15, "vis" : true, "cMask" : ["red","blue" ], "invMass" : 0, "color" : "666666" },
		"redsubs" : { "radius" : 15, "vis" : true, "cMask" : ["red","blue" ], "invMass" : 0, "color" : "E56E56" },
		"bluesubs" : { "radius" : 15, "vis" : true, "cMask" : ["red","blue" ], "invMass" : 0, "color" : "5689E5" }

	}
}`;
var SkateGLH=`
{

	"name" : "Escreva !help para mais informações",

	"width" : 4700,

	"height" : 700,

	"cameraWidth" : 0,

	"cameraHeight" : {
		"x" : 2000,
		"y" : 300

	},

	"maxViewwidth" : 0,

	"cameraFollow" : "player",

	"spawnDistance" : 170,

	"redSpawnPoints" : [
		[ -142, -370
		],
		[ -252, -370
		],
		[ -358, -370
		],
		[ -482, -370
		],
		[ -620, -370
		],
		[ -520, -370
		],
		[ -720, -370
		],
		[ -820, -370
		],
		[ -980, -370
		],
		[ -1038, -370
		],
		[ -1097, -370
		]

	],

	"blueSpawnPoints" : [
		[ 102, -50
		],
		[ 102, 50
		],
		[ 268, 0
		],
		[ 650, 0
		]

	],

	"bg" : { "type" : "grass", "width" : 0, "height" : 0, "kickOffRadius" : 0, "cornerRadius" : 0, "color" : "bebcbe" },

	"vertexes" : [
		/* 0 */ { "cMask" : ["all","wall","ball" ], "x" : -1154, "y" : -312, "cGroup" : ["blue" ], "bCoef" : 0, "trait" : "ballArea", "vis" : true, "color" : "000000" },
		/* 1 */ { "cMask" : ["all","wall","ball" ], "x" : -42, "y" : -312, "cGroup" : ["blue" ], "bCoef" : 0, "trait" : "ballArea", "vis" : true, "color" : "000000" },
		/* 2 */ { "cMask" : ["all","wall","ball" ], "x" : 0, "y" : -274, "curve" : 0, "cGroup" : ["blue" ], "bCoef" : 0, "trait" : "ballArea", "vis" : true, "color" : "000000" },
		/* 3 */ { "cMask" : ["all","wall","ball" ], "x" : 190, "y" : -71, "curve" : 0, "cGroup" : ["blue" ], "bCoef" : 0, "trait" : "ballArea", "vis" : true, "color" : "000000" },
		/* 4 */ { "cMask" : ["all","wall","ball" ], "x" : 433, "y" : -255, "curve" : 0, "cGroup" : ["blue" ], "bCoef" : 0, "trait" : "ballArea", "vis" : true, "color" : "000000" },
		/* 5 */ { "cMask" : ["all","wall","ball" ], "x" : 473, "y" : -312, "curve" : 0, "cGroup" : ["blue" ], "bCoef" : 0, "trait" : "ballArea", "vis" : true, "color" : "000000" },
		
		/* 6 */ { "cMask" : ["all","wall","ball" ], "x" : 843, "y" : -312, "curve" : 0, "cGroup" : ["blue" ], "bCoef" : 0, "color" : "000000" },
		/* 7 */ { "x" : 1165, "y" : -312, "curve" : 0, "color" : "000000" },
		/* 8 */ { "x" : 1262, "y" : -324, "color" : "000000" },
		/* 9 */ { "x" : 1231, "y" : -265, "color" : "000000" },
		/* 10 */ { "x" : 1435, "y" : -203, "color" : "000000" },
		/* 11 */ { "x" : 1468, "y" : -220, "color" : "000000" },
		/* 12 */ { "x" : 1490, "y" : -207, "color" : "000000" },
		/* 13 */ { "x" : 1456, "y" : -185, "color" : "000000" },
		/* 14 */ { "x" : 1667, "y" : -128, "color" : "000000" },
		/* 15 */ { "x" : 1954, "y" : -123 },
		/* 16 */ { "x" : 2183, "y" : -232, "curve" : 0 },
		/* 17 */ { "x" : 2303, "y" : -232, "curve" : 0 },
		/* 18 */ { "x" : 2721, "y" : 122 },
		/* 19 */ { "x" : 3395, "y" : -257, "curve" : 0 },
		/* 20 */ { "x" : 3637, "y" : -257, "curve" : 0 },
		
		/* 21 */ { "x" : 644, "y" : -312, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 22 */ { "x" : 641, "y" : -475, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 23 */ { "x" : 646, "y" : -312, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 24 */ { "x" : 643, "y" : -475, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 25 */ { "x" : 648, "y" : -312, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 26 */ { "x" : 645, "y" : -475, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 27 */ { "x" : 650, "y" : -312, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 28 */ { "x" : 647, "y" : -475, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 29 */ { "x" : 652, "y" : -312, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 30 */ { "x" : 649, "y" : -475, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 31 */ { "x" : 1062, "y" : -312, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 32 */ { "x" : 1059, "y" : -475, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 33 */ { "x" : 1064, "y" : -312, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 34 */ { "x" : 1061, "y" : -475, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 35 */ { "x" : 1066, "y" : -312, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 36 */ { "x" : 1063, "y" : -475, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 37 */ { "x" : 1068, "y" : -312, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 38 */ { "x" : 1065, "y" : -475, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 39 */ { "x" : 1070, "y" : -312, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 40 */ { "x" : 1067, "y" : -475, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 41 */ { "x" : 3559, "y" : -258, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 42 */ { "x" : 3556, "y" : -421, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 43 */ { "x" : 3561, "y" : -258, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 44 */ { "x" : 3558, "y" : -421, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 45 */ { "x" : 3563, "y" : -258, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 46 */ { "x" : 3560, "y" : -421, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 47 */ { "x" : 3565, "y" : -258, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 48 */ { "x" : 3562, "y" : -421, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 49 */ { "x" : 3567, "y" : -258, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 50 */ { "x" : 3564, "y" : -421, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		
		/* 51 */ { "bCoef" : 0, "cMask" : ["all","wall","ball" ], "cGroup" : ["blue" ], "x" : 924, "y" : -336 },
		/* 52 */ { "bCoef" : 0, "cMask" : ["all","wall","ball" ], "cGroup" : ["blue" ], "x" : 999, "y" : -311 },
		/* 53 */ { "x" : 3791, "y" : -3 },
		/* 54 */ { "bCoef" : 0, "cMask" : ["all","wall","ball" ], "cGroup" : ["blue" ], "x" : 4114, "y" : 102 },
		/* 55 */ { "bCoef" : 0, "cMask" : ["all","wall","ball" ], "cGroup" : ["blue" ], "x" : 3594, "y" : 310 },
		/* 56 */ { "bCoef" : 0, "cMask" : ["all","wall","ball" ], "cGroup" : ["blue" ], "x" : 3187, "y" : 306 },
		/* 57 */ { "bCoef" : 0, "cMask" : ["all","wall","ball" ], "cGroup" : ["blue" ], "x" : 2610, "y" : 616, "curve" : 0 },
		/* 58 */ { "bCoef" : 0, "cMask" : ["all","wall","ball" ], "cGroup" : ["blue" ], "x" : 2310, "y" : 618, "curve" : 0 },
		/* 59 */ { "bCoef" : 0, "cMask" : ["all","wall","ball" ], "cGroup" : ["blue" ], "x" : 2189, "y" : 563, "curve" : 0 },
		/* 60 */ { "bCoef" : 0, "cMask" : ["all","wall","ball" ], "cGroup" : ["blue" ], "x" : 1839, "y" : 630, "curve" : 0 },
		
		/* 61 */ { "x" : 2123.9696550779113, "y" : 573.53197527777, "curve" : 0, "color" : "7c7c7c", "trait" : "line" },
		/* 62 */ { "bCoef" : 0, "x" : 2115.8646415997773, "y" : 536.0685336267711, "curve" : 0, "color" : "7c7c7c", "trait" : "line" },
		/* 63 */ { "bCoef" : 0, "x" : 1895.9344268818054, "y" : 572.996851407396, "color" : "7c7c7c", "trait" : "line" },
		/* 64 */ { "bCoef" : 0, "x" : 1904.7371561860116, "y" : 614.3989721042232, "color" : "7c7c7c", "trait" : "line" },
		/* 65 */ { "bCoef" : 0, "x" : 2134.0107421731295, "y" : 558.2432722719454, "color" : "7c7c7c", "trait" : "line" },
		/* 66 */ { "bCoef" : 0, "x" : 1894.7359901390516, "y" : 600.6295087058467, "color" : "7c7c7c", "trait" : "line" },
		/* 67 */ { "x" : 2132.9022644563693, "y" : 546.2528061779419, "color" : "7c7c7c", "trait" : "line" },
		/* 68 */ { "x" : 1891.6581728993772, "y" : 588.9879005248794, "color" : "7c7c7c", "trait" : "line" },
		/* 69 */ { "x" : 3338, "y" : 335, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 70 */ { "x" : 3335, "y" : 172, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 71 */ { "x" : 3340, "y" : 335, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 72 */ { "x" : 3337, "y" : 172, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 73 */ { "x" : 3342, "y" : 335, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 74 */ { "x" : 3339, "y" : 172, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 75 */ { "x" : 3344, "y" : 335, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 76 */ { "x" : 3341, "y" : 172, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 77 */ { "x" : 3346, "y" : 335, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 78 */ { "x" : 3343, "y" : 172, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 79 */ { "x" : 2541, "y" : 616, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 80 */ { "x" : 2538, "y" : 453, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 81 */ { "x" : 2543, "y" : 616, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 82 */ { "x" : 2540, "y" : 453, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 83 */ { "x" : 2545, "y" : 616, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 84 */ { "x" : 2542, "y" : 453, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 85 */ { "x" : 2547, "y" : 616, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 86 */ { "x" : 2544, "y" : 453, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 87 */ { "x" : 2549, "y" : 616, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 88 */ { "x" : 2546, "y" : 453, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 89 */ { "trait" : "line", "x" : 1342, "y" : 630, "cMask" : ["all","wall","ball" ], "bCoef" : 0 },
		/* 90 */ { "bCoef" : 0, "trait" : "line", "x" : 1239, "y" : 586, "curve" : 0, "cMask" : ["all","wall","ball" ] },
		/* 91 */ { "bCoef" : 0, "trait" : "line", "x" : 1078, "y" : 589, "curve" : 0, "cMask" : ["all","wall","ball" ] },
		/* 92 */ { "bCoef" : 0, "trait" : "line", "x" : 791, "y" : 652, "cMask" : ["all","wall","ball" ] },
		/* 93 */ { "bCoef" : 0, "trait" : "line", "x" : -593, "y" : -31, "cMask" : ["all","wall","ball" ] },
		/* 94 */ { "bCoef" : 0, "trait" : "line", "x" : -1151, "y" : -107, "cMask" : ["all","wall","ball" ] },
		/* 95 */ { "x" : 1146, "y" : 588, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 96 */ { "x" : 1143, "y" : 425, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 97 */ { "x" : 1148, "y" : 588, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 98 */ { "x" : 1145, "y" : 425, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 99 */ { "x" : 1150, "y" : 588, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 100 */ { "x" : 1147, "y" : 425, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 101 */ { "x" : 1152, "y" : 588, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 102 */ { "x" : 1149, "y" : 425, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 103 */ { "x" : 1154, "y" : 588, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 104 */ { "x" : 1151, "y" : 425, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 105 */ { "x" : -680, "y" : -32, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 106 */ { "x" : -683, "y" : -195, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 107 */ { "x" : -678, "y" : -32, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 108 */ { "x" : -681, "y" : -195, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 109 */ { "x" : -676, "y" : -32, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 110 */ { "x" : -679, "y" : -195, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 111 */ { "x" : -674, "y" : -32, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 112 */ { "x" : -677, "y" : -195, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 113 */ { "x" : -672, "y" : -32, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		/* 114 */ { "x" : -675, "y" : -195, "color" : "7f553d", "trait" : "line", "bCoef" : 0 },
		
		/* 115 */ { "bCoef" : 0, "cMask" : ["all","wall","ball" ], "cGroup" : ["blue" ], "x" : 2123, "y" : 546, "vis" : false },
		/* 116 */ { "bCoef" : 0, "cMask" : ["all","wall","ball" ], "cGroup" : ["blue" ], "x" : 1901, "y" : 585, "vis" : false },
		
		/* 117 */ { "x" : 3115.992118143382, "y" : 376.1820162376249, "curve" : 0, "color" : "7c7c7c", "trait" : "line" },
		/* 118 */ { "bCoef" : 0, "x" : 3099.0706908565103, "y" : 342.73918351655897, "curve" : 0, "color" : "7c7c7c", "trait" : "line" },
		/* 119 */ { "bCoef" : 0, "x" : 2938.377912946107, "y" : 452.60059678619484, "color" : "7c7c7c", "trait" : "line" },
		/* 120 */ { "bCoef" : 0, "x" : 2953.4615649702714, "y" : 495.4086611761711, "color" : "7c7c7c", "trait" : "line" },
		/* 121 */ { "bCoef" : 0, "x" : 3115.362906305779, "y" : 358.2040948667236, "color" : "7c7c7c", "trait" : "line" },
		/* 122 */ { "bCoef" : 0, "x" : 2941.9250824194696, "y" : 477.55924765727997, "color" : "7c7c7c", "trait" : "line" },
		/* 123 */ { "x" : 3113.7175400111273, "y" : 346.5678436756688, "color" : "7c7c7c", "trait" : "line" },
		/* 124 */ { "x" : 2935.5971002903625, "y" : 467.00410883487194, "color" : "7c7c7c", "trait" : "line" },
		
		/* 125 */ { "bCoef" : 0, "cMask" : ["all","wall","ball" ], "cGroup" : ["blue" ], "x" : 3107.4832672806806, "y" : 352.1521092165041, "vis" : false },
		/* 126 */ { "bCoef" : 0, "cMask" : ["all","wall","ball" ], "cGroup" : ["blue" ], "x" : 2945.6793770427453, "y" : 460.7230072577122, "vis" : false, "_selected" : true }

	],

	"segments" : [
		{ "color" : "000000", "cMask" : ["all","wall","ball" ], "cGroup" : ["blue" ], "v0" : 0, "v1" : 1, "bCoef" : 0, "trait" : "ballArea", "vis" : true, "y" : 0 },
		{ "color" : "000000", "cMask" : ["all","wall","ball" ], "cGroup" : ["blue" ], "v0" : 1, "v1" : 2, "curve" : 48.682179873385024, "bCoef" : 0, "trait" : "ballArea", "vis" : true },
		{ "curve" : -86.41847548677126, "color" : "000000", "cMask" : ["all","wall","ball" ], "v0" : 2, "v1" : 3, "cGroup" : ["blue" ], "bCoef" : 0, "trait" : "ballArea", "vis" : true },
		{ "curve" : -86.41847548677126, "color" : "000000", "cMask" : ["all","wall","ball" ], "v0" : 3, "v1" : 4, "cGroup" : ["blue" ], "bCoef" : 0, "trait" : "ballArea", "vis" : true },
		{ "curve" : 48.45549063590836, "color" : "000000", "cMask" : ["all","wall","ball" ], "v0" : 4, "v1" : 5, "cGroup" : ["blue" ], "bCoef" : 0, "trait" : "ballArea", "vis" : true },
		
		{ "curve" : 0, "color" : "000000", "cMask" : ["all","wall","ball" ], "v0" : 5, "v1" : 6, "cGroup" : ["blue" ], "bCoef" : 0, "y" : 0 },
		{ "curve" : 0, "vis" : true, "color" : "000000", "v0" : 7, "v1" : 8 },
		{ "curve" : 0, "vis" : true, "color" : "000000", "v0" : 8, "v1" : 9, "x" : 1250 },
		{ "curve" : 0, "vis" : true, "color" : "000000", "v0" : 9, "v1" : 10 },
		{ "curve" : -34.57837196949383, "vis" : true, "color" : "000000", "v0" : 10, "v1" : 11 },
		{ "curve" : 0, "vis" : true, "color" : "000000", "v0" : 11, "v1" : 12 },
		{ "curve" : 0, "vis" : true, "color" : "000000", "v0" : 12, "v1" : 13 },
		{ "curve" : 0, "vis" : true, "color" : "000000", "v0" : 13, "v1" : 14 },
		{ "curve" : 0, "vis" : true, "color" : "000000", "v0" : 14, "v1" : 15 },
		{ "curve" : -41.112090439166934, "vis" : true, "color" : "000000", "v0" : 15, "v1" : 16 },
		{ "curve" : 0, "vis" : true, "color" : "000000", "v0" : 16, "v1" : 17 },
		{ "curve" : -63.57087089092077, "vis" : true, "color" : "000000", "v0" : 17, "v1" : 18 },
		{ "curve" : -63.57087089092077, "vis" : true, "color" : "000000", "v0" : 18, "v1" : 19 },
		{ "curve" : 0, "vis" : true, "color" : "000000", "v0" : 19, "v1" : 20, "y" : 55 },
		
		{ "curve" : 0, "vis" : true, "color" : "7f553d", "v0" : 21, "v1" : 22, "x" : 663, "trait" : "line", "bCoef" : 0 },
		{ "curve" : 0, "vis" : true, "color" : "7f553d", "v0" : 23, "v1" : 24, "x" : 665, "trait" : "line", "bCoef" : 0 },
		{ "curve" : 0, "vis" : true, "color" : "7f553d", "v0" : 25, "v1" : 26, "x" : 667, "trait" : "line", "bCoef" : 0 },
		{ "curve" : 0, "vis" : true, "color" : "7f553d", "v0" : 27, "v1" : 28, "x" : 669, "trait" : "line", "bCoef" : 0 },
		{ "curve" : 0, "vis" : true, "color" : "7f553d", "v0" : 29, "v1" : 30, "x" : 671, "trait" : "line", "bCoef" : 0 },
		{ "curve" : 0, "vis" : true, "color" : "7f553d", "v0" : 31, "v1" : 32, "x" : 663, "trait" : "line", "bCoef" : 0 },
		{ "curve" : 0, "vis" : true, "color" : "7f553d", "v0" : 33, "v1" : 34, "x" : 665, "trait" : "line", "bCoef" : 0 },
		{ "curve" : 0, "vis" : true, "color" : "7f553d", "v0" : 35, "v1" : 36, "x" : 667, "trait" : "line", "bCoef" : 0 },
		{ "curve" : 0, "vis" : true, "color" : "7f553d", "v0" : 37, "v1" : 38, "x" : 669, "trait" : "line", "bCoef" : 0 },
		{ "curve" : 0, "vis" : true, "color" : "7f553d", "v0" : 39, "v1" : 40, "x" : 671, "trait" : "line", "bCoef" : 0 },
		{ "curve" : 0, "vis" : true, "color" : "7f553d", "v0" : 41, "v1" : 42, "x" : 663, "trait" : "line", "bCoef" : 0 },
		{ "curve" : 0, "vis" : true, "color" : "7f553d", "v0" : 43, "v1" : 44, "x" : 665, "trait" : "line", "bCoef" : 0 },
		{ "curve" : 0, "vis" : true, "color" : "7f553d", "v0" : 45, "v1" : 46, "x" : 667, "trait" : "line", "bCoef" : 0 },
		{ "curve" : 0, "vis" : true, "color" : "7f553d", "v0" : 47, "v1" : 48, "x" : 669, "trait" : "line", "bCoef" : 0 },
		{ "curve" : 0, "vis" : true, "color" : "7f553d", "v0" : 49, "v1" : 50, "x" : 671, "trait" : "line", "bCoef" : 0 },
		
		{ "curve" : -28.106919494620193, "color" : "000000", "bCoef" : 0, "cMask" : ["all","wall","ball" ], "cGroup" : ["blue" ], "v0" : 6, "v1" : 51 },
		{ "curve" : -15.070127446656244, "color" : "000000", "bCoef" : 0, "cMask" : ["all","wall","ball" ], "cGroup" : ["blue" ], "v0" : 51, "v1" : 52 },
		{ "curve" : 0, "color" : "000000", "bCoef" : 0, "cMask" : ["all","wall","ball" ], "cGroup" : ["blue" ], "v0" : 52, "v1" : 7 },
		{ "curve" : 0, "vis" : true, "color" : "000000", "v0" : 20, "v1" : 53, "x" : 3656 },
		{ "curve" : 0, "vis" : true, "color" : "000000", "bCoef" : 0, "cMask" : ["all","wall","ball" ], "cGroup" : ["blue" ], "v0" : 54, "v1" : 55 },
		{ "curve" : 32.96271779020043, "vis" : true, "color" : "000000", "bCoef" : 0, "cMask" : ["all","wall","ball" ], "cGroup" : ["blue" ], "v0" : 55, "v1" : 56 },
		{ "curve" : 38.820700732018715, "vis" : true, "color" : "000000", "bCoef" : 0, "cMask" : ["all","wall","ball" ], "cGroup" : ["blue" ], "v0" : 56, "v1" : 57 },
		{ "curve" : 0, "vis" : true, "color" : "000000", "bCoef" : 0, "cMask" : ["all","wall","ball" ], "cGroup" : ["blue" ], "v0" : 57, "v1" : 58 },
		{ "curve" : 47.54962924972958, "vis" : true, "color" : "000000", "bCoef" : 0, "cMask" : ["all","wall","ball" ], "cGroup" : ["blue" ], "v0" : 58, "v1" : 59 },
		{ "curve" : 0, "vis" : true, "color" : "000000", "bCoef" : 0, "cMask" : ["all","wall","ball" ], "cGroup" : ["blue" ], "v0" : 59, "v1" : 60 },
		
		{ "curve" : 0, "vis" : true, "color" : "7c7c7c", "bCoef" : 0, "v0" : 61, "v1" : 62, "x" : 2127, "trait" : "line" },
		{ "curve" : 0, "vis" : true, "color" : "7c7c7c", "bCoef" : 0, "v0" : 63, "v1" : 64, "x" : 1911, "trait" : "line" },
		{ "curve" : 0, "vis" : true, "color" : "7c7c7c", "bCoef" : 0, "v0" : 65, "v1" : 66, "y" : 550, "trait" : "line" },
		{ "curve" : 0, "vis" : true, "color" : "7c7c7c", "bCoef" : 0, "v0" : 67, "v1" : 68, "y" : 555, "trait" : "line" },
		{ "curve" : 0, "vis" : true, "color" : "7f553d", "v0" : 69, "v1" : 70, "x" : 663, "trait" : "line", "bCoef" : 0 },
		{ "curve" : 0, "vis" : true, "color" : "7f553d", "v0" : 71, "v1" : 72, "x" : 665, "trait" : "line", "bCoef" : 0 },
		{ "curve" : 0, "vis" : true, "color" : "7f553d", "v0" : 73, "v1" : 74, "x" : 667, "trait" : "line", "bCoef" : 0 },
		{ "curve" : 0, "vis" : true, "color" : "7f553d", "v0" : 75, "v1" : 76, "x" : 669, "trait" : "line", "bCoef" : 0 },
		{ "curve" : 0, "vis" : true, "color" : "7f553d", "v0" : 77, "v1" : 78, "x" : 671, "trait" : "line", "bCoef" : 0 },
		{ "curve" : 0, "vis" : true, "color" : "7f553d", "v0" : 79, "v1" : 80, "x" : 663, "trait" : "line", "bCoef" : 0 },
		{ "curve" : 0, "vis" : true, "color" : "7f553d", "v0" : 81, "v1" : 82, "x" : 665, "trait" : "line", "bCoef" : 0 },
		{ "curve" : 0, "vis" : true, "color" : "7f553d", "v0" : 83, "v1" : 84, "x" : 667, "trait" : "line", "bCoef" : 0 },
		{ "curve" : 0, "vis" : true, "color" : "7f553d", "v0" : 85, "v1" : 86, "x" : 669, "trait" : "line", "bCoef" : 0 },
		{ "curve" : 0, "vis" : true, "color" : "7f553d", "v0" : 87, "v1" : 88, "x" : 671, "trait" : "line", "bCoef" : 0 },
		{ "curve" : 0, "vis" : true, "trait" : "line", "v0" : 60, "v1" : 89, "y" : 630, "cMask" : ["all","wall","ball" ], "bCoef" : 0 },
		{ "curve" : 22.619864948040416, "vis" : true, "bCoef" : 0, "trait" : "line", "v0" : 89, "v1" : 90, "cMask" : ["all","wall","ball" ] },
		{ "curve" : 0, "vis" : true, "bCoef" : 0, "trait" : "line", "v0" : 90, "v1" : 91, "cMask" : ["all","wall","ball" ] },
		{ "curve" : 16.248833113725272, "vis" : true, "bCoef" : 0, "trait" : "line", "v0" : 91, "v1" : 92, "cMask" : ["all","wall","ball" ] },
		{ "curve" : 24.80193602076746, "vis" : true, "bCoef" : 0, "trait" : "line", "v0" : 92, "v1" : 93, "cMask" : ["all","wall","ball" ] },
		{ "curve" : 16.248833113725272, "vis" : true, "bCoef" : 0, "trait" : "line", "v0" : 93, "v1" : 94, "cMask" : ["all","wall","ball" ] },
		{ "curve" : 0, "vis" : true, "color" : "7f553d", "v0" : 95, "v1" : 96, "x" : 663, "trait" : "line", "bCoef" : 0 },
		{ "curve" : 0, "vis" : true, "color" : "7f553d", "v0" : 97, "v1" : 98, "x" : 665, "trait" : "line", "bCoef" : 0 },
		{ "curve" : 0, "vis" : true, "color" : "7f553d", "v0" : 99, "v1" : 100, "x" : 667, "trait" : "line", "bCoef" : 0 },
		{ "curve" : 0, "vis" : true, "color" : "7f553d", "v0" : 101, "v1" : 102, "x" : 669, "trait" : "line", "bCoef" : 0 },
		{ "curve" : 0, "vis" : true, "color" : "7f553d", "v0" : 103, "v1" : 104, "x" : 671, "trait" : "line", "bCoef" : 0 },
		{ "curve" : 0, "vis" : true, "color" : "7f553d", "v0" : 105, "v1" : 106, "x" : 663, "trait" : "line", "bCoef" : 0 },
		{ "curve" : 0, "vis" : true, "color" : "7f553d", "v0" : 107, "v1" : 108, "x" : 665, "trait" : "line", "bCoef" : 0 },
		{ "curve" : 0, "vis" : true, "color" : "7f553d", "v0" : 109, "v1" : 110, "x" : 667, "trait" : "line", "bCoef" : 0 },
		{ "curve" : 0, "vis" : true, "color" : "7f553d", "v0" : 111, "v1" : 112, "x" : 669, "trait" : "line", "bCoef" : 0 },
		{ "curve" : 0, "vis" : true, "color" : "7f553d", "v0" : 113, "v1" : 114, "x" : 671, "trait" : "line", "bCoef" : 0 },
		
		{ "curve" : 0, "vis" : false, "color" : "000000", "bCoef" : 0, "cMask" : ["all","wall","ball" ], "cGroup" : ["blue" ], "v0" : 115, "v1" : 116 },
		
		{ "curve" : 0, "vis" : true, "color" : "7c7c7c", "bCoef" : 0, "v0" : 117, "v1" : 118, "x" : 2127, "trait" : "line" },
		{ "curve" : 0, "vis" : true, "color" : "7c7c7c", "bCoef" : 0, "v0" : 119, "v1" : 120, "x" : 1911, "trait" : "line" },
		{ "curve" : 13.927371815539274, "vis" : true, "color" : "7c7c7c", "bCoef" : 0, "v0" : 121, "v1" : 122, "y" : 550, "trait" : "line" },
		{ "curve" : 15.697313960115762, "vis" : true, "color" : "7c7c7c", "bCoef" : 0, "v0" : 123, "v1" : 124, "y" : 555, "trait" : "line" },
		
		{ "curve" : 11.290184632348664, "vis" : false, "color" : "000000", "bCoef" : 0, "cMask" : ["all","wall","ball" ], "cGroup" : ["blue" ], "v0" : 125, "v1" : 126 }

	],

	"goals" : [
		

	],

	"discs" : [
		{ "radius" : 10, "pos" : [-524,-325 ], "cMask" : ["wall","red","all" ], "cGroup" : ["kick","ball" ], "color" : "ffce00", "gravity" : [0,0.04 ], "invMass" : 1 },
		{ "radius" : 10, "pos" : [-476,-326 ], "cMask" : ["wall","red","all" ], "cGroup" : ["kick","ball" ], "color" : "ffce00", "gravity" : [0,0.04 ], "invMass" : 1 },
		{ "radius" : 10, "pos" : [-401,-325 ], "cMask" : ["wall","red","all" ], "cGroup" : ["kick","ball" ], "color" : "9b8377", "gravity" : [0,0.04 ], "invMass" : 1 },
		{ "radius" : 10, "pos" : [-353,-326 ], "cMask" : ["wall","red","all" ], "cGroup" : ["kick","ball" ], "color" : "9b8377", "gravity" : [0,0.04 ], "invMass" : 1 },
		{ "radius" : 10, "pos" : [-295,-325 ], "cMask" : ["wall","red","all" ], "cGroup" : ["kick","ball" ], "color" : "9b8377", "gravity" : [0,0.04 ], "invMass" : 1 },
		{ "radius" : 10, "pos" : [-247,-326 ], "cMask" : ["wall","red","all" ], "cGroup" : ["kick","ball" ], "color" : "9b8377", "gravity" : [0,0.04 ], "invMass" : 1 },
		{ "radius" : 10, "pos" : [-185,-325 ], "cMask" : ["wall","red","all" ], "cGroup" : ["kick","ball" ], "color" : "d8e0d1", "gravity" : [0,0.04 ] },
		{ "radius" : 10, "pos" : [-137,-326 ], "cMask" : ["wall","red","all" ], "cGroup" : ["kick","ball" ], "color" : "d8e0d1", "gravity" : [0,0.04 ], "invMass" : 1 },
		
		{ "radius" : 22.02271554554524, "pos" : [652,-528 ], "color" : "82b71e", "trait" : "line" },
		{ "radius" : 30.083217912982647, "pos" : [616,-480 ], "color" : "82b71e", "trait" : "line" },
		{ "color" : "82b71e", "pos" : [614,-519 ], "radius" : 27.313000567495326, "trait" : "line" },
		{ "color" : "82b71e", "pos" : [647,-460 ], "radius" : 27.784887978899608, "trait" : "line" },
		{ "color" : "82b71e", "pos" : [679,-486 ], "radius" : 33.97057550292606, "trait" : "line" },
		{ "radius" : 35.4400902933387, "pos" : [665,-504 ], "color" : "82b71e", "trait" : "line" },
		{ "radius" : 22.02271554554524, "pos" : [1070,-528 ], "color" : "82b71e", "trait" : "line" },
		{ "radius" : 30.083217912982647, "pos" : [1034,-480 ], "color" : "82b71e", "trait" : "line" },
		{ "color" : "82b71e", "pos" : [1032,-519 ], "radius" : 27.313000567495326, "trait" : "line" },
		{ "color" : "82b71e", "pos" : [1065,-460 ], "radius" : 27.784887978899608, "trait" : "line" },
		{ "color" : "82b71e", "pos" : [1097,-486 ], "radius" : 33.97057550292606, "trait" : "line" },
		{ "radius" : 35.4400902933387, "pos" : [1083,-504 ], "color" : "82b71e", "trait" : "line" },
		{ "radius" : 22.02271554554524, "pos" : [3567,-474 ], "color" : "82b71e", "trait" : "line" },
		{ "radius" : 30.083217912982647, "pos" : [3531,-426 ], "color" : "82b71e", "trait" : "line" },
		{ "color" : "82b71e", "pos" : [3529,-465 ], "radius" : 27.313000567495326, "trait" : "line" },
		{ "color" : "82b71e", "pos" : [3562,-406 ], "radius" : 27.784887978899608, "trait" : "line" },
		{ "color" : "82b71e", "pos" : [3594,-432 ], "radius" : 33.97057550292606, "trait" : "line" },
		{ "radius" : 35.4400902933387, "pos" : [3580,-450 ], "color" : "82b71e", "trait" : "line" },
		
		{ "radius" : 10, "pos" : [-1003,-325 ], "cMask" : ["wall","red","all" ], "cGroup" : ["kick","ball" ], "color" : "cafd00", "gravity" : [0,0.04 ], "invMass" : 1 },
		{ "radius" : 10, "pos" : [-955,-326 ], "cMask" : ["wall","red","all" ], "cGroup" : ["kick","ball" ], "color" : "cafd00", "gravity" : [0,0.04 ], "invMass" : 1 },
		{ "radius" : 10, "pos" : [-880,-325 ], "cMask" : ["wall","red","all" ], "cGroup" : ["kick","ball" ], "color" : "d4362d", "gravity" : [0,0.04 ], "invMass" : 1 },
		{ "radius" : 10, "pos" : [-832,-326 ], "cMask" : ["wall","red","all" ], "cGroup" : ["kick","ball" ], "color" : "d4362d", "gravity" : [0,0.04 ], "invMass" : 1 },
		{ "radius" : 10, "pos" : [-774,-325 ], "cMask" : ["wall","red","all" ], "cGroup" : ["kick","ball" ], "color" : "face00", "gravity" : [0,0.04 ], "invMass" : 1 },
		{ "radius" : 10, "pos" : [-726,-326 ], "cMask" : ["wall","red","all" ], "cGroup" : ["kick","ball" ], "color" : "face00", "gravity" : [0,0.04 ], "invMass" : 1 },
		{ "radius" : 10, "pos" : [-664,-325 ], "cMask" : ["wall","red","all" ], "cGroup" : ["kick","ball" ], "color" : "e9f4fa", "gravity" : [0,0.04 ] },
		{ "radius" : 10, "pos" : [-616,-326 ], "cMask" : ["wall","red","all" ], "cGroup" : ["kick","ball" ], "color" : "e9f4fa", "gravity" : [0,0.04 ], "invMass" : 1 },
		
		{ "radius" : 22.02271554554524, "pos" : [3346,119 ], "color" : "82b71e", "trait" : "line" },
		{ "radius" : 30.083217912982647, "pos" : [3310,167 ], "color" : "82b71e", "trait" : "line" },
		{ "color" : "82b71e", "pos" : [3308,128 ], "radius" : 27.313000567495326, "trait" : "line" },
		{ "color" : "82b71e", "pos" : [3341,187 ], "radius" : 27.784887978899608, "trait" : "line" },
		{ "color" : "82b71e", "pos" : [3373,161 ], "radius" : 33.97057550292606, "trait" : "line" },
		{ "radius" : 35.4400902933387, "pos" : [3359,143 ], "color" : "82b71e", "trait" : "line" },
		{ "radius" : 22.02271554554524, "pos" : [2549,400 ], "color" : "82b71e", "trait" : "line" },
		{ "radius" : 30.083217912982647, "pos" : [2513,448 ], "color" : "82b71e", "trait" : "line" },
		{ "color" : "82b71e", "pos" : [2511,409 ], "radius" : 27.313000567495326, "trait" : "line" },
		{ "color" : "82b71e", "pos" : [2544,468 ], "radius" : 27.784887978899608, "trait" : "line" },
		{ "color" : "82b71e", "pos" : [2576,442 ], "radius" : 33.97057550292606, "trait" : "line" },
		{ "radius" : 35.4400902933387, "pos" : [2562,424 ], "color" : "82b71e", "trait" : "line" },
		{ "radius" : 22.02271554554524, "pos" : [1154,372 ], "color" : "82b71e", "trait" : "line" },
		{ "radius" : 30.083217912982647, "pos" : [1118,420 ], "color" : "82b71e", "trait" : "line" },
		{ "color" : "82b71e", "pos" : [1116,381 ], "radius" : 27.313000567495326, "trait" : "line" },
		{ "color" : "82b71e", "pos" : [1149,440 ], "radius" : 27.784887978899608, "trait" : "line" },
		{ "color" : "82b71e", "pos" : [1181,414 ], "radius" : 33.97057550292606, "trait" : "line" },
		{ "radius" : 35.4400902933387, "pos" : [1167,396 ], "color" : "82b71e", "trait" : "line" },
		{ "radius" : 22.02271554554524, "pos" : [-672,-248 ], "color" : "82b71e", "trait" : "line" },
		{ "radius" : 30.083217912982647, "pos" : [-708,-200 ], "color" : "82b71e", "trait" : "line" },
		{ "color" : "82b71e", "pos" : [-710,-239 ], "radius" : 27.313000567495326, "trait" : "line" },
		{ "color" : "82b71e", "pos" : [-677,-180 ], "radius" : 27.784887978899608, "trait" : "line" },
		{ "color" : "82b71e", "pos" : [-645,-206 ], "radius" : 33.97057550292606, "trait" : "line" },
		{ "radius" : 35.4400902933387, "pos" : [-659,-224 ], "color" : "82b71e", "trait" : "line" }

	],

	"joints" : [
		{ "d0" : 1, "d1" : 2, "length" : 46, "strength" : "rigid", "color" : "e6030e",  "cMask" : ["red"], "bCoef" : 0 },
		{ "d0" : 3, "d1" : 4, "length" : 46, "strength" : "rigid", "color" : "c3986b",  "cMask" : ["red"], "bCoef" : 0  },
		{ "d0" : 5, "d1" : 6, "length" : 46, "strength" : "rigid", "color" : "4c4c4e",  "cMask" : ["red"], "bCoef" : 0 },
		{ "d0" : 7, "d1" : 8, "length" : 46, "strength" : "rigid", "color" : "0a1c2a",  "cMask" : ["red"], "bCoef" : 0 },
		{ "d0" : 27, "d1" : 28, "length" : 46, "strength" : "rigid", "color" : "262221",  "cMask" : ["red"], "bCoef" : 0 },
		{ "d0" : 29, "d1" : 30, "length" : 46, "strength" : "rigid", "color" : "363636",  "cMask" : ["red"], "bCoef" : 0 },
		{ "d0" : 31, "d1" : 32, "length" : 46, "strength" : "rigid", "color" : "fa8100",  "cMask" : ["red"], "bCoef" : 0 },
		{ "d0" : 33, "d1" : 34, "length" : 46, "strength" : "rigid", "color" : "89e8c8",  "cMask" : ["red"], "bCoef" : 0 }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -625, "bCoef" : 1, "trait" : "ballArea", "vis" : false, "curve" : 0 },
		{ "normal" : [0,-1 ], "dist" : -657, "bCoef" : 1, "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -619, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -670, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -1153, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -4115, "bCoef" : 0.1 },
		
		{ "normal" : [1,0 ], "dist" : -1154, "bCoef" : 0.1, "trait" : "ballArea", "vis" : false, "curve" : 0 },
		{ "normal" : [-1,0 ], "dist" : -4114, "bCoef" : 0.1, "trait" : "ballArea", "vis" : false, "curve" : 0 }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] },
		"line" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] }

	},

	"playerPhysics" : {
		"bCoef" : 0,
		"radius" : 24,
		"acceleration" : 0.7,
		"invMass" : 0.5,
		"damping" : 0.9,
		"kickingAcceleration" : 0.7,
		"kickStrength" : 5,
		"kickback" : 0,
		"cGroup" : [ "red", "blue"
		],
		"gravity" : [ 0, 0.18
		],
		"kickingDamping" : 0.96

	},

	"ballPhysics" : {
		"radius" : 0,
		"bCoef" : 0,
		"cMask" : [ "all"
		],
		"invMass" : 1,
		"damping" : 2,
		"gravity" : [ 0, 0.4
		],
		"color" : "ffffff",
		"cGroup" : [ "ball"
		]

	}
}`;
var BigGLH=`
{

	"name" : "Escreva !help para mais informações",

	"width" : 900,

	"height" : 550,

	"bg" : { "type" : "grass", "width" : 550, "height" : 240, "color" : "658456" },

	"vertexes" : [
		/* 0 */ { "x" : -550, "y" : 240, "cMask" : ["ball" ] },
		/* 1 */ { "x" : -550, "y" : 80, "cMask" : ["ball" ] },
		/* 2 */ { "x" : -550, "y" : -80, "cMask" : ["ball" ] },
		/* 3 */ { "x" : -550, "y" : -240, "cMask" : ["ball" ] },
		/* 4 */ { "x" : 550, "y" : 240, "cMask" : ["ball" ] },
		/* 5 */ { "x" : 550, "y" : 80, "cMask" : ["ball" ] },
		/* 6 */ { "x" : 550, "y" : -80, "cMask" : ["ball" ] },
		/* 7 */ { "x" : 550, "y" : -240, "cMask" : ["ball" ] },
		/* 8 */ { "x" : 0, "y" : 550, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 9 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 10 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 11 */ { "x" : 0, "y" : -550, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 12 */ { "x" : -610, "y" : -60, "bCoef" : 0.5, "cMask" : ["ball" ] },
		/* 13 */ { "x" : -610, "y" : 60, "bCoef" : 0.5, "cMask" : ["ball" ] },
		/* 14 */ { "x" : 610, "y" : -60, "bCoef" : 0.5, "cMask" : ["ball" ] },
		/* 15 */ { "x" : 610, "y" : 60, "bCoef" : 0.5, "cMask" : ["ball" ] },
		/* 16 */ { "x" : 0, "y" : 240, "cMask" : [ ] },
		/* 17 */ { "x" : 0, "y" : -240, "cMask" : [ ] },
		/* 18 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 19 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		/* 20 */ { "x" : -29.768604220659014, "y" : 283.83575883575884, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		/* 21 */ { "x" : -44.53980007404665, "y" : 283.83575883575884, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		/* 22 */ { "x" : -66.82769914276764, "y" : 282.4178794178794, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		/* 23 */ { "x" : -30.33672713809699, "y" : 304.3950103950104, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		/* 24 */ { "x" : -16.273205893659373, "y" : 295.7993050521786, "curve" : 0, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		/* 25 */ { "x" : -7.083545614580096, "y" : 306.18048818048817, "curve" : 0, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		/* 26 */ { "x" : 3.12718802884131, "y" : 306.18048818048817, "curve" : 0, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		/* 27 */ { "x" : 12.852450481303222, "y" : 260.1228271596088, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		/* 28 */ { "x" : 13.46030818612154, "y" : 306.18048818048817, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		/* 29 */ { "x" : 14.068165890939863, "y" : 282.68703552996317, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		/* 30 */ { "x" : 34.73532785476279, "y" : 282.14808477144004, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		/* 31 */ { "x" : 57.97265923418004, "y" : 306.18048818048817, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		/* 32 */ { "x" : 84.09858713338295, "y" : 306.18048818048817, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		/* 33 */ { "x" : 91.49271767089321, "y" : 303.27927216245575, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		/* 34 */ { "x" : 101.35155838757353, "y" : 263.60413024854614, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		/* 35 */ { "x" : 64.38090570002227, "y" : 262.34460193381886, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		/* 36 */ { "x" : 56.98677516251203, "y" : 265.4934227206371, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		/* 37 */ { "x" : 48.60676055333373, "y" : 306.18048818048817, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		/* 38 */ { "x" : 79.16916677504278, "y" : 273.68035676636447, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		/* 39 */ { "x" : 84.59152916921697, "y" : 288.7946965430919, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		/* 40 */ { "x" : -16.273205893659373, "y" : 260.1228271596088, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		/* 41 */ { "x" : 35.34318555958111, "y" : 260.1228271596088, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		/* 42 */ { "x" : 35.95104326439943, "y" : 306.18048818048817, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		/* 43 */ { "x" : 68.9392774017737, "y" : 277.93035476475785, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		/* 44 */ { "x" : 71.40398758094378, "y" : 290.52563791203073, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		/* 45 */ { "x" : 75.56352154072161, "y" : 276.04106229266694, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		/* 46 */ { "x" : 78.5211737557257, "y" : 289.8958737546671, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		/* 47 */ { "x" : 72.32892496298916, "y" : 284.85776049575793, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		/* 48 */ { "x" : 78.24422939299737, "y" : 282.968468023667, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		/* 49 */ { "x" : -53.0956340956341, "y" : 260.1228271596088, "curve" : 0, "_selected" : true, "cMask" : ["ball" ] },
		/* 50 */ { "x" : -38.91683991683992, "y" : 260.1228271596088, "curve" : 0, "_selected" : true, "cMask" : ["ball" ] }

	],

	"segments" : [
		{ "v0" : 17, "v1" : 19, "color" : "C2E9BA", "cMask" : [ ] },
		{ "v0" : 19, "v1" : 18, "color" : "C2E9BA", "cMask" : [ ] },
		{ "v0" : 18, "v1" : 16, "color" : "C2E9BA", "cMask" : [ ] },
		{ "v0" : 1, "v1" : 2, "color" : "C2E9BA", "cMask" : [ ] },
		{ "v0" : 5, "v1" : 6, "color" : "C2E9BA", "cMask" : [ ] },
		{ "v0" : 8, "v1" : 9, "vis" : false, "color" : "C2E9BA", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 9, "v1" : 10, "curve" : 180, "color" : "C2E9BA", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 10, "v1" : 9, "curve" : 180, "color" : "C2E9BA", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO" ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 18, "v1" : 19, "curve" : 180, "color" : "C2E9BA", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["blueKO" ], "curveF" : 6.123233995736766e-17 },
		{ "v0" : 10, "v1" : 11, "vis" : false, "color" : "C2E9BA", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] },
		{ "v0" : 0, "v1" : 1, "color" : "C2E9BA", "cMask" : ["ball" ], "bias" : -100 },
		{ "v0" : 2, "v1" : 3, "color" : "C2E9BA", "cMask" : ["ball" ], "bias" : -100 },
		{ "v0" : 4, "v1" : 5, "color" : "C2E9BA", "cMask" : ["ball" ], "bias" : 100 },
		{ "v0" : 6, "v1" : 7, "color" : "C2E9BA", "cMask" : ["ball" ], "bias" : 100 },
		{ "v0" : 0, "v1" : 4, "color" : "C2E9BA", "cMask" : ["ball" ], "bias" : 100 },
		{ "v0" : 3, "v1" : 7, "color" : "C2E9BA", "cMask" : ["ball" ], "bias" : -100 },
		{ "v0" : 1, "v1" : 13, "curve" : 89.99999999999999, "vis" : false, "color" : "C2E9BA", "bCoef" : 0.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "curveF" : 1.0000000000000002 },
		{ "v0" : 12, "v1" : 13, "vis" : false, "color" : "C2E9BA", "bCoef" : 0.5, "cMask" : ["ball" ], "cGroup" : ["ball" ] },
		{ "v0" : 12, "v1" : 2, "curve" : 89.99999999999999, "vis" : false, "color" : "C2E9BA", "bCoef" : 0.5, "cMask" : ["ball" ], "cGroup" : ["ball" ], "curveF" : 1.0000000000000002 },
		{ "v0" : 15, "v1" : 5, "curve" : 89.99999999999999, "vis" : false, "color" : "C2E9BA", "cMask" : ["ball" ], "cGroup" : ["ball" ], "curveF" : 1.0000000000000002 },
		{ "v0" : 14, "v1" : 15, "vis" : false, "color" : "C2E9BA", "cMask" : ["ball" ], "cGroup" : ["ball" ] },
		{ "v0" : 6, "v1" : 14, "curve" : 89.99999999999999, "vis" : false, "color" : "C2E9BA", "cMask" : ["ball" ], "cGroup" : ["ball" ], "curveF" : 1.0000000000000002 },
		{ "v0" : 20, "v1" : 21, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		{ "v0" : 20, "v1" : 22, "curve" : 199.84976430225004, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		{ "curve" : 0, "v0" : 20, "v1" : 23, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		{ "curve" : -90.23053808524419, "v0" : 24, "v1" : 25, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		{ "curve" : 0, "v0" : 25, "v1" : 26, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		{ "curve" : 0, "v0" : 27, "v1" : 28, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		{ "curve" : 0, "v0" : 29, "v1" : 30, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		{ "curve" : 0, "v0" : 31, "v1" : 32, "color" : "C2E9BA", "y" : 347.51851851851853, "_selected" : true, "cMask" : ["ball" ] },
		{ "curve" : -40.31363094108369, "v0" : 32, "v1" : 33, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		{ "curve" : 0, "v0" : 33, "v1" : 34, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		{ "curve" : 0, "v0" : 34, "v1" : 35, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		{ "curve" : -12.443869458108697, "v0" : 35, "v1" : 36, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		{ "curve" : 0, "v0" : 36, "v1" : 37, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		{ "curve" : 0, "v0" : 37, "v1" : 31, "color" : "C2E9BA", "y" : 347.51851851851853, "_selected" : true, "cMask" : ["ball" ] },
		{ "curve" : -275.7481276737362, "v0" : 38, "v1" : 39, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		{ "curve" : -72.57586441321521, "v0" : 39, "v1" : 38, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		{ "v0" : 24, "v1" : 40, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		{ "curve" : 0, "v0" : 41, "v1" : 42, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		{ "curve" : 43.30136262581911, "v0" : 43, "v1" : 44, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		{ "curve" : 37.069696463287194, "v0" : 45, "v1" : 46, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		{ "curve" : 0, "v0" : 47, "v1" : 48, "color" : "C2E9BA", "_selected" : true, "cMask" : ["ball" ] },
		{ "curve" : 65.96742541763024, "color" : "C2E9BA", "v0" : 22, "v1" : 49, "_selected" : true, "cMask" : ["ball" ] },
		{ "curve" : 0, "color" : "C2E9BA", "v0" : 49, "v1" : 50, "y" : 282.5515538527033, "_selected" : true, "cMask" : ["ball" ] }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -550, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -550, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -900, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -900, "bCoef" : 0.1 },
		{ "normal" : [0,1 ], "dist" : -247, "cMask" : ["ball" ] },
		{ "normal" : [0,-1 ], "dist" : -247, "cMask" : ["ball" ] }

	],

	"goals" : [
		{ "p0" : [-550,80 ], "p1" : [-550,-80 ], "team" : "red" },
		{ "p0" : [550,80 ], "p1" : [550,-80 ], "team" : "blue" }

	],

	"discs" : [
		{ "cGroup" : ["ball","kick","score" ] },
		{ "radius" : 8, "invMass" : 0, "pos" : [-550,80 ], "color" : "FFA8A8" },
		{ "radius" : 8, "invMass" : 0, "pos" : [-550,-80 ], "color" : "FFA8A8" },
		{ "radius" : 8, "invMass" : 0, "pos" : [550,80 ], "color" : "aaaaff" },
		{ "radius" : 8, "invMass" : 0, "pos" : [550,-80 ], "color" : "aaaaff" },
		{ "radius" : 0.01, "invMass" : 1.5, "pos" : [-566,76.5 ], "color" : "0", "cMask" : ["ball", "red", "blue" ], "damping" : 0.96 },
		{ "radius" : 0.01, "invMass" : 0, "pos" : [-580,74 ], "color" : "0", "cMask" : ["ball", "red", "blue"  ], "damping" : 0.96 },
		{ "radius" : 0.01, "invMass" : 1.5, "pos" : [-579.8,61 ], "color" : "0", "cMask" : ["ball", "red", "blue"  ], "damping" : 0.96 },
		{ "radius" : 0.01, "invMass" : 1.5, "pos" : [-579.6,48 ], "color" : "0", "cMask" : ["ball", "red", "blue"  ], "damping" : 0.96 },
		{ "radius" : 0.01, "invMass" : 1.5, "pos" : [-579.4,36 ], "color" : "0", "cMask" : ["ball", "red", "blue"  ], "damping" : 0.96 },
		{ "radius" : 0.01, "invMass" : 1.5, "pos" : [-579.2,24 ], "color" : "0", "cMask" : ["ball", "red", "blue"  ], "damping" : 0.96 },
		{ "radius" : 0.01, "invMass" : 1.5, "pos" : [-579,12 ], "color" : "0", "cMask" : ["ball", "red", "blue"  ], "damping" : 0.96 },
		{ "radius" : 0.01, "invMass" : 1.5, "pos" : [-578.8,0 ], "color" : "0", "cMask" : ["ball", "red", "blue"  ], "damping" : 0.96 },
		{ "radius" : 0.01, "invMass" : 1.5, "pos" : [-579,-12 ], "color" : "0", "cMask" : ["ball", "red", "blue"  ], "damping" : 0.96 },
		{ "radius" : 0.01, "invMass" : 1.5, "pos" : [-579.2,-24 ], "color" : "0", "cMask" : ["ball", "red", "blue"  ], "damping" : 0.96 },
		{ "radius" : 0.01, "invMass" : 1.5, "pos" : [-579.4,-36 ], "color" : "0", "cMask" : ["ball", "red", "blue"  ], "damping" : 0.96 },
		{ "radius" : 0.01, "invMass" : 1.5, "pos" : [-579.6,-48 ], "color" : "0", "cMask" : ["ball", "red", "blue"  ], "damping" : 0.96 },
		{ "radius" : 0.01, "invMass" : 1.5, "pos" : [-579.8,-61 ], "color" : "0", "cMask" : ["ball", "red", "blue"  ], "damping" : 0.96 },
		{ "radius" : 0.01, "invMass" : 0, "pos" : [-580,-74 ], "color" : "0", "cMask" : ["ball", "red", "blue"  ], "damping" : 0.96 },
		{ "radius" : 0.01, "invMass" : 1.5, "pos" : [-566,-76.5 ], "color" : "0", "cMask" : ["ball", "red", "blue"  ], "damping" : 0.96 },
		{ "radius" : 0.01, "invMass" : 1.5, "pos" : [566,76.5 ], "color" : "0", "cMask" : ["ball", "red", "blue"  ], "damping" : 0.96 },
		{ "radius" : 0.01, "invMass" : 0, "pos" : [580,74 ], "color" : "0", "cMask" : ["ball", "red", "blue"  ], "damping" : 0.96 },
		{ "radius" : 0.01, "invMass" : 1.5, "pos" : [579.8,61 ], "color" : "0", "cMask" : ["ball", "red", "blue"  ], "damping" : 0.96 },
		{ "radius" : 0.01, "invMass" : 1.5, "pos" : [579.6,48 ], "color" : "0", "cMask" : ["ball", "red", "blue"  ], "damping" : 0.96 },
		{ "radius" : 0.01, "invMass" : 1.5, "pos" : [579.4,36 ], "color" : "0", "cMask" : ["ball", "red", "blue"  ], "damping" : 0.96 },
		{ "radius" : 0.01, "invMass" : 1.5, "pos" : [579.2,24 ], "color" : "0", "cMask" : ["ball", "red", "blue"  ], "damping" : 0.96 },
		{ "radius" : 0.01, "invMass" : 1.5, "pos" : [579,12 ], "color" : "0", "cMask" : ["ball", "red", "blue"  ], "damping" : 0.96 },
		{ "radius" : 0.01, "invMass" : 1.5, "pos" : [578.8,0 ], "color" : "0", "cMask" : ["ball", "red", "blue"  ], "damping" : 0.96 },
		{ "radius" : 0.01, "invMass" : 1.5, "pos" : [579,-12 ], "color" : "0", "cMask" : ["ball", "red", "blue"  ], "damping" : 0.96 },
		{ "radius" : 0.01, "invMass" : 1.5, "pos" : [579.2,-24 ], "color" : "0", "cMask" : ["ball", "red", "blue"  ], "damping" : 0.96 },
		{ "radius" : 0.01, "invMass" : 1.5, "pos" : [579.4,-36 ], "color" : "0", "cMask" : ["ball", "red", "blue"  ], "damping" : 0.96 },
		{ "radius" : 0.01, "invMass" : 1.5, "pos" : [579.6,-48 ], "color" : "0", "cMask" : ["ball", "red", "blue"  ], "damping" : 0.96 },
		{ "radius" : 0.01, "invMass" : 1.5, "pos" : [579.8,-61 ], "color" : "0", "cMask" : ["ball", "red", "blue"  ], "damping" : 0.96 },
		{ "radius" : 0.01, "invMass" : 0, "pos" : [580,-74 ], "color" : "0", "cMask" : ["ball", "red", "blue"  ], "damping" : 0.96 },
		{ "radius" : 0.01, "invMass" : 1.5, "pos" : [566,-76.5 ], "color" : "0", "cMask" : ["ball", "red", "blue"  ], "damping" : 0.96 }

	],

	"playerPhysics" : {
		"bCoef" : 0.5,
		"invMass" : 0.5,
		"damping" : 0.96,
		"acceleration" : 0.12,
		"kickingAcceleration" : 0.07,
		"kickingDamping" : 0.96,
		"kickStrength" : 5.65

	},

	"ballPhysics" : "disc0",

	"spawnDistance" : 350,

	"joints" : [
		{ "d0" : 1, "d1" : 5, "length" : 16.3783393541592, "strength" : 0.1 },
		{ "d0" : 5, "d1" : 6, "length" : 14.221462653327892, "strength" : 0.1 },
		{ "d0" : 6, "d1" : 7, "length" : 13.001538370516007, "strength" : 0.1 },
		{ "d0" : 7, "d1" : 8, "length" : 13.001538370516004, "strength" : 0.1 },
		{ "d0" : 8, "d1" : 9, "length" : 12.001666550942, "strength" : 0.1 },
		{ "d0" : 9, "d1" : 10, "length" : 12.001666550941996, "strength" : 0.1 },
		{ "d0" : 10, "d1" : 11, "length" : 12.001666550942, "strength" : 0.1 },
		{ "d0" : 11, "d1" : 12, "length" : 12.001666550942, "strength" : 0.1 },
		{ "d0" : 12, "d1" : 13, "length" : 12.001666550942, "strength" : 0.1 },
		{ "d0" : 13, "d1" : 14, "length" : 12.001666550942, "strength" : 0.1 },
		{ "d0" : 14, "d1" : 15, "length" : 12.001666550941996, "strength" : 0.1 },
		{ "d0" : 15, "d1" : 16, "length" : 12.001666550942, "strength" : 0.1 },
		{ "d0" : 16, "d1" : 17, "length" : 13.001538370516004, "strength" : 0.1 },
		{ "d0" : 17, "d1" : 18, "length" : 13.001538370516007, "strength" : 0.1 },
		{ "d0" : 18, "d1" : 19, "length" : 14.221462653327892, "strength" : 0.1 },
		{ "d0" : 19, "d1" : 2, "length" : 16.3783393541592, "strength" : 0.1 },
		{ "d0" : 3, "d1" : 20, "length" : 16.3783393541592, "strength" : 0.1 },
		{ "d0" : 20, "d1" : 21, "length" : 14.221462653327892, "strength" : 0.1 },
		{ "d0" : 21, "d1" : 22, "length" : 13.001538370516007, "strength" : 0.1 },
		{ "d0" : 22, "d1" : 23, "length" : 13.001538370516004, "strength" : 0.1 },
		{ "d0" : 23, "d1" : 24, "length" : 12.001666550942, "strength" : 0.1 },
		{ "d0" : 24, "d1" : 25, "length" : 12.001666550941996, "strength" : 0.1 },
		{ "d0" : 25, "d1" : 26, "length" : 12.001666550942, "strength" : 0.1 },
		{ "d0" : 26, "d1" : 27, "length" : 12.001666550942, "strength" : 0.1 },
		{ "d0" : 27, "d1" : 28, "length" : 12.001666550942, "strength" : 0.1 },
		{ "d0" : 28, "d1" : 29, "length" : 12.001666550942, "strength" : 0.1 },
		{ "d0" : 29, "d1" : 30, "length" : 12.001666550941996, "strength" : 0.1 },
		{ "d0" : 30, "d1" : 31, "length" : 12.001666550942, "strength" : 0.1 },
		{ "d0" : 31, "d1" : 32, "length" : 13.001538370516004, "strength" : 0.1 },
		{ "d0" : 32, "d1" : 33, "length" : 13.001538370516007, "strength" : 0.1 },
		{ "d0" : 33, "d1" : 34, "length" : 14.221462653327892, "strength" : 0.1 },
		{ "d0" : 34, "d1" : 4, "length" : 16.3783393541592, "strength" : 0.1 }

	],

	"redSpawnPoints" : [
		[ -350, 0
		],
		[ -350, 60
		],
		[ -350, -60
		],
		[ -350, 120
		],
		[ -350, -120
		],
		[ -605, 0
		]

	],

	"blueSpawnPoints" : [
		[ 350, 0
		],
		[ 350, 60
		],
		[ 350, -60
		],
		[ 350, 120
		],
		[ 350, -120
		],
		[ 605, 0
		]

	],

	"traits" : {
		

	}
}`;

var Futsalx3=`
{

	"name" : "Escreva !help para mais informações",

	"width" : 620,

	"height" : 270,

	"spawnDistance" : 350,

	"bg" : { "type" : "hockey", "width" : 550, "height" : 240, "kickOffRadius" : 80, "cornerRadius" : 0 },

	"vertexes" : [
		/* 0 */ { "x" : 550, "y" : 240, "trait" : "ballArea" },
		/* 1 */ { "x" : 550, "y" : -240, "trait" : "ballArea" },
		
		/* 2 */ { "x" : 0, "y" : 270, "trait" : "kickOffBarrier" },
		/* 3 */ { "x" : 0, "y" : 80, "bCoef" : 0.15, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 180 },
		/* 4 */ { "x" : 0, "y" : -80, "bCoef" : 0.15, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 180 },
		/* 5 */ { "x" : 0, "y" : -270, "trait" : "kickOffBarrier" },
		
		/* 6 */ { "x" : -550, "y" : -80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ] },
		/* 7 */ { "x" : -590, "y" : -80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ] },
		/* 8 */ { "x" : -590, "y" : 80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },
		/* 9 */ { "x" : -550, "y" : 80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },
		/* 10 */ { "x" : 550, "y" : -80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,-80 ] },
		/* 11 */ { "x" : 590, "y" : -80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,-80 ] },
		/* 12 */ { "x" : 590, "y" : 80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,80 ] },
		/* 13 */ { "x" : 550, "y" : 80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [700,80 ] },
		
		/* 14 */ { "x" : -550, "y" : 80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [-700,80 ] },
		/* 15 */ { "x" : -550, "y" : 240, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 16 */ { "x" : -550, "y" : -80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [-700,-80 ] },
		/* 17 */ { "x" : -550, "y" : -240, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 18 */ { "x" : -550, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 19 */ { "x" : 550, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 20 */ { "x" : 550, "y" : 80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "pos" : [700,80 ] },
		/* 21 */ { "x" : 550, "y" : 240, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 22 */ { "x" : 550, "y" : -240, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" },
		/* 23 */ { "x" : 550, "y" : -80, "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [700,-80 ] },
		/* 24 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 25 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" },
		/* 26 */ { "x" : -550, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		/* 27 */ { "x" : 550, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		
		/* 28 */ { "x" : 0, "y" : -240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 29 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 30 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 31 */ { "x" : 0, "y" : 240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		/* 32 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "F8F8F8" },
		/* 33 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "F8F8F8" },
		/* 34 */ { "x" : 0, "y" : 80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : -180 },
		/* 35 */ { "x" : 0, "y" : -80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : -180 },
		/* 36 */ { "x" : 0, "y" : 80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 0 },
		/* 37 */ { "x" : 0, "y" : -80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 0 },
		
		/* 38 */ { "x" : -557.5, "y" : 80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "pos" : [-700,80 ] },
		/* 39 */ { "x" : -557.5, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		/* 40 */ { "x" : -557.5, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 41 */ { "x" : -557.5, "y" : -80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "pos" : [-700,-80 ] },
		/* 42 */ { "x" : 557.5, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 },
		/* 43 */ { "x" : 557.5, "y" : -80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "pos" : [700,-80 ] },
		/* 44 */ { "x" : 557.5, "y" : 80, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "pos" : [700,80 ] },
		/* 45 */ { "x" : 557.5, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false },
		
		/* 46 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "trait" : "line" },
		/* 47 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "trait" : "line" },
		/* 48 */ { "x" : -550, "y" : -80, "bCoef" : 0.1, "trait" : "line" },
		/* 49 */ { "x" : -550, "y" : 80, "bCoef" : 0.1, "trait" : "line" },
		/* 50 */ { "x" : 550, "y" : -80, "bCoef" : 0.1, "trait" : "line" },
		/* 51 */ { "x" : 550, "y" : 80, "bCoef" : 0.1, "trait" : "line" },
		/* 52 */ { "x" : -550, "y" : 200, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 },
		/* 53 */ { "x" : -390, "y" : 70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },
		/* 54 */ { "x" : -550, "y" : 226, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 55 */ { "x" : -536, "y" : 240, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 56 */ { "x" : -550, "y" : -200, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 },
		/* 57 */ { "x" : -390, "y" : -70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },
		/* 58 */ { "x" : -550, "y" : -226, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 59 */ { "x" : -536, "y" : -240, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 60 */ { "x" : -381, "y" : -240, "bCoef" : 0.1, "trait" : "line" },
		/* 61 */ { "x" : 550, "y" : -226, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 62 */ { "x" : 536, "y" : -240, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 63 */ { "x" : 550, "y" : 226, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 64 */ { "x" : 536, "y" : 240, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 65 */ { "x" : 550, "y" : 200, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 },
		/* 66 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 },
		/* 67 */ { "x" : 550, "y" : -200, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 },
		/* 68 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 },
		/* 69 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },
		/* 70 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },
		/* 71 */ { "x" : -375, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 72 */ { "x" : -375, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 73 */ { "x" : -375, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 74 */ { "x" : -375, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 75 */ { "x" : -375, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 76 */ { "x" : -375, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 77 */ { "x" : -375, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 78 */ { "x" : -375, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 79 */ { "x" : 375, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 80 */ { "x" : 375, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 81 */ { "x" : 375, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 82 */ { "x" : 375, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 83 */ { "x" : 375, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 84 */ { "x" : 375, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 85 */ { "x" : 375, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 86 */ { "x" : 375, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 87 */ { "x" : -277.5, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 88 */ { "x" : -277.5, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 89 */ { "x" : -277.5, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 90 */ { "x" : -277.5, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 91 */ { "x" : -277.5, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 92 */ { "x" : -277.5, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 93 */ { "x" : -277.5, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 94 */ { "x" : -277.5, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 95 */ { "x" : 277.5, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 96 */ { "x" : 277.5, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 97 */ { "x" : 277.5, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 98 */ { "x" : 277.5, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 99 */ { "x" : 277.5, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 100 */ { "x" : 277.5, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 101 */ { "x" : 277.5, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 102 */ { "x" : 277.5, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 103 */ { "x" : -240, "y" : 224, "bCoef" : 0.1, "trait" : "line" },
		/* 104 */ { "x" : -240, "y" : 256, "bCoef" : 0.1, "trait" : "line" },
		/* 105 */ { "x" : -120, "y" : 224, "bCoef" : 0.1, "trait" : "line" },
		/* 106 */ { "x" : -120, "y" : 256, "bCoef" : 0.1, "trait" : "line" },
		/* 107 */ { "x" : 240, "y" : 224, "bCoef" : 0.1, "trait" : "line" },
		/* 108 */ { "x" : 240, "y" : 256, "bCoef" : 0.1, "trait" : "line" },
		/* 109 */ { "x" : 120, "y" : 224, "bCoef" : 0.1, "trait" : "line" },
		/* 110 */ { "x" : 120, "y" : 256, "bCoef" : 0.1, "trait" : "line" },
		/* 111 */ { "x" : -381, "y" : 240, "bCoef" : 0.1, "trait" : "line" },
		/* 112 */ { "x" : -381, "y" : 256, "bCoef" : 0.1, "trait" : "line" },
		/* 113 */ { "x" : -556, "y" : 123, "bCoef" : 0.1, "trait" : "line" },
		/* 114 */ { "x" : -575, "y" : 123, "bCoef" : 0.1, "trait" : "line" },
		/* 115 */ { "x" : 556, "y" : 123, "bCoef" : 0.1, "trait" : "line" },
		/* 116 */ { "x" : 575, "y" : 123, "bCoef" : 0.1, "trait" : "line" },
		/* 117 */ { "x" : -556, "y" : -123, "bCoef" : 0.1, "trait" : "line" },
		/* 118 */ { "x" : -575, "y" : -123, "bCoef" : 0.1, "trait" : "line" },
		/* 119 */ { "x" : 556, "y" : -123, "bCoef" : 0.1, "trait" : "line" },
		/* 120 */ { "x" : 575, "y" : -123, "bCoef" : 0.1, "trait" : "line" },
		/* 121 */ { "x" : -381, "y" : -240, "bCoef" : 0.1, "trait" : "line" },
		/* 122 */ { "x" : -381, "y" : -256, "bCoef" : 0.1, "trait" : "line" },
		/* 123 */ { "x" : 381, "y" : 240, "bCoef" : 0.1, "trait" : "line" },
		/* 124 */ { "x" : 381, "y" : 256, "bCoef" : 0.1, "trait" : "line" },
		/* 125 */ { "x" : 381, "y" : -240, "bCoef" : 0.1, "trait" : "line" },
		/* 126 */ { "x" : 381, "y" : -256, "bCoef" : 0.1, "trait" : "line" },
		
		/* 127 */ { "x" : 553, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "vis" : false },
		/* 128 */ { "x" : 553, "y" : -80, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [700,-80 ], "vis" : false },
		/* 129 */ { "x" : 553, "y" : 80, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "pos" : [700,80 ], "vis" : false },
		/* 130 */ { "x" : 553, "y" : 240, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false },
		/* 131 */ { "x" : -553, "y" : 80, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [-700,80 ], "vis" : false },
		/* 132 */ { "x" : -553, "y" : 240, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "vis" : false },
		/* 133 */ { "x" : -553, "y" : -80, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [-700,-80 ], "vis" : false },
		/* 134 */ { "x" : -553, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "vis" : false }

	],

	"segments" : [
		{ "v0" : 6, "v1" : 7, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [-700,-80 ], "y" : -80 },
		{ "v0" : 7, "v1" : 8, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "x" : -590 },
		{ "v0" : 8, "v1" : 9, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [-700,80 ], "y" : 80 },
		{ "v0" : 10, "v1" : 11, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [700,-80 ], "y" : -80 },
		{ "v0" : 11, "v1" : 12, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "x" : 590 },
		{ "v0" : 12, "v1" : 13, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [700,80 ], "y" : 80 },
		
		{ "v0" : 2, "v1" : 3, "trait" : "kickOffBarrier" },
		{ "v0" : 3, "v1" : 4, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.15, "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 3, "v1" : 4, "curve" : -180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.15, "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 4, "v1" : 5, "trait" : "kickOffBarrier" },
		
		{ "v0" : 14, "v1" : 15, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -550 },
		{ "v0" : 16, "v1" : 17, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -550 },
		{ "v0" : 18, "v1" : 19, "vis" : true, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : 240 },
		{ "v0" : 20, "v1" : 21, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550 },
		{ "v0" : 22, "v1" : 23, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.15, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550 },
		{ "v0" : 24, "v1" : 25, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550, "y" : -240 },
		{ "v0" : 26, "v1" : 27, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : -240 },
		
		{ "v0" : 28, "v1" : 29, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 30, "v1" : 31, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" },
		
		{ "v0" : 38, "v1" : 39, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -557.5 },
		{ "v0" : 40, "v1" : 41, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -557.5 },
		{ "v0" : 42, "v1" : 43, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 557.5 },
		{ "v0" : 44, "v1" : 45, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 557.5 },
		
		{ "v0" : 46, "v1" : 47, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 0 },
		{ "v0" : 48, "v1" : 49, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -550 },
		{ "v0" : 50, "v1" : 51, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 550 },
		{ "v0" : 52, "v1" : 53, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 55, "v1" : 54, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 56, "v1" : 57, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 53, "v1" : 57, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 59, "v1" : 58, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 62, "v1" : 61, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 64, "v1" : 63, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 65, "v1" : 66, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 67, "v1" : 68, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 69, "v1" : 70, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 390 },
		{ "v0" : 72, "v1" : 71, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 71, "v1" : 72, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 74, "v1" : 73, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 73, "v1" : 74, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 76, "v1" : 75, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 75, "v1" : 76, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 78, "v1" : 77, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 77, "v1" : 78, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 80, "v1" : 79, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 79, "v1" : 80, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 82, "v1" : 81, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 81, "v1" : 82, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 84, "v1" : 83, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 83, "v1" : 84, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 86, "v1" : 85, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 85, "v1" : 86, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 88, "v1" : 87, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 87, "v1" : 88, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 90, "v1" : 89, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 89, "v1" : 90, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 92, "v1" : 91, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 91, "v1" : 92, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 94, "v1" : 93, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 93, "v1" : 94, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 96, "v1" : 95, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 95, "v1" : 96, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 98, "v1" : 97, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 97, "v1" : 98, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 100, "v1" : 99, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 99, "v1" : 100, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 102, "v1" : 101, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 101, "v1" : 102, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 103, "v1" : 104, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240 },
		{ "v0" : 105, "v1" : 106, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -120 },
		{ "v0" : 107, "v1" : 108, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 240 },
		{ "v0" : 109, "v1" : 110, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 120 },
		{ "v0" : 111, "v1" : 112, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 113, "v1" : 114, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },
		{ "v0" : 115, "v1" : 116, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },
		{ "v0" : 117, "v1" : 118, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 },
		{ "v0" : 119, "v1" : 120, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 },
		{ "v0" : 121, "v1" : 122, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 123, "v1" : 124, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		{ "v0" : 125, "v1" : 126, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		
		{ "v0" : 127, "v1" : 128, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 553 },
		{ "v0" : 129, "v1" : 130, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 553 },
		{ "v0" : 131, "v1" : 132, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -553 },
		{ "v0" : 133, "v1" : 134, "vis" : false, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -553 }

	],

	"goals" : [
		{ "p0" : [-556.25,-80 ], "p1" : [-556.25,80 ], "team" : "red" },
		{ "p0" : [556.25,80 ], "p1" : [556.25,-80 ], "team" : "blue" }

	],

	"discs" : [
		{ "radius" : 5, "pos" : [-550,80 ], "color" : "6666CC", "trait" : "goalPost", "y" : 80 },
		{ "radius" : 5, "pos" : [-550,-80 ], "color" : "6666CC", "trait" : "goalPost", "y" : -80, "x" : -560 },
		{ "radius" : 5, "pos" : [550,80 ], "color" : "6666CC", "trait" : "goalPost", "y" : 80 },
		{ "radius" : 5, "pos" : [550,-80 ], "color" : "6666CC", "trait" : "goalPost", "y" : -80 },
		
		{ "radius" : 3, "invMass" : 0, "pos" : [-550,240 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [-550,-240 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [550,-240 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [550,240 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -240, "bCoef" : 1, "trait" : "ballArea", "vis" : false, "curve" : 0 },
		{ "normal" : [0,-1 ], "dist" : -240, "bCoef" : 1, "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -270, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -270, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -620, "bCoef" : 0.1 },
		{ "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0.1 },
		
		{ "normal" : [1,0 ], "dist" : -620, "bCoef" : 0.1, "trait" : "ballArea", "vis" : false, "curve" : 0 },
		{ "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0.1, "trait" : "ballArea", "vis" : false, "curve" : 0 }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] },
		"line" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] }

	},

	"playerPhysics" : {
		"bCoef" : 0,
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.083,
		"kickStrength" : 5

	},

	"ballPhysics" : {
		"radius" : 6.25,
		"bCoef" : 0.35,
		"invMass" : 1.5,
		"damping" : 0.99,
		"color" : "FFCC00"

	}
}`;
var PensRedFutsalx3x4=`
{

	"name" : "🌟 𝗣𝗘𝗡𝗔𝗟𝗧𝗜 𝗥𝗘𝗗 𝘅𝟰 🎩discord.gg/KcPvNQk - v1.0",

	"width" : 480,

	"height" : 360,

	"spawnDistance" : 480,

	"bg" : { "type" : "hockey" },

	"vertexes" : [
		/* 0 */ { "x" : 480, "y" : -360, "trait" : "art" },
		/* 1 */ { "x" : 380, "y" : -35, "trait" : "art" },
		/* 2 */ { "x" : 380, "y" : 35, "trait" : "art" },
		/* 3 */ { "x" : 480, "y" : 360, "trait" : "art" },
		/* 4 */ { "x" : -380, "y" : -360, "trait" : "art" },
		/* 5 */ { "x" : -380, "y" : -35, "trait" : "art" },
		/* 6 */ { "x" : -380, "y" : 35, "trait" : "art" },
		/* 7 */ { "x" : -380, "y" : 360, "trait" : "art" },
		/* 8 */ { "x" : -230, "y" : -87.5, "trait" : "art" },
		/* 9 */ { "x" : -230, "y" : 87.5, "trait" : "art" },
		/* 10 */ { "x" : -270, "y" : -87.5, "trait" : "art" },
		/* 11 */ { "x" : -270, "y" : 87.5, "trait" : "art" },
		/* 12 */ { "x" : -230, "y" : -360, "trait" : "art" },
		/* 13 */ { "x" : -230, "y" : 360, "trait" : "art" },
		/* 14 */ { "x" : 0, "y" : -57.5, "trait" : "art" },
		/* 15 */ { "x" : -230, "y" : -265, "trait" : "art" },
		/* 16 */ { "x" : -230, "y" : 265, "trait" : "art" },
		/* 17 */ { "x" : 0, "y" : 57.5, "trait" : "art" },
		/* 18 */ { "x" : 0, "y" : 4, "trait" : "art" },
		/* 19 */ { "x" : 0, "y" : -4, "trait" : "art" },
		/* 20 */ { "x" : -230, "y" : -87.5, "trait" : "art" },
		/* 21 */ { "x" : -230, "y" : -360, "trait" : "art" },
		/* 22 */ { "x" : -230, "y" : 87.5, "trait" : "art" },
		/* 23 */ { "x" : -230, "y" : 360, "trait" : "art" },
		/* 24 */ { "x" : -215, "y" : -87.5, "trait" : "art" },
		/* 25 */ { "x" : -215, "y" : 87.5, "trait" : "art" },
		/* 26 */ { "x" : -245, "y" : -360, "trait" : "art" },
		/* 27 */ { "x" : -245, "y" : -15, "trait" : "art" },
		/* 28 */ { "x" : -245, "y" : 15, "trait" : "art" },
		/* 29 */ { "x" : -245, "y" : 360, "trait" : "art" },
		/* 30 */ { "x" : -245, "y" : -15, "trait" : "art" },
		/* 31 */ { "x" : -360, "y" : -15, "trait" : "art" },
		/* 32 */ { "x" : -360, "y" : 15, "trait" : "art" },
		/* 33 */ { "x" : -245, "y" : 15, "trait" : "art" },
		/* 34 */ { "x" : 380, "y" : -360, "trait" : "art" },
		/* 35 */ { "x" : 380, "y" : 360, "trait" : "art" },
		/* 36 */ { "x" : -228, "y" : -87.5, "trait" : "art" },
		/* 37 */ { "x" : -228, "y" : 87.5, "trait" : "art" },
		/* 38 */ { "x" : -232, "y" : -87.5, "trait" : "art" },
		/* 39 */ { "x" : -232, "y" : 87.5, "trait" : "art" },
		/* 40 */ { "x" : -230, "y" : 360, "trait" : "art" },
		/* 41 */ { "x" : -230, "y" : -360, "trait" : "art" },
		
		/* 42 */ { "x" : 0, "y" : 0, "cMask" : ["blue" ] },
		/* 43 */ { "x" : 0, "y" : 0, "cMask" : ["blue" ] },
		
		/* 44 */ { "x" : -358, "y" : -15, "trait" : "art" },
		/* 45 */ { "x" : -358, "y" : 15, "trait" : "art" },
		/* 46 */ { "x" : -362, "y" : -14, "trait" : "art" },
		/* 47 */ { "x" : -362, "y" : 14, "trait" : "art" },
		/* 48 */ { "x" : 360, "y" : -15, "trait" : "art" },
		/* 49 */ { "x" : 360, "y" : 15, "trait" : "art" },
		/* 50 */ { "x" : 362, "y" : -15, "trait" : "art" },
		/* 51 */ { "x" : 362, "y" : 15, "trait" : "art" },
		/* 52 */ { "x" : 358, "y" : -15, "trait" : "art" },
		/* 53 */ { "x" : 358, "y" : 15, "trait" : "art" }

	],

	"segments" : [
		{ "v0" : 8, "v1" : 9, "trait" : "art", "color" : "8b0000" },
		
		{ "v0" : 10, "v1" : 11, "trait" : "gol" },
		{ "v0" : 10, "v1" : 8, "trait" : "gol" },
		{ "v0" : 11, "v1" : 9, "trait" : "gol" },
		
		{ "v0" : 14, "v1" : 15, "curve" : -95, "trait" : "bloqueio" },
		{ "v0" : 16, "v1" : 17, "curve" : -95, "trait" : "bloqueio" },
		{ "v0" : 14, "v1" : 17, "trait" : "bloqueio" },
		{ "v0" : 18, "v1" : 19, "curve" : 90, "trait" : "bloqueio" },
		{ "v0" : 19, "v1" : 18, "curve" : 90, "trait" : "bloqueio" },
		{ "v0" : 18, "v1" : 19, "curve" : 180, "trait" : "bloqueio" },
		{ "v0" : 19, "v1" : 18, "curve" : 180, "trait" : "bloqueio" },
		
		{ "v0" : 0, "v1" : 12, "trait" : "parede" },
		{ "v0" : 3, "v1" : 13, "trait" : "parede" },
		{ "v0" : 20, "v1" : 21, "trait" : "parede" },
		{ "v0" : 22, "v1" : 23, "trait" : "parede" },
		
		{ "v0" : 24, "v1" : 25, "trait" : "bloqueioinvi" },
		{ "v0" : 4, "v1" : 5, "trait" : "bloqueioinvi" },
		{ "v0" : 6, "v1" : 7, "trait" : "bloqueioinvi" },
		{ "v0" : 26, "v1" : 27, "trait" : "bloqueioinvi" },
		{ "v0" : 28, "v1" : 29, "trait" : "bloqueioinvi" },
		{ "v0" : 5, "v1" : 31, "trait" : "bloqueioinvi", "curve" : -90 },
		{ "v0" : 6, "v1" : 32, "trait" : "bloqueioinvi", "curve" : 90 },
		{ "v0" : 31, "v1" : 30, "trait" : "bloqueioinvi" },
		{ "v0" : 32, "v1" : 33, "trait" : "bloqueioinvi" },
		{ "v0" : 1, "v1" : 34, "trait" : "bloqueioinvi" },
		{ "v0" : 2, "v1" : 35, "trait" : "bloqueioinvi" },
		{ "v0" : 37, "v1" : 40, "trait" : "bloqueioinvi" },
		{ "v0" : 38, "v1" : 41, "trait" : "bloqueioinvi" },
		{ "v0" : 49, "v1" : 2, "trait" : "bloqueioinvi", "curve" : 90 },
		{ "v0" : 1, "v1" : 48, "trait" : "bloqueioinvi", "curve" : 90 },
		
		{ "v0" : 36, "v1" : 37, "trait" : "linhacamuflada" },
		{ "v0" : 38, "v1" : 39, "trait" : "linhacamuflada" },
		
		{ "v0" : 31, "v1" : 32, "trait" : "art", "color" : "8b0000" },
		
		{ "v0" : 42, "v1" : 43, "cMask" : ["red" ] },
		
		{ "v0" : 44, "v1" : 45, "trait" : "linhacamuflada" },
		{ "v0" : 46, "v1" : 47, "trait" : "linhacamuflada" },
		
		{ "v0" : 48, "v1" : 49, "trait" : "art", "color" : "00008b" },
		
		{ "v0" : 50, "v1" : 51, "trait" : "linhacamuflada" },
		{ "v0" : 52, "v1" : 53, "trait" : "linhacamuflada" }

	],

	"goals" : [
		{ "team" : "blue", "p0" : [-230,-92.5 ], "p1" : [20,0 ] },
		{ "team" : "blue", "p0" : [-230,92.5 ], "p1" : [20,0 ] },
		{ "team" : "red", "p0" : [-236,87.5 ], "p1" : [-236,-87.5 ] }

	],

	"discs" : [
		{ "pos" : [-230,-87.5 ], "radius" : 4.5, "invMass" : 0, "color" : "8b0000" },
		{ "pos" : [-230,87.5 ], "radius" : 4.5, "invMass" : 0, "color" : "8b0000" },
		{ "pos" : [-230,-360 ], "radius" : 3, "cGroup" : ["" ], "color" : "8b0000" },
		{ "pos" : [-230,360 ], "radius" : 3, "cGroup" : ["" ], "color" : "8b0000" },
		{ "pos" : [360,15 ], "radius" : 2, "cGroup" : ["" ], "color" : "00008b" },
		{ "pos" : [360,-15 ], "radius" : 2, "cGroup" : ["" ], "color" : "00008b" },
		{ "pos" : [-360,15 ], "radius" : 2, "cGroup" : ["" ], "color" : "8b0000" },
		{ "pos" : [-360,-15 ], "radius" : 2, "cGroup" : ["" ], "color" : "8b0000" }

	],

	"planes" : [
		{ "dist" : -360, "normal" : [0,1 ] },
		{ "dist" : -360, "normal" : [0,-1 ] },
		{ "dist" : -480, "normal" : [1,0 ] },
		{ "dist" : -480, "normal" : [-1,0 ] }

	],

	"traits" : {
		"art" : { "cGroup" : ["" ], "cMask" : ["" ] },
		"parede" : { "cMask" : ["ball" ], "color" : "8b8b8b", "bCoef" : 1 },
		"gol" : { "cMask" : ["ball" ], "bCoef" : 0.1, "color" : "8b8b8b" },
		"bloqueio" : { "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "8b8b8b" },
		"bloqueioinvi" : { "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "vis" : false },
		"linhacamuflada" : { "cGroup" : ["" ], "cMask" : ["" ], "color" : "555555" }

	},

	"playerPhysics" : {
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.083,
		"kickStrength" : 5,
		"bCoef" : 0

	},

	"ballPhysics" : {
		"radius" : 6.25,
		"bCoef" : 0.35,
		"color" : "ffd700",
		"invMass" : 1.5

	}
}`;

var PensBlueFutsalx3x4=`
{

	"name" : "🌟 𝗣𝗘𝗡𝗔𝗟𝗧𝗜 𝗕𝗟𝗨𝗘 𝘅𝟰 🎩discord.gg/KcPvNQk - v1.0",

	"width" : 480,

	"height" : 360,

	"spawnDistance" : 480,

	"bg" : { "type" : "hockey" },

	"vertexes" : [
		/* 0 */ { "x" : -480, "y" : -360, "trait" : "art" },
		/* 1 */ { "x" : -380, "y" : -35, "trait" : "art" },
		/* 2 */ { "x" : -380, "y" : 35, "trait" : "art" },
		/* 3 */ { "x" : -480, "y" : 360, "trait" : "art" },
		/* 4 */ { "x" : 380, "y" : -360, "trait" : "art" },
		/* 5 */ { "x" : 380, "y" : -35, "trait" : "art" },
		/* 6 */ { "x" : 380, "y" : 35, "trait" : "art" },
		/* 7 */ { "x" : 380, "y" : 360, "trait" : "art" },
		/* 8 */ { "x" : 230, "y" : -87.5, "trait" : "art" },
		/* 9 */ { "x" : 230, "y" : 87.5, "trait" : "art" },
		/* 10 */ { "x" : 270, "y" : -87.5, "trait" : "art" },
		/* 11 */ { "x" : 270, "y" : 87.5, "trait" : "art" },
		/* 12 */ { "x" : 230, "y" : -360, "trait" : "art" },
		/* 13 */ { "x" : 230, "y" : 360, "trait" : "art" },
		/* 14 */ { "x" : 0, "y" : -57.5, "trait" : "art" },
		/* 15 */ { "x" : 230, "y" : -265, "trait" : "art" },
		/* 16 */ { "x" : 230, "y" : 265, "trait" : "art" },
		/* 17 */ { "x" : 0, "y" : 57.5, "trait" : "art" },
		/* 18 */ { "x" : 0, "y" : 4, "trait" : "art" },
		/* 19 */ { "x" : 0, "y" : -4, "trait" : "art" },
		/* 20 */ { "x" : 230, "y" : -87.5, "trait" : "art" },
		/* 21 */ { "x" : 230, "y" : -360, "trait" : "art" },
		/* 22 */ { "x" : 230, "y" : 87.5, "trait" : "art" },
		/* 23 */ { "x" : 230, "y" : 360, "trait" : "art" },
		/* 24 */ { "x" : 215, "y" : -87.5, "trait" : "art" },
		/* 25 */ { "x" : 215, "y" : 87.5, "trait" : "art" },
		/* 26 */ { "x" : 245, "y" : -360, "trait" : "art" },
		/* 27 */ { "x" : 245, "y" : -15, "trait" : "art" },
		/* 28 */ { "x" : 245, "y" : 15, "trait" : "art" },
		/* 29 */ { "x" : 245, "y" : 360, "trait" : "art" },
		/* 30 */ { "x" : 245, "y" : -15, "trait" : "art" },
		/* 31 */ { "x" : 360, "y" : -15, "trait" : "art" },
		/* 32 */ { "x" : 360, "y" : 15, "trait" : "art" },
		/* 33 */ { "x" : 245, "y" : 15, "trait" : "art" },
		/* 34 */ { "x" : -380, "y" : -360, "trait" : "art" },
		/* 35 */ { "x" : -380, "y" : 360, "trait" : "art" },
		/* 36 */ { "x" : 228, "y" : -87.5, "trait" : "art" },
		/* 37 */ { "x" : 228, "y" : 87.5, "trait" : "art" },
		/* 38 */ { "x" : 232, "y" : -87.5, "trait" : "art" },
		/* 39 */ { "x" : 232, "y" : 87.5, "trait" : "art" },
		/* 40 */ { "x" : 230, "y" : 360, "trait" : "art" },
		/* 41 */ { "x" : 230, "y" : -360, "trait" : "art" },
		
		/* 42 */ { "x" : 0, "y" : 0, "cMask" : ["red" ] },
		/* 43 */ { "x" : 0, "y" : 0, "cMask" : ["red" ] },
		
		/* 44 */ { "x" : 358, "y" : -15, "trait" : "art" },
		/* 45 */ { "x" : 358, "y" : 15, "trait" : "art" },
		/* 46 */ { "x" : 362, "y" : -14, "trait" : "art" },
		/* 47 */ { "x" : 362, "y" : 14, "trait" : "art" },
		/* 48 */ { "x" : -360, "y" : -15, "trait" : "art" },
		/* 49 */ { "x" : -360, "y" : 15, "trait" : "art" },
		/* 50 */ { "x" : -362, "y" : -15, "trait" : "art" },
		/* 51 */ { "x" : -362, "y" : 15, "trait" : "art" },
		/* 52 */ { "x" : -358, "y" : -15, "trait" : "art" },
		/* 53 */ { "x" : -358, "y" : 15, "trait" : "art" }

	],

	"segments" : [
		{ "v0" : 8, "v1" : 9, "trait" : "art", "color" : "00008b" },
		
		{ "v0" : 10, "v1" : 11, "trait" : "gol" },
		{ "v0" : 10, "v1" : 8, "trait" : "gol" },
		{ "v0" : 11, "v1" : 9, "trait" : "gol" },
		
		{ "v0" : 14, "v1" : 15, "curve" : 95, "trait" : "bloqueio" },
		{ "v0" : 16, "v1" : 17, "curve" : 95, "trait" : "bloqueio" },
		{ "v0" : 14, "v1" : 17, "trait" : "bloqueio" },
		{ "v0" : 18, "v1" : 19, "curve" : 90, "trait" : "bloqueio" },
		{ "v0" : 19, "v1" : 18, "curve" : 90, "trait" : "bloqueio" },
		{ "v0" : 18, "v1" : 19, "curve" : 180, "trait" : "bloqueio" },
		{ "v0" : 19, "v1" : 18, "curve" : 180, "trait" : "bloqueio" },
		
		{ "v0" : 0, "v1" : 12, "trait" : "parede" },
		{ "v0" : 3, "v1" : 13, "trait" : "parede" },
		{ "v0" : 20, "v1" : 21, "trait" : "parede" },
		{ "v0" : 22, "v1" : 23, "trait" : "parede" },
		
		{ "v0" : 24, "v1" : 25, "trait" : "bloqueioinvi" },
		{ "v0" : 4, "v1" : 5, "trait" : "bloqueioinvi" },
		{ "v0" : 6, "v1" : 7, "trait" : "bloqueioinvi" },
		{ "v0" : 26, "v1" : 27, "trait" : "bloqueioinvi" },
		{ "v0" : 28, "v1" : 29, "trait" : "bloqueioinvi" },
		{ "v0" : 5, "v1" : 31, "trait" : "bloqueioinvi", "curve" : 90 },
		{ "v0" : 6, "v1" : 32, "trait" : "bloqueioinvi", "curve" : -90 },
		{ "v0" : 31, "v1" : 30, "trait" : "bloqueioinvi" },
		{ "v0" : 32, "v1" : 33, "trait" : "bloqueioinvi" },
		{ "v0" : 1, "v1" : 34, "trait" : "bloqueioinvi" },
		{ "v0" : 2, "v1" : 35, "trait" : "bloqueioinvi" },
		{ "v0" : 37, "v1" : 40, "trait" : "bloqueioinvi" },
		{ "v0" : 38, "v1" : 41, "trait" : "bloqueioinvi" },
		{ "v0" : 49, "v1" : 2, "trait" : "bloqueioinvi", "curve" : -90 },
		{ "v0" : 1, "v1" : 48, "trait" : "bloqueioinvi", "curve" : -90 },
		
		{ "v0" : 36, "v1" : 37, "trait" : "linhacamuflada" },
		{ "v0" : 38, "v1" : 39, "trait" : "linhacamuflada" },
		
		{ "v0" : 31, "v1" : 32, "trait" : "art", "color" : "00008b" },
		
		{ "v0" : 42, "v1" : 43, "cMask" : ["red" ] },
		
		{ "v0" : 44, "v1" : 45, "trait" : "linhacamuflada" },
		{ "v0" : 46, "v1" : 47, "trait" : "linhacamuflada" },
		
		{ "v0" : 48, "v1" : 49, "trait" : "art", "color" : "8b0000" },
		
		{ "v0" : 50, "v1" : 51, "trait" : "linhacamuflada" },
		{ "v0" : 52, "v1" : 53, "trait" : "linhacamuflada" }

	],

	"goals" : [
		{ "team" : "red", "p0" : [230,-92.5 ], "p1" : [-20,0 ] },
		{ "team" : "red", "p0" : [230,92.5 ], "p1" : [-20,0 ] },
		{ "team" : "blue", "p0" : [236,87.5 ], "p1" : [236,-87.5 ] }

	],

	"discs" : [
		{ "pos" : [230,-87.5 ], "radius" : 4.5, "invMass" : 0, "color" : "00008b" },
		{ "pos" : [230,87.5 ], "radius" : 4.5, "invMass" : 0, "color" : "00008b" },
		{ "pos" : [230,-360 ], "radius" : 3, "cGroup" : ["" ], "color" : "00008b" },
		{ "pos" : [230,360 ], "radius" : 3, "cGroup" : ["" ], "color" : "00008b" },
		{ "pos" : [-360,15 ], "radius" : 2, "cGroup" : ["" ], "color" : "8b0000" },
		{ "pos" : [-360,-15 ], "radius" : 2, "cGroup" : ["" ], "color" : "8b0000" },
		{ "pos" : [360,15 ], "radius" : 2, "cGroup" : ["" ], "color" : "00008b" },
		{ "pos" : [360,-15 ], "radius" : 2, "cGroup" : ["" ], "color" : "00008b" }

	],

	"planes" : [
		{ "dist" : -360, "normal" : [0,1 ] },
		{ "dist" : -360, "normal" : [0,-1 ] },
		{ "dist" : -480, "normal" : [1,0 ] },
		{ "dist" : -480, "normal" : [-1,0 ] }

	],

	"traits" : {
		"art" : { "cGroup" : ["" ], "cMask" : ["" ] },
		"parede" : { "cMask" : ["ball" ], "color" : "8b8b8b", "bCoef" : 1 },
		"gol" : { "cMask" : ["ball" ], "bCoef" : 0.1, "color" : "8b8b8b" },
		"bloqueio" : { "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "color" : "8b8b8b" },
		"bloqueioinvi" : { "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "vis" : false },
		"linhacamuflada" : { "cGroup" : ["" ], "cMask" : ["" ], "color" : "555555" }

	},

	"playerPhysics" : {
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.083,
		"kickStrength" : 5,
		"bCoef" : 0

	},

	"ballPhysics" : {
		"radius" : 6.25,
		"bCoef" : 0.35,
		"color" : "ffd700",
		"invMass" : 1.5

	}
}`;
  
var Futsalx1yx2=`
{

	"name" : "Escreva !help para mais informações",

	"width" : 420,

	"height" : 200,

	"spawnDistance" : 180,

	"bg" : { "type" : "hockey", "width" : 368, "height" : 171, "kickOffRadius" : 65, "cornerRadius" : 0 },

	"vertexes" : [
		/* 0 */ { "x" : -368, "y" : 171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },
		/* 1 */ { "x" : -368, "y" : 65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },
		/* 2 */ { "x" : -368, "y" : -65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },
		/* 3 */ { "x" : -368, "y" : -171, "trait" : "ballArea", "bCoef" : 1, "cMask" : ["ball" ] },
		/* 4 */ { "x" : 368, "y" : 171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },
		/* 5 */ { "x" : 368, "y" : 65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },
		/* 6 */ { "x" : 368, "y" : -65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },
		/* 7 */ { "x" : 368, "y" : -171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },
		
		/* 8 */ { "x" : 0, "y" : 65, "trait" : "kickOffBarrier" },
		
		/* 9 */ { "x" : 0, "y" : -65, "trait" : "line" },
		
		/* 10 */ { "bCoef" : 1, "trait" : "ballArea", "x" : 368, "y" : 171 },
		/* 11 */ { "bCoef" : 1, "trait" : "ballArea", "x" : 368, "y" : -171 },
		
		/* 12 */ { "bCoef" : 0, "trait" : "line", "x" : 0, "y" : 171 },
		/* 13 */ { "bCoef" : 0, "trait" : "line", "x" : 0, "y" : -171 },
		
		/* 14 */ { "x" : 0, "y" : 65, "trait" : "kickOffBarrier" },
		/* 15 */ { "x" : 0, "y" : -65, "trait" : "kickOffBarrier" },
		
		/* 16 */ { "x" : 377, "y" : -65, "trait" : "line", "cMask" : ["ball" ], "bCoef" : 1 },
		
		/* 17 */ { "x" : 377, "y" : -171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },
		
		/* 18 */ { "x" : -377, "y" : -65, "trait" : "line", "cMask" : ["ball" ], "bCoef" : 1 },
		
		/* 19 */ { "x" : -377, "y" : -171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },
		
		/* 20 */ { "x" : -377, "y" : 65, "trait" : "line", "cMask" : ["ball" ], "bCoef" : 1 },
		
		/* 21 */ { "x" : -377, "y" : 171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },
		
		/* 22 */ { "x" : 377, "y" : 65, "trait" : "line", "cMask" : ["ball" ], "bCoef" : 1 },
		
		/* 23 */ { "x" : 377, "y" : 171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },
		
		/* 24 */ { "x" : 0, "y" : 199, "trait" : "kickOffBarrier" },
		/* 25 */ { "x" : 0, "y" : 65, "trait" : "kickOffBarrier" },
		/* 26 */ { "x" : 0, "y" : -65, "trait" : "kickOffBarrier" },
		/* 27 */ { "x" : 0, "y" : -199, "trait" : "kickOffBarrier" },
		
		/* 28 */ { "x" : -368.53340356886, "y" : -62.053454903872, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ] },
		/* 29 */ { "x" : -400.05760771891, "y" : -62.053454903872, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ] },
		/* 30 */ { "x" : -400.05760771891, "y" : 64.043361696331, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },
		/* 31 */ { "x" : -368.53340356886, "y" : 64.043361696331, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },
		/* 32 */ { "x" : 368.09926357786, "y" : 63.94882446641, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ] },
		/* 33 */ { "x" : 400, "y" : 64, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,-80 ] },
		/* 34 */ { "x" : 400, "y" : -61.927767991658, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },
		/* 35 */ { "x" : 368.9681846993, "y" : -62.144998272018, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "F8F8F8", "pos" : [-700,80 ] },
		
		/* 36 */ { "x" : -368, "y" : -142.37229643041, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 },
		/* 37 */ { "x" : -260.90035258157, "y" : -50.168480548544, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },
		/* 38 */ { "x" : -368, "y" : -160.81305960678, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 39 */ { "x" : -358.5379338963, "y" : -171, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 40 */ { "x" : -368, "y" : 141.33175243687, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 },
		/* 41 */ { "x" : -260.90035258157, "y" : 49.127936555002, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },
		/* 42 */ { "x" : -368, "y" : 159.77251561324, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 43 */ { "x" : -358.5379338963, "y" : 171, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 44 */ { "x" : 368, "y" : 159.77251561324, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 45 */ { "x" : 358.36266315432, "y" : 171, "bCoef" : 0.1, "trait" : "line", "curve" : -90 },
		/* 46 */ { "x" : 368, "y" : -160.81305960678, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 47 */ { "x" : 358.36266315432, "y" : -171, "bCoef" : 0.1, "trait" : "line", "curve" : 90 },
		/* 48 */ { "x" : 368, "y" : -142.37229643041, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 },
		/* 49 */ { "x" : 260.72508183959, "y" : -50.168480548544, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 },
		/* 50 */ { "x" : 368, "y" : 141.33175243687, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 },
		/* 51 */ { "x" : 260.72508183959, "y" : 49.127936555002, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 },
		/* 52 */ { "x" : 260.72508183959, "y" : -50.168480548544, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },
		/* 53 */ { "x" : 260.72508183959, "y" : 49.127936555002, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 },
		/* 54 */ { "x" : -250.86909422732, "y" : -1.2295321189394, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 55 */ { "x" : -250.86909422732, "y" : 0.18898812539692, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 56 */ { "x" : -250.86909422732, "y" : -2.6480523632758, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 57 */ { "x" : -250.86909422732, "y" : 1.6075083697333, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 58 */ { "x" : -250.86909422732, "y" : 0.89824824756514, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 59 */ { "x" : -250.86909422732, "y" : -1.9387922411076, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 60 */ { "x" : -250.86909422732, "y" : 1.9621384308174, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 61 */ { "x" : -250.86909422732, "y" : -3.0026824243599, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 62 */ { "x" : 250.69382348534, "y" : -1.2295321189394, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 63 */ { "x" : 250.69382348534, "y" : 0.18898812539692, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 64 */ { "x" : 250.69382348534, "y" : -2.6480523632758, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 65 */ { "x" : 250.69382348534, "y" : 1.6075083697333, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 66 */ { "x" : 250.69382348534, "y" : 0.89824824756514, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 67 */ { "x" : 250.69382348534, "y" : -1.9387922411076, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 68 */ { "x" : 250.69382348534, "y" : 1.9621384308174, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 69 */ { "x" : 250.69382348534, "y" : -3.0026824243599, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 70 */ { "x" : -185.66591492467, "y" : -1.2295321189394, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 71 */ { "x" : -185.66591492467, "y" : 0.18898812539692, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 72 */ { "x" : -185.66591492467, "y" : -2.6480523632758, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 73 */ { "x" : -185.66591492467, "y" : 1.6075083697333, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 74 */ { "x" : -185.66591492467, "y" : 0.89824824756514, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 75 */ { "x" : -185.66591492467, "y" : -1.9387922411076, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 76 */ { "x" : -185.66591492467, "y" : 1.9621384308174, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 77 */ { "x" : -185.66591492467, "y" : -3.0026824243599, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 78 */ { "x" : 185.49064418269, "y" : -1.2295321189394, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 79 */ { "x" : 185.49064418269, "y" : 0.18898812539692, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 80 */ { "x" : 185.49064418269, "y" : -2.6480523632758, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 81 */ { "x" : 185.49064418269, "y" : 1.6075083697333, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 82 */ { "x" : 185.49064418269, "y" : 0.89824824756514, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 83 */ { "x" : 185.49064418269, "y" : -1.9387922411076, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 84 */ { "x" : 185.49064418269, "y" : 1.9621384308174, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 85 */ { "x" : 185.49064418269, "y" : -3.0026824243599, "bCoef" : 0.1, "trait" : "line", "curve" : 180 },
		/* 86 */ { "x" : -160.58776903904, "y" : -159.39453936245, "bCoef" : 0.1, "trait" : "line" },
		/* 87 */ { "x" : -160.58776903904, "y" : -182.09086327183, "bCoef" : 0.1, "trait" : "line" },
		/* 88 */ { "x" : -80.337702205015, "y" : -159.39453936245, "bCoef" : 0.1, "trait" : "line" },
		/* 89 */ { "x" : -80.337702205015, "y" : -182.09086327183, "bCoef" : 0.1, "trait" : "line" },
		/* 90 */ { "x" : 160.41249829706, "y" : -159.39453936245, "bCoef" : 0.1, "trait" : "line" },
		/* 91 */ { "x" : 160.41249829706, "y" : -182.09086327183, "bCoef" : 0.1, "trait" : "line" },
		/* 92 */ { "x" : 80.162431463036, "y" : -159.39453936245, "bCoef" : 0.1, "trait" : "line" },
		/* 93 */ { "x" : 80.162431463036, "y" : -182.09086327183, "bCoef" : 0.1, "trait" : "line" },
		/* 94 */ { "x" : -254.88159756902, "y" : -171, "bCoef" : 0.1, "trait" : "line" },
		/* 95 */ { "x" : -254.88159756902, "y" : -182.09086327183, "bCoef" : 0.1, "trait" : "line" },
		/* 96 */ { "x" : -371.91294503531, "y" : -87.759267023458, "bCoef" : 0.1, "trait" : "line" },
		/* 97 */ { "x" : -384.61920561736, "y" : -87.759267023458, "bCoef" : 0.1, "trait" : "line" },
		/* 98 */ { "x" : 371.73767429333, "y" : -87.759267023458, "bCoef" : 0.1, "trait" : "line" },
		/* 99 */ { "x" : 384.44393487538, "y" : -87.759267023458, "bCoef" : 0.1, "trait" : "line" },
		/* 100 */ { "x" : -371.91294503531, "y" : 86.718723029916, "b
