var room = HBInit({ roomName: "✓|FUTSAL x4 |INICIANTES|NOVATOS|PRO|✓", maxPlayers: 18, playerName : "🏁 Áʀʙɪᴛʀᴏ ʙᴏᴛ 🤖", public : true});
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
		/* 100 */ { "x" : -371.91294503531, "y" : 86.718723029916, "bCoef" : 0.1, "trait" : "line" },
		/* 101 */ { "x" : -384.61920561736, "y" : 86.718723029916, "bCoef" : 0.1, "trait" : "line" },
		/* 102 */ { "x" : 371.73767429333, "y" : 86.718723029916, "bCoef" : 0.1, "trait" : "line" },
		/* 103 */ { "x" : 384.44393487538, "y" : 86.718723029916, "bCoef" : 0.1, "trait" : "line" },
		/* 104 */ { "x" : -254.88159756902, "y" : 171, "bCoef" : 0.1, "trait" : "line" },
		/* 105 */ { "x" : -254.88159756902, "y" : 181.05031927829, "bCoef" : 0.1, "trait" : "line" },
		/* 106 */ { "x" : 254.70632682704, "y" : -171, "bCoef" : 0.1, "trait" : "line" },
		/* 107 */ { "x" : 254.70632682704, "y" : -182.09086327183, "bCoef" : 0.1, "trait" : "line" },
		/* 108 */ { "x" : 254.70632682704, "y" : 171, "bCoef" : 0.1, "trait" : "line" },
		/* 109 */ { "x" : 254.70632682704, "y" : 181.05031927829, "bCoef" : 0.1, "trait" : "line" },
		/* 110 */ { "x" : 377, "y" : -65, "trait" : "line", "cMask" : ["ball" ], "bCoef" : 1 },
		
		/* 111 */ { "x" : 377, "y" : -171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },
		
		/* 112 */ { "x" : -377, "y" : -65, "trait" : "line", "cMask" : ["ball" ], "bCoef" : 1 },
		
		/* 113 */ { "x" : -377, "y" : -171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },
		
		/* 114 */ { "x" : -377, "y" : 65, "trait" : "line", "cMask" : ["ball" ], "bCoef" : 1 },
		
		/* 115 */ { "x" : -377, "y" : 171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },
		
		/* 116 */ { "x" : 377, "y" : 65, "trait" : "line", "cMask" : ["ball" ], "bCoef" : 1 },
		
		/* 117 */ { "x" : 377, "y" : 171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 1 },
		/* 118 */ { "x" : 371, "y" : -65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 0 },
		/* 119 */ { "x" : 371, "y" : -171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 0 },
		/* 120 */ { "x" : 371, "y" : 65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 0 },
		/* 121 */ { "x" : 371, "y" : 171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 0 },
		/* 122 */ { "x" : -371, "y" : 65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 0 },
		/* 123 */ { "x" : -371, "y" : 171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 0 },
		/* 124 */ { "x" : -371, "y" : -65, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 0 },
		/* 125 */ { "x" : -371, "y" : -171, "trait" : "ballArea", "cMask" : ["ball" ], "bCoef" : 0 }

	],

	"segments" : [
		{ "v0" : 0, "v1" : 1, "trait" : "ballArea" },
		{ "v0" : 2, "v1" : 3, "trait" : "ballArea" },
		{ "v0" : 4, "v1" : 5, "trait" : "ballArea" },
		{ "v0" : 6, "v1" : 7, "trait" : "ballArea" },
		
		{ "v0" : 8, "v1" : 9, "trait" : "kickOffBarrier", "curve" : 180, "cGroup" : ["blueKO" ] },
		{ "v0" : 8, "v1" : 9, "trait" : "kickOffBarrier", "curve" : -180, "cGroup" : ["redKO" ] },
		
		{ "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 1, "v1" : 0, "cMask" : ["ball" ], "x" : -368 },
		{ "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 5, "v1" : 4, "cMask" : ["ball" ], "x" : 368 },
		{ "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 2, "v1" : 3, "cMask" : ["ball" ], "x" : -368 },
		{ "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 6, "v1" : 7, "cMask" : ["ball" ], "x" : 368 },
		{ "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 0, "v1" : 10, "y" : 171 },
		{ "vis" : true, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 3, "v1" : 11, "y" : -171 },
		
		{ "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "v0" : 12, "v1" : 13 },
		{ "curve" : -180, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "v0" : 9, "v1" : 8 },
		{ "curve" : 180, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "v0" : 15, "v1" : 14 },
		{ "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "v0" : 2, "v1" : 1 },
		{ "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0, "trait" : "line", "v0" : 6, "v1" : 5 },
		
		{ "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 16, "v1" : 17, "cMask" : ["ball" ], "x" : 330 },
		{ "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 18, "v1" : 19, "cMask" : ["ball" ], "x" : -330 },
		{ "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 20, "v1" : 21, "cMask" : ["ball" ], "x" : -330 },
		{ "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 22, "v1" : 23, "cMask" : ["ball" ], "x" : 330 },
		
		{ "v0" : 24, "v1" : 25, "trait" : "kickOffBarrier" },
		{ "v0" : 26, "v1" : 27, "trait" : "kickOffBarrier" },
		
		{ "v0" : 28, "v1" : 29, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [-700,-80 ], "y" : -80 },
		{ "v0" : 29, "v1" : 30, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "x" : -590 },
		{ "v0" : 30, "v1" : 31, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [-700,80 ], "y" : 80 },
		{ "v0" : 32, "v1" : 33, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [-700,-80 ], "y" : -80 },
		{ "v0" : 33, "v1" : 34, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "x" : -590 },
		{ "v0" : 34, "v1" : 35, "curve" : 0, "color" : "F8F8F8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [-700,80 ], "y" : 80 },
		
		{ "v0" : 36, "v1" : 37, "curve" : 94.0263701017, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 39, "v1" : 38, "curve" : 86.632306418889, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 40, "v1" : 41, "curve" : -94.026370101699, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 37, "v1" : 41, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 43, "v1" : 42, "curve" : -86.632306418888, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 45, "v1" : 44, "curve" : 86.632306418884, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 47, "v1" : 46, "curve" : -86.632306418899, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 48, "v1" : 49, "curve" : -94.026370101699, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 50, "v1" : 51, "curve" : 94.026370101699, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" },
		{ "v0" : 52, "v1" : 53, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 390 },
		{ "v0" : 55, "v1" : 54, "curve" : -180.00692920292, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 54, "v1" : 55, "curve" : -180.00218240614, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 57, "v1" : 56, "curve" : -179.64823645332, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 56, "v1" : 57, "curve" : -180.35758668147, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 59, "v1" : 58, "curve" : -180.02357323962, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 58, "v1" : 59, "curve" : -180.00924102399, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 61, "v1" : 60, "curve" : -180.06885755885, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 60, "v1" : 61, "curve" : -180.02948353257, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 },
		{ "v0" : 63, "v1" : 62, "curve" : -179.99869069543, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 62, "v1" : 63, "curve" : -179.99939258776, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 65, "v1" : 64, "curve" : -180.08826047163, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 64, "v1" : 65, "curve" : -179.91186753664, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 67, "v1" : 66, "curve" : -179.99528711105, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 66, "v1" : 67, "curve" : -179.99743836358, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 69, "v1" : 68, "curve" : -179.98626041101, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 68, "v1" : 69, "curve" : -179.99175181595, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 },
		{ "v0" : 71, "v1" : 70, "curve" : -180.04715562398, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 70, "v1" : 71, "curve" : -179.95294709391, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 73, "v1" : 72, "curve" : -179.95715750564, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 72, "v1" : 73, "curve" : -179.89943871875, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 75, "v1" : 74, "curve" : -179.94773754738, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 74, "v1" : 75, "curve" : -179.98221351296, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 77, "v1" : 76, "curve" : -180.4151727218, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 76, "v1" : 77, "curve" : -179.58764458796, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 },
		{ "v0" : 79, "v1" : 78, "curve" : -180.00086646359, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 78, "v1" : 79, "curve" : -180.01965986376, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 81, "v1" : 80, "curve" : -180.03532601389, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 80, "v1" : 81, "curve" : -179.99380079, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 83, "v1" : 82, "curve" : -180.0044468452, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 82, "v1" : 83, "curve" : -180.01386779847, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 85, "v1" : 84, "curve" : -180.05158287563, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 84, "v1" : 85, "curve" : -180.01212223878, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 },
		{ "v0" : 86, "v1" : 87, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240 },
		{ "v0" : 88, "v1" : 89, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -120 },
		{ "v0" : 90, "v1" : 91, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 240 },
		{ "v0" : 92, "v1" : 93, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 120 },
		{ "v0" : 94, "v1" : 95, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 96, "v1" : 97, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },
		{ "v0" : 98, "v1" : 99, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 },
		{ "v0" : 100, "v1" : 101, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 },
		{ "v0" : 102, "v1" : 103, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 },
		{ "v0" : 104, "v1" : 105, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -381 },
		{ "v0" : 106, "v1" : 107, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		{ "v0" : 108, "v1" : 109, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 381 },
		
		{ "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 110, "v1" : 111, "cMask" : ["ball" ], "x" : 330 },
		{ "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 112, "v1" : 113, "cMask" : ["ball" ], "x" : -330 },
		{ "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 114, "v1" : 115, "cMask" : ["ball" ], "x" : -330 },
		{ "vis" : false, "color" : "FFFFFF", "bCoef" : 1, "trait" : "ballArea", "v0" : 116, "v1" : 117, "cMask" : ["ball" ], "x" : 330 },
		{ "vis" : false, "color" : "FFFFFF", "bCoef" : 0, "trait" : "ballArea", "v0" : 118, "v1" : 119, "cMask" : ["ball" ], "x" : 371 },
		{ "vis" : false, "color" : "FFFFFF", "bCoef" : 0, "trait" : "ballArea", "v0" : 120, "v1" : 121, "cMask" : ["ball" ], "x" : 371 },
		{ "vis" : false, "color" : "FFFFFF", "bCoef" : 0, "trait" : "ballArea", "v0" : 122, "v1" : 123, "cMask" : ["ball" ], "x" : -371 },
		{ "vis" : false, "color" : "FFFFFF", "bCoef" : 0, "trait" : "ballArea", "v0" : 124, "v1" : 125, "cMask" : ["ball" ], "x" : -371 }

	],

	"goals" : [
		{ "p0" : [-374.25,-62.053454903872 ], "p1" : [-374.25,64.043361696331 ], "team" : "red" },
		{ "p0" : [374.25,62 ], "p1" : [374.25,-62 ], "team" : "blue" }

	],

	"discs" : [
		{ "radius" : 3.9405255187564, "pos" : [-368.53340356886,64.043361696331 ], "color" : "6666CC", "trait" : "goalPost", "y" : 80 },
		{ "radius" : 3.9405255187564, "pos" : [-368.53340356886,-62.053454903872 ], "color" : "6666CC", "trait" : "goalPost", "y" : -80, "x" : -560 },
		{ "radius" : 3.9405255187564, "pos" : [368.9681846993,-62.144998272018 ], "color" : "6666CC", "trait" : "goalPost", "y" : 80 },
		{ "radius" : 3.9405255187564, "pos" : [368.09926357786,63.94882446641 ], "color" : "6666CC", "trait" : "goalPost", "y" : -80, "x" : -560 },
		
		{ "radius" : 3, "invMass" : 0, "pos" : [-368,-171 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [-368,171 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [368,171 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" },
		{ "radius" : 3, "invMass" : 0, "pos" : [368,-171 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -171, "trait" : "ballArea" },
		{ "normal" : [0,-1 ], "dist" : -171, "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -200, "bCoef" : 0.2, "cMask" : ["all" ] },
		{ "normal" : [0,-1 ], "dist" : -200, "bCoef" : 0.2, "cMask" : ["all" ] },
		{ "normal" : [1,0 ], "dist" : -420, "bCoef" : 0.2, "cMask" : ["all" ] },
		{ "normal" : [-1,0 ], "dist" : -420, "bCoef" : 0.2, "cMask" : ["all" ] }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 1 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["all" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] },
		"line" : { "vis" : true, "bCoef" : 0, "cMask" : ["" ] },
		"arco" : { "radius" : 2, "cMask" : ["n/d" ], "color" : "cccccc" }

	},

	"playerPhysics" : {
		"acceleration" : 0.11,
		"kickingAcceleration" : 0.083,
		"kickStrength" : 5,
		"bCoef" : 0

	},

	"ballPhysics" : {
		"radius" : 6.25,
		"color" : "FFCC00",
		"bCoef" : 0.4,
		"invMass" : 1.5,
		"damping" : 0.99

	}
}`;

var Handball=`
{

	"name" : "Escreva !help para mais informações",

	"width" : 790,

	"height" : 350,

	"spawnDistance" : 350,

	"redSpawnPoints" : [
		[ -102, -50
		],
		[ -102, 50
		],
		[ -268, 0
		],
		[ -650, 0
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

	"bg" : { "type" : "none", "width" : 653, "height" : 320, "kickOffRadius" : 0, "cornerRadius" : 0, "color" : "253D97" },

	"vertexes" : [
		/* 0 */ { "x" : -653, "y" : -89.24707947723184, "cMask" : ["blue" ], "cGroup" : ["blue" ], "trait" : "ballArea", "color" : "e56d56", "vis" : false },
		
		/* 1 */ { "x" : 0, "y" : 320, "trait" : "kickOffBarrier", "color" : "E9CC6D", "vis" : true },
		/* 2 */ { "x" : 0, "y" : 80, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "color" : "F26949", "vis" : true },
		/* 3 */ { "x" : 0, "y" : -80, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "color" : "F26949", "vis" : true },
		
		/* 4 */ { "x" : -653, "y" : -220, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blue" ], "curve" : 85, "color" : "E9CC6D", "vis" : false },
		/* 5 */ { "x" : -653, "y" : 220, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : -85, "color" : "E9CC6D", "vis" : false },
		/* 6 */ { "x" : 653, "y" : -220, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["red" ], "curve" : -85, "color" : "E9CC6D" },
		/* 7 */ { "x" : 553, "y" : 320, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 61, "color" : "EF7E29" },
		/* 8 */ { "x" : -458, "y" : -15, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "color" : "ffffff" },
		/* 9 */ { "x" : -458, "y" : 15, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "color" : "ffffff" },
		/* 10 */ { "x" : 458, "y" : -15, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "ffffff" },
		/* 11 */ { "x" : 458, "y" : 15, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "ffffff" },
		/* 12 */ { "x" : -800, "y" : -120, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 13 */ { "x" : -700, "y" : -120, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 14 */ { "x" : -700, "y" : 120, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 15 */ { "x" : -800, "y" : 120, "bCoef" : 0, "cMask" : ["blue" ] },
		
		/* 16 */ { "x" : -798, "y" : -120, "trait" : "kickOffBarrier" },
		/* 17 */ { "x" : -700, "y" : -120, "trait" : "kickOffBarrier" },
		/* 18 */ { "x" : -700, "y" : 120, "trait" : "kickOffBarrier" },
		/* 19 */ { "x" : -800, "y" : 120, "trait" : "kickOffBarrier" },
		
		/* 20 */ { "x" : -740, "y" : -80, "bCoef" : 0, "cMask" : ["blue" ], "color" : "6666FF" },
		/* 21 */ { "x" : -740, "y" : 80, "bCoef" : 0, "cMask" : ["blue" ], "color" : "6666FF" },
		/* 22 */ { "x" : -745, "y" : -80, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 23 */ { "x" : -735, "y" : -80, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 24 */ { "x" : -745, "y" : 80, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 25 */ { "x" : -735, "y" : 80, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 26 */ { "x" : -790, "y" : -80, "bCoef" : 0, "cMask" : ["red" ] },
		/* 27 */ { "x" : -790, "y" : 80, "bCoef" : 0, "cMask" : ["red" ] },
		/* 28 */ { "x" : 800, "y" : -120, "bCoef" : 0, "cMask" : ["red" ] },
		/* 29 */ { "x" : 700, "y" : -120, "bCoef" : 0, "cMask" : ["red" ], "curve" : 0 },
		/* 30 */ { "x" : 700, "y" : 120, "bCoef" : 0, "cMask" : ["red" ], "curve" : 0 },
		/* 31 */ { "x" : 800, "y" : 120, "bCoef" : 0, "cMask" : ["red" ] },
		
		/* 32 */ { "x" : 801, "y" : -120, "trait" : "kickOffBarrier" },
		/* 33 */ { "x" : 700, "y" : -120, "trait" : "kickOffBarrier" },
		/* 34 */ { "x" : 700, "y" : 120, "trait" : "kickOffBarrier" },
		/* 35 */ { "x" : 801, "y" : 120, "trait" : "kickOffBarrier" },
		
		/* 36 */ { "x" : 740, "y" : -80, "bCoef" : 0, "cMask" : ["red" ], "color" : "FF6666" },
		/* 37 */ { "x" : 740, "y" : 80, "bCoef" : 0, "cMask" : ["red" ], "color" : "FF6666" },
		/* 38 */ { "x" : 745, "y" : -80, "bCoef" : 0, "cMask" : ["red" ] },
		/* 39 */ { "x" : 735, "y" : -80, "bCoef" : 0, "cMask" : ["red" ] },
		/* 40 */ { "x" : 745, "y" : 80, "bCoef" : 0, "cMask" : ["red" ] },
		/* 41 */ { "x" : 735, "y" : 80, "bCoef" : 0, "cMask" : ["red" ] },
		/* 42 */ { "x" : 790, "y" : -80, "bCoef" : 0, "cMask" : ["blue" ] },
		/* 43 */ { "x" : 790, "y" : 80, "bCoef" : 0, "cMask" : ["blue" ] },
		
		/* 44 */ { "x" : 0, "y" : 320, "trait" : "kickOffBarrier", "color" : "E9CC6D", "vis" : true },
		/* 45 */ { "x" : 0, "y" : -80, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier", "color" : "585757", "vis" : true, "curve" : 0 },
		/* 46 */ { "x" : 0, "y" : -354, "trait" : "kickOffBarrier", "color" : "585757", "vis" : true, "curve" : 0 },
		/* 47 */ { "x" : 0, "y" : 320, "trait" : "kickOffBarrier", "color" : "E9CC6D", "vis" : true, "curve" : 0 },
		/* 48 */ { "x" : 0, "y" : 80, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "color" : "EF7E29", "vis" : true, "curve" : 0 },
		/* 49 */ { "x" : 0, "y" : 354, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "color" : "585757", "vis" : true, "curve" : 0 },
		/* 50 */ { "x" : 0, "y" : 80, "trait" : "kickOffBarrier", "color" : "585757", "vis" : true, "curve" : 0 },
		
		/* 51 */ { "x" : 653, "y" : 94, "cMask" : ["red" ], "cGroup" : ["red" ], "trait" : "ballArea", "vis" : false, "color" : "E9CC6D" },
		/* 52 */ { "x" : 653, "y" : -94, "cMask" : ["red" ], "cGroup" : ["red" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "color" : "E9CC6D" },
		
		/* 53 */ { "x" : 653, "y" : -220, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : -85, "color" : "88A9D9", "vis" : false },
		
		/* 54 */ { "x" : -653, "y" : 320, "trait" : "ballArea", "vis" : true, "color" : "ffffff", "curve" : 0 },
		/* 55 */ { "x" : -653, "y" : 94, "trait" : "ballArea", "vis" : false, "color" : "ffffff" },
		/* 56 */ { "x" : -653, "y" : -89.24707947723184, "cMask" : ["ball" ], "cGroup" : ["blue" ], "trait" : "ballArea", "color" : "ffffff", "vis" : false },
		/* 57 */ { "x" : -653, "y" : -320, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "ffffff", "vis" : true },
		
		/* 58 */ { "x" : -653, "y" : 220, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : -85, "color" : "E9CC6D", "vis" : false },
		
		/* 59 */ { "x" : 653, "y" : 320, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : true, "color" : "FFFFFF", "curve" : 0 },
		/* 60 */ { "x" : 653, "y" : 91.33920484545074, "cMask" : ["ball" ], "cGroup" : ["red" ], "trait" : "ballArea", "vis" : false, "color" : "FFFFFF", "curve" : 0 },
		/* 61 */ { "x" : 653, "y" : -94, "cMask" : ["ball" ], "cGroup" : ["red" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "color" : "FFFFFF" },
		/* 62 */ { "x" : 653, "y" : -320, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : true, "color" : "FFFFFF" },
		
		/* 63 */ { "x" : 653, "y" : 220, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["red" ], "curve" : 0, "color" : "E9CC6D", "vis" : false },
		/* 64 */ { "x" : 653, "y" : -220, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : 0, "color" : "88A9D9", "vis" : false },
		
		/* 65 */ { "x" : 653, "y" : -94, "cMask" : ["ball" ], "cGroup" : ["red" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "color" : "FFFFFF" },
		/* 66 */ { "x" : 653, "y" : -320, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : true, "color" : "FFFFFF" },
		/* 67 */ { "x" : 653, "y" : 320, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : true, "color" : "FFFFFF", "curve" : 0 },
		/* 68 */ { "x" : 653, "y" : 94, "cMask" : ["ball" ], "cGroup" : ["red" ], "trait" : "ballArea", "vis" : false, "color" : "FFFFFF", "curve" : 0 },
		/* 69 */ { "x" : -653, "y" : 94.08069095559071, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false },
		/* 70 */ { "x" : -653, "y" : 320, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false },
		/* 71 */ { "x" : -653, "y" : -320, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false },
		/* 72 */ { "x" : -653, "y" : -89.24707947723184, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false },
		
		/* 73 */ { "x" : 651, "y" : 220, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : 85, "color" : "2CAAFF" },
		/* 74 */ { "x" : 486, "y" : 110, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : 8, "color" : "2CAAFF" },
		/* 75 */ { "x" : 651, "y" : -220, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : -85, "color" : "2CAAFF" },
		/* 76 */ { "x" : 486, "y" : -110, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : 8, "color" : "2CAAFF" },
		/* 77 */ { "x" : -651, "y" : -220, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : 85, "color" : "2CAAFF" },
		/* 78 */ { "x" : -483, "y" : -101, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : 8, "color" : "2CAAFF" },
		/* 79 */ { "x" : -651, "y" : 220, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : -85, "color" : "2CAAFF" },
		/* 80 */ { "x" : -483, "y" : 99, "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ], "curve" : 8, "color" : "2CAAFF" },
		/* 81 */ { "x" : 521.901256418312, "y" : 305.9572422383344, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 82 */ { "x" : -553, "y" : 320, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "curve" : -61, "color" : "EF7E29" },
		/* 83 */ { "x" : -553, "y" : -320, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "curve" : 61, "color" : "EF7E29" },
		/* 84 */ { "x" : -522.0946317738246, "y" : -306.85287598443875, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 85 */ { "x" : -506.1420251852333, "y" : -296.7757654754572, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 86 */ { "x" : -469.7255367603498, "y" : -269.1764681158355, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "curve" : 8.088971148362203, "color" : "EF7E29" },
		/* 87 */ { "x" : -432.82271686760123, "y" : -234.09941957482695, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "curve" : 8.088971148362203, "color" : "EF7E29" },
		/* 88 */ { "x" : -376.9078647720215, "y" : -57.98404915925913, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 89 */ { "x" : -376.04228885079664, "y" : -39.98421647278644, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 90 */ { "x" : -418.91986908926475, "y" : -213.0447750469475, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 91 */ { "x" : -388.05932760879983, "y" : -143.0001405310138, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 92 */ { "x" : -506.1420251852333, "y" : 296.7757654754572, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "curve" : 13.235175487479236, "color" : "EF7E29" },
		/* 93 */ { "x" : -522.0946317738246, "y" : 306.85287598443875, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "curve" : 13.235175487479236, "color" : "EF7E29" },
		/* 94 */ { "x" : -469.7255367603498, "y" : 269.1764681158355, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 95 */ { "x" : -486.1562730031999, "y" : 282.1992379255447, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 96 */ { "x" : -450.5, "y" : 252.49609375, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 97 */ { "x" : -380.6676342406169, "y" : -111.48765640168591, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 98 */ { "x" : -377.7933553715835, "y" : -89.98390663292105, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 99 */ { "x" : -486.1562730031999, "y" : -282.1992379255447, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "color" : "EF7E29" },
		/* 100 */ { "x" : -376.04228885079664, "y" : -9.492522744034375, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "color" : "EF7E29" },
		/* 101 */ { "x" : -450.5, "y" : -252.49609375, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "color" : "EF7E29" },
		/* 102 */ { "x" : -408.5, "y" : -194.49609375, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "color" : "EF7E29" },
		/* 103 */ { "x" : -396.5, "y" : -168.49609375, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "color" : "EF7E29" },
		/* 104 */ { "x" : -434.82271686760123, "y" : 236.09941957482695, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 105 */ { "x" : -418.91986908926475, "y" : 213.0447750469475, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 106 */ { "x" : -408.5, "y" : 194.49609375, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 107 */ { "x" : -396.5, "y" : 168.49609375, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 108 */ { "x" : -388.05932760879983, "y" : 145.0001405310138, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 109 */ { "x" : -381.6676342406169, "y" : 117.48765640168591, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 110 */ { "x" : -378.7933553715835, "y" : 94.98390663292105, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 111 */ { "x" : -376.9078647720215, "y" : 66.98404915925913, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 112 */ { "x" : -376.04228885079664, "y" : 15.015783527213557, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 113 */ { "x" : -376.04228885079664, "y" : 44.507477255965625, "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "color" : "EF7E29" },
		/* 114 */ { "x" : 553, "y" : -320, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : -61, "color" : "EF7E29" },
		/* 115 */ { "x" : 552.0899057985382, "y" : 320.2098043123669, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 61, "color" : "EF7E29" },
		/* 116 */ { "x" : 521.2378162708901, "y" : 306.93813422703, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 117 */ { "x" : 523.713123102581, "y" : -306.762625798387, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 13.235175487479236, "color" : "EF7E29" },
		/* 118 */ { "x" : 505.78555149359147, "y" : 296.43458264259755, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 119 */ { "x" : 469.18816225723685, "y" : 269.07561802353257, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 8.088971148362203, "color" : "EF7E29" },
		/* 120 */ { "x" : 432.0552250397206, "y" : 234.24226584512587, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 8.088971148362203, "color" : "EF7E29" },
		/* 121 */ { "x" : 374.98219316389105, "y" : 58.49880675209518, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 122 */ { "x" : 373.9981406555976, "y" : 40.50506230916902, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 123 */ { "x" : 418.0140729386622, "y" : 213.2796018870813, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 124 */ { "x" : 386.69308683511514, "y" : 143.43964430949083, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 125 */ { "x" : 501.878121149686, "y" : -297.1040865966373, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 13.235175487479236, "color" : "EF7E29" },
		/* 126 */ { "x" : 465.6441117593936, "y" : -269.26565259885837, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 127 */ { "x" : 481.98876130101564, "y" : -282.396305985508, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 128 */ { "x" : 446.5288007685749, "y" : -252.45907536158984, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 129 */ { "x" : 379.0941026750565, "y" : 111.97650354787007, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 130 */ { "x" : 376.07832398363433, "y" : 90.49214151361383, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 131 */ { "x" : 485.7042731236562, "y" : 281.9899398735921, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "color" : "EF7E29" },
		/* 132 */ { "x" : 373.7974096944257, "y" : 10.014029307165885, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "color" : "EF7E29" },
		/* 133 */ { "x" : 449.8532329264895, "y" : 252.5221694256424, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "color" : "EF7E29" },
		/* 134 */ { "x" : 407.4723211500617, "y" : 194.79991793630217, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "color" : "EF7E29" },
		/* 135 */ { "x" : 395.30141964764476, "y" : 168.87947896203968, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "color" : "EF7E29" },
		/* 136 */ { "x" : 430.959798881452, "y" : -235.9595508030171, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 137 */ { "x" : 415.2090675592799, "y" : -212.80071524108587, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 138 */ { "x" : 404.91153274716675, "y" : -194.18384046344227, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 139 */ { "x" : 393.08295430734483, "y" : -168.10540622952055, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 140 */ { "x" : 384.7971418689347, "y" : -144.55439605331273, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 141 */ { "x" : 378.5867054225696, "y" : -117.0004307084653, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 142 */ { "x" : 375.8606340776635, "y" : -94.47824680692861, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 143 */ { "x" : 374.15951119960124, "y" : -66.46658362353033, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 144 */ { "x" : 373.6360681855451, "y" : -14.493745891795022, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "EF7E29" },
		/* 145 */ { "x" : 373.44192036019246, "y" : -43.984800562871555, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "color" : "EF7E29" },
		/* 146 */ { "x" : 530, "y" : -8, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "ffffff" },
		/* 147 */ { "x" : 530, "y" : 8, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "ffffff" },
		/* 148 */ { "x" : -530, "y" : -8, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "ffffff" },
		/* 149 */ { "x" : -530, "y" : 8, "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "curve" : 0, "color" : "ffffff" },
		
		/* 150 */ { "x" : -653, "y" : 94.08069095559071, "trait" : "ballArea" },
		
		/* 151 */ { "x" : -653, "y" : -89.24707947723184, "trait" : "goalNet", "color" : "FFFFFF" },
		/* 152 */ { "x" : -683, "y" : -89.24707947723184, "trait" : "goalNet", "color" : "FFFFFF", "cMask" : ["blue" ] },
		/* 153 */ { "x" : -683, "y" : 94.08069095559071, "trait" : "goalNet", "color" : "FFFFFF", "cMask" : ["blue" ] },
		/* 154 */ { "x" : -653, "y" : 94.08069095559071, "trait" : "goalNet", "color" : "FFFFFF" },
		
		/* 155 */ { "x" : -653, "y" : 94.08069095559071, "trait" : "fieldArea" },
		
		/* 156 */ { "x" : -653, "y" : 91.08069095559071, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "trait" : "line", "color" : "FFFFFF", "vis" : true },
		/* 157 */ { "x" : -653, "y" : -92.24707947723184, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "trait" : "line", "color" : "FFFFFF", "vis" : true },
		/* 158 */ { "x" : -653, "y" : -60.60211534710332, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "trait" : "line", "color" : "FFFFFF" },
		/* 159 */ { "x" : -653, "y" : -51.95715121697479, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "trait" : "line" },
		/* 160 */ { "x" : -653, "y" : -31.332777043282263, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "trait" : "line" },
		/* 161 */ { "x" : -653, "y" : -6, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "trait" : "line" },
		/* 162 */ { "x" : -653, "y" : 16, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "trait" : "line" },
		/* 163 */ { "x" : -653, "y" : 66.58152539066732, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "trait" : "line", "color" : "FFFFFF" },
		
		/* 164 */ { "x" : -667, "y" : -89.24707947723184, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "trait" : "goalNet", "color" : "FFFFFF" },
		
		/* 165 */ { "x" : -671, "y" : 94.08069095559071, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "color" : "FFFFFF" },
		
		/* 166 */ { "x" : -653, "y" : -84.22648952079584, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "trait" : "line" },
		/* 167 */ { "x" : -653, "y" : -69.60211534710332, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "trait" : "line", "color" : "FFFFFF" },
		/* 168 */ { "x" : -653, "y" : 70, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "trait" : "line", "color" : "FFFFFF" },
		/* 169 */ { "x" : -653, "y" : 94.08069095559071, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "trait" : "line" },
		
		/* 170 */ { "x" : 652.2715278479752, "y" : -91.9828225460283, "trait" : "ballArea" },
		
		/* 171 */ { "x" : 653.722625690124, "y" : 91.33920484545074, "trait" : "goalNet", "color" : "FFFFFF" },
		/* 172 */ { "x" : 683.721685891206, "y" : 91.10174526602265, "trait" : "goalNet", "color" : "FFFFFF", "cMask" : ["red" ] },
		/* 173 */ { "x" : 682.2705880490571, "y" : -92.2202821254564, "trait" : "goalNet", "color" : "FFFFFF", "cMask" : ["red" ] },
		/* 174 */ { "x" : 652.2715278479752, "y" : -91.9828225460283, "trait" : "goalNet", "color" : "FFFFFF" },
		
		/* 175 */ { "x" : 652.2715278479752, "y" : -91.9828225460283, "trait" : "fieldArea" },
		
		/* 176 */ { "x" : 653, "y" : -91.9828225460283, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "trait" : "line", "color" : "FFFFFF", "vis" : true, "curve" : 0 },
		/* 177 */ { "x" : 653, "y" : 91.33920484545074, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "trait" : "line", "color" : "FFFFFF", "vis" : true, "curve" : 0 },
		/* 178 */ { "x" : 653, "y" : 62.69513806553215, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "trait" : "line", "color" : "FFFFFF" },
		/* 179 */ { "x" : 653, "y" : -64.48451843730645, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "trait" : "line", "color" : "FFFFFF" },
		
		/* 180 */ { "x" : 667.7221871172956, "y" : 91.22839037505096, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "trait" : "goalNet", "color" : "FFFFFF" },
		
		/* 181 */ { "x" : 670.2709639686243, "y" : -92.12529829368515, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "color" : "FFFFFF" },
		/* 182 */ { "x" : -150, "y" : 305, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "color" : "FFFFFF" },
		/* 183 */ { "x" : -150, "y" : 335, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "color" : "FFFFFF" },
		/* 184 */ { "x" : 150, "y" : 305, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "color" : "FFFFFF" },
		/* 185 */ { "x" : 150, "y" : 335, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "color" : "FFFFFF" },
		/* 186 */ { "x" : -150, "y" : -335, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "color" : "FFFFFF" },
		/* 187 */ { "x" : -150, "y" : -305, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "color" : "FFFFFF" },
		/* 188 */ { "x" : 150, "y" : -335, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "color" : "FFFFFF" },
		/* 189 */ { "x" : 150, "y" : -305, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "color" : "FFFFFF" },
		
		/* 190 */ { "x" : -653, "y" : 35, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "trait" : "line" },
		/* 191 */ { "x" : -653, "y" : 50, "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "trait" : "line" },
		/* 192 */ { "x" : 653, "y" : -51.95715121697479, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "trait" : "line" },
		/* 193 */ { "x" : 653, "y" : -31.332777043282263, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "trait" : "line" },
		/* 194 */ { "x" : 653, "y" : -6, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "trait" : "line" },
		/* 195 */ { "x" : 653, "y" : 16, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "trait" : "line" },
		/* 196 */ { "x" : 653, "y" : -91.9828225460283, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "trait" : "line" },
		/* 197 */ { "x" : 653, "y" : -69.60211534710332, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "trait" : "line", "color" : "FFFFFF" },
		/* 198 */ { "x" : 653, "y" : 70, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "trait" : "line", "color" : "FFFFFF" },
		/* 199 */ { "x" : 653, "y" : 94.08069095559071, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "trait" : "line" },
		/* 200 */ { "x" : 653, "y" : 35, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "trait" : "line" },
		/* 201 */ { "x" : 653, "y" : 50, "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "trait" : "line" },
		
		/* 202 */ { "x" : 0, "y" : 80, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "color" : "F26949", "vis" : true, "curve" : 0 },
		/* 203 */ { "x" : 0, "y" : -80, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "color" : "F26949", "vis" : true, "curve" : 0 },
		/* 204 */ { "x" : 0, "y" : 354, "trait" : "kickOffBarrier", "color" : "EF7E29", "vis" : true, "curve" : 0 },
		/* 205 */ { "x" : 0, "y" : 80, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "color" : "EF7E29", "vis" : true, "curve" : 0 },
		/* 206 */ { "x" : 0, "y" : -354, "trait" : "kickOffBarrier", "color" : "EF7E29", "vis" : true, "curve" : 0 },
		/* 207 */ { "x" : 0, "y" : -80, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "color" : "EF7E29", "vis" : true, "curve" : 0 },
		
		/* 208 */ { "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blue" ], "x" : -800, "y" : -220, "vis" : false, "curve" : 0 },
		/* 209 */ { "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blue" ], "x" : -653, "y" : -220, "vis" : false, "curve" : 0 },
		/* 210 */ { "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blue" ], "x" : -800, "y" : 220, "vis" : false, "curve" : 0 },
		/* 211 */ { "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blue" ], "x" : -653, "y" : 220, "vis" : false, "curve" : 0 },
		/* 212 */ { "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["red" ], "x" : 652, "y" : -220, "vis" : false, "curve" : 0 },
		/* 213 */ { "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["red" ], "x" : 799, "y" : -220, "vis" : false, "curve" : 0 },
		/* 214 */ { "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["red" ], "x" : 653, "y" : 220, "vis" : false, "curve" : 0 },
		/* 215 */ { "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["red" ], "x" : 799, "y" : 220, "vis" : false, "curve" : 0 },
		
		/* 216 */ { "x" : -653, "y" : 320, "trait" : "ballArea", "vis" : true, "color" : "ffffff", "curve" : 0 },
		/* 217 */ { "x" : 653, "y" : 320, "trait" : "ballArea", "vis" : true, "color" : "ffffff", "curve" : 0 },
		/* 218 */ { "x" : -653, "y" : -320, "trait" : "ballArea", "color" : "ffffff", "vis" : true, "curve" : 0 },
		/* 219 */ { "x" : 653, "y" : -320, "trait" : "ballArea", "curve" : 0, "vis" : true, "color" : "ffffff" }

	],

	"segments" : [
		{ "v0" : 2, "v1" : 3, "curve" : 180, "vis" : true, "color" : "F26949", "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },
		{ "v0" : 2, "v1" : 3, "curve" : -180, "vis" : true, "color" : "F26949", "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" },
		
		{ "v0" : 4, "v1" : 0, "curve" : 0, "vis" : false, "color" : "E9CC6D", "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blue" ] },
		{ "v0" : 8, "v1" : 9, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "x" : -458 },
		{ "v0" : 10, "v1" : 11, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "x" : 462 },
		{ "v0" : 12, "v1" : 13, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ] },
		{ "v0" : 13, "v1" : 14, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ] },
		{ "v0" : 14, "v1" : 15, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ] },
		
		{ "v0" : 16, "v1" : 17, "trait" : "kickOffBarrier" },
		{ "v0" : 18, "v1" : 19, "trait" : "kickOffBarrier" },
		
		{ "v0" : 20, "v1" : 21, "color" : "6666FF", "bCoef" : 1000000, "cMask" : ["blue" ] },
		{ "v0" : 22, "v1" : 23, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ] },
		{ "v0" : 24, "v1" : 25, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ] },
		{ "v0" : 26, "v1" : 27, "vis" : false, "bCoef" : 1000000, "cMask" : ["red" ] },
		{ "v0" : 28, "v1" : 29, "vis" : false, "bCoef" : 0, "cMask" : ["red" ] },
		{ "v0" : 29, "v1" : 30, "vis" : false, "bCoef" : 0, "cMask" : ["red" ], "curve" : 0 },
		{ "v0" : 30, "v1" : 31, "vis" : false, "bCoef" : 0, "cMask" : ["red" ] },
		
		{ "v0" : 32, "v1" : 33, "trait" : "kickOffBarrier" },
		{ "v0" : 34, "v1" : 35, "trait" : "kickOffBarrier" },
		
		{ "v0" : 36, "v1" : 37, "color" : "FF6666", "bCoef" : 1000000, "cMask" : ["red" ] },
		{ "v0" : 38, "v1" : 39, "vis" : false, "bCoef" : 0, "cMask" : ["red" ] },
		{ "v0" : 40, "v1" : 41, "vis" : false, "bCoef" : 0, "cMask" : ["red" ] },
		{ "v0" : 42, "v1" : 43, "vis" : false, "bCoef" : 1000000, "cMask" : ["blue" ] },
		
		{ "v0" : 45, "v1" : 46, "curve" : 0, "vis" : true, "color" : "585757", "trait" : "kickOffBarrier", "x" : 0 },
		{ "v0" : 49, "v1" : 50, "curve" : 0, "vis" : true, "color" : "585757", "trait" : "kickOffBarrier", "x" : 0 },
		
		{ "v0" : 54, "v1" : 55, "vis" : true, "color" : "ffffff", "trait" : "ballArea" },
		{ "v0" : 56, "v1" : 57, "vis" : true, "color" : "ffffff", "cMask" : ["ball" ], "trait" : "ballArea" },
		
		{ "v0" : 58, "v1" : 55, "curve" : 0, "vis" : false, "color" : "E9CC6D", "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blue" ] },
		
		{ "v0" : 59, "v1" : 60, "vis" : true, "color" : "FFFFFF", "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "x" : 653, "y" : 320 },
		{ "v0" : 61, "v1" : 62, "curve" : 0, "vis" : true, "color" : "FFFFFF", "cMask" : ["ball" ], "trait" : "ballArea" },
		
		{ "v0" : 63, "v1" : 60, "curve" : 0, "vis" : false, "color" : "E9CC6D", "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["red" ], "x" : 653 },
		{ "v0" : 64, "v1" : 61, "curve" : 0, "vis" : false, "color" : "E9CC6D", "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["red" ] },
		
		{ "v0" : 65, "v1" : 66, "curve" : 0, "vis" : true, "color" : "FFFFFF", "cMask" : ["ball" ], "trait" : "ballArea" },
		{ "v0" : 67, "v1" : 68, "vis" : true, "color" : "FFFFFF", "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 },
		{ "v0" : 69, "v1" : 70, "vis" : false, "color" : "ffffff", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },
		{ "v0" : 71, "v1" : 72, "vis" : false, "color" : "ffffff", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" },
		
		{ "v0" : 73, "v1" : 74, "curve" : 85, "vis" : true, "color" : "2CAAFF", "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ] },
		{ "v0" : 75, "v1" : 76, "curve" : -85, "vis" : true, "color" : "2CAAFF", "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ] },
		{ "v0" : 74, "v1" : 76, "curve" : 8, "vis" : true, "color" : "2CAAFF", "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ] },
		{ "v0" : 77, "v1" : 78, "curve" : 85, "vis" : true, "color" : "2CAAFF", "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ] },
		{ "v0" : 79, "v1" : 80, "curve" : -85, "vis" : true, "color" : "2CAAFF", "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ] },
		{ "v0" : 78, "v1" : 80, "curve" : 8, "vis" : true, "color" : "2CAAFF", "bCoef" : 1, "cMask" : ["blue","red" ], "cGroup" : ["blue","red" ] },
		{ "v0" : 7, "v1" : 81, "curve" : 0, "vis" : true, "color" : "EF7E29", "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ] },
		{ "v0" : 83, "v1" : 84, "curve" : 0, "vis" : true, "color" : "EF7E29", "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ] },
		{ "v0" : 85, "v1" : 99, "curve" : 0, "vis" : true, "color" : "EF7E29", "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ] },
		{ "v0" : 87, "v1" : 90, "curve" : 0, "vis" : true, "color" : "EF7E29", "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ] },
		{ "v0" : 91, "v1" : 97, "curve" : 0, "vis" : true, "color" : "EF7E29", "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ] },
		{ "v0" : 98, "v1" : 88, "curve" : 0, "vis" : true, "color" : "EF7E29", "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ] },
		{ "v0" : 89, "v1" : 100, "curve" : 0, "vis" : true, "color" : "EF7E29", "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ] },
		{ "v0" : 96, "v1" : 94, "curve" : 0, "vis" : true, "color" : "EF7E29", "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ] },
		{ "v0" : 95, "v1" : 92, "curve" : 0, "vis" : true, "color" : "EF7E29", "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ] },
		{ "v0" : 93, "v1" : 82, "curve" : 0, "vis" : true, "color" : "EF7E29", "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ] },
		{ "v0" : 86, "v1" : 101, "curve" : 0, "vis" : true, "color" : "EF7E29", "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ] },
		{ "v0" : 102, "v1" : 103, "curve" : 0, "vis" : true, "color" : "EF7E29", "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ] },
		{ "v0" : 97, "v1" : 97, "curve" : 0, "vis" : true, "color" : "EF7E29", "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ] },
		{ "v0" : 104, "v1" : 105, "curve" : 0, "vis" : true, "color" : "EF7E29", "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ] },
		{ "v0" : 106, "v1" : 107, "curve" : 0, "vis" : true, "color" : "EF7E29", "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ] },
		{ "v0" : 108, "v1" : 109, "curve" : 0, "vis" : true, "color" : "EF7E29", "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ] },
		{ "v0" : 110, "v1" : 111, "curve" : 0, "vis" : true, "color" : "EF7E29", "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ] },
		{ "v0" : 112, "v1" : 113, "curve" : 0, "vis" : true, "color" : "EF7E29", "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ] },
		{ "v0" : 117, "v1" : 114, "curve" : 0, "vis" : true, "color" : "EF7E29", "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ] },
		{ "v0" : 118, "v1" : 131, "curve" : 0, "vis" : true, "color" : "EF7E29", "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ] },
		{ "v0" : 120, "v1" : 123, "curve" : 0, "vis" : true, "color" : "EF7E29", "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ] },
		{ "v0" : 124, "v1" : 129, "curve" : 0, "vis" : true, "color" : "EF7E29", "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ] },
		{ "v0" : 130, "v1" : 121, "curve" : 0, "vis" : true, "color" : "EF7E29", "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ] },
		{ "v0" : 122, "v1" : 132, "curve" : 0, "vis" : true, "color" : "EF7E29", "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ] },
		{ "v0" : 128, "v1" : 126, "curve" : 0, "vis" : true, "color" : "EF7E29", "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ] },
		{ "v0" : 127, "v1" : 125, "curve" : 0, "vis" : true, "color" : "EF7E29", "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ] },
		{ "v0" : 119, "v1" : 133, "curve" : 0, "vis" : true, "color" : "EF7E29", "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ] },
		{ "v0" : 134, "v1" : 135, "curve" : 0, "vis" : true, "color" : "EF7E29", "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ] },
		{ "v0" : 129, "v1" : 129, "curve" : 0, "vis" : true, "color" : "EF7E29", "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ] },
		{ "v0" : 136, "v1" : 137, "curve" : 0, "vis" : true, "color" : "EF7E29", "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ] },
		{ "v0" : 138, "v1" : 139, "curve" : 0, "vis" : true, "color" : "EF7E29", "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ] },
		{ "v0" : 140, "v1" : 141, "curve" : 0, "vis" : true, "color" : "EF7E29", "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ] },
		{ "v0" : 142, "v1" : 143, "curve" : 0, "vis" : true, "color" : "EF7E29", "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ] },
		{ "v0" : 144, "v1" : 145, "curve" : 0, "vis" : true, "color" : "EF7E29", "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ] },
		{ "v0" : 146, "v1" : 147, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "x" : 530 },
		{ "v0" : 148, "v1" : 149, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "x" : -530 },
		
		{ "v0" : 151, "v1" : 152, "color" : "FFFFFF", "trait" : "goalNet" },
		{ "v0" : 152, "v1" : 153, "curve" : 0, "color" : "FFFFFF", "trait" : "goalNet", "cMask" : ["blue" ] },
		{ "v0" : 153, "v1" : 154, "color" : "FFFFFF", "trait" : "goalNet" },
		
		{ "v0" : 157, "v1" : 156, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "trait" : "line", "x" : -550 },
		{ "v0" : 159, "v1" : 160, "curve" : 0, "vis" : true, "color" : "CF0000", "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "trait" : "line" },
		{ "v0" : 161, "v1" : 162, "curve" : 0, "vis" : true, "color" : "CF0000", "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "trait" : "line" },
		
		{ "v0" : 158, "v1" : 164, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "trait" : "goalNet" },
		
		{ "v0" : 163, "v1" : 165, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ] },
		
		{ "v0" : 166, "v1" : 167, "curve" : 0, "vis" : true, "color" : "CF0000", "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "trait" : "line" },
		{ "v0" : 168, "v1" : 169, "curve" : 0, "vis" : true, "color" : "CF0000", "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "trait" : "line" },
		
		{ "v0" : 171, "v1" : 172, "color" : "FFFFFF", "trait" : "goalNet" },
		{ "v0" : 172, "v1" : 173, "curve" : 0, "color" : "FFFFFF", "trait" : "goalNet", "cMask" : ["red" ] },
		{ "v0" : 173, "v1" : 174, "color" : "FFFFFF", "trait" : "goalNet" },
		
		{ "v0" : 177, "v1" : 176, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "trait" : "line", "x" : 653 },
		
		{ "v0" : 178, "v1" : 180, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "trait" : "goalNet" },
		
		{ "v0" : 179, "v1" : 181, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ] },
		{ "v0" : 182, "v1" : 183, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "x" : -150 },
		{ "v0" : 184, "v1" : 185, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "x" : 150 },
		{ "v0" : 186, "v1" : 187, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "x" : -150 },
		{ "v0" : 188, "v1" : 189, "curve" : 0, "vis" : true, "color" : "FFFFFF", "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "x" : 150 },
		
		{ "v0" : 190, "v1" : 191, "curve" : 0, "vis" : true, "color" : "CF0000", "bCoef" : 0.1, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "trait" : "line" },
		{ "v0" : 192, "v1" : 193, "curve" : 0, "vis" : true, "color" : "CF0000", "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "trait" : "line", "x" : 653 },
		{ "v0" : 194, "v1" : 195, "curve" : 0, "vis" : true, "color" : "CF0000", "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "trait" : "line", "x" : 653 },
		{ "v0" : 196, "v1" : 197, "curve" : 0, "vis" : true, "color" : "CF0000", "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "trait" : "line", "x" : 653 },
		{ "v0" : 198, "v1" : 199, "curve" : 0, "vis" : true, "color" : "CF0000", "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "trait" : "line", "x" : 653 },
		{ "v0" : 200, "v1" : 201, "curve" : 0, "vis" : true, "color" : "CF0000", "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["redKO" ], "trait" : "line", "x" : 653 },
		
		{ "v0" : 203, "v1" : 202, "vis" : true, "color" : "F26949", "bCoef" : 0.1, "cMask" : ["red" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "curve" : 0 },
		{ "v0" : 204, "v1" : 205, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "kickOffBarrier" },
		{ "v0" : 206, "v1" : 207, "curve" : 0, "vis" : true, "color" : "EF7E29", "trait" : "kickOffBarrier" },
		
		{ "curve" : 0, "vis" : false, "color" : "2CAAFF", "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blue" ], "v0" : 208, "v1" : 209, "y" : -220 },
		{ "curve" : 0, "vis" : false, "color" : "2CAAFF", "bCoef" : 1, "cMask" : ["blue" ], "cGroup" : ["blue" ], "v0" : 210, "v1" : 211, "y" : 220 },
		{ "curve" : 0, "vis" : false, "color" : "2CAAFF", "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["red" ], "v0" : 212, "v1" : 213, "y" : -220 },
		{ "curve" : 0, "vis" : false, "color" : "2CAAFF", "bCoef" : 1, "cMask" : ["red" ], "cGroup" : ["red" ], "v0" : 214, "v1" : 215, "y" : 220 },
		
		{ "v0" : 217, "v1" : 216, "curve" : 0, "vis" : true, "color" : "ffffff", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : 290 },
		{ "v0" : 218, "v1" : 219, "vis" : true, "color" : "ffffff", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : -290, "curve" : 0 }

	],

	"goals" : [
		{ "p0" : [-661.6,96 ], "p1" : [-661.6,-94 ], "team" : "red" },
		{ "p0" : [661.6,-93.986883372199 ], "p1" : [661.6,96.011511591401 ], "team" : "blue" }

	],

	"discs" : [
		{ "radius" : 5.352099039641226, "pos" : [-653,94.08069095559071 ], "color" : "FFFFFF", "cMask" : ["ball","blue","red" ], "trait" : "goalPost", "vis" : false },
		{ "radius" : 5.352099039641226, "pos" : [-653,-89.24707947723184 ], "color" : "FFFFFF", "bCoef" : 0.5, "cMask" : ["ball","blue","red" ], "trait" : "goalPost", "vis" : false },
		{ "radius" : 5.352099039641226, "pos" : [653,-91.9828225460283 ], "color" : "FFFFFF", "cMask" : ["ball","blue","red" ], "trait" : "goalPost", "vis" : false },
		{ "radius" : 5.352099039641226, "pos" : [653,91.33920484545074 ], "color" : "FFFFFF", "bCoef" : 0.5, "cMask" : ["ball","blue","red" ], "trait" : "goalPost", "vis" : false },
		{ "radius" : 1.3, "invMass" : 0, "pos" : [-683,-89 ], "color" : "000001", "cMask" : ["ball" ], "damping" : 0, "trait" : "goalPost", "bCoef" : 0 },
		{ "radius" : 1.3, "invMass" : 0, "pos" : [-682,94 ], "color" : "000002", "cMask" : ["ball" ], "damping" : 0, "trait" : "goalPost", "bCoef" : 0 },
		{ "radius" : 1.3, "invMass" : 0, "pos" : [683,-92 ], "color" : "000003", "cMask" : ["ball" ], "damping" : 0, "trait" : "goalPost", "bCoef" : 0 },
		{ "radius" : 1.3, "invMass" : 0, "pos" : [684,91 ], "color" : "000004", "cMask" : ["ball" ], "damping" : 0, "trait" : "goalPost", "bCoef" : 0 },
		
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-690,-77 ], "color" : "ffffff", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-690,-63 ], "color" : "ffffff", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-691,-44 ], "color" : "ffffff", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-691,-30 ], "color" : "ffffff", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-691,-13 ], "color" : "ffffff", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-691,2 ], "color" : "ffffff", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-692,17 ], "color" : "ffffff", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-692,33 ], "color" : "ffffff", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-692,50 ], "color" : "ffffff", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-691,67 ], "color" : "ffffff", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [-690,82 ], "color" : "ffffff", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [691,-82 ], "color" : "ffffff", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [694,-66 ], "color" : "ffffff", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [697,-52 ], "color" : "ffffff", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [696,-35 ], "color" : "ffffff", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [697,-18 ], "color" : "ffffff", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [696,-4 ], "color" : "ffffff", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [696,15 ], "color" : "ffffff", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [696,36 ], "color" : "ffffff", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [696,51 ], "color" : "ffffff", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [695,67 ], "color" : "ffffff", "cMask" : ["ball" ], "damping" : 0.96 },
		{ "radius" : 4, "invMass" : 1.5, "pos" : [693,83 ], "color" : "ffffff", "cMask" : ["ball" ], "damping" : 0.96 }

	],


	"joints" : [
		{ "d0" : 5, "d1" : 9, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 9, "d1" : 10, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 10, "d1" : 11, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 11, "d1" : 12, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 12, "d1" : 13, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 13, "d1" : 14, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 14, "d1" : 15, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 15, "d1" : 16, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 16, "d1" : 17, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 17, "d1" : 18, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 18, "d1" : 19, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 19, "d1" : 6, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
		{ "d0" : 7, "d1" : 20, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" },
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
		{ "d0" : 30, "d1" : 8, "length" : 0.0000001, "strength" : 0.1, "color" : "EBEBEB" }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -320, "trait" : "ballArea" },
		{ "normal" : [0,-1 ], "dist" : -320, "trait" : "ballArea" },
		
		{ "normal" : [0,1 ], "dist" : -354, "bCoef" : 0.1 },
		{ "normal" : [0,-1 ], "dist" : -354, "bCoef" : 0.1 },
		{ "normal" : [1,0 ], "dist" : -800, "bCoef" : 0 },
		{ "normal" : [-1,0 ], "dist" : -800, "bCoef" : 0 }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] }

	},

	"ballPhysics" : {
		"radius" : 8.6,
		"color" : "fff100",
		"bCoef" : 0.4

	},

	"playerPhysics" : {
		"radius" : 15,
		"kickStrength" : 6.15,
		"bCoef" : 0.01

	}
}`;

var TenisLadrillos=`
{

	"name" : "Escreva !help para mais informações",

	"width" : 360,

	"height" : 171,

	"spawnDistance" : 350,

	"bg" : { "type" : "", "height" : 0, "width" : 0, "color" : "bc592f" },

	"vertexes" : [
		/* 0 */ { "x" : -345, "y" : 4, "trait" : "none", "color" : "d6652d" },
		/* 1 */ { "x" : 345, "y" : 3, "trait" : "none", "color" : "d6652d" },
		/* 2 */ { "x" : -345, "y" : 7, "trait" : "none", "color" : "d6652d" },
		/* 3 */ { "x" : 345, "y" : 6, "trait" : "none", "color" : "d6652d" },
		/* 4 */ { "x" : -345, "y" : 10, "trait" : "none", "color" : "d6652d" },
		/* 5 */ { "x" : 345, "y" : 9, "trait" : "none", "color" : "d6652d" },
		/* 6 */ { "x" : -345, "y" : 13, "trait" : "none", "color" : "d6652d" },
		/* 7 */ { "x" : 345, "y" : 12, "trait" : "none", "color" : "d6652d" },
		/* 8 */ { "x" : -345, "y" : 16, "trait" : "none", "color" : "d6652d" },
		/* 9 */ { "x" : 345, "y" : 15, "trait" : "none", "color" : "d6652d" },
		/* 10 */ { "x" : -345, "y" : -2, "trait" : "none", "color" : "d6652d" },
		/* 11 */ { "x" : 345, "y" : -3, "trait" : "none", "color" : "d6652d" },
		/* 12 */ { "x" : -345, "y" : -5, "trait" : "none", "color" : "d6652d" },
		/* 13 */ { "x" : 345, "y" : -6, "trait" : "none", "color" : "d6652d" },
		/* 14 */ { "x" : -345, "y" : -8, "trait" : "none", "color" : "d6652d" },
		/* 15 */ { "x" : 345, "y" : -9, "trait" : "none", "color" : "d6652d" },
		/* 16 */ { "x" : -345, "y" : -11, "trait" : "none", "color" : "d6652d" },
		/* 17 */ { "x" : 345, "y" : -12, "trait" : "none", "color" : "d6652d" },
		/* 18 */ { "x" : -345, "y" : -14, "trait" : "none", "color" : "d6652d" },
		/* 19 */ { "x" : 345, "y" : -15, "trait" : "none", "color" : "d6652d" },
		/* 20 */ { "x" : -345, "y" : -17, "trait" : "none", "color" : "d6652d" },
		/* 21 */ { "x" : 345, "y" : -18, "trait" : "none", "color" : "d6652d" },
		/* 22 */ { "x" : -345, "y" : -20, "trait" : "none", "color" : "d6652d" },
		/* 23 */ { "x" : 345, "y" : -21, "trait" : "none", "color" : "d6652d" },
		/* 24 */ { "x" : -345, "y" : -23, "trait" : "none", "color" : "d6652d" },
		/* 25 */ { "x" : 345, "y" : -24, "trait" : "none", "color" : "d6652d" },
		/* 26 */ { "x" : -345, "y" : -26, "trait" : "none", "color" : "d6652d" },
		/* 27 */ { "x" : 345, "y" : -27, "trait" : "none", "color" : "d6652d" },
		/* 28 */ { "x" : -345, "y" : -29, "trait" : "none", "color" : "d6652d" },
		/* 29 */ { "x" : 345, "y" : -30, "trait" : "none", "color" : "d6652d" },
		/* 30 */ { "x" : -345, "y" : -32, "trait" : "none", "color" : "d6652d" },
		/* 31 */ { "x" : 345, "y" : -33, "trait" : "none", "color" : "d6652d" },
		/* 32 */ { "x" : -345, "y" : -35, "trait" : "none", "color" : "d6652d" },
		/* 33 */ { "x" : 345, "y" : -36, "trait" : "none", "color" : "d6652d" },
		/* 34 */ { "x" : -345, "y" : -38, "trait" : "none", "color" : "d6652d" },
		/* 35 */ { "x" : 345, "y" : -39, "trait" : "none", "color" : "d6652d" },
		/* 36 */ { "x" : -345, "y" : -41, "trait" : "none", "color" : "d6652d" },
		/* 37 */ { "x" : 345, "y" : -42, "trait" : "none", "color" : "d6652d" },
		/* 38 */ { "x" : -345, "y" : 19, "trait" : "none", "color" : "d6652d" },
		/* 39 */ { "x" : 345, "y" : 18, "trait" : "none", "color" : "d6652d" },
		/* 40 */ { "x" : -345, "y" : 22, "trait" : "none", "color" : "d6652d" },
		/* 41 */ { "x" : 345, "y" : 21, "trait" : "none", "color" : "d6652d" },
		/* 42 */ { "x" : -345, "y" : 25, "trait" : "none", "color" : "d6652d" },
		/* 43 */ { "x" : 345, "y" : 24, "trait" : "none", "color" : "d6652d" },
		/* 44 */ { "x" : -345, "y" : 28, "trait" : "none", "color" : "d6652d" },
		/* 45 */ { "x" : 345, "y" : 27, "trait" : "none", "color" : "d6652d" },
		/* 46 */ { "x" : -345, "y" : 31, "trait" : "none", "color" : "d6652d" },
		/* 47 */ { "x" : 345, "y" : 30, "trait" : "none", "color" : "d6652d" },
		/* 48 */ { "x" : -345, "y" : 34, "trait" : "none", "color" : "d6652d" },
		/* 49 */ { "x" : 345, "y" : 33, "trait" : "none", "color" : "d6652d" },
		/* 50 */ { "x" : -345, "y" : 37, "trait" : "none", "color" : "d6652d" },
		/* 51 */ { "x" : 345, "y" : 36, "trait" : "none", "color" : "d6652d" },
		/* 52 */ { "x" : -345, "y" : 40, "trait" : "none", "color" : "d6652d" },
		/* 53 */ { "x" : 345, "y" : 39, "trait" : "none", "color" : "d6652d" },
		/* 54 */ { "x" : -345, "y" : 43, "trait" : "none", "color" : "d6652d" },
		/* 55 */ { "x" : 345, "y" : 42, "trait" : "none", "color" : "d6652d" },
		/* 56 */ { "x" : -345, "y" : 46, "trait" : "none", "color" : "d6652d" },
		/* 57 */ { "x" : 345, "y" : 45, "trait" : "none", "color" : "d6652d" },
		/* 58 */ { "x" : -345, "y" : 49, "trait" : "none", "color" : "d6652d" },
		/* 59 */ { "x" : 345, "y" : 48, "trait" : "none", "color" : "d6652d" },
		/* 60 */ { "x" : -345, "y" : 52, "trait" : "none", "color" : "d6652d" },
		/* 61 */ { "x" : 345, "y" : 51, "trait" : "none", "color" : "d6652d" },
		/* 62 */ { "x" : -345, "y" : 55, "trait" : "none", "color" : "d6652d" },
		/* 63 */ { "x" : 345, "y" : 54, "trait" : "none", "color" : "d6652d" },
		/* 64 */ { "x" : -345, "y" : 58, "trait" : "none", "color" : "d6652d" },
		/* 65 */ { "x" : 345, "y" : 57, "trait" : "none", "color" : "d6652d" },
		/* 66 */ { "x" : -345, "y" : 61, "trait" : "none", "color" : "d6652d" },
		/* 67 */ { "x" : 345, "y" : 60, "trait" : "none", "color" : "d6652d" },
		/* 68 */ { "x" : -345, "y" : -44, "trait" : "none", "color" : "d6652d" },
		/* 69 */ { "x" : 345, "y" : -45, "trait" : "none", "color" : "d6652d" },
		/* 70 */ { "x" : -345, "y" : -47, "trait" : "none", "color" : "d6652d" },
		/* 71 */ { "x" : 345, "y" : -48, "trait" : "none", "color" : "d6652d" },
		/* 72 */ { "x" : -345, "y" : -50, "trait" : "none", "color" : "d6652d" },
		/* 73 */ { "x" : 345, "y" : -51, "trait" : "none", "color" : "d6652d" },
		/* 74 */ { "x" : -345, "y" : -53, "trait" : "none", "color" : "d6652d" },
		/* 75 */ { "x" : 345, "y" : -54, "trait" : "none", "color" : "d6652d" },
		/* 76 */ { "x" : -345, "y" : -56, "trait" : "none", "color" : "d6652d" },
		/* 77 */ { "x" : 345, "y" : -57, "trait" : "none", "color" : "d6652d" },
		/* 78 */ { "x" : -345, "y" : -59, "trait" : "none", "color" : "d6652d" },
		/* 79 */ { "x" : 345, "y" : -60, "trait" : "none", "color" : "d6652d" },
		/* 80 */ { "x" : -345, "y" : -62, "trait" : "none", "color" : "d6652d" },
		/* 81 */ { "x" : 345, "y" : -63, "trait" : "none", "color" : "d6652d" },
		/* 82 */ { "x" : -345, "y" : -65, "trait" : "none", "color" : "d6652d" },
		/* 83 */ { "x" : 345, "y" : -66, "trait" : "none", "color" : "d6652d" },
		/* 84 */ { "x" : -345, "y" : -68, "trait" : "none", "color" : "d6652d" },
		/* 85 */ { "x" : 345, "y" : -69, "trait" : "none", "color" : "d6652d" },
		/* 86 */ { "x" : -345, "y" : -71, "trait" : "none", "color" : "d6652d" },
		/* 87 */ { "x" : 345, "y" : -72, "trait" : "none", "color" : "d6652d" },
		/* 88 */ { "x" : -345, "y" : -74, "trait" : "none", "color" : "d6652d" },
		/* 89 */ { "x" : 345, "y" : -75, "trait" : "none", "color" : "d6652d" },
		/* 90 */ { "x" : -345, "y" : -77, "trait" : "none", "color" : "d6652d" },
		/* 91 */ { "x" : 345, "y" : -78, "trait" : "none", "color" : "d6652d" },
		/* 92 */ { "x" : -345, "y" : -80, "trait" : "none", "color" : "d6652d" },
		/* 93 */ { "x" : 345, "y" : -81, "trait" : "none", "color" : "d6652d" },
		/* 94 */ { "x" : -345, "y" : 64, "trait" : "none", "color" : "d6652d" },
		/* 95 */ { "x" : 345, "y" : 63, "trait" : "none", "color" : "d6652d" },
		/* 96 */ { "x" : -345, "y" : 67, "trait" : "none", "color" : "d6652d" },
		/* 97 */ { "x" : 345, "y" : 66, "trait" : "none", "color" : "d6652d" },
		/* 98 */ { "x" : -345, "y" : 70, "trait" : "none", "color" : "d6652d" },
		/* 99 */ { "x" : 345, "y" : 69, "trait" : "none", "color" : "d6652d" },
		/* 100 */ { "x" : -345, "y" : 73, "trait" : "none", "color" : "d6652d" },
		/* 101 */ { "x" : 345, "y" : 72, "trait" : "none", "color" : "d6652d" },
		/* 102 */ { "x" : -345, "y" : 76, "trait" : "none", "color" : "d6652d" },
		/* 103 */ { "x" : 345, "y" : 75, "trait" : "none", "color" : "d6652d" },
		/* 104 */ { "x" : -345, "y" : 79, "trait" : "none", "color" : "d6652d" },
		/* 105 */ { "x" : 345, "y" : 78, "trait" : "none", "color" : "d6652d" },
		/* 106 */ { "x" : -345, "y" : 82, "trait" : "none", "color" : "d6652d" },
		/* 107 */ { "x" : 345, "y" : 81, "trait" : "none", "color" : "d6652d" },
		/* 108 */ { "x" : -345, "y" : 85, "trait" : "none", "color" : "d6652d" },
		/* 109 */ { "x" : 345, "y" : 84, "trait" : "none", "color" : "d6652d" },
		/* 110 */ { "x" : -345, "y" : 88, "trait" : "none", "color" : "d6652d" },
		/* 111 */ { "x" : 345, "y" : 87, "trait" : "none", "color" : "d6652d" },
		/* 112 */ { "x" : -345, "y" : -83, "trait" : "none", "color" : "d6652d" },
		/* 113 */ { "x" : 345, "y" : -84, "trait" : "none", "color" : "d6652d" },
		/* 114 */ { "x" : -345, "y" : -86, "trait" : "none", "color" : "d6652d" },
		/* 115 */ { "x" : 345, "y" : -87, "trait" : "none", "color" : "d6652d" },
		/* 116 */ { "x" : -1, "y" : -74, "trait" : "none" },
		/* 117 */ { "x" : -1, "y" : 126, "trait" : "none" },
		
		/* 118 */ { "x" : -225, "y" : 197, "bCoef" : 0, "cMask" : ["redKO","blueKO" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },
		/* 119 */ { "x" : -225, "y" : -197, "bCoef" : 0, "cMask" : ["redKO","blueKO" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },
		/* 120 */ { "x" : 225, "y" : 197, "bCoef" : 0, "cMask" : ["redKO","blueKO" ], "cGroup" : ["redKO" ], "trait" : "kickOffBarrier", "curve" : 0 },
		/* 121 */ { "x" : 225, "y" : -193, "bCoef" : 0, "cMask" : ["redKO","blueKO" ], "cGroup" : ["redKO" ], "trait" : "kickOffBarrier", "curve" : 0 },
		
		/* 122 */ { "x" : -345, "y" : 88, "trait" : "none", "color" : "d6652d" },
		/* 123 */ { "x" : 345, "y" : 87, "trait" : "none", "color" : "d6652d" },
		/* 124 */ { "x" : -345, "y" : 91, "trait" : "none", "color" : "d6652d" },
		/* 125 */ { "x" : 345, "y" : 90, "trait" : "none", "color" : "d6652d" },
		/* 126 */ { "x" : -345, "y" : 94, "trait" : "none", "color" : "d6652d" },
		/* 127 */ { "x" : 345, "y" : 93, "trait" : "none", "color" : "d6652d" },
		/* 128 */ { "x" : -345, "y" : 97, "trait" : "none", "color" : "d6652d" },
		/* 129 */ { "x" : 345, "y" : 96, "trait" : "none", "color" : "d6652d" },
		/* 130 */ { "x" : -345, "y" : 100, "trait" : "none", "color" : "d6652d" },
		/* 131 */ { "x" : 345, "y" : 99, "trait" : "none", "color" : "d6652d" },
		/* 132 */ { "x" : -345, "y" : 103, "trait" : "none", "color" : "d6652d" },
		/* 133 */ { "x" : 345, "y" : 102, "trait" : "none", "color" : "d6652d" },
		/* 134 */ { "x" : -345, "y" : 106, "trait" : "none", "color" : "d6652d" },
		/* 135 */ { "x" : 345, "y" : 105, "trait" : "none", "color" : "d6652d" },
		/* 136 */ { "x" : -345, "y" : 109, "trait" : "none", "color" : "d6652d" },
		/* 137 */ { "x" : 345, "y" : 108, "trait" : "none", "color" : "d6652d" },
		/* 138 */ { "x" : -345, "y" : 112, "trait" : "none", "color" : "d6652d" },
		/* 139 */ { "x" : 345, "y" : 111, "trait" : "none", "color" : "d6652d" },
		/* 140 */ { "x" : -345, "y" : 115, "trait" : "none", "color" : "d6652d" },
		/* 141 */ { "x" : 345, "y" : 114, "trait" : "none", "color" : "d6652d" },
		/* 142 */ { "x" : -345, "y" : 118, "trait" : "none", "color" : "d6652d" },
		/* 143 */ { "x" : 345, "y" : 117, "trait" : "none", "color" : "d6652d" },
		/* 144 */ { "x" : -345, "y" : 121, "trait" : "none", "color" : "d6652d" },
		/* 145 */ { "x" : 345, "y" : 120, "trait" : "none", "color" : "d6652d" },
		/* 146 */ { "x" : -345, "y" : 124, "trait" : "none", "color" : "d6652d" },
		/* 147 */ { "x" : 345, "y" : 123, "trait" : "none", "color" : "d6652d" },
		/* 148 */ { "x" : -344, "y" : 127, "trait" : "none", "color" : "d6652d" },
		/* 149 */ { "x" : 345, "y" : 126, "trait" : "none", "color" : "d6652d" },
		/* 150 */ { "x" : -345, "y" : 130, "trait" : "none", "color" : "d6652d" },
		/* 151 */ { "x" : 345, "y" : 129, "trait" : "none", "color" : "d6652d" },
		/* 152 */ { "x" : -345, "y" : 133, "trait" : "none", "color" : "d6652d" },
		/* 153 */ { "x" : 345, "y" : 132, "trait" : "none", "color" : "d6652d" },
		/* 154 */ { "x" : -345, "y" : 136, "trait" : "none", "color" : "d6652d" },
		/* 155 */ { "x" : 345, "y" : 135, "trait" : "none", "color" : "d6652d" },
		/* 156 */ { "x" : -345, "y" : 139, "trait" : "none", "color" : "d6652d" },
		/* 157 */ { "x" : 345, "y" : 138, "trait" : "none", "color" : "d6652d" },
		/* 158 */ { "x" : -345, "y" : -85, "trait" : "none", "color" : "d6652d" },
		/* 159 */ { "x" : 345, "y" : -86, "trait" : "none", "color" : "d6652d" },
		/* 160 */ { "x" : -345, "y" : 3, "trait" : "none", "color" : "d6652d" },
		/* 161 */ { "x" : 345, "y" : 2, "trait" : "none", "color" : "d6652d" },
		/* 162 */ { "x" : -345, "y" : -91, "trait" : "none", "color" : "d6652d" },
		/* 163 */ { "x" : 345, "y" : -92, "trait" : "none", "color" : "d6652d" },
		/* 164 */ { "x" : -345, "y" : -94, "trait" : "none", "color" : "d6652d" },
		/* 165 */ { "x" : 345, "y" : -95, "trait" : "none", "color" : "d6652d" },
		/* 166 */ { "x" : -345, "y" : -97, "trait" : "none", "color" : "d6652d" },
		/* 167 */ { "x" : 345, "y" : -98, "trait" : "none", "color" : "d6652d" },
		/* 168 */ { "x" : -345, "y" : -100, "trait" : "none", "color" : "d6652d" },
		/* 169 */ { "x" : 345, "y" : -101, "trait" : "none", "color" : "d6652d" },
		/* 170 */ { "x" : -345, "y" : -103, "trait" : "none", "color" : "d6652d" },
		/* 171 */ { "x" : 345, "y" : -104, "trait" : "none", "color" : "d6652d" },
		/* 172 */ { "x" : -345, "y" : -106, "trait" : "none", "color" : "d6652d" },
		/* 173 */ { "x" : 345, "y" : -107, "trait" : "none", "color" : "d6652d" },
		/* 174 */ { "x" : -345, "y" : -109, "trait" : "none", "color" : "d6652d" },
		/* 175 */ { "x" : 345, "y" : -110, "trait" : "none", "color" : "d6652d" },
		/* 176 */ { "x" : -345, "y" : -112, "trait" : "none", "color" : "d6652d" },
		/* 177 */ { "x" : 345, "y" : -113, "trait" : "none", "color" : "d6652d" },
		/* 178 */ { "x" : -345, "y" : -115, "trait" : "none", "color" : "d6652d" },
		/* 179 */ { "x" : 345, "y" : -116, "trait" : "none", "color" : "d6652d" },
		/* 180 */ { "x" : -345, "y" : -118, "trait" : "none", "color" : "d6652d" },
		/* 181 */ { "x" : 345, "y" : -119, "trait" : "none", "color" : "d6652d" },
		/* 182 */ { "x" : -345, "y" : -121, "trait" : "none", "color" : "d6652d" },
		/* 183 */ { "x" : 345, "y" : -122, "trait" : "none", "color" : "d6652d" },
		/* 184 */ { "x" : -345, "y" : -124, "trait" : "none", "color" : "d6652d" },
		/* 185 */ { "x" : 345, "y" : -125, "trait" : "none", "color" : "d6652d" },
		/* 186 */ { "x" : -345, "y" : -127, "trait" : "none", "color" : "d6652d" },
		/* 187 */ { "x" : 345, "y" : -128, "trait" : "none", "color" : "d6652d" },
		/* 188 */ { "x" : -345, "y" : -130, "trait" : "none", "color" : "d6652d" },
		/* 189 */ { "x" : 345, "y" : -131, "trait" : "none", "color" : "d6652d" },
		/* 190 */ { "x" : -345, "y" : -133, "trait" : "none", "color" : "d6652d" },
		/* 191 */ { "x" : 345, "y" : -134, "trait" : "none", "color" : "d6652d" },
		/* 192 */ { "x" : -345, "y" : -136, "trait" : "none", "color" : "d6652d" },
		/* 193 */ { "x" : 345, "y" : -137, "trait" : "none", "color" : "d6652d" },
		/* 194 */ { "x" : -345, "y" : -139, "trait" : "none", "color" : "d6652d" },
		/* 195 */ { "x" : 345, "y" : -140, "trait" : "none", "color" : "d6652d" },
		/* 196 */ { "x" : -3, "y" : -127, "trait" : "none" },
		/* 197 */ { "x" : -345, "y" : 1, "trait" : "none", "color" : "d6652d" },
		/* 198 */ { "x" : 345, "y" : 0, "trait" : "none", "color" : "d6652d" },
		/* 199 */ { "x" : -345, "y" : -88, "trait" : "none", "color" : "d6652d" },
		/* 200 */ { "x" : 345, "y" : -89, "trait" : "none", "color" : "d6652d" },
		/* 201 */ { "x" : 225, "y" : -139, "bCoef" : 0, "trait" : "none", "color" : "EBEBEB", "curve" : 0 },
		/* 202 */ { "x" : 225, "y" : 138, "bCoef" : 0, "trait" : "none", "color" : "EBEBEB", "curve" : 0 },
		/* 203 */ { "x" : -225, "y" : -139, "bCoef" : 0, "trait" : "none", "color" : "EBEBEB", "curve" : 0 },
		/* 204 */ { "x" : -225, "y" : 138, "bCoef" : 0, "trait" : "none", "color" : "EBEBEB", "curve" : 0 },
		/* 205 */ { "x" : -319, "y" : -169, "trait" : "none", "color" : "DADBDB", "curve" : 0 },
		/* 206 */ { "x" : -408, "y" : 172, "bCoef" : 0, "trait" : "none", "color" : "D8F781", "curve" : 0 },
		/* 207 */ { "x" : -407, "y" : -156, "bCoef" : 0, "trait" : "none", "color" : "D8F781", "curve" : 0 },
		/* 208 */ { "x" : 409, "y" : 156, "bCoef" : 0, "trait" : "none", "color" : "D8F781", "curve" : 0 },
		/* 209 */ { "x" : 408, "y" : -155, "bCoef" : 0, "trait" : "none", "color" : "D8F781", "curve" : 0 },
		/* 210 */ { "x" : -23, "y" : 164, "bCoef" : 0, "trait" : "none" },
		/* 211 */ { "x" : -32, "y" : 186, "bCoef" : 0, "trait" : "none" },
		/* 212 */ { "x" : -12, "y" : 174, "bCoef" : 0, "trait" : "none" },
		/* 213 */ { "x" : -23, "y" : 174, "bCoef" : 0, "trait" : "none" },
		/* 214 */ { "x" : -1, "y" : 164, "bCoef" : 0, "trait" : "none" },
		/* 215 */ { "x" : -1, "y" : 188, "bCoef" : 0, "trait" : "none" },
		/* 216 */ { "x" : 11, "y" : 188, "bCoef" : 0, "trait" : "none" },
		/* 217 */ { "x" : 25, "y" : 164, "bCoef" : 0, "trait" : "none" },
		/* 218 */ { "x" : 25, "y" : 188, "bCoef" : 0, "trait" : "none" },
		/* 219 */ { "x" : 26, "y" : 176, "bCoef" : 0, "trait" : "none" },
		/* 220 */ { "x" : 37, "y" : 176, "bCoef" : 0, "trait" : "none" },
		/* 221 */ { "x" : 38, "y" : 164, "bCoef" : 0, "trait" : "none" },
		/* 222 */ { "x" : 38, "y" : 188, "bCoef" : 0, "trait" : "none" },
		/* 223 */ { "x" : -225, "y" : 0, "trait" : "none", "color" : "DADBDB" },
		/* 224 */ { "x" : 225, "y" : 0, "trait" : "none", "color" : "DADBDB" },
		/* 225 */ { "x" : 345, "y" : -140, "trait" : "none", "color" : "DADBDB", "curve" : 0 },
		/* 226 */ { "x" : 345, "y" : 139, "trait" : "none", "color" : "DADBDB", "curve" : 0 },
		/* 227 */ { "x" : -345, "y" : -139, "trait" : "none", "color" : "DADBDB", "curve" : 0 },
		/* 228 */ { "x" : -345, "y" : 139, "trait" : "none", "color" : "DADBDB", "curve" : 0 },
		/* 229 */ { "x" : -345, "y" : -139, "trait" : "none", "color" : "DADBDB", "curve" : 0 },
		/* 230 */ { "x" : -345, "y" : 139, "trait" : "none", "color" : "DADBDB" },
		
		/* 231 */ { "x" : -225, "y" : -140, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "610B0B", "curve" : 0 },
		/* 232 */ { "x" : 225, "y" : -140, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "610B0B", "curve" : 0 },
		/* 233 */ { "x" : -225, "y" : 139, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "DD3C24", "curve" : 0 },
		/* 234 */ { "x" : 225, "y" : 139, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "DD3C24", "curve" : 0 },
		/* 235 */ { "x" : -225, "y" : -141, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "610B0B", "curve" : 0, "vis" : false },
		/* 236 */ { "x" : 225, "y" : -141, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "610B0B", "curve" : 0, "vis" : false },
		/* 237 */ { "x" : -225, "y" : 140, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "DD3C24", "curve" : 0, "vis" : false },
		/* 238 */ { "x" : 225, "y" : 140, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "DD3C24", "curve" : 0, "vis" : false },
		/* 239 */ { "x" : -225, "y" : -142, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "610B0B", "curve" : 0, "vis" : false },
		/* 240 */ { "x" : 225, "y" : -142, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "610B0B", "curve" : 0, "vis" : false },
		/* 241 */ { "x" : -225, "y" : -143, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "610B0B", "curve" : 0, "vis" : false },
		/* 242 */ { "x" : 225, "y" : -143, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "610B0B", "curve" : 0, "vis" : false },
		/* 243 */ { "x" : -225, "y" : -144, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "610B0B", "curve" : 0, "vis" : false },
		/* 244 */ { "x" : 225, "y" : -144, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "610B0B", "curve" : 0, "vis" : false },
		/* 245 */ { "x" : -225, "y" : 141, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "DD3C24", "curve" : 0, "vis" : false },
		/* 246 */ { "x" : 225, "y" : 141, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "DD3C24", "curve" : 0, "vis" : false },
		/* 247 */ { "x" : -225, "y" : 142, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "DD3C24", "curve" : 0, "vis" : false },
		/* 248 */ { "x" : 225, "y" : 142, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "DD3C24", "curve" : 0, "vis" : false }

	],

	"segments" : [
		{ "v0" : 0, "v1" : 1, "color" : "d6652d", "trait" : "none", "y" : 3 },
		{ "v0" : 2, "v1" : 3, "color" : "d6652d", "trait" : "none", "y" : 6 },
		{ "v0" : 4, "v1" : 5, "color" : "d6652d", "trait" : "none", "y" : 9 },
		{ "v0" : 6, "v1" : 7, "color" : "d6652d", "trait" : "none", "y" : 12 },
		{ "v0" : 8, "v1" : 9, "color" : "d6652d", "trait" : "none", "y" : 15 },
		{ "v0" : 10, "v1" : 11, "color" : "d6652d", "trait" : "none", "y" : -3 },
		{ "v0" : 12, "v1" : 13, "color" : "d6652d", "trait" : "none", "y" : -6 },
		{ "v0" : 14, "v1" : 15, "color" : "d6652d", "trait" : "none", "y" : -9 },
		{ "v0" : 16, "v1" : 17, "color" : "d6652d", "trait" : "none", "y" : -12 },
		{ "v0" : 18, "v1" : 19, "color" : "d6652d", "trait" : "none", "y" : -15 },
		{ "v0" : 20, "v1" : 21, "color" : "d6652d", "trait" : "none", "y" : -18 },
		{ "v0" : 22, "v1" : 23, "color" : "d6652d", "trait" : "none", "y" : -21 },
		{ "v0" : 24, "v1" : 25, "color" : "d6652d", "trait" : "none", "y" : -24 },
		{ "v0" : 26, "v1" : 27, "color" : "d6652d", "trait" : "none", "y" : -27 },
		{ "v0" : 28, "v1" : 29, "color" : "d6652d", "trait" : "none", "y" : -30 },
		{ "v0" : 30, "v1" : 31, "color" : "d6652d", "trait" : "none", "y" : -33 },
		{ "v0" : 32, "v1" : 33, "color" : "d6652d", "trait" : "none", "y" : -36 },
		{ "v0" : 34, "v1" : 35, "color" : "d6652d", "trait" : "none", "y" : -39 },
		{ "v0" : 36, "v1" : 37, "color" : "d6652d", "trait" : "none", "y" : -42 },
		{ "v0" : 38, "v1" : 39, "color" : "d6652d", "trait" : "none", "y" : 18 },
		{ "v0" : 40, "v1" : 41, "color" : "d6652d", "trait" : "none", "y" : 21 },
		{ "v0" : 42, "v1" : 43, "color" : "d6652d", "trait" : "none", "y" : 24 },
		{ "v0" : 44, "v1" : 45, "color" : "d6652d", "trait" : "none", "y" : 27 },
		{ "v0" : 46, "v1" : 47, "color" : "d6652d", "trait" : "none", "y" : 30 },
		{ "v0" : 48, "v1" : 49, "color" : "d6652d", "trait" : "none", "y" : 33 },
		{ "v0" : 50, "v1" : 51, "color" : "d6652d", "trait" : "none", "y" : 36 },
		{ "v0" : 52, "v1" : 53, "color" : "d6652d", "trait" : "none", "y" : 39 },
		{ "v0" : 54, "v1" : 55, "color" : "d6652d", "trait" : "none", "y" : 42 },
		{ "v0" : 56, "v1" : 57, "color" : "d6652d", "trait" : "none", "y" : 45 },
		{ "v0" : 58, "v1" : 59, "color" : "d6652d", "trait" : "none", "y" : 48 },
		{ "v0" : 60, "v1" : 61, "color" : "d6652d", "trait" : "none", "y" : 51 },
		{ "v0" : 62, "v1" : 63, "color" : "d6652d", "trait" : "none", "y" : 54 },
		{ "v0" : 64, "v1" : 65, "color" : "d6652d", "trait" : "none", "y" : 57 },
		{ "v0" : 66, "v1" : 67, "color" : "d6652d", "trait" : "none", "y" : 60 },
		{ "v0" : 68, "v1" : 69, "color" : "d6652d", "trait" : "none", "y" : -45 },
		{ "v0" : 70, "v1" : 71, "color" : "d6652d", "trait" : "none", "y" : -48 },
		{ "v0" : 72, "v1" : 73, "color" : "d6652d", "trait" : "none", "y" : -51 },
		{ "v0" : 74, "v1" : 75, "color" : "d6652d", "trait" : "none", "y" : -54 },
		{ "v0" : 76, "v1" : 77, "color" : "d6652d", "trait" : "none", "y" : -57 },
		{ "v0" : 78, "v1" : 79, "color" : "d6652d", "trait" : "none", "y" : -60 },
		{ "v0" : 80, "v1" : 81, "color" : "d6652d", "trait" : "none", "y" : -63 },
		{ "v0" : 82, "v1" : 83, "color" : "d6652d", "trait" : "none", "y" : -66 },
		{ "v0" : 84, "v1" : 85, "color" : "d6652d", "trait" : "none", "y" : -69 },
		{ "v0" : 86, "v1" : 87, "color" : "d6652d", "trait" : "none", "y" : -72 },
		{ "v0" : 88, "v1" : 89, "color" : "d6652d", "trait" : "none", "y" : -75 },
		{ "v0" : 90, "v1" : 91, "color" : "d6652d", "trait" : "none", "y" : -78 },
		{ "v0" : 92, "v1" : 93, "color" : "d6652d", "trait" : "none", "y" : -81 },
		{ "v0" : 94, "v1" : 95, "color" : "d6652d", "trait" : "none", "y" : 63 },
		{ "v0" : 96, "v1" : 97, "color" : "d6652d", "trait" : "none", "y" : 66 },
		{ "v0" : 98, "v1" : 99, "color" : "d6652d", "trait" : "none", "y" : 69 },
		{ "v0" : 100, "v1" : 101, "color" : "d6652d", "trait" : "none", "y" : 72 },
		{ "v0" : 102, "v1" : 103, "color" : "d6652d", "trait" : "none", "y" : 75 },
		{ "v0" : 104, "v1" : 105, "color" : "d6652d", "trait" : "none", "y" : 78 },
		{ "v0" : 106, "v1" : 107, "color" : "d6652d", "trait" : "none", "y" : 81 },
		{ "v0" : 108, "v1" : 109, "color" : "d6652d", "trait" : "none", "y" : 84 },
		{ "v0" : 110, "v1" : 111, "color" : "d6652d", "trait" : "none", "y" : 87 },
		{ "v0" : 112, "v1" : 113, "color" : "d6652d", "trait" : "none", "y" : -84 },
		{ "v0" : 114, "v1" : 115, "color" : "d6652d", "trait" : "none", "y" : -87 },
		
		{ "v0" : 118, "v1" : 119, "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "x" : -65 },
		{ "v0" : 120, "v1" : 121, "curve" : 0, "cGroup" : ["redKO" ], "trait" : "kickOffBarrier", "x" : 65 },
		
		{ "v0" : 122, "v1" : 123, "color" : "d6652d", "trait" : "none", "y" : 36 },
		{ "v0" : 124, "v1" : 125, "color" : "d6652d", "trait" : "none", "y" : 39 },
		{ "v0" : 126, "v1" : 127, "color" : "d6652d", "trait" : "none", "y" : 42 },
		{ "v0" : 128, "v1" : 129, "color" : "d6652d", "trait" : "none", "y" : 45 },
		{ "v0" : 130, "v1" : 131, "color" : "d6652d", "trait" : "none", "y" : 48 },
		{ "v0" : 132, "v1" : 133, "color" : "d6652d", "trait" : "none", "y" : 51 },
		{ "v0" : 134, "v1" : 135, "color" : "d6652d", "trait" : "none", "y" : 54 },
		{ "v0" : 136, "v1" : 137, "color" : "d6652d", "trait" : "none", "y" : 57 },
		{ "v0" : 138, "v1" : 139, "color" : "d6652d", "trait" : "none", "y" : 60 },
		{ "v0" : 140, "v1" : 141, "color" : "d6652d", "trait" : "none", "y" : 63 },
		{ "v0" : 142, "v1" : 143, "color" : "d6652d", "trait" : "none", "y" : 66 },
		{ "v0" : 144, "v1" : 145, "color" : "d6652d", "trait" : "none", "y" : 69 },
		{ "v0" : 146, "v1" : 147, "color" : "d6652d", "trait" : "none", "y" : 72 },
		{ "v0" : 148, "v1" : 149, "color" : "d6652d", "trait" : "none", "y" : 75 },
		{ "v0" : 150, "v1" : 151, "color" : "d6652d", "trait" : "none", "y" : 78 },
		{ "v0" : 152, "v1" : 153, "color" : "d6652d", "trait" : "none", "y" : 81 },
		{ "v0" : 154, "v1" : 155, "color" : "d6652d", "trait" : "none", "y" : 84 },
		{ "v0" : 156, "v1" : 157, "color" : "d6652d", "trait" : "none", "y" : 87 },
		{ "v0" : 158, "v1" : 159, "color" : "d6652d", "trait" : "none", "y" : -33 },
		{ "v0" : 160, "v1" : 161, "color" : "d6652d", "trait" : "none", "y" : -36 },
		{ "v0" : 162, "v1" : 163, "color" : "d6652d", "trait" : "none", "y" : -39 },
		{ "v0" : 164, "v1" : 165, "color" : "d6652d", "trait" : "none", "y" : -42 },
		{ "v0" : 166, "v1" : 167, "color" : "d6652d", "trait" : "none", "y" : -45 },
		{ "v0" : 168, "v1" : 169, "color" : "d6652d", "trait" : "none", "y" : -48 },
		{ "v0" : 170, "v1" : 171, "color" : "d6652d", "trait" : "none", "y" : -51 },
		{ "v0" : 172, "v1" : 173, "color" : "d6652d", "trait" : "none", "y" : -54 },
		{ "v0" : 174, "v1" : 175, "color" : "d6652d", "trait" : "none", "y" : -57 },
		{ "v0" : 176, "v1" : 177, "color" : "d6652d", "trait" : "none", "y" : -60 },
		{ "v0" : 178, "v1" : 179, "color" : "d6652d", "trait" : "none", "y" : -63 },
		{ "v0" : 180, "v1" : 181, "color" : "d6652d", "trait" : "none", "y" : -66 },
		{ "v0" : 182, "v1" : 183, "color" : "d6652d", "trait" : "none", "y" : -69 },
		{ "v0" : 184, "v1" : 185, "color" : "d6652d", "trait" : "none", "y" : -72 },
		{ "v0" : 186, "v1" : 187, "color" : "d6652d", "trait" : "none", "y" : -75 },
		{ "v0" : 188, "v1" : 189, "color" : "d6652d", "trait" : "none", "y" : -78 },
		{ "v0" : 190, "v1" : 191, "color" : "d6652d", "trait" : "none", "y" : -81 },
		{ "v0" : 192, "v1" : 193, "color" : "d6652d", "trait" : "none", "y" : -84 },
		{ "v0" : 194, "v1" : 195, "color" : "d6652d", "trait" : "none", "y" : -87 },
		{ "v0" : 197, "v1" : 198, "color" : "d6652d", "trait" : "none", "y" : -36 },
		{ "v0" : 199, "v1" : 200, "color" : "d6652d", "trait" : "none", "y" : -42 },
		{ "v0" : 201, "v1" : 202, "curve" : 0, "color" : "EBEBEB", "bCoef" : 0, "trait" : "none", "x" : 225 },
		{ "v0" : 203, "v1" : 204, "curve" : 0, "color" : "EBEBEB", "bCoef" : 0, "trait" : "none", "x" : -225 },
		{ "v0" : 206, "v1" : 207, "curve" : 0, "color" : "D8F781", "bCoef" : 0, "trait" : "none", "x" : 0 },
		{ "v0" : 208, "v1" : 209, "curve" : 0, "color" : "D8F781", "bCoef" : 0, "trait" : "none", "x" : 0 },
		{ "v0" : 210, "v1" : 211, "curve" : -144.69975156014, "color" : "EBEBEB", "bCoef" : 0, "trait" : "none" },
		{ "v0" : 211, "v1" : 212, "curve" : -135.99178805217, "color" : "EBEBEB", "bCoef" : 0, "trait" : "none" },
		{ "v0" : 212, "v1" : 213, "color" : "EBEBEB", "bCoef" : 0, "trait" : "none" },
		{ "v0" : 214, "v1" : 215, "color" : "EBEBEB", "bCoef" : 0, "trait" : "none" },
		{ "v0" : 215, "v1" : 216, "color" : "EBEBEB", "bCoef" : 0, "trait" : "none" },
		{ "v0" : 217, "v1" : 218, "color" : "EBEBEB", "bCoef" : 0, "trait" : "none" },
		{ "v0" : 219, "v1" : 220, "color" : "EBEBEB", "bCoef" : 0, "trait" : "none" },
		{ "v0" : 221, "v1" : 222, "color" : "EBEBEB", "bCoef" : 0, "trait" : "none" },
		{ "v0" : 223, "v1" : 224, "color" : "DADBDB", "trait" : "none", "y" : 0 },
		{ "v0" : 225, "v1" : 226, "color" : "DADBDB", "trait" : "none", "y" : 0, "x" : 150 },
		{ "v0" : 225, "v1" : 227, "curve" : 0, "color" : "DADBDB", "trait" : "none" },
		{ "v0" : 226, "v1" : 228, "curve" : 0, "color" : "DADBDB", "trait" : "none" },
		{ "v0" : 229, "v1" : 230, "curve" : -1.1616039978427, "color" : "DADBDB", "trait" : "none", "y" : 0, "x" : -150 },
		
		{ "v0" : 231, "v1" : 232, "curve" : 0, "color" : "610B0B", "bCoef" : 0.5, "cMask" : ["ball" ], "y" : -140 },
		{ "v0" : 233, "v1" : 234, "curve" : 0, "color" : "610B0B", "bCoef" : 0.5, "cMask" : ["ball" ], "y" : 139 },
		{ "v0" : 235, "v1" : 236, "curve" : 0, "vis" : false, "color" : "610B0B", "bCoef" : 0.5, "cMask" : ["ball" ], "y" : -141 },
		{ "v0" : 237, "v1" : 238, "curve" : 0, "vis" : false, "color" : "610B0B", "bCoef" : 0.5, "cMask" : ["ball" ], "y" : 140 },
		{ "v0" : 239, "v1" : 240, "curve" : 0, "vis" : false, "color" : "610B0B", "bCoef" : 0.5, "cMask" : ["ball" ], "y" : -142 },
		{ "v0" : 241, "v1" : 242, "curve" : 0, "vis" : false, "color" : "610B0B", "bCoef" : 0.5, "cMask" : ["ball" ], "y" : -143 },
		{ "v0" : 243, "v1" : 244, "curve" : 0, "vis" : false, "color" : "610B0B", "bCoef" : 0.5, "cMask" : ["ball" ], "y" : -144 },
		{ "v0" : 245, "v1" : 246, "curve" : 0, "vis" : false, "color" : "610B0B", "bCoef" : 0.5, "cMask" : ["ball" ], "y" : 141 },
		{ "v0" : 247, "v1" : 248, "curve" : 0, "vis" : false, "color" : "610B0B", "bCoef" : 0.5, "cMask" : ["ball" ], "y" : 142 }

	],

	"goals" : [
		{ "p0" : [-232,-155 ], "p1" : [-359,-155 ], "team" : "red" },
		{ "p0" : [-406,-153 ], "p1" : [-406,167 ], "team" : "red" },
		{ "p0" : [-360,155 ], "p1" : [-232,155 ], "team" : "red" },
		{ "p0" : [202,-157 ], "p1" : [352,-157 ], "team" : "blue" },
		{ "p0" : [359,155 ], "p1" : [209,155 ], "team" : "blue" },
		{ "p0" : [409.5,168 ], "p1" : [409.5,-155 ], "team" : "blue" },
		{ "p0" : [-359.5,-157 ], "p1" : [-471.5,-140 ], "team" : "red" },
		{ "p0" : [-402.5,168 ], "p1" : [-305.5,156 ], "team" : "red" },
		{ "p0" : [355.5,155 ], "p1" : [417.5,170 ], "team" : "blue" },
		{ "p0" : [406.5,-158 ], "p1" : [343.5,-155 ], "team" : "blue" },
		{ "p0" : [413.5,-153 ], "p1" : [389.5,-165 ], "team" : "blue" },
		{ "p0" : [6.5,151 ], "p1" : [226.5,155 ], "team" : "blue" },
		{ "p0" : [212.5,-156 ], "p1" : [-0.5,-154 ], "team" : "blue" },
		{ "p0" : [-240.5,155 ], "p1" : [-2.5,155 ], "team" : "red" },
		{ "p0" : [-238.5,-156 ], "p1" : [0.5,-153 ], "team" : "red" }

	],

	"discs" : [
		{ "radius" : 2, "pos" : [0,139 ], "color" : "363636", "trait" : "none" },
		{ "radius" : 2, "pos" : [0,-139 ], "color" : "363636", "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-136 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-130 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-123 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-117 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-112 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-106 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-99 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-93 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-87 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-81 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-74 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-68 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-63 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-57 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-50 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-44 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-38 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-32 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-25 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-19 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-14 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-8 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-1 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,5 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,11 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,17 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,24 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,30 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,35 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,41 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,48 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,54 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,60 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,66 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,73 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,79 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,84 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,90 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,97 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,103 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,108 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,115 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,121 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,126 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,133 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,139 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" }

	],

	"planes" : [
		{ "normal" : [1,0 ], "dist" : 0, "bCoef" : 0, "cMask" : ["blue" ] },
		{ "normal" : [-1,0 ], "dist" : 0, "bCoef" : 0, "cMask" : ["red" ] },
		{ "normal" : [0,1 ], "dist" : -198, "bCoef" : 0, "cMask" : ["red","blue","ball" ] },
		{ "normal" : [0,-1 ], "dist" : -199, "bCoef" : 0, "cMask" : ["red","blue","ball" ] },
		{ "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0, "cMask" : ["red","blue","ball" ] },
		{ "normal" : [1,0 ], "dist" : -556, "bCoef" : 0, "cMask" : ["red","blue","ball" ] }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] },
		"none" : { "cMask" : ["" ] }

	},

	"ballPhysics" : {
		"radius" : 5,
		"damping" : 0.9999,
		"invMass" : 0.999,
		"bCoef" : 1.1,
		"color" : "c9f364"

	},

	"playerPhysics" : {
		"kickStrength" : 0.2,
		"bCoef" : 1.1,
		"acceleration" : 0.12

	}
}`;
var TenisCemento=`
{

	"name" : "Escreva !help para mais informações",

	"width" : 360,

	"height" : 171,

	"spawnDistance" : 350,

	"bg" : { "type" : "", "height" : 0, "width" : 0, "color" : "44b283" },

	"vertexes" : [
		/* 0 */ { "x" : -345, "y" : 4, "trait" : "none", "color" : "1c75c9" },
		/* 1 */ { "x" : 345, "y" : 3, "trait" : "none", "color" : "1c75c9" },
		/* 2 */ { "x" : -345, "y" : 7, "trait" : "none", "color" : "1c75c9" },
		/* 3 */ { "x" : 345, "y" : 6, "trait" : "none", "color" : "1c75c9" },
		/* 4 */ { "x" : -345, "y" : 10, "trait" : "none", "color" : "1c75c9" },
		/* 5 */ { "x" : 345, "y" : 9, "trait" : "none", "color" : "1c75c9" },
		/* 6 */ { "x" : -345, "y" : 13, "trait" : "none", "color" : "1c75c9" },
		/* 7 */ { "x" : 345, "y" : 12, "trait" : "none", "color" : "1c75c9" },
		/* 8 */ { "x" : -345, "y" : 16, "trait" : "none", "color" : "1c75c9" },
		/* 9 */ { "x" : 345, "y" : 15, "trait" : "none", "color" : "1c75c9" },
		/* 10 */ { "x" : -345, "y" : -2, "trait" : "none", "color" : "1c75c9" },
		/* 11 */ { "x" : 345, "y" : -3, "trait" : "none", "color" : "1c75c9" },
		/* 12 */ { "x" : -345, "y" : -5, "trait" : "none", "color" : "1c75c9" },
		/* 13 */ { "x" : 345, "y" : -6, "trait" : "none", "color" : "1c75c9" },
		/* 14 */ { "x" : -345, "y" : -8, "trait" : "none", "color" : "1c75c9" },
		/* 15 */ { "x" : 345, "y" : -9, "trait" : "none", "color" : "1c75c9" },
		/* 16 */ { "x" : -345, "y" : -11, "trait" : "none", "color" : "1c75c9" },
		/* 17 */ { "x" : 345, "y" : -12, "trait" : "none", "color" : "1c75c9" },
		/* 18 */ { "x" : -345, "y" : -14, "trait" : "none", "color" : "1c75c9" },
		/* 19 */ { "x" : 345, "y" : -15, "trait" : "none", "color" : "1c75c9" },
		/* 20 */ { "x" : -345, "y" : -17, "trait" : "none", "color" : "1c75c9" },
		/* 21 */ { "x" : 345, "y" : -18, "trait" : "none", "color" : "1c75c9" },
		/* 22 */ { "x" : -345, "y" : -20, "trait" : "none", "color" : "1c75c9" },
		/* 23 */ { "x" : 345, "y" : -21, "trait" : "none", "color" : "1c75c9" },
		/* 24 */ { "x" : -345, "y" : -23, "trait" : "none", "color" : "1c75c9" },
		/* 25 */ { "x" : 345, "y" : -24, "trait" : "none", "color" : "1c75c9" },
		/* 26 */ { "x" : -345, "y" : -26, "trait" : "none", "color" : "1c75c9" },
		/* 27 */ { "x" : 345, "y" : -27, "trait" : "none", "color" : "1c75c9" },
		/* 28 */ { "x" : -345, "y" : -29, "trait" : "none", "color" : "1c75c9" },
		/* 29 */ { "x" : 345, "y" : -30, "trait" : "none", "color" : "1c75c9" },
		/* 30 */ { "x" : -345, "y" : -32, "trait" : "none", "color" : "1c75c9" },
		/* 31 */ { "x" : 345, "y" : -33, "trait" : "none", "color" : "1c75c9" },
		/* 32 */ { "x" : -345, "y" : -35, "trait" : "none", "color" : "1c75c9" },
		/* 33 */ { "x" : 345, "y" : -36, "trait" : "none", "color" : "1c75c9" },
		/* 34 */ { "x" : -345, "y" : -38, "trait" : "none", "color" : "1c75c9" },
		/* 35 */ { "x" : 345, "y" : -39, "trait" : "none", "color" : "1c75c9" },
		/* 36 */ { "x" : -345, "y" : -41, "trait" : "none", "color" : "1c75c9" },
		/* 37 */ { "x" : 345, "y" : -42, "trait" : "none", "color" : "1c75c9" },
		/* 38 */ { "x" : -345, "y" : 19, "trait" : "none", "color" : "1c75c9" },
		/* 39 */ { "x" : 345, "y" : 18, "trait" : "none", "color" : "1c75c9" },
		/* 40 */ { "x" : -345, "y" : 22, "trait" : "none", "color" : "1c75c9" },
		/* 41 */ { "x" : 345, "y" : 21, "trait" : "none", "color" : "1c75c9" },
		/* 42 */ { "x" : -345, "y" : 25, "trait" : "none", "color" : "1c75c9" },
		/* 43 */ { "x" : 345, "y" : 24, "trait" : "none", "color" : "1c75c9" },
		/* 44 */ { "x" : -345, "y" : 28, "trait" : "none", "color" : "1c75c9" },
		/* 45 */ { "x" : 345, "y" : 27, "trait" : "none", "color" : "1c75c9" },
		/* 46 */ { "x" : -345, "y" : 31, "trait" : "none", "color" : "1c75c9" },
		/* 47 */ { "x" : 345, "y" : 30, "trait" : "none", "color" : "1c75c9" },
		/* 48 */ { "x" : -345, "y" : 34, "trait" : "none", "color" : "1c75c9" },
		/* 49 */ { "x" : 345, "y" : 33, "trait" : "none", "color" : "1c75c9" },
		/* 50 */ { "x" : -345, "y" : 37, "trait" : "none", "color" : "1c75c9" },
		/* 51 */ { "x" : 345, "y" : 36, "trait" : "none", "color" : "1c75c9" },
		/* 52 */ { "x" : -345, "y" : 40, "trait" : "none", "color" : "1c75c9" },
		/* 53 */ { "x" : 345, "y" : 39, "trait" : "none", "color" : "1c75c9" },
		/* 54 */ { "x" : -345, "y" : 43, "trait" : "none", "color" : "1c75c9" },
		/* 55 */ { "x" : 345, "y" : 42, "trait" : "none", "color" : "1c75c9" },
		/* 56 */ { "x" : -345, "y" : 46, "trait" : "none", "color" : "1c75c9" },
		/* 57 */ { "x" : 345, "y" : 45, "trait" : "none", "color" : "1c75c9" },
		/* 58 */ { "x" : -345, "y" : 49, "trait" : "none", "color" : "1c75c9" },
		/* 59 */ { "x" : 345, "y" : 48, "trait" : "none", "color" : "1c75c9" },
		/* 60 */ { "x" : -345, "y" : 52, "trait" : "none", "color" : "1c75c9" },
		/* 61 */ { "x" : 345, "y" : 51, "trait" : "none", "color" : "1c75c9" },
		/* 62 */ { "x" : -345, "y" : 55, "trait" : "none", "color" : "1c75c9" },
		/* 63 */ { "x" : 345, "y" : 54, "trait" : "none", "color" : "1c75c9" },
		/* 64 */ { "x" : -345, "y" : 58, "trait" : "none", "color" : "1c75c9" },
		/* 65 */ { "x" : 345, "y" : 57, "trait" : "none", "color" : "1c75c9" },
		/* 66 */ { "x" : -345, "y" : 61, "trait" : "none", "color" : "1c75c9" },
		/* 67 */ { "x" : 345, "y" : 60, "trait" : "none", "color" : "1c75c9" },
		/* 68 */ { "x" : -345, "y" : -44, "trait" : "none", "color" : "1c75c9" },
		/* 69 */ { "x" : 345, "y" : -45, "trait" : "none", "color" : "1c75c9" },
		/* 70 */ { "x" : -345, "y" : -47, "trait" : "none", "color" : "1c75c9" },
		/* 71 */ { "x" : 345, "y" : -48, "trait" : "none", "color" : "1c75c9" },
		/* 72 */ { "x" : -345, "y" : -50, "trait" : "none", "color" : "1c75c9" },
		/* 73 */ { "x" : 345, "y" : -51, "trait" : "none", "color" : "1c75c9" },
		/* 74 */ { "x" : -345, "y" : -53, "trait" : "none", "color" : "1c75c9" },
		/* 75 */ { "x" : 345, "y" : -54, "trait" : "none", "color" : "1c75c9" },
		/* 76 */ { "x" : -345, "y" : -56, "trait" : "none", "color" : "1c75c9" },
		/* 77 */ { "x" : 345, "y" : -57, "trait" : "none", "color" : "1c75c9" },
		/* 78 */ { "x" : -345, "y" : -59, "trait" : "none", "color" : "1c75c9" },
		/* 79 */ { "x" : 345, "y" : -60, "trait" : "none", "color" : "1c75c9" },
		/* 80 */ { "x" : -345, "y" : -62, "trait" : "none", "color" : "1c75c9" },
		/* 81 */ { "x" : 345, "y" : -63, "trait" : "none", "color" : "1c75c9" },
		/* 82 */ { "x" : -345, "y" : -65, "trait" : "none", "color" : "1c75c9" },
		/* 83 */ { "x" : 345, "y" : -66, "trait" : "none", "color" : "1c75c9" },
		/* 84 */ { "x" : -345, "y" : -68, "trait" : "none", "color" : "1c75c9" },
		/* 85 */ { "x" : 345, "y" : -69, "trait" : "none", "color" : "1c75c9" },
		/* 86 */ { "x" : -345, "y" : -71, "trait" : "none", "color" : "1c75c9" },
		/* 87 */ { "x" : 345, "y" : -72, "trait" : "none", "color" : "1c75c9" },
		/* 88 */ { "x" : -345, "y" : -74, "trait" : "none", "color" : "1c75c9" },
		/* 89 */ { "x" : 345, "y" : -75, "trait" : "none", "color" : "1c75c9" },
		/* 90 */ { "x" : -345, "y" : -77, "trait" : "none", "color" : "1c75c9" },
		/* 91 */ { "x" : 345, "y" : -78, "trait" : "none", "color" : "1c75c9" },
		/* 92 */ { "x" : -345, "y" : -80, "trait" : "none", "color" : "1c75c9" },
		/* 93 */ { "x" : 345, "y" : -81, "trait" : "none", "color" : "1c75c9" },
		/* 94 */ { "x" : -345, "y" : 64, "trait" : "none", "color" : "1c75c9" },
		/* 95 */ { "x" : 345, "y" : 63, "trait" : "none", "color" : "1c75c9" },
		/* 96 */ { "x" : -345, "y" : 67, "trait" : "none", "color" : "1c75c9" },
		/* 97 */ { "x" : 345, "y" : 66, "trait" : "none", "color" : "1c75c9" },
		/* 98 */ { "x" : -345, "y" : 70, "trait" : "none", "color" : "1c75c9" },
		/* 99 */ { "x" : 345, "y" : 69, "trait" : "none", "color" : "1c75c9" },
		/* 100 */ { "x" : -345, "y" : 73, "trait" : "none", "color" : "1c75c9" },
		/* 101 */ { "x" : 345, "y" : 72, "trait" : "none", "color" : "1c75c9" },
		/* 102 */ { "x" : -345, "y" : 76, "trait" : "none", "color" : "1c75c9" },
		/* 103 */ { "x" : 345, "y" : 75, "trait" : "none", "color" : "1c75c9" },
		/* 104 */ { "x" : -345, "y" : 79, "trait" : "none", "color" : "1c75c9" },
		/* 105 */ { "x" : 345, "y" : 78, "trait" : "none", "color" : "1c75c9" },
		/* 106 */ { "x" : -345, "y" : 82, "trait" : "none", "color" : "1c75c9" },
		/* 107 */ { "x" : 345, "y" : 81, "trait" : "none", "color" : "1c75c9" },
		/* 108 */ { "x" : -345, "y" : 85, "trait" : "none", "color" : "1c75c9" },
		/* 109 */ { "x" : 345, "y" : 84, "trait" : "none", "color" : "1c75c9" },
		/* 110 */ { "x" : -345, "y" : 88, "trait" : "none", "color" : "1c75c9" },
		/* 111 */ { "x" : 345, "y" : 87, "trait" : "none", "color" : "1c75c9" },
		/* 112 */ { "x" : -345, "y" : -83, "trait" : "none", "color" : "1c75c9" },
		/* 113 */ { "x" : 345, "y" : -84, "trait" : "none", "color" : "1c75c9" },
		/* 114 */ { "x" : -345, "y" : -86, "trait" : "none", "color" : "1c75c9" },
		/* 115 */ { "x" : 345, "y" : -87, "trait" : "none", "color" : "1c75c9" },
		/* 116 */ { "x" : -1, "y" : -74, "trait" : "none" },
		/* 117 */ { "x" : -1, "y" : 126, "trait" : "none" },
		
		/* 118 */ { "x" : -225, "y" : 197, "bCoef" : 0, "cMask" : ["redKO","blueKO" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },
		/* 119 */ { "x" : -225, "y" : -197, "bCoef" : 0, "cMask" : ["redKO","blueKO" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },
		/* 120 */ { "x" : 225, "y" : 197, "bCoef" : 0, "cMask" : ["redKO","blueKO" ], "cGroup" : ["redKO" ], "trait" : "kickOffBarrier", "curve" : 0 },
		/* 121 */ { "x" : 225, "y" : -193, "bCoef" : 0, "cMask" : ["redKO","blueKO" ], "cGroup" : ["redKO" ], "trait" : "kickOffBarrier", "curve" : 0 },
		
		/* 122 */ { "x" : -345, "y" : 88, "trait" : "none", "color" : "1c75c9" },
		/* 123 */ { "x" : 345, "y" : 87, "trait" : "none", "color" : "1c75c9" },
		/* 124 */ { "x" : -345, "y" : 91, "trait" : "none", "color" : "1c75c9" },
		/* 125 */ { "x" : 345, "y" : 90, "trait" : "none", "color" : "1c75c9" },
		/* 126 */ { "x" : -345, "y" : 94, "trait" : "none", "color" : "1c75c9" },
		/* 127 */ { "x" : 345, "y" : 93, "trait" : "none", "color" : "1c75c9" },
		/* 128 */ { "x" : -345, "y" : 97, "trait" : "none", "color" : "1c75c9" },
		/* 129 */ { "x" : 345, "y" : 96, "trait" : "none", "color" : "1c75c9" },
		/* 130 */ { "x" : -345, "y" : 100, "trait" : "none", "color" : "1c75c9" },
		/* 131 */ { "x" : 345, "y" : 99, "trait" : "none", "color" : "1c75c9" },
		/* 132 */ { "x" : -345, "y" : 103, "trait" : "none", "color" : "1c75c9" },
		/* 133 */ { "x" : 345, "y" : 102, "trait" : "none", "color" : "1c75c9" },
		/* 134 */ { "x" : -345, "y" : 106, "trait" : "none", "color" : "1c75c9" },
		/* 135 */ { "x" : 345, "y" : 105, "trait" : "none", "color" : "1c75c9" },
		/* 136 */ { "x" : -345, "y" : 109, "trait" : "none", "color" : "1c75c9" },
		/* 137 */ { "x" : 345, "y" : 108, "trait" : "none", "color" : "1c75c9" },
		/* 138 */ { "x" : -345, "y" : 112, "trait" : "none", "color" : "1c75c9" },
		/* 139 */ { "x" : 345, "y" : 111, "trait" : "none", "color" : "1c75c9" },
		/* 140 */ { "x" : -345, "y" : 115, "trait" : "none", "color" : "1c75c9" },
		/* 141 */ { "x" : 345, "y" : 114, "trait" : "none", "color" : "1c75c9" },
		/* 142 */ { "x" : -345, "y" : 118, "trait" : "none", "color" : "1c75c9" },
		/* 143 */ { "x" : 345, "y" : 117, "trait" : "none", "color" : "1c75c9" },
		/* 144 */ { "x" : -345, "y" : 121, "trait" : "none", "color" : "1c75c9" },
		/* 145 */ { "x" : 345, "y" : 120, "trait" : "none", "color" : "1c75c9" },
		/* 146 */ { "x" : -345, "y" : 124, "trait" : "none", "color" : "1c75c9" },
		/* 147 */ { "x" : 345, "y" : 123, "trait" : "none", "color" : "1c75c9" },
		/* 148 */ { "x" : -344, "y" : 127, "trait" : "none", "color" : "1c75c9" },
		/* 149 */ { "x" : 345, "y" : 126, "trait" : "none", "color" : "1c75c9" },
		/* 150 */ { "x" : -345, "y" : 130, "trait" : "none", "color" : "1c75c9" },
		/* 151 */ { "x" : 345, "y" : 129, "trait" : "none", "color" : "1c75c9" },
		/* 152 */ { "x" : -345, "y" : 133, "trait" : "none", "color" : "1c75c9" },
		/* 153 */ { "x" : 345, "y" : 132, "trait" : "none", "color" : "1c75c9" },
		/* 154 */ { "x" : -345, "y" : 136, "trait" : "none", "color" : "1c75c9" },
		/* 155 */ { "x" : 345, "y" : 135, "trait" : "none", "color" : "1c75c9" },
		/* 156 */ { "x" : -345, "y" : 139, "trait" : "none", "color" : "1c75c9" },
		/* 157 */ { "x" : 345, "y" : 138, "trait" : "none", "color" : "1c75c9" },
		/* 158 */ { "x" : -345, "y" : -85, "trait" : "none", "color" : "1c75c9" },
		/* 159 */ { "x" : 345, "y" : -86, "trait" : "none", "color" : "1c75c9" },
		/* 160 */ { "x" : -345, "y" : 3, "trait" : "none", "color" : "1c75c9" },
		/* 161 */ { "x" : 345, "y" : 2, "trait" : "none", "color" : "1c75c9" },
		/* 162 */ { "x" : -345, "y" : -91, "trait" : "none", "color" : "1c75c9" },
		/* 163 */ { "x" : 345, "y" : -92, "trait" : "none", "color" : "1c75c9" },
		/* 164 */ { "x" : -345, "y" : -94, "trait" : "none", "color" : "1c75c9" },
		/* 165 */ { "x" : 345, "y" : -95, "trait" : "none", "color" : "1c75c9" },
		/* 166 */ { "x" : -345, "y" : -97, "trait" : "none", "color" : "1c75c9" },
		/* 167 */ { "x" : 345, "y" : -98, "trait" : "none", "color" : "1c75c9" },
		/* 168 */ { "x" : -345, "y" : -100, "trait" : "none", "color" : "1c75c9" },
		/* 169 */ { "x" : 345, "y" : -101, "trait" : "none", "color" : "1c75c9" },
		/* 170 */ { "x" : -345, "y" : -103, "trait" : "none", "color" : "1c75c9" },
		/* 171 */ { "x" : 345, "y" : -104, "trait" : "none", "color" : "1c75c9" },
		/* 172 */ { "x" : -345, "y" : -106, "trait" : "none", "color" : "1c75c9" },
		/* 173 */ { "x" : 345, "y" : -107, "trait" : "none", "color" : "1c75c9" },
		/* 174 */ { "x" : -345, "y" : -109, "trait" : "none", "color" : "1c75c9" },
		/* 175 */ { "x" : 345, "y" : -110, "trait" : "none", "color" : "1c75c9" },
		/* 176 */ { "x" : -345, "y" : -112, "trait" : "none", "color" : "1c75c9" },
		/* 177 */ { "x" : 345, "y" : -113, "trait" : "none", "color" : "1c75c9" },
		/* 178 */ { "x" : -345, "y" : -115, "trait" : "none", "color" : "1c75c9" },
		/* 179 */ { "x" : 345, "y" : -116, "trait" : "none", "color" : "1c75c9" },
		/* 180 */ { "x" : -345, "y" : -118, "trait" : "none", "color" : "1c75c9" },
		/* 181 */ { "x" : 345, "y" : -119, "trait" : "none", "color" : "1c75c9" },
		/* 182 */ { "x" : -345, "y" : -121, "trait" : "none", "color" : "1c75c9" },
		/* 183 */ { "x" : 345, "y" : -122, "trait" : "none", "color" : "1c75c9" },
		/* 184 */ { "x" : -345, "y" : -124, "trait" : "none", "color" : "1c75c9" },
		/* 185 */ { "x" : 345, "y" : -125, "trait" : "none", "color" : "1c75c9" },
		/* 186 */ { "x" : -345, "y" : -127, "trait" : "none", "color" : "1c75c9" },
		/* 187 */ { "x" : 345, "y" : -128, "trait" : "none", "color" : "1c75c9" },
		/* 188 */ { "x" : -345, "y" : -130, "trait" : "none", "color" : "1c75c9" },
		/* 189 */ { "x" : 345, "y" : -131, "trait" : "none", "color" : "1c75c9" },
		/* 190 */ { "x" : -345, "y" : -133, "trait" : "none", "color" : "1c75c9" },
		/* 191 */ { "x" : 345, "y" : -134, "trait" : "none", "color" : "1c75c9" },
		/* 192 */ { "x" : -345, "y" : -136, "trait" : "none", "color" : "1c75c9" },
		/* 193 */ { "x" : 345, "y" : -137, "trait" : "none", "color" : "1c75c9" },
		/* 194 */ { "x" : -345, "y" : -139, "trait" : "none", "color" : "1c75c9" },
		/* 195 */ { "x" : 345, "y" : -140, "trait" : "none", "color" : "1c75c9" },
		/* 196 */ { "x" : -3, "y" : -127, "trait" : "none" },
		/* 197 */ { "x" : -345, "y" : 1, "trait" : "none", "color" : "1c75c9" },
		/* 198 */ { "x" : 345, "y" : 0, "trait" : "none", "color" : "1c75c9" },
		/* 199 */ { "x" : -345, "y" : -88, "trait" : "none", "color" : "1c75c9" },
		/* 200 */ { "x" : 345, "y" : -89, "trait" : "none", "color" : "1c75c9" },
		/* 201 */ { "x" : 225, "y" : -139, "bCoef" : 0, "trait" : "none", "color" : "EBEBEB", "curve" : 0 },
		/* 202 */ { "x" : 225, "y" : 138, "bCoef" : 0, "trait" : "none", "color" : "EBEBEB", "curve" : 0 },
		/* 203 */ { "x" : -225, "y" : -139, "bCoef" : 0, "trait" : "none", "color" : "EBEBEB", "curve" : 0 },
		/* 204 */ { "x" : -225, "y" : 138, "bCoef" : 0, "trait" : "none", "color" : "EBEBEB", "curve" : 0 },
		/* 205 */ { "x" : -319, "y" : -169, "trait" : "none", "color" : "DADBDB", "curve" : 0 },
		/* 206 */ { "x" : -408, "y" : 172, "bCoef" : 0, "trait" : "none", "color" : "D8F781", "curve" : 0 },
		/* 207 */ { "x" : -407, "y" : -156, "bCoef" : 0, "trait" : "none", "color" : "D8F781", "curve" : 0 },
		/* 208 */ { "x" : 409, "y" : 156, "bCoef" : 0, "trait" : "none", "color" : "D8F781", "curve" : 0 },
		/* 209 */ { "x" : 408, "y" : -155, "bCoef" : 0, "trait" : "none", "color" : "D8F781", "curve" : 0 },
		/* 210 */ { "x" : -23, "y" : 164, "bCoef" : 0, "trait" : "none" },
		/* 211 */ { "x" : -32, "y" : 186, "bCoef" : 0, "trait" : "none" },
		/* 212 */ { "x" : -12, "y" : 174, "bCoef" : 0, "trait" : "none" },
		/* 213 */ { "x" : -23, "y" : 174, "bCoef" : 0, "trait" : "none" },
		/* 214 */ { "x" : -1, "y" : 164, "bCoef" : 0, "trait" : "none" },
		/* 215 */ { "x" : -1, "y" : 188, "bCoef" : 0, "trait" : "none" },
		/* 216 */ { "x" : 11, "y" : 188, "bCoef" : 0, "trait" : "none" },
		/* 217 */ { "x" : 25, "y" : 164, "bCoef" : 0, "trait" : "none" },
		/* 218 */ { "x" : 25, "y" : 188, "bCoef" : 0, "trait" : "none" },
		/* 219 */ { "x" : 26, "y" : 176, "bCoef" : 0, "trait" : "none" },
		/* 220 */ { "x" : 37, "y" : 176, "bCoef" : 0, "trait" : "none" },
		/* 221 */ { "x" : 38, "y" : 164, "bCoef" : 0, "trait" : "none" },
		/* 222 */ { "x" : 38, "y" : 188, "bCoef" : 0, "trait" : "none" },
		/* 223 */ { "x" : -225, "y" : 0, "trait" : "none", "color" : "DADBDB" },
		/* 224 */ { "x" : 225, "y" : 0, "trait" : "none", "color" : "DADBDB" },
		/* 225 */ { "x" : 345, "y" : -140, "trait" : "none", "color" : "DADBDB", "curve" : 0 },
		/* 226 */ { "x" : 345, "y" : 139, "trait" : "none", "color" : "DADBDB", "curve" : 0 },
		/* 227 */ { "x" : -345, "y" : -139, "trait" : "none", "color" : "DADBDB", "curve" : 0 },
		/* 228 */ { "x" : -345, "y" : 139, "trait" : "none", "color" : "DADBDB", "curve" : 0 },
		/* 229 */ { "x" : -345, "y" : -139, "trait" : "none", "color" : "DADBDB", "curve" : 0 },
		/* 230 */ { "x" : -345, "y" : 139, "trait" : "none", "color" : "DADBDB" },
		
		/* 231 */ { "x" : -225, "y" : -140, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "003668", "curve" : 0 },
		/* 232 */ { "x" : 225, "y" : -140, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "003668", "curve" : 0 },
		/* 233 */ { "x" : -225, "y" : 139, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "DD3C24", "curve" : 0 },
		/* 234 */ { "x" : 225, "y" : 139, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "DD3C24", "curve" : 0 },
		/* 235 */ { "x" : -225, "y" : -141, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "003668", "curve" : 0, "vis" : false },
		/* 236 */ { "x" : 225, "y" : -141, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "003668", "curve" : 0, "vis" : false },
		/* 237 */ { "x" : -225, "y" : 140, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "DD3C24", "curve" : 0, "vis" : false },
		/* 238 */ { "x" : 225, "y" : 140, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "DD3C24", "curve" : 0, "vis" : false },
		/* 239 */ { "x" : -225, "y" : -142, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "003668", "curve" : 0, "vis" : false },
		/* 240 */ { "x" : 225, "y" : -142, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "003668", "curve" : 0, "vis" : false },
		/* 241 */ { "x" : -225, "y" : -143, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "003668", "curve" : 0, "vis" : false },
		/* 242 */ { "x" : 225, "y" : -143, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "003668", "curve" : 0, "vis" : false },
		/* 243 */ { "x" : -225, "y" : -144, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "003668", "curve" : 0, "vis" : false },
		/* 244 */ { "x" : 225, "y" : -144, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "003668", "curve" : 0, "vis" : false },
		/* 245 */ { "x" : -225, "y" : 141, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "DD3C24", "curve" : 0, "vis" : false },
		/* 246 */ { "x" : 225, "y" : 141, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "DD3C24", "curve" : 0, "vis" : false },
		/* 247 */ { "x" : -225, "y" : 142, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "DD3C24", "curve" : 0, "vis" : false },
		/* 248 */ { "x" : 225, "y" : 142, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "DD3C24", "curve" : 0, "vis" : false }

	],

	"segments" : [
		{ "v0" : 0, "v1" : 1, "color" : "1c75c9", "trait" : "none", "y" : 3 },
		{ "v0" : 2, "v1" : 3, "color" : "1c75c9", "trait" : "none", "y" : 6 },
		{ "v0" : 4, "v1" : 5, "color" : "1c75c9", "trait" : "none", "y" : 9 },
		{ "v0" : 6, "v1" : 7, "color" : "1c75c9", "trait" : "none", "y" : 12 },
		{ "v0" : 8, "v1" : 9, "color" : "1c75c9", "trait" : "none", "y" : 15 },
		{ "v0" : 10, "v1" : 11, "color" : "1c75c9", "trait" : "none", "y" : -3 },
		{ "v0" : 12, "v1" : 13, "color" : "1c75c9", "trait" : "none", "y" : -6 },
		{ "v0" : 14, "v1" : 15, "color" : "1c75c9", "trait" : "none", "y" : -9 },
		{ "v0" : 16, "v1" : 17, "color" : "1c75c9", "trait" : "none", "y" : -12 },
		{ "v0" : 18, "v1" : 19, "color" : "1c75c9", "trait" : "none", "y" : -15 },
		{ "v0" : 20, "v1" : 21, "color" : "1c75c9", "trait" : "none", "y" : -18 },
		{ "v0" : 22, "v1" : 23, "color" : "1c75c9", "trait" : "none", "y" : -21 },
		{ "v0" : 24, "v1" : 25, "color" : "1c75c9", "trait" : "none", "y" : -24 },
		{ "v0" : 26, "v1" : 27, "color" : "1c75c9", "trait" : "none", "y" : -27 },
		{ "v0" : 28, "v1" : 29, "color" : "1c75c9", "trait" : "none", "y" : -30 },
		{ "v0" : 30, "v1" : 31, "color" : "1c75c9", "trait" : "none", "y" : -33 },
		{ "v0" : 32, "v1" : 33, "color" : "1c75c9", "trait" : "none", "y" : -36 },
		{ "v0" : 34, "v1" : 35, "color" : "1c75c9", "trait" : "none", "y" : -39 },
		{ "v0" : 36, "v1" : 37, "color" : "1c75c9", "trait" : "none", "y" : -42 },
		{ "v0" : 38, "v1" : 39, "color" : "1c75c9", "trait" : "none", "y" : 18 },
		{ "v0" : 40, "v1" : 41, "color" : "1c75c9", "trait" : "none", "y" : 21 },
		{ "v0" : 42, "v1" : 43, "color" : "1c75c9", "trait" : "none", "y" : 24 },
		{ "v0" : 44, "v1" : 45, "color" : "1c75c9", "trait" : "none", "y" : 27 },
		{ "v0" : 46, "v1" : 47, "color" : "1c75c9", "trait" : "none", "y" : 30 },
		{ "v0" : 48, "v1" : 49, "color" : "1c75c9", "trait" : "none", "y" : 33 },
		{ "v0" : 50, "v1" : 51, "color" : "1c75c9", "trait" : "none", "y" : 36 },
		{ "v0" : 52, "v1" : 53, "color" : "1c75c9", "trait" : "none", "y" : 39 },
		{ "v0" : 54, "v1" : 55, "color" : "1c75c9", "trait" : "none", "y" : 42 },
		{ "v0" : 56, "v1" : 57, "color" : "1c75c9", "trait" : "none", "y" : 45 },
		{ "v0" : 58, "v1" : 59, "color" : "1c75c9", "trait" : "none", "y" : 48 },
		{ "v0" : 60, "v1" : 61, "color" : "1c75c9", "trait" : "none", "y" : 51 },
		{ "v0" : 62, "v1" : 63, "color" : "1c75c9", "trait" : "none", "y" : 54 },
		{ "v0" : 64, "v1" : 65, "color" : "1c75c9", "trait" : "none", "y" : 57 },
		{ "v0" : 66, "v1" : 67, "color" : "1c75c9", "trait" : "none", "y" : 60 },
		{ "v0" : 68, "v1" : 69, "color" : "1c75c9", "trait" : "none", "y" : -45 },
		{ "v0" : 70, "v1" : 71, "color" : "1c75c9", "trait" : "none", "y" : -48 },
		{ "v0" : 72, "v1" : 73, "color" : "1c75c9", "trait" : "none", "y" : -51 },
		{ "v0" : 74, "v1" : 75, "color" : "1c75c9", "trait" : "none", "y" : -54 },
		{ "v0" : 76, "v1" : 77, "color" : "1c75c9", "trait" : "none", "y" : -57 },
		{ "v0" : 78, "v1" : 79, "color" : "1c75c9", "trait" : "none", "y" : -60 },
		{ "v0" : 80, "v1" : 81, "color" : "1c75c9", "trait" : "none", "y" : -63 },
		{ "v0" : 82, "v1" : 83, "color" : "1c75c9", "trait" : "none", "y" : -66 },
		{ "v0" : 84, "v1" : 85, "color" : "1c75c9", "trait" : "none", "y" : -69 },
		{ "v0" : 86, "v1" : 87, "color" : "1c75c9", "trait" : "none", "y" : -72 },
		{ "v0" : 88, "v1" : 89, "color" : "1c75c9", "trait" : "none", "y" : -75 },
		{ "v0" : 90, "v1" : 91, "color" : "1c75c9", "trait" : "none", "y" : -78 },
		{ "v0" : 92, "v1" : 93, "color" : "1c75c9", "trait" : "none", "y" : -81 },
		{ "v0" : 94, "v1" : 95, "color" : "1c75c9", "trait" : "none", "y" : 63 },
		{ "v0" : 96, "v1" : 97, "color" : "1c75c9", "trait" : "none", "y" : 66 },
		{ "v0" : 98, "v1" : 99, "color" : "1c75c9", "trait" : "none", "y" : 69 },
		{ "v0" : 100, "v1" : 101, "color" : "1c75c9", "trait" : "none", "y" : 72 },
		{ "v0" : 102, "v1" : 103, "color" : "1c75c9", "trait" : "none", "y" : 75 },
		{ "v0" : 104, "v1" : 105, "color" : "1c75c9", "trait" : "none", "y" : 78 },
		{ "v0" : 106, "v1" : 107, "color" : "1c75c9", "trait" : "none", "y" : 81 },
		{ "v0" : 108, "v1" : 109, "color" : "1c75c9", "trait" : "none", "y" : 84 },
		{ "v0" : 110, "v1" : 111, "color" : "1c75c9", "trait" : "none", "y" : 87 },
		{ "v0" : 112, "v1" : 113, "color" : "1c75c9", "trait" : "none", "y" : -84 },
		{ "v0" : 114, "v1" : 115, "color" : "1c75c9", "trait" : "none", "y" : -87 },
		
		{ "v0" : 118, "v1" : 119, "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "x" : -65 },
		{ "v0" : 120, "v1" : 121, "curve" : 0, "cGroup" : ["redKO" ], "trait" : "kickOffBarrier", "x" : 65 },
		
		{ "v0" : 122, "v1" : 123, "color" : "1c75c9", "trait" : "none", "y" : 36 },
		{ "v0" : 124, "v1" : 125, "color" : "1c75c9", "trait" : "none", "y" : 39 },
		{ "v0" : 126, "v1" : 127, "color" : "1c75c9", "trait" : "none", "y" : 42 },
		{ "v0" : 128, "v1" : 129, "color" : "1c75c9", "trait" : "none", "y" : 45 },
		{ "v0" : 130, "v1" : 131, "color" : "1c75c9", "trait" : "none", "y" : 48 },
		{ "v0" : 132, "v1" : 133, "color" : "1c75c9", "trait" : "none", "y" : 51 },
		{ "v0" : 134, "v1" : 135, "color" : "1c75c9", "trait" : "none", "y" : 54 },
		{ "v0" : 136, "v1" : 137, "color" : "1c75c9", "trait" : "none", "y" : 57 },
		{ "v0" : 138, "v1" : 139, "color" : "1c75c9", "trait" : "none", "y" : 60 },
		{ "v0" : 140, "v1" : 141, "color" : "1c75c9", "trait" : "none", "y" : 63 },
		{ "v0" : 142, "v1" : 143, "color" : "1c75c9", "trait" : "none", "y" : 66 },
		{ "v0" : 144, "v1" : 145, "color" : "1c75c9", "trait" : "none", "y" : 69 },
		{ "v0" : 146, "v1" : 147, "color" : "1c75c9", "trait" : "none", "y" : 72 },
		{ "v0" : 148, "v1" : 149, "color" : "1c75c9", "trait" : "none", "y" : 75 },
		{ "v0" : 150, "v1" : 151, "color" : "1c75c9", "trait" : "none", "y" : 78 },
		{ "v0" : 152, "v1" : 153, "color" : "1c75c9", "trait" : "none", "y" : 81 },
		{ "v0" : 154, "v1" : 155, "color" : "1c75c9", "trait" : "none", "y" : 84 },
		{ "v0" : 156, "v1" : 157, "color" : "1c75c9", "trait" : "none", "y" : 87 },
		{ "v0" : 158, "v1" : 159, "color" : "1c75c9", "trait" : "none", "y" : -33 },
		{ "v0" : 160, "v1" : 161, "color" : "1c75c9", "trait" : "none", "y" : -36 },
		{ "v0" : 162, "v1" : 163, "color" : "1c75c9", "trait" : "none", "y" : -39 },
		{ "v0" : 164, "v1" : 165, "color" : "1c75c9", "trait" : "none", "y" : -42 },
		{ "v0" : 166, "v1" : 167, "color" : "1c75c9", "trait" : "none", "y" : -45 },
		{ "v0" : 168, "v1" : 169, "color" : "1c75c9", "trait" : "none", "y" : -48 },
		{ "v0" : 170, "v1" : 171, "color" : "1c75c9", "trait" : "none", "y" : -51 },
		{ "v0" : 172, "v1" : 173, "color" : "1c75c9", "trait" : "none", "y" : -54 },
		{ "v0" : 174, "v1" : 175, "color" : "1c75c9", "trait" : "none", "y" : -57 },
		{ "v0" : 176, "v1" : 177, "color" : "1c75c9", "trait" : "none", "y" : -60 },
		{ "v0" : 178, "v1" : 179, "color" : "1c75c9", "trait" : "none", "y" : -63 },
		{ "v0" : 180, "v1" : 181, "color" : "1c75c9", "trait" : "none", "y" : -66 },
		{ "v0" : 182, "v1" : 183, "color" : "1c75c9", "trait" : "none", "y" : -69 },
		{ "v0" : 184, "v1" : 185, "color" : "1c75c9", "trait" : "none", "y" : -72 },
		{ "v0" : 186, "v1" : 187, "color" : "1c75c9", "trait" : "none", "y" : -75 },
		{ "v0" : 188, "v1" : 189, "color" : "1c75c9", "trait" : "none", "y" : -78 },
		{ "v0" : 190, "v1" : 191, "color" : "1c75c9", "trait" : "none", "y" : -81 },
		{ "v0" : 192, "v1" : 193, "color" : "1c75c9", "trait" : "none", "y" : -84 },
		{ "v0" : 194, "v1" : 195, "color" : "1c75c9", "trait" : "none", "y" : -87 },
		{ "v0" : 197, "v1" : 198, "color" : "1c75c9", "trait" : "none", "y" : -36 },
		{ "v0" : 199, "v1" : 200, "color" : "1c75c9", "trait" : "none", "y" : -42 },
		{ "v0" : 201, "v1" : 202, "curve" : 0, "color" : "EBEBEB", "bCoef" : 0, "trait" : "none", "x" : 225 },
		{ "v0" : 203, "v1" : 204, "curve" : 0, "color" : "EBEBEB", "bCoef" : 0, "trait" : "none", "x" : -225 },
		{ "v0" : 206, "v1" : 207, "curve" : 0, "color" : "D8F781", "bCoef" : 0, "trait" : "none", "x" : 0 },
		{ "v0" : 208, "v1" : 209, "curve" : 0, "color" : "D8F781", "bCoef" : 0, "trait" : "none", "x" : 0 },
		{ "v0" : 210, "v1" : 211, "curve" : -144.69975156014, "color" : "EBEBEB", "bCoef" : 0, "trait" : "none" },
		{ "v0" : 211, "v1" : 212, "curve" : -135.99178805217, "color" : "EBEBEB", "bCoef" : 0, "trait" : "none" },
		{ "v0" : 212, "v1" : 213, "color" : "EBEBEB", "bCoef" : 0, "trait" : "none" },
		{ "v0" : 214, "v1" : 215, "color" : "EBEBEB", "bCoef" : 0, "trait" : "none" },
		{ "v0" : 215, "v1" : 216, "color" : "EBEBEB", "bCoef" : 0, "trait" : "none" },
		{ "v0" : 217, "v1" : 218, "color" : "EBEBEB", "bCoef" : 0, "trait" : "none" },
		{ "v0" : 219, "v1" : 220, "color" : "EBEBEB", "bCoef" : 0, "trait" : "none" },
		{ "v0" : 221, "v1" : 222, "color" : "EBEBEB", "bCoef" : 0, "trait" : "none" },
		{ "v0" : 223, "v1" : 224, "color" : "DADBDB", "trait" : "none", "y" : 0 },
		{ "v0" : 225, "v1" : 226, "color" : "DADBDB", "trait" : "none", "y" : 0, "x" : 150 },
		{ "v0" : 225, "v1" : 227, "curve" : 0, "color" : "DADBDB", "trait" : "none" },
		{ "v0" : 226, "v1" : 228, "curve" : 0, "color" : "DADBDB", "trait" : "none" },
		{ "v0" : 229, "v1" : 230, "curve" : -1.1616039978427, "color" : "DADBDB", "trait" : "none", "y" : 0, "x" : -150 },
		
		{ "v0" : 231, "v1" : 232, "curve" : 0, "color" : "003668", "bCoef" : 0.5, "cMask" : ["ball" ], "y" : -140 },
		{ "v0" : 233, "v1" : 234, "curve" : 0, "color" : "003668", "bCoef" : 0.5, "cMask" : ["ball" ], "y" : 139 },
		{ "v0" : 235, "v1" : 236, "curve" : 0, "vis" : false, "color" : "003668", "bCoef" : 0.5, "cMask" : ["ball" ], "y" : -141 },
		{ "v0" : 237, "v1" : 238, "curve" : 0, "vis" : false, "color" : "003668", "bCoef" : 0.5, "cMask" : ["ball" ], "y" : 140 },
		{ "v0" : 239, "v1" : 240, "curve" : 0, "vis" : false, "color" : "003668", "bCoef" : 0.5, "cMask" : ["ball" ], "y" : -142 },
		{ "v0" : 241, "v1" : 242, "curve" : 0, "vis" : false, "color" : "003668", "bCoef" : 0.5, "cMask" : ["ball" ], "y" : -143 },
		{ "v0" : 243, "v1" : 244, "curve" : 0, "vis" : false, "color" : "003668", "bCoef" : 0.5, "cMask" : ["ball" ], "y" : -144 },
		{ "v0" : 245, "v1" : 246, "curve" : 0, "vis" : false, "color" : "003668", "bCoef" : 0.5, "cMask" : ["ball" ], "y" : 141 },
		{ "v0" : 247, "v1" : 248, "curve" : 0, "vis" : false, "color" : "003668", "bCoef" : 0.5, "cMask" : ["ball" ], "y" : 142 }

	],

	"goals" : [
		{ "p0" : [-232,-155 ], "p1" : [-359,-155 ], "team" : "red" },
		{ "p0" : [-406,-153 ], "p1" : [-406,167 ], "team" : "red" },
		{ "p0" : [-360,155 ], "p1" : [-232,155 ], "team" : "red" },
		{ "p0" : [202,-157 ], "p1" : [352,-157 ], "team" : "blue" },
		{ "p0" : [359,155 ], "p1" : [209,155 ], "team" : "blue" },
		{ "p0" : [409.5,168 ], "p1" : [409.5,-155 ], "team" : "blue" },
		{ "p0" : [-359.5,-157 ], "p1" : [-471.5,-140 ], "team" : "red" },
		{ "p0" : [-402.5,168 ], "p1" : [-305.5,156 ], "team" : "red" },
		{ "p0" : [355.5,155 ], "p1" : [417.5,170 ], "team" : "blue" },
		{ "p0" : [406.5,-158 ], "p1" : [343.5,-155 ], "team" : "blue" },
		{ "p0" : [413.5,-153 ], "p1" : [389.5,-165 ], "team" : "blue" },
		{ "p0" : [6.5,151 ], "p1" : [226.5,155 ], "team" : "blue" },
		{ "p0" : [212.5,-156 ], "p1" : [-0.5,-154 ], "team" : "blue" },
		{ "p0" : [-240.5,155 ], "p1" : [-2.5,155 ], "team" : "red" },
		{ "p0" : [-238.5,-156 ], "p1" : [0.5,-153 ], "team" : "red" }

	],

	"discs" : [
		{ "radius" : 2, "pos" : [0,139 ], "color" : "363636", "trait" : "none" },
		{ "radius" : 2, "pos" : [0,-139 ], "color" : "363636", "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-136 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-130 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-123 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-117 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-112 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-106 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-99 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-93 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-87 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-81 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-74 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-68 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-63 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-57 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-50 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-44 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-38 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-32 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-25 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-19 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-14 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-8 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-1 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,5 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,11 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,17 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,24 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,30 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,35 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,41 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,48 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,54 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,60 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,66 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,73 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,79 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,84 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,90 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,97 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,103 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,108 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,115 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,121 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,126 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,133 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,139 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" }

	],

	"planes" : [
		{ "normal" : [1,0 ], "dist" : 0, "bCoef" : 0, "cMask" : ["blue" ] },
		{ "normal" : [-1,0 ], "dist" : 0, "bCoef" : 0, "cMask" : ["red" ] },
		{ "normal" : [0,1 ], "dist" : -198, "bCoef" : 0, "cMask" : ["red","blue","ball" ] },
		{ "normal" : [0,-1 ], "dist" : -199, "bCoef" : 0, "cMask" : ["red","blue","ball" ] },
		{ "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0, "cMask" : ["red","blue","ball" ] },
		{ "normal" : [1,0 ], "dist" : -556, "bCoef" : 0, "cMask" : ["red","blue","ball" ] }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] },
		"none" : { "cMask" : ["" ] }

	},

	"ballPhysics" : {
		"radius" : 5,
		"damping" : 0.9999,
		"invMass" : 0.999,
		"bCoef" : 1.1,
		"color" : "c9f364"

	},

	"playerPhysics" : {
		"kickStrength" : 0.2,
		"bCoef" : 1.1,
		"acceleration" : 0.12

	}
}`;
var TenisPasto=`
{

	"name" : "Escreva !help para mais informações",

	"width" : 360,

	"height" : 171,

	"spawnDistance" : 350,

	"bg" : { "type" : "", "height" : 0, "width" : 0, "color" : "848e13" },

	"vertexes" : [
		/* 0 */ { "x" : -345, "y" : 4, "trait" : "none", "color" : "9ea734" },
		/* 1 */ { "x" : 345, "y" : 3, "trait" : "none", "color" : "9ea734" },
		/* 2 */ { "x" : -345, "y" : 7, "trait" : "none", "color" : "9ea734" },
		/* 3 */ { "x" : 345, "y" : 6, "trait" : "none", "color" : "9ea734" },
		/* 4 */ { "x" : -345, "y" : 10, "trait" : "none", "color" : "9ea734" },
		/* 5 */ { "x" : 345, "y" : 9, "trait" : "none", "color" : "9ea734" },
		/* 6 */ { "x" : -345, "y" : 13, "trait" : "none", "color" : "9ea734" },
		/* 7 */ { "x" : 345, "y" : 12, "trait" : "none", "color" : "9ea734" },
		/* 8 */ { "x" : -345, "y" : 16, "trait" : "none", "color" : "9ea734" },
		/* 9 */ { "x" : 345, "y" : 15, "trait" : "none", "color" : "9ea734" },
		/* 10 */ { "x" : -345, "y" : -2, "trait" : "none", "color" : "9ea734" },
		/* 11 */ { "x" : 345, "y" : -3, "trait" : "none", "color" : "9ea734" },
		/* 12 */ { "x" : -345, "y" : -5, "trait" : "none", "color" : "9ea734" },
		/* 13 */ { "x" : 345, "y" : -6, "trait" : "none", "color" : "9ea734" },
		/* 14 */ { "x" : -345, "y" : -8, "trait" : "none", "color" : "9ea734" },
		/* 15 */ { "x" : 345, "y" : -9, "trait" : "none", "color" : "9ea734" },
		/* 16 */ { "x" : -345, "y" : -11, "trait" : "none", "color" : "9ea734" },
		/* 17 */ { "x" : 345, "y" : -12, "trait" : "none", "color" : "9ea734" },
		/* 18 */ { "x" : -345, "y" : -14, "trait" : "none", "color" : "9ea734" },
		/* 19 */ { "x" : 345, "y" : -15, "trait" : "none", "color" : "9ea734" },
		/* 20 */ { "x" : -345, "y" : -17, "trait" : "none", "color" : "9ea734" },
		/* 21 */ { "x" : 345, "y" : -18, "trait" : "none", "color" : "9ea734" },
		/* 22 */ { "x" : -345, "y" : -20, "trait" : "none", "color" : "9ea734" },
		/* 23 */ { "x" : 345, "y" : -21, "trait" : "none", "color" : "9ea734" },
		/* 24 */ { "x" : -345, "y" : -23, "trait" : "none", "color" : "9ea734" },
		/* 25 */ { "x" : 345, "y" : -24, "trait" : "none", "color" : "9ea734" },
		/* 26 */ { "x" : -345, "y" : -26, "trait" : "none", "color" : "9ea734" },
		/* 27 */ { "x" : 345, "y" : -27, "trait" : "none", "color" : "9ea734" },
		/* 28 */ { "x" : -345, "y" : -29, "trait" : "none", "color" : "9ea734" },
		/* 29 */ { "x" : 345, "y" : -30, "trait" : "none", "color" : "9ea734" },
		/* 30 */ { "x" : -345, "y" : -32, "trait" : "none", "color" : "9ea734" },
		/* 31 */ { "x" : 345, "y" : -33, "trait" : "none", "color" : "9ea734" },
		/* 32 */ { "x" : -345, "y" : -35, "trait" : "none", "color" : "9ea734" },
		/* 33 */ { "x" : 345, "y" : -36, "trait" : "none", "color" : "9ea734" },
		/* 34 */ { "x" : -345, "y" : -38, "trait" : "none", "color" : "9ea734" },
		/* 35 */ { "x" : 345, "y" : -39, "trait" : "none", "color" : "9ea734" },
		/* 36 */ { "x" : -345, "y" : -41, "trait" : "none", "color" : "9ea734" },
		/* 37 */ { "x" : 345, "y" : -42, "trait" : "none", "color" : "9ea734" },
		/* 38 */ { "x" : -345, "y" : 19, "trait" : "none", "color" : "9ea734" },
		/* 39 */ { "x" : 345, "y" : 18, "trait" : "none", "color" : "9ea734" },
		/* 40 */ { "x" : -345, "y" : 22, "trait" : "none", "color" : "9ea734" },
		/* 41 */ { "x" : 345, "y" : 21, "trait" : "none", "color" : "9ea734" },
		/* 42 */ { "x" : -345, "y" : 25, "trait" : "none", "color" : "9ea734" },
		/* 43 */ { "x" : 345, "y" : 24, "trait" : "none", "color" : "9ea734" },
		/* 44 */ { "x" : -345, "y" : 28, "trait" : "none", "color" : "9ea734" },
		/* 45 */ { "x" : 345, "y" : 27, "trait" : "none", "color" : "9ea734" },
		/* 46 */ { "x" : -345, "y" : 31, "trait" : "none", "color" : "9ea734" },
		/* 47 */ { "x" : 345, "y" : 30, "trait" : "none", "color" : "9ea734" },
		/* 48 */ { "x" : -345, "y" : 34, "trait" : "none", "color" : "9ea734" },
		/* 49 */ { "x" : 345, "y" : 33, "trait" : "none", "color" : "9ea734" },
		/* 50 */ { "x" : -345, "y" : 37, "trait" : "none", "color" : "9ea734" },
		/* 51 */ { "x" : 345, "y" : 36, "trait" : "none", "color" : "9ea734" },
		/* 52 */ { "x" : -345, "y" : 40, "trait" : "none", "color" : "9ea734" },
		/* 53 */ { "x" : 345, "y" : 39, "trait" : "none", "color" : "9ea734" },
		/* 54 */ { "x" : -345, "y" : 43, "trait" : "none", "color" : "9ea734" },
		/* 55 */ { "x" : 345, "y" : 42, "trait" : "none", "color" : "9ea734" },
		/* 56 */ { "x" : -345, "y" : 46, "trait" : "none", "color" : "9ea734" },
		/* 57 */ { "x" : 345, "y" : 45, "trait" : "none", "color" : "9ea734" },
		/* 58 */ { "x" : -345, "y" : 49, "trait" : "none", "color" : "9ea734" },
		/* 59 */ { "x" : 345, "y" : 48, "trait" : "none", "color" : "9ea734" },
		/* 60 */ { "x" : -345, "y" : 52, "trait" : "none", "color" : "9ea734" },
		/* 61 */ { "x" : 345, "y" : 51, "trait" : "none", "color" : "9ea734" },
		/* 62 */ { "x" : -345, "y" : 55, "trait" : "none", "color" : "9ea734" },
		/* 63 */ { "x" : 345, "y" : 54, "trait" : "none", "color" : "9ea734" },
		/* 64 */ { "x" : -345, "y" : 58, "trait" : "none", "color" : "9ea734" },
		/* 65 */ { "x" : 345, "y" : 57, "trait" : "none", "color" : "9ea734" },
		/* 66 */ { "x" : -345, "y" : 61, "trait" : "none", "color" : "9ea734" },
		/* 67 */ { "x" : 345, "y" : 60, "trait" : "none", "color" : "9ea734" },
		/* 68 */ { "x" : -345, "y" : -44, "trait" : "none", "color" : "9ea734" },
		/* 69 */ { "x" : 345, "y" : -45, "trait" : "none", "color" : "9ea734" },
		/* 70 */ { "x" : -345, "y" : -47, "trait" : "none", "color" : "9ea734" },
		/* 71 */ { "x" : 345, "y" : -48, "trait" : "none", "color" : "9ea734" },
		/* 72 */ { "x" : -345, "y" : -50, "trait" : "none", "color" : "9ea734" },
		/* 73 */ { "x" : 345, "y" : -51, "trait" : "none", "color" : "9ea734" },
		/* 74 */ { "x" : -345, "y" : -53, "trait" : "none", "color" : "9ea734" },
		/* 75 */ { "x" : 345, "y" : -54, "trait" : "none", "color" : "9ea734" },
		/* 76 */ { "x" : -345, "y" : -56, "trait" : "none", "color" : "9ea734" },
		/* 77 */ { "x" : 345, "y" : -57, "trait" : "none", "color" : "9ea734" },
		/* 78 */ { "x" : -345, "y" : -59, "trait" : "none", "color" : "9ea734" },
		/* 79 */ { "x" : 345, "y" : -60, "trait" : "none", "color" : "9ea734" },
		/* 80 */ { "x" : -345, "y" : -62, "trait" : "none", "color" : "9ea734" },
		/* 81 */ { "x" : 345, "y" : -63, "trait" : "none", "color" : "9ea734" },
		/* 82 */ { "x" : -345, "y" : -65, "trait" : "none", "color" : "9ea734" },
		/* 83 */ { "x" : 345, "y" : -66, "trait" : "none", "color" : "9ea734" },
		/* 84 */ { "x" : -345, "y" : -68, "trait" : "none", "color" : "9ea734" },
		/* 85 */ { "x" : 345, "y" : -69, "trait" : "none", "color" : "9ea734" },
		/* 86 */ { "x" : -345, "y" : -71, "trait" : "none", "color" : "9ea734" },
		/* 87 */ { "x" : 345, "y" : -72, "trait" : "none", "color" : "9ea734" },
		/* 88 */ { "x" : -345, "y" : -74, "trait" : "none", "color" : "9ea734" },
		/* 89 */ { "x" : 345, "y" : -75, "trait" : "none", "color" : "9ea734" },
		/* 90 */ { "x" : -345, "y" : -77, "trait" : "none", "color" : "9ea734" },
		/* 91 */ { "x" : 345, "y" : -78, "trait" : "none", "color" : "9ea734" },
		/* 92 */ { "x" : -345, "y" : -80, "trait" : "none", "color" : "9ea734" },
		/* 93 */ { "x" : 345, "y" : -81, "trait" : "none", "color" : "9ea734" },
		/* 94 */ { "x" : -345, "y" : 64, "trait" : "none", "color" : "9ea734" },
		/* 95 */ { "x" : 345, "y" : 63, "trait" : "none", "color" : "9ea734" },
		/* 96 */ { "x" : -345, "y" : 67, "trait" : "none", "color" : "9ea734" },
		/* 97 */ { "x" : 345, "y" : 66, "trait" : "none", "color" : "9ea734" },
		/* 98 */ { "x" : -345, "y" : 70, "trait" : "none", "color" : "9ea734" },
		/* 99 */ { "x" : 345, "y" : 69, "trait" : "none", "color" : "9ea734" },
		/* 100 */ { "x" : -345, "y" : 73, "trait" : "none", "color" : "9ea734" },
		/* 101 */ { "x" : 345, "y" : 72, "trait" : "none", "color" : "9ea734" },
		/* 102 */ { "x" : -345, "y" : 76, "trait" : "none", "color" : "9ea734" },
		/* 103 */ { "x" : 345, "y" : 75, "trait" : "none", "color" : "9ea734" },
		/* 104 */ { "x" : -345, "y" : 79, "trait" : "none", "color" : "9ea734" },
		/* 105 */ { "x" : 345, "y" : 78, "trait" : "none", "color" : "9ea734" },
		/* 106 */ { "x" : -345, "y" : 82, "trait" : "none", "color" : "9ea734" },
		/* 107 */ { "x" : 345, "y" : 81, "trait" : "none", "color" : "9ea734" },
		/* 108 */ { "x" : -345, "y" : 85, "trait" : "none", "color" : "9ea734" },
		/* 109 */ { "x" : 345, "y" : 84, "trait" : "none", "color" : "9ea734" },
		/* 110 */ { "x" : -345, "y" : 88, "trait" : "none", "color" : "9ea734" },
		/* 111 */ { "x" : 345, "y" : 87, "trait" : "none", "color" : "9ea734" },
		/* 112 */ { "x" : -345, "y" : -83, "trait" : "none", "color" : "9ea734" },
		/* 113 */ { "x" : 345, "y" : -84, "trait" : "none", "color" : "9ea734" },
		/* 114 */ { "x" : -345, "y" : -86, "trait" : "none", "color" : "9ea734" },
		/* 115 */ { "x" : 345, "y" : -87, "trait" : "none", "color" : "9ea734" },
		/* 116 */ { "x" : -1, "y" : -74, "trait" : "none" },
		/* 117 */ { "x" : -1, "y" : 126, "trait" : "none" },
		
		/* 118 */ { "x" : -225, "y" : 197, "bCoef" : 0, "cMask" : ["redKO","blueKO" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },
		/* 119 */ { "x" : -225, "y" : -197, "bCoef" : 0, "cMask" : ["redKO","blueKO" ], "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" },
		/* 120 */ { "x" : 225, "y" : 197, "bCoef" : 0, "cMask" : ["redKO","blueKO" ], "cGroup" : ["redKO" ], "trait" : "kickOffBarrier", "curve" : 0 },
		/* 121 */ { "x" : 225, "y" : -193, "bCoef" : 0, "cMask" : ["redKO","blueKO" ], "cGroup" : ["redKO" ], "trait" : "kickOffBarrier", "curve" : 0 },
		
		/* 122 */ { "x" : -345, "y" : 88, "trait" : "none", "color" : "9ea734" },
		/* 123 */ { "x" : 345, "y" : 87, "trait" : "none", "color" : "9ea734" },
		/* 124 */ { "x" : -345, "y" : 91, "trait" : "none", "color" : "9ea734" },
		/* 125 */ { "x" : 345, "y" : 90, "trait" : "none", "color" : "9ea734" },
		/* 126 */ { "x" : -345, "y" : 94, "trait" : "none", "color" : "9ea734" },
		/* 127 */ { "x" : 345, "y" : 93, "trait" : "none", "color" : "9ea734" },
		/* 128 */ { "x" : -345, "y" : 97, "trait" : "none", "color" : "9ea734" },
		/* 129 */ { "x" : 345, "y" : 96, "trait" : "none", "color" : "9ea734" },
		/* 130 */ { "x" : -345, "y" : 100, "trait" : "none", "color" : "9ea734" },
		/* 131 */ { "x" : 345, "y" : 99, "trait" : "none", "color" : "9ea734" },
		/* 132 */ { "x" : -345, "y" : 103, "trait" : "none", "color" : "9ea734" },
		/* 133 */ { "x" : 345, "y" : 102, "trait" : "none", "color" : "9ea734" },
		/* 134 */ { "x" : -345, "y" : 106, "trait" : "none", "color" : "9ea734" },
		/* 135 */ { "x" : 345, "y" : 105, "trait" : "none", "color" : "9ea734" },
		/* 136 */ { "x" : -345, "y" : 109, "trait" : "none", "color" : "9ea734" },
		/* 137 */ { "x" : 345, "y" : 108, "trait" : "none", "color" : "9ea734" },
		/* 138 */ { "x" : -345, "y" : 112, "trait" : "none", "color" : "9ea734" },
		/* 139 */ { "x" : 345, "y" : 111, "trait" : "none", "color" : "9ea734" },
		/* 140 */ { "x" : -345, "y" : 115, "trait" : "none", "color" : "9ea734" },
		/* 141 */ { "x" : 345, "y" : 114, "trait" : "none", "color" : "9ea734" },
		/* 142 */ { "x" : -345, "y" : 118, "trait" : "none", "color" : "9ea734" },
		/* 143 */ { "x" : 345, "y" : 117, "trait" : "none", "color" : "9ea734" },
		/* 144 */ { "x" : -345, "y" : 121, "trait" : "none", "color" : "9ea734" },
		/* 145 */ { "x" : 345, "y" : 120, "trait" : "none", "color" : "9ea734" },
		/* 146 */ { "x" : -345, "y" : 124, "trait" : "none", "color" : "9ea734" },
		/* 147 */ { "x" : 345, "y" : 123, "trait" : "none", "color" : "9ea734" },
		/* 148 */ { "x" : -344, "y" : 127, "trait" : "none", "color" : "9ea734" },
		/* 149 */ { "x" : 345, "y" : 126, "trait" : "none", "color" : "9ea734" },
		/* 150 */ { "x" : -345, "y" : 130, "trait" : "none", "color" : "9ea734" },
		/* 151 */ { "x" : 345, "y" : 129, "trait" : "none", "color" : "9ea734" },
		/* 152 */ { "x" : -345, "y" : 133, "trait" : "none", "color" : "9ea734" },
		/* 153 */ { "x" : 345, "y" : 132, "trait" : "none", "color" : "9ea734" },
		/* 154 */ { "x" : -345, "y" : 136, "trait" : "none", "color" : "9ea734" },
		/* 155 */ { "x" : 345, "y" : 135, "trait" : "none", "color" : "9ea734" },
		/* 156 */ { "x" : -345, "y" : 139, "trait" : "none", "color" : "9ea734" },
		/* 157 */ { "x" : 345, "y" : 138, "trait" : "none", "color" : "9ea734" },
		/* 158 */ { "x" : -345, "y" : -85, "trait" : "none", "color" : "9ea734" },
		/* 159 */ { "x" : 345, "y" : -86, "trait" : "none", "color" : "9ea734" },
		/* 160 */ { "x" : -345, "y" : 3, "trait" : "none", "color" : "9ea734" },
		/* 161 */ { "x" : 345, "y" : 2, "trait" : "none", "color" : "9ea734" },
		/* 162 */ { "x" : -345, "y" : -91, "trait" : "none", "color" : "9ea734" },
		/* 163 */ { "x" : 345, "y" : -92, "trait" : "none", "color" : "9ea734" },
		/* 164 */ { "x" : -345, "y" : -94, "trait" : "none", "color" : "9ea734" },
		/* 165 */ { "x" : 345, "y" : -95, "trait" : "none", "color" : "9ea734" },
		/* 166 */ { "x" : -345, "y" : -97, "trait" : "none", "color" : "9ea734" },
		/* 167 */ { "x" : 345, "y" : -98, "trait" : "none", "color" : "9ea734" },
		/* 168 */ { "x" : -345, "y" : -100, "trait" : "none", "color" : "9ea734" },
		/* 169 */ { "x" : 345, "y" : -101, "trait" : "none", "color" : "9ea734" },
		/* 170 */ { "x" : -345, "y" : -103, "trait" : "none", "color" : "9ea734" },
		/* 171 */ { "x" : 345, "y" : -104, "trait" : "none", "color" : "9ea734" },
		/* 172 */ { "x" : -345, "y" : -106, "trait" : "none", "color" : "9ea734" },
		/* 173 */ { "x" : 345, "y" : -107, "trait" : "none", "color" : "9ea734" },
		/* 174 */ { "x" : -345, "y" : -109, "trait" : "none", "color" : "9ea734" },
		/* 175 */ { "x" : 345, "y" : -110, "trait" : "none", "color" : "9ea734" },
		/* 176 */ { "x" : -345, "y" : -112, "trait" : "none", "color" : "9ea734" },
		/* 177 */ { "x" : 345, "y" : -113, "trait" : "none", "color" : "9ea734" },
		/* 178 */ { "x" : -345, "y" : -115, "trait" : "none", "color" : "9ea734" },
		/* 179 */ { "x" : 345, "y" : -116, "trait" : "none", "color" : "9ea734" },
		/* 180 */ { "x" : -345, "y" : -118, "trait" : "none", "color" : "9ea734" },
		/* 181 */ { "x" : 345, "y" : -119, "trait" : "none", "color" : "9ea734" },
		/* 182 */ { "x" : -345, "y" : -121, "trait" : "none", "color" : "9ea734" },
		/* 183 */ { "x" : 345, "y" : -122, "trait" : "none", "color" : "9ea734" },
		/* 184 */ { "x" : -345, "y" : -124, "trait" : "none", "color" : "9ea734" },
		/* 185 */ { "x" : 345, "y" : -125, "trait" : "none", "color" : "9ea734" },
		/* 186 */ { "x" : -345, "y" : -127, "trait" : "none", "color" : "9ea734" },
		/* 187 */ { "x" : 345, "y" : -128, "trait" : "none", "color" : "9ea734" },
		/* 188 */ { "x" : -345, "y" : -130, "trait" : "none", "color" : "9ea734" },
		/* 189 */ { "x" : 345, "y" : -131, "trait" : "none", "color" : "9ea734" },
		/* 190 */ { "x" : -345, "y" : -133, "trait" : "none", "color" : "9ea734" },
		/* 191 */ { "x" : 345, "y" : -134, "trait" : "none", "color" : "9ea734" },
		/* 192 */ { "x" : -345, "y" : -136, "trait" : "none", "color" : "9ea734" },
		/* 193 */ { "x" : 345, "y" : -137, "trait" : "none", "color" : "9ea734" },
		/* 194 */ { "x" : -345, "y" : -139, "trait" : "none", "color" : "9ea734" },
		/* 195 */ { "x" : 345, "y" : -140, "trait" : "none", "color" : "9ea734" },
		/* 196 */ { "x" : -3, "y" : -127, "trait" : "none" },
		/* 197 */ { "x" : -345, "y" : 1, "trait" : "none", "color" : "9ea734" },
		/* 198 */ { "x" : 345, "y" : 0, "trait" : "none", "color" : "9ea734" },
		/* 199 */ { "x" : -345, "y" : -88, "trait" : "none", "color" : "9ea734" },
		/* 200 */ { "x" : 345, "y" : -89, "trait" : "none", "color" : "9ea734" },
		/* 201 */ { "x" : 225, "y" : -139, "bCoef" : 0, "trait" : "none", "color" : "EBEBEB", "curve" : 0 },
		/* 202 */ { "x" : 225, "y" : 138, "bCoef" : 0, "trait" : "none", "color" : "EBEBEB", "curve" : 0 },
		/* 203 */ { "x" : -225, "y" : -139, "bCoef" : 0, "trait" : "none", "color" : "EBEBEB", "curve" : 0 },
		/* 204 */ { "x" : -225, "y" : 138, "bCoef" : 0, "trait" : "none", "color" : "EBEBEB", "curve" : 0 },
		/* 205 */ { "x" : -319, "y" : -169, "trait" : "none", "color" : "DADBDB", "curve" : 0 },
		/* 206 */ { "x" : -408, "y" : 172, "bCoef" : 0, "trait" : "none", "color" : "D8F781", "curve" : 0 },
		/* 207 */ { "x" : -407, "y" : -156, "bCoef" : 0, "trait" : "none", "color" : "D8F781", "curve" : 0 },
		/* 208 */ { "x" : 409, "y" : 156, "bCoef" : 0, "trait" : "none", "color" : "D8F781", "curve" : 0 },
		/* 209 */ { "x" : 408, "y" : -155, "bCoef" : 0, "trait" : "none", "color" : "D8F781", "curve" : 0 },
		/* 210 */ { "x" : -23, "y" : 164, "bCoef" : 0, "trait" : "none" },
		/* 211 */ { "x" : -32, "y" : 186, "bCoef" : 0, "trait" : "none" },
		/* 212 */ { "x" : -12, "y" : 174, "bCoef" : 0, "trait" : "none" },
		/* 213 */ { "x" : -23, "y" : 174, "bCoef" : 0, "trait" : "none" },
		/* 214 */ { "x" : -1, "y" : 164, "bCoef" : 0, "trait" : "none" },
		/* 215 */ { "x" : -1, "y" : 188, "bCoef" : 0, "trait" : "none" },
		/* 216 */ { "x" : 11, "y" : 188, "bCoef" : 0, "trait" : "none" },
		/* 217 */ { "x" : 25, "y" : 164, "bCoef" : 0, "trait" : "none" },
		/* 218 */ { "x" : 25, "y" : 188, "bCoef" : 0, "trait" : "none" },
		/* 219 */ { "x" : 26, "y" : 176, "bCoef" : 0, "trait" : "none" },
		/* 220 */ { "x" : 37, "y" : 176, "bCoef" : 0, "trait" : "none" },
		/* 221 */ { "x" : 38, "y" : 164, "bCoef" : 0, "trait" : "none" },
		/* 222 */ { "x" : 38, "y" : 188, "bCoef" : 0, "trait" : "none" },
		/* 223 */ { "x" : -225, "y" : 0, "trait" : "none", "color" : "DADBDB" },
		/* 224 */ { "x" : 225, "y" : 0, "trait" : "none", "color" : "DADBDB" },
		/* 225 */ { "x" : 345, "y" : -140, "trait" : "none", "color" : "DADBDB", "curve" : 0 },
		/* 226 */ { "x" : 345, "y" : 139, "trait" : "none", "color" : "DADBDB", "curve" : 0 },
		/* 227 */ { "x" : -345, "y" : -139, "trait" : "none", "color" : "DADBDB", "curve" : 0 },
		/* 228 */ { "x" : -345, "y" : 139, "trait" : "none", "color" : "DADBDB", "curve" : 0 },
		/* 229 */ { "x" : -345, "y" : -139, "trait" : "none", "color" : "DADBDB", "curve" : 0 },
		/* 230 */ { "x" : -345, "y" : 139, "trait" : "none", "color" : "DADBDB" },
		
		/* 231 */ { "x" : -225, "y" : -140, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "4f5600", "curve" : 0 },
		/* 232 */ { "x" : 225, "y" : -140, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "4f5600", "curve" : 0 },
		/* 233 */ { "x" : -225, "y" : 139, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "DD3C24", "curve" : 0 },
		/* 234 */ { "x" : 225, "y" : 139, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "DD3C24", "curve" : 0 },
		/* 235 */ { "x" : -225, "y" : -141, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "4f5600", "curve" : 0, "vis" : false },
		/* 236 */ { "x" : 225, "y" : -141, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "4f5600", "curve" : 0, "vis" : false },
		/* 237 */ { "x" : -225, "y" : 140, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "DD3C24", "curve" : 0, "vis" : false },
		/* 238 */ { "x" : 225, "y" : 140, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "DD3C24", "curve" : 0, "vis" : false },
		/* 239 */ { "x" : -225, "y" : -142, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "4f5600", "curve" : 0, "vis" : false },
		/* 240 */ { "x" : 225, "y" : -142, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "4f5600", "curve" : 0, "vis" : false },
		/* 241 */ { "x" : -225, "y" : -143, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "4f5600", "curve" : 0, "vis" : false },
		/* 242 */ { "x" : 225, "y" : -143, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "4f5600", "curve" : 0, "vis" : false },
		/* 243 */ { "x" : -225, "y" : -144, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "4f5600", "curve" : 0, "vis" : false },
		/* 244 */ { "x" : 225, "y" : -144, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "4f5600", "curve" : 0, "vis" : false },
		/* 245 */ { "x" : -225, "y" : 141, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "DD3C24", "curve" : 0, "vis" : false },
		/* 246 */ { "x" : 225, "y" : 141, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "DD3C24", "curve" : 0, "vis" : false },
		/* 247 */ { "x" : -225, "y" : 142, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "DD3C24", "curve" : 0, "vis" : false },
		/* 248 */ { "x" : 225, "y" : 142, "bCoef" : 0.5, "cMask" : ["ball" ], "color" : "DD3C24", "curve" : 0, "vis" : false }

	],

	"segments" : [
		{ "v0" : 0, "v1" : 1, "color" : "9ea734", "trait" : "none", "y" : 3 },
		{ "v0" : 2, "v1" : 3, "color" : "9ea734", "trait" : "none", "y" : 6 },
		{ "v0" : 4, "v1" : 5, "color" : "9ea734", "trait" : "none", "y" : 9 },
		{ "v0" : 6, "v1" : 7, "color" : "9ea734", "trait" : "none", "y" : 12 },
		{ "v0" : 8, "v1" : 9, "color" : "9ea734", "trait" : "none", "y" : 15 },
		{ "v0" : 10, "v1" : 11, "color" : "9ea734", "trait" : "none", "y" : -3 },
		{ "v0" : 12, "v1" : 13, "color" : "9ea734", "trait" : "none", "y" : -6 },
		{ "v0" : 14, "v1" : 15, "color" : "9ea734", "trait" : "none", "y" : -9 },
		{ "v0" : 16, "v1" : 17, "color" : "9ea734", "trait" : "none", "y" : -12 },
		{ "v0" : 18, "v1" : 19, "color" : "9ea734", "trait" : "none", "y" : -15 },
		{ "v0" : 20, "v1" : 21, "color" : "9ea734", "trait" : "none", "y" : -18 },
		{ "v0" : 22, "v1" : 23, "color" : "9ea734", "trait" : "none", "y" : -21 },
		{ "v0" : 24, "v1" : 25, "color" : "9ea734", "trait" : "none", "y" : -24 },
		{ "v0" : 26, "v1" : 27, "color" : "9ea734", "trait" : "none", "y" : -27 },
		{ "v0" : 28, "v1" : 29, "color" : "9ea734", "trait" : "none", "y" : -30 },
		{ "v0" : 30, "v1" : 31, "color" : "9ea734", "trait" : "none", "y" : -33 },
		{ "v0" : 32, "v1" : 33, "color" : "9ea734", "trait" : "none", "y" : -36 },
		{ "v0" : 34, "v1" : 35, "color" : "9ea734", "trait" : "none", "y" : -39 },
		{ "v0" : 36, "v1" : 37, "color" : "9ea734", "trait" : "none", "y" : -42 },
		{ "v0" : 38, "v1" : 39, "color" : "9ea734", "trait" : "none", "y" : 18 },
		{ "v0" : 40, "v1" : 41, "color" : "9ea734", "trait" : "none", "y" : 21 },
		{ "v0" : 42, "v1" : 43, "color" : "9ea734", "trait" : "none", "y" : 24 },
		{ "v0" : 44, "v1" : 45, "color" : "9ea734", "trait" : "none", "y" : 27 },
		{ "v0" : 46, "v1" : 47, "color" : "9ea734", "trait" : "none", "y" : 30 },
		{ "v0" : 48, "v1" : 49, "color" : "9ea734", "trait" : "none", "y" : 33 },
		{ "v0" : 50, "v1" : 51, "color" : "9ea734", "trait" : "none", "y" : 36 },
		{ "v0" : 52, "v1" : 53, "color" : "9ea734", "trait" : "none", "y" : 39 },
		{ "v0" : 54, "v1" : 55, "color" : "9ea734", "trait" : "none", "y" : 42 },
		{ "v0" : 56, "v1" : 57, "color" : "9ea734", "trait" : "none", "y" : 45 },
		{ "v0" : 58, "v1" : 59, "color" : "9ea734", "trait" : "none", "y" : 48 },
		{ "v0" : 60, "v1" : 61, "color" : "9ea734", "trait" : "none", "y" : 51 },
		{ "v0" : 62, "v1" : 63, "color" : "9ea734", "trait" : "none", "y" : 54 },
		{ "v0" : 64, "v1" : 65, "color" : "9ea734", "trait" : "none", "y" : 57 },
		{ "v0" : 66, "v1" : 67, "color" : "9ea734", "trait" : "none", "y" : 60 },
		{ "v0" : 68, "v1" : 69, "color" : "9ea734", "trait" : "none", "y" : -45 },
		{ "v0" : 70, "v1" : 71, "color" : "9ea734", "trait" : "none", "y" : -48 },
		{ "v0" : 72, "v1" : 73, "color" : "9ea734", "trait" : "none", "y" : -51 },
		{ "v0" : 74, "v1" : 75, "color" : "9ea734", "trait" : "none", "y" : -54 },
		{ "v0" : 76, "v1" : 77, "color" : "9ea734", "trait" : "none", "y" : -57 },
		{ "v0" : 78, "v1" : 79, "color" : "9ea734", "trait" : "none", "y" : -60 },
		{ "v0" : 80, "v1" : 81, "color" : "9ea734", "trait" : "none", "y" : -63 },
		{ "v0" : 82, "v1" : 83, "color" : "9ea734", "trait" : "none", "y" : -66 },
		{ "v0" : 84, "v1" : 85, "color" : "9ea734", "trait" : "none", "y" : -69 },
		{ "v0" : 86, "v1" : 87, "color" : "9ea734", "trait" : "none", "y" : -72 },
		{ "v0" : 88, "v1" : 89, "color" : "9ea734", "trait" : "none", "y" : -75 },
		{ "v0" : 90, "v1" : 91, "color" : "9ea734", "trait" : "none", "y" : -78 },
		{ "v0" : 92, "v1" : 93, "color" : "9ea734", "trait" : "none", "y" : -81 },
		{ "v0" : 94, "v1" : 95, "color" : "9ea734", "trait" : "none", "y" : 63 },
		{ "v0" : 96, "v1" : 97, "color" : "9ea734", "trait" : "none", "y" : 66 },
		{ "v0" : 98, "v1" : 99, "color" : "9ea734", "trait" : "none", "y" : 69 },
		{ "v0" : 100, "v1" : 101, "color" : "9ea734", "trait" : "none", "y" : 72 },
		{ "v0" : 102, "v1" : 103, "color" : "9ea734", "trait" : "none", "y" : 75 },
		{ "v0" : 104, "v1" : 105, "color" : "9ea734", "trait" : "none", "y" : 78 },
		{ "v0" : 106, "v1" : 107, "color" : "9ea734", "trait" : "none", "y" : 81 },
		{ "v0" : 108, "v1" : 109, "color" : "9ea734", "trait" : "none", "y" : 84 },
		{ "v0" : 110, "v1" : 111, "color" : "9ea734", "trait" : "none", "y" : 87 },
		{ "v0" : 112, "v1" : 113, "color" : "9ea734", "trait" : "none", "y" : -84 },
		{ "v0" : 114, "v1" : 115, "color" : "9ea734", "trait" : "none", "y" : -87 },
		
		{ "v0" : 118, "v1" : 119, "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier", "x" : -65 },
		{ "v0" : 120, "v1" : 121, "curve" : 0, "cGroup" : ["redKO" ], "trait" : "kickOffBarrier", "x" : 65 },
		
		{ "v0" : 122, "v1" : 123, "color" : "9ea734", "trait" : "none", "y" : 36 },
		{ "v0" : 124, "v1" : 125, "color" : "9ea734", "trait" : "none", "y" : 39 },
		{ "v0" : 126, "v1" : 127, "color" : "9ea734", "trait" : "none", "y" : 42 },
		{ "v0" : 128, "v1" : 129, "color" : "9ea734", "trait" : "none", "y" : 45 },
		{ "v0" : 130, "v1" : 131, "color" : "9ea734", "trait" : "none", "y" : 48 },
		{ "v0" : 132, "v1" : 133, "color" : "9ea734", "trait" : "none", "y" : 51 },
		{ "v0" : 134, "v1" : 135, "color" : "9ea734", "trait" : "none", "y" : 54 },
		{ "v0" : 136, "v1" : 137, "color" : "9ea734", "trait" : "none", "y" : 57 },
		{ "v0" : 138, "v1" : 139, "color" : "9ea734", "trait" : "none", "y" : 60 },
		{ "v0" : 140, "v1" : 141, "color" : "9ea734", "trait" : "none", "y" : 63 },
		{ "v0" : 142, "v1" : 143, "color" : "9ea734", "trait" : "none", "y" : 66 },
		{ "v0" : 144, "v1" : 145, "color" : "9ea734", "trait" : "none", "y" : 69 },
		{ "v0" : 146, "v1" : 147, "color" : "9ea734", "trait" : "none", "y" : 72 },
		{ "v0" : 148, "v1" : 149, "color" : "9ea734", "trait" : "none", "y" : 75 },
		{ "v0" : 150, "v1" : 151, "color" : "9ea734", "trait" : "none", "y" : 78 },
		{ "v0" : 152, "v1" : 153, "color" : "9ea734", "trait" : "none", "y" : 81 },
		{ "v0" : 154, "v1" : 155, "color" : "9ea734", "trait" : "none", "y" : 84 },
		{ "v0" : 156, "v1" : 157, "color" : "9ea734", "trait" : "none", "y" : 87 },
		{ "v0" : 158, "v1" : 159, "color" : "9ea734", "trait" : "none", "y" : -33 },
		{ "v0" : 160, "v1" : 161, "color" : "9ea734", "trait" : "none", "y" : -36 },
		{ "v0" : 162, "v1" : 163, "color" : "9ea734", "trait" : "none", "y" : -39 },
		{ "v0" : 164, "v1" : 165, "color" : "9ea734", "trait" : "none", "y" : -42 },
		{ "v0" : 166, "v1" : 167, "color" : "9ea734", "trait" : "none", "y" : -45 },
		{ "v0" : 168, "v1" : 169, "color" : "9ea734", "trait" : "none", "y" : -48 },
		{ "v0" : 170, "v1" : 171, "color" : "9ea734", "trait" : "none", "y" : -51 },
		{ "v0" : 172, "v1" : 173, "color" : "9ea734", "trait" : "none", "y" : -54 },
		{ "v0" : 174, "v1" : 175, "color" : "9ea734", "trait" : "none", "y" : -57 },
		{ "v0" : 176, "v1" : 177, "color" : "9ea734", "trait" : "none", "y" : -60 },
		{ "v0" : 178, "v1" : 179, "color" : "9ea734", "trait" : "none", "y" : -63 },
		{ "v0" : 180, "v1" : 181, "color" : "9ea734", "trait" : "none", "y" : -66 },
		{ "v0" : 182, "v1" : 183, "color" : "9ea734", "trait" : "none", "y" : -69 },
		{ "v0" : 184, "v1" : 185, "color" : "9ea734", "trait" : "none", "y" : -72 },
		{ "v0" : 186, "v1" : 187, "color" : "9ea734", "trait" : "none", "y" : -75 },
		{ "v0" : 188, "v1" : 189, "color" : "9ea734", "trait" : "none", "y" : -78 },
		{ "v0" : 190, "v1" : 191, "color" : "9ea734", "trait" : "none", "y" : -81 },
		{ "v0" : 192, "v1" : 193, "color" : "9ea734", "trait" : "none", "y" : -84 },
		{ "v0" : 194, "v1" : 195, "color" : "9ea734", "trait" : "none", "y" : -87 },
		{ "v0" : 197, "v1" : 198, "color" : "9ea734", "trait" : "none", "y" : -36 },
		{ "v0" : 199, "v1" : 200, "color" : "9ea734", "trait" : "none", "y" : -42 },
		{ "v0" : 201, "v1" : 202, "curve" : 0, "color" : "EBEBEB", "bCoef" : 0, "trait" : "none", "x" : 225 },
		{ "v0" : 203, "v1" : 204, "curve" : 0, "color" : "EBEBEB", "bCoef" : 0, "trait" : "none", "x" : -225 },
		{ "v0" : 206, "v1" : 207, "curve" : 0, "color" : "D8F781", "bCoef" : 0, "trait" : "none", "x" : 0 },
		{ "v0" : 208, "v1" : 209, "curve" : 0, "color" : "D8F781", "bCoef" : 0, "trait" : "none", "x" : 0 },
		{ "v0" : 210, "v1" : 211, "curve" : -144.69975156014, "color" : "EBEBEB", "bCoef" : 0, "trait" : "none" },
		{ "v0" : 211, "v1" : 212, "curve" : -135.99178805217, "color" : "EBEBEB", "bCoef" : 0, "trait" : "none" },
		{ "v0" : 212, "v1" : 213, "color" : "EBEBEB", "bCoef" : 0, "trait" : "none" },
		{ "v0" : 214, "v1" : 215, "color" : "EBEBEB", "bCoef" : 0, "trait" : "none" },
		{ "v0" : 215, "v1" : 216, "color" : "EBEBEB", "bCoef" : 0, "trait" : "none" },
		{ "v0" : 217, "v1" : 218, "color" : "EBEBEB", "bCoef" : 0, "trait" : "none" },
		{ "v0" : 219, "v1" : 220, "color" : "EBEBEB", "bCoef" : 0, "trait" : "none" },
		{ "v0" : 221, "v1" : 222, "color" : "EBEBEB", "bCoef" : 0, "trait" : "none" },
		{ "v0" : 223, "v1" : 224, "color" : "DADBDB", "trait" : "none", "y" : 0 },
		{ "v0" : 225, "v1" : 226, "color" : "DADBDB", "trait" : "none", "y" : 0, "x" : 150 },
		{ "v0" : 225, "v1" : 227, "curve" : 0, "color" : "DADBDB", "trait" : "none" },
		{ "v0" : 226, "v1" : 228, "curve" : 0, "color" : "DADBDB", "trait" : "none" },
		{ "v0" : 229, "v1" : 230, "curve" : -1.1616039978427, "color" : "DADBDB", "trait" : "none", "y" : 0, "x" : -150 },
		
		{ "v0" : 231, "v1" : 232, "curve" : 0, "color" : "4f5600", "bCoef" : 0.5, "cMask" : ["ball" ], "y" : -140 },
		{ "v0" : 233, "v1" : 234, "curve" : 0, "color" : "4f5600", "bCoef" : 0.5, "cMask" : ["ball" ], "y" : 139 },
		{ "v0" : 235, "v1" : 236, "curve" : 0, "vis" : false, "color" : "4f5600", "bCoef" : 0.5, "cMask" : ["ball" ], "y" : -141 },
		{ "v0" : 237, "v1" : 238, "curve" : 0, "vis" : false, "color" : "4f5600", "bCoef" : 0.5, "cMask" : ["ball" ], "y" : 140 },
		{ "v0" : 239, "v1" : 240, "curve" : 0, "vis" : false, "color" : "4f5600", "bCoef" : 0.5, "cMask" : ["ball" ], "y" : -142 },
		{ "v0" : 241, "v1" : 242, "curve" : 0, "vis" : false, "color" : "4f5600", "bCoef" : 0.5, "cMask" : ["ball" ], "y" : -143 },
		{ "v0" : 243, "v1" : 244, "curve" : 0, "vis" : false, "color" : "4f5600", "bCoef" : 0.5, "cMask" : ["ball" ], "y" : -144 },
		{ "v0" : 245, "v1" : 246, "curve" : 0, "vis" : false, "color" : "4f5600", "bCoef" : 0.5, "cMask" : ["ball" ], "y" : 141 },
		{ "v0" : 247, "v1" : 248, "curve" : 0, "vis" : false, "color" : "4f5600", "bCoef" : 0.5, "cMask" : ["ball" ], "y" : 142 }

	],

	"goals" : [
		{ "p0" : [-232,-155 ], "p1" : [-359,-155 ], "team" : "red" },
		{ "p0" : [-406,-153 ], "p1" : [-406,167 ], "team" : "red" },
		{ "p0" : [-360,155 ], "p1" : [-232,155 ], "team" : "red" },
		{ "p0" : [202,-157 ], "p1" : [352,-157 ], "team" : "blue" },
		{ "p0" : [359,155 ], "p1" : [209,155 ], "team" : "blue" },
		{ "p0" : [409.5,168 ], "p1" : [409.5,-155 ], "team" : "blue" },
		{ "p0" : [-359.5,-157 ], "p1" : [-471.5,-140 ], "team" : "red" },
		{ "p0" : [-402.5,168 ], "p1" : [-305.5,156 ], "team" : "red" },
		{ "p0" : [355.5,155 ], "p1" : [417.5,170 ], "team" : "blue" },
		{ "p0" : [406.5,-158 ], "p1" : [343.5,-155 ], "team" : "blue" },
		{ "p0" : [413.5,-153 ], "p1" : [389.5,-165 ], "team" : "blue" },
		{ "p0" : [6.5,151 ], "p1" : [226.5,155 ], "team" : "blue" },
		{ "p0" : [212.5,-156 ], "p1" : [-0.5,-154 ], "team" : "blue" },
		{ "p0" : [-240.5,155 ], "p1" : [-2.5,155 ], "team" : "red" },
		{ "p0" : [-238.5,-156 ], "p1" : [0.5,-153 ], "team" : "red" }

	],

	"discs" : [
		{ "radius" : 2, "pos" : [0,139 ], "color" : "363636", "trait" : "none" },
		{ "radius" : 2, "pos" : [0,-139 ], "color" : "363636", "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-136 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-130 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-123 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-117 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-112 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-106 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-99 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-93 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-87 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-81 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-74 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-68 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-63 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-57 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-50 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-44 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-38 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-32 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-25 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-19 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-14 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-8 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,-1 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,5 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,11 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,17 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,24 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,30 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,35 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,41 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,48 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,54 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,60 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,66 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,73 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,79 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,84 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,90 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,97 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,103 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,108 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,115 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,121 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,126 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,133 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" },
		{ "radius" : 0.5, "invMass" : 0, "pos" : [0,139 ], "color" : "BDBDBD", "bCoef" : 3, "cMask" : ["red","blue" ], "trait" : "none" }

	],

	"planes" : [
		{ "normal" : [1,0 ], "dist" : 0, "bCoef" : 0, "cMask" : ["blue" ] },
		{ "normal" : [-1,0 ], "dist" : 0, "bCoef" : 0, "cMask" : ["red" ] },
		{ "normal" : [0,1 ], "dist" : -198, "bCoef" : 0, "cMask" : ["red","blue","ball" ] },
		{ "normal" : [0,-1 ], "dist" : -199, "bCoef" : 0, "cMask" : ["red","blue","ball" ] },
		{ "normal" : [-1,0 ], "dist" : -620, "bCoef" : 0, "cMask" : ["red","blue","ball" ] },
		{ "normal" : [1,0 ], "dist" : -556, "bCoef" : 0, "cMask" : ["red","blue","ball" ] }

	],

	"traits" : {
		"ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] },
		"goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 },
		"goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] },
		"kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] },
		"none" : { "cMask" : ["" ] }

	},

	"ballPhysics" : {
		"radius" : 5,
		"damping" : 0.9999,
		"invMass" : 0.999,
		"bCoef" : 1.1,
		"color" : "c9f364"

	},

	"playerPhysics" : {
		"kickStrength" : 0.2,
		"bCoef" : 1.1,
		"acceleration" : 0.12

	}
}`;
  

var Volleyball=`
{

	"name" : "Escreva !help para mais informações",

	"width" : 485,

	"height" : 205,

	"spawnDistance" : 455,

	"bg" : { "type" : "grass", "width" : 0, "height" : 0, "kickOffRadius" : 0, "cornerRadius" : 0 },

	"vertexes" : [
		/* 0 */ { "x" : -350, "y" : -97, "trait" : "art", "_selected" : true },
		/* 1 */ { "x" : 350, "y" : -97, "trait" : "art", "_selected" : true },
		/* 2 */ { "x" : -351, "y" : -94, "trait" : "art", "_selected" : true },
		/* 3 */ { "x" : 351, "y" : -94, "trait" : "art", "_selected" : true },
		/* 4 */ { "x" : -352, "y" : -91, "trait" : "art", "_selected" : true },
		/* 5 */ { "x" : 352, "y" : -91, "trait" : "art", "_selected" : true },
		/* 6 */ { "x" : -353, "y" : -88, "trait" : "art", "_selected" : true },
		/* 7 */ { "x" : 353, "y" : -88, "trait" : "art", "_selected" : true },
		/* 8 */ { "x" : -354, "y" : -85, "trait" : "art", "_selected" : true },
		/* 9 */ { "x" : 354, "y" : -85, "trait" : "art", "_selected" : true },
		/* 10 */ { "x" : -355, "y" : -82, "trait" : "art", "_selected" : true },
		/* 11 */ { "x" : 355, "y" : -82, "trait" : "art", "_selected" : true },
		/* 12 */ { "x" : -356, "y" : -79, "trait" : "art", "_selected" : true },
		/* 13 */ { "x" : 356, "y" : -79, "trait" : "art", "_selected" : true },
		/* 14 */ { "x" : -357, "y" : -76, "trait" : "art", "_selected" : true },
		/* 15 */ { "x" : 357, "y" : -76, "trait" : "art", "_selected" : true },
		/* 16 */ { "x" : -358, "y" : -73, "trait" : "art", "_selected" : true },
		/* 17 */ { "x" : 358, "y" : -73, "trait" : "art", "_selected" : true },
		/* 18 */ { "x" : -359, "y" : -70, "trait" : "art", "_selected" : true },
		/* 19 */ { "x" : 359, "y" : -70, "trait" : "art", "_selected" : true },
		/* 20 */ { "x" : -360, "y" : -67, "trait" : "art", "_selected" : true },
		/* 21 */ { "x" : 360, "y" : -67, "trait" : "art", "_selected" : true },
		/* 22 */ { "x" : -361, "y" : -64, "trait" : "art", "_selected" : true },
		/* 23 */ { "x" : 361, "y" : -64, "trait" : "art", "_selected" : true },
		/* 24 */ { "x" : -362, "y" : -61, "trait" : "art", "_selected" : true },
		/* 25 */ { "x" : 362, "y" : -61, "trait" : "art", "_selected" : true },
		/* 26 */ { "x" : -363, "y" : -58, "trait" : "art", "_selected" : true },
		/* 27 */ { "x" : 363, "y" : -58, "trait" : "art", "_selected" : true },
		/* 28 */ { "x" : -364, "y" : -55, "trait" : "art", "_selected" : true },
		/* 29 */ { "x" : 364, "y" : -55, "trait" : "art", "_selected" : true },
		/* 30 */ { "x" : -365, "y" : -52, "trait" : "art", "_selected" : true },
		/* 31 */ { "x" : 365, "y" : -52, "trait" : "art", "_selected" : true },
		/* 32 */ { "x" : -366, "y" : -49, "trait" : "art", "_selected" : true },
		/* 33 */ { "x" : 366, "y" : -49, "trait" : "art", "_selected" : true },
		/* 34 */ { "x" : -367, "y" : -46, "trait" : "art", "_selected" : true },
		/* 35 */ { "x" : 367, "y" : -46, "trait" : "art", "_selected" : true },
		/* 36 */ { "x" : -368, "y" : -43, "trait" : "art", "_selected" : true },
		/* 37 */ { "x" : 368, "y" : -43, "trait" : "art", "_selected" : true },
		/* 38 */ { "x" : -369, "y" : -40, "trait" : "art", "_selected" : true },
		/* 39 */ { "x" : 369, "y" : -40, "trait" : "art", "_selected" : true },
		/* 40 */ { "x" : -370, "y" : -37, "trait" : "art", "_selected" : true },
		/* 41 */ { "x" : 370, "y" : -37, "trait" : "art", "_selected" : true },
		/* 42 */ { "x" : -371, "y" : -34, "trait" : "art", "_selected" : true },
		/* 43 */ { "x" : 371, "y" : -34, "trait" : "art", "_selected" : true },
		/* 44 */ { "x" : -372, "y" : -31, "trait" : "art", "_selected" : true },
		/* 45 */ { "x" : 372, "y" : -31, "trait" : "art", "_selected" : true },
		/* 46 */ { "x" : -373, "y" : -28, "trait" : "art", "_selected" : true },
		/* 47 */ { "x" : 373, "y" : -28, "trait" : "art", "_selected" : true },
		/* 48 */ { "x" : -374, "y" : -25, "trait" : "art", "_selected" : true },
		/* 49 */ { "x" : 374, "y" : -25, "trait" : "art", "_selected" : true },
		/* 50 */ { "x" : -375, "y" : -22, "trait" : "art", "_selected" : true },
		/* 51 */ { "x" : 375, "y" : -22, "trait" : "art", "_selected" : true },
		/* 52 */ { "x" : -376, "y" : -19, "trait" : "art", "_selected" : true },
		/* 53 */ { "x" : 376, "y" : -19, "trait" : "art", "_selected" : true },
		/* 54 */ { "x" : -377, "y" : -16, "trait" : "art", "_selected" : true },
		/* 55 */ { "x" : 377, "y" : -16, "trait" : "art", "_selected" : true },
		/* 56 */ { "x" : -378, "y" : -13, "trait" : "art", "_selected" : true },
		/* 57 */ { "x" : 378, "y" : -13, "trait" : "art", "_selected" : true },
		/* 58 */ { "x" : -379, "y" : -10, "trait" : "art", "_selected" : true },
		/* 59 */ { "x" : 379, "y" : -10, "trait" : "art", "_selected" : true },
		/* 60 */ { "x" : -380, "y" : -7, "trait" : "art", "_selected" : true },
		/* 61 */ { "x" : 380, "y" : -7, "trait" : "art", "_selected" : true },
		/* 62 */ { "x" : -381, "y" : -4, "trait" : "art", "_selected" : true },
		/* 63 */ { "x" : 381, "y" : -4, "trait" : "art", "_selected" : true },
		/* 64 */ { "x" : -382, "y" : -1, "trait" : "art", "_selected" : true },
		/* 65 */ { "x" : 382, "y" : -1, "trait" : "art", "_selected" : true },
		/* 66 */ { "x" : -383, "y" : 2, "trait" : "art", "_selected" : true },
		/* 67 */ { "x" : 383, "y" : 2, "trait" : "art", "_selected" : true },
		/* 68 */ { "x" : -384, "y" : 5, "trait" : "art", "_selected" : true },
		/* 69 */ { "x" : 384, "y" : 5, "trait" : "art", "_selected" : true },
		/* 70 */ { "x" : -385, "y" : 8, "trait" : "art", "_selected" : true },
		/* 71 */ { "x" : 385, "y" : 8, "trait" : "art", "_selected" : true },
		/* 72 */ { "x" : -386, "y" : 11, "trait" : "art", "_selected" : true },
		/* 73 */ { "x" : 386, "y" : 11, "trait" : "art", "_selected" : true },
		/* 74 */ { "x" : -387, "y" : 14, "trait" : "art", "_selected" : true },
		/* 75 */ { "x" : 387, "y" : 14, "trait" : "art", "_selected" : true },
		/* 76 */ { "x" : -388, "y" : 17, "trait" : "art", "_selected" : true },
		/* 77 */ { "x" : 388, "y" : 17, "trait" : "art", "_selected" : true },
		/* 78 */ { "x" : -389, "y" : 20, "trait" : "art", "_selected" : true },
		/* 79 */ { "x" : 389, "y" : 20, "trait" : "art", "_selected" : true },
		/* 80 */ { "x" : -390, "y" : 23, "trait" : "art", "_selected" : true },
		/* 81 */ { "x" : 390, "y" : 23, "trait" : "art", "_selected" : true },
		/* 82 */ { "x" : -391, "y" : 26, "trait" : "art", "_selected" : true },
		/* 83 */ { "x" : 391, "y" : 26, "trait" : "art", "_selected" : true },
		/* 84 */ { "x" : -392, "y" : 29, "trait" : "art", "_selected" : true },
		/* 85 */ { "x" : 392, "y" : 29, "trait" : "art", "_selected" : true },
		/* 86 */ { "x" : -393, "y" : 32, "trait" : "art", "_selected" : true },
		/* 87 */ { "x" : 393, "y" : 32, "trait" : "art", "_selected" : true },
		/* 88 */ { "x" : -394, "y" : 35, "trait" : "art", "_selected" : true },
		/* 89 */ { "x" : 394, "y" : 35, "trait" : "art", "_selected" : true },
		/* 90 */ { "x" : -395, "y" : 38, "trait" : "art", "_selected" : true },
		/* 91 */ { "x" : 395, "y" : 38, "trait" : "art", "_selected" : true },
		/* 92 */ { "x" : -396, "y" : 41, "trait" : "art", "_selected" : true },
		/* 93 */ { "x" : 396, "y" : 41, "trait" : "art", "_selected" : true },
		/* 94 */ { "x" : -397, "y" : 44, "trait" : "art", "_selected" : true },
		/* 95 */ { "x" : 397, "y" : 44, "trait" : "art", "_selected" : true },
		/* 96 */ { "x" : -398, "y" : 47, "trait" : "art", "_selected" : true },
		/* 97 */ { "x" : 398, "y" : 47, "trait" : "art", "_selected" : true },
		/* 98 */ { "x" : -399, "y" : 50, "trait" : "art", "_selected" : true },
		/* 99 */ { "x" : 399, "y" : 50, "trait" : "art", "_selected" : true },
		/* 100 */ { "x" : -400, "y" : 53, "trait" : "art", "_selected" : true },
		/* 101 */ { "x" : 400, "y" : 53, "trait" : "art", "_selected" : true },
		/* 102 */ { "x" : -401, "y" : 56, "trait" : "art", "_selected" : true },
		/* 103 */ { "x" : 401, "y" : 56, "trait" : "art", "_selected" : true },
		/* 104 */ { "x" : -402, "y" : 59, "trait" : "art", "_selected" : true },
		/* 105 */ { "x" : 402, "y" : 59, "trait" : "art", "_selected" : true },
		/* 106 */ { "x" : -403, "y" : 62, "trait" : "art", "_selected" : true },
		/* 107 */ { "x" : 403, "y" : 62, "trait" : "art", "_selected" : true },
		/* 108 */ { "x" : -404, "y" : 65, "trait" : "art", "_selected" : true },
		/* 109 */ { "x" : 404, "y" : 65, "trait" : "art", "_selected" : true },
		/* 110 */ { "x" : -405, "y" : 68, "trait" : "art", "_selected" : true },
		/* 111 */ { "x" : 405, "y" : 68, "trait" : "art", "_selected" : true },
		/* 112 */ { "x" : -406, "y" : 71, "trait" : "art", "_selected" : true },
		/* 113 */ { "x" : 406, "y" : 71, "trait" : "art", "_selected" : true },
		/* 114 */ { "x" : -407, "y" : 74, "trait" : "art", "_selected" : true },
		/* 115 */ { "x" : 407, "y" : 74, "trait" : "art", "_selected" : true },
		/* 116 */ { "x" : -408, "y" : 77, "trait" : "art", "_selected" : true },
		/* 117 */ { "x" : 408, "y" : 77, "trait" : "art", "_selected" : true },
		/* 118 */ { "x" : -409, "y" : 80, "trait" : "art", "_selected" : true },
		/* 119 */ { "x" : 409, "y" : 80, "trait" : "art", "_selected" : true },
		/* 120 */ { "x" : -410, "y" : 83, "trait" : "art", "_selected" : true },
		/* 121 */ { "x" : 410, "y" : 83, "trait" : "art", "_selected" : true },
		/* 122 */ { "x" : -411, "y" : 86, "trait" : "art", "_selected" : true },
		/* 123 */ { "x" : 411, "y" : 86, "trait" : "art", "_selected" : true },
		/* 124 */ { "x" : -412, "y" : 89, "trait" : "art", "_selected" : true },
		/* 125 */ { "x" : 412, "y" : 89, "trait" : "art", "_selected" : true },
		/* 126 */ { "x" : -413, "y" : 92, "trait" : "art", "_selected" : true },
		/* 127 */ { "x" : 413, "y" : 92, "trait" : "art", "_selected" : true },
		/* 128 */ { "x" : -414, "y" : 95, "trait" : "art", "_selected" : true },
		/* 129 */ { "x" : 414, "y" : 95, "trait" : "art", "_selected" : true },
		/* 130 */ { "x" : -415, "y" : 98, "trait" : "art", "_selected" : true },
		/* 131 */ { "x" : 415, "y" : 98, "trait" : "art", "_selected" : true },
		/* 132 */ { "x" : -416, "y" : 101, "trait" : "art", "_selected" : true },
		/* 133 */ { "x" : 416, "y" : 101, "trait" : "art", "_selected" : true },
		/* 134 */ { "x" : -417, "y" : 104, "trait" : "art", "_selected" : true },
		/* 135 */ { "x" : 417, "y" : 104, "trait" : "art", "_selected" : true },
		/* 136 */ { "x" : -418, "y" : 107, "trait" : "art", "_selected" : true },
		/* 137 */ { "x" : 418, "y" : 107, "trait" : "art", "_selected" : true },
		/* 138 */ { "x" : -419, "y" : 110, "trait" : "art", "_selected" : true },
		/* 139 */ { "x" : 419, "y" : 110, "trait" : "art", "_selected" : true },
		/* 140 */ { "x" : -420, "y" : 113, "trait" : "art", "_selected" : true },
		/* 141 */ { "x" : 420, "y" : 113, "trait" : "art", "_selected" : true },
		/* 142 */ { "x" : -421, "y" : 116, "trait" : "art", "_selected" : true },
		/* 143 */ { "x" : 421, "y" : 116, "trait" : "art", "_selected" : true },
		/* 144 */ { "x" : -422, "y" : 119, "trait" : "art", "_selected" : true },
		/* 145 */ { "x" : 422, "y" : 119, "trait" : "art", "_selected" : true },
		/* 146 */ { "x" : -423, "y" : 122, "trait" : "art", "_selected" : true },
		/* 147 */ { "x" : 423, "y" : 122, "trait" : "art", "_selected" : true },
		/* 148 */ { "x" : -424, "y" : 125, "trait" : "art", "_selected" : true },
		/* 149 */ { "x" : 424, "y" : 125, "trait" : "art", "_selected" : true },
		/* 150 */ { "x" : -425, "y" : 128, "trait" : "art", "_selected" : true },
		/* 151 */ { "x" : 425, "y" : 128, "trait" : "art", "_selected" : true },
		/* 152 */ { "x" : -426, "y" : 131, "trait" : "art", "_selected" : true },
		/* 153 */ { "x" : 426, "y" : 131, "trait" : "art", "_selected" : true },
		/* 154 */ { "x" : -427, "y" : 134, "trait" : "art", "_selected" : true },
		/* 155 */ { "x" : 427, "y" : 134, "trait" : "art", "_selected" : true },
		/* 156 */ { "x" : -428, "y" : 137, "trait" : "art", "_selected" : true },
		/* 157 */ { "x" : 428, "y" : 137, "trait" : "art", "_selected" : true },
		/* 158 */ { "x" : -429, "y" : 140, "trait" : "art", "_selected" : true },
		/* 159 */ { "x" : 429, "y" : 140, "trait" : "art", "_selected" : true },
		/* 160 */ { "x" : -430, "y" : 143, "trait" : "art", "_selected" : true },
		/* 161 */ { "x" : 430, "y" : 143, "trait" : "art", "_selected" : true },
		/* 162 */ { "x" : -431, "y" : 146, "trait" : "art", "_selected" : true },
		/* 163 */ { "x" : 431, "y" : 146, "trait" : "art", "_selected" : true },
		/* 164 */ { "x" : -432, "y" : 149, "trait" : "art", "_selected" : true },
		/* 165 */ { "x" : 432, "y" : 149, "trait" : "art", "_selected" : true },
		/* 166 */ { "x" : -433, "y" : 152, "trait" : "art", "_selected" : true },
		/* 167 */ { "x" : 433, "y" : 152, "trait" : "art", "_selected" : true },
		/* 168 */ { "x" : -434, "y" : 155, "trait" : "art", "_selected" : true },
		/* 169 */ { "x" : 434, "y" : 155, "trait" : "art", "_selected" : true },
		/* 170 */ { "x" : -434, "y" : 158, "trait" : "art", "_selected" : true },
		/* 171 */ { "x" : 434, "y" : 158, "trait" : "art", "_selected" : true },
		/* 172 */ { "x" : -349.5, "y" : -99.8, "trait" : "art", "_selected" : true },
		/* 173 */ { "x" : 349.5, "y" : -99.8, "trait" : "art", "_selected" : true },
		/* 174 */ { "x" : -436.5, "y" : 161, "trait" : "art", "_selected" : true },
		/* 175 */ { "x" : 436.5, "y" : 161, "trait" : "art", "_selected" : true },
		/* 176 */ { "x" : 441, "y" : 164, "trait" : "art", "_selected" : true },
		/* 177 */ { "x" : -441, "y" : 164, "trait" : "art", "_selected" : true },
		/* 178 */ { "x" : -351.3, "y" : -101.8, "trait" : "art", "color" : "828282", "_selected" : true },
		/* 179 */ { "x" : 351.3, "y" : -101.8, "trait" : "art", "_selected" : true },
		/* 180 */ { "x" : 445, "y" : 166, "trait" : "art", "_selected" : true },
		/* 181 */ { "x" : -445, "y" : 166, "trait" : "art", "_selected" : true },
		/* 182 */ { "x" : -448, "y" : 169, "trait" : "art", "color" : "828282", "_selected" : true },
		/* 183 */ { "x" : 448, "y" : 169, "trait" : "art", "_selected" : true },
		
		/* 184 */ { "x" : -1.5, "y" : 189.5, "bCoef" : 0, "trait" : "ballArea", "color" : "3b3b3b", "_selected" : true },
		/* 185 */ { "x" : -0.5, "y" : 69, "bCoef" : 0.5, "trait" : "ballArea", "color" : "3f3f3f", "_selected" : true },
		/* 186 */ { "x" : 1.5, "y" : 189.5, "bCoef" : 0, "trait" : "ballArea", "color" : "3f3f3f", "_selected" : true },
		
		/* 187 */ { "x" : -2.2, "y" : -111, "trait" : "art", "_selected" : true },
		/* 188 */ { "x" : -1, "y" : -195, "trait" : "art", "_selected" : true },
		/* 189 */ { "x" : 0, "y" : 49, "trait" : "art", "_selected" : true },
		/* 190 */ { "x" : 0, "y" : -66, "trait" : "art", "_selected" : true },
		/* 191 */ { "x" : 2, "y" : -111.8, "trait" : "art", "color" : "4d4d4d", "_selected" : true },
		/* 192 */ { "x" : 0, "y" : -181, "trait" : "art", "_selected" : true },
		
		/* 193 */ { "x" : 3, "y" : 188, "bCoef" : 0, "trait" : "ballArea", "color" : "262626", "_selected" : true },
		/* 194 */ { "x" : 2, "y" : 69, "bCoef" : 0.5, "trait" : "ballArea", "color" : "262626", "_selected" : true },
		/* 195 */ { "x" : -3, "y" : 186, "bCoef" : 0, "trait" : "ballArea", "_selected" : true },
		/* 196 */ { "x" : -2, "y" : 69, "bCoef" : 0.5, "trait" : "ballArea", "_selected" : true },
		
		/* 197 */ { "x" : 88, "y" : -81.5, "trait" : "art", "_selected" : true },
		/* 198 */ { "x" : 111, "y" : 196, "trait" : "art", "color" : "4d4d4d", "_selected" : true },
		/* 199 */ { "x" : 56.5, "y" : 165, "trait" : "art", "_selected" : true },
		/* 200 */ { "x" : 109, "y" : 169, "trait" : "art", "color" : "4d4d4d", "_selected" : true },
		/* 201 */ { "x" : 108, "y" : 159, "trait" : "art", "_selected" : true },
		/* 202 */ { "x" : 97, "y" : 28, "trait" : "art", "_selected" : true },
		/* 203 */ { "x" : 45.5, "y" : -86.5, "trait" : "art", "_selected" : true },
		/* 204 */ { "x" : 50.5, "y" : 24, "trait" : "art", "_selected" : true },
		/* 205 */ { "x" : 85.5, "y" : -101.7, "trait" : "art", "color" : "4d4d4d", "_selected" : true },
		/* 206 */ { "x" : 59, "y" : 162.5, "trait" : "art", "_selected" : true },
		/* 207 */ { "x" : 47, "y" : -88, "trait" : "art", "_selected" : true },
		/* 208 */ { "x" : 86.5, "y" : -83, "trait" : "art", "_selected" : true },
		/* 209 */ { "x" : 106, "y" : 166, "trait" : "art", "_selected" : true },
		/* 210 */ { "x" : 52.5, "y" : 23.5, "trait" : "art", "_selected" : true },
		/* 211 */ { "x" : 95.5, "y" : 28, "trait" : "art", "_selected" : true },
		
		/* 212 */ { "x" : 0, "y" : 218, "trait" : "playerArea", "_selected" : true },
		
		/* 213 */ { "x" : 58.3, "y" : 191, "trait" : "art", "color" : "4d4d4d", "_selected" : true },
		/* 214 */ { "x" : 57, "y" : 169.5, "trait" : "art", "color" : "4d4d4d", "_selected" : true },
		/* 215 */ { "x" : 45, "y" : -107, "trait" : "art", "_selected" : true },
		/* 216 */ { "x" : 45, "y" : -101.7, "trait" : "art", "_selected" : true },
		
		/* 217 */ { "x" : -21.5, "y" : 45.5, "trait" : "kickoffBarrier", "_selected" : true },
		/* 218 */ { "x" : 21.5, "y" : 45.5, "trait" : "kickoffBarrier", "_selected" : true },
		
		/* 219 */ { "x" : 0, "y" : -178, "trait" : "art", "_selected" : true },
		/* 220 */ { "x" : 1, "y" : -195, "trait" : "art", "_selected" : true },
		/* 221 */ { "x" : -485, "y" : -189, "trait" : "art", "_selected" : true },
		/* 222 */ { "x" : 485, "y" : -189, "trait" : "art", "_selected" : true },
		/* 223 */ { "x" : -485, "y" : -192, "trait" : "art", "_selected" : true },
		/* 224 */ { "x" : 485, "y" : -192, "trait" : "art", "_selected" : true },
		/* 225 */ { "x" : -485, "y" : -195, "trait" : "art", "_selected" : true },
		/* 226 */ { "x" : 485, "y" : -195, "trait" : "art", "_selected" : true },
		/* 227 */ { "x" : -485, "y" : -198, "trait" : "art", "_selected" : true },
		/* 228 */ { "x" : 485, "y" : -198, "trait" : "art", "_selected" : true },
		/* 229 */ { "x" : -485, "y" : -201, "trait" : "art", "_selected" : true },
		/* 230 */ { "x" : 485, "y" : -201, "trait" : "art", "_selected" : true },
		/* 231 */ { "x" : -485, "y" : -204, "trait" : "art", "_selected" : true },
		/* 232 */ { "x" : 485, "y" : -204, "trait" : "art", "_selected" : true },
		/* 233 */ { "x" : -485, "y" : -181, "trait" : "art", "_selected" : true },
		/* 234 */ { "x" : 485, "y" : -181, "trait" : "art", "_selected" : true },
		/* 235 */ { "x" : -485, "y" : -183, "trait" : "art", "_selected" : true },
		/* 236 */ { "x" : 485, "y" : -183, "trait" : "art", "_selected" : true },
		/* 237 */ { "x" : -485, "y" : -186, "trait" : "art", "_selected" : true },
		/* 238 */ { "x" : 485, "y" : -186, "trait" : "art", "_selected" : true },
		/* 239 */ { "x" : -2150, "y" : 4000, "trait" : "art", "color" : "383838", "_selected" : true },
		/* 240 */ { "x" : -426, "y" : -167, "trait" : "art", "color" : "424242", "_selected" : true },
		/* 241 */ { "x" : 426, "y" : -167, "trait" : "art", "color" : "424242", "_selected" : true },
		/* 242 */ { "x" : 2150, "y" : 4000, "trait" : "art", "color" : "424242", "_selected" : true },
		/* 243 */ { "x" : -427.5, "y" : -169, "trait" : "art", "color" : "383838", "_selected" : true },
		/* 244 */ { "x" : 427.5, "y" : -169, "trait" : "art", "_selected" : true },
		/* 245 */ { "x" : -429.5, "y" : -171.1, "trait" : "art", "color" : "424242", "_selected" : true },
		/* 246 */ { "x" : 429.5, "y" : -171.1, "trait" : "art", "_selected" : true },
		/* 247 */ { "x" : -431.5, "y" : -173.2, "trait" : "art", "_selected" : true },
		/* 248 */ { "x" : 431.5, "y" : -173.2, "trait" : "art", "_selected" : true },
		/* 249 */ { "x" : -433.5, "y" : -175.3, "trait" : "art", "_selected" : true },
		/* 250 */ { "x" : 433.5, "y" : -175.3, "trait" : "art", "_selected" : true },
		/* 251 */ { "x" : -425.5, "y" : -165, "trait" : "art", "_selected" : true },
		/* 252 */ { "x" : 425.5, "y" : -165, "trait" : "art", "color" : "424242", "_selected" : true },
		/* 253 */ { "x" : -424, "y" : -163, "trait" : "art", "_selected" : true },
		/* 254 */ { "x" : 424, "y" : -163, "trait" : "art", "_selected" : true }

	],

	"segments" : [
		{ "v0" : 233, "v1" : 234, "color" : "9eba72", "trait" : "art", "_selected" : true },
		{ "v0" : 235, "v1" : 236, "color" : "c5c580", "trait" : "art", "_selected" : true },
		{ "v0" : 237, "v1" : 238, "color" : "c8b690", "trait" : "art", "_selected" : true },
		{ "v0" : 221, "v1" : 222, "color" : "a0aeb8", "trait" : "art", "_selected" : true },
		{ "v0" : 223, "v1" : 224, "color" : "70a0b4", "trait" : "art", "_selected" : true },
		{ "v0" : 225, "v1" : 226, "color" : "6090b0", "trait" : "art", "_selected" : true },
		{ "v0" : 227, "v1" : 228, "color" : "5080ac", "trait" : "art", "_selected" : true },
		{ "v0" : 229, "v1" : 230, "color" : "4070a4", "trait" : "art", "_selected" : true },
		{ "v0" : 231, "v1" : 232, "color" : "3060a0", "trait" : "art", "_selected" : true },
		{ "v0" : 212, "v1" : 219, "color" : "709868", "trait" : "art", "_selected" : true },
		
		{ "v0" : 188, "v1" : 212, "vis" : false, "trait" : "playerArea", "_selected" : true },
		{ "v0" : 194, "v1" : 192, "color" : "cfc999", "trait" : "playerArea", "_selected" : true },
		
		{ "v0" : 239, "v1" : 253, "color" : "618361", "trait" : "art", "_selected" : true },
		{ "v0" : 253, "v1" : 254, "color" : "5d7f5d", "trait" : "art", "_selected" : true },
		{ "v0" : 254, "v1" : 242, "color" : "618361", "trait" : "art", "_selected" : true },
		{ "v0" : 239, "v1" : 251, "color" : "3f613f", "trait" : "art", "_selected" : true },
		{ "v0" : 251, "v1" : 252, "color" : "3b5d3b", "trait" : "art", "_selected" : true },
		{ "v0" : 252, "v1" : 242, "color" : "424242", "trait" : "art", "_selected" : true },
		{ "v0" : 239, "v1" : 240, "color" : "424242", "trait" : "art", "_selected" : true },
		{ "v0" : 240, "v1" : 241, "color" : "424242", "trait" : "art", "_selected" : true },
		{ "v0" : 241, "v1" : 242, "color" : "383838", "trait" : "art", "_selected" : true },
		{ "v0" : 239, "v1" : 243, "color" : "383838", "trait" : "art", "_selected" : true },
		{ "v0" : 243, "v1" : 244, "color" : "8b5339", "trait" : "art", "_selected" : true },
		{ "v0" : 244, "v1" : 242, "color" : "895137", "trait" : "art", "_selected" : true },
		{ "v0" : 239, "v1" : 245, "color" : "424242", "trait" : "art", "_selected" : true },
		{ "v0" : 245, "v1" : 246, "color" : "693921", "trait" : "art", "_selected" : true },
		{ "v0" : 246, "v1" : 242, "color" : "693921", "trait" : "art", "_selected" : true },
		{ "v0" : 239, "v1" : 247, "color" : "5b321f", "trait" : "art", "_selected" : true },
		{ "v0" : 247, "v1" : 248, "color" : "5b321f", "trait" : "art", "_selected" : true },
		{ "v0" : 248, "v1" : 242, "color" : "5b321f", "trait" : "art", "_selected" : true },
		{ "v0" : 239, "v1" : 249, "color" : "4f2d1d", "trait" : "art", "_selected" : true },
		{ "v0" : 249, "v1" : 250, "color" : "4f2d1d", "trait" : "art", "_selected" : true },
		{ "v0" : 250, "v1" : 242, "color" : "4f2d1d", "trait" : "art", "_selected" : true },
		{ "v0" : 195, "v1" : 198, "color" : "556d55", "trait" : "art", "_selected" : true },
		{ "v0" : 193, "v1" : 198, "color" : "4d4d4d", "trait" : "art", "_selected" : true },
		{ "v0" : 186, "v1" : 198, "color" : "4d4d4d", "trait" : "art", "_selected" : true },
		{ "v0" : 198, "v1" : 200, "color" : "4d4d4d", "trait" : "art", "_selected" : true },
		{ "v0" : 187, "v1" : 205, "color" : "5d755e", "trait" : "art", "_selected" : true },
		{ "v0" : 191, "v1" : 205, "color" : "4d4d4d", "trait" : "art", "_selected" : true },
		{ "v0" : 176, "v1" : 177, "color" : "eadaaa", "trait" : "art", "_selected" : true },
		{ "v0" : 180, "v1" : 181, "color" : "cfc28f", "trait" : "art", "_selected" : true },
		{ "v0" : 182, "v1" : 183, "color" : "828282", "trait" : "art", "_selected" : true },
		{ "v0" : 0, "v1" : 1, "color" : "ad9f73", "trait" : "art", "_selected" : true },
		{ "v0" : 2, "v1" : 3, "color" : "b4a67a", "trait" : "art", "_selected" : true },
		{ "v0" : 4, "v1" : 5, "color" : "b6a97d", "trait" : "art", "_selected" : true },
		{ "v0" : 6, "v1" : 7, "color" : "bbac80", "trait" : "art", "_selected" : true },
		{ "v0" : 8, "v1" : 9, "color" : "beaf82", "trait" : "art", "_selected" : true },
		{ "v0" : 10, "v1" : 11, "color" : "c0b284", "trait" : "art", "_selected" : true },
		{ "v0" : 12, "v1" : 13, "color" : "c2b486", "trait" : "art", "_selected" : true },
		{ "v0" : 14, "v1" : 15, "color" : "c4b688", "trait" : "art", "_selected" : true },
		{ "v0" : 16, "v1" : 17, "color" : "c6b88a", "trait" : "art", "_selected" : true },
		{ "v0" : 18, "v1" : 19, "color" : "c8ba8c", "trait" : "art", "_selected" : true },
		{ "v0" : 20, "v1" : 21, "color" : "c9bc8d", "trait" : "art", "_selected" : true },
		{ "v0" : 22, "v1" : 23, "color" : "cabd8e", "trait" : "art", "_selected" : true },
		{ "v0" : 24, "v1" : 25, "color" : "cbbe8f", "trait" : "art", "_selected" : true },
		{ "v0" : 26, "v1" : 27, "color" : "ccbf90", "trait" : "art", "_selected" : true },
		{ "v0" : 28, "v1" : 29, "color" : "cdc091", "trait" : "art", "_selected" : true },
		{ "v0" : 30, "v1" : 31, "color" : "cec192", "trait" : "art", "_selected" : true },
		{ "v0" : 32, "v1" : 33, "color" : "cfc293", "trait" : "art", "_selected" : true },
		{ "v0" : 34, "v1" : 35, "color" : "d0c394", "trait" : "art", "_selected" : true },
		{ "v0" : 36, "v1" : 37, "color" : "d1c495", "trait" : "art", "_selected" : true },
		{ "v0" : 38, "v1" : 39, "color" : "d2c696", "trait" : "art", "_selected" : true },
		{ "v0" : 40, "v1" : 41, "color" : "d3c797", "trait" : "art", "_selected" : true },
		{ "v0" : 42, "v1" : 43, "color" : "d4c898", "trait" : "art", "_selected" : true },
		{ "v0" : 44, "v1" : 45, "color" : "d5c999", "trait" : "art", "_selected" : true },
		{ "v0" : 46, "v1" : 47, "color" : "d6ca9a", "trait" : "art", "_selected" : true },
		{ "v0" : 48, "v1" : 49, "color" : "d7cb9b", "trait" : "art", "_selected" : true },
		{ "v0" : 50, "v1" : 51, "color" : "d8cc9c", "trait" : "art", "_selected" : true },
		{ "v0" : 52, "v1" : 53, "color" : "d9cd9d", "trait" : "art", "_selected" : true },
		{ "v0" : 54, "v1" : 55, "color" : "dace9e", "trait" : "art", "_selected" : true },
		{ "v0" : 56, "v1" : 57, "color" : "dbd09f", "trait" : "art", "_selected" : true },
		{ "v0" : 58, "v1" : 59, "color" : "dcd1a0", "trait" : "art", "_selected" : true },
		{ "v0" : 60, "v1" : 61, "color" : "ddd2a1", "trait" : "art", "_selected" : true },
		{ "v0" : 62, "v1" : 63, "color" : "ded3a2", "trait" : "art", "_selected" : true },
		{ "v0" : 64, "v1" : 65, "color" : "dfd4a3", "trait" : "art", "_selected" : true },
		{ "v0" : 66, "v1" : 67, "color" : "e0d5a4", "trait" : "art", "_selected" : true },
		{ "v0" : 68, "v1" : 69, "color" : "e1d6a5", "trait" : "art", "_selected" : true },
		{ "v0" : 70, "v1" : 71, "color" : "e2d8a6", "trait" : "art", "_selected" : true },
		{ "v0" : 72, "v1" : 73, "color" : "e3d9a7", "trait" : "art", "_selected" : true },
		{ "v0" : 74, "v1" : 75, "color" : "e4daa8", "trait" : "art", "_selected" : true },
		{ "v0" : 76, "v1" : 77, "color" : "e5dba9", "trait" : "art", "_selected" : true },
		{ "v0" : 78, "v1" : 79, "color" : "e6dcaa", "trait" : "art", "_selected" : true },
		{ "v0" : 80, "v1" : 81, "color" : "e7ddab", "trait" : "art", "_selected" : true },
		{ "v0" : 82, "v1" : 83, "color" : "e8deac", "trait" : "art", "_selected" : true },
		{ "v0" : 84, "v1" : 85, "color" : "e9e0ad", "trait" : "art", "_selected" : true },
		{ "v0" : 86, "v1" : 87, "color" : "eae1ae", "trait" : "art", "_selected" : true },
		{ "v0" : 88, "v1" : 89, "color" : "ebe2af", "trait" : "art", "_selected" : true },
		{ "v0" : 90, "v1" : 91, "color" : "ece3b0", "trait" : "art", "_selected" : true },
		{ "v0" : 92, "v1" : 93, "color" : "ede4b1", "trait" : "art", "_selected" : true },
		{ "v0" : 94, "v1" : 95, "color" : "eee5b2", "trait" : "art", "_selected" : true },
		{ "v0" : 96, "v1" : 97, "color" : "efe6b3", "trait" : "art", "_selected" : true },
		{ "v0" : 98, "v1" : 99, "color" : "f0e8b4", "trait" : "art", "_selected" : true },
		{ "v0" : 100, "v1" : 101, "color" : "f1e9b5", "trait" : "art", "_selected" : true },
		{ "v0" : 102, "v1" : 103, "color" : "f2eab6", "trait" : "art", "_selected" : true },
		{ "v0" : 104, "v1" : 105, "color" : "f3ebb7", "trait" : "art", "_selected" : true },
		{ "v0" : 106, "v1" : 107, "color" : "f4ecb8", "trait" : "art", "_selected" : true },
		{ "v0" : 108, "v1" : 109, "color" : "f5edb9", "trait" : "art", "_selected" : true },
		{ "v0" : 110, "v1" : 111, "color" : "f5eeba", "trait" : "art", "_selected" : true },
		{ "v0" : 112, "v1" : 113, "color" : "f6efbb", "trait" : "art", "_selected" : true },
		{ "v0" : 114, "v1" : 115, "color" : "f6f0bc", "trait" : "art", "_selected" : true },
		{ "v0" : 116, "v1" : 117, "color" : "f7f1bd", "trait" : "art", "_selected" : true },
		{ "v0" : 118, "v1" : 119, "color" : "f7f2be", "trait" : "art", "_selected" : true },
		{ "v0" : 120, "v1" : 121, "color" : "f8f3bf", "trait" : "art", "_selected" : true },
		{ "v0" : 122, "v1" : 123, "color" : "f8f4c0", "trait" : "art", "_selected" : true },
		{ "v0" : 124, "v1" : 125, "color" : "f9f5c1", "trait" : "art", "_selected" : true },
		{ "v0" : 126, "v1" : 127, "color" : "f9f6c2", "trait" : "art", "_selected" : true },
		{ "v0" : 128, "v1" : 129, "color" : "faf7c3", "trait" : "art", "_selected" : true },
		{ "v0" : 130, "v1" : 131, "color" : "faf8c4", "trait" : "art", "_selected" : true },
		{ "v0" : 132, "v1" : 133, "color" : "faf9c5", "trait" : "art", "_selected" : true },
		{ "v0" : 134, "v1" : 135, "color" : "fbfac6", "trait" : "art", "_selected" : true },
		{ "v0" : 136, "v1" : 137, "color" : "fbfac7", "trait" : "art", "_selected" : true },
		{ "v0" : 138, "v1" : 139, "color" : "fbfbc8", "trait" : "art", "_selected" : true },
		{ "v0" : 140, "v1" : 141, "color" : "fcfbc9", "trait" : "art", "_selected" : true },
		{ "v0" : 142, "v1" : 143, "color" : "fcfcca", "trait" : "art", "_selected" : true },
		{ "v0" : 144, "v1" : 145, "color" : "fcfccb", "trait" : "art", "_selected" : true },
		{ "v0" : 146, "v1" : 147, "color" : "fdfdcc", "trait" : "art", "_selected" : true },
		{ "v0" : 148, "v1" : 149, "color" : "fdfdcd", "trait" : "art", "_selected" : true },
		{ "v0" : 150, "v1" : 151, "color" : "fdfdce", "trait" : "art", "_selected" : true },
		{ "v0" : 152, "v1" : 153, "color" : "fefecf", "trait" : "art", "_selected" : true },
		{ "v0" : 154, "v1" : 155, "color" : "fefed0", "trait" : "art", "_selected" : true },
		{ "v0" : 156, "v1" : 157, "color" : "fefed1", "trait" : "art", "_selected" : true },
		{ "v0" : 158, "v1" : 159, "color" : "ffffd2", "trait" : "art", "_selected" : true },
		{ "v0" : 160, "v1" : 161, "color" : "ffffd3", "trait" : "art", "_selected" : true },
		{ "v0" : 162, "v1" : 163, "color" : "ffffd4", "trait" : "art", "_selected" : true },
		{ "v0" : 164, "v1" : 165, "color" : "ffffd5", "trait" : "art", "_selected" : true },
		{ "v0" : 166, "v1" : 167, "color" : "ffffd6", "trait" : "art", "_selected" : true },
		{ "v0" : 168, "v1" : 169, "color" : "ffffd7", "trait" : "art", "_selected" : true },
		{ "v0" : 170, "v1" : 171, "color" : "faf0bc", "trait" : "art", "_selected" : true },
		{ "v0" : 0, "v1" : 170, "color" : "d2c498", "trait" : "art", "_selected" : true },
		{ "v0" : 1, "v1" : 171, "color" : "d2c498", "trait" : "art", "_selected" : true },
		{ "v0" : 185, "v1" : 189, "color" : "d4c494", "trait" : "art", "_selected" : true },
		{ "v0" : 187, "v1" : 188, "color" : "737373", "trait" : "art", "_selected" : true },
		{ "v0" : 191, "v1" : 220, "color" : "555555", "trait" : "art", "_selected" : true },
		{ "v0" : 213, "v1" : 214, "color" : "4d4d4d", "trait" : "art", "_selected" : true },
		{ "v0" : 215, "v1" : 216, "color" : "5d755e", "trait" : "art", "_selected" : true },
		{ "v0" : 216, "v1" : 203, "color" : "b1a171", "trait" : "art", "_selected" : true },
		{ "v0" : 214, "v1" : 199, "color" : "a19161", "trait" : "art", "_selected" : true },
		{ "v0" : 200, "v1" : 201, "color" : "b1a171", "trait" : "art", "_selected" : true },
		{ "v0" : 201, "v1" : 202, "color" : "c1b181", "trait" : "art", "_selected" : true },
		{ "v0" : 202, "v1" : 197, "color" : "baaa7a", "trait" : "art", "_selected" : true },
		{ "v0" : 199, "v1" : 204, "color" : "c1b181", "trait" : "art", "_selected" : true },
		{ "v0" : 204, "v1" : 203, "color" : "baaa7a", "trait" : "art", "_selected" : true },
		{ "v0" : 205, "v1" : 197, "color" : "b1a171", "trait" : "art", "_selected" : true },
		{ "v0" : 199, "v1" : 200, "color" : "a99969", "trait" : "art", "_selected" : true },
		{ "v0" : 206, "v1" : 210, "color" : "c1b181", "trait" : "art", "_selected" : true },
		{ "v0" : 210, "v1" : 207, "color" : "baaa7a", "trait" : "art", "_selected" : true },
		{ "v0" : 208, "v1" : 211, "color" : "baaa7a", "trait" : "art", "_selected" : true },
		{ "v0" : 211, "v1" : 209, "color" : "baaa7a", "trait" : "art", "_selected" : true },
		{ "v0" : 209, "v1" : 206, "color" : "a99969", "trait" : "art", "_selected" : true },
		{ "v0" : 197, "v1" : 203, "color" : "b7a777", "trait" : "art", "_selected" : true },
		{ "v0" : 207, "v1" : 208, "color" : "b7a777", "trait" : "art", "_selected" : true },
		{ "v0" : 173, "v1" : 175, "color" : "435d91", "trait" : "art", "_selected" : true },
		{ "v0" : 175, "v1" : 174, "color" : "3a5e9c", "trait" : "art", "_selected" : true },
		{ "v0" : 174, "v1" : 172, "color" : "435d91", "trait" : "art", "_selected" : true },
		{ "v0" : 172, "v1" : 173, "color" : "4c6286", "trait" : "art", "_selected" : true },
		{ "v0" : 177, "v1" : 178, "color" : "eadaaa", "trait" : "art", "_selected" : true },
		{ "v0" : 181, "v1" : 178, "color" : "cfc28f", "trait" : "art", "_selected" : true },
		{ "v0" : 179, "v1" : 176, "color" : "eadaaa", "trait" : "art", "_selected" : true },
		{ "v0" : 179, "v1" : 180, "color" : "cfc28f", "trait" : "art", "_selected" : true },
		{ "v0" : 178, "v1" : 182, "color" : "828282", "trait" : "art", "_selected" : true },
		{ "v0" : 183, "v1" : 179, "color" : "a6aa6a", "trait" : "art", "_selected" : true },
		{ "v0" : 178, "v1" : 179, "color" : "98a060", "trait" : "art", "_selected" : true },
		{ "v0" : 216, "v1" : 205, "color" : "909658", "trait" : "art", "_selected" : true },
		{ "v0" : 189, "v1" : 190, "color" : "e1e1e1", "trait" : "art", "_selected" : true },
		{ "v0" : 190, "v1" : 192, "color" : "dcdcdc", "trait" : "art", "_selected" : true },
		
		{ "v0" : 195, "v1" : 196, "color" : "999999", "bCoef" : 0.65, "cMask" : ["ball" ], "_selected" : true },
		{ "v0" : 195, "v1" : 196, "vis" : false, "color" : "999999", "bCoef" : 0, "cMask" : ["red","blue" ], "_selected" : true },
		{ "v0" : 184, "v1" : 185, "color" : "3b3b3b", "bCoef" : 0.65, "cMask" : ["ball" ], "_selected" : true },
		{ "v0" : 186, "v1" : 185, "color" : "3f3f3f", "bCoef" : 0.65, "cMask" : ["ball" ], "_selected" : true },
		{ "v0" : 193, "v1" : 194, "color" : "262626", "bCoef" : 0.65, "cMask" : ["ball" ], "_selected" : true },
		
		{ "v0" : 194, "v1" : 196, "vis" : false, "bCoef" : 0.65, "trait" : "ballArea", "_selected" : true },
		
		{ "v0" : 188, "v1" : 212, "curve" : -244, "vis" : false, "bCoef" : 0, "cMask" : ["red" ], "cGroup" : ["redKO" ], "_selected" : true },
		{ "v0" : 212, "v1" : 188, "curve" : -244, "vis" : false, "bCoef" : 0, "cMask" : ["blue" ], "cGroup" : ["blueKO" ], "_selected" : true },
		
		{ "v0" : 217, "v1" : 218, "curve" : -180, "vis" : false, "trait" : "kickoffBarrier", "_selected" : true },
		{ "v0" : 218, "v1" : 217, "curve" : -180, "vis" : false, "trait" : "kickoffBarrier", "_selected" : true },
		
		{ "v0" : 212, "v1" : 186, "vis" : false, "trait" : "ballArea", "_selected" : true }

	],

	"goals" : [
		{ "p0" : [-2,205 ], "p1" : [-535,205 ], "team" : "red", "_selected" : true },
		{ "p0" : [2,205 ], "p1" : [535,205 ], "team" : "blue", "_selected" : true }

	],

	"discs" : [
		{ "radius" : 7.25, "invMass" : 0, "pos" : [-464,-94 ], "color" : "e56d56", "trait" : "art", "_selected" : true },
		{ "radius" : 7.5, "invMass" : 0, "pos" : [-480,-54 ], "color" : "e56d56", "trait" : "art", "_selected" : true },
		{ "radius" : 5.5, "invMass" : 0, "pos" : [451,-190 ], "color" : "5d83c2", "trait" : "art", "_selected" : true },
		{ "radius" : 7.5, "invMass" : 0, "pos" : [465,-90 ], "color" : "5d83c2", "trait" : "art", "_selected" : true },
		{ "radius" : 7.75, "invMass" : 0, "pos" : [472,-73 ], "color" : "5d83c2", "trait" : "art", "_selected" : true },
		{ "radius" : 6.25, "invMass" : 0, "pos" : [-465,-102 ], "color" : "dfc7b4", "trait" : "art", "_selected" : true },
		{ "radius" : 6.5, "invMass" : 0, "pos" : [-481,-61.5 ], "color" : "cead97", "trait" : "art", "_selected" : true },
		{ "radius" : 4.5, "invMass" : 0, "pos" : [451.5,-196.5 ], "color" : "dab7a4", "trait" : "art", "_selected" : true },
		{ "radius" : 3.75, "invMass" : 0, "pos" : [438.5,-197.5 ], "color" : "c9a27b", "trait" : "art", "_selected" : true },
		{ "radius" : 3.5, "invMass" : 0, "pos" : [423.5,-196 ], "color" : "ab8871", "trait" : "art", "_selected" : true },
		{ "radius" : 6.5, "invMass" : 0, "pos" : [466,-97.5 ], "color" : "cead97", "trait" : "art", "_selected" : true },
		{ "radius" : 6.75, "invMass" : 0, "pos" : [473,-80.5 ], "color" : "fae7d4", "trait" : "art", "_selected" : true },
		{ "radius" : 5, "invMass" : 0, "pos" : [-459,-186.5 ], "color" : "bb8871", "trait" : "art", "_selected" : true },
		{ "radius" : 4.25, "invMass" : 0, "pos" : [-455,-193 ], "color" : "dab7a4", "trait" : "art", "_selected" : true },
		{ "radius" : 3.25, "invMass" : 0, "pos" : [-413.5,-196.5 ], "color" : "d9b28b", "trait" : "art", "_selected" : true },
		{ "radius" : 5.5, "invMass" : 0, "pos" : [-469,-188 ], "color" : "e56d56", "trait" : "art", "_selected" : true },
		{ "radius" : 4.5, "invMass" : 0, "pos" : [-469.5,-193.5 ], "color" : "dab7a4", "trait" : "art", "_selected" : true },
		{ "radius" : 7.75, "invMass" : 0, "pos" : [454,-130 ], "color" : "5d83c2", "trait" : "art", "_selected" : true },
		{ "radius" : 6.75, "invMass" : 0, "pos" : [455,-137.5 ], "color" : "f9eee5", "trait" : "art", "_selected" : true },
		
		{ "radius" : 100000, "invMass" : 300, "pos" : [-53,-99953 ], "color" : "ffffffff", "bCoef" : 0, "cMask" : ["ball" ], "_selected" : true }

	],

	"planes" : [
		{ "normal" : [0,1 ], "dist" : -178, "trait" : "playerArea", "_selected" : true },
		{ "normal" : [0,-1 ], "dist" : -230, "trait" : "playerArea", "_selected" : true },
		{ "normal" : [0.93,0.37 ], "dist" : -470, "trait" : "playerArea", "_selected" : true },
		{ "normal" : [-0.93,0.37 ], "dist" : -470, "trait" : "playerArea", "_selected" : true },
		
		{ "normal" : [0.986,0.165 ], "dist" : -482, "bCoef" : 0.2, "trait" : "ballArea", "_selected" : true },
		{ "normal" : [-0.986,0.165 ], "dist" : -482, "bCoef" : 0.2, "trait" : "ballArea", "_selected" : true },
		{ "normal" : [1,0 ], "dist" : -489, "bCoef" : 0.4, "cMask" : ["ball" ], "trait" : "ballArea", "_selected" : true },
		{ "normal" : [-1,0 ], "dist" : -489, "bCoef" : 0.4, "cMask" : ["ball" ], "trait" : "ballArea", "_selected" : true },
		{ "normal" : [0,1 ], "dist" : -1000, "trait" : "ballArea", "_selected" : true },
		{ "normal" : [0,-1 ], "dist" : -215, "trait" : "ballArea", "_selected" : true },
		
		{ "normal" : [1,0 ], "dist" : -510, "cMask" : ["red","blue" ], "trait" : "playerArea", "_selected" : true },
		{ "normal" : [-1,0 ], "dist" : -510, "cMask" : ["red","blue" ], "trait" : "playerArea", "_selected" : true },
		
		{ "normal" : [1,0 ], "dist" : -100000, "bCoef" : 0, "cGroup" : ["ball" ], "_selected" : true },
		{ "normal" : [-1,0 ], "dist" : -100000, "bCoef" : 0, "cGroup" : ["ball" ], "_selected" : true },
		{ "normal" : [0,1 ], "dist" : -199000, "bCoef" : 0, "cGroup" : ["ball" ], "_selected" : true }

	],

	"traits" : {
		"art" : { "cGroup" : ["" ], "cMask" : ["" ] },
		"ballArea" : { "bCoef" : 0.1, "cMask" : ["ball" ] },
		"playerArea" : { "bCoef" : 0.1, "cMask" : ["red","blue" ] },
		"goalNet" : { "bCoef" : 0.05, "cMask" : ["ball","red","blue" ] },
		"kickoffBarrier" : { "bCoef" : 0, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ] }

	},

	"ballPhysics" : {
		"radius" : 7.25,
		"bCoef" : 0.5,
		"invMass" : 1,
		"damping" : 0.99,
		"cMask" : [ "wall"
		],
		"color" : "435aaf"

	},

	"playerPhysics" : {
		"bCoef" : 1,
		"invMass" : 0.1,
		"damping" : 0.97,
		"acceleration" : 0.09575,
		"kickingAcceleration" : 0.09575,
		"kickStrength" : 8.5,
		"kickingDamping" : 0.9

	}
}`;

const MIN_SIZE = 15;
const MAX_SIZE = 15;
// trusted admin list
const CensurarMensajes = ['rs', 'con', 'real', 'soccer', 'creo', ' con', '  con', '   con', '    con', ' rs', '  rs', '   rs', '    rs', 'R.S', 'R.S C.O.N T.I.A', 'r.s c.o.n t.i.a', 'c.on', 'co.n', 'c.o.n', 'C.ON', 'CO.N', 'C.O.N', 'r.s c.o.n t.i.a', 'R_S', 'R_S C_O_N T_I_A', 'r_s c_o_n t_i_a', 'c_on', 'co_n', 'c_o_n', 'C_ON', 'CO_N', 'C_O_N', 'r_s c_o_n t_i_a', 'R-S C-O-N T-I-A', 'r-s c-o-n t-i-a', 'c-on', 'co-n', 'c-o-n', 'C-ON', 'CO-N', 'C-O-N', 'C.REO', 'CR.EO', 'CRE.O', 'c.reo', 'cr.eo', 'cre.o', 'C-REO', 'CR-EO', 'CRE-O', 'c-reo', 'cr-eo', 'cre-o', 'c_reo', 'cr_eo', 'cre_o', 'C_REO', 'CR_EO', 'CRE_O', 'r.s', 'on', 'C.on', 'mogólico', 'mógolico', 'mogolíco', 'mogolicó', 'mógólícó', 'MOGÓLICO', 'MÓGOLICO', 'MOGOLÍCO', 'MOGOLICÓ', 'MÓGÓLÍCÓ', 'm.ogolico', 'mo.golico', 'mog.olico', 'mogo.lico', 'mogol.ico', 'mogoli.co', 'mogolic.o', 'M.OGOLICO', 'MO.GOLICO', 'MOG.OLICO', 'MOGO.LICO', 'MOGOL.ICO', 'MOOGOLI.CO', 'MOGOLIC.O', 'm-ogolico', 'mo-golico', 'mog-olico', 'mogo-lico', 'mogol-ico', 'mogoli-co', 'mogolic-o', 'M-OGOLICO', 'MO-GOLICO', 'MOG-OLICO', 'MOGO-LICO', 'MOGOL-ICO', 'MOOGOLI-CO', 'MOGOLIC-O', 'm_ogolico', 'mo_golico', 'mog_olico', 'mogo_lico', 'mogol_ico', 'mogoli_co', 'mogolic_o', 'M_OGOLICO', 'MO_GOLICO', 'MOG_OLICO', 'MOGO_LICO', 'MOGOL_ICO', 'MOOGOLI_CO', 'MOGOLIC_O', 'dawn', 'daun', 'doun', 'DÓWN', 'dówn', 'dáun', 'daún', 'dáún', 'DAWN', 'cancerígeno', 'CANCERÍGENO'];

// trusted admin list
const trustBanList = ['DETECTOR DE ADMIN DOWN', 'Áʀʙɪᴛʀᴏ ʙᴏᴛ', '🏁 Áʀʙɪᴛʀᴏ ʙᴏᴛ 🤖', '🏁 Áʀʙɪᴛʀᴏ ʙᴏᴛ', 'detector de admin down', 'Detector de admin down', 'Detector De Admin Down', 'Dewan', 'MERCA', ' 🏁 Áʀʙɪᴛʀᴏ ʙᴏᴛ 🤖', '  🏁 Áʀʙɪᴛʀᴏ ʙᴏᴛ 🤖', '       🏁 Áʀʙɪᴛʀᴏ ʙᴏᴛ 🤖', '      🏁 Áʀʙɪᴛʀᴏ ʙᴏᴛ 🤖', '🏁 Áʀʙɪᴛʀᴏ ʙᴏᴛ 🤖       ', '🏁 Áʀʙɪᴛʀᴏ ʙᴏᴛ 🤖 ', '🏁 Áʀʙɪᴛʀᴏ ʙᴏᴛ 🤖  ', '🏁 Áʀʙɪᴛʀᴏ ʙᴏᴛ 🤖   ', '🏁 Áʀʙɪᴛʀᴏ ʙᴏᴛ 🤖    ', '🏁 Áʀʙɪᴛʀᴏ ʙᴏᴛ 🤖     ', 'REAL SOCCER CON TÍA', 'REAL SOCCER CON TIA NEWTON', 'REAL SOCCER CON TÍA NEWTON', 'REAL SOCCER CON TN', 'REAL SOCCER CON TIA', 'Bill', 'bill', 'Juhhi', 'RS', 'Hunte CdN', 'Hunte cdn', 'hunte cdn', 'hunte CdN', 'HUNTE CDN', 'HUNTE cdn', 'hunte CDN', 'adebayor', 'Adebayor', 'ADEBAYOR', 'adebayor', 'adebayor ', 'adebayor  ', 'adebayor   ', 'adebayor     ', 'Adebayor', 'Adebayor ', 'Adebayor  ', 'Adebayor   ', 'Adebayor    ', ' Adebayor', '  Adebayor', 'adebayor', 'NANOTA', ' NANOTA', '  NANOTA', '   NANOTA', '    NANOTA', '     NANOTA', '      NANOTA', '      NANOTA', 'NANOTA ', 'NANOTA  ', 'NANOTA   ', 'NANOTA     ', 'NANOTA      ', 'nanota', ' nanota', '  nanota', '   nanota', '    nanota', '     nanota', '      nanota', '      nanota', 'nanota ', 'nanota  ', 'nanota   ', 'nanota     ', 'nanota      ', 'Nanota', ' Nanota', '  Nanota', '   Nanota', '    Nanota', '     Nanota', '      Nanota', '      Nanota', 'Nanota ', 'Nanota  ', 'Nanota   ', 'Nanota     ', 'Nanota      ', 'N4N0T4', 'n4n0t4', 'N4n0t4', 'not mesi', ' not mesi', '  not mesi', '   not mesi', '    not mesi', '     not mesi', '      not mesi', '      not mesi', 'not mesi ', 'not mesi  ', 'not mesi   ', 'not mesi     ', 'not mesi      ', 'not messi', ' not messi', '  not messi', '   not messi', '    not messi', '     not messi', '      not messi', '      not messi', 'not messi ', 'not messi  ', 'not messi   ', 'not messi     ', 'not messi      ', 'pants', ' pants', '  pants', '   pants', '    pants', '     pants', '      pants', '      pants', 'pants ', 'pants  ', 'pants   ', 'pants     ', 'pants      ', 'Pelé', ' Pelé', '  Pelé', '   Pelé', '    Pelé', '     Pelé', '      Pelé', '      Pelé', 'Pelé ', 'Pelé  ', 'Pelé   ', 'Pelé     ', 'Pelé      ', 'pelé', ' pelé', '  pelé', '   pelé', '    pelé', '     pelé', '      pelé', '      pelé', 'pelé ', 'pelé  ', 'pelé   ', 'pelé     ', 'pelé      ', 'PELÉ', ' PELÉ', '  PELÉ', '   PELÉ', '    PELÉ', '     PELÉ', '      PELÉ', '      PELÉ', 'PELÉ ', 'PELÉ  ', 'PELÉ   ', 'PELÉ     ', 'PELÉ      ', 'PeléE'];
let connections = []



room.setCustomStadium(Futsalx7);
room.setScoreLimit(3);
room.setTimeLimit(4);
room.setTeamsLock(true);
room.setTeamColors(1, 60, 0xFFFFFF, [0xFF4D40, 0xFF4D40, 0xFF4D40]);
room.setTeamColors(2, 60, 0xFFFFFF, [0x0080ff, 0x0080ff, 0x0080ff]);

function clonekick(player){
    players = room.getPlayerList();
    for (i = 0; i < players.length-1; i++){
        if (player.name == players[i].name){
            room.kickPlayer(player.id,"Já existe um jogador com este nick ⚊ 𝐃𝐔",false);
        }
    }
}
 
var ScoresNumbers = '0️⃣1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣';
var boldedNumbers = '𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗';
var circledNumbers = '🄋⓵⓶⓷⓸⓹⓺⓻⓼⓽';
 
function boldedNumber(num){
    var result = '';
    var reversedDigits = [];
    do{
        reversedDigits.push(num % 10);
        num = Math.floor(num / 10);
    }while(num > 0);
    for (var i = reversedDigits.length; i-- > 0; ){
        result += boldedNumbers.substr(reversedDigits[i]*2, 2);
    }
   
    return result;
}

function scorerNumber(num){
    var result = '';
    var reversedDigits = [];
    do{
        reversedDigits.push(num % 10);
        num = Math.floor(num / 10);
    }while(num > 0);
    for (var i = reversedDigits.length; i-- > 0; ){
        result += ScoresNumbers.substr(reversedDigits[i]*3, 3);
    }
   
    return result;
}

 
function circledNumber(num){
    var result = '';
    var reversedDigits = [];
    do{
        reversedDigits.push(num % 10);
        num = Math.floor(num / 10);
    }while(num > 0);
    for (var i = reversedDigits.length; i-- > 0; ){
        if(reversedDigits[i] == 0){
            result += circledNumbers.substr(reversedDigits[i], 2);
        }else{
            result += circledNumbers.substr(1+reversedDigits[i], 1);
        }
    }
   
    return result;
}
 
 
/*
    Functions
*/
// If there are no admins left in the room give admin to one of the remaining players.
function CensuradorDeSpammeros(message) {
    if (CensurarMensajes.includes(message)) {
        return true;
    }else return false;
}

function checkBanedAdmins(player) {
    if (trustBanList.includes(player.name)) {
        room.kickPlayer(player.id,"acesso negado 🚫", true);
    }
}

function errorMessagePM(message, id){
    room.sendAnnouncement("Error: " + message, id, 0xFF0000);
}
function updateAdmins() {
  // Get all players except the host (id = 0 is always the host)
  var players = room.getPlayerList().filter((player) => player.id != 0 );
  if ( players.length == 0 ){room.stopGame();} // No players left, do nothing.
  if ( players.find((player) => player.admin) != null ) return; // There's an admin left so do nothing.
  room.setPlayerAdmin(players[0].id, true); // Give admin to the first non admin player in the list
}
setInterval(function(){room.clearBans(); room.sendChat('Eu limpei as proibições!'); },1800000);
setInterval(function(){            
            room.setPlayerAdmin(room.getPlayerList().filter((player) => player.admin == true && player.id != 0)[0].id, false);
            room.setPlayerAdmin(room.getPlayerList().filter((player) => player.id != 0)[2].id, true); 
            room.sendChat('Sí, a la democracia. No, a dictadura :P'); },5400000);
 
function initPlayerStats(player){
}
 
 
 
/*
for commands
*/
 
function swapFun(player){
    if (player.admin == true){
        if (room.getScores() == null) {
            players = room.getPlayerList();
            for (i = 0; i < players.length; i++){
                if (players[i].team == 1){
                    room.setPlayerTeam(players[i].id, 2);
                }
                else if (players[i].team == 2){
                    room.setPlayerTeam(players[i].id, 1);
                }
            }
        }
    }
}
 
 

function pushMuteFun(player, message){ // !mute Anddy
    // Prevent somebody to talk in the room (uses the nickname, not the id)
    // need to be admin
    if (superAdmins.includes(player.name) == true){
        if (!(mutedPlayers.includes(message.substr(6)))) mutedPlayers.push(message.substr(6));
    }
}
 
 
function gotMutedFun(player){
    if (mutedPlayers.includes(player.name)){
        return true;
    }
}

function unmuteFun(player, message){ // !unmute Anddy
    // Allow somebody to talk if he has been muted
    // need to be admin
    if (superAdmins.includes(player.name) == true){
        pos = mutedPlayers.indexOf(message.substr(9));
        mutedPlayers.splice(pos, 1);
    }
}
 
function confirmFun(player, message){ // !confirm aaa
    // Prevent somebody to talk in the room (uses the nickname, not the id)
    // need to be admin
    let password = message.substr(9);
    let account = accounts.find(a => a.password === password);
    if (account !== undefined) {
        account.playerId = player.id;
        room.sendChat("[" + player.name + "] " + account.username + " você acessou sua conta.");
        confirmedPlayers.add(player.id);
        if (stats.hasOwnProperty(account.username)){}
        else {stats[account.username] = [0, 0, 0, 0, 0, 0, 1000, "D", "D", "D", "D", "D"];}
    }
    return false;
}
 
function chatasbotFun(player, message){
    messagetext = message.substr(11)
    room.sendChat(messagetext);
    return false;
}  
 
function adminFun(player, message){ // !admin Andis
    // Gives admin to the person who type this password
 
  room.kickPlayer(player.id, "Tentando Hackear! 👋", false);
    return false; // The message won't be displayed
}
 
function resignFun(player, message){
room.kickPlayer(player.id, "Tentando Hackear! 👋", false);
    updateAdmins();
}
 
function CamisetasFun(player) { // !camisetas
    room.sendAnnouncement("| !laliga | !seriea | !premierleague | !bundesliga | !eredivisie | !ligue1 |  !superlig | !campeonatoruso | !premierucrania | !superligasuiza ⚽ ✦", player.id, 0xFF6F00, "bold", 0);
    room.sendAnnouncement("✦ ⚽  !paises | !superliga | !ascenso | !brasileirao | !campeonatouruguayo | !ligaparaguaya | !ligaaguila | !ligapro | !liga1peru | !campeonatochileno | !ligaboliviana | !ligamx | !mls | !fantasmas", player.id, 0xFF6F00, "bold", 0);
	return false;
}
function FantasmasFun(player) { // !fantasmas
    room.sendAnnouncement("📜 👻 Equipes Fantasmas: ", player.id, 0xfaebd6, "bold", 0);
    room.sendAnnouncement("🌍 exSeleções:  | !𝐔𝐑𝐒𝐒 | !𝐘𝐔𝐆 | !𝐂𝐙𝐄", player.id, 0xfaebd6, "bold", 0);
    room.sendAnnouncement("🛡 exClubes: | !𝐀𝐋𝐔 | !𝐋𝐎𝐀", player.id, 0xfaebd6, "bold", 0);
	return false;
}
function SuperligaFun(player) { // !superliga
    room.sendAnnouncement("🅰 𝚂𝚄𝙿𝙴𝚁𝙻𝙸𝙶𝙰: | !𝐁𝐎𝐂 | !𝐑𝐈𝐕 | !𝐒𝐋𝐎 | !𝐑𝐀𝐂 | !𝐈𝐍𝐃 | !𝐇𝐔𝐑 | !𝐆𝐈𝐌 | !𝐄𝐒𝐓 | !𝐍𝐎𝐁 | !𝐂𝐄𝐍", player.id, 0xADF4FF, "normal", 0); 
    room.sendAnnouncement("| !𝐁𝐀𝐍𝐃 | !𝐋𝐀𝐍 | !𝐔𝐍𝐈 | !𝐂𝐒𝐅 | !𝐀𝐋𝐃 | !𝐀𝐀𝐀𝐉 | !𝐀𝐓𝐔 | !𝐓𝐀𝐋 | !𝐀𝐑𝐒𝐄 | !𝐃𝐘𝐉 | !𝐂𝐂𝐒", player.id, 0xADF4FF, "normal", 0); 
    room.sendAnnouncement("| !𝐆𝐎𝐃 | !𝐕𝐄𝐋 | !𝐏𝐀𝐓", player.id, 0xADF4FF, "normal", 0);
    return false;	
}
function AscensoFun(player) { // !ascenso
    room.sendAnnouncement('🅱 𝙰𝚂𝙲𝙴𝙽𝚂𝙾: | !𝐓𝐈𝐆 | !𝐀𝐋𝐁 | !𝐅𝐂𝐎 | !𝐂𝐇𝐀 | !𝐀𝐓𝐋 |  !𝐒𝐌𝐓 | !𝐎𝐋𝐏 | !𝐏𝐋𝐀 | !𝐁𝐄𝐋 | !𝐐𝐔𝐈 | !𝐌𝐎𝐑 | !𝐍𝐂𝐇', player.id, 0xDB1414, "normal", 0); 
    room.sendAnnouncement('| !𝐃𝐎𝐂 | !𝐒𝐂𝐇 | !𝐑𝐈𝐄 | !𝐒𝐌𝐒𝐉 | !𝐀𝐆𝐑 | !𝐀𝐋𝐕 | !𝐒𝐓𝐄𝐋​ | !𝐌𝐄𝐑 | !𝐀𝐝𝐐 | !𝐂𝐉𝐀 | !𝐆𝐲𝐓 | !𝐀𝐋𝐌 | !𝐂𝐀𝐃𝐔 | !𝐕𝐒𝐂', player.id, 0xDB1414, "normal", 0); 
	return false;
}
function CampeonatoChilenoFun(player) { // !campeonatochileno
    room.sendAnnouncement("(🇨🇱) 𝙲𝙰𝙼𝙿𝙴𝙾𝙽𝙰𝚃𝙾 𝙲𝙷𝙸𝙻𝙴𝙽𝙾:  | !𝐂𝐂𝐎 | !𝐔𝐃𝐂 | !𝐔𝐂𝐀 | !𝐂𝐃𝐏 | !𝐂𝐎𝐁", player.id, 0xFF2A12, "normal", 0); 
}
function LigaBolivianaFun(player) { // !ligaboliviana
    room.sendAnnouncement("(🇧🇴) 𝙻𝙸𝙶𝙰 𝙱𝙾𝙻𝙸𝚅𝙸𝙰𝙽𝙰:  | !𝐁𝐋𝐕 | !𝐒𝐓𝐆 | !𝐖𝐓𝐌", player.id, 0x5ACC31, "normal", 0);
    return false;	
}
function MLSFun(player) { // !mls
    room.sendAnnouncement("(🇺🇸) 𝙼𝙻𝚂 : | !𝐋𝐀 | !𝐓𝐎𝐅𝐂 | !𝐍𝐘𝐂 | !𝐀𝐓𝐋𝐔 | !𝐋𝐀𝐅𝐂 | !𝐒𝐄𝐀 | !𝐍𝐘𝐑𝐁 | !𝐏𝐓𝐈𝐌", player.id, 0x1930FF, "normal", 0); 
	return false;
}
function LigaUruguayaFun(player) { // !campeonatouruguayo
    room.sendAnnouncement('(🇺🇾) 𝙲𝙰𝙼𝙿𝙴𝙾𝙽𝙰𝚃𝙾 𝚄𝚁𝚄𝙶𝚄𝙰𝚈𝙾: | !𝐍𝐀𝐂 | !𝐏𝐄𝐍 | !𝐃𝐀𝐍 | !𝐑𝐀𝐌 | !𝐑𝐈𝐔', player.id, 0x69CDFF, "normal", 0); 
	return false;
}
function CampeonatoRusoFun(player) { // !campeonatoruso
    room.sendAnnouncement('(🇷🇺) 𝙲𝙰𝙼𝙿𝙴𝙾𝙽𝙰𝚃𝙾 𝚁𝚄𝚂𝙾 | !𝐒𝐏𝐌 | !𝐂𝐒𝐊 | !𝐙𝐄𝐍 | !𝐋𝐎𝐊 | !𝐃𝐈𝐍', player.id, 0xe11a22, "normal", 0); 
	return false;
}
function PremierUcranianaFun(player) { // !premierucrania
    room.sendAnnouncement('(🇺🇦) 𝙻𝙸𝙶𝙰 𝙿𝚁𝙴𝙼𝙸𝙴𝚁 𝚄𝙲𝚁𝙰𝙽𝙸𝙰 | !𝐒𝐇𝐀 | !𝐃𝐘𝐊 | !𝐍𝐘𝐕', player.id, 0xFFF954, "normal", 0); 
	return false;
}
function LaLigaFun(player) { // !laliga
    room.sendAnnouncement('(🇪🇸) 𝙻𝙰𝙻𝙸𝙶𝙰: | !𝐑𝐌𝐀 | !𝐁𝐀𝐑 | !𝐀𝐓𝐌 | !𝐕𝐀𝐋 | !𝐁𝐄𝐓 | !𝐆𝐄𝐓 | !𝐋𝐄𝐕 | !𝐑𝐀𝐘', player.id, 0xFF2A00, "normal", 0); 
	return false;
}
function LigaAguilaFun(player) { // !ligaaguila
    room.sendAnnouncement('(🇨🇴) 𝙻𝙸𝙶𝙰 𝙰𝙶𝚄𝙸𝙻𝙰: | !𝐀𝐓𝐍 | !𝐌𝐈𝐋 | !𝐀𝐌𝐄 | !𝐒𝐅𝐄 | !𝐂𝐀𝐋 | !𝐎𝐍𝐂', player.id, 0xFFE959, "normal", 0); 
	return false;
}
function LigaParaguayaFun(player) { // !ligaparaguaya
    room.sendAnnouncement('(🇵🇾) 𝙻𝙸𝙶𝙰 𝙿𝙰𝚁𝙰𝙶𝚄𝙰𝚈𝙰: | !𝐂𝐂𝐏 | !𝐎𝐋𝐈 | !𝐆𝐔𝐀 | !𝐋𝐈𝐁', player.id, 0xa3a3a3, "normal", 0);
	return false;
}
function SerieATIMFun(player) { // !seriea
    room.sendAnnouncement('(🇮🇹) 𝚂𝙴𝚁𝙸𝙴 𝙰: | !𝐉𝐔𝐕 | !𝐀𝐂𝐌 | !𝐈𝐍𝐓 | !𝐑𝐎𝐌 | !𝐍𝐀𝐏 | !𝐋𝐀𝐙 | !𝐅𝐈𝐎 | !𝐀𝐓𝐀', player.id, 0x6699FF, "normal", 0);
	return false;
}
function BrasilLeagueFun(player) { // !brasileirão
    room.sendAnnouncement('(🇧🇷) 𝙱𝚁𝙰𝚂𝙸𝙻𝙴𝙸𝚁𝙰𝙾: |!𝐒𝐀𝐎 | !𝐒𝐀𝐍 | !𝐂𝐎𝐑 | !𝐂𝐑𝐔 | !𝐆𝐑𝐄 | !𝐅𝐋𝐀 | !𝐒𝐂𝐈 | !𝐏𝐀𝐋 | !𝐕𝐀𝐒 | !𝐂𝐀𝐌 ', player.id, 0xF7FF19, "normal", 0);
    room.sendAnnouncement('| !𝐅𝐋𝐔 | !𝐁𝐎𝐓 | !𝐏𝐀𝐑', player.id, 0xF7FF19, "normal", 0); 
	return false;
}
function PremierLeagueFun(player) { // !premierleague
    room.sendAnnouncement('(🇬🇧) 𝙿𝚁𝙴𝙼𝙸𝙴𝚁 𝙻𝙴𝙰𝙶𝚄𝙴: | !𝐓𝐎𝐓 | !𝐋𝐈𝐕| !𝐀𝐑𝐒 | !𝐂𝐇𝐄| !𝐌𝐔𝐍 | !𝐌𝐂𝐈 | !𝐀𝐕𝐋 | !𝐖𝐁𝐀 | !𝐅𝐔𝐋 | !𝐋𝐄𝐈 ', player.id, 0xFFFFFF, "normal", 0); 
    room.sendAnnouncement('| !𝐒𝐎𝐔 | !𝐖𝐀𝐓 | !𝐂𝐑𝐘 | !𝐄𝐕𝐄', player.id, 0xFFFFFF, "normal", 0); 
	return false;
}
function SuperLigFun(player) { // !superlig
    room.sendAnnouncement('(🇹🇷) 𝚂𝚄𝙿𝙴𝚁 𝙻𝙸𝙶: | !𝐆𝐒 | !𝐅𝐁 | !𝐁𝐉𝐊 ', player.id, 0xFA0000, "normal", 0); 
	return false;
}
function PaisesFun(player) { // !paises
    room.sendAnnouncement('(🌎) 𝙿𝙰𝙸𝚂𝙴𝚂: | !𝐁𝐑𝐀 | !𝐀𝐑𝐆 | !𝐔𝐑𝐔 | !𝐂𝐇𝐈 | !𝐂𝐎𝐋 | !𝐏𝐄𝐑 | !𝐏𝐆𝐘 | !𝐄𝐂𝐔 | !𝐕𝐄𝐍 | !𝐁𝐎𝐋 | !𝐀𝐋𝐄 | !𝐈𝐓𝐀', player.id, 0x5793FA, "normal", 0);  
    room.sendAnnouncement('| !𝐄𝐒𝐏 | !𝐅𝐑𝐀 | !𝐏𝐎𝐑 | !𝐈𝐍𝐆 | !𝐇𝐎𝐋 | !𝐂𝐑𝐎 | !𝐁𝐄𝐋𝐆 | !𝐍𝐆𝐀 | !𝐉𝐀𝐏 | !𝐔𝐒𝐀 | !𝐐𝐀𝐓 | !𝐂𝐍𝐎 | !𝐂𝐒𝐔 | !𝐀𝐔𝐓 | !𝐍𝐙𝐄 | !𝐑𝐔𝐒', player.id, 0x5793FA, "normal", 0); 
	return false;
}
function BundesligaFun(player) { // !bundesliga
    room.sendAnnouncement('(🇩🇪) 𝙱𝚄𝙽𝙳𝙴𝚂𝙻𝙸𝙶𝙰: | !𝐁𝐕𝐁 | !𝐅𝐂𝐁', player.id, 0xF5FAF8, "normal", 0); 
	return false;
}
function EredivisieFun(player) { // !eredivisie
    room.sendAnnouncement('(🇳🇱) 𝙴𝚁𝙴𝙳𝙸𝚅𝙸𝚂𝙸𝙴: | !𝐀𝐉𝐀 | !𝐅𝐄𝐘 | !𝐏𝐒𝐕 | !𝐖𝐈𝐋', player.id, 0xFA6400, "normal", 0); 
	return false;
} 

function Ligue1Fun(player) { // !ligue1
    room.sendAnnouncement('(🇫🇷) 𝙻𝙸𝙶𝚄𝙴 𝟷: | !𝐏𝐒𝐆 | !𝐎𝐆𝐂 | !𝐎𝐌 | !𝐎𝐋 | !𝐀𝐒𝐌 | !𝐅𝐂𝐍 | !𝐑𝐄𝐍 | !𝐒𝐓𝐄', player.id, 0x3744FA, "normal", 0); 
	return false;
}
function LigaMXFun(player) { // !ligamx
    room.sendAnnouncement('(🇲🇽) 𝙻𝙸𝙶𝙰 𝙼𝚇: | !𝐀𝐌𝐂 | !𝐂𝐇𝐕 | !𝐂𝐑𝐔𝐙 | !𝐓𝐆𝐒 | !𝐌𝐓𝐘', player.id, 0x75FF59, "normal", 0); 
	return false;
} 
function LigaProFun(player) { // !ligapro
    room.sendAnnouncement('(🇪🇨) 𝙻𝙸𝙶𝙰 𝙿𝚁𝙾: | !𝐋𝐃𝐔 | !𝐁𝐒𝐂 | !𝐄𝐌𝐄 | !𝐈𝐃𝐕', player.id, 0xFAFF5C, "normal", 0); 
	return false;
}
function RaiffeisenSuperLeagueFun(player) { // !superligasuiza
    room.sendAnnouncement('(🇨🇭) 𝚁𝙰𝙸𝙵𝙵𝙴𝙸𝚂𝙴𝙽 𝚂𝚄𝙿𝙴𝚁 𝙻𝙴𝙰𝙶𝚄𝙴: | !𝐁𝐀𝐒 | ', player.id, 0xFF0A0A, "normal", 0); 
	return false;
}
function Liga1PeruFun(player) { // !liga1peru
    room.sendAnnouncement('(🇵🇪) 𝙻𝙸𝙶𝙰 𝟷: | !𝐔𝐍𝐕 | !𝐀𝐋𝐈 | !𝐂𝐑𝐈 | !𝐌𝐄𝐋 ', player.id, 0xFF1C1C, "normal", 0); 
	return false;
}
function RiverFun(player) { // !RIV
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('riv/titular/red | riv/titular/blue | riv/alternativa/red |riv/alternativa/blue | riv/tercera/red |riv/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('riv/titular/red/2018 | riv/titular/blue/2018 | riv/alternativa/red/2018 |riv/alternativa/blue/2018', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('riv/titular/red/2017 | riv/titular/blue/2017 | riv/alternativa/red/2017 |riv/alternativa/blue/2017', player.id, 0x6BFFB5, "normal", 0);
	return false;
}
function RIVTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, -144, 0x0e0e0e, [0xF7F7FB, 0xFB2F35, 0xF7F7FB]);
    }
}
function RIVTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, -144, 0x0e0e0e, [0xF7F7FB, 0xFB2F35, 0xF7F7FB]);
    }
}
function RIVAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x701332, 0xA6093A, 0x701332]);
    }
}
function RIVAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x701332, 0xA6093A, 0x701332]);
    }
}
function RIVTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 49, 0xF5F5F5, [0xD52828, 0x1C1C1C, 0x1C1C1C]);
    }
}
function RIVTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 49, 0xF5F5F5, [0xD52828, 0x1C1C1C, 0x1C1C1C]);
    }
}
function RIVTitular2018RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, -145, 0x050505, [0xFCFBFB, 0xFE0B18, 0xFCFBFB]);
    }
}
function RIVTitular2018BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, -145, 0x050505, [0xFCFBFB, 0xFE0B18, 0xFCFBFB]);
    }
}
function RIVAlternativa2018RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xebebeb, [0x3E2864, 0x261F32]);
    }
}
function RIVAlternativa2018BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xebebeb, [0x3E2864, 0x261F32]);
    }
}
function RIVTitular2017RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0x000000, [0xFFFFFF, 0xBD1F22, 0xFFFFFF]);
    }
}
function RIVTitular2017BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0x000000, [0xFFFFFF, 0xBD1F22, 0xFFFFFF]);
    }
}
function RIVAlternativa2017RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xe0dfdc, [0xF32424]);
    }
}
function RIVAlternativa2017BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xe0dfdc, [0xF32424]);
    }
}
function BocaFun(player) { // !BOC
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('boc/titular/red | boc/titular/blue | boc/alternativa/red |boc/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('boc/titular/red/2018 | boc/titular/blue/2018 | boc/alternativa/red/2018 |boc/alternativa/blue/2018', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('boc/titular/red/2017 | boc/titular/blue/2017 | boc/alternativa/red/2017 |boc/alternativa/blue/2017 | boc/tercera/red/2017 |boc/tercera/blue/2017', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('boc/titular/red/2016 | boc/titular/blue/2016 | boc/alternativa/red/2016 |boc/alternativa/blue/2016', player.id, 0x6BFFB5, "normal", 0);
	return false;
}
function BOCTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x192A51, 0xF8AD1D, 0x192A51]);
    }
}
function BOCTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x192A51, 0xF8AD1D, 0x192A51]);
    }
}
function BOCAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x6183F2, [0xFCB629, 0x0B1941, 0xFCB629]);
    }
}
function BOCAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x6183F2, [0xFCB629, 0x0B1941, 0xFCB629]);
    }
}
function BOCTitular2018RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xffff3f, [0x063C6F]);
    }
}
function BOCTitular2018BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xffff3f, [0x063C6F]);
    }
}
function BOCAlternativa2018RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x0F1E5A, [0xFFFFFF, 0xFFE735, 0xFFFFFF]);
    }
}
function BOCAlternativa2018BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x0F1E5A, [0xFFFFFF, 0xFFE735, 0xFFFFFF]);
    }
}
function BOCTitular2017RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x0D376F, 0xF6DD00, 0x0D376F]);
    }
}
function BOCTitular2017BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x0D376F, 0xF6DD00, 0x0D376F]);
    }
}
function BOCAlternativa2017RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x100704, [0xF9D807]);
    }
}
function BOCAlternativa2017BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x100704, [0xF9D807]);
    }
}
function BOCTercera2017RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x2D4C94, 0x1F2833, 0x2D4C94]);
    }
}
function BOCTercera2017BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x2D4C94, 0x1F2833, 0x2D4C94]);
    }
}
function BOCTitular2016RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x1D2349, 0xFBEC6C, 0x1D2349]);
    }
}
function BOCTitular2016BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x1D2349, 0xFBEC6C, 0x1D2349]);
    }
}
function BOCAlternativa2016RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xD1D1D1, [0xF7DF44, 0x232940, 0xFFFFFF]);
    }
}
function BOCAlternativa2016BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xD1D1D1, [0xF7DF44, 0x232940, 0xFFFFFF]);
    }
}
function SanLorenzoFun(player) { // !SLO
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('slo/titular/red | slo/titular/blue | slo/alternativa/red | slo/alternativa/blue ', player.id, 0x6BFFB5, "normal", 0);
	return false;
}
function SLOTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xE1082E, 0x172547, 0xE1082E]);
    }
}
function SLOTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xE1082E, 0x172547, 0xE1082E]);
    }
}
function SLOAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x24294d, [0xEDEEF3]);
    }
}
function SLOAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x24294d, [0xEDEEF3]);
    }
}
function RacingFun(player) { // !RAC
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('rac/titular/red | rac/titular/blue | rac/alternativa/red | rac/alternativa/blue | rac/tercera/red | rac/tercera/blue  | rac/alternativa2/red | rac/alternativa2/blue ', player.id, 0x6BFFB5, "normal", 0);
	return false;
}
function RACTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x151515, [0x01AFE1, 0xFFFFFF, 0x01AFE1]);
    }
}
function RACTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x151515, [0x01AFE1, 0xFFFFFF, 0x01AFE1]);
    }
}
function RACAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xeeeeed, [0x1D1E23, 0x11B8E5, 0x1D1E23]);
    }
}
function RACAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xeeeeed, [0x1D1E23, 0x11B8E5, 0x1D1E23]);
    }
}
function RACTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xF7F7F7, [0x59A1C6, 0x095D8C, 0x59A1C6]);
    }
}
function RACTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xF7F7F7, [0x59A1C6, 0x095D8C, 0x59A1C6]);
    }
}
function RACAlternativa2RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 140, 0xFFFFFF, [0xF5C4D7, 0x19304F, 0x19304F]);
    }
}
function RACAlternativa2BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 140, 0xFFFFFF, [0xF5C4D7, 0x19304F, 0x19304F]);
    }
}
function IndependienteFun(player) { // !IND
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ind/titular/red | ind/titular/blue | ind/alternativa/red | ind/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
	return false;
}
function CAITitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0xf3f4f6, [0xDF2628]);
    }
}
function CAITitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0xf3f4f6, [0xDF2628]);
    }
}
function CAIAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0xe12c23, [0xECEFF6]);
    }
}
function CAIAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0xe12c23, [0xECEFF6]);
    }
}
function AldosiviFun(player) { // !ALD
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ald/titular/red | ald/titular/blue | ald/alternativa/red | ald/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
	return false;
}
function ALDTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xF8F232, 0x0E9E59, 0xF8F232]);
    }
}
function ALDTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xF8F232, 0x0E9E59, 0xF8F232]);
    }
}
function ALDAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x000000, [0xFAF035, 0xA9ACB6, 0xA9ACB6]);
    }
}
function ALDAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x000000, [0xFAF035, 0xA9ACB6, 0xA9ACB6]);
    }
}
function GimnasiaFun(player) { // !GIM
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('gim/titular/red | gim/titular/blue | gim/alternativa/red |gim/alternativa/blue | gim/tercera/red |gim/tercera/blue | gim/alternativa/clasica/red |gim/alternativa/clasica/blue', player.id, 0x6BFFB5, "normal", 0);
}
function GIMTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x3D71F2, [0xFFFFFF, 0x1F2B53, 0xFFFFFF]);
    }
}
function GIMTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x3D71F2, [0xFFFFFF, 0x1F2B53, 0xFFFFFF]);
    }
}
function GIMAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x1A264F, 0x022C94]);
    }
}
function GIMAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x1A264F, 0x022C94]);
    }
}
function GIMTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x4B4D3F, 0x221F3A, 0x4B4D3F]);
    }
}
function GIMTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x4B4D3F, 0x221F3A, 0x4B4D3F]);
    }
}
function GIMAlternativaClasicaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x9E9EB8, [0x202743, 0xFFFFFF, 0x202743]);
    }
}
function GIMAlternativaClasicaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x9E9EB8, [0x202743, 0xFFFFFF, 0x202743]);
    }
}
function NewellsFun(player) { // !NOB
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('nob/titular/red | nob/titular/blue | nob/alternativa/red | nob/alternativa/blue | nob/tercera/red | nob/tercera/blue | nob/rosa/red | nob/rosa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function NOBTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0xFFFFFF, [0xD91626, 0x242424]);
    }
}
function NOBTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0xFFFFFF, [0xD91626, 0x242424]);
    }
}
function NOBAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xC2C2C2, [0xFFFFFF, 0xE31625, 0x1E1E1E]);
    }
}
function NOBAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xC2C2C2, [0xFFFFFF, 0xE31625, 0x1E1E1E]);
    }
}
function NOBTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x191919, 0xD41831, 0xD41831]);
    }
}
function NOBTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x191919, 0xD41831, 0xD41831]);
    }
}
function NOBRosaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0xFFFFFF, [0xF7C9E5, 0xFC83B8]);
    }
}
function NOBRosaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0xFFFFFF, [0xF7C9E5, 0xFC83B8]);
    }
}
function CentralFun(player) { // !CEN
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('cen/titular/red | cen/titular/blue | cen/alternativa/red | cen/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function CENTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xFFD61E, 0x182B5A, 0xFFD61E]);
    }
}
function CENTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xFFD61E, 0x182B5A, 0xFFD61E]);
    }
}
function CENAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x172b5c, [0xFFD61E]);
    }
}
function CENAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x172b5c, [0xFFD61E]);
    }
}
function DefensaFun(player) { // !DYJ
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('dyj/titular/red | dyj/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function DYJTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 45, 0x000000, [0xFFFF00, 0x0D8000, 0xFFFF00]);
    }
}
function DYJTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 45, 0x000000, [0xFFFF00, 0x0D8000, 0xFFFF00]);
    }
}
function AtleticoMadridFun(player) { // !ATM
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('atm/titular/red | atm/titular/blue | atm/alternativa/red | atm/alternativa/blue | atm/tercera/red | atm/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ATMTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xB5B9C9, [0xFFFAFB, 0xF41819, 0xFFFAFB]);
    }
}
function ATMTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xB5B9C9, [0xFFFAFB, 0xF41819, 0xFFFAFB]);
    }
}
function ATMAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xe61711, [0x201F24]);
    }
}
function ATMAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xe61711, [0x201F24]);
    }
}
function ATMTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 152, 0x0a243f, [0xAFD4EB, 0xA6CFE8]);
    }
}
function ATMTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 152, 0x0a243f, [0xAFD4EB, 0xA6CFE8]);
    }
}
function BarcelonaFun(player) { // !BAR
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('bar/titular/red | bar/titular/blue | bar/alternativa/red | bar/alternativa/blue |  | bar/tercera/red | bar/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function BARTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xffda26, [0xBC223B, 0x1D397A, 0xBC223B]);
    }
}
function BARTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xffda26, [0xBC223B, 0x1D397A, 0xBC223B]);
    }
}
function BARAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0x22285a, [0xFADA3C]);
    }
}
function BARAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0x22285a, [0xFADA3C]);
    }
}
function BARTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0x23285a, [0x4ED9CB, 0x36CCBC]);
    }
}
function BARTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0x23285a, [0x4ED9CB, 0x36CCBC]);
    }
}
function RealMadridFun(player) { // !RMA
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('rma/titular/red | rma/titular/blue | rma/alternativa/red | rma/alternativa/blue | rma/tercera/red | rma/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function RMATitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xc3af69, [0xFDFDFD]);
    }
}
function RMATitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xc3af69, [0xFDFDFD]);
    }
}
function RMAAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 243, 0xcebc77, [0x1C2E4D, 0x1C2E4D, 0x233B58]);
    }
}
function RMAAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 243, 0xcebc77, [0x1C2E4D, 0x1C2E4D, 0x233B58]);
    }
}
function RMATerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x002957, [0x6EE2C8]);
    }
}
function RMATerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x002957, [0x6EE2C8]);
    }
}
function InterMilanFun(player) { // !INT
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('int/titular/red | int/titular/blue | int/alternativa/red | int/alternativa/blue | int/tercera/red | int/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function INTTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x0082E1, 0x0C161E, 0x0082E1]);
    }
}
function INTTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x0082E1, 0x0C161E, 0x0082E1]);
    }
}
function INTAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x000000, [0x7DEDDF]);
    }
}
function INTAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x000000, [0x7DEDDF]);
    }
}
function INTTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xffce0a, [0x1B1B1C]);
    }
}
function INTTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xffce0a, [0x1B1B1C]);
    }
}
function MilanFun(player) { // !ACM
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('acm/titular/red | acm/titular/blue | acm/alternativa/red | acm/alternativa/blue | acm/tercera/red | acm/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function MILTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xf9f9f9, [0xE7002E, 0x242223, 0xE7002E]);
    }
}
function MILTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xf9f9f9, [0xE7002E, 0x242223, 0xE7002E]);
    }
}
function MILAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xa61726, [0xFAFAFA]);
    }
}
function MILAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xa61726, [0xFAFAFA]);
    }
}
function MILTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xf9f9f9, [0x2A2A2A]);
    }
}
function MILTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xf9f9f9, [0x2A2A2A]);
    }
}
function CruzeiroFun(player) { // !CRU
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('cru/titular/red | cru/titular/blue | cru/alternativa/red | cru/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function CRUTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0xfefefd, [0x2251C4]);
    }
}
function CRUTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0xfefefd, [0x2251C4]);
    }
}
function CRUAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0x2f3f99, [0xF6F6FA]);
    }
}
function CRUAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0x2f3f99, [0xF6F6FA]);
    }
}
function PalmeirasFun(player) { // !PAL
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('pal/titular/red | pal/titular/blue | pal/alternativa/red | pal/alternativa/blue | pal/tercera/red | pal/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function PALTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0xFFFFFF, [0x133D2F]);
    }
}
function PALTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0xFFFFFF, [0x133D2F]);
    }
}
function PALAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0x10372a, [0xF2F1F2]);
    }
}
function PALAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0x10372a, [0xF2F1F2]);
    }
}
function PALTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0xFFFFFF, [0x5ADAC5]);
    }
}
function PALTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0xFFFFFF, [0x5ADAC5]);
    }
}
function GremioFun(player) { // !GRE
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('gre/titular/red | gre/titular/blue | gre/alternativa/red | gre/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function GRETitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x0099DB, 0x20181E, 0x0099DB]);
    }
}
function GRETitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x19A2FF, 0x20181E, 0x19A2FF]);
    }
}
function GREAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x0088be, [0xFAFAFC]);
    }
}
function GREAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x0088be, [0xFAFAFC]);
    }
}
function TottenhamFun(player) { // !TOT
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('tot/titular/red| tot/titular/blue| tot/alternativa/red| tot/alternativa/blue | tot/tercera/red| tot/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('tot/titular/red/2018 | tot/titular/blue/2018 | tot/alternativa/red/2018 | tot/alternativa/blue/2018', player.id, 0x6BFFB5, "normal", 0);
}
function TOTTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x161d4f, [0xF0F0F1]);
    }
}
function TOTTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x161d4f, [0xF0F0F1]);
    }
}
function TOTAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xfffeff, [0x1B294B, 0x1B294B, 0x232956]);
    }
}
function TOTAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xfffeff, [0x1B294B, 0x1B294B, 0x232956]);
    }
}
function TOTTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x161d4f, [0x3AC0EB, 0x36B4E3]);
    }
}
function TOTTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x161d4f, [0x3AC0EB, 0x36B4E3]);
    }
}
function TOTTitular2018RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x293356, [0xFFFFFF, 0xFFFFFF, 0x293356]);
    }
}
function TOTTitular2018BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x293356, [0xFFFFFF, 0xFFFFFF, 0x293356]);
    }
}
function TOTAlternativa2018RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x20374C, 0x0EAF9B]);
    }
}
function TOTAlternativa2018BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x20374C, 0x0EAF9B]);
    }
}
function LiverpoolFun(player) { // !LIV
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('liv/titular/red | liv/titular/blue | liv/alternativa/red | liv/alternativa/blue | liv/tercera/red | liv/tercera/blue  | liv/titular/red/2018 | liv/titular/blue/2018 | liv/alternativa/red/2018 | liv/alternativa/blue/2018', player.id, 0x6BFFB5, "normal", 0);
}
function LIVTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xF7F7F7, [0xA80617, 0xB60D1F, 0xA80617]);
    }
}
function LIVTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xF7F7F7, [0xA80617, 0xB60D1F, 0xA80617]);
    }
}
function LIVAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xd91f29, [0xEBEBF0, 0xF7F7FC, 0xEBEBF0]);
    }
}
function LIVAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xd91f29, [0xEBEBF0, 0xF7F7FC, 0xEBEBF0]);
    }
}
function LIVTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x61c8b0, [0x1E1D22]);
    }
}
function LIVTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x61c8b0, [0x1E1D22]);
    }
}
function LIVTitular2018RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0xFFFFFF, [0xA5191A]);
    }
}
function LIVTitular2018BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0xFFFFFF, [0xA5191A]);
    }
}
function LIVAlternativa2018RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xec0109, [0xDDE1E4]);
    }
}
function LIVAlternativa2018BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xec0109, [0xDDE1E4]);
    }
}
function ArgentinaFun(player) { // !ARG
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('arg/titular/red | arg/titular/blue | arg/alternativa/red | arg/alternativa/blue | arg/titular/red/2018 | arg/titular/blue/2018 | arg/titular/red/2016 | arg/titular/blue/2016 | arg/alternativa/red/2016 | arg/alternativa/blue/2016 | arg/bandera/red | arg/bandera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ARGTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x142743, [0xC4EAF3, 0xFBF6F9, 0xC4EAF3]);
    }
}
function ARGTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x142743, [0xC4EAF3, 0xFBF6F9, 0xC4EAF3]);
    }
}
function ARGAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x2B2A2D]);
    }
}
function ARGAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x2B2A2D]);
    }
}
function ARGTitular2018RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x181219, [0xF3F5F6, 0xA8D0E4, 0xF3F5F6]);
    }
}
function ARGTitular2018BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x181219, [0xF3F5F6, 0xA8D0E4, 0xF3F5F6]);
    }
}
function ARGTitular2016RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x010101, [0xA5D2E8, 0xFFFFFF, 0xA5D2E8]);
    }
}
function ARGTitular2016BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x010101, [0xA5D2E8, 0xFFFFFF, 0xA5D2E8]);
    }
}
function ARGAlternativa2016RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xf7f7f7, [0x003E6F]);
    }
}
function ARGAlternativa2016BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xf7f7f7, [0x003E6F]);
    }
}
function ARGBanderaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xf6b40e, [0x74ACDF, 0xFFFFFF, 0x74ACDF]);
    }
}
function ARGBanderaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xf6b40e, [0x74ACDF, 0xFFFFFF, 0x74ACDF]);
    }
}
function BelgicaFun(player) { // !BÉL
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('belg/titular/red | belg/titular/blue | belg/alternativa/red | belg/alternativa/blue | belg/bandera/red | belg/bandera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function BelgicaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFE524 , [0xD51F1C]);
    }
}
function BelgicaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFE524 , [0xD51F1C]);
    }
}
function BelgicaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x000000 , [0xF9C700, 0xF4AC00]);
    }
}
function BelgicaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x000000 , [0xF9C700, 0xF4AC00]);
    }
}
function BelgicaBanderaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF , [0x000000, 0xFAE042, 0xED2939]);
    }
}
function BelgicaBanderaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF , [0x000000, 0xFAE042, 0xED2939]);
    }
}
function BrasilFun(player) { // !BRA
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('bra/titular/red | bra/titular/blue | bra/alternativa/red | bra/alternativa/blue | bra/tercera/red | bra/tercera/blue | bra/retro/red | bra/retro/blue', player.id, 0x6BFFB5, "normal", 0);
}
function BRATitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x019054, [0xF6DC3E]);
    }
}
function BRATitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x019054, [0xF6DC3E]);
    }
}
function BRAAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0xfdda01, [0x0853B7, 0x086ACC]);
    }
}
function BRAAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0xfdda01, [0x0853B7, 0x086ACC]);
    }
}
function BRATerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x0053b5, [0xF8F9FE]);
    }
}
function BRATerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x0053b5, [0xF8F9FE]);
    }
}
function BRARetroRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x20801e, [0xf0e237]);
    }
}
function BRARetroBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x20801e, [0xf0e237]);
    }
}
function ChileFun(player) { // !CHI
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('chi/titular/red | chi/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function CHITitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0xFFFFFF, [0xFF3829]);
    }
}
function CHITitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0xFFFFFF, [0xFF3829]);
    }
}
function UruguayFun(player) { // !URU
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('uru/titular/red | uru/titular/blue | uru/alternativa/red | uru/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function URUTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x000000, [0x8ABBE4]);
    }
}
function URUTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x000000, [0x8ABBE4]);
    }
}
function URUAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x000000, [0xFCFBFB]);
    }
}
function URUAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x000000, [0xFCFBFB]);
    }
}
function FranciaFun(player) { // !FRA
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('fra/titular/red | fra/titular/blue | fra/alternativa/red | fra/alternativa/blue | fra/bandera/red | fra/bandera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function FRATitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 240, 0xf9f9f9, [0x1F273A, 0x1F273A, 0x3C87D9]);
    }
}
function FRATitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 240, 0xf9f9f9, [0x1F273A, 0x1F273A, 0x3C87D9]);
    }
}
function FRAAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 240, 0x171f47, [0xF1F2F4]);
    }
}
function FRAAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 240, 0x171f47, [0xF1F2F4]);
    }
}
function FRABanderaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 1, 0x000000 , [0x002395, 0xFFFFFF, 0xED2939]);
    }
}
function FRABanderaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 1, 0x000000 , [0x002395, 0xFFFFFF, 0xED2939]);
    }
}
function CroaciaFun(player) { // !CRO
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('cro/titular/red | cro/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function CROTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0x2F4767, [0xDD083C, 0xFFFFFF, 0xFFFFFF]);
    }
}
function CROTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0x2F4767, [0xDD083C, 0xFFFFFF, 0xFFFFFF]);
    }
}
function NapoliFun(player) { // !NAP
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('nap/titular/red | nap/titular/blue | nap/alternativa/red | nap/alternativa/blue | nap/titular/red/ucl | nap/titular/blue/ucl', player.id, 0x6BFFB5, "normal", 0);
}
function NAPTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x031a45, [0x2485C8]);
    }
}
function NAPTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x031a45, [0x2485C8]);
    }
}
function NAPAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 299, 0xFFFFFF, [0x7E8641, 0x7E8641, 0x33392E]);
    }
}
function NAPAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 299, 0xFFFFFF, [0x7E8641, 0x7E8641, 0x33392E]);
    }
}
function NAPTitularUCLRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 299, 0xe0e0e0, [0x0C8FEA]);
    }
}
function NAPTitularUCLBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 299, 0xe0e0e0, [0x0C8FEA]);
    }
}
function BayernFun(player) { // !FCB
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('fcb/titular/red | fcb/titular/blue | fcb/alternativa/red | fcb/alternativa/blue | fcb/tercera/red | fcb/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function FCBTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xF3000E]);
    }
}
function FCBTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xF3000E]);
    }
}
function FCBAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x62676a, [0xF6F8FC]);
    }
}
function FCBAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x62676a, [0xF6F8FC]);
    }
}
function FCBTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xe76352, [0x132243]);
    }
}
function FCBTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xe76352, [0x132243]);
    }
}

function BorussiaFun(player) { // !BVB
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('bvb/titular/red | bvb/titular/blue | bvb/alternativa/red | bvb/alternativa/blue | bvb/titular/red/ucl | bvb/titular/blue/ucl', player.id, 0x6BFFB5, "normal", 0);
}
function BorussiaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x1f191a, [0xFFDB00]);
    }
}
function BorussiaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x1f191a, [0xFFDB00]);
    }
}
function BorussiaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xcecfd1, [0x252525]);
    }
}
function BorussiaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xcecfd1, [0x252525]);
    }
}
function BorussiaTitularChampionsRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x1f191a, [0x28222B, 0xFBCC30, 0xFBCC30]);
    }
}
function BorussiaTitularChampionsBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x1f191a, [0x28222B, 0xFBCC30, 0xFBCC30]);
    }
}
function JuventusFun(player) { // !JUV
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('juv/titular/red | juv/titular/blue | juv/alternativa/red | juv/alternativa/blue | juv/tercera/red | juv/tercera/blue | juv/cuarta/red | juv/cuarta/blue', player.id, 0x6BFFB5, "normal", 0);
}
function JuventusTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 360, 0x9D9FA6, [0xF4F5F6, 0x222424]);
    }
}
function JuventusTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 360, 0x9D9FA6, [0xF4F5F6, 0x222424]);
    }
}
function JuventusAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xd31218, [0xF9F4EE, 0xF6EDE5]);
    }
}
function JuventusAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xd31218, [0xF9F4EE, 0xF6EDE5]);
    }
}
function JuventusTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xfefefe, [0x1E9BE0, 0x0E7ECA]);
    }
}
function JuventusTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xfefefe, [0x1E9BE0, 0x0E7ECA]);
    }
}
function JuventusCuartaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xa4fb3d, [0xCFCFCF, 0x1F1F21, 0xCFCFCF]);
    }
}
function JuventusCuartaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xa4fb3d, [0xCFCFCF, 0x1F1F21, 0xCFCFCF]);
    }
}

function EstudiantesFun(player) { // !EST
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('est/titular/red | est/titular/blue | est/alternativa/red | est/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function EstudiantesTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x000000, [0xFA132C, 0xFFFFFF, 0xFA132C]);
    }
}
function EstudiantesTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x000000, [0xFA132C, 0xFFFFFF, 0xFA132C]);
    }
}
function EstudiantesAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 243, 0xFFFFFF, [0x1C1C1E, 0x1C1C1E, 0xC80F22]);
    }
}
function EstudiantesAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 243, 0xFFFFFF, [0x1C1C1E, 0x1C1C1E, 0xC80F22]);
    }
}
function BanfieldFun(player) { // !BAND
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('band/titular/red | band/titular/blue | band/alternativa/red | band/alternativa/blue | band/clasica/red | band/clasica/blue', player.id, 0x6BFFB5, "normal", 0);
}
function BanfieldTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 44, 0xb5ac44, [0xFFFFFF, 0x066748, 0xFFFFFF]);
    }
}
function BanfieldTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 44, 0xb5ac44, [0xFFFFFF, 0x066748, 0xFFFFFF]);
    }
}
function BanfieldAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 44, 0xFFFFFF, [0x1C1C1C, 0x09694A, 0x1C1C1C]);
    }
}
function BanfieldAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 44, 0xFFFFFF, [0x1C1C1C, 0x09694A, 0x1C1C1C]);
    }
}
function BanfieldClasicaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x0a0a0a, [0x02953F, 0xFEFFFF, 0x02953F]);
    }
}
function BanfieldClasicaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x0a0a0a, [0x02953F, 0xFEFFFF, 0x02953F]);
    }
}
function LanusFun(player) { // !LAN
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('lan/titular/red | lan/titular/blue | lan/alternativa/red | lan/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function LanusTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0xFFFFFF, [0x630B29, 0x731430, 0x731430]);
    }
}
function LanusTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0xFFFFFF, [0x630B29, 0x731430, 0x731430]);
    }
}
function LanusAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x2B0812, [0xFFFFFF, 0x761731, 0xFFFFFF]);
    }
}
function LanusAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x2B0812, [0xFFFFFF, 0x761731, 0xFFFFFF]);
    }
}
function ManUnitedFun(player) { // !MUN
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('mun/titular/red | mun/titular/blue | mun/alternativa/red | mun/alternativa/blue | mun/tercera/red | mun/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ManUnitedTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xfdfdfd, [0xF40022]);
    }
}
function ManUnitedTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xfdfdfd, [0xF40022]);
    }
}
function ManUnitedAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x191816, [0xE1D2BF]);
    }
}
function ManUnitedAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x231f20, [0xF5EAD4]);
    }
}
function ManUnitedTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x231f20, [0xF5EAD4]);
    }
}
function ManUnitedTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 233, 0xf24134, [0x2B2F35, 0x212125]);
    }
}
function ManCityFun(player) { // !MCI
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('mci/titular/red | mci/titular/blue | mci/alternativa/red | mci/alternativa/blue | mci/tercera/red | mci/tercera/blue | mci/titular/red/ucl | mci/titular/blue/ucl', player.id, 0x6BFFB5, "normal", 0);
}
function ManCityTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x92D5F5]);
    }
}
function ManCityTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x92D5F5]);
    }
}
function ManCityAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0xf8d711, [0x242424, 0x242424, 0xF58371]);
    }
}
function ManCityAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0xf8d711, [0x242424, 0x242424, 0xF58371]);
    }
}
function ManCityTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x000000, [0xF5FB9C, 0xFEDC99, 0xFE9B7C]);
    }
}
function ManCityTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x000000, [0xF5FB9C, 0xFEDC99, 0xFE9B7C]);
    }
}
function ManCityTitularChampionsRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x4f2a78, [0x93D4F5]);
    }
}
function ManCityTitularChampionsBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x4f2a78, [0x93D4F5]);
    }
}
function ArsenalFun(player) { // !ARS
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ars/titular/red | ars/titular/blue | ars/alternativa/red | ars/alternativa/blue | ars/tercera/red | ars/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ArsenalTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0x9BA3B0, [0xFFFFFF, 0xE11124, 0xFFFFFF]);
    }
}
function ArsenalTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0x9BA3B0, [0xFFFFFF, 0xE11124, 0xFFFFFF]);
    }
}
function ArsenalAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 55, 0x0e2436, [0xEEC313, 0xFCCA08, 0xD3AC13]);
    }
}
function ArsenalAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 55, 0x0e2436, [0xEEC313, 0xFCCA08, 0xD3AC13]);
    }
}
function ArsenalTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xfecc00, [0x27354F]);
    }
}
function ArsenalTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xfecc00, [0x27354F]);
    }
}
function ChelseaFun(player) { // !CHE
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('che/titular/red | che/titular/blue | che/alternativa/red | che/alternativa/blue | che/tercera/red | che/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ChelseaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, -45, 0xFFFFFF, [0x3F60E3, 0x3F60E3, 0x33499F]);
    }
}
function ChelseaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, -45, 0xFFFFFF, [0x3F60E3, 0x3F60E3, 0x33499F]);
    }
}
function ChelseaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 52, 0x003b7d, [0xF8F8F8]);
    }
}
function ChelseaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 52, 0x003b7d, [0xF8F8F8]);
    }
}
function ChelseaTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 56, 0xf9500f, [0x1A1A1A, 0x161616]);
    }
}
function ChelseaTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 56, 0xf9500f, [0x1A1A1A, 0x161616]);
    }
}
function ParanaenseFun(player) { // !PAR
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('par/titular/red | par/titular/blue | par/alternativa/red | par/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ParanaenseTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 48, 0xFFFFFF, [0xC6012C, 0xC6012C, 0x100E0F]);
    }
}
function ParanaenseTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 48, 0xFFFFFF, [0xC6012C, 0xC6012C, 0x100E0F]);
    }
}
function ParanaenseAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 48, 0x0e0e0e, [0xFFFFFF, 0xFFFFFF, 0xBABABA]);
    }
}
function ParanaenseAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 48, 0x0e0e0e, [0xFFFFFF, 0xFFFFFF, 0xBABABA]);
    }
}
function HuracanFun(player) { // !HUR
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('hur/titular/red | hur/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function HuracanTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 52, 0xf01d12, [0xFFFFFF]);
    }
}
function HuracanTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 52, 0xf01d12, [0xFFFFFF]);
    }
}
function TigreFun(player) { // !TIG
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('tig/titular/red | tig/titular/blue | tig/alternativa/red | tig/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function TigreTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x0746DF, 0xEF3239, 0x0746DF]);
    }
}
function TigreTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x0746DF, 0xEF3239, 0x0746DF]);
    }
}
function TigreAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x0E54DA, 0xFD043E, 0xFFFFFF]);
    }
}
function TigreAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x0E54DA, 0xFD043E, 0xFFFFFF]);
    }
}
function AlemaniaFun(player) { // !ALE
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ale/titular/red | ale/titular/blue | ale/bandera/red | ale/bandera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function AlemaniaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x24201d, [0xFFFFFF]);
    }
}
function AlemaniaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x24201d, [0xFFFFFF]);
    }
}
function AlemaniaBanderaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF , [0x000000, 0xDD0000, 0xFFCE00]);
    }
}
function AlemaniaBanderaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF , [0x000000, 0xDD0000, 0xFFCE00]);
    }
}
function EspanaFun(player) { // !ESP
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('esp/titular/red | esp/titular/blue | esp/alternativa/red | esp/alternativa/blue | esp/bandera/red | esp/bandera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function EspanaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xffdd0e, [0xF81C1E]);
    }
}
function EspanaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xffdd0e, [0xF81C1E]);
    }
}
function EspanaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xfd2721, [0xE5E6E7]);
    }
}
function EspanaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xfd2721, [0xE5E6E7]);
    }
}
function EspanaBanderaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xad1519 , [0xC60B1E, 0xFFC400, 0xC60B1E]);
    }
}
function EspanaBanderaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xad1519 , [0xC60B1E, 0xFFC400, 0xC60B1E]);
    }
}
function PortugalFun(player) { // !POR
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('por/titular/red | por/titular/blue | por/alternativa/red | por/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function PortugalTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xf4b568, [0xF31633]);
    }
}
function PortugalTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xf4b568, [0xF31633]);
    }
}
function PortugalAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xca262e, [0xF2F2F2]);
    }
}
function PortugalAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xca262e, [0xF2F2F2]);
    }
}
function ArgentinosJrsFun(player) { // !AAAJ
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('aaaj/titular/red | aaaj/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ArgentinosJrsTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 123, 0x075b99, [0xE62C2D, 0xFFFFFF, 0xE62C2D]);
    }
}
function ArgentinosJrsTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 123, 0x075b99, [0xE62C2D, 0xFFFFFF, 0xE62C2D]);
    }
}
function AllBoysFun(player) { // !ALB
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('alb/titular/red | alb/titular/blue | alb/alternativa/red | alb/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function AllBoysTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x282a27, [0xFFFFFF]);
    }
}
function AllBoysTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x282a27, [0xFFFFFF]);
    }
}
function AllBoysAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 50, 0xD6D6D6, [0xFFFFFF, 0x1E1A17, 0xFFFFFF]);
    }
}
function AllBoysAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 50, 0xD6D6D6, [0xFFFFFF, 0x1E1A17, 0xFFFFFF]);
    }
}
function AtlantaFun(player) { // !ATL
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('atl/titular/red | atl/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function AtlantaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xEFB756, 0x253D63, 0xEFB756]);
    }
}
function AtlantaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xEFB756, 0x253D63, 0xEFB756]);
    }
}
function BelgranoFun(player) { // !BEL
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('bel/titular/red | bel/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function BelgranoTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x01B6FB]);
    }
}
function BelgranoTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x01B6FB]);
    }
}
function ChacaritaFun(player) { // !CHA
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('cha/titular/red | cha/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ChacaritaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x050505, [0x171111, 0xFFFFFF, 0xFF352A]);
    }
}
function ChacaritaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x050505, [0x171111, 0xFFFFFF, 0xFF352A]);
    }
}
function TalleresFun(player) { // !TAL
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('tal/titular/red | tal/titular/blue | tal/alternativa/red | tal/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function TalleresTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x0E1E3B, [0x042EA6, 0xFFFFFF, 0x0042EA6]);
    }
}
function TalleresTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x0E1E3B, [0x042EA6, 0xFFFFFF, 0x0042EA6]);
    }
}
function TalleresAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x064DB4, 0x063477, 0x061F45]);
    }
}
function TalleresAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x064DB4, 0x063477, 0x061F45]);
    }
}
function PlatenseFun(player) { // !PLA
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('pla/titular/red | pla/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function PlatenseTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xBABABA, [0xFFFFFF, 0x382A29, 0xFFFFFF]);
    }
}
function PlatenseTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xBABABA, [0xFFFFFF, 0x382A29, 0xFFFFFF]);
    }
}
function OlimpoFun(player) { // !OLI
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('olp/titular/red | olp/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function OlimpoTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xFFDD00, 0x24201D, 0xFFDD00]);
    }
}
function OlimpoTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xFFDD00, 0x24201D, 0xFFDD00]);
    }
}
function SanMartinTucumanFun(player) { // !SMT
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('smt/titular/red | smt/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function SanMartinTucumanTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x131112, [0xC72824, 0xFFFFFF, 0xC72824]);
    }
}
function SanMartinTucumanTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x131112, [0xC72824, 0xFFFFFF, 0xC72824]);
    }
}
function AtlTucumanFun(player) { // !ATU
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('atu/titular/red | atu/titular/blue | atu/alternativa/red | atu/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function AtlTucumanTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x171717, [0xFFFFFF, 0x4CB3F0, 0xFFFFFF]);
    }
}
function AtlTucumanTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x171717, [0xFFFFFF, 0x4CB3F0, 0xFFFFFF]);
    }
}
function AtlTucumanAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xccd5e6, [0x151A37]);
    }
}
function AtlTucumanAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xccd5e6, [0x151A37]);
    }
}
function FerroFun(player) { // !FCO
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('fco/titular/red | fco/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function FerroTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x1F8961]);
    }
}
function FerroTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x1F8961]);
    }
}
function NacionalFun(player) { // !NAC
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('nac/titular/red | nac/titular/blue | nac/alternativa/red | nac/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function NacionalTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xf9020a, [0xFAF9FF]);
    }
}
function NacionalTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xf9020a, [0xFAF9FF]);
    }
}
function NacionalAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 50, 0xf9020a, [0x003361, 0xFFFFFF, 0x003361]);
    }
}
function NacionalAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 50, 0xf9020a, [0x003361, 0xFFFFFF, 0x003361]);
    }
}
function PenarolFun(player) { // !PEN
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('pen/titular/red | pen/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function PenarolTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xFFE828, 0x000000, 0xFFE828]);
    }
}
function PenarolTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xFFE828, 0x000000, 0xFFE828]);
    }
}
function QuilmesFun(player) { // !QUI
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('qui/titular/red | qui/titular/blue | qui/alternativa/red | qui/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function QuilmesTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0x423f8e, [0xFFFFFF]);
    }
}
function QuilmesTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0x423f8e, [0xFFFFFF]);
    }
}
function QuilmesAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 360, 0xFFFFFF, [0x397EF7, 0x17478F]);
    }
}
function QuilmesAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 360, 0xFFFFFF, [0x397EF7, 0x17478F]);
    }
}
function ChicagoFun(player) { // !CHI
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('nch/titular/red | nch/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ChicagoTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 360, 0xFFFFFF, [0x3AC991, 0x000000, 0x3AC991]);
    }
}
function ChicagoTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 360, 0xFFFFFF, [0x3AC991, 0x000000, 0x3AC991]);
    }
}
function MoronFun(player) { // !MOR
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('mor/titular/red | mor/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function MoronTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x242b35, [0xFFFFFF, 0xE21C1C, 0xFFFFFF]);
    }
}
function MoronTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x242b35, [0xFFFFFF, 0xE21C1C, 0xFFFFFF]);
    }
}
function UnionFun(player) { // !UNI
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('uni/titular/red | uni/titular/blue | uni/alternativa/red | uni/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function UnionTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x1155a1, [0xFFFFFF, 0xDD0005, 0xFFFFFF]);
    }
}
function UnionTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x1155a1, [0xFFFFFF, 0xDD0005, 0xFFFFFF]);
    }
}
function UnionAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 126, 0xFFFFFF, [0xF81726, 0x1461C7, 0x1461C7]);
    }
}
function UnionAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 126, 0xFFFFFF, [0xF81726, 0x1461C7, 0x1461C7]);
    }
}
function ColonFun(player) { // !CSF
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('csf/titular/red | csf/titular/blue | csf/alternativa/red | csf/alternativa/blue | csf/tercera/red | csf/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ColonTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xE61628, 0x18181E]);
    }
}
function ColonTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xE61628, 0x18181E]);
    }
}
function ColonAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 61, 0x000000, [0x7B0C1D, 0xFFFFFF, 0xFFFFFF]);
    }
}
function ColonAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 61, 0x000000, [0x7B0C1D, 0xFFFFFF, 0xFFFFFF]);
    }
}
function ColonTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0xFFFFFF, [0xB5B4B9, 0xBEBFC1, 0xBEBFC1]);
    }
}
function ColonTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0xFFFFFF, [0xB5B4B9, 0xBEBFC1, 0xBEBFC1]);
    }
}
function SarandiFun(player) { // !ARSE
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('arse/titular/red | arse/titular/blue | arse/alternativa/red | arse/alternativa/blue | arse/tercera/red | arse/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function SarandiTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0xFFFFFF, [0x70D1FF, 0xF12931, 0x70D1FF]);
    }
}
function SarandiTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0xFFFFFF, [0x70D1FF, 0xF12931, 0x70D1FF]);
    }
}
function SarandiAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0xFFFFFF, [0x1D1E1E, 0xF52626, 0x1D1E1E]);
    }
}
function SarandiAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0xFFFFFF, [0x1D1E1E, 0xF52626, 0x1D1E1E]);
    }
}
function SarandiTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xe61b37, [0xFFFFFF, 0xFFFFFF, 0x3BA1F6]);
    }
}
function SarandiTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xe61b37, [0xFFFFFF, 0xFFFFFF, 0x3BA1F6]);
    }
}
function DocksudFun(player) { // !DOC
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('doc/titular/red | doc/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function DocksudTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x254494, 0xF3C706, 0x254494]);
    }
}
function DocksudTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x254494, 0xF3C706, 0x254494]);
    }
}
function ColombiaFun(player) { // !COL
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('col/titular/red | col/titular/blue | col/alternativa/red | col/alternativa/blue | col/bandera/red | col/bandera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ColombiaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 240, 0xe93733, [0xF0E054, 0xF0E054, 0xF3E675]);
    }
}
function ColombiaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 240, 0xe93733, [0xF0E054, 0xF0E054, 0xF3E675]);
    }
}
function ColombiaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 38, 0xfc3537, [0x02379E]);
    }
}
function ColombiaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 38, 0xfc3537, [0x02379E]);
    }
}
function ColombiaBanderaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF , [0xFCD116, 0x003893, 0xCE1126]);
    }
}
function ColombiaBanderaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF , [0xFCD116, 0x003893, 0xCE1126]);
    }
}
function PeruFun(player) { // !PER
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('per/titular/red | per/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function PeruTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 39, 0x171a11, [0xFFFFFF, 0xFF353B, 0xFFFFFF]);
    }
}
function PeruTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 39, 0x171a11, [0xFFFFFF, 0xFF353B, 0xFFFFFF]);
    }
}
function WestBromFun(player) { // !WBA
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('wba/titular/red | wba/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function WestBromTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xde2b2e, [0xFFFFFF, 0x1B2A41, 0xFFFFFF]);
    }
}
function WestBromTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xde2b2e, [0xFFFFFF, 0x1B2A41, 0xFFFFFF]);
    }
}
function AstonVillaFun(player) { // !AVL
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('avl/titular/red | avl/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function AstonVillaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x7A252A, 0x9F313A, 0x7A252A]);
    }
}
function AstonVillaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x7A252A, 0x9F313A, 0x7A252A]);
    }
}
function FulhamFun(player) { // !FUL
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ful/titular/red | ful/titular/blue | ful/alternativa/red | ful/alternativa/blue | ful/clasica/red | ful/clasica/blue', player.id, 0x6BFFB5, "normal", 0);
}
function FulhamTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x1e202c, [0xF0EFF5]);
    }
}
function FulhamTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x1e202c, [0xF0EFF5]);
    }
}
function FulhamAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xC71B29, 0x372729, 0xC71B29]);
    }
}
function FulhamAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xC71B29, 0x372729, 0xC71B29]);
    }
}
function FulhamClasicaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xe41b15, [0x000000, 0xFFFFFF, 0x000000]);
    }
}
function FulhamClasicaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xe41b15, [0x000000, 0xFFFFFF, 0x000000]);
    }
}
function LeicesterFun(player) { // !LEI
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('lei/titular/red | lei/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function LeicesterTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 270, 0xFFFFFF, [0x364CFA, 0x3035FF]);
    }
}
function LeicesterTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 270, 0xFFFFFF, [0x364CFA, 0x3035FF]);
    }
}
function DanubioFun(player) { // !DAN
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('dan/titular/red | dan/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function DanubioTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 50, 0xdb0d24, [0xFFFFFF, 0x131514, 0xFFFFFF]);
    }
}
function DanubioTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 50, 0xdb0d24, [0xFFFFFF, 0x131514, 0xFFFFFF]);
    }
}
function RamplaJrsFun(player) { // !RAM
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ram/titular/red | ram/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function RamplaJrsTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xFF2E3B, 0x1D836D, 0xFF2E3B]);
    }
}
function RamplaJrsTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xFF2E3B, 0x1D836D, 0xFF2E3B]);
    }
}
function SacachispasFun(player) { // !SCH
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('sch/titular/red | sch/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function SacachispasTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x262d3f, [0xFFFFFF, 0x9477B7, 0xFFFFFF]);
    }
}
function SacachispasTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x262d3f, [0xFFFFFF, 0x9477B7, 0xFFFFFF]);
    }
}
function HolandaFun(player) { // !HOL
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('hol/titular/red | hol/titular/blue | hol/alternativa/red | hol/alternativa/blue | hol/retro/red | hol/retro/blue  hol/bandera/red | hol/bandera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function HolandaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 240, 0x200801, [0xF85404, 0xF85404, 0xF75E21]);
    }
}
function HolandaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 240, 0x200801, [0xF85404, 0xF85404, 0xF75E21]);
    }
}
function HolandaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x0d285f, [0x4ECDE4, 0x47BAD9, 0x3CA1C7]);
    }
}
function HolandaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x0d285f, [0x4ECDE4, 0x47BAD9, 0x3CA1C7]);
    }
}
function HolandaRetroRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x111419, [0xFC5F36, 0xFF7453, 0xF9A580]);
    }
}
function HolandaRetroBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x111419, [0xFC5F36, 0xFF7453, 0xF9A580]);
    }
}
function HolandaBanderaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x000000, [0xAE1C28, 0xFFFFFF, 0x21468B]);
    }
}
function HolandaBanderaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x000000, [0xAE1C28, 0xFFFFFF, 0x21468B]);
    }
}
function BoliviaFun(player) { // !BOL
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('bol/titular/red | bol/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function BoliviaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x26A057]);
    }
}
function BoliviaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x26A057]);
    }
}
function ItaliaFun(player) { // !ITA
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ita/titular/red | ita/titular/blue | ita/alternativa/red | ita/alternativa/blue | ita/retro/red | ita/retro/blue | ita/bandera/red | ita/bandera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ItaliaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xf9f9f9, [0x0269DC]);
    }
}
function ItaliaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xf9f9f9, [0x0269DC]);
    }
}
function ItaliaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x053da7, [0xF0F1F1]);
    }
}
function ItaliaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x053da7, [0xF0F1F1]);
    }
}
function ItaliaBanderaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 1, 0x000000 , [0x009246, 0xFFFFFF, 0xCE2B37]);
    }
}
function ItaliaBanderaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 1, 0x000000 , [0x009246, 0xFFFFFF, 0xCE2B37]);
    }
}
function ItaliaRetroRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xdbbc52, [0x1d3b6d, 0x2163b7, 0x1d3b6d]);
    }
}
function ItaliaRetroBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xdbbc52, [0x1d3b6d, 0x2163b7, 0x1d3b6d]);
    }
}
function InglaterraFun(player) { // !ING
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ing/titular/red | ing/titular/blue | ing/alternativa/red | ing/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function InglaterraTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xdc1413, [0xF3F4F9]);
    }
}
function InglaterraTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xdc1413, [0xF3F4F9]);
    }
}
function InglaterraAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xfbf9f9, [0xDB141F]);
    }
}
function InglaterraAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xfbf9f9, [0xDB141F]);
    }
}
function ParaguayFun(player) { // !PGY
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('pgy/titular/red | pgy/titular/blue | pgy/alternativa/red | pgy/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ParaguayTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x15327d, [0xFBFBFB, 0xF52A38, 0xFBFBFB]);
    }
}
function ParaguayTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x15327d, [0xFBFBFB, 0xF52A38, 0xFBFBFB]);
    }
}
function ParaguayAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x1637D4, 0x0018A0]);
    }
}
function ParaguayAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x1637D4, 0x0018A0]);
    }
}
function VenezuelaFun(player) { // !VEN
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ven/titular/red | ven/titular/blue | ven/alternativa/red | ven/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function VenezuelaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x810B2B]);
    }
}
function VenezuelaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x810B2B]);
    }
}
function VenezuelaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xa30023, [0xFAFAFA]);
    }
}
function VenezuelaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xa30023, [0xFAFAFA]);
    }
}
function QatarFun(player) { // !QAT
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('qat/titular/red | qat/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function QatarTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xBD1C2E]);
    }
}
function QatarTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xBD1C2E]);
    }
}
function AjaxFun(player) { // !AJA
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('aja/titular/red | aja/titular/blue | aja/alternativa/red | aja/alternativa/blue | aja/alternativa/red/2018 | aja/alternativa/blue/2018', player.id, 0x6BFFB5, "normal", 0);
}
function AjaxTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xB8BCC2, [0xFCFAFC, 0xE11025, 0xFCFAFC]);
    }
}
function AjaxTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xB8BCC2, [0xFCFAFC, 0xE11025, 0xFCFAFC]);
    }
}
function AjaxAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xee7024, [0x255459, 0x05707C, 0x255459]);
    }
}
function AjaxAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xee7024, [0x255459, 0x05707C, 0x255459]);
    }
}
function AjaxAlternativa2018RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xc5c390, [0xDFDCC9, 0x1C2427, 0x1C2427]);
    }
}
function AjaxAlternativa2018BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xc5c390, [0xDFDCC9, 0x1C2427, 0x1C2427]);
    }
}
function PSVFun(player) { // !PSV
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('psv/titular/red | psv/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function PSVTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x030303, [0xFFFFFF, 0xFA2747, 0xFFFFFF]);
    }
}
function PSVTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x030303, [0xFFFFFF, 0xFA2747, 0xFFFFFF]);
    }
}
function FeyenoordFun(player) { // !FEY
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('fey/titular/red | fey/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function FEYTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x000000, [0xFFFFFF, 0xFA203B]);
    }
}
function FEYTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x000000, [0xFFFFFF, 0xFA203B]);
    }
}
function ParisFun(player) { // !PSG
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('psg/titular/red | psg/titular/blue | psg/alternativa/red | psg/alternativa/blue | psg/tercera/red | psg/tercera/blue | psg/entrenamiento/red | psg/entrenamiento/blue', player.id, 0x6BFFB5, "normal", 0);
}
function PSGTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xf3f3f3, [0x293359, 0xE71B38, 0x293359]);
    }
}
function PSGTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xf3f3f3, [0x293359, 0xE71B38, 0x293359]);
    }
}
function PSGAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x0e0e0e, [0xFB503D]);
    }
}
function PSGAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x0e0e0e, [0xFB503D]);
    }
}
function PSGTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x191e3f, [0xD40709, 0xEAF4F6, 0xEAF4F6]);
    }
}
function PSGTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x191e3f, [0xD40709, 0xEAF4F6, 0xEAF4F6]);
    }
}
function PSGEntrenamientoRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 57, 0xFFFFFF, [0xFF4F47, 0x2A232A, 0x55555F]);
    }
}
function PSGEntrenamientoBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 57, 0xFFFFFF, [0xFF4F47, 0x2A232A, 0x55555F]);
    }
}
function RiestraFun(player) { // !RIE
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('rie/titular/red | rie/titular/blue | rie/alternativa/red | rie/alternativa/blue  ', player.id, 0x6BFFB5, "normal", 0);
}
function RiestraTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 40, 0xFFFFFF, [0x1D1C21]);
    }
}
function RiestraTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 40, 0xFFFFFF, [0x1D1C21]);
    }
}
function RiestraAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 40, 0x19161b, [0xFDFDFD]);
    }
}
function RiestraAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 40, 0x19161b, [0xFDFDFD]);
    }
}
function CentralCordobaSdEFun(player) { // !CCS
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ccs/titular/red | ccs/titular/blue | ccs/alternativa/red | ccs/alternativa/blue | ccs/tercera/red | ccs/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function CentralCordobaSdETitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xd10d1d, [0x1D1D1D, 0xFFFFFF, 0x1D1D1D]);
    }
}
function CentralCordobaSdETitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xd10d1d, [0x1D1D1D, 0xFFFFFF, 0x1D1D1D]);
    }
}
function CentralCordobaSdEAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x9C181C, 0x9C181C, 0xC02122]);
    }
}
function CentralCordobaSdEAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x9C181C, 0x9C181C, 0xC02122]);
    }
}
function CentralCordobaSdETerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 50, 0xca0009, [0xE7E7E7, 0xFBFBFB]);
    }
}
function CentralCordobaSdETerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 50, 0xca0009, [0xE7E7E7, 0xFBFBFB]);
    }
}
function OGCNiceFun(player) { // !OGC
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ogc/titular/red | ogc/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function OGCNiceTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xFD2725, 0x0C0D11, 0xFD2725]);
    }
}
function OGCNiceTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xFD2725, 0x0C0D11, 0xFD2725]);
    }
}
function OlympiqueMarsellaFun(player) { // !OM
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('om/titular/red | om/titular/blue | om/alternativa/red | om/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function OlympiqueMarsellaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x0a93d6, [0xFAFAFA]);
    }
}
function OlympiqueMarsellaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x0a93d6, [0xFAFAFA]);
    }
}
function OlympiqueMarsellaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 61, 0xFFFFFF, [0x24ADEA, 0x1473E5]);
    }
}
function OlympiqueMarsellaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 61, 0xFFFFFF, [0x24ADEA, 0x1473E5]);
    }
}
function ASRomaFun(player) { // !ROM
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('rom/titular/red | rom/titular/blue | rom/alternativa/red | rom/alternativa/blue | rom/tercera/red | rom/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ASRomaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xffc500, [0xA8001A]);
    }
}
function ASRomaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xffc500, [0xA8001A]);
    }
}
function ASRomaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x6e0f19, [0xF6F7FA]);
    }
}
function ASRomaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x6e0f19, [0xF6F7FA]);
    }
}
function ASRomaTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xf9b105, [0x172952, 0x1C2446]);
    }
}
function ASRomaTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xf9b105, [0x172952, 0x1C2446]);
    }
}
function FiorentinaFun(player) { // !FIO
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('fio/titular/red | fio/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function FiorentinaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x4C2A77]);
    }
}
function FiorentinaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x4C2A77]);
    }
}
function LazioFun(player) { // !LAZ
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('laz/titular/red | laz/titular/blue | laz/alternativa/red | laz/alternativa/blue | laz/tercera/red | laz/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function LazioTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x194174, [0xFFFFFF, 0x9EDFFF]);
    }
}
function LazioTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x194174, [0xFFFFFF, 0x9EDFFF]);
    }
}
function LazioAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x1e2e50, [0xFFFFFF, 0x86BBEF, 0xFFFFFF]);
    }
}
function LazioAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x1e2e50, [0xFFFFFF, 0x86BBEF, 0xFFFFFF]);
    }
}
function LazioTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xc3e9fe, [0x0F1217]);
    }
}
function LazioTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xc3e9fe, [0x0F1217]);
    }
}
function SMSanJuanFun(player) { // !SMSJ
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('smsj/titular/red | smsj/titular/blue | smsj/alternativa/red | smsj/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function SMSanJuanTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x131311, 0x4EA280, 0x131311]);
    }
}
function SMSanJuanTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x131311, 0x4EA280, 0x131311]);
    }
}
function SMSanJuanAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x030303, [0xFFFFFF, 0x48C079, 0xFFFFFF]);
    }
}
function SMSanJuanAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x030303, [0xFFFFFF, 0x48C079, 0xFFFFFF]);
    }
}
function GodoyCruzFun(player) { // !GOD
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('god/titular/red | god/titular/blue | god/alternativa/red | god/alternativa/blue | god/tercera/red | god/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function GodoyCruzTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x8A8B91, [0x1A469D, 0xFFFFFF, 0x1A469D]);
    }
}
function GodoyCruzTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x8A8B91, [0x1A469D, 0xFFFFFF, 0x1A469D]);
    }
}
function GodoyCruzAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 237, 0x16439c, [0xDCDFDC, 0xEDEDEC]);
    }
}
function GodoyCruzAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 237, 0x16439c, [0xDCDFDC, 0xEDEDEC]);
    }
}
function GodoyCruzTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x881325, 0x5F0D1A, 0x881325]);
    }
}
function GodoyCruzTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x881325, 0x5F0D1A, 0x881325]);
    }
}
function VelezFun(player) { // !VEL
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('vel/titular/red | vel/titular/blue', player.id, 0x6BFFB5, "normal", 0);

}
function VelezTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x273dce, [0xFFFFFF]);
    room.sendAnnouncement('𝘗𝘢𝘳𝘢 𝘦𝘮𝘶𝘭𝘢𝘳 𝘭𝘢 𝘤𝘢𝘮𝘪𝘴𝘦𝘵𝘢 𝘥𝘦 𝘝𝘦́𝘭𝘦𝘻 𝘱𝘶𝘦𝘥𝘦𝘴 𝘶𝘴𝘢𝘳 𝘥𝘦 𝘢𝘷𝘢𝘵𝘢𝘳 "/avatar ᐯ"', player.id, 0x6BFFB5, "normal", 0); 
    }
}
function VelezTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x273dce, [0xFFFFFF]);
    room.sendAnnouncement('𝘗𝘢𝘳𝘢 𝘦𝘮𝘶𝘭𝘢𝘳 𝘭𝘢 𝘤𝘢𝘮𝘪𝘴𝘦𝘵𝘢 𝘥𝘦 𝘝𝘦́𝘭𝘦𝘻 𝘱𝘶𝘦𝘥𝘦𝘴 𝘶𝘴𝘢𝘳 𝘥𝘦 𝘢𝘷𝘢𝘵𝘢𝘳 "/avatar ᐯ"', player.id, 0x6BFFB5, "normal", 0); 
    }
}
function FlamengoFun(player) { // !FLA
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('fla/titular/red | fla/titular/blue | fla/alternativa/red | fla/alternativa/blue | fla/tercera/red | fla/tercera/blue | fla/titular/red/2018 | fla/titular/blue/2018 | fla/alternativa/red/2018 | fla/alternativa/blue/2018 | fla/tercera/red/2018 | fla/tercera/blue/2018', player.id, 0x6BFFB5, "normal", 0);
}
function FlamengoTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xf5f5f5, [0x872C32, 0x1B1F1F, 0x872C32]);
    }
}
function FlamengoTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xf5f5f5, [0x872C32, 0x1B1F1F, 0x872C32]);
    }
}
function FlamengoAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xde111e, [0xEEEFF1, 0x1B1F1F, 0x872C32]);
    }
}
function FlamengoAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xde111e, [0xEEEFF1, 0x1B1F1F, 0x872C32]);
    }
}
function FlamengoTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xc1e23f, [0x36363C]);
    }
}
function FlamengoTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xc1e23f, [0x36363C]);
    }
}
function FlamengoTitular2018RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xf5f5f5, [0xF70610, 0x131517, 0xF70610]);
    }
}
function FlamengoTitular2018BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xf5f5f5, [0xF70610, 0x131517, 0xF70610]);
    }
}
function FlamengoAlternativa2018RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 67, 0x1a1a1a, [0xD82C23, 0xE4E8DF, 0xE4E8DF]);
    }
}
function FlamengoAlternativa2018BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 67, 0x1a1a1a, [0xD82C23, 0xE4E8DF, 0xE4E8DF]);
    }
}
function FlamengoTercera2018RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xf5f5f5, [0x71A5D4, 0x4477A7, 0x71A5D4]);
    }
}
function FlamengoTercera2018BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xf5f5f5, [0x71A5D4, 0x4477A7, 0x71A5D4]);
    }
}
function SCInternacionalFun(player) { // !SCI
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('sci/titular/red | sci/titular/blue | sci/alternativa/red | sci/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function SCInternacionalTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0xD40D12]);
    }
}
function SCInternacionalTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0xD40D12]);
    }
}
function SCInternacionalAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 64, 0x66020A, [0xF9F9FA, 0xC71B20, 0xF9F9FA]);
    }
}
function SCInternacionalAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 64, 0x66020A, [0xF9F9FA, 0xC71B20, 0xF9F9FA]);
    }
}
function SantosFun(player) { // !SAN
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('san/titular/red | san/titular/blue | san/alternativa/red | san/alternativa/blue | san/tercera/red | san/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function SantosTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x000000, [0xE8E8E8]);
    }
}
function SantosTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x000000, [0xE8E8E8]);
    }
}
function SantosAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xb0b0b0, [0x1F2026, 0xFFFFFF, 0x1F2026]);
    }
}
function SantosAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xb0b0b0, [0x1F2026, 0xFFFFFF, 0x1F2026]);
    }
}
function SantosTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 225, 0xa7adb1, [0x282A35, 0x282A35, 0x393C45]);
    }
}
function SantosTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 225, 0xa7adb1, [0x282A35, 0x282A35, 0x393C45]);
    }
}
function SaoPauloFun(player) { // !SAO
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('sao/titular/red | sao/titular/blue | sao/alternativa/red | sao/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function SaoPauloTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xB51212, [0xFF2537, 0xF7F7F7, 0x191820]);
    }
}
function SaoPauloTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xB51212, [0xFF2537, 0xF7F7F7, 0x191820]);
    }
}
function SaoPauloAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 360, 0x9F9AA6, [0xFF0928, 0xF7F7F7, 0x241F20]);
    }
}
function SaoPauloAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 360, 0x9F9AA6, [0xFF0928, 0xF7F7F7, 0x241F20]);
    }
}
function CorinthiansFun(player) { // !COR
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('cor/titular/red | cor/titular/blue | cor/alternativa/red | cor/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function CorinthiansTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x000000, [0xF4F4F6]);
    }
}
function CorinthiansTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x000000, [0xF4F4F6]);
    }
}
function CorinthiansAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 360, 0xFFFFFF, [0x1F1E20]);
    }
}
function CorinthiansAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 360, 0xFFFFFF, [0x1F1E20]);
    }
}
function VascoDaGamaFun(player) { // !VAS
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('vas/titular/red | vas/titular/blue | vas/alternativa/red | vas/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function VascoDaGamaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 29, 0xd42a2a, [0x19181B, 0xE6E6E4, 0x19181B]);
    }
}
function VascoDaGamaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 29, 0xd42a2a, [0x19181B, 0xE6E6E4, 0x19181B]);
    }
}
function VascoDaGamaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 29, 0xd42a2a, [0xFEFEFE, 0x1C1C1C, 0xFEFEFE]);
    }
}
function VascoDaGamaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 29, 0xd42a2a, [0xFEFEFE, 0x1C1C1C, 0xFEFEFE]);
    }
}
function BotafogoFun(player) { // !BOT
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('bot/titular/red | bot/titular/blue | bot/alternativa/red | bot/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function BotafogoTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x777B87, [0x1C1F26, 0xFFFFFF, 0x1C1F26]);
    }
}
function BotafogoTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x777B87, [0x1C1F26, 0xFFFFFF, 0x1C1F26]);
    }
}
function BotafogoAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x161719]);
    }
}
function BotafogoAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x161719]);
    }
}
function FluminenseFun(player) { // !FLU
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('flu/titular/red | flu/titular/blue | flu/alternativa/red | flu/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function FluminenseTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 360, 0xF9F9F9, [0x326851, 0xA0002B, 0x326851]);
    }
}
function FluminenseTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 360, 0xF9F9F9, [0x326851, 0xA0002B, 0x326851]);
    }
}
function MineiroFun(player) { // !CAM
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('cam/titular/red | cam/titular/blue | cam/alternativa/red | cam/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function MineiroTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x75798F, [0xFFFFFF, 0x231F20, 0xFFFFFF]);
    }
}
function MineiroTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x75798F, [0xFFFFFF, 0x231F20, 0xFFFFFF]);
    }
}
function MineiroAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x1D1E24, [0xFFFFFF]);
    }
}
function MineiroAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x1D1E24, [0xFFFFFF]);
    }
}
function AtlNacionalFun(player) { // !ATN
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('atn/titular/red | atn/titular/blue | atn/alternativa/red | atn/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function AtlNacionalTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xB2C9BB, [0x178B36, 0xFCFCFC, 0x178B36]);
    }
}
function AtlNacionalTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xB2C9BB, [0x178B36, 0xFCFCFC, 0x178B36]);
    }
}
function AtlNacionalAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, -136, 0x008a26, [0xF6F6F8, 0xE6E8EA]);
    }
}
function AtlNacionalAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, -136, 0x008a26, [0xF6F6F8, 0xE6E8EA]);
    }
}
    function MillonariosFun(player) { // !MIL
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('mil/titular/red | mil/titular/blue | mil/alternativa/red | mil/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function MillonariosTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x0846AD]);
    }
}
function MillonariosTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x0846AD]);
    }
}
function MillonariosAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x093794, [0xF7F7F7]);
    }
}
function MillonariosAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x093794, [0xF7F7F7]);
    }
}
function AmericaDeCaliFun(player) { // !AME
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ame/titular/red | ame/titular/blue | ame/alternativa/red | ame/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function AmericaDeCaliTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0xFFFFFF, [0xE81B1D]);
    }
}
function AmericaDeCaliTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0xFFFFFF, [0xE81B1D]);
    }
}
function AmericaDeCaliAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0xc91212, [0xF8F8F8]);
    }
}
function AmericaDeCaliAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0xc91212, [0xF8F8F8]);
    }
}
    function SantaFeFun(player) { // !SFE
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('sfe/titular/red | sfe/titular/blue | sfe/alternativa/red | sfe/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function SantaFeTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xE0E0E0, [0xF6F6F8, 0xEB0505, 0xEB0505]);
    }
}
function SantaFeTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xE0E0E0, [0xF6F6F8, 0xEB0505, 0xEB0505]);
    }
}
function SantaFeAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xEB0505, [0xEB0505, 0xFFFFFF, 0xFFFFFF]);
    }
}
function SantaFeAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xEB0505, [0xEB0505, 0xFFFFFF, 0xFFFFFF]);
    }
}
    function DeportivoCaliFun(player) { // !CAL
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('cal/titular/red | cal/titular/blue | cal/alternativa/red | cal/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function DeportivoCaliTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0xBCC4D6, [0xFFFFFF, 0x1D5A48, 0x1D5A48]);
    }
}
function DeportivoCaliTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0xBCC4D6, [0xFFFFFF, 0x1D5A48, 0x1D5A48]);
    }
}
function DeportivoCaliAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 40, 0x2D6E3A, [0xFFFFFF]);
    }
}
function DeportivoCaliAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 40, 0x2D6E3A, [0xFFFFFF]);
    }
}
    function OnceCaldasFun(player) { // !ONC
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('onc/titular/red | onc/titular/blue | onc/alternativa/red | onc/alternativa/blue | onc/tercera/red | onc/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function OnceCaldasTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x171717, [0xFFFFFF]);
    }
}
function OnceCaldasTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x171717, [0xFFFFFF]);
    }
}
function OnceCaldasAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 40, 0xFFFFFF, [0x171717]);
    }
}
function OnceCaldasAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 40, 0xFFFFFF, [0x171717]);
    }
}
function OnceCaldasTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 40, 0xFFFFFF, [0x1C69BB]);
    }
}
function OnceCaldasTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 40, 0xFFFFFF, [0x1C69BB]);
    }
}
function CerroFun(player) { // !CCP
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ccp/titular/red | ccp/titular/blue | ccp/alternativa/red | ccp/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function CerroTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xCD2B38, 0x1F2F7C, 0xCD2B38]);
    }
}
function CerroTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xCD2B38, 0x1F2F7C, 0xCD2B38]);
    }
}
function CerroAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0x1a3e7a, [0xFFFFFF]);
    }
}
function CerroAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0x1a3e7a, [0xFFFFFF]);
    }
}
function OlimpiaFun(player) { // !OLI
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('oli/titular/red | oli/titular/blue | oli/alternativa/red | oli/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function OlimpiaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x9290A3, [0xFFFFFF, 0x181818, 0xFFFFFF]);
    }
}
function OlimpiaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x9290A3, [0xFFFFFF, 0x181818, 0xFFFFFF]);
    }
}
function OlimpiaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 40, 0xFFFFFF, [0x48424C]);
    }
}
function OlimpiaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 40, 0xFFFFFF, [0x48424C]);
    }
}
function GuaraniFun(player) { // !GUA
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('gua/titular/red | gua/titular/blue | gua/alternativa/red | gua/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function GuaraniTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xFDD537, 0x1C1B16, 0xFDD537]);
    }
}
function GuaraniTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xFDD537, 0x1C1B16, 0xFDD537]);
    }
}
function GuaraniAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x504B48, 0x201F1B, 0x504B48]);
    }
}
function GuaraniAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x504B48, 0x201F1B, 0x504B48]);
    }
}
function LibertadFun(player) { // !LIB
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('lib/titular/red | lib/titular/blue | lib/alternativa/red | lib/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function LibertadTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x5D636E, [0xFFFFFF, 0x16161E, 0xFFFFFF]);
    }
}
function LibertadTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x5D636E, [0xFFFFFF, 0x16161E, 0xFFFFFF]);
    }
}
function LibertadAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 40, 0xFFFFFF, [0x171B1E]);
    }
}
function LibertadAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 40, 0xFFFFFF, [0x171B1E]);
    }
}
function SouthamptonFun(player) { // !SOU
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('sou/titular/red | sou/titular/blue | sou/alternativa/red | sou/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function SouthamptonTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x191B1F, [0xFF0028, 0xFFFFFF, 0xFF0028]);
    }
}
function SouthamptonTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x191B1F, [0xFF0028, 0xFFFFFF, 0xFF0028]);
    }
}
function SouthamptonAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xe2fb40, [0xFDFE4B, 0x283639, 0x283639]);
    }
}
function SouthamptonAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xe2fb40, [0xFDFE4B, 0x283639, 0x283639]);
    }
}
function WatfordFun(player) { // !WAT
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('wat/titular/red | wat/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function WatfordTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xf53117, [0xFADF09, 0x161616]);
    }
}
function WatfordTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xf53117, [0xFADF09, 0x161616]);
    }
}
function WillemIIFun(player) { // !WIL
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('wil/titular/red | wil/titular/blue | wil/alternativa/red | wil/alternativa/blue | wil/tercera/red | wil/tercera/blue  ', player.id, 0x6BFFB5, "normal", 0);
}
function WillemIITitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x0A0A0A, [0x223263, 0xFFFFFF, 0xF7014C]);
    }
}
function WillemIITitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x0A0A0A, [0x223263, 0xFFFFFF, 0xF7014C]);
    }
}
function WillemIIAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xA42F62, 0x6B436F, 0xA42F62]);
    }
}
function WillemIIAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xA42F62, 0x6B436F, 0xA42F62]);
    }
}
function WillemIITerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xc09926, [0xC72C27, 0xFFFFFF, 0x0A2245]);
    }
}
function WillemIITerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xc09926, [0xC72C27, 0xFFFFFF, 0x0A2245]);
    }
}
function AlvaradoFun(player) { // !ALV
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('alv/titular/red | alv/titular/blue | alv/alternativa/red | alv/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function AlvaradoTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 44, 0x091021, [0x1E2F55, 0xFFFFFF, 0x1E2F55]);
    }
}
function AlvaradoTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 44, 0x091021, [0x1E2F55, 0xFFFFFF, 0x1E2F55]);
    }
}
function AlvaradoAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0x091021, [0xFFFFFF, 0x022C77, 0xFFFFFF]);
    }
}
function AlvaradoAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0x091021, [0xFFFFFF, 0x022C77, 0xFFFFFF]);
    }
}
function AgropecuarioFun(player) { // !AGR
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('agr/titular/red | agr/titular/blue | agr/alternativa/red | agr/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function AgropecuarioTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFCFCFC, [0x168C4B, 0xBA2C24, 0x168C4B]);
    }
}
function AgropecuarioTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFCFCFC, [0x168C4B, 0xBA2C24, 0x168C4B]);
    }
}
function AgropecuarioAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x151515, [0x1C5F3A, 0xFFFFFF, 0xBA2C24]);
    }
}
function AgropecuarioAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x151515, [0x1C5F3A, 0xFFFFFF, 0xBA2C24]);
    }
}
function RiverURUFun(player) { // !RIU
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('riu/titular/red | riu/titular/blue | riu/alternativa/red | riu/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function RiverURUTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 360, 0x000000, [0xFFFFFF, 0xD20502, 0xFFFFFF]);
    }
}
function RiverURUTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 360, 0x000000, [0xFFFFFF, 0xD20502, 0xFFFFFF]);
    }
}
function RiverURUAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xFE0002]);
    }
}
function RiverURUAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xFE0002]);
    }
}
function GalatasarayFun(player) { // !GS
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('gs/titular/red | gs/titular/blue | gs/alternativa/red | gs/alternativa/blue | gs/tercera/red | gs/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function GalatasarayTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0xFFFFFF, [0xFFB840, 0xBE2736]);
    }
}
function GalatasarayTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0xFFFFFF, [0xFFB840, 0xBE2736]);
    }
}
function GalatasarayAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x8d1d1d, [0xE3CFB3]);
    }
}
function GalatasarayAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x8d1d1d, [0xE3CFB3]);
    }
}
function GalatasarayTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xab1d28, [0xC9C5C9]);
    }
}
function GalatasarayTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xab1d28, [0xC9C5C9]);
    }
}
function FenerbahceFun(player) { // !FB
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('fb/titular/red | fb/titular/blue | fb/alternativa/red | fb/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function FenerbahceTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xF7F41B, 0x212854, 0xF7F41B]);
    }
}
function FenerbahceTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xF7F41B, 0x212854, 0xF7F41B]);
    }
}
function FenerbahceAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x2f3a67, [0xF4E800]);
    }
}
function FenerbahceAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x2f3a67, [0xF4E800]);
    }
}
function BesiktasFun(player) { // !BJK
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('bjk/titular/red | bjk/titular/blue | bjk/alternativa/red | bjk/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function BesiktasTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x000000, [0xFFFFFF]);
    }
}
function BesiktasTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x000000, [0xFFFFFF]);
    }
}
function BesiktasAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x000000, [0xFB3333]);
    }
}
function BesiktasAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x000000, [0xFB3333]);
    }
}
function AmericaMXFun(player) { // !AMC
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('amc/titular/red | amc/titular/blue | amc/alternativa/red | amc/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function AmericaMXTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x153647, [0xF2EB9A]);
    }
}
function AmericaMXTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x153647, [0xF2EB9A]);
    }
}
function AmericaMXAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xF2F2F2, [0x1A2C38]);
    }
}
function AmericaMXAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xF2F2F2, [0x1A2C38]);
    }
}
function CruzAzulFun(player) { // !CRUZ
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('cruz/titular/red | cruz/titular/blue | cruz/alternativa/red | cruz/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function CruzAzulTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x263D9A]);
    }
}
function CruzAzulTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x263D9A]);
    }
}
function CruzAzulAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x31357e, [0xFFFFFF]);
    }
}
function CruzAzulAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x31357e, [0xFFFFFF]);
    }
}
function MonterreyFun(player) { // !MTY
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('mty/titular/red | mty/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function MonterreyTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x7C8AA1, [0xFFFFFF, 0x272B44, 0xFFFFFF]);
    }
}
function MonterreyTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x7C8AA1, [0xFFFFFF, 0x272B44, 0xFFFFFF]);
    }
}
function ChivasFun(player) { // !CHV
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('chv/titular/red | chv/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ChivasTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x052e4e, [0xFFFFFF, 0xFE3548, 0xFFFFFF]);
    }
}
function ChivasTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x052e4e, [0xFFFFFF, 0xFE3548, 0xFFFFFF]);
    }
}
function TigresFun(player) { // !TGS
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('chv/titular/red | chv/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function TigresTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x20428c, [0xEEC036, 0xF1B61C]);
    }
}
function TigresTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x20428c, [0xEEC036, 0xF1B61C]);
    }
}
function LigaDeQuitoFun(player) { // !GS
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ldu/titular/red | ldu/titular/blue | ldu/alternativa/red | ldu/alternativa/blue | ldu/tercera/red | ldu/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function LigaDeQuitoTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 360, 0x060541, [0xFFFFFF]);
    }
}
function LigaDeQuitoTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 360, 0x060541, [0xFFFFFF]);
    }
}
function LigaDeQuitoAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xd1bf58, [0xD8060E]);
    }
}
function LigaDeQuitoAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xd1bf58, [0xD8060E]);
    }
}
function LigaDeQuitoTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xf53315, [0x111832]);
    }
}
function LigaDeQuitoTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xf53315, [0x111832]);
    }
}
function BarcelonaSCFun(player) { // !BSC
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('bsc/titular/red | bsc/titular/blue | bsc/alternativa/red | bsc/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function BarcelonaSCTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xc90613, [0xF9D532]);
    }
}
function BarcelonaSCTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xc90613, [0xF9D532]);
    }
}
function BarcelonaSCAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xfd6600, [0x67020F]);
    }
}
function BarcelonaSCAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xfd6600, [0x67020F]);
    }
}
function EmelecFun(player) { // !EME
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('eme/titular/red | eme/titular/blue | eme/alternativa/red | eme/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function EmelecTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 148, 0xFFFFFF, [0x025CCC, 0x004390, 0x025CCC]);
    }
}
function EmelecTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 148, 0xFFFFFF, [0x025CCC, 0x004390, 0x025CCC]);
    }
}
function EmelecAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x0151c2, [0xFFFFFF]);
    }
}
function EmelecAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x0151c2, [0xFFFFFF]);
    }
}
function IndependienteDelValleFun(player) { // !IDV
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('idv/titular/red | idv/titular/blue | idv/alternativa/red | idv/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function IndependienteDelValleTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x00245E, 0x000000, 0x00245E]);
    }
}
function IndependienteDelValleTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x00245E, 0x000000, 0x00245E]);
    }
}
function IndependienteDelValleAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x000000, [0xFF81AA]);
    }
}
function IndependienteDelValleAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x000000, [0xFF81AA]);
    }
}

function OlympiqueLyonFun(player) { // !OL
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ol/titular/red | ol/titular/blue | ol/alternativa/red | ol/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function OlympiqueLyonTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0x113a80, [0xFBFDFC]);
    }
}
function OlympiqueLyonTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0x113a80, [0xFBFDFC]);
    }
}
function OlympiqueLyonAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0xe8e9ea, [0x212C52, 0x1D3C7F, 0x212C52]);
    }
}
function OlympiqueLyonAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0xe8e9ea, [0x222C52, 0x1D3C7F, 0x222C52]);
    }
}

function SanTelmoFun(player) { // !STE
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('stel/titular/red | stel/titular/blue | stel/alternativa/red | stel/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function SanTelmoTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xffffff, [0x3CADFE, 0x24364C, 0x3CADFE]);
    }
}
function SanTelmoTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xffffff, [0x3CADFE, 0x24364C, 0x3CADFE]);
    }
}
function SanTelmoAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x0D2B43, 0x39A2FE, 0xFFFFFF]);
    }
}
function SanTelmoAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x0D2B43, 0x39A2FE, 0xFFFFFF]);
    }
}
function DeportivoMerloFun(player) { // !MER
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('mer/titular/red | mer/titular/blue | mer/alternativa/red | mer/alternativa/blue | mer/tercera/red | mer/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function DeportivoMerloTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 45, 0x666A78, [0xFFFFFF, 0x050C40, 0xFFFFFF]);
    }
}
function DeportivoMerloTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 45, 0x666A78, [0xFFFFFF, 0x050C40, 0xFFFFFF]);
    }
}
function DeportivoMerloAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 45, 0xFFFFFF, [0x050505, 0x04113D, 0x050505]);
    }
}
function DeportivoMerloAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 45, 0xFFFFFF, [0x050505, 0x04113D, 0x050505]);
    }
}
function DeportivoMerloTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x660B0A]);
    }
}
function DeportivoMerloTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x660B0A]);
    }
}
function ArgentinoDeQuilmesFun(player) { // !AdQ
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('adq/titular/red | adq/titular/blue | adq/alternativa/red | adq/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ArgentinoDeQuilmesTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x0A0A0A, [0xFFFFFF, 0x76C4F0, 0xFFFFFF]);
    }
}
function ArgentinoDeQuilmesTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x0A0A0A, [0xFFFFFF, 0x76C4F0, 0xFFFFFF]);
    }
}
function ArgentinoDeQuilmesAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x777A89, 0x000000, 0x777A89]);
    }
}
function ArgentinoDeQuilmesAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x777A89, 0x000000, 0x777A89]);
    }
}
function ValenciaFun(player) { // !RIV
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('val/titular/red | val/titular/blue | val/alternativa/red | val/alternativa/blue | val/tercera/red | val/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ValenciaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0x141205, [0xFE7103, 0xF8F7F8, 0xF8F7F8]);
    }
}
function ValenciaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0x141205, [0xFE7103, 0xF8F7F8, 0xF8F7F8]);
    }
}
function ValenciaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xff671e, [0xE55C19, 0x161419, 0x161419]);
    }
}
function ValenciaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xff671e, [0xE55C19, 0x161419, 0x161419]);
    }
}
function ValenciaTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 123, 0xf0fdfe, [0x0C83D5, 0x21BCF4]);
    }
}
function ValenciaTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 123, 0xf0fdfe, [0x0C83D5, 0x21BCF4]);
    }
}
function BetisFun(player) { // !BET
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('bet/titular/red | bet/titular/blue', player.id, 0x6BFFB5, "normal", 0);
}
function BetisTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x000000, [0x2CB764, 0xFFFFFF, 0x2CB764]);
    }
}
function BetisTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x000000, [0x2CB764, 0xFFFFFF, 0x2CB764]);
    }
}
function CrystalPalaceFun(player) { // !CRY
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('cry/titular/red | cry/titular/blue | cry/alternativa/red | cry/alternativa/blue | cry/tercera/red | cry/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function CrystalPalaceTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xC11930, 0x01449B, 0xC11930]);
    }
}
function CrystalPalaceTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xC11930, 0x01449B, 0xC11930]);
    }
}
function CrystalPalaceAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x242227, 0x01449B, 0x242227]);
    }
}
function CrystalPalaceAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x242227, 0x01449B, 0x242227]);
    }
}
function CrystalPalaceTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 45, 0x0731c3, [0xFFFFFF, 0xED1628, 0xFFFFFF]);
    }
}
function CrystalPalaceTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 45, 0x0731c3, [0xFFFFFF, 0xED1628, 0xFFFFFF]);
    }
}
function JuventudAntonianaFun(player) { // !CJA
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('cja/titular/red | cja/titular/blue | cja/alternativa/red | cja/alternativa/blue | cja/tercera/red | cja/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function JuventudAntonianaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 45, 0x8892A6, [0xFFFFFF, 0x304268, 0xFFFFFF]);
    }
}
function JuventudAntonianaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 45, 0x8892A6, [0xFFFFFF, 0x304268, 0xFFFFFF]);
    }
}
function JuventudAntonianaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x17286E, 0x304268, 0x17286E]);
    }
}
function JuventudAntonianaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x17286E, 0x304268, 0x17286E]);
    }
}
function JuventudAntonianaTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 45, 0x0F1014, [0x113653, 0xFFFFFF, 0x3D2813]);
    }
}
function JuventudAntonianaTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 45, 0x0F1014, [0x113653, 0xFFFFFF, 0x3D2813]);
    }
}
function GimnasiaYTiroFun(player) { // !GyT
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('gyt/titular/red | gyt/titular/blue | gyt/alternativa/red | gyt/alternativa/blue | gyt/tercera/red | gyt/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function GimnasiaYTiroTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x000000, [0xA8E0F9, 0xFFFFFF, 0xA8E0F9]);
    }
}
function GimnasiaYTiroTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x000000, [0xA8E0F9, 0xFFFFFF, 0xA8E0F9]);
    }
}
function GimnasiaYTiroAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x141657, 0x181965, 0x141657]);
    }
}
function GimnasiaYTiroAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x141657, 0x181965, 0x141657]);
    }
}
function GimnasiaYTiroTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 45, 0xFFFFFF, [0x0A0A0A]);
    }
}
function GimnasiaYTiroTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 45, 0xFFFFFF, [0x0A0A0A]);
    }
}
function PatronatoFun(player) { // !PAT
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('pat/titular/red | pat/titular/blue | pat/alternativa/red | pat/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function PatronatoTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xF51A21, 0x1A1B1E, 0xF51A21]);
    }
}
function PatronatoTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xF51A21, 0x1A1B1E, 0xF51A21]);
    }
}
function PatronatoAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x000000, [0xE8171F , 0xFFFFFF , 0xFFFFFF]);
    }
}
function PatronatoAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x000000, [0xE8171F , 0xFFFFFF , 0xFFFFFF]);
    }
}
function RayoVallecanoFun(player) { // !RAY
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ray/titular/red | ray/titular/blue | ray/alternativa/red | ray/alternativa/blue | ray/tercera/red | ray/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function RayoVallecanoTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 28, 0x000000, [0xFFFFFF, 0xFF2E29, 0xFFFFFF]);
    }
}
function RayoVallecanoTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 28, 0x000000, [0xFFFFFF, 0xFF2E29, 0xFFFFFF]);
    }
}
function RayoVallecanoAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 28, 0xFFFFFF, [0xFE322B , 0x130F10 , 0xFE322B]);
    }
}
function RayoVallecanoAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 28, 0xFFFFFF, [0xFE322B , 0x130F10 , 0xFE322B]);
    }
}
function RayoVallecanoTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 28, 0xFFFFFF, [0x130F10 , 0x00A4D2 , 0x130F10]);
    }
}
function RayoVallecanoTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 28, 0xFFFFFF, [0x130F10 , 0x00A4D2 , 0x130F10]);
    }
}
function LevanteFun(player) { // !LEV
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('lev/titular/red | lev/titular/blue | lev/alternativa/red | lev/alternativa/blue | lev/tercera/red | lev/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function LevanteTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x0A1E97, 0xA60727, 0x0A1E97]);
    }
}
function LevanteTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x0A1E97, 0xA60727, 0x0A1E97]);
    }
}
function LevanteAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x191717, [0xFFFFFF , 0x000DD8 , 0xFFFFFF]);
    }
}
function LevanteAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x191717, [0xFFFFFF , 0x000DD8 , 0xFFFFFF]);
    }
}
function LevanteTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x191717, [0xE2E2E2]);
    }
}
function LevanteTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x191717, [0xE2E2E2]);
    }
}
function GetafeFun(player) { // !GET
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('get/titular/red | get/titular/blue | get/alternativa/red | get/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function GetafeTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x086BD3]);
    }
}
function GetafeTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x086BD3]);
    }
}
function GetafeAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xF34C28]);
    }
}
function GetafeAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xF34C28]);
    }
}
function ZenitFun(player) { // !ZEN
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('zen/titular/red | zen/titular/blue | zen/alternativa/red | zen/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ZenitTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 146, 0xFFFFFF, [0x1BB1E3, 0x0E8BC1, 0x0F649A]);
    }
}
function ZenitTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 146, 0xFFFFFF, [0x1BB1E3, 0x0E8BC1, 0x0F649A]);
    }
}
function ZenitAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x0099c3, [0xFFFFFF]);
    }
}
function ZenitAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x0099c3, [0xFFFFFF]);
    }
}
function CSKAMoscuFun(player) { // !CSK
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('csk/titular/red | csk/titular/blue | csk/alternativa/red | csk/alternativa/blue | csk/tercera/red | csk/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function CSKAMoscuTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xFF2039, 0x016AD7, 0xFF2039]);
    }
}
function CSKAMoscuTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xFF2039, 0x016AD7, 0xFF2039]);
    }
}
function CSKAMoscuAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x024fbb, [0xFFFFFF, 0xFF2039, 0xFFFFFF]);
    }
}
function CSKAMoscuAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x024fbb, [0xFFFFFF, 0xFF2039, 0xFFFFFF]);
    }
}
function CSKAMoscuTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 134, 0x082957, [0xFEAC48, 0xFEAC48, 0x01438F]);
    }
}
function CSKAMoscuTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 134, 0x082957, [0xFEAC48, 0xFEAC48, 0x01438F]);
    }
}
function LokomotivFun(player) { // !LOK
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('lok/titular/red | lok/titular/blue | lok/alternativa/red | lok/alternativa/blue | lok/tercera/red | lok/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function LokomotivTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 236, 0xFFFFFF, [0x025948, 0x025948, 0xC70B24]);
    }
}
function LokomotivTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 236, 0xFFFFFF, [0x025948, 0x025948, 0xC70B24]);
    }
}
function LokomotivAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xe71218, [0x026052, 0xFFFFFF, 0xFFFFFF]);
    }
}
function LokomotivAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xe71218, [0x026052, 0xFFFFFF, 0xFFFFFF]);
    }
}
function LokomotivTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xe0e2e1, [0xCD090A, 0x525157, 0x525157]);
    }
}
function LokomotivTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xe0e2e1, [0xCD090A, 0x525157, 0x525157]);
    }
}
function SpartakFun(player) { // !SPM
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('spm/titular/red | spm/titular/blue | spm/alternativa/red | spm/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function SpartakTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x8A939E, [0xD4001D, 0xFBFEFD, 0xD4001D]);
    }
}
function SpartakTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x8A939E, [0xD4001D, 0xFBFEFD, 0xD4001D]);
    }
}
function SpartakAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x4F0000, [0xFFFFFF, 0xCE1D31, 0xFFFFFF]);
    }
}
function SpartakAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x4F0000, [0xFFFFFF, 0xCE1D31, 0xFFFFFF]);
    }
}
function DynamoMoscowFun(player) { // !DIN
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('din/titular/red | din/titular/blue | din/alternativa/red | din/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function DynamoMoscowTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFDFFFE, [0x0066CD]);
    }
}
function DynamoMoscowTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFDFFFE, [0x0066CD]);
    }
}
function DynamoMoscowAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x1f71d7, [0xFFFFFF]);
    }
}
function DynamoMoscowAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x1f71d7, [0xFFFFFF]);
    }
}
function DynamoKievFun(player) { // !DYK
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('dyk/titular/red | dyk/titular/blue | dyk/alternativa/red | dyk/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function DynamoKievTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x146dd3, [0xFFFFFF]);
    }
}
function DynamoKievTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x146dd3, [0xFFFFFF]);
    }
}
function DynamoKievAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x0167B2]);
    }
}
function DynamoKievAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x0167B2]);
    }
}
function ShakhtarFun(player) { // !DYK
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('sha/titular/red | sha/titular/blue | sha/alternativa/red | sha/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ShakhtarTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 1, 0x000000, [0xF39C4D, 0xEF3B24]);
    }
}
function ShakhtarTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 1, 0x000000, [0xF39C4D, 0xEF3B24]);
    }
}
function ShakhtarAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 1, 0x000000, [0xAC9E9B, 0xDAD0CF, 0xAC9E9B]);
    }
}
function ShakhtarAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 1, 0x000000, [0xAC9E9B, 0xDAD0CF, 0xAC9E9B]);
    }
}

function JaponFun(player) { // !JAP
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('jap/titular/red | jap/titular/blue | jap/alternativa/red | jap/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function JaponTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0xFFFFFF, [0x2C396C]);
    }
}
function JaponTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0xFFFFFF, [0x2C396C]);
    }
}
function JaponAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xb52024, [0xF7FDFF]);
    }
}
function JaponAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xb52024, [0xF7FDFF]);
    }
}
function CoreaDelSurFun(player) { // !CSU
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('csu/titular/red | csu/titular/blue | csu/alternativa/red | csu/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function CoreaDelSurTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0xFFFFFF, [0xE4221C]);
    }
}
function CoreaDelSurTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0xFFFFFF, [0xE4221C]);
    }
}
function CoreaDelSurAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x040404, [0xF1F2F1]);
    }
}
function CoreaDelSurAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x040404, [0xF1F2F1]);
    }
}
function NuevaZelandaFun(player) { // !NZE
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('nze/titular/red | nze/titular/blue | nze/alternativa/red | nze/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function NuevaZelandaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0x191e22, [0xFFFFFF]);
    }
}
function NuevaZelandaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0x191e22, [0xFFFFFF]);
    }
}
function NuevaZelandaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 240, 0xF5F5F5, [0x232323, 0x232323, 0x2E2F33]);
    }
}
function NuevaZelandaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 240, 0xF5F5F5, [0x232323, 0x232323, 0x2E2F33]);
    }
}
function CoreaDelNorteFun(player) { // !CNO
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('cno/titular/red | cno/titular/blue | cno/alternativa/red | cno/alternativa/blue | cno/bandera/red | cno/bandera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function CoreaDelNorteTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0xFFFFFF, [0xFF0000]);
    }
}
function CoreaDelNorteTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0xFFFFFF, [0xFF0000]);
    }
}
function CoreaDelNorteAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 240, 0xff0000, [0xF5F9FF]);
    }
}
function CoreaDelNorteAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 240, 0xff0000, [0xF5F9FF]);
    }
}
function CoreaDelNorteBanderaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x024FA2, 0xED1C27, 0x024FA2]);
    }
}
function CoreaDelNorteBanderaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x024FA2, 0xED1C27, 0x024FA2]);
    }
}
function AustriaFun(player) { // !AUT
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('aut/titular/red | aut/titular/blue | aut/alternativa/red | aut/alternativa/blue | aut/bandera/red | aut/bandera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function AustriaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0xFFFFFF, [0xD80B2A]);
    }
}
function AustriaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0xFFFFFF, [0xD80B2A]);
    }
}
function AustriaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 240, 0x000000, [0xFFFFFF]);
    }
}
function AustriaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 240, 0x000000, [0xFFFFFF]);
    }
}
function AustriaBanderaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x000000, [0xED2939, 0xFFFFFF, 0xED2939]);
    }
}
function AustriaBanderaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x000000, [0xED2939, 0xFFFFFF, 0xED2939]);
    }
}
function AtlantaUnitedFun(player) { // !ATLU
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('atlu/titular/red | atlu/titular/blue | atlu/alternativa/red | atlu/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function AtlantaUnitedTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xc2b28e, [0x222021, 0xC70C41, 0x222021]);
    }
}
function AtlantaUnitedTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xc2b28e, [0x222021, 0xC70C41, 0x222021]);
    }
}
function AtlantaUnitedAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 240, 0xff774d, [0xE1E5E6]);
    }
}
function AtlantaUnitedAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 240, 0xff774d, [0xE1E5E6]);
    }
}
function LAGalaxyFun(player) { // !LA
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('la/titular/red | la/titular/blue | la/alternativa/red | la/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function LAGalaxyTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 35, 0xfdc904, [0xFFFFFF, 0x232941, 0xFFFFFF]);
    }
}
function LAGalaxyTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 35, 0xfdc904, [0xFFFFFF, 0x232941, 0xFFFFFF]);
    }
}
function LAGalaxyAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x294A73, 0x1E2037, 0x294A73]);
    }
}
function LAGalaxyAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x294A73, 0x1E2037, 0x294A73]);
    }
}
function TorontoFCFun(player) { // !NZE
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('tofc/titular/red | tofc/titular/blue | tofc/alternativa/red | tofc/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function TorontoFCTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0xFFFFFF, [0xE50126]);
    }
}
function TorontoFCTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0xFFFFFF, [0xE50126]);
    }
}
function TorontoFCAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 240, 0x1d1c21, [0xE6EBEF]);
    }
}
function TorontoFCAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 240, 0x1d1c21, [0xE6EBEF]);
    }
}
function NewYorkCityFun(player) { // !NYC
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('nyc/titular/red | nyc/titular/blue | nyc/alternativa/red | nyc/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function NewYorkCityTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0x102a5b, [0x82BCEC]);
    }
}
function NewYorkCityTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0x102a5b, [0x82BCEC]);
    }
}
function NewYorkCityAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 240, 0x7cbfea, [0x4D5361]);
    }
}
function NewYorkCityAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 240, 0x7cbfea, [0x4D5361]);
    }
}
function LosAngelesFCFun(player) { // !NYC
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('lafc/titular/red | lafc/titular/blue | lafc/alternativa/red | lafc/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function LosAngelesFCTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0xcbad6f, [0x322E2B]);
    }
}
function LosAngelesFCTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0xcbad6f, [0x322E2B]);
    }
}
function LosAngelesFCAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 240, 0xaeafb1, [0xEFEEF3]);
    }
}
function LosAngelesFCAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 240, 0xaeafb1, [0xEFEEF3]);
    }
}
function SeattleSoundersFun(player) { // !SEA
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('sea/titular/red | sea/titular/blue | sea/alternativa/red | sea/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function SeattleSoundersTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0xFFFFFF, [0x98C067]);
    }
}
function SeattleSoundersTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0xFFFFFF, [0x98C067]);
    }
}
function SeattleSoundersAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 240, 0xFFFFFF, [0x2C2A2F, 0x2C2A2F, 0xE18298]);
    }
}
function SeattleSoundersAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 240, 0xFFFFFF, [0x2C2A2F, 0x2C2A2F, 0xE18298]);
    }
}
function NewYorkRedBullFun(player) { // !NRB
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('nyrb/titular/red | nyrb/titular/blue | nyrb/alternativa/red | nyrb/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function NewYorkRedBullTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0x8c0c2d, [0xD0D0D2]);
    }
}
function NewYorkRedBullTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0x8c0c2d, [0xD0D0D2]);
    }
}
function NewYorkRedBullAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 240, 0xFFFFFF, [0xF1273D]);
    }
}
function NewYorkRedBullAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 240, 0xFFFFFF, [0xF1273D]);
    }
}
function PortlandTimbersFun(player) { // !NRB
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ptim/titular/red | ptim/titular/blue | ptim/alternativa/red | ptim/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function PortlandTimbersTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xdfb231, [0x293728, 0x31492F, 0x293728]);
    }
}
function PortlandTimbersTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xdfb231, [0x293728, 0x31492F, 0x293728]);
    }
}
function PortlandTimbersAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 240, 0x486551, [0xFFFFFF]);
    }
}
function PortlandTimbersAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 240, 0x486551, [0xFFFFFF]);
    }
}
function ColoColoFun(player) { // !CCO
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('cco/titular/red | cco/titular/blue | cco/alternativa/red | cco/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ColoColoTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0x000000, [0xF6F6F7]);
    }
}
function ColoColoTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0x000000, [0xF6F6F7]);
    }
}
function ColoColoAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 240, 0xCFCFCF, [0x212223, 0x212223, 0xFFFFFF]);
    }
}
function ColoColoAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 240, 0xCFCFCF, [0x212223, 0x212223, 0xFFFFFF]);
    }
}
function UdeChileFun(player) { // !UDC
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('udc/titular/red | udc/titular/blue | udc/alternativa/red | udc/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function UdeChileTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0xf4f4f4, [0x1C2445]);
    }
}
function UdeChileTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0xf4f4f4, [0x1C2445]);
    }
}
function UdeChileAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xf7f7f7, [0xF33134, 0x611C1C, 0xF33134]);
    }
}
function UdeChileAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xf7f7f7, [0xF33134, 0x611C1C, 0xF33134]);
    }
}
function StrongestFun(player) { // !STG
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('stg/titular/red | stg/titular/blue | stg/alternativa/red | stg/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function StrongestTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xFECE2D, 0x1D1B1E, 0xFECE2D]);
    }
}
function StrongestTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xFECE2D, 0x1D1B1E, 0xFECE2D]);
    }
}
function StrongestAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x030303, [0xFFFFFF, 0xEDAE00, 0xFFFFFF]);
    }
}
function StrongestAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x030303, [0xFFFFFF, 0xEDAE00, 0xFFFFFF]);
    }
}
function WilstermannFun(player) { // !WTM
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('wtm/titular/red | wtm/titular/blue | wtm/alternativa/red | wtm/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function WilstermannTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0xFFFFFF, [0xED1E3C]);
    }
}
function WilstermannTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0xFFFFFF, [0xED1E3C]);
    }
}
function WilstermannAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x1F3E70, 0x16304C, 0x1F3E70]);
    }
}
function WilstermannAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x1F3E70, 0x16304C, 0x1F3E70]);
    }
}
function BolivarFun(player) { // !BLV
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('blv/titular/red | blv/titular/blue | blv/alternativa/red | blv/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function BolivarTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 33, 0x21406b, [0x92E2FF]);
    }
}
function BolivarTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 33, 0x21406b, [0x92E2FF]);
    }
}
function BolivarAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xd8ddee, [0x333B45]);
    }
}
function BolivarAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xd8ddee, [0x333B45]);
    }
}
function EvertonFCFun(player) { // !ING
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('eve/titular/red | eve/titular/blue | eve/alternativa/red | eve/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function EvertonFCTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xf9f9f9, [0x15428A]);
    }
}
function EvertonFCTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xf9f9f9, [0x15428A]);
    }
}
function EvertonFCAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x0c1448, [0xFA6754]);
    }
}
function EvertonFCAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x0c1448, [0xFA6754]);
    }
}
function ASMonacoFun(player) { // !ING
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('asm/titular/red | asm/titular/blue | asm/alternativa/red | asm/alternativa/blue | asm/tercera/red | asm/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ASMonacoTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 61, 0xfeb60a, [0xB8242E, 0xAD232E, 0xFEFEFE]);
    }
}
function ASMonacoTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 61, 0xfeb60a, [0xB8242E, 0xAD232E, 0xFEFEFE]);
    }
}
function ASMonacoAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xd5a651, [0x1F2023]);
    }
}
function ASMonacoAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xd5a651, [0x1F2023]);
    }
}
function ASMonacoTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x255e9a, [0x93D9F5]);
    }
}
function ASMonacoTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x255e9a, [0x93D9F5]);
    }
}
function AtalantaFun(player) { // !OL
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ata/titular/red | ata/titular/blue | ata/alternativa/red | ata/alternativa/blue | ata/tercera/red | ata/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function AtalantaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x0056BB, 0x15141C, 0x0056BB]);
    }
}
function AtalantaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x0056BB, 0x15141C, 0x0056BB]);
    }
}
function AtalantaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x2b51ef, [0x0051AD, 0x19171A, 0xFFFFFF]);
    }
}
function AtalantaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x2b51ef, [0x0051AD, 0x19171A, 0xFFFFFF]);
    }
}
function AtalantaTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0xFFFFFF, [0x874834]);
    }
}
function AtalantaTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0xFFFFFF, [0x874834]);
    }
}
function FCBaselFun(player) { // !OL
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('bas/titular/red | bas/titular/blue | bas/alternativa/red | bas/alternativa/blue | bas/tercera/red | bas/tercera/blue | bas/clasica/red | bas/clasica/blue', player.id, 0x6BFFB5, "normal", 0);
}
function FCBaselTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0xBC051F, 0xBC051F, 0x1B3F86]);
    }
}
function FCBaselTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0xBC051F, 0xBC051F, 0x1B3F86]);
    }
}
function FCBaselAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0x1a1a1a, [0xE1E1E1]);
    }
}
function FCBaselAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0x1a1a1a, [0xE1E1E1]);
    }
}
function FCBaselTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0xFFFFFF, [0x222222]);
    }
}
function FCBaselTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0xFFFFFF, [0x222222]);
    }
}
function FCBaselClasicaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0xffe500, [0xE40327, 0x0E3B85]);
    }
}
function FCBaselClasicaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0, 0xffe500, [0xE40327, 0x0E3B85]);
    }
}
function UCatolicaFun(player) { // !UCA
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('uca/titular/red | uca/titular/blue | uca/alternativa/red | uca/alternativa/blue | uca/tercera/red | uca/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function UCatolicaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFE0000, [0xFFFFFF, 0x2148A0, 0xFFFFFF]);
    }
}
function UCatolicaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFE0000, [0xFFFFFF, 0x2148A0, 0xFFFFFF]);
    }
}
function UCatolicaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0xFFFFFF, [0xD22F1E]);
    }
}
function UCatolicaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0xFFFFFF, [0xD22F1E]);
    }
}
function UCatolicaTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xff0000, [0x2148A0, 0xFFFFFF, 0x2148A0]);
    }
}
function UCatolicaTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xff0000, [0x2148A0, 0xFFFFFF, 0x2148A0]);
    }
}
function CobreloaFun(player) { // !Cob
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('cob/titular/red | cob/titular/blue | cob/alternativa/red | cob/alternativa/blue | cob/tercera/red | cob/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function CobreloaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 30, 0xffffff, [0xFF4B15, 0xCC3900]);
    }
}
function CobreloaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 30, 0xffffff, [0xFF4B15, 0xCC3900]);
    }
}
function CobreloaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 30, 0x000000, [0xFFFFFF, 0xCFCFCF]);
    }
}
function CobreloaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 30, 0x000000, [0xFFFFFF, 0xCFCFCF]);
    }
}
function CobreloaTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 30, 0xffffff, [0x45485B, 0x1A1A1A]);
    }
}
function CobreloaTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 30, 0xffffff, [0x45485B, 0x1A1A1A]);
    }
}
function PalestinoFun(player) { // !Cob
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('cdp/titular/red | cdp/titular/blue | cdp/alternativa/red | cdp/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function PalestinoTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0x000000, [0xFFFFFF, 0x047B4E, 0xE30000]);
    }
}
function PalestinoTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0x000000, [0xFFFFFF, 0x047B4E, 0xE30000]);
    }
}
function PalestinoAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0xFAFAFA, [0xE30000, 0x000503, 0x047B4E]);
    }
}
function PalestinoAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0xFAFAFA, [0xE30000, 0x000503, 0x047B4E]);
    }
}
function MelgarFun(player) { // !IND
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('mel/titular/red | mel/titular/blue | mel/alternativa/red | mel/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function MelgarTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0xFFFFFF, [0xEC1B30, 0x2A2A2A]);
    }
}
function MelgarTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0xFFFFFF, [0xEC1B30, 0x2A2A2A]);
    }
}
function MelgarAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0x2a2a2a, [0xECEFF4, 0xEC1B31, 0xECEFF4]);
    }
}
function MelgarAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0x2a2a2a, [0xECEFF4, 0xEC1B31, 0xECEFF4]);
    }
}
function UniversitarioFun(player) { // !IND
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('unv/titular/red | unv/titular/blue | unv/alternativa/red | unv/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function UniversitarioTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0x812124, [0xE1DCC5]);
    }
}
function UniversitarioTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0x812124, [0xE1DCC5]);
    }
}
function UniversitarioAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0xFFFFFF, [0x902C38]);
    }
}
function UniversitarioAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0xFFFFFF, [0x902C38]);
    }
}
function AlianzaLimaFun(player) { // !IND
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ali/titular/red | ali/titular/blue | ali/alternativa/red | ali/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function AlianzaLimaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x0e2c4c, [0x091C35, 0xFFFFFF, 0x091C35]);
    }
}
function AlianzaLimaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x0e2c4c, [0x091C35, 0xFFFFFF, 0x091C35]);
    }
}
function AlianzaLimaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 40, 0xf4f4f4, [0x1A2639, 0x253143, 0x253143]);
    }
}
function AlianzaLimaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 40, 0xf4f4f4, [0x1A2639, 0x253143, 0x253143]);
    }
}
function SportingCristalFun(player) { // !IND
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('cri/titular/red | cri/titular/blue | cri/alternativa/red | cri/alternativa/blue | cri/tercera/red | cri/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function SportingCristalTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0x032543, [0x61C5ED]);
    }
}
function SportingCristalTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0x032543, [0x61C5ED]);
    }
}
function SportingCristalAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, -90, 0xFFFFFF, [0x212C4B, 0x334A7F]);
    }
}
function SportingCristalAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, -90, 0xFFFFFF, [0x212C4B, 0x334A7F]);
    }
}
function SportingCristalTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 41, 0x1C1C1C, [0xFFFFFF, 0x3CBEEF, 0xFFFFFF]);
    }
}
function SportingCristalTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 41, 0x1C1C1C, [0xFFFFFF, 0x3CBEEF, 0xFFFFFF]);
    }
}
function RusiaFun(player) { // !IND
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('rus/titular/red | rus/titular/blue | rus/alternativa/red | rus/alternativa/blue | rus/bandera/red | rus/bandera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function RusiaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0xf7f7f7, [0xF01F21]);
    }
}
function RusiaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0xf7f7f7, [0xF01F21]);
    }
}
function RusiaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, -90, 0x114577, [0xEFEFF0]);
    }
}
function RusiaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, -90, 0x114577, [0xEFEFF0]);
    }
}
function RusiaBanderaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xCCCCCC, [0xFFFFFF, 0x0039A6, 0xD52B1E]);
    }
}
function RusiaBanderaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xCCCCCC, [0xFFFFFF, 0x0039A6, 0xD52B1E]);
    }
}
function EstadosUnidosFun(player) { // !IND
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('usa/titular/red | usa/titular/blue | usa/alternativa/red | usa/alternativa/blue | usa/tercera/red | usa/tercera/blue | usa/clasica/red | usa/clasica/blue', player.id, 0x6BFFB5, "normal", 0);
}
function EstadosUnidosTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 22, 0x0087DE, [0xFFFFFF, 0x105395, 0xD9272D]);
    }
}
function EstadosUnidosTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 22, 0x0087DE, [0xFFFFFF, 0x105395, 0xD9272D]);
    }
}
function EstadosUnidosAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x005092, [0xD8062B, 0xB4011E, 0xD8062B]);
    }
}
function EstadosUnidosAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x005092, [0xD8062B, 0xB4011E, 0xD8062B]);
    }
}
function EstadosUnidosTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, -90, 0xfbfbfa, [0x013354]);
    }
}
function EstadosUnidosTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, -90, 0xfbfbfa, [0x013354]);
    }
}
function EstadosUnidosClasicaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, -90, 0x101085, [0xFF2E2E, 0xFFFFFF, 0x1C59FF]);
    }
}
function EstadosUnidosClasicaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, -90, 0x101085, [0xFF2E2E, 0xFFFFFF, 0x1C59FF]);
    }
}
function AlmagroFun(player) { // !IND
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('alm/titular/red | alm/titular/blue | alm/alternativa/red | alm/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function AlmagroTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 0, 0xFFFFFF, [0x0137D5, 0x18181A, 0x0137D5]);
    }
}
function AlmagroTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 0, 0xFFFFFF, [0x0137D5, 0x18181A, 0x0137D5]);
    }
}
function AlmagroAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x1783FF, [0x003CDB, 0x1F1F21, 0xFDFDFD]);
    }
}
function AlmagroAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x1783FF, [0x003CDB, 0x1F1F21, 0xFDFDFD]);
    }
}
function NigeriaFun(player) { // !nga
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('nga/titular/red | nga/titular/blue | nga/alternativa/red |nga/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function NigeriaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x221C1F, [0xFCFCFC, 0x72E39C, 0x72E39C]);
    }
}
function NigeriaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x221C1F, [0xFCFCFC, 0x72E39C, 0x72E39C]);
    }
}
function NigeriaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x97fd2f, [0x145541]);
    }
}
function NigeriaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x97fd2f, [0x145541]);
    }
}
function EcuadorFun(player) { // !ecu
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ecu/titular/red | ecu/titular/blue | ecu/alternativa/red |ecu/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function EcuadorTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x182332, [0xF9DD2F]);
    }
}
function EcuadorTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x182332, [0xF9DD2F]);
    }
}
function EcuadorAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x183D5E]);
    }
}
function EcuadorAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x183D5E]);
    }
}
function CADUFun(player) { // !CADU
    room.sendAnnouncement('Club Atlético Defensores Unidos 🇦🇷', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('cadu/titular/red | cadu/titular/blue | cadu/alternativa/red | cadu/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function CADUTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x0F0F0F, [0x0A94DC, 0x2CCAF8, 0x0A94DC]);
    }
}
function CADUTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x0F0F0F, [0x0A94DC, 0x2CCAF8, 0x0A94DC]);
    }
}
function CADUAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 135, 0x007EFC, [0xFFFFFF, 0x47C4FB, 0xFFFFFF]);
    }
}
function CADUAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 135, 0x007EFC, [0xFFFFFF, 0x47C4FB, 0xFFFFFF]);
    }
}
function URSSFun(player) { // !urss
    room.sendAnnouncement('Unión Soviética - URSS - ☭', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('urss/titular/red | urss/titular/blue | urss/alternativa/red |urss/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function URSSTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xffffff, [0xB00819]);
    }
}
function URSSTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xffffff, [0xB00819]);
    }
}
function URSSAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xab0818, [0xFAFAFA]);
    }
}
function URSSAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xab0818, [0xFAFAFA]);
    }
}
function YugoslaviaFun(player) { // !yug
    room.sendAnnouncement('Yugoslavia 🇷🇸', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('yug/titular/red/1990 | yug/titular/blue/1990 | yug/alternativa/red/1990 |yug/alternativa/blue/1990 | yug/titular/red/1984 | yug/titular/blue/1984 | yug/alternativa/red/1984 |yug/alternativa/blue/1984 | yug/bandera/red | yug/bandera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function YugoslaviaTitular1990RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 153, 0xFFFFFF, [0x0F4BA1, 0x0F4BA1, 0xDE0000]);
    }
}
function YugoslaviaTitular1990BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 153, 0xFFFFFF, [0x0F4BA1, 0x0F4BA1, 0xDE0000]);
    }
}
function YugoslaviaAlternativa1990RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 153, 0x0d4bb2, [0xFFFFFF, 0xFFFFFF, 0xDD251D]);
    }
}
function YugoslaviaAlternativa1990BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 153, 0x0d4bb2, [0xFFFFFF, 0xFFFFFF, 0xDD251D]);
    }
}
function YugoslaviaTitular1984RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x18529D]);
    }
}
function YugoslaviaTitular1984BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x18529D]);
    }
}
function YugoslaviaAlternativa1984RedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x00388e, [0xFFFFFF]);
    }
}
function YugoslaviaAlternativa1984BlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x00388e, [0xFFFFFF]);
    }
}
function YugoslaviaBanderaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xde0000, [0x003893, 0xFFFFFF, 0xDE0000]);
    }
}
function YugoslaviaBanderaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xde0000, [0x003893, 0xFFFFFF, 0xDE0000]);
    }
}
function AlumniFun(player) { // !alu
    room.sendAnnouncement('Alumni 🇦🇷 ', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('alu/titular/red | alu/titular/blue | alu/alternativa/red | alu/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function AlumniTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x000000, [0xFF0000, 0xFFFFFF, 0xFF0000]);
    }
}
function AlumniTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x000000, [0xFF0000, 0xFFFFFF, 0xFF0000]);
    }
}
function AlumniAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x000000, [0xE30F10, 0xFFFFFF, 0xE30F10]);
    }
}
function AlumniAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x000000, [0xE30F10, 0xFFFFFF, 0xE30F10]);
    }
}
function VillaSanCarlosFun(player) { // !vsc
    room.sendAnnouncement('Villa San Carlos 🇦🇷 ', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('vsc/titular/red | vsc/titular/blue | vsc/alternativa/red | vsc/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function VillaSanCarlosTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 42, 0x131b2a, [0x48B8E5, 0xFFFFFF, 0x48B8E5]);
    }
}
function VillaSanCarlosTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 42, 0x131b2a, [0x48B8E5, 0xFFFFFF, 0x48B8E5]);
    }
}
function VillaSanCarlosAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 56, 0xF0F0F0, [0x01C8FF, 0x292C34, 0x292C34]);
    }
}
function VillaSanCarlosAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 56, 0xF0F0F0, [0x01C8FF, 0x292C34, 0x292C34]);
    }
}
function LomasAthleticFun(player) { // !loa
    room.sendAnnouncement('Lomas Athletic 🇦🇷 ', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('loa/titular/red | loa/titular/blue | loa/escudo/red | loa/escudo/blue', player.id, 0x6BFFB5, "normal", 0);
}
function LomasAthleticTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xf5dc00, [0x336633, 0xD90000, 0x336633]);
    }
}
function LomasAthleticTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xf5dc00, [0x336633, 0xD90000, 0x336633]);
    }
}
function LomasAthleticEscudoRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xfcc916, [0x015440, 0xDD191A, 0x015440]);
    }
}
function LomasAthleticEscudoBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xfcc916, [0x015440, 0xDD191A, 0x015440]);
    }
}
function ChecoslovaquiaFun(player) { // !cze
    room.sendAnnouncement('Checoslovaquia 🇨🇿 ', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('cze/titular/red | cze/titular/blue | cze/alternativa/red | cze/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function ChecoslovaquiaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xffffff, [0xBE2620]);
    }
}
function ChecoslovaquiaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xffffff, [0xBE2620]);
    }
}
function ChecoslovaquiaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xac1013, [0xFFFFFF]);
    }
}
function ChecoslovaquiaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xac1013, [0xFFFFFF]);
    }
}
function NantesFun(player) { // !fcn
    room.sendAnnouncement('FC Nantes 🇫🇷 ', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('fcn/titular/red | fcn/titular/blue | fcn/alternativa/red | fcn/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function NantesTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x007037, [0xFEE030, 0x1AAD67, 0xFEE030]);
    }
}
function NantesTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x007037, [0xFEE030, 0x1AAD67, 0xFEE030]);
    }
}
function NantesAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 60, 0xffff00, [0x228B67, 0x167554, 0x167554]);
    }
}
function NantesAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 60, 0xffff00, [0x228B67, 0x167554, 0x167554]);
    }
}
function SaintEtienneFun(player) { // !ste
    room.sendAnnouncement('Saint Etienne 🇫🇷 ', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ste/titular/red | ste/titular/blue | ste/alternativa/red | ste/alternativa/blue | ste/tercera/red | ste/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function SaintEtienneTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xffffff, [0x0F6B46, 0x1B9365, 0x1B9365]);
    }
}
function SaintEtienneTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xffffff, [0x0F6B46, 0x1B9365, 0x1B9365]);
    }
}
function SaintEtienneAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x4c6e5d, [0x147858, 0xFFFFFF, 0xFFFFFF]);
    }
}
function SaintEtienneAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x4c6e5d, [0x147858, 0xFFFFFF, 0xFFFFFF]);
    }
}
function SaintEtienneTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0xFFFFFF, [0x727085, 0x8E909D, 0x8E909D]);
    }
}
function SaintEtienneTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0xFFFFFF, [0x727085, 0x8E909D, 0x8E909D]);
    }
}
function RennesFun(player) { // !ren
    room.sendAnnouncement('Rennes 🇫🇷 ', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('ren/titular/red | ren/titular/blue | ren/alternativa/red | ren/alternativa/blue | ren/tercera/red | ren/tercera/blue', player.id, 0x6BFFB5, "normal", 0);
}
function RennesTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xF0F0F0, [0x000000, 0xDC0D15]);
    }
}
function RennesTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xF0F0F0, [0x000000, 0xDC0D15]);
    }
}
function RennesAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x276DD6, 0x1B50B5, 0x276DD6]);
    }
}
function RennesAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x276DD6, 0x1B50B5, 0x276DD6]);
    }
}
function RennesTerceraRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0x000000, [0xFFDF00]);
    }
}
function RennesTerceraBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0x000000, [0xFFDF00]);
    }
}
function FCNyvaVinnytsiaFun(player) { // !nyv
    room.sendAnnouncement('FC Nyva Vinnytsia (Нива Винница) | 🇺🇦 ', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('Você pode escolher entre:', player.id, 0x6BFFB5, "normal", 0);
    room.sendAnnouncement('nyv/titular/red | nyv/titular/blue | nyv/alternativa/red | nyv/alternativa/blue', player.id, 0x6BFFB5, "normal", 0);
}
function FCNyvaVinnytsiaTitularRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 180, 0xFFFFFF, [0x42A161]);
    }
}
function FCNyvaVinnytsiaTitularBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 180, 0xFFFFFF, [0x42A161]);
    }
}
function FCNyvaVinnytsiaAlternativaRedFun(player){
    if (player.admin == true){
        room.setTeamColors(1, 90, 0x439b73, [0x3AA070, 0xFFFFFF, 0xFFFFFF]);
    }
}
function FCNyvaVinnytsiaAlternativaBlueFun(player){
    if (player.admin == true){
        room.setTeamColors(2, 90, 0x439b73, [0x3AA070, 0xFFFFFF, 0xFFFFFF]);
    }
}

function RegrasFun(player) { // !regras
    room.sendAnnouncement("📜 REGRAS DE PENALIDADE:", player.id, 0x00FFBB, "normal", 0);
    room.sendAnnouncement("⒈ Só pode haver um goleiro.", player.id, 0x00FFBB, "normal", 0);
    room.sendAnnouncement("⒉ Os jogadores devem chutar em ordem.", player.id, 0x00FFBB, "normal", 0);
    room.sendAnnouncement("⒊ O jogador não pode  ″Bater″ 2x.​​", player.id, 0x00FFBB, "normal", 0);
    room.sendAnnouncement("👨‍⚖️ Se você violar esta regra, você deve executar a penalidade novamente. ⚖​", player.id, 0x00FFBB, "normal", 0);
    room.sendAnnouncement("⒋ Se uma equipe tiver menos de 4 jogadores, ela tem o direito de decidir se um deles chuta duas vezes ou de escolher um espectador.", player.id, 0x00FFBB, "normal", 0);
    room.sendAnnouncement("⒌ Não pode invadir a área enquanto um jogador está prestes a chutar.", player.id, 0x00FFBB, "normal", 0);
    room.sendAnnouncement("⒍ Se todas as penalidades foram aplicadas e o empate ainda existe:", player.id, 0x00FFBB, "normal", 0);
    room.sendAnnouncement("Os arqueiros devem se enfrentar até 5̲ v̲e̲z̲e̲s̲ c̲o̲m̲o̲ m̲á̲x̲i̲m̲o̲.", player.id, 0x00FFBB, "normal", 0);
    room.sendAnnouncement("E se o empate persistir, t̲o̲d̲o̲s̲ !̲o̲s̲ j̲o̲g̲a̲d̲o̲r̲e̲s̲ d̲e̲v̲e̲r̲á̲m̲ b̲a̲t̲e̲r̲!̲ !̲o̲s̲ p̲e̲n̲a̲t̲i̲s̲ n̲o̲v̲a̲m̲e̲n̲t̲e̲!̲.", player.id, 0x00FFBB, "normal", 2);
	return false;
}

function helpFun(player) { // !help
    room.sendAnnouncement('💬  Comandos disponiveis: "!confirm", "!afk", "afks", "!confirmed_players", "!stats Nickname", "!elohelp", "!eloranking", "!ranking"', player.id, 0xFF003C, "normal", 0);
    room.sendAnnouncement('💬  "!poss", "!adminhelp", "!regras", "!avatars" "!rankhelp", "!nv", "!registrar",  "!mapas" e "!camisetas".', player.id, 0xFF003C, "normal", 0);
	return false;
}
    colors = {
        "red": 15729691,
        "green": 10812739,
        "black": 0,
        "transparent": -1,
        "blue": 367351,
        "yellow": 16771089,
        "orange": 16737796,
        "purple": 14886893,
        "white": 16777215,
        "gold": 14140044
    };
function bosshaftColor (player, message) {
    if (player.admin == true){
    let e = message.split(/ +/).slice(1);
    return room.setDiscProperties(0, {
        color: e[0]
    }), !1
}}
function bosshaftColorString (player, message) {
    if (player.admin == true){
    let e = message.split(/ +/).slice(1);
    return (colors.hasOwnProperty(e[0].toLowerCase()) ? room.setDiscProperties(0, {
        color: colors[e[0].toLowerCase()]
    }) : room.sendAnnouncement("Ese color no es válido !", player.id)), !1
}}

function PelotaFun(player) { // !pelota
    if (player.admin == true){
    room.sendAnnouncement('!ball + red/blue/green/yellow/orange/black/white/purple/gold/transparent (sin el + ni el slash)', player.id, 0xFF003C, "normal", 0);
    room.sendAnnouncement('!customball + color (En decimal) | Página para transformar colores: https://convertingcolors.com/', player.id, 0xFF003C, "normal", 0);
}
}
function NumeroUnoFun(player) { // !1
    room.sendChat('🔢  𝟭𝟏𝟷𝟣１ߗ1𐰯¹₁⥠↿˥⒈𝟏𝟷𐰯 ІΙӀᅵ𝗹। ⅂𐐑⓵①➀➊❶ para ver mais acesse https://tell.wtf');
}
function NumeroDosFun(player) { // !1
    room.sendChat('🔢  𝟮𝟐２2ᒿ𝟤ᒾ²₂շ𝟸ᘖ𝟚Ձ⒉ƻՉԶϩ⓶②➁➋❷㈃⒛ para ver mais acesse https://tell.wtf');
}
function NumeroTresFun(player) { // !1
    room.sendChat('🔢  ƷʒӡӠᴣᶾэЭ℈ぅうㄋȝȜ𝟯𝟥зɜᴈᢃ౩⓷③➂➌❸੩૩३ para ver mais acesse https://tell.wtf');
}
function NumeroCuatroFun(player) { // !1
    room.sendChat('🔢  𝟰𝟒４𝟺𝟦4₄⁴ϤկԿЧчɥ౺⒋ para ver mais acesse https://tell.wtf');
}
function NumeroCincoFun(player) { // !1
    room.sendChat('🔢  Ƽƽ𐐠𐑈𝟱𝟓５𝟧𝟻5₅⁵⒌ para ver mais acesse https://tell.wtf');
}
function NumeroSeisFun(player) { // !1
    room.sendChat('🔢  𝟲𝟔６𝟼6𝟨₆⁶𝟞⒍⑥⓺➅➏❻ɓꕃ para ver mais acesse https://tell.wtf');
}
function NumeroSieteFun(player) { // !1
    room.sendChat('🔢  ⅂𐐑ヿ⏋⌉𝟳𝟕𝟟7𝟽７⁊₇⁷𝟩⒎ꔔ para ver mais acesse https://tell.wtf');
}
function NumeroOchoFun(player) { // !1
    room.sendChat('🔢  𝟴𝟖8𝟪৪⁸₈８𐌚𝟾ꖉ⊟𝛉⒏ para ver mais acesse https://tell.wtf');
}
function NumeroNueveFun(player) { // !1
    room.sendChat('🔢  𝟵𝟗9𝟿９𝟫⁹₉୨ցɡᕤ⒐ para ver mais acesse https://tell.wtf');
}
function NumeroDiezFun() { // !1
    room.sendChat('🔢  ⒑🔟⑩➉➓❿юЮ para ver mais acesse https://tell.wtf');
}
function RegistrarmeFun(player) { // !registrarme
    playerName = player.name.replace(/ /g,"_");
    room.sendAnnouncement("[💻] @" + playerName + " ➡ Cadastre-se agora em https://discord.gg/kQ5FhMe para ver suas estatísticas. 📊", player.id, 0xFFE600, "normal", 0);
    room.sendAnnouncement("Apenas Adicionamos jogadores todos os dias ", player.id, 0xEB172D, "bold", 0);
}
function ScriptsdisponiveisFun(player) { // !scripts
    playerName = player.name.replace(/ /g,"_");
    room.sendAnnouncement("[💻] @" + playerName + " para ver os scripts disponíveis acesse ➡ http://bit.ly/2XOVKoT ⬅", player.id, 0xFFE600, "normal", 2);
}
function AvataresdisponiveisFun(player) { // !avatar
    playerName = player.name.replace(/ /g,"_");
    room.sendChat("[🔢🔤] @" + playerName + " para ver os símbolos do seu avatar acesse:  ➡ https://tell.wtf ⬅");
    room.sendChat("@" + playerName + " e para ver os números do seu avatar, você também pode colocar !1, !2, !3, etc (até !10)");
	return false;
}

function MapasFun(player) { // !mapas
    room.sendAnnouncement(' Os mapas são !futx7, !futx7GLH, !futx4, !futx3, !futx1, !handball, !big, !minirs,  !tenis, !voley, !skate, !pensredhandball, !pensbluehandball, !pensredfutsalx3 e !pensbluefutsalx3', player.id, 0x00FF77, "normal", 0);
}

function TamanoJugadorFun(player) { // !tamaño
    room.sendAnnouncement('para escolher o tamanho do seu player você deve colocar "!size Número" (Comando Bloqueado Sujeito A Ban) ', player.id, 0x5C85F7, "normal", 0);
    room.sendAnnouncement('Exemplo: !size 15', player.id, 0x34F73A, "normal", 0);
} 
function adminHelpFun(player) {
    if (player.admin == true){
    room.sendAnnouncement('💬  Comandos disponiveis: "!clearbans", "!rr", "!kickafks"', player.id, 0xFF6600, "normal", 0);
	return false;
}}
 
 
function gkHelpFun() { // !gkhelp
    room.sendChat('💬  O jogador que estiver em 4 será considerado o goleiro! (Escreva "!gk" se o bot estiver errado).')
}
function rankHelpFun() { // !gkhelp
    room.sendChat("💬  Ganhe pontos por vencer partidas! Gol: 2 pts, Assistencia: 1 pts, Vitoria: 3 pts, Valla invicta: 3 pts, Derrota: -3 pts, Gol contra: -2 pts.")
}
function eloHelpFun() {
    room.sendChat("💬 Ganhe pontos por vencer partidas! Os pontos são calculados usando o sistema elo.")
}
 
function statsFun(player, message){
    if (stats.hasOwnProperty(message.substr(7))){
        sendStats(message.substr(7));
    } else{     room.sendAnnouncement("Para ver suas estatísticas, você deve escrever: !stats NickRegistrado", player.id, 0x63EBE2, "bold", 0);
room.sendAnnouncement("Se você ainda não se cadastrou, você pode escrever !registrar nick senha e depois basta escrever !confirm senha a senha seria a que voce criou no comando anterior. ", player.id, 0xEB172D, "bold", 0);}
}
 
function resetStatsAdminFun (player, message){ // !reset876
    playername = message.substr(10);
    stats[playername] = [0, 0, 0, 0, 0, 0, 1000, "D", "D", "D", "D", "D"];
    return false;
}
 
function clearbansFun(player){ // !clear
    if (player.admin == true){ room.clearBans(); room.sendChat("💎 Os bans foram resetados.");}
}

function MinirsFun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(MiniRS);        
        room.startGame() ;
    }
}


function Futsalx7Fun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(Futsalx7);        
        room.startGame() ;
    }
}

function Futsalx7ConRedesFun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(Futsalx7ConRedes);        
        room.startGame() ;
    }
}

function Futsalx4Fun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(Futsalx4);        
        room.startGame() ;
    }
}

function PenalesRedFutsalFun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(PenalesFutsalRed);        
        room.startGame() ;
    }
}

function PenalesBlueFutsalFun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(PenalesFutsalBlue);        
        room.startGame() ;
    }
}

function PenalesRedHandballFun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(PensRedHandball);        
        room.startGame() ;
    }
}

function PenalesBlueFutsalx3Fun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(PensBlueFutsalx3x4);        
        room.startGame() ;
    }
}

function PenalesRedFutsalx3Fun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(PensRedFutsalx3x4);        
        room.startGame() ;
    }
}

function PenalesBlueHandballFun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(PensBlueHandball);        
        room.startGame() ;
    }
}

function Futsalx3Fun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(Futsalx3);        
        room.startGame() ;
    }
}

function BigGLHFun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(BigGLH);        
        room.startGame() ;
    }
}

function SkateFun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(SkateGLH);        
        room.startGame() ;
    }
}


function Futsalx1yx2Fun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(Futsalx1yx2);        
        room.startGame() ;
    }
}


function HandballFun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(Handball);        
        room.startGame() ;
    }
}

function TenisFun(player){
    room.sendAnnouncement('PUEDES ELEGIR:', player.id, 0xE5FF00, "normal", 0);
    room.sendAnnouncement('tenis/ladrillo', player.id, 0xFFAA00, "normal", 0);
    room.sendAnnouncement('tenis/cemento', player.id, 0x0088FF, "normal", 0);
    room.sendAnnouncement('tenis/pasto', player.id, 0x6FFF00, "normal", 0);

}

function TenisLadrilloFun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(TenisLadrillos);        
        room.startGame() ;
    }
}
function TenisCementoFun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(TenisCemento);        
        room.startGame() ;
    }
}
function TenisPastoFun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(TenisPasto);        
        room.startGame() ;
    }
}



function VolleyballFun(player){
    if (player.admin == true){
        room.stopGame();
        room.setCustomStadium(Volleyball);        
        room.startGame() ;
    }
}
 
function resetFun(player){
    if (player.admin == true){
        room.stopGame();
        room.startGame();
    }
}
 
function gkFun(player){ // !gk
 
    if (room.getScores() != null && room.getScores().time < 60){
        if (player.team == 1) {
            gk[0] = player;
        }
        else if (player.team == 2){
            gk[1] = player;
        }
    }
    return;
}
 
 
function closeFun(player){
    if (player.name == "Pajero"){ // artificially generate an error in order to close the room
        stats.crash();
    }
}

function changeOurSize(player, message){
    if (player.team != 0 && !tookASize.hasOwnProperty(player.id)){
        let size = message.substr("!size ".length);
        if (!isNaN(size) && size >= MIN_SIZE && size <= MAX_SIZE){
            room.setPlayerDiscProperties(player.id, {radius: size, invMass:  size / 30});
            tookASize[player.id] = size;
        }
        else {
            errorMessagePM("Comando bloqueado sujeito a ban: " +
                MIN_SIZE + " y " + MAX_SIZE, player.id);
        }
    }
    else {
        errorMessagePM("Sólo puedes cambiar una vez de tamaño mientras estas jugando.", player.id);
    }
    return false;
} 

function leaveFun(player, message) {
if (message == "!nv")
room.kickPlayer(player.id, "Flw volte sempre! 👋", false);
else if (message == "!adormir")
room.kickPlayer(player.id, "💤 Flw volte sempre!! <3", false);
else if (message == "!bb")
room.kickPlayer(player.id, "Bye! 👋 😉", false);
else if (message == "!acomer")
room.kickPlayer(player.id, "😋 Flw volte sempre ! 🍽", false);
}
 
 
/*
    For ranking
*/
 
function rankingCalc(player){
    var name = player;
    players = Object.keys(stats);
    account = players.find(a => a === name)
    if (account !== undefined){
    return stats[name][0] * 2 + stats[name][1] * 1 +
            stats[name][2] * 3 + stats[name][5] * 3 -
            stats[name][3] * 3 - stats[name][4] * 2;
    }
    else {return 0;}
}
 
function ranking(player, message){
 
    var overall = [];
    players = Object.keys(stats);
    for (var i = 0; i < players.length; i++) {
        score = rankingCalc(players[i])
        // Gol: 2 pts, Assistencia: 1 pts, Vitoria: 3 pts, Valla Invicta: 3 pts, Derrota: -3 pts, Gol Contra: -2 pts
        overall.push({name: players[i], value: score});
    }
    overall.sort(function(a,b){
        return b.value - a.value;
    })
    let top30 = overall.splice(0, 30);
    let pos = 1;
    if (top30.length) {
    room.sendAnnouncement("💎 𝐑 𝐀 𝐍 𝐊 𝐈 𝐍 𝐆 [𝚃𝙾𝙿𝟹𝟶] 💎: ", player.id, 0xFFE121, "normal", 0);
    }
    while (top30.length) {
    let tmp = top30.splice(0, 5);
    let message = tmp.map(e => `${pos++}) ${e.name}: ${e.value}`).join(", ");
    room.sendAnnouncement(message, player.id, 0xFFE121, "normal", 0);
    }
}
 
function eloCalc(player){
    var name = player;
    return stats[name][6];
}
 
function eloranking(){
 
    var overall = [];
    players = Object.keys(stats);
    for (var i = 0; i < players.length; i++) {
        score = eloCalc(players[i])
        // Gol: 2 pts, Assistencia: 1 pts, Vitoria: 3 pts, Valla invicta: 3 pts, Derrota: -3 pts, Gol contra: -2 pts
        overall.push({name: players[i], value: score});
    }
    overall.sort(function(a,b){
        return b.value - a.value;
    })
    let top15 = overall.splice(0, 15);
    let pos = 1;
    if (top15.length) {
    room.sendChat("💎 ELO Ranking [TOP15]: ");
    }
    while (top15.length) {
    let tmp = top15.splice(0, 5);
    let message = tmp.map(e => `${pos++}) ${e.name}: ${e.value}`).join(", ");
    room.sendChat(message);
    }
}
 
 
function sendStats(player, message){
    var name = player;
    ps = stats[name]; // stands for playerstats
    var Gols = ps[0] * 2
    var Assistencias = ps[1] * 1
    var Derrotas = ps[3] * -3
    var Vitorias = ps[2] * 3
    var Assistencias = ps[1] * 1
    var GolsEnContra = ps[4] * -2
    var VallasInvictas = ps[5] * 3
    var PuntosTotales = Gols + Assistencias + Derrotas + Vitorias + Assistencias + GolsEnContra + VallasInvictas
/*  if (ps[7] == parseInt(0)) {ps[7] = "L"} else {ps[7] = "W"}
    if (ps[8] == parseInt(0)) {ps[8] = "L"} else {ps[8] = "W"}
    if (ps[9] == parseInt(0)) {ps[9] = "L"} else {ps[9] = "W"}
    if (ps[10] == parseInt(0)) {ps[10] = "L"} else {ps[10] = "W"}
    if (ps[11] == parseInt(0)) {ps[11] = "L"} else {ps[11] = "W"} */
    room.sendAnnouncement(name + ": ⚽ Gols: " + ps[0] + ", 👟 Assistencias: " + ps[1]
    + ",  ❌ Gols contra: " + ps[4] + ", ✔️ Vallas invictas: " + ps[5] + ",  🏆 Vitorias: " + ps[2] + ", 👎 Derrotas: " + ps[3] + ", 💎 ELO: " + ps[6] + " , 🌟 Pontos: " + PuntosTotales, player.id, 0xFFE121, "normal", 0);
    if (ps[7] !== "D" &&  ps[8] !== "D" && ps[9] !== "D" && ps[10] !== "D" && ps[11] !== "D"){room.sendChat(name + ": 🥇 Last 5 W/L: " + ps[7] + " - " + ps[8] + " - " + ps[9] + " - " + ps[10] + " - " + ps[11]);}
    if (ps[7] !== "D" &&  ps[8] !== "D" && ps[9] !== "D" && ps[10] !== "D" && ps[11] == "D"){room.sendChat(name + ": 🥇 Last 4 W/L: " + ps[7] + " - " + ps[8] + " - " + ps[9] + " - " + ps[10]);}
    if (ps[7] !== "D" &&  ps[8] !== "D" && ps[9] !== "D" && ps[10] == "D" && ps[11] == "D"){room.sendChat(name + ": 🥇 Last 3 W/L: " + ps[7] + " - " + ps[8] + " - " + ps[9]);}
    if (ps[7] !== "D" &&  ps[8] !== "D" && ps[9] == "D" && ps[10] == "D" && ps[11] == "D"){room.sendChat(name + ": 🥇 Last 2 W/L: " + ps[7] + " - " + ps[8]);}
    if (ps[7] !== "D" &&  ps[8] == "D" && ps[9] == "D" && ps[10] == "D" && ps[11] == "D"){room.sendChat(name + ": 🥇 Last W/L: " + ps[7]);}
}
 
 
function whichTeam(){ // gives the players in the red or blue team
    var players = room.getPlayerList();
    var redTeam = players.filter(player => player.team == 1);
    var blueTeam = players.filter(player => player.team == 2);
    return [redTeam, blueTeam]
}
function afkFun(player, message){ // !classic
    if (afkPlayerIDs.has(player.id)){
        afkPlayerIDs.delete(player.id);
        room.sendChat("💎 " + player.name + " voltou! e está pronto para jogar!");}
    else {afkPlayerIDs.add(player.id); room.setPlayerTeam(player.id, 0);room.sendChat("💎 " + player.name + " ficou AFK!");}
}
 
function afksFun(player, message){ // !huge
    afkPlayers_list = room.getPlayerList().filter((x) => afkPlayerIDs.has(x.id));
    afkPlayers_list_string = afkPlayers_list.map(x => x.name).join(", ");
    if (afkPlayers_list == "") {
        room.sendChat("💎 Não há jogadores AFK neste momento!");
    }
    else {
        room.sendChat("💎 Jogadores AFK: " + afkPlayers_list_string);
    }
}
 
function kickafksFun(player, message){ // !huge
    if (player.admin == true){
        afksPlayers = room.getPlayerList().filter((x) => afkPlayerIDs.has(x.id));
        for(var i=0;i<afksPlayers.length;i++){room.kickPlayer(afksPlayers[i].id,"AFK!",false);}
    }
}
 
function saveStatsFun(){
    var val = JSON.stringify(stats);
    window.localStorage.setItem("stats", val);
    return false;
}
 
function getAverageRank(team){
    average = 0;
    for (var i = 0; i < team.length; i++) {
        if (team[i].name !== undefined){
        average += rankingCalc(team[i].name);}
    }
    return average / team.length;
}
 
 
 
function getRatingDelta(redTeam, blueTeam, redGameResult, blueGameResult) {
 
    redAverage = getAverageRank(redTeam);
    blueAverage = getAverageRank(blueTeam);
 
  var redChanceToWin = 1 / ( 1 + Math.pow(10, (blueAverage - redAverage) / 400));
    var blueChanceToWin = 1 - redChanceToWin;
 
  return [Math.round(32 * (redGameResult - redChanceToWin)), Math.round(32 * (blueGameResult - blueChanceToWin))];
}
 
function updateElo(redTeam, blueTeam, redGameResult, blueGameResult){
    if (redTeam.length == blueTeam.length && redTeam.length == '4' && blueTeam.length == '4'){
        [redDelta, blueDelta] = getRatingDelta(redTeam, blueTeam, redGameResult, blueGameResult)
        for (var i = 0; i < redTeam.length; i++) {
            let account3 = accounts.find(a => a.playerId === redTeam[i].id);
            if (account3 !== undefined) {stats[account3.username][6] += redDelta;} else{};
            let account4 = accounts.find(a => a.playerId === blueTeam[i].id);
            if (account4 !== undefined) {stats[account4.username][6] += blueDelta;} else{};
        }
        return redDelta;
    }
    return 0;
}
 
 
function confirmedPlayersFun(player, message){ // !huge
    confirmedPlayers_list = room.getPlayerList().filter((x) => confirmedPlayers.has(x.id));
    confirmedPlayers_list_string = confirmedPlayers_list.map(x => x.name).join(", ");
    if (confirmedPlayers_list == "") {
        room.sendChat("💎 Atualmente não há jogadores registrados!");
    }
    else {
        room.sendChat("💎 Jogadores registrados: " + confirmedPlayers_list_string);
    }
}
 
 
function eightballFun(player, message){
    var myArray = ['Claro que não.', 'Tal vez.', 'Pfft.', 'O futuro é incerto.', 'Honestamente nao.', 'xdxdxd! É serio?!?', 'Talvez no futuro.', 'WTF.', 'Espero que nao.', 'Nunca!', 'Que flashes? ( ͡ʘ ͜ʖ ͡ʘ)', 'nem.', 'Nem mesmo em seus sonhos.', 'seeee! (╭☞ ͡ ͡° ͜ ʖ ͡ ͡°)╭☞', 'O que você disse? Não se atreva.', 'Provavelmente não', 'Provavelmente sim', 'Eu te devo isso', 'Sim', 'Mmmmm, você realmente quer que eu responda isso?', 'Mas que tipo de pergunta é essa?', 'Como desejar', 'Que boa pergunta xdxd', 'O importante é que tenhamos saúde ಥ_ಥ', 'Você me dá nojo >:v', 'Sonhar não custa nada (ง︡'-'︠)ง', 'Chupa meus ovo ¯\_(ツ)_/¯', 'Essa é uma excelente pergunta', 'Se eles me deram [̲̅$̲̅(̲̅ιοο̲̅)̲̅$̲̅] para cada pergunta boluda como esta... Eu seria um milionário'];
    var rand = myArray[(Math.random() * myArray.length) | 0]
    var myArray2 = ['😀','😁','😂','😃','😄','😅','😆','😉','😊','😋','😎','😍','😘','😏','😣','😥','😮','😯','😪','😫','😴','😌','😛','😜','😝'];
    var randimage = myArray2[(Math.random() * myArray2.length) | 0]
    room.sendChat(randimage + " " + rand);
}

function setpasswordFun(player, message){  //!set_password  !confirm
    if (player.admin == true){
    code = message.substr(14)
    room.setPassword(code);
    room.sendChat("💎 Host bloqueado.");
    return false;
    }
}
 
function clearpasswordFun(player, message){  //!clear_password
    if (player.admin == true){
    room.setPassword();
    room.sendChat("💎 Host desbloqueado.");
    return false;
    }
}
 
 
function backaccountFun(player, message){  //!back876 waffle 10 2 3 2 1 1 1000
    if (player.admin == true){
    var playername = message.substring(message.lastIndexOf(":") + 1,message.lastIndexOf(";"));
    var index = message.substr( message.lastIndexOf(";") + 1 ).split(" ");
    var goals = index[1]
    var assists = index[2]
    var wins = index[3]
    var losses = index[4]
    var og = index[5]
    var cs = index[6]
    var elo = index[7]
    var ws1 = index[8]
    var ws2 = index[9]
    var ws3 = index[10]
    var ws4 = index[11]
    var ws5 = index[12]
    stats[playername] = [parseInt(goals), parseInt(assists), parseInt(wins), parseInt(losses), parseInt(og), parseInt(cs), parseInt(elo), ws1, ws2, ws3, ws4, ws5];  // goals, assists, wins, losses, og, cs, elo
    saveStatsFun();
    return false;
    }
}
 
function registrarFun(player, message){ //!registrar Waffle aaa
    var playername = message.substring(message.lastIndexOf(":") + 1,message.lastIndexOf(";"));
    var index = message.substr( message.lastIndexOf(";") + 1 ).split(" ");
    var password = index[index.length - 1]
    accounts.push({username: playername,password: password});
    if (stats.hasOwnProperty(playername)){}
    else {stats[playername] = [0, 0, 0, 0, 0, 0, 1000, "D", "D", "D", "D", "D"];}
    saveStatsFun();
    return false;
}
 
/* function pmFun(player, message){ //!pm
    var pm = message.substr(4);
    var index = message.split(" ").slice(1);
    var playerID = index[0]
    var message2 = message.substr(4).substr(playerID);
    var message3 = "[PM FROM " + player.name + "(ID:" + player.id + ")]: " + message2;
    console.log(playerID);
    console.log(index);
    console.log(message);
    console.log(message2);
    console.log(message3);
    room.sendChat(message3, parseInt(playerID))
    var players = room.getPlayerList().filter((player) => player.id != 0 );
    if ( players.find((player => player.id === playerID))) {room.sendChat("User ID is not found!, Check # for getting ID.", player.id)}
    else {room.sendChat("PM Sent!", player.id)};
    return false;
} */
 
 
function isGk(){ // gives the mosts backward players before the first kickOff
    var players = room.getPlayerList();
    var min = players[0];
    min.position = {x: room.getBallPosition().x + 60}
    var max = min;
 
    for (var i = 0; i < players.length; i++) {
        if (players[i].position != null){
            if (min.position.x > players[i].position.x) min = players[i];
            if (max.position.x < players[i].position.x) max = players[i];
        }
    }
    return [min, max]
}
 
 
 
 
 
function updateWinLoseStats(winners, losers){
    for (var i = 0; i < winners.length; i++) {
        let account = accounts.find(a => a.playerId === winners[i].id);
        if (account !== undefined) {stats[account.username][2] += 1;} else{};
    }
    for (var i = 0; i < losers.length; i++) {
        let account1 = accounts.find(a => a.playerId === losers[i].id);
        if (account1 !== undefined) {stats[account1.username][3] += 1;} else{};
    }
}
 
function updateWinLoseStreakStats(winners, losers){
    if (redTeam.length == blueTeam.length && redTeam.length == '4' && blueTeam.length == '4'){
    for (var i = 0; i < winners.length; i++) {
        let account = accounts.find(a => a.playerId === winners[i].id);
        if (account !== undefined) {
            if (stats[account.username][10] == "W"){ stats[account.username][11] = "W"; } else if (stats[account.username][10] == "L"){ stats[account.username][11] = "L"; } else{};
            if (stats[account.username][9] == "W"){ stats[account.username][10] = "W"; } else if (stats[account.username][9] == "L"){ stats[account.username][10] = "L"; } else{};
            if (stats[account.username][8] == "W"){ stats[account.username][9] = "W"; } else if (stats[account.username][8] == "L"){ stats[account.username][9] = "L"; } else{};
            if (stats[account.username][7] == "W"){ stats[account.username][8] = "W"; } else if (stats[account.username][7] == "L"){ stats[account.username][8] = "L"; } else{};
            stats[account.username][7] = "W";} else{};
    }
    for (var i = 0; i < losers.length; i++) {
        let account1 = accounts.find(a => a.playerId === losers[i].id);
        if (account1 !== undefined) {
            if (stats[account1.username][10] == "W"){ stats[account1.username][11] = "W"; } else if (stats[account1.username][10] == "L"){ stats[account1.username][11] = "L"; } else{};
            if (stats[account1.username][9] == "W"){ stats[account1.username][10] = "W"; } else if (stats[account1.username][9] == "L"){ stats[account1.username][10] = "L"; } else{};
            if (stats[account1.username][8] == "W"){ stats[account1.username][9] = "W"; } else if (stats[account1.username][8] == "L"){ stats[account1.username][9] = "L"; } else{};
            if (stats[account1.username][7] == "W"){ stats[account1.username][8] = "W"; } else if (stats[account1.username][7] == "L"){ stats[account1.username][8] = "L"; } else{};
            stats[account1.username][7] = "L";} else{};
    }
    }
}
 
function initBallCarrying(redTeam, blueTeam){
    var ballCarrying = new Map();
    var playing = redTeam.concat(blueTeam);
    for (var i = 0; i < playing.length; i++) {
        ballCarrying.set(playing[i].name, [0, playing[i].team]); // secs, team, %
    }
    return ballCarrying;
}
 
 
 
function updateTeamPoss(value){
    if (value[1] == 1) redPoss += value[0];
    if (value[1] == 2) bluePoss += value[0];
}
 
var bluePoss;
var redPoss;
var timeOnHalves;
function PosesionBalonFun(player, message){
    if (room.getScores() == null) return false;
    bluePoss = 0;
    redPoss = 0
    ballCarrying.forEach(updateTeamPoss);
    var redPossPercent = Math.round((redPoss / (redPoss + bluePoss + 0.000001)) * 100);
    var bluePossPercent = Math.round((bluePoss / (redPoss + bluePoss + 0.000001)) * 100);
    room.sendAnnouncement("⛹ Posse de bola:  Tᴇᴀᴍ Rᴇᴅ 🔴 " + boldedNumber(redPossPercent) + "% - " + boldedNumber(bluePossPercent) + "% Tᴇᴀᴍ Bʟᴜᴇ 🔵 " , player.id, 0x33FFB4, "normal", 0);
   
    var timeOnRedHalf = Math.round((timeOnHalves[0] / (timeOnHalves[0] + timeOnHalves[1] + 0.000001)) * 100);
    var timeOnBlueHalf = Math.round((timeOnHalves[1] / (timeOnHalves[0] + timeOnHalves[1] + 0.000001)) * 100);
    room.sendAnnouncement("◧ Bola em campo: Tᴇᴀᴍ Rᴇᴅ 🔴 " + boldedNumber(timeOnRedHalf) + "% - " + boldedNumber(timeOnBlueHalf) + "% Tᴇᴀᴍ Bʟᴜᴇ 🔵 " , player.id, 0x33FFB4, "normal", 0);
}
 
function teamPossFun(player, message){
    if (room.getScores() == null) return false;
    bluePoss = 0;
    redPoss = 0
    ballCarrying.forEach(updateTeamPoss);
    var redPossPercent = Math.round((redPoss / (redPoss + bluePoss + 0.000001)) * 100);
    var bluePossPercent = Math.round((bluePoss / (redPoss + bluePoss + 0.000001)) * 100);
    room.sendChat("⛹ Posse de bola:  Tᴇᴀᴍ Rᴇᴅ 🔴 " + boldedNumber(redPossPercent) + "% - " + boldedNumber(bluePossPercent) + "% Tᴇᴀᴍ Bʟᴜᴇ 🔵 ");
   
    var timeOnRedHalf = Math.round((timeOnHalves[0] / (timeOnHalves[0] + timeOnHalves[1] + 0.000001)) * 100);
    var timeOnBlueHalf = Math.round((timeOnHalves[1] / (timeOnHalves[0] + timeOnHalves[1] + 0.000001)) * 100);
    room.sendChat("◧ Bola em campo: Tᴇᴀᴍ Rᴇᴅ 🔴 " + boldedNumber(timeOnRedHalf) + "% - " + boldedNumber(timeOnBlueHalf) + "% Tᴇᴀᴍ Bʟᴜᴇ 🔵 ");
} 
 
/*
For the game
*/
 
// Gives the last player who touched the ball, works only if the ball has the same
// size than in classics maps.
var radiusBall = 10;
function getLastTouchTheBall(lastPlayerTouched, time) {
    var ballPosition = room.getBallPosition();
    var players = room.getPlayerList();
    for(var i = 0; i < players.length; i++) {
        if(players[i].position != null) {
            var distanceToBall = pointDistance(players[i].position, ballPosition);
            if(distanceToBall < triggerDistance) {
                lastPlayerTouched = players[i];
                return lastPlayerTouched;
            }
        }
    }
    return lastPlayerTouched;
 
}
 
 
 
// Calculate the distance between 2 points
function pointDistance(p1, p2) {
    var d1 = p1.x - p2.x;
    var d2 = p1.y - p2.y;
    return Math.sqrt(d1 * d1 + d2 * d2);
}
 
function isOvertime(){
    scores = room.getScores();
    if (scores != null){
        if (scores.timeLimit != 0){
            if (scores.time > scores.timeLimit){
                if (scores.red == 0 && hasFinished == false){
                    let account = accounts.find(a => a.playerId === gk[0].id);
                    if (account !== undefined) {
                    stats[account.username][5] += 1;}else{};
                    let account1 = accounts.find(a => a.playerId === gk[1].id);
                    if (account1 !== undefined) {
                    stats[account1.username][5] += 1;}else{};
                    hasFinished = true;
                }
            }
        }
    }
}
// return: the name of the team who took a goal
var team_name = team => team == 1 ? "𝐑𝐄𝐃 🔴" : "𝐁𝐋𝐔𝐄 🔵";
 
var team_color = team => team == 1 ? "𝐑𝐄𝐃 🔴" : "𝐁𝐋𝐔𝐄 🔵";
 
// return: whether it's an OG
var isOwnGoal = (team, player) => team != player.team ? " [Gol contra]" : "";
 
// return: a better display of the second when a goal is scored
var floor = s => s < 10 ? "0" + s : s;
 
// return: whether there's an assist
//var playerTouchedTwice = playerList => playerList[0].team == playerList[1].team ? " (" + playerList[1].name + ")" : "";
 
playerTouchedTwice = function(playerList){
    let account = accounts.find(a => a.playerId === playerList[1].id);
    if (playerList[0].team == playerList[1].team && account !== undefined){ return " (" + playerList[1].name + "[" + account.username + "]" + ")"; }
    else if (playerList[0].team == playerList[1].team && account == undefined){ return " (" + playerList[1].name + ")"; }
    else{ return "";};
 
}
 
 
 
var stats;
if (!(localStorage.getItem("stats"))){
 stats = {};
} else {stats = JSON.parse(localStorage.getItem("stats"));}
window.setInterval(saveStatsFun, 300000);
/* window.setInterval(saveStatsFun, 300000); */
var mutedPlayers = []; // Array where will be added muted players
const confirmedPlayers = new Set()
const afkPlayerIDs = new Set()
var init = "init"; // Smth to initialize smth
init.id = 0; // Faster than getting host's id with the method
init.name = "init";
var temp2 = false;
var scorers ; // Map where will be set all scorers in the current game (undefined if reset or end)
var whoTouchedLast; // var representing the last player who touched the ball
var whoTouchedBall = [init, init]; // Array where will be set the 2 last players who touched the ball
var gk = [init, init];
var goalScored = false;
let accounts = [];

// Os jogadores podem ser registrados aqui. Você pode adicionar mais jogadores registrados, se quiser.

accounts.push({username: "Bolso",password: "Bolso880"});
accounts.push({username: "Crossbay",password: "Crossbay880"});
accounts.push({username: "marcola43",password: "marcola880"});
accounts.push({username: "Rock07",password: "Rock880"});
accounts.push({username: "😈CRONOS l😈",password: "crono48"});
accounts.push({username: "GabrielGamer10",password: "gabriel1010"});
accounts.push({username: "Méci careco",password: "careco1823"});
accounts.push({username: "Tec",password: "Tec30"});
accounts.push({username: "ᴄᴜɴʜᴀʜ.ᴇxᴇ",password: "cunha330"});
accounts.push({username: "Falcão",password: "falcao203"});
accounts.push({username: "Henrique",password: "henrique243"});
accounts.push({username: "Zenitsu",password: "zenitsu206"});
accounts.push({username: "$$GS$$",password: "gs309"});
accounts.push({username: "bengala de cego",password: "bengala556"});
accounts.push({username: "Taiyou",password: "Taiyou822"});
accounts.push({username: "New lil lixo ™️",password: "SHIRO802"});
accounts.push({username: "gaab",password: "gaab439"});
accounts.push({username: "renegado",password: "renegado344"});
accounts.push({username: "𝒞𝑜𝑜𝓀 I Flamengo I SAO",password: "flamengo4231"});


var commands = {
    // Command that doesnt need to know players attributes.
    "!help": helpFun,
    "!pelota": PelotaFun,
    "!customball": bosshaftColor,
    "!ball" : bosshaftColorString,
    "!camisetas": CamisetasFun,
    "!fantasmas": FantasmasFun,
    "!size": changeOurSize,
    "!tamaño": TamanoJugadorFun,
    "!regras": RegrasFun,
    "!superliga": SuperligaFun,
    "!ascenso": AscensoFun,
    "!ligaboliviana": LigaBolivianaFun,
    "!campeonatochileno": CampeonatoChilenoFun,
    "!mls": MLSFun,
    "!campeonatouruguayo": LigaUruguayaFun,
    "!campeonatoruso": CampeonatoRusoFun,
    "!premierucrania": PremierUcranianaFun,
    "!laliga": LaLigaFun,
    "!seriea": SerieATIMFun,
    "!brasileirao": BrasilLeagueFun,
    "!premierleague": PremierLeagueFun,
    "!superlig": SuperLigFun,
    "!paises": PaisesFun,
    "!bundesliga": BundesligaFun,
    "!eredivisie": EredivisieFun,
    "!ligaaguila": LigaAguilaFun,
    "!ligaparaguaya": LigaParaguayaFun,
    "!ligue1": Ligue1Fun,
    "!ligamx": LigaMXFun,
    "!ligapro": LigaProFun,
    "!superligasuiza": RaiffeisenSuperLeagueFun,
    "!liga1peru": Liga1PeruFun,

    "!RIV": RiverFun,
    "!BOC": BocaFun,
    "!SLO": SanLorenzoFun,
    "!RAC": RacingFun,
    "!IND": IndependienteFun,
    "!ALD": AldosiviFun,
    "!GIM": GimnasiaFun,
    "!NOB": NewellsFun,
    "!CEN": CentralFun,
    "!DYJ": DefensaFun,
    "!ATM": AtleticoMadridFun,
    "!BAR": BarcelonaFun,
    "!RMA": RealMadridFun,
    "!INT": InterMilanFun,
    "!MIL": MilanFun,
    "!CRU": CruzeiroFun,
    "!PAL": PalmeirasFun,
    "!GRE": GremioFun,
    "!TOT": TottenhamFun,
    "!LIV": LiverpoolFun,
    "!ARG": ArgentinaFun,
    "!BELG": BelgicaFun,
    "!BRA": BrasilFun,
    "!CHI": ChileFun,
    "!URU": UruguayFun,
    "!FRA": FranciaFun,
    "!CRO": CroaciaFun,
    "!NAP": NapoliFun,
    "!FCB": BayernFun,
    "!BVB": BorussiaFun,
    "!JUV": JuventusFun,
    "!EST": EstudiantesFun,
    "!BAND": BanfieldFun,
    "!LAN": LanusFun,
    "!MUN": ManUnitedFun,
    "!MCI": ManCityFun,
    "!ARS": ArsenalFun,
    "!CHE": ChelseaFun,
    "!PAR": ParanaenseFun,
    "!HUR": HuracanFun,
    "!TIG": TigreFun,
    "!ALE": AlemaniaFun,
    "!ESP": EspanaFun,
    "!POR": PortugalFun,
    "!AAAJ": ArgentinosJrsFun,
    "!ALB": AllBoysFun,
    "!ATL": AtlantaFun,
    "!BEL": BelgranoFun,
    "!CHA": ChacaritaFun,
    "!TAL": TalleresFun,
    "!PLA": PlatenseFun,
    "!OLI": OlimpoFun,
    "!SMT": SanMartinTucumanFun,
    "!ATU": AtlTucumanFun,
    "!FCO": FerroFun,
    "!NAC": NacionalFun,
    "!PEN": PenarolFun,
    "!QUI": QuilmesFun,
    "!NCH": ChicagoFun,
    "!MOR": MoronFun,
    "!UNI": UnionFun,
    "!CSF": ColonFun,
    "!ARSE": SarandiFun,
    "!DOC": DocksudFun,
    "!COL": ColombiaFun,
    "!PER": PeruFun,
    "!QAT": QatarFun,
    "!PGY": ParaguayFun,
    "!VEN": VenezuelaFun,
    "!WBA": WestBromFun,
    "!AVL": AstonVillaFun,
    "!FUL": FulhamFun,
    "!LEI": LeicesterFun,
    "!DAN": DanubioFun,
    "!RAM": RamplaJrsFun,
    "!SCH": SacachispasFun,
    "!HOL": HolandaFun,
    "!BOL": BoliviaFun,
    "!ITA": ItaliaFun,
    "!ING": InglaterraFun,
    "!AJA": AjaxFun,
    "!FEY": FeyenoordFun,
    "!PSV": PSVFun,
    "!PSG": ParisFun,
    "!CCS": CentralCordobaSdEFun,
    "!RIE": RiestraFun,
    "!OGC": OGCNiceFun,
    "!OM": OlympiqueMarsellaFun,
    "!ROM": ASRomaFun,
    "!FIO": FiorentinaFun,
    "!LAZ": LazioFun,
    "!SMSJ": SMSanJuanFun,
    "!GOD": GodoyCruzFun,
    "!VEL": VelezFun,
    "!FLA": FlamengoFun,
    "!FLU": FluminenseFun,
    "!SAN": SantosFun,
    "!SAO": SaoPauloFun,
    "!BOT": BotafogoFun,
    "!SCI": SCInternacionalFun,
    "!COR": CorinthiansFun,
    "!VAS": VascoDaGamaFun,
    "!CAM": MineiroFun,
    "!ATN": AtlNacionalFun,
    "!MIL": MillonariosFun,
    "!AME": AmericaDeCaliFun,
    "!SFE": SantaFeFun,
    "!CAL": DeportivoCaliFun,
    "!ONC": OnceCaldasFun,
    "!CCP": CerroFun,
    "!OLI": OlimpiaFun,
    "!GUA": GuaraniFun,
    "!LIB": LibertadFun,
    "!SOU": SouthamptonFun,
    "!WAT": WatfordFun,
    "!WIL": WillemIIFun,
    "!ALV": AlvaradoFun,
    "!AGR": AgropecuarioFun,
    "!GS": GalatasarayFun,
    "!BJK": BesiktasFun,
    "!FB": FenerbahceFun,
    "!RIU": RiverURUFun,
    "!MTY": MonterreyFun,
    "!TGS": TigresFun,
    "!CHV": ChivasFun,
    "!CRUZ": CruzAzulFun,
    "!AMC": AmericaMXFun,
    "!LDU": LigaDeQuitoFun,
    "!BSC": BarcelonaSCFun,
    "!EME": EmelecFun,
    "!IDV": IndependienteDelValleFun,
    "!OL": OlympiqueLyonFun,
    "!STEL": SanTelmoFun,
    "!MER": DeportivoMerloFun,
    "!AdQ": ArgentinoDeQuilmesFun,
    "!VAL": ValenciaFun,
    "!BET": BetisFun,
    "!CRY": CrystalPalaceFun,
    "!CJA": JuventudAntonianaFun,
    "!GyT": GimnasiaYTiroFun,
    "!GET": GetafeFun,
    "!LEV": LevanteFun,
    "!RAY": RayoVallecanoFun,
    "!PAT": PatronatoFun,
    "!ZEN": ZenitFun,
    "!CSK": CSKAMoscuFun,
    "!LOK": LokomotivFun,
    "!SPM": SpartakFun,
    "!DIN": DynamoMoscowFun,
    "!DYK": DynamoKievFun,
    "!SHA": ShakhtarFun,
    "!JAP": JaponFun,
    "!NZE": NuevaZelandaFun,
    "!CSU": CoreaDelSurFun,
    "!AUT": AustriaFun,
    "!CNO": CoreaDelNorteFun,
    "!LA": LAGalaxyFun,
    "!LAFC": LosAngelesFCFun,
    "!PTIM": PortlandTimbersFun,
    "!SEA": SeattleSoundersFun,
    "!NYRB": NewYorkRedBullFun,
    "!NYC": NewYorkCityFun,
    "!TOFC": TorontoFCFun,
    "!ATLU": AtlantaUnitedFun,
    "!CCO": ColoColoFun,
    "!UDC": UdeChileFun,
    "!STG": StrongestFun,
    "!BLV": BolivarFun,
    "!WTM": WilstermannFun,
    "!EVE": EvertonFCFun,
    "!ASM": ASMonacoFun,
    "!COB": CobreloaFun,
    "!CDP": PalestinoFun,
    "!UCA": UCatolicaFun,
    "!BAS": FCBaselFun,
    "!ATA": AtalantaFun,
    "!MEL": MelgarFun,
    "!UNV": UniversitarioFun,
    "!ALI": AlianzaLimaFun,
    "!CRI": SportingCristalFun,
    "!RUS": RusiaFun,
    "!USA": EstadosUnidosFun,
    "!ALM": AlmagroFun,
    "!NGA": NigeriaFun,
    "!ECU": EcuadorFun,
    "!CADU": CADUFun,
    "!ALU": AlumniFun,
    "!URSS": URSSFun,
    "!YUG": YugoslaviaFun,
    "!VSC": VillaSanCarlosFun,
    "!LOA": LomasAthleticFun,
    "!CZE": ChecoslovaquiaFun,
    "!FCN": NantesFun,
    "!STE": SaintEtienneFun,
    "!REN": RennesFun,
    "!NYV": FCNyvaVinnytsiaFun,

    "!mapas": MapasFun,
    "!gkhelp": gkHelpFun,
    "!adminhelp": adminHelpFun,
    "!rankhelp": rankHelpFun,
    "!ranking": ranking,
    "!poss": PosesionBalonFun,
    "!elohelp": eloHelpFun,
    "!1": NumeroUnoFun,
    "!2": NumeroDosFun,
    "!3": NumeroTresFun,
    "!4": NumeroCuatroFun,
    "!5": NumeroCincoFun,
    "!6": NumeroSeisFun,
    "!7": NumeroSieteFun,
    "!8": NumeroOchoFun,
    "!9": NumeroNueveFun,
    "!10": NumeroDiezFun,
    "!eloranking": eloranking,
    "!reset824": resetStatsAdminFun,
    "!gk": gkFun,
 
    // Puedes establecer la contraseña que quieras. Solo Cambia el texto dentro de las comillas

    "!claveparaseradmin": adminFun,
 
    // Command that need to know if a player is admin.
    "riv/titular/red": RIVTitularRedFun,
    "riv/titular/blue": RIVTitularBlueFun,
    "riv/alternativa/red": RIVAlternativaRedFun,
    "riv/alternativa/blue": RIVAlternativaBlueFun,
    "riv/tercera/red": RIVTerceraRedFun,
    "riv/tercera/blue": RIVTerceraBlueFun,
    "riv/titular/red/2018": RIVTitular2018RedFun,
    "riv/titular/blue/2018": RIVTitular2018BlueFun,
    "riv/alternativa/red/2018": RIVAlternativa2018RedFun,
    "riv/alternativa/blue/2018": RIVAlternativa2018BlueFun,
    "riv/titular/red/2017": RIVTitular2017RedFun,
    "riv/titular/blue/2017": RIVTitular2017BlueFun,
    "riv/alternativa/red/2017": RIVAlternativa2017RedFun,
    "riv/alternativa/blue/2017": RIVAlternativa2017BlueFun,
    "boc/titular/red": BOCTitularRedFun,
    "boc/titular/blue": BOCTitularBlueFun,
    "boc/alternativa/red": BOCAlternativaRedFun,
    "boc/alternativa/blue": BOCAlternativaBlueFun,
    "boc/titular/red/2018": BOCTitular2018RedFun,
    "boc/titular/blue/2018": BOCTitular2018BlueFun,
    "boc/alternativa/red/2018": BOCAlternativa2018RedFun,
    "boc/alternativa/blue/2018": BOCAlternativa2018BlueFun,
    "boc/titular/red/2017": BOCTitular2017RedFun,
    "boc/titular/blue/2017": BOCTitular2017BlueFun,
    "boc/alternativa/red/2017": BOCAlternativa2017RedFun,
    "boc/alternativa/blue/2017": BOCAlternativa2017BlueFun,
    "boc/tercera/red/2017": BOCTercera2017RedFun,
    "boc/tercera/blue/2017": BOCTercera2017BlueFun,
    "boc/titular/red/2016": BOCTitular2016RedFun,
    "boc/titular/blue/2016": BOCTitular2016BlueFun,
    "boc/alternativa/red/2016": BOCAlternativa2016RedFun,
    "boc/alternativa/blue/2016": BOCAlternativa2016BlueFun,
    "slo/titular/red": SLOTitularRedFun,
    "slo/titular/blue": SLOTitularBlueFun,
    "slo/alternativa/red": SLOAlternativaRedFun,
    "slo/alternativa/blue": SLOAlternativaBlueFun,
    "rac/titular/red": RACTitularRedFun,
    "rac/titular/blue": RACTitularBlueFun,
    "rac/alternativa/red": RACAlternativaRedFun,
    "rac/alternativa/blue": RACAlternativaBlueFun,
    "rac/tercera/red": RACTerceraRedFun,
    "rac/tercera/blue": RACTerceraBlueFun,
    "rac/alternativa2/red": RACAlternativa2RedFun,
    "rac/alternativa2/blue": RACAlternativa2BlueFun,
    "ind/titular/red": CAITitularRedFun,
    "ind/titular/blue": CAITitularBlueFun,
    "ind/alternativa/red": CAIAlternativaRedFun,
    "ind/alternativa/blue": CAIAlternativaBlueFun,
    "ald/titular/red": ALDTitularRedFun,
    "ald/titular/blue": ALDTitularBlueFun,
    "ald/alternativa/red": ALDAlternativaRedFun,
    "ald/alternativa/blue": ALDAlternativaBlueFun,
    "gim/titular/red": GIMTitularRedFun,
    "gim/titular/blue": GIMTitularBlueFun,
    "gim/alternativa/red": GIMAlternativaRedFun,
    "gim/alternativa/blue": GIMAlternativaBlueFun,
    "gim/tercera/red": GIMTerceraRedFun,
    "gim/tercera/blue": GIMTerceraBlueFun,
    "gim/alternativa/clasica/red": GIMAlternativaClasicaRedFun,
    "gim/alternativa/clasica/blue": GIMAlternativaClasicaBlueFun,
    "nob/titular/red": NOBTitularRedFun,
    "nob/titular/blue": NOBTitularBlueFun,
    "nob/alternativa/red": NOBAlternativaRedFun,
    "nob/alternativa/blue": NOBAlternativaBlueFun,
    "nob/tercera/red": NOBTerceraRedFun,
    "nob/tercera/blue": NOBTerceraBlueFun,
    "nob/rosa/red": NOBRosaRedFun,
    "nob/rosa/blue": NOBRosaBlueFun,
    "cen/titular/red": CENTitularRedFun,
    "cen/titular/blue": CENTitularBlueFun,
    "cen/alternativa/red": CENAlternativaRedFun,
    "cen/alternativa/blue": CENAlternativaBlueFun,
    "dyj/titular/red": DYJTitularRedFun,
    "dyj/titular/blue": DYJTitularBlueFun,
    "atm/titular/red": ATMTitularRedFun,
    "atm/titular/blue": ATMTitularBlueFun,
    "atm/alternativa/red": ATMAlternativaRedFun,
    "atm/alternativa/blue": ATMAlternativaBlueFun,
    "atm/tercera/red": ATMTerceraRedFun,
    "atm/tercera/blue": ATMTerceraBlueFun,
    "bar/titular/red": BARTitularRedFun,
    "bar/titular/blue": BARTitularBlueFun,
    "bar/alternativa/red": BARAlternativaRedFun,
    "bar/alternativa/blue": BARAlternativaBlueFun,
    "bar/tercera/red": BARTerceraRedFun,
    "bar/tercera/blue": BARTerceraBlueFun,
    "rma/titular/red": RMATitularRedFun,
    "rma/titular/blue": RMATitularBlueFun,
    "rma/alternativa/red": RMAAlternativaRedFun,
    "rma/alternativa/blue": RMAAlternativaBlueFun,
    "rma/tercera/red": RMATerceraRedFun,
    "rma/tercera/blue": RMATerceraBlueFun,
    "int/titular/red": INTTitularRedFun,
    "int/titular/blue": INTTitularBlueFun,
    "int/alternativa/red": INTAlternativaRedFun,
    "int/alternativa/blue": INTAlternativaBlueFun,
    "int/tercera/red": INTTerceraRedFun,
    "int/tercera/blue": INTTerceraBlueFun,
    "acm/titular/red": MILTitularRedFun,
    "acm/titular/blue": MILTitularBlueFun,
    "acm/alternativa/red": MILAlternativaRedFun,
    "acm/alternativa/blue": MILAlternativaBlueFun,
    "acm/tercera/red": MILTerceraRedFun,
    "acm/tercera/blue": MILTerceraBlueFun,
    "cru/titular/red": CRUTitularRedFun,
    "cru/titular/blue": CRUTitularBlueFun,
    "cru/alternativa/red": CRUAlternativaRedFun,
    "cru/alternativa/blue": CRUAlternativaBlueFun,
    "pal/titular/red": PALTitularRedFun,
    "pal/titular/blue": PALTitularBlueFun,
    "pal/alternativa/red": PALAlternativaRedFun,
    "pal/alternativa/blue": PALAlternativaBlueFun,
    "pal/tercera/red": PALTerceraRedFun,
    "pal/tercera/blue": PALTerceraBlueFun,
    "gre/titular/red": GRETitularRedFun,
    "gre/titular/blue": GRETitularBlueFun,
    "gre/alternativa/red": GREAlternativaRedFun,
    "gre/alternativa/blue": GREAlternativaBlueFun,
    "tot/titular/red": TOTTitularRedFun,
    "tot/titular/blue": TOTTitularBlueFun,
    "tot/alternativa/red": TOTAlternativaRedFun,
    "tot/alternativa/blue": TOTAlternativaBlueFun,
    "tot/tercera/red": TOTTerceraRedFun,
    "tot/tercera/blue": TOTTerceraBlueFun,
    "tot/titular/red/2018": TOTTitular2018RedFun,
    "tot/titular/blue/2018": TOTTitular2018BlueFun,
    "tot/alternativa/red/2018": TOTAlternativa2018RedFun,
    "tot/alternativa/blue/2018": TOTAlternativa2018BlueFun,
    "liv/titular/red": LIVTitularRedFun,
    "liv/titular/blue": LIVTitularBlueFun,
    "liv/alternativa/red": LIVAlternativaRedFun,
    "liv/alternativa/blue": LIVAlternativaBlueFun,
    "liv/tercera/red": LIVTerceraRedFun,
    "liv/tercera/blue": LIVTerceraBlueFun,
    "liv/titular/red/2018": LIVTitular2018RedFun,
    "liv/titular/blue/2018": LIVTitular2018BlueFun,
    "liv/alternativa/red/2018": LIVAlternativa2018RedFun,
    "liv/alternativa/blue/2018": LIVAlternativa2018BlueFun,
    "arg/titular/red": ARGTitularRedFun,
    "arg/titular/blue": ARGTitularBlueFun,
    "arg/alternativa/red": ARGAlternativaRedFun,
    "arg/alternativa/blue": ARGAlternativaBlueFun,
    "arg/titular/red/2018": ARGTitular2018RedFun,
    "arg/titular/blue/2018": ARGTitular2018BlueFun,
    "arg/titular/red/2016": ARGTitular2016RedFun,
    "arg/titular/blue/2016": ARGTitular2016BlueFun,
    "arg/alternativa/red/2016": ARGAlternativa2016RedFun,
    "arg/alternativa/blue/2016": ARGAlternativa2016BlueFun,
    "arg/bandera/red": ARGBanderaRedFun,
    "arg/bandera/blue": ARGBanderaBlueFun,
    "belg/titular/red": BelgicaTitularRedFun,
    "belg/titular/blue": BelgicaTitularBlueFun,
    "belg/alternativa/red": BelgicaAlternativaRedFun,
    "belg/alternativa/blue": BelgicaAlternativaBlueFun,
    "belg/bandera/red": BelgicaBanderaRedFun,
    "belg/bandera/blue": BelgicaBanderaBlueFun,
    "bra/titular/red": BRATitularRedFun,
    "bra/titular/blue": BRATitularBlueFun,
    "bra/alternativa/red": BRAAlternativaRedFun,
    "bra/alternativa/blue": BRAAlternativaBlueFun,
    "bra/tercera/red": BRATerceraRedFun,
    "bra/tercera/blue": BRATerceraBlueFun,
    "bra/retro/red": BRARetroRedFun,
    "bra/retro/blue": BRARetroBlueFun,
    "chi/titular/red": CHITitularRedFun,
    "chi/titular/blue": CHITitularBlueFun,
    "uru/titular/red": URUTitularRedFun,
    "uru/titular/blue": URUTitularBlueFun,
    "uru/alternativa/red": URUAlternativaRedFun,
    "uru/alternativa/blue": URUAlternativaBlueFun,
    "fra/titular/red": FRATitularRedFun,
    "fra/titular/blue": FRATitularBlueFun,
    "fra/alternativa/red": FRAAlternativaRedFun,
    "fra/alternativa/blue": FRAAlternativaBlueFun,
    "fra/bandera/red": FRABanderaRedFun,
    "fra/bandera/blue": FRABanderaBlueFun,
    "cro/titular/red": CROTitularRedFun,
    "cro/titular/blue": CROTitularBlueFun,
    "nap/titular/red": NAPTitularRedFun,
    "nap/titular/blue": NAPTitularBlueFun,
    "nap/alternativa/red": NAPAlternativaRedFun,
    "nap/alternativa/blue": NAPAlternativaBlueFun,
    "nap/titular/red/ucl": NAPTitularUCLRedFun,
    "nap/titular/blue/ucl": NAPTitularUCLBlueFun,
    "fcb/titular/red": FCBTitularRedFun,
    "fcb/titular/blue": FCBTitularBlueFun,
    "fcb/alternativa/red": FCBAlternativaRedFun,
    "fcb/alternativa/blue": FCBAlternativaBlueFun,
    "fcb/tercera/red": FCBTerceraRedFun,
    "fcb/tercera/blue": FCBTerceraBlueFun,
    "bvb/titular/red": BorussiaTitularRedFun,
    "bvb/titular/blue": BorussiaTitularBlueFun,
    "bvb/alternativa/red": BorussiaAlternativaRedFun,
    "bvb/alternativa/blue": BorussiaAlternativaBlueFun,
    "bvb/titular/red/ucl": BorussiaTitularChampionsRedFun,
    "bvb/titular/blue/ucl": BorussiaTitularChampionsBlueFun,
    "juv/titular/red": JuventusTitularRedFun,
    "juv/titular/blue": JuventusTitularBlueFun,
    "juv/alternativa/red": JuventusAlternativaRedFun,
    "juv/alternativa/blue": JuventusAlternativaBlueFun,
    "juv/tercera/red": JuventusTerceraRedFun,
    "juv/tercera/blue": JuventusTerceraBlueFun,
    "juv/cuarta/red": JuventusCuartaRedFun,
    "juv/cuarta/blue": JuventusCuartaBlueFun,
    "est/titular/red": EstudiantesTitularRedFun,
    "est/titular/blue": EstudiantesTitularBlueFun,
    "est/alternativa/red": EstudiantesAlternativaRedFun,
    "est/alternativa/blue": EstudiantesAlternativaBlueFun,
    "band/titular/red": BanfieldTitularRedFun,
    "band/titular/blue": BanfieldTitularBlueFun,
    "band/alternativa/red": BanfieldAlternativaRedFun,
    "band/alternativa/blue": BanfieldAlternativaBlueFun,
    "band/clasica/red": BanfieldClasicaRedFun,
    "band/clasica/blue": BanfieldClasicaBlueFun,
    "lan/titular/red": LanusTitularRedFun,
    "lan/titular/blue": LanusTitularBlueFun,
    "lan/alternativa/red": LanusAlternativaRedFun,
    "lan/alternativa/blue": LanusAlternativaBlueFun,
    "mun/titular/red": ManUnitedTitularRedFun,
    "mun/titular/blue": ManUnitedTitularBlueFun,
    "mun/alternativa/red": ManUnitedAlternativaRedFun,
    "mun/alternativa/blue": ManUnitedAlternativaBlueFun,
    "mun/tercera/red": ManUnitedTerceraRedFun,
    "mun/tercera/blue": ManUnitedTerceraBlueFun,
    "mci/titular/red": ManCityTitularRedFun,
    "mci/titular/blue": ManCityTitularBlueFun,
    "mci/titular/red/ucl": ManCityTitularChampionsRedFun,
    "mci/titular/blue/ucl": ManCityTitularChampionsBlueFun,
    "mci/alternativa/red": ManCityAlternativaRedFun,
    "mci/alternativa/blue": ManCityAlternativaBlueFun,
    "mci/tercera/red": ManCityTerceraRedFun,
    "mci/tercera/blue": ManCityTerceraBlueFun,
    "ars/titular/red": ArsenalTitularRedFun,
    "ars/titular/blue": ArsenalTitularBlueFun,
    "ars/alternativa/red": ArsenalAlternativaRedFun,
    "ars/alternativa/blue": ArsenalAlternativaBlueFun,
    "ars/tercera/red": ArsenalTerceraRedFun,
    "ars/tercera/blue": ArsenalTerceraBlueFun,
    "che/titular/red": ChelseaTitularRedFun,
    "che/titular/blue": ChelseaTitularBlueFun,
    "che/alternativa/red": ChelseaAlternativaRedFun,
    "che/alternativa/blue": ChelseaAlternativaBlueFun,
    "che/tercera/red": ChelseaTerceraRedFun,
    "che/tercera/blue": ChelseaTerceraBlueFun,
    "par/titular/red": ParanaenseTitularRedFun,
    "par/titular/blue": ParanaenseTitularBlueFun,
    "par/alternativa/red": ParanaenseAlternativaRedFun,
    "par/alternativa/blue": ParanaenseAlternativaBlueFun,
    "hur/titular/red": HuracanTitularRedFun,
    "hur/titular/blue": HuracanTitularBlueFun,
    "tig/titular/red": TigreTitularRedFun,
    "tig/titular/blue": TigreTitularBlueFun,
    "tig/alternativa/red": TigreAlternativaRedFun,
    "tig/alternativa/blue": TigreAlternativaBlueFun,
    "ale/titular/red": AlemaniaTitularRedFun,
    "ale/titular/blue": AlemaniaTitularBlueFun,
    "ale/bandera/red": AlemaniaBanderaRedFun,
    "ale/bandera/blue": AlemaniaBanderaBlueFun,
    "esp/titular/red": EspanaTitularRedFun,
    "esp/titular/blue": EspanaTitularBlueFun,
    "esp/alternativa/red": EspanaAlternativaRedFun,
    "esp/alternativa/blue": EspanaAlternativaBlueFun,
    "esp/bandera/red": EspanaBanderaRedFun,
    "esp/bandera/blue": EspanaBanderaBlueFun,
    "por/titular/red": PortugalTitularRedFun,
    "por/titular/blue": PortugalTitularBlueFun,
    "por/alternativa/red": PortugalAlternativaRedFun,
    "por/alternativa/blue": PortugalAlternativaBlueFun,
    "aaaj/titular/red": ArgentinosJrsTitularRedFun,
    "aaaj/titular/blue": ArgentinosJrsTitularBlueFun,
    "alb/titular/red": AllBoysTitularRedFun,
    "alb/titular/blue": AllBoysTitularBlueFun,
    "alb/alternativa/red": AllBoysAlternativaRedFun,
    "alb/alternativa/blue": AllBoysAlternativaBlueFun,
    "atl/titular/red": AtlantaTitularRedFun,
    "atl/titular/blue": AtlantaTitularBlueFun,
    "bel/titular/red": BelgranoTitularRedFun,
    "bel/titular/blue": BelgranoTitularBlueFun,
    "cha/titular/red": ChacaritaTitularRedFun,
    "cha/titular/blue": ChacaritaTitularBlueFun,
    "tal/titular/red": TalleresTitularRedFun,
    "tal/titular/blue": TalleresTitularBlueFun,
    "tal/alternativa/red": TalleresAlternativaRedFun,
    "tal/alternativa/blue": TalleresAlternativaBlueFun,
    "pla/titular/red": PlatenseTitularRedFun,
    "pla/titular/blue": PlatenseTitularBlueFun,
    "olp/titular/red": OlimpoTitularRedFun,
    "olp/titular/blue": OlimpoTitularBlueFun,
    "smt/titular/red": SanMartinTucumanTitularRedFun,
    "smt/titular/blue": SanMartinTucumanTitularBlueFun,
    "atu/titular/red": AtlTucumanTitularRedFun,
    "atu/titular/blue": AtlTucumanTitularBlueFun,
    "atu/alternativa/red": AtlTucumanAlternativaRedFun,
    "atu/alternativa/blue": AtlTucumanAlternativaBlueFun,
    "fco/titular/red": FerroTitularRedFun,
    "fco/titular/blue": FerroTitularBlueFun,
    "nac/titular/red": NacionalTitularRedFun,
    "nac/titular/blue": NacionalTitularBlueFun,
    "nac/alternativa/red": NacionalAlternativaRedFun,
    "nac/alternativa/blue": NacionalAlternativaBlueFun,
    "pen/titular/red": PenarolTitularRedFun,
    "pen/titular/blue": PenarolTitularBlueFun,
    "qui/titular/red": QuilmesTitularRedFun,
    "qui/titular/blue": QuilmesTitularBlueFun,
    "qui/alternativa/red": QuilmesAlternativaRedFun,
    "qui/alternativa/blue": QuilmesAlternativaBlueFun,
    "nch/titular/red": ChicagoTitularRedFun,
    "nch/titular/blue": ChicagoTitularBlueFun,
    "mor/titular/red": MoronTitularRedFun,
    "mor/titular/blue": MoronTitularBlueFun,
    "uni/titular/red": UnionTitularRedFun,
    "uni/titular/blue": UnionTitularBlueFun,
    "uni/alternativa/red": UnionAlternativaRedFun,
    "uni/alternativa/blue": UnionAlternativaBlueFun,
    "csf/titular/red": ColonTitularRedFun,
    "csf/titular/blue": ColonTitularBlueFun,
    "csf/alternativa/red": ColonAlternativaRedFun,
    "csf/alternativa/blue": ColonAlternativaBlueFun,
    "csf/tercera/red": ColonTerceraRedFun,
    "csf/tercera/blue": ColonTerceraBlueFun,
    "arse/titular/red": SarandiTitularRedFun,
    "arse/titular/blue": SarandiTitularBlueFun,
    "arse/alternativa/red": SarandiAlternativaRedFun,
    "arse/alternativa/blue": SarandiAlternativaBlueFun,
    "arse/tercera/red": SarandiTerceraRedFun,
    "arse/tercera/blue": SarandiTerceraBlueFun,
    "doc/titular/red": DocksudTitularRedFun,
    "doc/titular/blue": DocksudTitularBlueFun,
    "col/titular/red": ColombiaTitularRedFun,
    "col/titular/blue": ColombiaTitularBlueFun,
    "col/alternativa/red": ColombiaAlternativaRedFun,
    "col/alternativa/blue": ColombiaAlternativaBlueFun,
    "col/bandera/red": ColombiaBanderaRedFun,
    "col/bandera/blue": ColombiaBanderaBlueFun,
    "per/titular/red": PeruTitularRedFun,
    "per/titular/blue": PeruTitularBlueFun,
    "qat/titular/red": QatarTitularRedFun,
    "qat/titular/blue": QatarTitularBlueFun,
    "pgy/titular/red": ParaguayTitularRedFun,
    "pgy/titular/blue": ParaguayTitularBlueFun,
    "pgy/alternativa/red": ParaguayAlternativaRedFun,
    "pgy/alternativa/blue": ParaguayAlternativaBlueFun,
    "ven/titular/red": VenezuelaTitularRedFun,
    "ven/titular/blue": VenezuelaTitularBlueFun,
    "ven/alternativa/red": VenezuelaAlternativaRedFun,
    "ven/alternativa/blue": VenezuelaAlternativaBlueFun,
    "wba/titular/red": WestBromTitularRedFun,
    "wba/titular/blue": WestBromTitularBlueFun,
    "avl/titular/red": AstonVillaTitularRedFun,
    "avl/titular/blue": AstonVillaTitularBlueFun,
    "ful/titular/red": FulhamTitularRedFun,
    "ful/titular/blue": FulhamTitularBlueFun,
    "ful/alternativa/red": FulhamAlternativaRedFun,
    "ful/alternativa/blue": FulhamAlternativaBlueFun,
    "ful/clasica/red": FulhamClasicaRedFun,
    "ful/clasica/blue": FulhamClasicaBlueFun,
    "lei/titular/red": LeicesterTitularRedFun,
    "lei/titular/blue": LeicesterTitularBlueFun,
    "dan/titular/red": DanubioTitularRedFun,
    "dan/titular/blue": DanubioTitularBlueFun,
    "ram/titular/red": RamplaJrsTitularRedFun,
    "ram/titular/blue": RamplaJrsTitularBlueFun,
    "sch/titular/red": SacachispasTitularRedFun,
    "sch/titular/blue": SacachispasTitularBlueFun,
    "hol/titular/red": HolandaTitularRedFun,
    "hol/titular/blue": HolandaTitularBlueFun,
    "hol/bandera/red": HolandaBanderaRedFun,
    "hol/bandera/blue": HolandaBanderaBlueFun,
    "hol/alternativa/red": HolandaAlternativaRedFun,
    "hol/alternativa/blue": HolandaAlternativaBlueFun,
    "hol/retro/red": HolandaRetroRedFun,
    "hol/retro/blue": HolandaRetroBlueFun,
    "bol/titular/red": BoliviaTitularRedFun,
    "bol/titular/blue": BoliviaTitularBlueFun,
    "ita/titular/red": ItaliaTitularRedFun,
    "ita/titular/blue": ItaliaTitularBlueFun,
    "ita/alternativa/red": ItaliaAlternativaRedFun,
    "ita/alternativa/blue": ItaliaAlternativaBlueFun,
    "ita/bandera/red": ItaliaBanderaRedFun,
    "ita/bandera/blue": ItaliaBanderaBlueFun,
    "ita/retro/red": ItaliaRetroRedFun,
    "ita/retro/blue": ItaliaRetroBlueFun,
    "ing/titular/red": InglaterraTitularRedFun,
    "ing/titular/blue": InglaterraTitularBlueFun,
    "ing/alternativa/red": InglaterraAlternativaRedFun,
    "ing/alternativa/blue": InglaterraAlternativaBlueFun,
    "aja/titular/red": AjaxTitularRedFun,
    "aja/titular/blue": AjaxTitularBlueFun,
    "aja/alternativa/red": AjaxAlternativaRedFun,
    "aja/alternativa/blue": AjaxAlternativaBlueFun,
    "aja/alternativa/red/2018": AjaxAlternativa2018RedFun,
    "aja/alternativa/blue/2018": AjaxAlternativa2018BlueFun,
    "psv/titular/red": PSVTitularRedFun,
    "psv/titular/blue": PSVTitularBlueFun,
    "fey/titular/red": FEYTitularRedFun,
    "fey/titular/blue": FEYTitularBlueFun,
    "psg/titular/red": PSGTitularRedFun,
    "psg/titular/blue": PSGTitularBlueFun,
    "psg/alternativa/red": PSGAlternativaRedFun,
    "psg/alternativa/blue": PSGAlternativaBlueFun,
    "psg/tercera/red": PSGTerceraRedFun,
    "psg/tercera/blue": PSGTerceraBlueFun,
    "psg/entrenamiento/red": PSGEntrenamientoRedFun,
    "psg/entrenamiento/blue": PSGEntrenamientoBlueFun,
    "ccs/titular/red": CentralCordobaSdETitularRedFun,
    "ccs/titular/blue": CentralCordobaSdETitularBlueFun,
    "ccs/alternativa/red": CentralCordobaSdEAlternativaRedFun,
    "ccs/alternativa/blue": CentralCordobaSdEAlternativaBlueFun,
    "ccs/tercera/red": CentralCordobaSdETerceraRedFun,
    "ccs/tercera/blue": CentralCordobaSdETerceraBlueFun,
    "rie/titular/red": RiestraTitularRedFun,
    "rie/titular/blue": RiestraTitularBlueFun,
    "rie/alternativa/red": RiestraAlternativaRedFun,
    "rie/alternativa/blue": RiestraAlternativaBlueFun,
    "om/titular/red": OlympiqueMarsellaTitularRedFun,
    "om/titular/blue": OlympiqueMarsellaTitularBlueFun,
    "om/alternativa/red": OlympiqueMarsellaAlternativaRedFun,
    "om/alternativa/blue": OlympiqueMarsellaAlternativaBlueFun,
    "ogc/titular/red": OGCNiceTitularRedFun,
    "ogc/titular/blue": OGCNiceTitularBlueFun,
    "rom/titular/red": ASRomaTitularRedFun,
    "rom/titular/blue": ASRomaTitularBlueFun,
    "rom/alternativa/red": ASRomaAlternativaRedFun,
    "rom/alternativa/blue": ASRomaAlternativaBlueFun,
    "rom/tercera/red": ASRomaTerceraRedFun,
    "rom/tercera/blue": ASRomaTerceraBlueFun,
    "fio/titular/red": FiorentinaTitularRedFun,
    "fio/titular/blue": FiorentinaTitularBlueFun,
    "laz/titular/red": LazioTitularRedFun,
    "laz/titular/blue": LazioTitularBlueFun,
    "laz/alternativa/red": LazioAlternativaRedFun,
    "laz/alternativa/blue": LazioAlternativaBlueFun,
    "laz/tercera/red": LazioTerceraRedFun,
    "laz/tercera/blue": LazioTerceraBlueFun,
    "smsj/titular/red": SMSanJuanTitularRedFun,
    "smsj/titular/blue": SMSanJuanTitularBlueFun,
    "smsj/alternativa/red": SMSanJuanAlternativaRedFun,
    "smsj/alternativa/blue": SMSanJuanAlternativaBlueFun,
    "god/titular/red": GodoyCruzTitularRedFun,
    "god/titular/blue": GodoyCruzTitularBlueFun,
    "god/alternativa/red": GodoyCruzAlternativaRedFun,
    "god/alternativa/blue": GodoyCruzAlternativaBlueFun,
    "god/tercera/red": GodoyCruzTerceraRedFun,
    "god/tercera/blue": GodoyCruzTerceraBlueFun,
    "vel/titular/red": VelezTitularRedFun,
    "vel/titular/blue": VelezTitularBlueFun,
    "san/titular/red": SantosTitularRedFun,
    "san/titular/blue": SantosTitularBlueFun,
    "san/alternativa/red": SantosAlternativaRedFun,
    "san/alternativa/blue": SantosAlternativaBlueFun,
    "san/tercera/red": SantosTerceraRedFun,
    "san/tercera/blue": SantosTerceraBlueFun,
    "fla/titular/red": FlamengoTitularRedFun,
    "fla/titular/blue": FlamengoTitularBlueFun,
    "fla/alternativa/red": FlamengoAlternativaRedFun,
    "fla/alternativa/blue": FlamengoAlternativaBlueFun,
    "fla/tercera/red": FlamengoTerceraRedFun,
    "fla/tercera/blue": FlamengoTerceraBlueFun,
    "fla/titular/red/2018": FlamengoTitular2018RedFun,
    "fla/titular/blue/2018": FlamengoTitular2018BlueFun,
    "fla/alternativa/red/2018": FlamengoAlternativa2018RedFun,
    "fla/alternativa/blue/2018": FlamengoAlternativa2018BlueFun,
    "fla/tercera/red/2018": FlamengoTercera2018RedFun,
    "fla/tercera/blue/2018": FlamengoTercera2018BlueFun,
    "sao/titular/red": SaoPauloTitularRedFun,
    "sao/titular/blue": SaoPauloTitularBlueFun,
    "sao/alternativa/red": SaoPauloAlternativaRedFun,
    "sao/alternativa/blue": SaoPauloAlternativaBlueFun,
    "cor/titular/red": CorinthiansTitularRedFun,
    "cor/titular/blue": CorinthiansTitularBlueFun,
    "cor/alternativa/red": CorinthiansAlternativaRedFun,
    "cor/alternativa/blue": CorinthiansAlternativaBlueFun,
    "cam/titular/red": MineiroTitularRedFun,
    "cam/titular/blue": MineiroTitularBlueFun,
    "cam/alternativa/red": MineiroAlternativaRedFun,
    "cam/alternativa/blue": MineiroAlternativaBlueFun,
    "sci/titular/red": SCInternacionalTitularRedFun,
    "sci/titular/blue": SCInternacionalTitularBlueFun,
    "sci/alternativa/red": SCInternacionalAlternativaRedFun,
    "sci/alternativa/blue": SCInternacionalAlternativaBlueFun,
    "vas/titular/red": VascoDaGamaTitularRedFun,
    "vas/titular/blue": VascoDaGamaTitularBlueFun,
    "vas/alternativa/red": VascoDaGamaAlternativaRedFun,
    "vas/alternativa/blue": VascoDaGamaAlternativaBlueFun,
    "bot/titular/red": BotafogoTitularRedFun,
    "bot/titular/blue": BotafogoTitularBlueFun,
    "bot/alternativa/red": BotafogoAlternativaRedFun,
    "bot/alternativa/blue": BotafogoAlternativaBlueFun,
    "flu/titular/red": FluminenseTitularRedFun,
    "flu/titular/blue": FluminenseTitularBlueFun,
    "atn/titular/red": AtlNacionalTitularRedFun,
    "atn/titular/blue": AtlNacionalTitularBlueFun,
    "atn/alternativa/red": AtlNacionalAlternativaRedFun,
    "atn/alternativa/blue": AtlNacionalAlternativaBlueFun,
    "mil/titular/red": MillonariosTitularRedFun,
    "mil/titular/blue": MillonariosTitularBlueFun,
    "mil/alternativa/red": MillonariosAlternativaRedFun,
    "mil/alternativa/blue": MillonariosAlternativaBlueFun,
    "ame/titular/red": AmericaDeCaliTitularRedFun,
    "ame/titular/blue": AmericaDeCaliTitularBlueFun,
    "ame/alternativa/red": AmericaDeCaliAlternativaRedFun,
    "ame/alternativa/blue": AmericaDeCaliAlternativaBlueFun,
    "sfe/titular/red": SantaFeTitularRedFun,
    "sfe/titular/blue": SantaFeTitularBlueFun,
    "sfe/alternativa/red": SantaFeAlternativaRedFun,
    "sfe/alternativa/blue": SantaFeAlternativaBlueFun,
    "cal/titular/red": DeportivoCaliTitularRedFun,
    "cal/titular/blue": DeportivoCaliTitularBlueFun,
    "cal/alternativa/red": DeportivoCaliAlternativaRedFun,
    "cal/alternativa/blue": DeportivoCaliAlternativaBlueFun,
    "onc/titular/red": OnceCaldasTitularRedFun,
    "onc/titular/blue": OnceCaldasTitularBlueFun,
    "onc/alternativa/red": OnceCaldasAlternativaRedFun,
    "onc/alternativa/blue": OnceCaldasAlternativaBlueFun,
    "onc/tercera/red": OnceCaldasTerceraRedFun,
    "onc/tercera/blue": OnceCaldasTerceraBlueFun,
    "ccp/titular/red": CerroTitularRedFun,
    "ccp/titular/blue": CerroTitularBlueFun,
    "ccp/alternativa/red": CerroAlternativaRedFun,
    "ccp/alternativa/blue": CerroAlternativaBlueFun,
    "oli/titular/red": OlimpiaTitularRedFun,
    "oli/titular/blue": OlimpiaTitularBlueFun,
    "oli/alternativa/red": OlimpiaAlternativaRedFun,
    "oli/alternativa/blue": OlimpiaAlternativaBlueFun,
    "gua/titular/red": GuaraniTitularRedFun,
    "gua/titular/blue": GuaraniTitularBlueFun,
    "gua/alternativa/red": GuaraniAlternativaRedFun,
    "gua/alternativa/blue": GuaraniAlternativaBlueFun,
    "lib/titular/red": LibertadTitularRedFun,
    "lib/titular/blue": LibertadTitularBlueFun,
    "lib/alternativa/red": LibertadAlternativaRedFun,
    "lib/alternativa/blue": LibertadAlternativaBlueFun,
    "sou/titular/red": SouthamptonTitularRedFun,
    "sou/titular/blue": SouthamptonTitularBlueFun,
    "sou/alternativa/red": SouthamptonAlternativaRedFun,
    "sou/alternativa/blue": SouthamptonAlternativaBlueFun,
    "wat/titular/red": WatfordTitularRedFun,
    "wat/titular/blue": WatfordTitularBlueFun,
    "wil/titular/red": WillemIITitularRedFun,
    "wil/titular/blue": WillemIITitularBlueFun,
    "wil/alternativa/red": WillemIIAlternativaRedFun,
    "wil/alternativa/blue": WillemIIAlternativaBlueFun,
    "wil/tercera/red": WillemIITerceraRedFun,
    "wil/tercera/blue": WillemIITerceraBlueFun,
    "alv/titular/red": AlvaradoTitularRedFun,
    "alv/titular/blue": AlvaradoTitularBlueFun,
    "alv/alternativa/red": AlvaradoAlternativaRedFun,
    "alv/alternativa/blue": AlvaradoAlternativaBlueFun,
    "agr/titular/red": AgropecuarioTitularRedFun,
    "agr/titular/blue": AgropecuarioTitularBlueFun,
    "agr/alternativa/red": AgropecuarioAlternativaRedFun,
    "agr/alternativa/blue": AgropecuarioAlternativaBlueFun,
    "riu/titular/red": RiverURUTitularRedFun,
    "riu/titular/blue": RiverURUTitularBlueFun,
    "riu/alternativa/red": RiverURUAlternativaRedFun,
    "riu/alternativa/blue": RiverURUAlternativaBlueFun,
    "gs/titular/red": GalatasarayTitularRedFun,
    "gs/titular/blue": GalatasarayTitularBlueFun,
    "gs/alternativa/red": GalatasarayAlternativaRedFun,
    "gs/alternativa/blue": GalatasarayAlternativaBlueFun,
    "gs/tercera/red": GalatasarayTerceraRedFun,
    "gs/tercera/blue": GalatasarayTerceraBlueFun,
    "fb/titular/red": FenerbahceTitularRedFun,
    "fb/titular/blue": FenerbahceTitularBlueFun,
    "fb/alternativa/red": FenerbahceAlternativaRedFun,
    "fb/alternativa/blue": FenerbahceAlternativaBlueFun,
    "bjk/titular/red": BesiktasTitularRedFun,
    "bjk/titular/blue": BesiktasTitularBlueFun,
    "bjk/alternativa/red": BesiktasAlternativaRedFun,
    "bjk/alternativa/blue": BesiktasAlternativaBlueFun,
    "amc/titular/red": AmericaMXTitularRedFun,
    "amc/titular/blue": AmericaMXTitularBlueFun,
    "amc/alternativa/red": AmericaMXAlternativaRedFun,
    "amc/alternativa/blue": AmericaMXAlternativaBlueFun,
    "cruz/titular/red": CruzAzulTitularRedFun,
    "cruz/titular/blue": CruzAzulTitularBlueFun,
    "cruz/alternativa/red": CruzAzulAlternativaRedFun,
    "cruz/alternativa/blue": CruzAzulAlternativaBlueFun,
    "mty/titular/red": MonterreyTitularRedFun,
    "mty/titular/blue": MonterreyTitularBlueFun,
    "chv/titular/red": ChivasTitularRedFun,
    "chv/titular/blue": ChivasTitularBlueFun,
    "tgs/titular/red": TigresTitularRedFun,
    "tgs/titular/blue": TigresTitularBlueFun,
    "ldu/titular/red": LigaDeQuitoTitularRedFun,
    "ldu/titular/blue": LigaDeQuitoTitularBlueFun,
    "ldu/alternativa/red": LigaDeQuitoAlternativaRedFun,
    "ldu/alternativa/blue": LigaDeQuitoAlternativaBlueFun,
    "ldu/tercera/red": LigaDeQuitoTerceraRedFun,
    "ldu/tercera/blue": LigaDeQuitoTerceraBlueFun,
    "bsc/titular/red": BarcelonaSCTitularRedFun,
    "bsc/titular/blue": BarcelonaSCTitularBlueFun,
    "bsc/alternativa/red": BarcelonaSCAlternativaRedFun,
    "bsc/alternativa/blue": BarcelonaSCAlternativaBlueFun,
    "eme/titular/red": EmelecTitularRedFun,
    "eme/titular/blue": EmelecTitularBlueFun,
    "eme/alternativa/red": EmelecAlternativaRedFun,
    "eme/alternativa/blue": EmelecAlternativaBlueFun,
    "idv/titular/red": IndependienteDelValleTitularRedFun,
    "idv/titular/blue": IndependienteDelValleTitularBlueFun,
    "idv/alternativa/red": IndependienteDelValleAlternativaRedFun,
    "idv/alternativa/blue": IndependienteDelValleAlternativaBlueFun,
    "ol/titular/red": OlympiqueLyonTitularRedFun,
    "ol/titular/blue": OlympiqueLyonTitularBlueFun,
    "ol/alternativa/red": OlympiqueLyonAlternativaRedFun,
    "ol/alternativa/blue": OlympiqueLyonAlternativaBlueFun,
    "stel/titular/red": SanTelmoTitularRedFun,
    "stel/titular/blue": SanTelmoTitularBlueFun,
    "stel/alternativa/red": SanTelmoAlternativaRedFun,
    "stel/alternativa/blue": SanTelmoAlternativaBlueFun,
    "adq/titular/red": ArgentinoDeQuilmesTitularRedFun,
    "adq/titular/blue": ArgentinoDeQuilmesTitularBlueFun,
    "adq/alternativa/red": ArgentinoDeQuilmesAlternativaRedFun,
    "adq/alternativa/blue": ArgentinoDeQuilmesAlternativaBlueFun,
    "mer/titular/red": DeportivoMerloTitularRedFun,
    "mer/titular/blue": DeportivoMerloTitularBlueFun,
    "mer/alternativa/red": DeportivoMerloAlternativaRedFun,
    "mer/alternativa/blue": DeportivoMerloAlternativaBlueFun,
    "mer/tercera/red": DeportivoMerloTerceraRedFun,
    "mer/tercera/blue": DeportivoMerloTerceraBlueFun,
    "val/titular/red": ValenciaTitularRedFun,
    "val/titular/blue": ValenciaTitularBlueFun,
    "val/alternativa/red": ValenciaAlternativaRedFun,
    "val/alternativa/blue": ValenciaAlternativaBlueFun,
    "val/tercera/red": ValenciaTerceraRedFun,
    "val/tercera/blue": ValenciaTerceraBlueFun,
    "cry/titular/red": CrystalPalaceTitularRedFun,
    "cry/titular/blue": CrystalPalaceTitularBlueFun,
    "cry/alternativa/red": CrystalPalaceAlternativaRedFun,
    "cry/alternativa/blue": CrystalPalaceAlternativaBlueFun,
    "cry/tercera/red": CrystalPalaceTerceraRedFun,
    "cry/tercera/blue": CrystalPalaceTerceraBlueFun,
    "bet/titular/red": BetisTitularRedFun,
    "bet/titular/blue": BetisTitularBlueFun,
    "cja/titular/red": JuventudAntonianaTitularRedFun,
    "cja/titular/blue": JuventudAntonianaTitularBlueFun,
    "cja/alternativa/red": JuventudAntonianaAlternativaRedFun,
    "cja/alternativa/blue": JuventudAntonianaAlternativaBlueFun,
    "cja/tercera/red": JuventudAntonianaTerceraRedFun,
    "cja/tercera/blue": JuventudAntonianaTerceraBlueFun,
    "gyt/titular/red": GimnasiaYTiroTitularRedFun,
    "gyt/titular/blue": GimnasiaYTiroTitularBlueFun,
    "gyt/alternativa/red": GimnasiaYTiroAlternativaRedFun,
    "gyt/alternativa/blue": GimnasiaYTiroAlternativaBlueFun,
    "gyt/tercera/red": GimnasiaYTiroTerceraRedFun,
    "gyt/tercera/blue": GimnasiaYTiroTerceraBlueFun,
    "ray/titular/red": RayoVallecanoTitularRedFun,
    "ray/titular/blue": RayoVallecanoTitularBlueFun,
    "ray/alternativa/red": RayoVallecanoAlternativaRedFun,
    "ray/alternativa/blue": RayoVallecanoAlternativaBlueFun,
    "ray/tercera/red": RayoVallecanoTerceraRedFun,
    "ray/tercera/blue": RayoVallecanoTerceraBlueFun,
    "lev/titular/red": LevanteTitularRedFun,
    "lev/titular/blue": LevanteTitularBlueFun,
    "lev/alternativa/red": LevanteAlternativaRedFun,
    "lev/alternativa/blue": LevanteAlternativaBlueFun,
    "lev/tercera/red": LevanteTerceraRedFun,
    "lev/tercera/blue": LevanteTerceraBlueFun,
    "pat/titular/red": PatronatoTitularRedFun,
    "pat/titular/blue": PatronatoTitularBlueFun,
    "pat/alternativa/red": PatronatoAlternativaRedFun,
    "pat/alternativa/blue": PatronatoAlternativaBlueFun,
    "get/titular/red": GetafeTitularRedFun,
    "get/titular/blue": GetafeTitularBlueFun,
    "get/alternativa/red": GetafeAlternativaRedFun,
    "get/alternativa/blue": GetafeAlternativaBlueFun,
    "zen/titular/red": ZenitTitularRedFun,
    "zen/titular/blue": ZenitTitularBlueFun,
    "zen/alternativa/red": ZenitAlternativaRedFun,
    "zen/alternativa/blue": ZenitAlternativaBlueFun,
    "csk/titular/red": CSKAMoscuTitularRedFun,
    "csk/titular/blue": CSKAMoscuTitularBlueFun,
    "csk/alternativa/red": CSKAMoscuAlternativaRedFun,
    "csk/alternativa/blue": CSKAMoscuAlternativaBlueFun,
    "csk/tercera/red": CSKAMoscuTerceraRedFun,
    "csk/tercera/blue": CSKAMoscuTerceraBlueFun,
    "lok/titular/red": LokomotivTitularRedFun,
    "lok/titular/blue": LokomotivTitularBlueFun,
    "lok/alternativa/red": LokomotivAlternativaRedFun,
    "lok/alternativa/blue": LokomotivAlternativaBlueFun,
    "lok/tercera/red": LokomotivTerceraRedFun,
    "lok/tercera/blue": LokomotivTerceraBlueFun,
    "spm/titular/red": SpartakTitularRedFun,
    "spm/titular/blue": SpartakTitularBlueFun,
    "spm/alternativa/red": SpartakAlternativaRedFun,
    "spm/alternativa/blue": SpartakAlternativaBlueFun,
    "din/titular/red": DynamoMoscowTitularRedFun,
    "din/titular/blue": DynamoMoscowTitularBlueFun,
    "din/alternativa/red": DynamoMoscowAlternativaRedFun,
    "din/alternativa/blue": DynamoMoscowAlternativaBlueFun,
    "dyk/titular/red": DynamoKievTitularRedFun,
    "dyk/titular/blue": DynamoKievTitularBlueFun,
    "dyk/alternativa/red": DynamoKievAlternativaRedFun,
    "dyk/alternativa/blue": DynamoKievAlternativaBlueFun,
    "sha/titular/red": ShakhtarTitularRedFun,
    "sha/titular/blue": ShakhtarTitularBlueFun,
    "sha/alternativa/red": ShakhtarAlternativaRedFun,
    "sha/alternativa/blue": ShakhtarAlternativaBlueFun,
    "jap/titular/red": JaponTitularRedFun,
    "jap/titular/blue": JaponTitularBlueFun,
    "jap/alternativa/red": JaponAlternativaRedFun,
    "jap/alternativa/blue": JaponAlternativaBlueFun,
    "nze/titular/red": NuevaZelandaTitularRedFun,
    "nze/titular/blue": NuevaZelandaTitularBlueFun,
    "nze/alternativa/red": NuevaZelandaAlternativaRedFun,
    "nze/alternativa/blue": NuevaZelandaAlternativaBlueFun,
    "csu/titular/red": CoreaDelSurTitularRedFun,
    "csu/titular/blue": CoreaDelSurTitularBlueFun,
    "csu/alternativa/red": CoreaDelSurAlternativaRedFun,
    "csu/alternativa/blue": CoreaDelSurAlternativaBlueFun,
    "aut/titular/red": AustriaTitularRedFun,
    "aut/titular/blue": AustriaTitularBlueFun,
    "aut/alternativa/red": AustriaAlternativaRedFun,
    "aut/alternativa/blue": AustriaAlternativaBlueFun,
    "aut/bandera/red": AustriaBanderaRedFun,
    "aut/bandera/blue": AustriaBanderaBlueFun,
    "cno/titular/red": CoreaDelNorteTitularRedFun,
    "cno/titular/blue": CoreaDelNorteTitularBlueFun,
    "cno/alternativa/red": CoreaDelNorteAlternativaRedFun,
    "cno/alternativa/blue": CoreaDelNorteAlternativaBlueFun,
    "cno/bandera/red": CoreaDelNorteBanderaRedFun,
    "cno/bandera/blue": CoreaDelNorteBanderaBlueFun,
    "la/titular/red": LAGalaxyTitularRedFun,
    "la/titular/blue": LAGalaxyTitularBlueFun,
    "la/alternativa/red": LAGalaxyAlternativaRedFun,
    "la/alternativa/blue": LAGalaxyAlternativaBlueFun,
    "lafc/titular/red": LosAngelesFCTitularRedFun,
    "lafc/titular/blue": LosAngelesFCTitularBlueFun,
    "lafc/alternativa/red": LosAngelesFCAlternativaRedFun,
    "lafc/alternativa/blue": LosAngelesFCAlternativaBlueFun,
    "ptim/titular/red": PortlandTimbersTitularRedFun,
    "ptim/titular/blue": PortlandTimbersTitularBlueFun,
    "ptim/alternativa/red": PortlandTimbersAlternativaRedFun,
    "ptim/alternativa/blue": PortlandTimbersAlternativaBlueFun,
    "sea/titular/red": SeattleSoundersTitularRedFun,
    "sea/titular/blue": SeattleSoundersTitularBlueFun,
    "sea/alternativa/red": SeattleSoundersAlternativaRedFun,
    "sea/alternativa/blue": SeattleSoundersAlternativaBlueFun,
    "nyrb/titular/red": NewYorkRedBullTitularRedFun,
    "nyrb/titular/blue": NewYorkRedBullTitularBlueFun,
    "nyrb/alternativa/red": NewYorkRedBullAlternativaRedFun,
    "nyrb/alternativa/blue": NewYorkRedBullAlternativaBlueFun,
    "nyc/titular/red": NewYorkCityTitularRedFun,
    "nyc/titular/blue": NewYorkCityTitularBlueFun,
    "nyc/alternativa/red": NewYorkCityAlternativaRedFun,
    "nyc/alternativa/blue": NewYorkCityAlternativaBlueFun,
    "tofc/titular/red": TorontoFCTitularRedFun,
    "tofc/titular/blue": TorontoFCTitularBlueFun,
    "tofc/alternativa/red": TorontoFCAlternativaRedFun,
    "tofc/alternativa/blue": TorontoFCAlternativaBlueFun,
    "atlu/titular/red": AtlantaUnitedTitularRedFun,
    "atlu/titular/blue": AtlantaUnitedTitularBlueFun,
    "atlu/alternativa/red": AtlantaUnitedAlternativaRedFun,
    "atlu/alternativa/blue": AtlantaUnitedAlternativaBlueFun,
    "blv/titular/red": BolivarTitularRedFun,
    "blv/titular/blue": BolivarTitularBlueFun,
    "blv/alternativa/red": BolivarAlternativaRedFun,
    "blv/alternativa/blue": BolivarAlternativaBlueFun,
    "stg/titular/red": StrongestTitularRedFun,
    "stg/titular/blue": StrongestTitularBlueFun,
    "stg/alternativa/red": StrongestAlternativaRedFun,
    "stg/alternativa/blue": StrongestAlternativaBlueFun,
    "wtm/titular/red": WilstermannTitularRedFun,
    "wtm/titular/blue": WilstermannTitularBlueFun,
    "wtm/alternativa/red": WilstermannAlternativaRedFun,
    "wtm/alternativa/blue": WilstermannAlternativaBlueFun,
    "cco/titular/red": ColoColoTitularRedFun,
    "cco/titular/blue": ColoColoTitularBlueFun,
    "cco/alternativa/red": ColoColoAlternativaRedFun,
    "cco/alternativa/blue": ColoColoAlternativaBlueFun,
    "udc/titular/red": UdeChileTitularRedFun,
    "udc/titular/blue": UdeChileTitularBlueFun,
    "udc/alternativa/red": UdeChileAlternativaRedFun,
    "udc/alternativa/blue": UdeChileAlternativaBlueFun,
    "eve/titular/red": EvertonFCTitularRedFun,
    "eve/titular/blue": EvertonFCTitularBlueFun,
    "eve/alternativa/red": EvertonFCAlternativaRedFun,
    "eve/alternativa/blue": EvertonFCAlternativaBlueFun,
    "asm/titular/red": ASMonacoTitularRedFun,
    "asm/titular/blue": ASMonacoTitularBlueFun,
    "asm/alternativa/red": ASMonacoAlternativaRedFun,
    "asm/alternativa/blue": ASMonacoAlternativaBlueFun,
    "asm/tercera/red": ASMonacoTerceraRedFun,
    "asm/tercera/blue": ASMonacoTerceraBlueFun,
    "ata/titular/red": AtalantaTitularRedFun,
    "ata/titular/blue": AtalantaTitularBlueFun,
    "ata/alternativa/red": AtalantaAlternativaRedFun,
    "ata/alternativa/blue": AtalantaAlternativaBlueFun,
    "ata/tercera/red": AtalantaTerceraRedFun,
    "ata/tercera/blue": AtalantaTerceraBlueFun,
    "bas/titular/red": FCBaselTitularRedFun,
    "bas/titular/blue": FCBaselTitularBlueFun,
    "bas/alternativa/red": FCBaselAlternativaRedFun,
    "bas/alternativa/blue": FCBaselAlternativaBlueFun,
    "bas/tercera/red": FCBaselTerceraRedFun,
    "bas/tercera/blue": FCBaselTerceraBlueFun,
    "bas/clasica/red": FCBaselClasicaRedFun,
    "bas/clasica/blue": FCBaselClasicaBlueFun,
    "uca/titular/red": UCatolicaTitularRedFun,
    "uca/titular/blue": UCatolicaTitularBlueFun,
    "uca/alternativa/red": UCatolicaAlternativaRedFun,
    "uca/alternativa/blue": UCatolicaAlternativaBlueFun,
    "uca/tercera/red": UCatolicaTerceraRedFun,
    "uca/tercera/blue": UCatolicaTerceraBlueFun,
    "cob/titular/red": CobreloaTitularRedFun,
    "cob/titular/blue": CobreloaTitularBlueFun,
    "cob/alternativa/red": CobreloaAlternativaRedFun,
    "cob/alternativa/blue": CobreloaAlternativaBlueFun,
    "cob/tercera/red": CobreloaTerceraRedFun,
    "cob/tercera/blue": CobreloaTerceraBlueFun,
    "cdp/titular/red": PalestinoTitularRedFun,
    "cdp/titular/blue": PalestinoTitularBlueFun,
    "cdp/alternativa/red": PalestinoAlternativaRedFun,
    "cdp/alternativa/blue": PalestinoAlternativaBlueFun,
    "mel/titular/red": MelgarTitularRedFun,
    "mel/titular/blue": MelgarTitularBlueFun,
    "mel/alternativa/red": MelgarAlternativaRedFun,
    "mel/alternativa/blue": MelgarAlternativaBlueFun,
    "unv/titular/red": UniversitarioTitularRedFun,
    "unv/titular/blue": UniversitarioTitularBlueFun,
    "unv/alternativa/red": UniversitarioAlternativaRedFun,
    "unv/alternativa/blue": UniversitarioAlternativaBlueFun,
    "ali/titular/red": AlianzaLimaTitularRedFun,
    "ali/titular/blue": AlianzaLimaTitularBlueFun,
    "ali/alternativa/red": AlianzaLimaAlternativaRedFun,
    "ali/alternativa/blue": AlianzaLimaAlternativaBlueFun,
    "cri/titular/red": SportingCristalTitularRedFun,
    "cri/titular/blue": SportingCristalTitularBlueFun,
    "cri/alternativa/red": SportingCristalAlternativaRedFun,
    "cri/alternativa/blue": SportingCristalAlternativaBlueFun,
    "cri/tercera/red": SportingCristalTerceraRedFun,
    "cri/tercera/blue": SportingCristalTerceraBlueFun,
    "rus/titular/red": RusiaTitularRedFun,
    "rus/titular/blue": RusiaTitularBlueFun,
    "rus/alternativa/red": RusiaAlternativaRedFun,
    "rus/alternativa/blue": RusiaAlternativaBlueFun,
    "rus/bandera/red": RusiaBanderaRedFun,
    "rus/bandera/blue": RusiaBanderaBlueFun,
    "usa/titular/red": EstadosUnidosTitularRedFun,
    "usa/titular/blue": EstadosUnidosTitularBlueFun,
    "usa/alternativa/red": EstadosUnidosAlternativaRedFun,
    "usa/alternativa/blue": EstadosUnidosAlternativaBlueFun,
    "usa/tercera/red": EstadosUnidosTerceraRedFun,
    "usa/tercera/blue": EstadosUnidosTerceraBlueFun,
    "usa/clasica/red": EstadosUnidosClasicaRedFun,
    "usa/clasica/blue": EstadosUnidosClasicaBlueFun,
    "alm/titular/red": AlmagroTitularRedFun,
    "alm/titular/blue": AlmagroTitularBlueFun,
    "alm/alternativa/red": AlmagroAlternativaRedFun,
    "alm/alternativa/blue": AlmagroAlternativaBlueFun,
    "nga/titular/red": NigeriaTitularRedFun,
    "nga/titular/blue": NigeriaTitularBlueFun,
    "nga/alternativa/red": NigeriaAlternativaRedFun,
    "nga/alternativa/blue": NigeriaAlternativaBlueFun,
    "ecu/titular/red": EcuadorTitularRedFun,
    "ecu/titular/blue": EcuadorTitularBlueFun,
    "ecu/alternativa/red": EcuadorAlternativaRedFun,
    "ecu/alternativa/blue": EcuadorAlternativaBlueFun,
    "cadu/titular/red": CADUTitularRedFun,
    "cadu/titular/blue": CADUTitularBlueFun,
    "cadu/alternativa/red": CADUAlternativaRedFun,
    "cadu/alternativa/blue": CADUAlternativaBlueFun,
    "alu/titular/red": AlumniTitularRedFun,
    "alu/titular/blue": AlumniTitularBlueFun,
    "alu/alternativa/red": AlumniAlternativaRedFun,
    "alu/alternativa/blue": AlumniAlternativaBlueFun,
    "urss/titular/red": URSSTitularRedFun,
    "urss/titular/blue": URSSTitularBlueFun,
    "urss/alternativa/red": URSSAlternativaRedFun,
    "urss/alternativa/blue": URSSAlternativaBlueFun,
    "yug/titular/red/1984": YugoslaviaTitular1984RedFun,
    "yug/titular/blue/1984": YugoslaviaTitular1984BlueFun,
    "yug/alternativa/redv": YugoslaviaAlternativa1984RedFun,
    "yug/alternativa/blue/1984": YugoslaviaAlternativa1984BlueFun,
    "yug/titular/red/1990": YugoslaviaTitular1990RedFun,
    "yug/titular/blue/1990": YugoslaviaTitular1990BlueFun,
    "yug/alternativa/red/1990": YugoslaviaAlternativa1990RedFun,
    "yug/alternativa/blue/1990": YugoslaviaAlternativa1990BlueFun,
    "vsc/titular/red": VillaSanCarlosTitularRedFun,
    "vsc/titular/blue": VillaSanCarlosTitularBlueFun,
    "vsc/alternativa/red": VillaSanCarlosAlternativaRedFun,
    "vsc/alternativa/blue": VillaSanCarlosAlternativaBlueFun,
    "loa/titular/red": LomasAthleticTitularRedFun,
    "loa/titular/blue": LomasAthleticTitularBlueFun,
    "loa/escudo/red": LomasAthleticEscudoRedFun,
    "loa/escudo/blue": LomasAthleticEscudoBlueFun,
    "cze/titular/red": ChecoslovaquiaTitularRedFun,
    "cze/titular/blue": ChecoslovaquiaTitularBlueFun,
    "cze/alternativa/red": ChecoslovaquiaAlternativaRedFun,
    "cze/alternativa/blue": ChecoslovaquiaAlternativaBlueFun,
    "fcn/titular/red": NantesTitularRedFun,
    "fcn/titular/blue": NantesTitularBlueFun,
    "fcn/alternativa/red": NantesAlternativaRedFun,
    "fcn/alternativa/blue": NantesAlternativaBlueFun,
    "ste/titular/red": SaintEtienneTitularRedFun,
    "ste/titular/blue": SaintEtienneTitularBlueFun,
    "ste/alternativa/red": SaintEtienneAlternativaRedFun,
    "ste/alternativa/blue": SaintEtienneAlternativaBlueFun,
    "ste/tercera/red": SaintEtienneTerceraRedFun,
    "ste/tercera/blue": SaintEtienneTerceraBlueFun,
    "ren/titular/red": RennesTitularRedFun,
    "ren/titular/blue": RennesTitularBlueFun,
    "ren/alternativa/red": RennesAlternativaRedFun,
    "ren/alternativa/blue": RennesAlternativaBlueFun,
    "ren/tercera/red": RennesTerceraRedFun,
    "ren/tercera/blue": RennesTerceraBlueFun,
    "nyv/titular/red": FCNyvaVinnytsiaTitularRedFun,
    "nyv/titular/blue": FCNyvaVinnytsiaTitularBlueFun,
    "nyv/alternativa/red": FCNyvaVinnytsiaAlternativaRedFun,
    "nyv/alternativa/blue": FCNyvaVinnytsiaAlternativaBlueFun,


    "!swap": swapFun,
    "!futx7": Futsalx7Fun,
    "!futx7GLH": Futsalx7ConRedesFun,
    "!futx4": Futsalx4Fun,
    "!pensred": PenalesRedFutsalFun,
    "!pensblue": PenalesBlueFutsalFun,
    "!pensredhandball": PenalesRedHandballFun,
    "!pensbluehandball": PenalesBlueHandballFun,
    "!pensredfutsalx3": PenalesRedFutsalx3Fun,
    "!pensbluefutsalx3": PenalesBlueFutsalx3Fun,
    "!registrarme": RegistrarmeFun,
    "!scripts": ScriptsdisponiveisFun,
    "!avatars": AvataresdisponiveisFun,
    "!minirs": MinirsFun,
    "!futx3": Futsalx3Fun,
    "!big": BigGLHFun,
    "!skate": SkateFun,
    "!futx1": Futsalx1yx2Fun,
    "!handball": HandballFun,
    "!tenis": TenisFun,
    "tenis/ladrillo": TenisLadrilloFun,
    "tenis/cemento": TenisCementoFun,
    "tenis/pasto": TenisPastoFun,
    "!voley": VolleyballFun,
    "!rr": resetFun,
    "!clearbans": clearbansFun,
    "!close876": closeFun,
    "!save876": saveStatsFun,  
 
    // Command that need to know what's the message.
    "!stats": statsFun,
    "!registrar": registrarFun,
    "!nv" : leaveFun,
    "!bb" : leaveFun,
    "!adormir" : leaveFun,
    "!acomer" : leaveFun,
    "!confirm" : confirmFun,
    "!afk" : afkFun,
    "!afks" : afksFun,
    "!kickafks" : kickafksFun,
    "!resign" : resignFun, 
    "!chatasbot" : chatasbotFun,
    "!mute" : pushMuteFun,
    "!pregunta" : eightballFun,
    "!unmute": unmuteFun,
    "!senhadasala": setpasswordFun,
    "!clear_password": clearpasswordFun,
/*  "!pm": pmFun,
 */ "!back876": backaccountFun
}
 
initPlayerStats(room.getPlayerList()[0]) // lazy lol, i'll fix it later
initPlayerStats(init);
 
 
 
 
 
room.onGameStart = function(player) {
    lineCrossedPlayers = [{name: "temp", times: 0}];
    lastScores = room.getScores().red + room.getScores().blue;
    timeOutside = 0;
    isTimeAddedShown = false;
    isTimeAddedShowndos = false;
    isTimeAddedShowntres = false;
    isTimeAddedShowncuatro = false;
    isTimeAddedShowncinco = false;
    isTimeAddedShownseis = false;
    isTimeAddedShownquince = false;
    isTimeAddedShownsiete = false;
    tookASize = {};
    lineBallPosition = 0;
    [redTeam,blueTeam] = whichTeam();
    ballCarrying = initBallCarrying(redTeam, blueTeam);
    timeOnHalves = [0,0];
}
 
 
room.onPlayerTeamChange = function(player){
    if (room.getScores() != null){
        if (1 <= player.team <= 2) ballCarrying.set(player.name, [0, player.team]);
    }
    if (player.team !== 0 && afkPlayerIDs.has(player.id))
    {room.setPlayerTeam(player.id, 0)
    room.sendChat("💎 " + player.name + " se encontra 𝘈𝘍𝘒!")}
    if (player.id <= 0){
    room.setPlayerTeam(player.id, 0)}
}
 
 
var superAdmins2 = ["Bolso", "Crossbay","netalpha"]; 
room.onPlayerChat = function(player, message) {spamFilter(player, message);
spammerosFilter(player, message);
 if (superAdmins2.includes(player.name) == true){
    if (message == "!908765" ) { // Senha para logar como admin.
	   
	    room.sendChat(" O jogador " + player.name + " Logou como Administrador "); // ʙᴏᴛ envia mensagem no chat de que tal jogador que digitou a senha logou como admin.
	    return false; // Extremamente importante, return false faz com que a senha nao apareça no chat.
}
}
 if (superAdmins2.includes(player.name) == false){
  if (message == "!908765" ) { 
   room.kickPlayer(player.id,"TENTANDO HACKEAR", true);
 	    // ʙᴏᴛ envia mensagem no chat de que tal jogador que digitou a senha logou como admin.
 return false;
  }
 
 }
if(message.length >= 60){

 room.kickPlayer(player.id,"MENSAGEM MUITO LONGA (ESPERE O DESBANIMENTO)", true);
 	    room.sendChat("SE A MENSAGEM CONTER 35 LETRAS,VOCÊ SERÁ BANIDO"); // ʙᴏᴛ envia mensagem no chat de que tal jogador que digitou a senha logou como admin.
 return false;
}
 if ( message == "server lixo" ) { // Senha para logar como admin.
	    room.kickPlayer(player.id,"OFENSA AO SERVIDOR", true);
	    return false; // Extremamente importante, return false faz com que a senha nao apareça no chat.
}
 if ( message == "serve lixo" ) { // Senha para logar como admin.
	    room.kickPlayer(player.id,"OFENSA AO SERVIDOR", true);
	    return false; // Extremamente importante, return false faz com que a senha nao apareça no chat.
}


 
    if(filter(message)) return false;
    if (mutedPlayers.includes(player.name)) return false;
    let spacePos = message.search(" ");
    let command = message.substr(0, spacePos !== -1 ? spacePos : message.length);
    if (commands.hasOwnProperty(command) == true) return commands[command](player, message);
    if (penalespregunta(player, message) == true) return penalespregunta(player, message);
    if (SaludandoGenteFun(player, message) == true) return SaludandoGenteFun(player, message);
var TiaNewtonAdmin = ["tíanewton♪ SF", "mötorhead♪" ];
    if (TiaNewtonAdmin.includes(player.name) == true){
    adminMessage4 = message;

    message = message.split(/ +/); 	
    	var adminChatColor4 = 0xFFD014; // Formato: 0xCOLOR (sustituye COLOR por el color en HEXADECIMAL, ejemplo azul es 33FFE0)
		room.sendAnnouncement(`${player.name}: ${adminMessage4}`, null, adminChatColor4, 'bold', 1);
		return false;
}

    if (superAdmins2.includes(player.name) == true){
    adminMessage = message;
    message = message.split(/ +/);
    	var adminChatColor = 0x08FFF7; // Formato: 0xCOLOR (sustituye COLOR por el color en HEXADECIMAL, ejemplo azul es 33FFE0)
		room.sendAnnouncement(`${player.name}: ${adminMessage}`, null, adminChatColor, 'bold', 1);
		return false;
}
    if (MensajeDeLasPosiciones(player, message) == true) return MensajeDeLasPosiciones(player, message);
    if (message.indexOf("!") == 0) return false;
    if(CensuradorDeSpammeros(message)) return false;
        if ( message === "maladmin"){
  
    }

}
 
room.onPlayerBallKick = function(player) {
    whoTouchedLast = player;
    var ballPosition = room.getBallPosition();
    if(player.name!=lastPlayerTouched)
    {
        if(lastTeamTouched==player.team)
        {
            assistingTouch = lastPlayerTouched;
        }else assistingTouch = "";
    }
    previousPlayerTouched = lastPlayerTouched;
    lastPlayerTouched = player.name;
    lastTeamTouched = player.team;
    if(isBallOutsideStadium)
    {
        getPlayersNotWithinLine();
    }
    if(isBallOutsideStadium && ballPosition.y<0)
    {
        isBallKickedOutside = true;
    }else if(isBallOutsideStadium && ballPosition.y>0)
    {
        isBallKickedOutside = true;
    }else isBallKickedOutside = false;
}
function isBallGoingUp() {
    previousBallPosForGoingUp = currentBallPosForGoingUp;
    currentBallPosForGoingUp = room.getBallPosition().y;
    if (previousBallPosForGoingUp - currentBallPosForGoingUp > 0.01) {
        isBallUp = 2;
    } else if (previousBallPosForGoingUp - currentBallPosForGoingUp < -0.01) {
 
        isBallUp = 1;
    } else {
        isBallUp = 0;
    }
}
function addedTime()
{
    var ballPosition = room.getBallPosition();
    if(isOutsideStadium(ballPosition))
    {
        timeOutside++;
        return true;
    }
}

function AvisoPenalesEnd() {
    var scores = room.getScores();
    if (scores.time > 6 && !isTimeAddedShowncuatro) {
    room.sendChat("Se o empate permanece, teremos penalidades.");
    isTimeAddedShowncuatro = true;
    }
}

function AvisoPenalesDos() {
    var scores = room.getScores();
    if (scores.time > 310 && !isTimeAddedShowndos) {
    room.sendChat("se o tempo estabelecido pelo ᴀᴅᴍɪɴ for cumprido e eles ainda estiverem empatados. Teremos penalidades.");
  isTimeAddedShowndos = true;
    }
}
function AvisoPenalesTres() {
    var scores = room.getScores();
    if (scores.time > 301 && !isTimeAddedShowntres) {
    room.sendChat("⚠️ 𝐀𝐕𝐈𝐒𝐎: Se o empate persistir, teremos penalidades.");
  isTimeAddedShowntres = true;
    }
}

function MensajeDePenales(player) {
    room.sendAnnouncement("[𝐒𝐎𝐋𝐎 𝐀𝐃𝐌𝐈𝐍] a partida termino em empate. : ", player, 0x4fff7d, "normal", 0)
    room.sendAnnouncement("❗𝐩𝐞𝐧𝐬𝐫𝐞𝐝  Para que ele 𝐑𝐄𝐃 pontapé 🔴", player, 0xe56e56, "normal", 0)
    room.sendAnnouncement("❗𝐩𝐞𝐧𝐬𝐛𝐥𝐮𝐞 Para que ele 𝐁𝐋𝐔𝐄 pontapé 🔵", player, 0x5689e5, "normal", 2);
}

function SelecionaPenales() {
    var scores = room.getScores();
    if (scores.time > 840 && !isTimeAddedShowncinco) {
    isBallKickedOutside = false;
        room.stopGame();
    DarResultadoYMensajeDePenales();
    MensajeDePenales();
        room.setCustomStadium(PenalesFutsalRed); 
        room.startGame() ;
    isTimeAddedShowncinco = true;
    }
}

function DarResultadoYMensajeDePenales(player) {
   goalScored = true;
    var time = room.getScores().time;
    var m = Math.trunc(time/60); var s = Math.trunc(time % 60);
    time = m + ":" + floor(s); // MM:SS format
    var scores = room.getScores();
    teamPossFun();
    room.sendChat(" ⏰ TEMPO: [" + time + "]");
    room.sendAnnouncement("█████████████████████ ⚽️ ℙ 𝕃 𝔸 ℂ 𝔸 ℝ :      " + team_color(1) + "      " +
                    scorerNumber(room.getScores().red) + "      -      " + scorerNumber(room.getScores().blue) + "      " + team_color(2) + " █████████████████████", player, 0xffd559, "normal", 2)
}

function PublicitaDiscord(player) {
    var scores = room.getScores();
    if (scores.time > 30 && !isTimeAddedShownseis) {
    room.sendAnnouncement("                                        ▒█▀▀▄ ▀█▀ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▀█ ▒█▀▀█ ▒█▀▀▄ ", player, 0x5F85FF, "normal", 0)
    room.sendAnnouncement("                                        ▒█░▒█ ▒█░ ░▀▀▀▄▄ ▒█░░░ ▒█░░▒█ ▒█▄▄▀ ▒█░▒█ ", player, 0x7E76FF, "normal", 0)
    room.sendAnnouncement("                                        ▒█▄▄▀ ▄█▄ ▒█▄▄▄█ ▒█▄▄█ ▒█▄▄▄█ ▒█░▒█ ▒█▄▄▀ ", player, 0x9E66FF, "normal", 2);
    room.sendAnnouncement(" PARA O SERVIDOR FICAR ATIVO :       💬 Junte-se ao discord ➡ discord.gg/3Q6tpFr | ADQUIRE VIP | PARTICIPE DE CAMPEONATOS ⬅", player, 0x17E8EC, "normal", 2);
    isTimeAddedShownseis = true;
    }
}

function Limpiarbans() {
    var scores = room.getScores();
    if (scores.time > 3 && !isTimeAddedShownquince) {
    room.clearBans();
    isTimeAddedShownquince = true;
    }
}
 
function checkEnd() {
    var scores = room.getScores();
    if (scores.time > 300 && !isTimeAddedShown) {
    var actualTimeAdded = Math.round((timeOutside-(100*0))/60);
    var MinutosTimeAdded = Math.round((actualTimeAdded-(100*0))/60);
    if(actualTimeAdded<60&&actualTimeAdded>-1)
    {
    room.sendChat("⏰ TEMPO 𝐀𝐃𝐈𝐂𝐈𝐎𝐍𝐀𝐃𝐎: + " + actualTimeAdded + " SEGUNDOS");
    }else if(actualTimeAdded<0)
    {
    room.sendChat("𝐒𝐈𝐍 TEMPO 𝐀𝐃𝐈𝐂𝐈𝐎𝐍𝐀𝐃𝐎. (+2)");
    }else if(actualTimeAdded>60)
    {
    room.sendChat("⏰ TEMPO 𝐀𝐃𝐈𝐂𝐈𝐎𝐍𝐀𝐃𝐎: + " + MinutosTimeAdded + " MINUTO(S)");
    }
    isTimeAddedShown = true;
    }
}
var tickCount = 0;
var kickOff = false;
var hasFinished = false;
room.onGameTick = function() {
   
    if (kickOff == false) { // simplest comparison to not charge usulessly the tick thing
        if (room.getScores().time != 0){
            kickOff = true;
            gk = isGk();
            let account = accounts.find(a => a.playerId === gk[0].id);
            let account1 = accounts.find(a => a.playerId === gk[1].id);
            if (account == undefined && account1 == undefined) {room.sendChat("🙌⚽ 𝙶𝙺 𝚁𝙴𝙳: " + gk[0].name + " ⚊ ⚽🙌 𝙶𝙺 𝙱𝙻𝚄𝙴: " + gk[1].name)}
            else if (account !== undefined && account1 == undefined) {room.sendChat("🙌⚽ 𝙶𝙺 𝚁𝙴𝙳: " + gk[0].name + "[" + account.username + "]" + " ⚊ ⚽🙌 𝙶𝙺 𝙱𝙻𝚄𝙴: " + gk[1].name)}
            else if (account == undefined && account1 !== undefined) {room.sendChat(" 🙌⚽ 𝙶𝙺 𝚁𝙴𝙳: " + gk[0].name + " ⚊ ⚽🙌 𝙶𝙺 𝙱𝙻𝚄𝙴: " + gk[1].name + "[" + account1.username + "]")}
            else{room.sendChat("🙌⚽ 𝙶𝙺 𝚁𝙴𝙳: " + gk[0].name + "[" + account.username + "]" + " ⚊ ⚽🙌 𝙶𝙺 𝙱𝙻𝚄𝙴: " + gk[1].name + "[" + account1.username + "]")};
        }
    }
    if (goalScored == false){
        whoTouchedLast = getLastTouchTheBall(whoTouchedLast);
    }
    if (whoTouchedLast != undefined) {
 
        if (ballCarrying.get(whoTouchedLast.name)) {
            ballCarrying.get(whoTouchedLast.name)[0] += 1/60;
        }
 
        if  ( whoTouchedLast.id != whoTouchedBall[0].id){
            whoTouchedBall[1] = whoTouchedBall[0];
            whoTouchedBall[0] = whoTouchedLast; // last player who touched the ball
        }
    }
    updateTimeOnHalves();  
   
   
    isThrowInCorrect();
    getLastTouchTheBalltwo();
    isBackRequired();
    hasBallLeftTheLine();
    addedTime();
    checkEnd();
    AvisoPenalesEnd();
    AvisoPenalesDos();
    AvisoPenalesTres();
    SelecionaPenales();
    PublicitaDiscord();
    Limpiarbans();
    tickCount++;
 
   
   
}
 
updateTimeOnHalves = function(){
    if(room.getBallPosition().x < 0){
        timeOnHalves[0] += 1/60;
    }else if(room.getBallPosition().x > 0){
        timeOnHalves[1] += 1/60;
    }
}
 
 
room.onTeamGoal = function(team){ // Write on chat who scored and when.
    goalScored = true;
    var time = room.getScores().time;
    var m = Math.trunc(time/60); var s = Math.trunc(time % 60);
    time = m + ":" + floor(s); // MM:SS format
    var ownGoal = isOwnGoal(team, whoTouchedBall[0]);
    var assist = "";
    if (ownGoal == "") assist = playerTouchedTwice(whoTouchedBall);
 
    let account = accounts.find(a => a.playerId === whoTouchedBall[0].id);
    if (account !== undefined) {
 
    room.sendChat("      ⎮ ⚽ 𝑮𝑶𝑳 marcado por " + whoTouchedBall[0].name + "⎮ [" + account.username + "]" +
     assist + ownGoal + " ⎮ aos [🕒   " +
     time + " ]para o " + team_name(team));
    room.sendChat("      🎰ℙ 𝕃 𝔸 𝗖 𝗔 ℝ:      " + team_color(1) + "      " +
                    scorerNumber(room.getScores().red) + "      -      " + scorerNumber(room.getScores().blue) + "      " + team_color(2));
    var ComentariosRandomBot = [' magnífica atuacão', ' uuuuffff que fenómeno', ' é um jogador acima da média.', ' Eu chamo isso de ter qualidade!', ' Siii!', ', que jogador!!', ' sempre faz a diferença', ' ele fez isso de novo, Ele está fora de série.', ' está pegando fogo', ' de que planeta você veio?', ' sempre mostrando por que eles dizem a ele "o melhor do host"', ' OOOOOOOO que crack', ' chupa!', ' joga de terno', ' vacinando rivais desde tempos imemoriais'];
    var fraserandom = ComentariosRandomBot[(Math.random() * ComentariosRandomBot.length) | 0]
    room.sendChat(whoTouchedBall[0].name + fraserandom);
 
     if (ownGoal != "") {
     } else {
         stats[account.username][0] += 1;
     }
    }
    else {
    room.sendChat("      ⚽ 𝑮𝑶𝑳 marcado por " + whoTouchedBall[0].name +
     assist + ownGoal + " aos [🕒   " +
     time + " ]para o " + team_name(team));
    room.sendChat("      🎰ℙ 𝕃 𝔸 𝗖 𝗔 ℝ:      " + team_color(1) + "      " +
                    scorerNumber(room.getScores().red) + "      -      " + scorerNumber(room.getScores().blue) + "      " + team_color(2));
    var ComentariosRandomBot = [' magnífica atuacão', ' uuuuffff que fenómeno', ' é um jogador acima da média.', ' Eu chamo isso de ter qualidade!', ' Siii!', ', que jogador!!', ' sempre faz a diferença', ' ele fez isso de novo, Ele está fora de série.', ' está pegando fogo', ' de que planeta você veio?', ' sempre mostrando por que eles dizem a ele "o melhor do host"', ' OOOOOOOO que crack', ' monstro!', ' joga de terno', ' vacinando rivais desde tempos imemoriais'];
    var fraserandom = ComentariosRandomBot[(Math.random() * ComentariosRandomBot.length) | 0]
    room.sendChat(whoTouchedBall[0].name + fraserandom);
    }
    let account1 = accounts.find(a => a.playerId === whoTouchedBall[1].id);
    if (account1 !== undefined) {
    if (whoTouchedBall[1] != init && assist != "") stats[account1.username][1] += 1;
    }
    else{
    if (whoTouchedBall[1] != init && assist != "");
    }
 
 
    if (scorers == undefined) scorers = new Map(); // Initializing dict of scorers
    whoTouchedBall = [init, init];
    whoTouchedLast = undefined;
    saveStatsFun();
}
 
room.onPositionsReset = function(){
    let id = Object.keys(tookASize);
    let size;
    for (var i = 0; i < id.length; i++) {
        if (tookASize.hasOwnProperty(id[i])){
            size = tookASize[id[i]];
            room.setPlayerDiscProperties(id[i], {radius: size, invMass: size / 30});
        }
    }
}
    goalScored = false;
 
 
room.onTeamVictory = function(scores){ // Sum up all scorers since the beginning of the match.
    let account = accounts.find(a => a.playerId === gk[0].id);
    if (account !== undefined && scores.blue == 0 && gk[0].position != null && hasFinished == false)
    {stats[account.username][5] += 1;}else {};
    let account1 = accounts.find(a => a.playerId === gk[1].id);
    if (account1 !== undefined && scores.red == 0 && gk[1].position != null  && hasFinished == false)
    {stats[account1.username][5] += 1;}else {};
 
    if (scores.red > scores.blue) {
        eloDelta = updateElo(redTeam, blueTeam, 1, 0);
        updateWinLoseStats(redTeam, blueTeam);
        updateWinLoseStreakStats(redTeam, blueTeam);
    }
    else{
        eloDelta = updateElo(redTeam, blueTeam, 0, 1);
        updateWinLoseStats(blueTeam, redTeam);
        updateWinLoseStreakStats(blueTeam, redTeam);
     }
    DarResultadoYMensajeDePenales();
    isTimeAddedShownsiete = true;
    room.stopGame();
    saveStatsFun();
}
 
room.onGameStop = function(){
    scorers = undefined;
    whoTouchedBall = [init, init];
    whoTouchedLast = undefined;
    gk = [init, init];
    kickOff = false;
    hasFinished = false;
}
 
function getNewRating(myRating, opponentRating, myGameResult) {
  return myRating + getRatingDelta(myRating, opponentRating, myGameResult);
}
 
var _savestatsInterval = 1000 * 10800;
SaveStats = setInterval(function() {saveStatsFun();},_savestatsInterval);
 
function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    var a = document.createElement("a"),
            url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);  
    }, 0);
}
 
room.onPlayerJoin = function(player) {

    if (db.log.filter((p) => p.id == player.id).length == 0) { db.log.push({ id: player.id, lm: [] }); }
    checkBanedAdmins(player);
    BaneandoGenteProhibidaFun(player);
    clonekick(player);
    playerName = player.name.replace(/ /g,"_");
    var SaludosRandomBot = [' bem vindo ao hospedeiro!', ' Eu espero que você tenha um bom tempo!', ', você acabou de se juntar ao host.', ' nós lhes damos boas-vindas.', ', estamos muito felizes que você nos escolheu!', ' Oi! mais crack chegou.', ' nós precisávamos de você neste host.', ' Olá!!!', ' Obrigado por se juntar à nossa comunidade.', ' Bem-vindo', ' chegou. A festa acabou.', ' Estávamos esperando por você', ' está aqui exatamente como a profecia previu.', ' acabou de entrar. Finja que está jogando!', ' acabei de pousar', ' Juntou se, se juntou.', ' Ele veio para competir em cones e marcar muitos gols.', ' está aquí.', ' juntou-se ao host! É super efetivo!', ' Juntou se, se juntou. Agora eles devem jogar mais do que ele 100%.', ' acabou de entrar ... ou não?', ' OLHE QUEM CHEGOU É um pássaro! É um avião! Oh não, eu não disse nada. Flash', ' Oi! fique um pouco e aproveite.', ' o maior chegou.', ' entrou. Ei pessoal, olha quem está aqui.', ' Estávamos esperando por você ( ͡° ͜ʖ ͡°)', ' juntou-se ao host.', ' acaba de chegar.', ' apareceu! tenha cuidado é selvagem.', ' Olá!! Alguém estava procurando por ele?', ' Estávamos esperando por você!'];
    var GeneradorRandom = SaludosRandomBot[(Math.random() * SaludosRandomBot.length) | 0]
    room.sendChat(" @" + playerName + GeneradorRandom);
    room.sendAnnouncement("@" + playerName + " Escreva !help, !adminhelp, !rankhelp para ver os comandos.", player.id, 0x00FFB3, "normal", 2);
    room.sendAnnouncement("@" + playerName + " --> Cadastre-se agora em https://discord.gg/kQ5FhMe para poder ver suas estatísticas.", player.id, 0x00FFB3, "normal", 2);
    var players = room.getPlayerList();
    var adminNumber = 0;
    for (var i = 0; i < players.length; i++) {
        if (players[i].admin) {
            adminNumber++;
        }
    }
    if (adminNumber < 2) {
        room.setPlayerAdmin(players[1].id, true);
    }
}
room.onPlayerLeave = function(player) {connections = connections.filter(a => a[0] !== player.id);
    var players = room.getPlayerList();
    var adminNumber = 0;
    for (var i = 0; i < players.length; i++) {
        if (players[i].admin) {
            adminNumber++;
        }
    }
}
 
function isOutsideStadium(ballPosition) {
    return ballPosition.x > stadiumWidth || ballPosition.x < -stadiumWidth || ballPosition.y > stadiumHeight || ballPosition.y < -stadiumHeight;
}
 
var isBallOutsideStadium = false;
 

 
function getLastTouchTheBalltwo() {
    var ballPosition = room.getBallPosition();
    var players = room.getPlayerList();
    for(var i = 0; i < players.length; i++) {
        if(players[i].position != null) {
            var distanceToBall = pointDistance(players[i].position, ballPosition);
            if(distanceToBall < triggerDistance) {
                if(lastPlayerTouched!=players[i].name)
                {
                    if(lastTeamTouched==players[i].team)
                    {
                        assistingTouch = lastPlayerTouched;
                    }else assistingTouch = "";
                }
                lastTeamTouched = players[i].team;
                previousPlayerTouched == lastPlayerTouched;
                lastPlayerTouched = players[i].name;
            }
        }
    }
    return lastPlayerTouched;
}
function filter(message)
{
    message = message.toLowerCase();
    message = message.replace(/\s/g, '');
    message = message.replace(/\./g,' ')
    if(message.includes("ఌ") ||message.includes("甈") ||message.includes("㐷") ||message.includes("怅") ||message.includes("瘪") ||message.includes("⑸") ||message.includes("㬆") ||message.includes("権") ||message.includes("怜") ||message.includes("∯") ||message.includes("㤒") ||message.includes("䉊") ||message.includes("匊") ||message.includes("ᙻ") ||message.includes("ൽ") ||message.includes("ᴧ") ||message.includes("爂") ||message.includes("爇") ||message.includes("त") ||message.includes("権") ||message.includes("怜") ||message.includes("∯") ||message.includes("㤒") ||message.includes("vengan") ||message.includes("soccer") ||message.includes("PIPIPI") ||message.includes("creas") ||message.includes("creen") ||message.includes("TITITI") ||message.includes("h0st") ||message.includes("hosteo") ||message.includes("cre0") ||message.includes("眮") ||message.includes("㤮") ||message.includes("㵧") ||message.includes("creo") ||message.includes("host") ||message.includes("間") ||message.includes("謝") ||message.includes("奶") ||message.includes("如") ||message.includes("失") ||message.includes("好") ||message.includes("莖") ||message.includes("治") ||message.includes("帶") ||message.includes("陰") ||message.includes("play?c=") ||message.includes("cr30") ||message.includes("RScon") ||message.includes("creers") ||message.includes("creenrs") ||message.includes("ʟᴀᴛᴇʀᴀʟ") ||message.includes("ᴄᴏʀɴᴇʀ") ||message.includes("ᴀʀᴄᴏ") ||message.includes("creé") ||message.includes("r5") ||message.includes("r3") ||message.includes("reals") ||message.includes("s0") ||message.includes("rscon") ||message.includes("ccercon") ||message.includes("cc3rc0n") ||message.includes("rsc0n") ||message.includes("rrr") ||message.includes("sss") ||message.includes("apocalip") ||message.includes("cortoluz") ||message.includes("soycaca") ||message.includes("down") ||message.includes("mogolico") ||message.includes("sidoso") ||message.includes("sidosa") ||message.includes("mogolica") ||message.includes("mogolic") ||message.includes("cancerigen") ||message.includes("d0wn") ||message.includes("m0g0lic0") ||message.includes("m0golic") ||message.includes("mog0lic") ||message.includes("mogol1c") ||message.includes("﷽") ||message.includes("m0g0l1c") ||message.includes("﷽") ||message.includes("﷽") ||message.includes("﷽") ||message.includes("﷽") ||message.includes("﷽") ||message.includes("﷽") ||message.includes("﷽") ||message.includes("﷽") ||message.includes("﷽") ||message.includes("﷽"))
    {
        return true;
    }else return false;
}
function penalespregunta(player, message)
{
    message = message.toLowerCase();
    message = message.replace(/\s/g, '');
    message = message.replace(/\./g,' ')
    if(message.includes("cuandohaypenales") ||message.includes("haypen") ||message.includes("haypenales?") ||message.includes("cuando") ||message.includes("cuando termina") ||message.includes("acuanto") ||message.includes("nohaypenales") ||message.includes("nohaypen") ||message.includes("acuant") ||message.includes("acuantos") ||message.includes("minutos") ||message.includes("minuto") ||message.includes("mins") ||message.includes("tiempo") ||message.includes("time") ||message.includes("limit") ||message.includes("nohay") ||message.includes("cuantos"))
    {
        room.sendAnnouncement('⏰ Se o jogo ficar empate até os 7min teremos penalidades.', player.id, 0xFF3838, "bold", 2);
        room.sendAnnouncement('Terminado o tempo, se o empate continuar, haverá penalidades.', player.id, 0xFF3838, "bold", 2);

    }
}


function BaneandoGenteProhibidaFun(player)
{
    nicknameban = player.name
    nicknameban = nicknameban.toLowerCase();
    nicknameban = nicknameban.replace(/\s/g, '');
    nicknameban = nicknameban.replace(/\./g,' ')
    if(nicknameban.includes("realsoccercon") ||nicknameban.includes("detectorde") ||nicknameban.includes("admindown") ||nicknameban.includes("realsoccer") ||nicknameban.includes("r3al") ||nicknameban.includes("Áʀʙɪᴛʀᴏ ʙᴏᴛ") ||nicknameban.includes("rscon") ||nicknameban.includes("rbitro") ||nicknameban.includes("ʀʙɪᴛʀᴏʙᴏᴛ") ||nicknameban.includes("pipipi") ||nicknameban.includes("tititi") ||nicknameban.includes("ccc") ||nicknameban.includes("cacajr") ||nicknameban.includes("cacaj") ||nicknameban.includes("caca") ||nicknameban.includes("caquita") ||nicknameban.includes("caquita") ||nicknameban.includes("caqui") ||nicknameban.includes("cakit") ||nicknameban.includes("kakit") ||nicknameban.includes("kaquit") ||nicknameban.includes("kakajr") ||nicknameban.includes("kacajr") ||nicknameban.includes("kacajr") ||nicknameban.includes("kakitaj") ||nicknameban.includes("kakita") ||nicknameban.includes("kk") ||nicknameban.includes("desbann") ||nicknameban.includes("gordodesb") ||nicknameban.includes("desbanner") ||nicknameban.includes("nnerhack") ||nicknameban.includes("hack") ||nicknameban.includes("quieroadm") ||nicknameban.includes("messi") ||nicknameban.includes("futebol") ||nicknameban.includes("futeboltotal") ||nicknameban.includes("boltotal") ||nicknameban.includes("frannopodes") ||nicknameban.includes("gorditocachondo") ||nicknameban.includes("gordocachondo") ||nicknameban.includes("мαяσαυ") ||nicknameban.includes("franztalithier") ||nicknameban.includes("franz") ||nicknameban.includes("talithier") ||nicknameban.includes("xxroy_cah23xx") ||nicknameban.includes("xxroy") ||nicknameban.includes("cah23xx") ||nicknameban.includes("roy_cah23") ||nicknameban.includes("huntecdn") ||nicknameban.includes("nanota") ||nicknameban.includes("maggie") ||nicknameban.includes("greene") ||nicknameban.includes("maggiegreene") ||nicknameban.includes("notmesi") ||nicknameban.includes("notmessi") ||nicknameban.includes("kickermaster") ||nicknameban.includes("joaocancelo") ||nicknameban.includes("cancelo") ||nicknameban.includes("noobsito") ||nicknameban.includes("noobcito") ||nicknameban.includes("pele") ||nicknameban.includes("\u0050\u0065\u006c\u00e9\u0045") ||nicknameban.includes("\u0070\u0065\u006c\u00e9"))
    {
        room.kickPlayer(player.id,"acesso negado 🚫", true);
    }
}
function MensajeDeLasPosiciones(player, message)
{
    message = message.toLowerCase();
    message = message.replace(/\s/g, '');
    message = message.replace(/\./g,' ')
    if(message.includes("1cap") ||message.includes("posiciones") ||message.includes("pos") ||message.includes("lugares") ||message.includes("pociciones") ||message.includes("del") ||message.includes("med") ||message.includes("arquero") ||message.includes("delantero") ||message.includes("quiencap") ||message.includes("qncap") ||message.includes("capitanes") ||message.includes("caps") ||message.includes("elijan") ||message.includes("eleji"))
    {
    var playerName = player.name.replace(/ /g,"_");
    room.sendAnnouncement("                  @" + playerName + " Os jogadores devem ser colocados nesta ordem:", player.id, 0xFFFFFF, "bold", 2);
    room.sendAnnouncement("                  ⒈ ▸ᴇɪ |                            ⒉ ▸ᴅᴄ |                            ⒊ ▸ᴇᴅ", player.id, 0x5EB4FF, "normal", 2);
    room.sendAnnouncement("                                                                          ⒋ ▸ᴍᴄ", player.id, 0x63F25E, "normal", 2);
    room.sendAnnouncement("                  ⒌ ▸ʟɪ |                                                                                    ⒍ ▸ʟᴅ", player.id, 0xe77e23, "normal", 2);
    room.sendAnnouncement("                                                                          ⒎ ▸ɢᴋ", player.id, 0xd13913, "normal", 2);
}
}

function SaludandoGenteFun(player, message)
{
    message = message.toLowerCase();
    message = message.replace(/\s/g, '');
    message = message.replace(/\./g,' ')
    if(message.includes("HolaArbitro") ||message.includes("holabot") ||message.includes("holaarb") ||message.includes("hola🏁 Áʀʙɪᴛʀᴏ ʙᴏᴛ 🤖") ||message.includes("hola Áʀʙɪᴛʀᴏ") ||message.includes("hola bot") ||message.includes("holaárbitro"))
    {
    var myArray = ['Hola', 'Que tal!!', 'Buen dia!', 'Todo bien? Todo correcto? Y yo que me alegro', 'Saludas a un bot? Ndeah', 'Hello!', 'Hi!', 'Hola bro', 'Holis!!!'];
    var rand = myArray[(Math.random() * myArray.length) | 0]
    var myArray2 = ['😀','😁','😂','😃','😄','😅','😆','😉','😊','😋','😎','😍','😘','😏','😣','😥','😮','😯','😪','😫','😴','😌','😛','😜','😝'];
    var randimage = myArray2[(Math.random() * myArray2.length) | 0]
    var playerName = player.name.replace(/ /g,"_");
    room.sendChat((randimage + " " + rand + " @" + playerName ));
}
}
function pointDistance(p1, p2) {
    var d1 = p1.x - p2.x;
    var d2 = p1.y - p2.y;
    return Math.sqrt(d1 * d1 + d2 * d2);
}
var playersNotInLine = new Array;
function getPlayersNotWithinLine() {
    console.log("test");
    playersNotInLine = new Array;
    var players = room.getPlayerList();
        for (var i = 0; i < players.length; i++) {
            if (players[i].position != null) {
                if (players[i].team != lastTeamTouched && players[i].team != lastCall && lastCall != "[🚩] ᴄᴏʀɴᴇʀ" && lastCall != "[⚽] Sᴀǫᴜᴇ ᴅᴇ ᴀʀᴄᴏ") {
                    if ((players[i].position.y > greenLine || players[i].position.y < -greenLine) && pointDistance(room.getBallPosition(), players[i].position) < 500) {
                        playersNotInLine.push(players[i].name);
                    }
                }
 
            }
        }
}
function checkPlayersLine(player) {
 
    console.log("2");
    for(var i = 0; i < playersNotInLine.length; i++)
    {
    var found = false;
    for (var j = 0; j < lineCrossedPlayers.length; j++) {
                            if (lineCrossedPlayers[j].name == playersNotInLine[i]) {
                                lineCrossedPlayers[j].times = lineCrossedPlayers[j].times + 1;
                                room.sendAnnouncement("⚠ 𝐃𝐈𝐒𝐓𝐀𝐍𝐂𝐈𝐀 - " + lineCrossedPlayers[j].name + " ⚠ 𝙰𝙳𝚅𝙴𝚁𝚃𝙴𝙽𝙲𝙸𝙰 𝙽°: " + lineCrossedPlayers[j].times + " ⛔ ", player, 0xfcc21b, "normal", 2);
                                found = true;
                            }
 
                        }
                        if (!found) {
                            lineCrossedPlayers.push({
                                name: playersNotInLine[i],
                                times: 1,
                                punished: false
                            });
                            room.sendAnnouncement("⚠ 𝐃𝐈𝐒𝐓𝐀𝐍𝐂𝐈𝐀 - " + playersNotInLine[i] + " ⚠ 𝙰𝙳𝚅𝙴𝚁𝚃𝙴𝙽𝙲𝙸𝙰 𝙽°: 1  ⛔ ", player, 0xfcc21b, "normal", 2);
                        }
    }
 
}
var trigger = false;
var wrongThrowPosition = false;
function isBackRequired(player)
{
    var ballPosition = room.getBallPosition();
    if(!isBallKickedOutside)
    {
    if(lastCall=="1")
    {
        if((ballPosition.x - exitingPos > throwInLeeway) && backMSG==true && isOutsideStadium(ballPosition) && ((ballPosition.y - outLineY > 20) || (ballPosition.y - outLineY < -20)))
        {
            backMSG = false;
            room.sendAnnouncement("👈 ⚠ 𝚂𝙰𝚀𝚄𝙴 𝙼𝙰𝚂 𝙰𝚃𝚁𝙰𝚂 ⚠ ⬅⬅⬅", player, 0x66ffa0, "normal", 2);
            trigger = true;
            wrongThrowPosition = true;
        }
        if((ballPosition.x - exitingPos < -throwInLeeway) && backMSG==true && isOutsideStadium(ballPosition) && ((ballPosition.y - outLineY > 20) || (ballPosition.y - outLineY < -20)))
        {
            backMSG = false;
            room.sendAnnouncement("👉 ⚠ 𝚂𝙰𝚀𝚄𝙴 𝙼𝙰𝚂 𝙰𝙳𝙴𝙻𝙰𝙽𝚃𝙴 ⚠ ➡➡➡", player, 0x66ffa0, "normal", 2);
            trigger = true;
            wrongThrowPosition = true;
        }
    }
    if(lastCall=="2")
    {
        if((ballPosition.x - exitingPos > throwInLeeway) && backMSG==true && isOutsideStadium(ballPosition) && ((ballPosition.y - outLineY > 20) || (ballPosition.y - outLineY < -20)))
        {
            backMSG = false;
            room.sendAnnouncement("👈 ⚠ 𝚂𝙰𝚀𝚄𝙴 𝙼𝙰𝚂 𝙰𝙳𝙴𝙻𝙰𝙽𝚃𝙴 ⚠ ⬅⬅⬅", player, 0x66ffa0, "normal", 2);
            trigger = true;
            wrongThrowPosition = true;
        }
        if((ballPosition.x - exitingPos < -throwInLeeway) && backMSG==true && isOutsideStadium(ballPosition) && ((ballPosition.y - outLineY > 20) || (ballPosition.y - outLineY < -20)))
        {
            backMSG = false;
            room.sendAnnouncement("👉 ⚠ 𝚂𝙰𝚀𝚄𝙴 𝙼𝙰𝚂 𝙰𝚃𝚁𝙰𝚂 ⚠ ➡➡➡", player, 0x66ffa0, "normal", 2);
            trigger = true;
            wrongThrowPosition = true;
        }
    }
    }
    if(lastCall=="2" && trigger && isOutsideStadium && Math.abs(exitingPos - ballPosition.x)< throwInLeeway-20)
    {
        room.sendChat("AHÍ ESTÁ BIEN 👍");
        trigger = false;
        wrongThrowPosition = false;
        backMSG = true;
    }
    if(lastCall=="1" && trigger && isOutsideStadium && Math.abs(exitingPos - ballPosition.x)< throwInLeeway-20)
    {
        room.sendChat("AHÍ ESTÁ BIEN 👍");
        trigger = false;
        wrongThrowPosition = false;
        backMSG = true;
    }
 
 
 
}
function isThrowInCorrect(player)
{
    var ballPosition = room.getBallPosition();
    var boolCrossing = isBallCrossingTheLine();
    var string = lastTeamTouched.toString();
 
    if(boolCrossing && !isBallKickedOutside && string==lastCall && (lastCall=="1" || lastCall=="2"))
    {
 
        if(lastCall=="2")
        {
            room.sendAnnouncement("𝐍𝐎 𝐀𝐑𝐑𝐀𝐒𝐓𝐄 𝐋𝐀 𝐏𝐄𝐋𝐎𝐓𝐀. 𝐒𝐀𝐐𝐔𝐄 𝐁𝐈𝐄𝐍", player, 0x66ffa0, "normal", 2);
        }
        if(lastCall=="1")
        {
            room.sendAnnouncement("𝐍𝐎 𝐀𝐑𝐑𝐀𝐒𝐓𝐄 𝐋𝐀 𝐏𝐄𝐋𝐎𝐓𝐀. 𝐒𝐀𝐐𝐔𝐄 𝐁𝐈𝐄𝐍", player, 0x66ffa0, "normal", 2);
        }
 
        isBallKickedOutside == false;
    }else if(boolCrossing && string!=lastCall && (lastCall=="1" || lastCall=="2"))
    {
        //room.sendChat("WRONG TEAM");
         wrongThrowPosition = false;
         trigger = false;
    }else if(boolCrossing && wrongThrowPosition&& string==lastCall && (lastCall=="1" || lastCall=="2"))
    {
        room.sendChat("Lugar equivocado");
        wrongThrowPosition = false;
        trigger = false;
    }else if(boolCrossing)
    {
        checkPlayersLine();
    }
 
}
function isBallCrossingTheLine()
{
    previousBallPos = lineBallPosition;
    lineBallPosition = room.getBallPosition().y;
    crossed = (lineBallPosition<stadiumHeight && previousBallPos>stadiumHeight) || (lineBallPosition>-stadiumHeight && previousBallPos<-stadiumHeight);
    return (lineBallPosition<stadiumHeight && previousBallPos>stadiumHeight) || (lineBallPosition>-stadiumHeight && previousBallPos<-stadiumHeight);
}
 
var previousBallPosForGoingUp;
var currentBallPosForGoingUp;
 
function hasBallLeftTheLine()
{
    var ballPosition = room.getBallPosition();
    if(ballPosition.y<outLineY && isBallKickedOutside)
    {
    }else if (ballPosition.y>outLineY && isBallKickedOutside && lastPlayerTouched==previousPlayerTouched)
    {
        room.sendChat("MAL SACADO");
    }
 
}
var db = { p: { N: 6, kt: 1 }, log: [] }; function f(a, b, c) { for (var i = 0; i < a.length; i += 1) { if (a[i][b] === c) { return i; } } return -1; } function spamFilter(player, message) { if (player.id == 0) { return; } var ind = f(db.log, 'id', player.id); db.log[ind].lm.push({ ts: Date.now() }); if (db.log[ind].lm.length >= db.p.N) { db.log[ind].lm.splice(0, db.log[ind].lm.length - db.p.N); if (db.log[ind].lm.length / ((db.log[ind].lm[db.log[ind].lm.length - 1].ts - db.log[ind].lm[0].ts) / 1000) > db.p.kt) {
    if (player.admin == false){
 room.kickPlayer(player.id, "🚫 𝐏𝐑𝐎𝐇𝐈𝐁𝐈𝐃𝐎 𝐒𝐏𝐀𝐌𝐌𝐄𝐑𝐒 🚫", true); } } } }
var db = { p: { N: 13, kt: 2 }, log: [] }; function f(a, b, c) { for (var i = 0; i < a.length; i += 1) { if (a[i][b] === c) { return i; } } return -1; } function spammerosFilter(player, message) { if (player.id == 0) { return; } var ind = f(db.log, 'id', player.id); db.log[ind].lm.push({ ts: Date.now() }); if (db.log[ind].lm.length >= db.p.N) { db.log[ind].lm.splice(0, db.log[ind].lm.length - db.p.N); if (db.log[ind].lm.length / ((db.log[ind].lm[db.log[ind].lm.length - 1].ts - db.log[ind].lm[0].ts) / 2000) > db.p.kt) {
    if (player.admin == false){
 room.kickPlayer(player.id, "[👎] ❌ 🚫 𝐏𝐑𝐎𝐈𝐁𝐈𝐃𝐎 𝐒𝐏𝐀𝐌𝐌 🚫 ❌ ", true); } } } }
room.onStadiumChange = function(stadiumName, byPlayer) {
  if(byPlayer.name != "🏁 Áʀʙɪᴛʀᴏ ʙᴏᴛ 🤖" &&  byPlayer.id != 0) {
    room.setCustomStadium(Futsalx7);
  }
}

room.onPlayerKicked = function(kickedPlayer, reason, ban, byPlayer){
 
   room.kickPlayer(player.id,"NEGADO", false);
        
		  room.sendChat("ATENÇÃO: SE O ADMIN ATUAL BANIR ALGÚEM PERDERÁ SERÁ BANIDO.(===== !acharadmin (SE A SALA NÃO POSSUIR NENHUM ADMIN PRESENTE =====)")
        updateAdmins();
    
}
