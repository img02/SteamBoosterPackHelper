{

  "manifest_version": 2,
  "name": "SteamBoosterHelper",
  "version": "1.0",

  "description": "Quickly open and create all your booster backs.",

  "icons": {
    "48": "icons/icon.png"
  },

  "content_scripts": [
    {
      "matches": ["*://*.steamcommunity.com/id/*/inventory/"],
      "js": ["OpenBoosters.js"]
    },
	{
      "matches": [
	  "*://*.steamcommunity.com/tradingcards/boostercreator", 
	  "*://*.steamcommunity.com/tradingcards/boostercreator/*"
	  ],
	  
      "js": ["MakeBoosters.js"]
    }
  ]

}
