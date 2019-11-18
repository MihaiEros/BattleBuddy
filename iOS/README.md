#  Battle Buddy iOS App

***THIS REPO IS CURRENTLY A WORK IN PROGRESS! I WILL BE ADDING MUCH MORE DOCUMENTATION AFTER THE INITIAL RELEASE!***

## <u>Roadmap</u>

- [x] Submit v1.0
- [x] Release v1.0
- [ ] Release v1.1 ***In development - see TODO list below***

## <u>v1.1</u>
- [x] Refresh global info when app foregrounded
- [ ] Fix comparison screen bugs
- [ ] Settings
    - Nickname
    - Enable Banner ads
- [ ] Stereo audio tool
- [x] Add app version info to about screen for debugging
- [ ] Bugs
    - Arabic HP fraction order
    - Arabic Comparison Layout issue
    - UIWebView deprecation
    - Pen chance cell text size
    - Jittery post screen
    - Fix ads
    - [x] More menu cells issue
- [ ] Global metrics
    - [x] Leaderboards
- [ ] Add New Item Types
    - Helmets and accessories
- [ ] Implement Banner Ads (if setting enabled)
- [ ] Penetration Calculator Improvements
    - Helmets/face shields/mods
    - Armored Rigs + Multi-layer support to ballistics calc
- [ ] Health Calculator Improvements
    - Add fragmentation toggle
    - Armor Zones
- [x] Attributions Additions
    - SmooothBrain for design work
    - Betrix for images
- [ ] Double-check Korean translations

## <u>v1.2</u>
- Display shot result
- News/changelog
- IAP
- BSG Twitter Feed
- Skills and how to level them
- [ ] Add ? info to health calculator
- [ ] Add ? info to comparison screen
- [ ] Additional Info to Existing Items:
    - Compatible Mods on Firearms
    - Related items feed
- Comparison Screen Improvements
    - Revisit range again
    - Color scheme preference, gradient, black/white, highlight best/worst?
- Favoriting Items
- [ ] Reduce image sizes in Firebase storage
- [ ] Known issues post
- Firearm building
    - Custom
    - Max ergo
    - Min recoil
    - Random
- V-Harmony Item Matchmaker (play on e-harmony)
    - Select the type (gun, armor, helmet to start)
    - Questionnaire - What's is and isn't important to you? Fire rate, bullet, pen, damage, mobility, etc
    - Show sliders to value each item by its importance to you
    - Slider value applies multiplier score to stat
    - Take all items and rank
- Strat Roulette
- Task item checklist / shopping list
- Gun building help + random build + UI
- [ ] Survival rate calculator
    - Survival rate
    - Investment per run
    - Total earned per run
- [ ] Change upcoming features blog post to news / updates
- [ ] Push notification support v1.0
- [ ] Shots to kill calculator
    - Choose target
    - Choose armor
    - Choose aim type (thorax only, headshots only, leg meta)
    - Choose fragmentation type (never - worst case, always - best case, ammo specific - realistic)
    - Calculate
- [ ] Add New Item Types
    - Rigs
    - Helmets and accessories
    - Headphones
    - Mods
    - See all attachments that fits on it
    - See all mods it can attach to
    - See all mods it conflicts with 
    
## <u>Backlog</u>
- Nuke UIKit to the ground; Foundation FTW
- Surveys
- Crowdsourced images + gallery for items + fullscreen images
- Profile
    - Supporter type
    - Ads watched
    - Join date
    - Choose username
- New player interactive survival troubleshooting flowchart
- Evolutionary-esque algorithm for ballistics simulation?
- Accessibility audit - implement now or with swift UI?
- IoT Integrations
    - Siri / Alexa / Google Home
- Items
    - Bags, containers, etc
    - Add additional info to existing items, like where they can buy/find the item
    - Scopes
        - Show reticals / different modes / images 
- Tools
    - Does <item> fit on <item>?
- Learn
    - Skills / mastery
    - Useful hotkeys
    - Maps
    - Quest Info
    - Trader Info
- More
    - BSG twitter news
    - Youtube feed from select people
- Create GEAR tab that holds armor + other gear like rigs, comtacs, etc
- Random loadout generator
- Sharing content?
- Push notifications?
- Location maps w/ filtering on spawns/extracts/etc
- Quests
- Trader
	- Level / rep requirements
- Mac support
- Twitch intergrations/alerts/overlays?
- Everything we know about the wipe - !wipe video, soonTM, clips, etc
- Soundboard?
    - Yeet
    - Moist
    - PMC lines
    - Scav lines
- Logging

## Pre-release Checklist
- [ ] Update Localizations
- [ ] Check any TODOs
- [ ] Update screenshots?
- [ ] Write 'whats new in this version'
- [ ] Ensure all keys are updated with production keys
- [ ] Google Ad Mob
- [ ] Update attributions


# Architecture
- [ ] There's files and folders and shit... More to come here once I get some time to make some nifty diagrams...

## Project / Repo TODO:

- Unit testing, cc, ci
- Finish documentation
- Migrate to Swift UI
- Accessibility
- Combine framework
