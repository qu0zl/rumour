var rumours = [
// Market District
"Have you met Wilie, the old halfling market guard who collects the toll on Market Bridge? He may look decrepit and he definitely is a sour old puss but he never forgets a face.",
"Grand Plaza in the market district is the biggest open air market in the city. It's the place to go if you're looking to trade in in bulk, but the wrong place to go if you're just shopping for y'self.",
"They lost almost two whole blocks of the market district to fire a whiles back. It still stands there, black and ruined. You'd think people'd fix it up; that's prime real estate!",
"You can get in and out the city gates, day or night. Course, if it's night, they'll make you identify yourself 'fore they'll open the gate!",
"I do my drinking in 'The Pride of the March' tavern over in the Market District.  Sergeant Vassale doesn't allow spellcasters, or any other undersirable types, in. It's a place for honest, fighting men.",
"Durst, owner of The Felled Ogre, killed an ogre with a single punch!",
"Helman Hillman's bedded half the noble women of Bard's Gate, if you'd believe the rumours. Not bad for a half-ling. Sure he'd only come up to their waist!",
"If you need any special documents, talk to Poldo at \"Poldo's Dyes and Pigments\". Tell him that you're looking to buy \"doppleganger ink\". You didn't hear that from me though, clear?",
"The Inn of Six Candles is quite the finest establishment in all the Market District. Tell the concierge Charles that you're friends of mine and you're guaranteed the finest service.",
"Strathian Silverspear and his Company of The Silver Spear, over at the Inn of Six Candles, are quite the finest group of adventurers that I have ever seen. They're high-class, not scruffy vagabonds like every other adventurer I've ever met!",
"Lasker's kidney pies are to die for! It's a pity that the 'Pies and Puddings' only opens occassionally or I swear I'd eat his pies every day! Strange that his shop has no windows. You'd think a masterchef like that would be happy to let people watch his work!",
"The Paasha's from some strange land far to the east. I once ate in his restaurant. Amazing! The Spices! The flavours! He's really acclimatising to Bard's Gate; sometimes his accent falters and it's almost like he's from round these parts!",
"Brendus of The Beast and Bow makes his living hunting beasts, mundane and magical. He's got a stuffed Kamadan! and an Owlbear! and a BareOwl. Or something like that anyways",
"Phidian, the great sculptor, is looking for a patron to fund the creation of his life's masterwork. I hope he lives to see that through!",
"If you want to see dangerous and exotic creatures, why not just visit 'The Bestiary' in the Market District? They've got a rust monster, an otyugh and even a mated pair of kamadans! Much safer than looking for them when they're not in cages!",
"Velior may be the finest magical crafts-elf that this city has ever seen. Even his tower is a work of art.",
"The Society of Arms is the place to hire a small army! It's the fighter's guildhall, over in the Market District.",
"There's a haunted shop in the burnt part of the Market District! You can hear ghostly moans coming from it during the night. Maybe it's the ghosts of dead rats; it is an exterminator's shop by day after all.",
"They've been working on fixing up that warehouse on the edge of the burnt part of the Market District for months. Doesn't look like they've made much progress to me. Some poor fool is being taken for a sucker by those work-men!",
// Black Market
"There's a whole hidden underground district somewhere west of the Stoneheart river, so I hear. All the scum of Bard's Gate know about it. The Burghers ought to do something! Maybe not Cylyria, she's a weakling, but Burgher Armitage, now he'd be the man to stop it!",
"I heard there's a secret underground auction house where you can buy or sell anything, or anyone!",
"Fusini and Umberto, the great masters, are livid. Some forger is flooding the market with imitations of their paintings, and the worst bit is that he's pretty much as good as they are!",
"I overheard a halfling in the Inn of Six Candles telling a Dwarf that he could source forged coins, of any currency! He looked like he was trying to set up a business deal. I think he noticed me watching him, because they both got up and left straight away.",
"Most of the taverns, even the supposedly respectable ones, buy alcohol of dubious providence. I used to run errands for Fliese Norbel, till I realised that the alocohol I was trading was probably stolen.",
"If you can find him, Rocky Kleege, is the guy to go to to borrow large sums of money. At high interest. With really nasty repurcusions if you don't pay it back!",
"Young children are going missing in the poorer parts of town; thieves' quarter, Turlin's Well and the Outer Quarter. Undersheriff Kotchko(K5) is desperate to stop it and he'll pay for information.",
"Strange bandit attacks have plagued Tent City these past few weeks. Thick fog rolls in from the fields east of town, and screaming and death follows fast behind. Travellers and possessions have disappeared in the attacks. It's the gods punishing us for letting any scum who wish camp near our city, no offence meant to y'all.",
"The dead don't sleep proper at night in the City of Ashes. Only a fool goes up there after dark.",
"Hand of Fate? Pah! Looks more like the foul claw of some hideous beast to me.",
"There ain't no toll to use the Stoneheart bridge t'north of da city. If you look proper, The Free Defenders won't bother ya much, but if they take a dislike to yah, then they'll get real intimate.",
"The Citadel of the Griffins is our first line of defence. The Lyreguard did us proud when the Hunn invaded those years past. 30 miles is too far for these old bones, or I'd head north and thank the Lyreguard myself.",
"I heard that King Ovar's gonna return from the deserts of Irkaina soon, riding his Black Dragon, and leading the victorious Foerdewaith army! That's gonna be some sight; I hope my boys make it back with him, they went to slaughter those Huun filth.",
"It's been 2 years since anyone's heard word of the army pursuing the Huun. May'hap they all vanished like the Army of Light. It's Orcus' work, I'll wager.",
"14 months of siege sure makes you enjoy the quiet times. Even if it's been 2 years now.",
"Sometimes you'll get away carrying weapons in the outer quarters, but try that near the keep, or anywhere sa-loo-bri-us and you'll see how much patience the guards have.",
"There ain't much love lost between the Sheriffs and the Constables. The 'Brownies' don't get paid as well as those fancy Sheriffs. I guess walking the beat and solving crime ain't as imporant as serving warrants and holding prisoners. High Sheriff Topfer Brighteye's a good'un though, can't argue 'bout that.",
"Seems a bit daft that the head of each guild gets the same vote in the Council of Burghers. Wheelwrights must must be ten times the size of the Alchemists' Guild, but Duloth Armitage still only gets a single vote. Don't seem quite right to me.",
"The Wizard's Guilds' lead by the Dominion Arcane. The Dominion's supposed to be secret but the naivest country bumpkin knows that Velior, Andrigor and Manisool are part of it. You knew that, right?",
"Even the lowliest Magic User is welcome to join the Wizard's Guild. I hear they trade knowledge better left unknown. No good ever came of magic users, that's what my Pappy always said, and he should know, he married one.",
"Something horrific happened to the old thieves' guild, 'The Grey Deacons' a decade past. They completely disappeared overnight. I'd wager they got on the wrong side of Duloth.",
"The wheelwrights 'av got thousands of men, and thousands of cudgels. They can even bring trade to a stand-still. Sometimes I think they're the real power in this city.",
"If you upset the wrong person, you might just meet an assassin from the Red Blades in a dark alleyway.",
"The thieves, the vampires, and the cart makers are all in league. In league, I tells yah!",
"You heard of the Longhunters? Not many have. Great rangers, they help keep the wilderness around the city safe. You won't see them inside the city, too many people for their liking. Sometimes they'll be over in Fort Rendezvous in Tent City. I think the wildness there is more to their liking. Me, I prefer silk sheets and warm beds.",
"I heard some damn fool Dwarves, in the Outer District, singing tales of their Lost Kingdom. Over in the Stoneheart mountains somewhere. They even tried to recruit some nearby Dwarves to venture up onto the Ice Plateau. Hah! They'll find it hard to sing when they're frozen into icicles.",
"I don't know why everyone thinks the Huun all fled. Makes sense to me that some of them could still be out there, hiding in the forests like the stinking brigands that they are.",
"Hot summer days can be hard. Great black swarms of insects come up from Stoneheart forest and drive both man and mule mad. The only thing they won't bite is those poor plagued beggars who stumble 'round outside the city walls.",
"I heard there's a knight and his retinue riding out from the old Tradeway abbey of Vannithu. He ain't much of a 'Vigilant Guard' though, I heard he robbed a mechant, stripped him down to his undergarments, and left him to walk back to the city. I wonder what Vannithu thinks of that!",
"Some bizarre flying three-headed creature attacked a group of adventurers near the Valley of Shrines. The survivor said that one head was like a Dragon's, one was like a Lion's, and one was some kind of demented sheep. You know the strangest thing? That guy had no eyebrows left - they were all singed and burnt off! Weirdest thing I ever did see; he looked perpetually surprised, if you know what I mean.",
"There's an old Black Dragon done set up lair in the Gem mines near the Valley of Shrines. The city was just about to drive him out when the Huun attacked. I'm sure the Burghers haven't forgotten about all those gems though. That Dragon's days round here are numbered.",
"There's Orcs in the hills to the west. How do I know? I bought a Longhunter a drink over in Tent City.",
"The Silverhelm Dwarves shut the doors of their Halls to everyone maybe half a decade ago. They used to be such good friends to the city. I wonder why they did that?",
"A few tired, desperate looking souls, came into town last night. Said they were the only survivors of the village of Taverlan and claiming that their village was attacked by dozens of monsters. Monsters like people but with strange dog heads!<br>I dunno, maybe they were just hoping to losen my purse strings with their crazy tales, but I do think someone should check on the village. It's 3 days to the north, near the west shore of the Stoneheart river.",
"Lisetha, a singer at the Inn of the Six Candles, is of noble birth! Pieter, her father, disowned her when she became pregnant and she refuses to say who the child's father is. Piter suspects half the young nobles of the city and he'll die in one of his ridiculous duels with them soon, no doubt.",
"I'm sure that someone would pay good coin for some eggs from the Citadel of Griffons. I don't think the Lyreguard would take that kindly though!",
"You ever seen Griffon riders in flight? You'll see them soar over the city patrolling sometimes. I saw one land on the Keep just yesterday. Probably bringing a message from one of the Citadels, I suppose.",
"They've done a good job rebuilding the Citadel of Ravens after the Huun razed it. The Huun couldn't ignore a Citadel so near to the city. I still remember the smell of the burning bodies of its defenders, the alive and the dead, stacked up outside the city walls in a great funeral pyre. The Huun couldn't break our spirits then, or ever.",
"You can trust a Gatesman. They pay them well, and move them between gates often enough that they can't get up to much badness even if they wanted to. Plus, they brand the odd enterprising one who still goes bad. Who wants to go through life branded? Not me!",
"My sister-in-law's a Wall Watcher. Proper name for them that. They might as well be watching walls for all the excitement they see. Imagine spending the whole night just staring at the city from the wall, and they're the lucky ones. Their poor partner has to stare out instead! I bet they're the only ones who hope that the Huun come back soon so they've something interesting to look at!",
"If you want information then go seek the Beggars in the Canal district. I'd swear some of them know everything that goes on in this city!",
    "The Shadow Masks are such expert spies that you don't go to them when you need to hire a spy, they find out and they come to you!",
    "The Dog Soldiers are what passes for law and order over in Tent City. Don't bet on them being around when you need 'em, and if they are, they may just string up whoever their idea of frontier justice says is in the wrong.",
    "I wouldn't hang out 'round the Docks, the Canals or the Thieves Quarter after dark. Actually, I wouldn't hang out in those places during the day much either!",
    "While few notice beggars, the beggars themselves notice much,",
    "The Scribes Guild knows everybody's business by necessity, but they won't talk. More trustworthy than a priest of Thyr that lot are.",
    "The Gem Cutter and Jewelers Guild is where I'd start looking for work. Especially if I wanted to rob my employer!",
    "Oghma is the most widely worshipped faith in the city. When High Harpist Jared Strahn speaks, everyone listens. Everyone with sense anyway.",
    "Bard's College is the intellectual core of the city. Bards, Magic Users, Poets, Artists, all that is elevates us above the beasts.",
    "Maestro Lauriann Danyr is more than just the chancellor of Bard's College. She's a clever politician too. Sharp, and wise, but she ain't nasty. The College is lucky to have her.",
    "It's sad what happened to Brelliar the Conjurer. He was a sharp as a tack, a great wizard and one of the good ones , you know. Then overnight he was as forgetful and confused as my poor old grand-pa in his final years. It's scary to think that dementia can come on as suddenly as that, I'd never thought it possible before. Maybe he dabbled with something that he shouldn't have.",
    "If you want the truth in the city, about the abuse the small folk take at the hands of the big folk then you should read 'The Underground'. It sells out of Underhill, but you can pick it up elsewhere too.",
    "That mining magnate, Boleggo Deepdigger, is just getting stranger and stranger as the years go by. I don't think he's been outside of his home in a decade. Shame, all that wealth and he's as barmy as an owlbear from what I hear.",
    "They say that Thilo the Sighted over in the North Wall district is a gifted oracle. Maybe he can't see with his eyes, but I hear that he sees all that goes on.",
    "Andrigor might well be the most powerful Magic User in all of Bard's Gate. Cylyria has certainly benefited from his support. He chooses his apprentices carefully too; they've all turned out well. Wise man, that Andrigor.",
    "There's a Ghost that haunts the Mask and Lute theatre! Frightens the actors, disrupts the plays, nearly dropped a chandelier on some bystanders. Shocking!",
    "The mercenary company, Blackfinger's Devils, over in Tent City, is always looking for new hires. Denin Blackfinger doesn't throw his soldiers' lives away, which is unusual enough for a mercenary captain.",
    "Asleif, the Tent City book-seller, is searching for a very special book. She's convinced it's somewhere in Bard's Gate. Her business may not look like much, but I know that she'd pay well for it.",
    "Mama Bobo can see the future. She can look into your soul and know your fate. She even knew where my wedding ring was when I misplaced it in the Hall of Delights.",
    "Fort Rendezvous is a good place for drink and trade in Tent City. Colonel York is a OK type, but Colonel Portland is my kind of man. He's got no time for those filthy half-breed half-orcs or half-elves. He'll still take their coin but nobody's perfect, I say.",
    "Filini in tent city sells the most amazing rugs. They're to die for! You can't throw a party and expect guests to slum it standing on cold marble floors, oh no, dear, that wouldn't do at all! And the colours! Exquisite! Really, I must have some for my next soirée or everyone should think me terribly uncouth.",
    "Keep away from the dirt track and the ponies out by Stable Row. I had a good business before some bad judgement and some bad bets lost it all for me.",
    "If you need armor for your horse, or even your pet dog, then Porsis Gendarme at The Guardian Mount in Stable Row is your woman.",
    "If it's riding horses you need then git on over to Stable Row. They got all kind o' horses. Just don't buy the stolen ones? How'd you know which ones are stolen? How'd the heck would I know?",
    "Something keeps attacking and killing Harold the Herder's animals, over in Stable Row. I'm sure he'd pay a fair price, or some good animals, if someone can put an end to that for him.",
    "My cousin's a Wall Watcher and he had to watch some poor fool be torn apart by some undead abomination out in Hel's Acre. He's a great archer, my cousin. Ended up putting that fool out of his misery with a well aimed arrow. It was a kindness, I'd say.",
    "I heard 7 gate guards tried to help some kid who wandered into Hel's Acre. The kid's dead now, and so are the guards of course.",
"The Caretakers' Guild can help you dispose of unwanted bodies discretely, or even get bodies if that's your kind of thing.",
"I spent one night in the Inn of the Fallen Tree in the Thieves' Quarter when I arrived in town. One night, no more, no way. The stink of garlic out of that weird recluse's room, yuck! Just walking past his door made me retch.",
"Mighty suspicious if you ask me. Why is that guy, Aaronic, bothering to run a school for orphans in the Thieves' Quarter? I don't get it. What's in it for him? What's his angle? Probably training himself an army of pick-pockets, I'd wager. It's a good idea, maybe I should open an orphanage too!",
"You never heard this from me, but Fat Juliello Broad-Toe is a real parasite. He's all smiles and friendliness as long as you keep losing your money in the Fortune's Fool, and lose it you will if you go there!",
"You know, Slip-Gallows Abbey and the whole of Rogues' Island is haunted. Nobody who goes there comes back, I heard. Word is that whatever wiped out the Gray Deacons turned them all into weird brain-sucking monstrous tentacled creatures! I don't care how much wealth those thieves had, it's not worth the risk!",
"If you like whips and chains then Mistress Honeysuckle in the Cat o' Nine over in the Thieves' Quarter is your lady. She's magnificent! I just figured that might be your thing, you have the look, you know.",
"Thayco Manslayer of The Keen Edge in the Guild District has taken to managing a bare-knuckle boxer! A brutish half-orc. Thayco's finally managed to combine his two loves - gambling and violence!",
"Milago, over at The Woven String, is always looking for foolish adventuring types to get him the exotic materials he needs for his strings. He'd make a Bow string out of Dragon Gut if he could find some fool to source it for him!",
"Darius Dougel of the Brain Pan crafts the finest helms in all of Bard's Gate",
"Wareth Drumstrike of the Iron Standard is the finest shieldsmith in the whole city.",
"Amaryllis Silverfeet is looking for adventurers to help her hunt a Black Dragon! She's famous for making fine armour out of their scales. I hear that all she ever takes it the Dragon Skin and she doesn't care about its horde. Artisans are truly strange.",
"I hear that there's vaults full to the top with gems and precious stones in the Gem Cutter and Jewelers Guildhall!",
"Burgher Barik of the Stoneworker's Guild is looking to hire adventurers to inspect the Bard's Gate Mine. There's a Dragon in there, I can tell him that now for free!",
"There ain't no entrances to the The Tower of High Incantations, but that don't stop those hoity-toity Wizard Guild inner circle weirdos. Who knows what weird depravity goes on in there?",
"Sleek John, in the Guild District, has great deals. How he manages to pay for the goods and the city taxes and still sell at those prices I just don't know. He can even get you some more unusual items and he don't ask no questions.",
    //Turlin's Well
"You can sail a boat into some of the sewer tunnel entrances over in Turlin's Well. A small skiff mind you, but that's still a boat!",
"My pappy sometimes talked about five Turlin Well sewer tunnel entrances. He was a pipe-cleaner, you know, and then bring heavy construction material in through them. Maybe he went senile bit earlier than I thought, there's only 4 entrances! Zors rest his old bones.",
"I heard that Virthalia in Turlin's Well is a friend of Cylyria herself! I 'spose Virthalia ain't bad for a magic user.",
"If you want to research anything then the High Sanctum of the Scroll is the place to go. Bring a book though, or they won't let you in!",
"That tall tower you can see? That's the High Sanctum of the Scroll, the tallest building in all of Bard's Gate. I'm not sure if they worship Yenomesh or worship books over there! Why would any building need 8 libraries? Why would it need 1! If the Gods wanted us to read that much, books'd grow on trees.",
"Master Scribe Drembrar and his scribes have weird parties at the High Sanctum of the Scroll. They all dress up as books and read each other. That's what I heard, anyways.",
"I ain't a bleedin' guide-book. If it's maps you be wantin' then go buy one in 'There and About' over t'in Turlin's Well.",
"I heard some fancy Lord paid Mr Terrafyrma a lot of money to destroy a map of his estate. That Mr Terrafyrma's got maps of almost every building in Bard's Gate. Fancy people, with fancy stuff, don't want uncouth types buying maps of their houses! Can't blame them, I 'spose. Nobody'd want a map of my house, I can tell you that!",
"I'm surprised there's much call for buying beetles, and beetle-bits, monstrous or otherwise! How Takkerk at the Temple of the Beetle makes any money, I don't know.",
"Gunther, in the \"Silent Strike's\" been to Rappan Athuk, or so he says. I believe him, he goes pretty quiet when you ask him 'bout it and he don't look happy. Maybe I should stop askin' him 'bout it, I 'spose.",
"I saw a young noble showin' off his party trick in the Aleman's Guild last night. Lost an arm in a huntin' accident he did, but got a new one from Ashtin over in Turlin's Well. Could pop a dagger out of it quick as a flash. I was more impressed when he popped that flask of whiskey out instead and offered it round! Good as a real arm, maybe better with the whiskey and all.",
"Enix Axlecrafter shouldn't 'av spoke up against Duloth. Won't be long till the Oiled Axle's out of business, what with all the accidents and workers bein' poached.",
"Tal Rowiv makes such good fake jewellery that I bet you could swap it with some noble's finest and they'd never even notice. Wonder if anyone's ever done that?",
"Turlin's Well is home to many of the city's finest up-and-coming artists. Utello, Fusini, Gin Wa, it's an exciting place to be if you have any appreciation for the arts.",
"My niece told me that the 6 finest caskets that Zedicha ever made were stolen from the 'Box of Bones'! Fellow who ordered them never came back for them though. Lucky for Zedicha, what with them being stolen on her and all.",
"You're adventurers right? Maybe you should order some caskets from Zedicha over at the 'Box of Bones' yourselves. Best to get these things sorted, just in case, you know.",
"They'll ink spells right into your skin at 'Eldritch Inks' in Turlin's Well. Crazy!",
"Vok Wightkicker's got a pet Toad that drinks whiskey! T'is a gods awful ugly creature! Anyone who spends that much time 'round magic books is gonna be a bit strange, for sure.",
"Arta the half-orc may be better at beating brutish husbands than she is as a laundress, but she's still popular amongst us ladies of Bard's Gate.",
"There's a sting in the \"Wyvern's Tail\" tavern. Laamar's fists!",
"Stein, the tavern-keep at Alms, Liquor and Entertainment is a good sort. When I've been down on my luck he's given me food and drink and not asked for anything in return. I'm happy to say that I paid him back, now that I'm on my feet again!",
"Volwild the Swordmaker has a giant's sword. Nope, not a giant sword; a GIANT's sword. Surely that's too big even for Volwild to wield, and he likes his swords big!",
"If you've ever fancied yourself a thespian then you should go to the Mimic's Guild. Anyone can act in their performances and you don't even need to speak! The screams of terror, shouts of agony and howling laughter they provide make the drunkest bumbler appear a master of the stage.",
"The Thorn Wall doesn't seem quite right to me. Too many weird plants, and sometimes Dorbon gets in a huff and won't even sell his stock if he don't like the look of you, or has gotten too attached to a plant!",
"Nothing like a soak and a steam at the 'Up in Smoke' steam house to get the stink of the city out of your pores. That place's holier than a temple to me!",
"I don't normally look like this! I was accosted last week in Turlin's Well by a band of thugs, and they cut off all my hair! I had lovely long brown tresses, you know. Now I look like some kind of ruffian! I think I'll buy a wig in 'The Woven Hair'. Hopefully Ahmen'll have a good match for me!",
    "The Maiden's Cross Tavern in Turlin's Well is an odd one. Jenette, the owner, only hires women to work there, and I saw her arguing in the street with Bofred the High Priest of Thyr. She gave as good as she got, I'd have thought she was a Paladin herself if I didn't know better.",
"Good friend of mine's scared witless of the \"Maiden's Cross\" tavern. 'e won't say why, and he ain't no namby-pamby, stabbed a brownie once, 'e did. Must 'av got a bad pint there. Alc'e'hol's a terrible thing some times.",
    "'av you 'eard 'bout ta Saints o' Turlin's Well? Vigilantes, ye know? Crackin skulls and righten wrongs. Best ting t'happen to the Well in memory, I say. T'authorities don't care 'bout us little folk.",
"'Dour' by name, 'Dour' by nature. You won't be bowled off your feet with friendliness at 'The Divine Apothecary', but old Dour is good at what she does. Losing your husband like that would make anyone unfriendly, I suppose.",
"Want to buy some tomatoes? Rotten as muck, they are. Perfect for one of Armando Levane's plays at 'The Velvet Curtain.'",
"Thitus Thell speaks Dwarven and plays the lute. Kind of unusual for someone as deaf as a door-post! Great blacksmith though, he learnt that along with their language from the Dwarves.",
"The Desfort family are barmy as a drunk goblin! Too much money, and not enough fresh air has made them all a bit peculiar.",
"It's a sight to behold to see them builing the big ships in the Naval yard dry-docks. I worked as a shipwright for decades, back when they considered it part of East Docks and before Turlin's Well poached it.",
"You'll find the River watch in the City Naval Yards. They keep the river safe. Even kept the Huun out, they did, under their old commander Standise Ellerton. He was a big loss, blast those Huun!",
    "Poor Gustof Von Blaw (TW) spent a fortune on some exotic machine for scribing. All the way from Castorhage, I hear! Turns out it don't work so good though. The 'Lyre Valley Press' is probably in trouble.",
    "The Wizard's Familiar in Turlin's Well is where magical types like to kick back and relax. You couldn't pay me to go to that Inn, even if they'd let me in. They'd probably turn my poor old skin inside out!",
    "The Aleman's Guild bar organises barrel races every month. Drunken fools racing ale barrels from West Sardinha Way bridge to Reyst Way bridge. It's a miracle nobody's died yet, I'd say",
    "The plaza of Dark Pleasures always had a uncouth reputation after night fall, but now bodies are turning up in the bushes. That just ain't right. If you ever have trouble there, then the bouncers at the Aleman's Guild are probably your best hope of protection.",
    "There's an old derelict warehouse, halfway up Landwehr Lane in the Well and piled high with rat's filth. I pass by it every morning on my way to work. Sometimes there's weird high pitched animal sounds coming from inside. No wonder nobody will buy it; you'd probably catch the plague soon as sniff the place.",
// Outer Quarters
"The Huun really hammered the Outer Quarters during the siege. Much of it was burnt to the ground. It's mostly new buildings now, but they're so shoddy that you can hardly tell!",
"You'll find most of Bard's Gate's non-human population living in the Outer Quarter. Dwarves, gnomes, halflings and half-orcs live in ghettoised enclaves there. Those that don't live under the hill, that is. The Elves are different, rich folk don't seem to mind them living nearby so you'll find them in fancier districts.",
"Founders’ Park may be the safest spot in the Outer District. It ain't the statues of the founders watching over you; it's the constable's station right beside it!",
"The 'Stoneheart Mountain Distillery' looks more like a fortress than a distillery. They're probably worried that Brin Zwiescher would be happy to see it burn to the ground...",
"They only allow Dwarves into the 'Stoneheart Mountain Distillery'. Dwarves, and that one, drunk, Half-ling! You never see him without a couple of Dwarven thugs minding him. Wonder why the distillery keeps him around?",
"The 'Brownies', or 'Constables' if you're bein' all fancy-like are garrisoned in the Outer Quarters. That old small fortress beside the Founder's Park. T'is funny seeing Brownies diggin' up weeds and shovelling horse manure! They keep the park lookin' good but they'd be better chasing ne'er do-wells, if you ask me.",
"Utello's work makes me shudder! The things he sculpts, yuck. I'd not want to see what he must see when he closes his eyes! Gargoyles, demons, death. Truly great artists are all insane, or possessed maybe!",
"Shylor, in the Outer Quarter, is a strange one. He's been seeing the future in dead animal's innards since he was a kid. I'd say he's just a crank but plenty of the great and the good pay for his services.",
"Caramip's a clever one. She redesigns rundown old buildings into useful shops. Though her real passion is designing secret rooms and tunnels for her richer clients. Her design sketches would probably be worth money to the right people.",
"Bogdan Rockroot doesn't like Hauk much. Thinks his demolition crew are under-cutting the 'Underbuilders Union.' Hah! Under-cutting, demolition, get it? Hilarious!",
"Caagrah in the Outer Quarter trains the most vicious guard dogs you can find! Also trains riding dogs for the little-folk, he does. Not sure that I'd want to be sitting on one of 'is dogs. Vicious little blighters, just like 'im!",
"You'll get the occassional bargain over at 'The Second Skin'. If Caarn wants to get back at her husband, Glim, over something, she'll sell you dragon hide for the price of pig skin!",
"If you're needin' someone found, Ka'zic the Tracker is the man to go to. Don't be put off by his face, or 'is missin' ear, 'e's a great tracker, 'e is. Always gets his man, 'e does.",
"The twin brothers at the 'Feathered Herald' send missives half way across Akados on their feathered messengers. If you need a message relayed to a distant land, try them.",
"If you want to float then check out Mistress Wu's 'Dreams of Feng' bath-house. You'll float real high, if you get my meaning.",
"Try a taste of the Far West! 'The Rising Dragon' serves the most delicious and exotic dishes in all the Outer Quarter. Try Deng Lo Do's special chicken, it's divine!",
"Almost no-one travels by the North Gate anymore. Not for three centuries, since the army of light marched north from it for Tsar, and to their eventual doom in Rappan Athuk. You'll get the odd loon wandering in, but mostly it's just guards and clerics watching Hel's Acre from behind closed gates.",
"If they're going to leave it closed all the time then they should just brick over North Gate, like they're always talking 'bout doing. It's cursed. We don't like defending it and even the Huun didn't like attacking it. Though attack it they constantly did. Energetic types, those Huun. Can't argue about that.",
"Tsar and the desolation lie six week's travel north of Bard's Gate. The Desolation cut off the rich north overland trade routes. Now only adventurers go that way, seeking their fortune. Some return, most don't.",
"Lucy Fucher is making herself powerful enemies. She's brave, no doubt, to be speakin' out against Duloth and the Wheelwrights, but why she keeps harpin' on about Thomokos of 'The Hidden Lady', I don't know. He's just a simple tavern-keeper.",
// temple district
"High Guardian Elissa Perinor is always looking for more recruits for the Order of Protectors of Vanitthu. You'll often see their battle clerics riding along with the Free Defenders, or the Lyre Guard. Bard's Gate is lucky to have them.",
"Why would anyone worship Thyr or Muir? They lost their burial halls, heck, they lost the entire Valley of Shrines! Bofred and Barahill may want a crusade to get them back, but you'd be a fool to put your faith in gods that can't even protect their own shrines!",
"Bofred the Just!, Barahill the Faithfull! Mark those names, the High Priests of Thyr and of Muir! They'll lead the crusade to take back the Valley of Shrines. Them and their Order of the Sword of Retribution. If it wasn't for me gammy knee, I'd sign-up myself. You should sign-up. Do some good in this world, I always say.",
"The Gods of the Old Temple district may have fallen out of favour but it still ain't right to turn their temples into art galleries, cafes or even worse, inns! That sort of desecration is just asking for trouble!",
"You can see free performances at the Old Temple district forum all year round. Exceptin' the dead o' winter, of course! Mostly they're pokin' fun at the great and the good. Show's our great and good are better than in most places, that they don't have a problem with that.",
"High priest Bofred the Just is always looking for decent adventuring types to do Thyr's work for him. He pays and all, you don't just get Thyr's gratitude. You can't spend a God's gratitude!",
"You better not hurt a bird within sight of the Temple of Rhiaan. The bird goddess, or more likely her high priestess Danya Darkfeather, won't stand for it! It's the dark obelisk temple with the clawed winged golden woman on top of it. Makes me shiver, it does.",
"Bast may be a foreign God, but she's welcome here! All the canals, sewers and waste makes a prime breeding ground for rats and plagues, but her cats help keep the rats under control.",
"Couple times a year, when the days are especially short, or long, the elves flock to the Temple of Darach-Albith. You can hear them singing even outside the temple grounds. That's a temple you know? Looks more like a park to me!",
"Sister Jenny is my kind of holy figure! I don't think old Barahill and Bofred approve of a harlot's guild house a stone throw away from their temples but it'd do them some good to spend a bit of time worshippin' in 'The Pink Feathers'.",
"Forgemaster Gruden Greybeard at the temple of Dwerfater is organising an expedition to reclaim the Dwarves' lost homeland up on the ice plateau and to put the King Under the Glacier back on his rightful throne. You know any adventurin' dwarves who'd like to help?",
"If you're willin' to sit through the service, you can get free beer and bread at the Temple of Pekko.",
"My cousin works for the Caretakers' Guild. He picked up a couple of bodies from the shrine of Kamien the river Goddess, a couple of petty thieves who tried to rob the place. It was weird, he said they were all wrinkled and shrivelled, as if they'd spent the night underwater.",
// Catacombs
"The Pipe Cleaners is a good job for a brave halfling. Us halflings fit in the tunnels better, and you never know what valuable items you might stumble across down there. Finders keepers, I always say!",
"Before they opened up the City of Ashes, they used to bury the rich in the catacombs under the Old Temple District. Miles and miles of narrow tunnels. Now you only get the Pipe Cleaners, Paladin patrols and assorted miscreants down there. Not a safe place to wander, I'd wager!",
"The outer tunnels of the catacombs are used to get around by those who don't want to be seen on the streets.",
"Those damn fool Pipe Cleaners tried using gelatinous cubes to clean the catacombs. Well, it might be cleaner now but it sure ain't any safer!",
"It's the strangest thing. I thought I saw the most beautiful elven lady that I ever did see, down in the catacombs! Must have been my imagination, it was dark, and she was strangely dark too. None of the rest of the patrol saw anything. Could be an effect of my vow of chastity, I guess. Takes some getting used to, I'll tell you!",
"Me and t'other Pipe Cleaners stumbled across a strange door in the north of the catacombs. Big and bronze it was, and with a carvin' of a noble knight standin' ontop a tomb coverin' it. Maybe 'tis the tomb of some great hero from long ago!",
"There's heavy locked portcullises protecting some passageways down in the catacombs. Rusted shut they are. Whatever they're protecting musntn't a been disturbed in a very long time.",
"Most o' the catacombs be dusty and parched, but our crew found a part that was damp, dank and stank o' the earth. Me and old Rog weren't havin' none of it. Young Dirk said there might be something of value and that he wasn't for turnin'. Ain't seen hide nor 'air of 'im since.",
"Rats as big as a man, there is down in the catacombs and the sewers. Not all of them walk on four legs, and I ain't talking bout rats of the human persuasion.",
"Ewa and Tessa at the 'Wicked Sisters' have a line on the absolute finest wines in all of Bard's Gate. They wouldn't tell me their supplier, but I aim to find out.",
// Docks
"The whole Docks district is walled off from the rest of the city. Helps make sure that no contraband gets into the city.",
"You know how I can tell that City Docks Commissioner Langer Traeme is an honest man? Duloth Armitage can't stand him! Now there's a good sign, if ever there was one.",
"The Wheelwright's guild representative, Theo is only in the Docks district to help them circumvent the Port Authority guards.",
"Jaeger's pawn-shop seems to attract a lot of Wheelwright customers. Them and the desperate, but the Wheelwrights don't have the look of the desperate about them. More the look of those who cause desperation.",
"If you want to win one of the Aleman's Guild's barrel-races then get yourself one of Ragh the half-orc's barrels. Raised by dwarves, he was. His barrels won't fail you and leave you drownin' in the middle of the east canal!",
"Henderby Leesh, the city custom's officer hasn't been himself recently. He looks like he has the weight of the world on him.",
"Teel’s Warehouse in the Dock's district. Look into it. That's all I'm sayin'",
];
