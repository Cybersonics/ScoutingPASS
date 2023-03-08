var config_data = `
{
  "title": "Scouting PASS 2023",
  "page_title": "Charged Up",
  "checkboxAs": "10",
  "enable_google_sheets": "true",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "gsCol": "Scouter",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2023paphi",
      "required": "true",
      "disabled": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals<br>",
        "de": "Double Elimination<br>",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "gsCol": "Match",
      "type": "match",
      "min": 1,
      "max": 100,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "gsCol": "Robot",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
        "b3": "Blue-3"
      },
      "required":"true"
    },
    { "name": "Team #",
      "code": "t",
      "gsCol": "Team",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Position",
      "code": "as",
      "gsCol": "Start",
      "type": "field_image",
      "filename": "2023/field_image.png",
      "clickRestriction": "one",
      "shape": "circle 5 black red true"
    }
  ],
  "auton": [
    { "name": "Auto Scoring",
      "code": "asg",
      "gsCol": "AutoScoring",
      "type": "clickable_image",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true"
    },
    { "name": "Dropped Game Pieces",
      "code": "adgp",
      "gsCol": "AutoDropped",
      "type": "counter"
    },
    { "name": "Crossed Cable",
      "code": "acc",
      "gsCol": "AutoCableCross",
      "type": "bool"
    },
    { "name": "Crossed Charging Station",
      "code": "acs",
      "gsCol": "AutoCSCross",
      "type": "bool"
    },
    { "name": "Mobility?",
      "code": "am",
      "gsCol": "Taxi",
      "type": "bool"
    },
    { "name": "Docked",
      "code": "ad",
      "gsCol": "AutoDocking",
      "type":"radio",
      "choices": {
        "d": "Docked (not Engaged)<br>",
        "e": "Engaged<br>",
        "a": "Attempted but failed<br>",
        "x": "Not attempted"
      },
      "defaultValue": "x"
    }
  ],
  "teleop": [
    { "name": "Cycle Timer",
      "code": "tct",
      "gsCol": "CycleTimes",
      "type": "cycle"
    },
    { "name": "Grid Scoring",
      "code": "tsg",
      "gsCol": "GridScoring",
      "type": "clickable_image",
      "filename": "2023/grid_image.png",
      "dimensions": "9 4",
      "clickRestriction": "onePerBox",
      "toggleClick": "true",
      "showFlip": "false",
      "showUndo": "false",
      "shape": "circle 12 black red true",
      "cycleTimer": "tct"
    },
    { "name": "Dropped Game Pieces",
      "code": "tdgp",
      "gsCol": "Dropped",
      "type": "counter"
    },
    { "name": "Was Defended",
      "code": "wd",
      "gsCol": "Defended",
      "type": "bool"
    },
    { "name": "Who Defended this bot<br>(Team #)",
      "code": "who",
      "gsCol": "DefenderTeam",
      "type": "text"
    }
  ],
  "endgame": [
    { "name": "Docking Timer",
      "code": "dt",
      "gsCol": "DockingTime",
      "type": "timer"
    },
    { "name": "Final Status",
      "code": "fs",
      "gsCol": "FinalStatus",
      "type":"radio",
      "choices": {
        "p": "Parked<br>",
        "d": "Docked<br>",
        "e": "Engaged<br>",
        "o": "Out of Community<br>"
      },
      "defaultValue": "o"
    },
    { "name": "Total # of alliance<br>robots docked/engaged",
      "code": "dn",
      "gsCol": "AmountDocked",
      "type": "counter"
    },
    { "name": "Links Scored",
      "code": "ls",
      "gsCol": "Links",
      "type": "counter"
    },
    { "name": "Co-op Grid",
      "code": "cg",
      "gsCol": "CenterGrid",
      "type": "bool"
  },
    { "name": "Penalty Points",
      "code": "pp",
      "gsCol": "Penalties",
      "type": "number"
    },
    { "name": "Match Result",
      "code": "mr",
      "gsCol": "Result",
      "type": "radio",
      "choices": {
        "w": "Won<br>",
        "l": "Lost<br>"
      }
    },
    { "name": "Total Score",
      "code": "ts",
      "gsCol: "Score"
      "type": "number"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "code": "ds",
      "gsCol": "DriverSkill",
      "type": "radio",
      "choices": {
        "n": "Not Effective<br>",
        "a": "Average<br>",
        "v": "Very Effective<br>",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Defense Rating",
      "code": "dr",
      "gsCol": "Defense",
      "type": "radio",
      "choices": {
        "b": "Below Average<br>",
        "a": "Average<br>",
        "g": "Good<br>",
        "e": "Excellent<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "Died/Immobilized",
      "code": "die",
      "gsCol": "Disabled",
      "type": "bool"
    },
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
      "gsCol": "Tippy",
      "type": "bool"
    },
    { "name": "Make good<br>alliance partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "gsCol": "GoodPartners",
      "type": "bool"
    },
    { "name": "Comments",
      "code": "co",
      "gsCol": "Comments",
      "type": "text",
      "size": 15,
      "maxSize": 50
    }
  ]
}`;
