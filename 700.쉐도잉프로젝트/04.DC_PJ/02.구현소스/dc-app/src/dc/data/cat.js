// 캐릭터 컴포넌트 사용 데이터 - cat.js

const cat_data = [
    {
        idx: "1",
        tmsrc: "./images/cat/cat1.jpg",
        cname: "SUPERMAN",
        cdesc: `Faster than a speeding bullet, more powerful than a locomotive… The Man of Steel fights a never-ending battle for truth, justice, and the American way.
            ^
            From his blue uniform to his flowing red cape to the "S" shield on his chest, Superman is one of the most immediately recognizable and beloved DC Super Heroes of all time. The Man of Steel is the ultimate symbol of truth, justice, and hope. He is the world's first Super Hero and a guiding light to all.
        ^
        The tip of the spear in a revolution that would change the landscape of pop culture, Superman has spent the last eighty years redefining what it means to stand for truth, justice and the American way. The last survivor of the doomed planet Krypton, raised in the quiet heartland of Smallville, Kansas, Superman is as much a legend as he is a man: the gold standard of heroism, compassion and responsibility.
        ^
        Though his powers make him god-like next to his human compatriots, Superman's story is not one of greed or conquest. Instead, he strives to represent the inherent goodness of the human spirit, and the capacity of every living thing to do right by their neighbors.`,
        facts: `
        Powers:
        super strength, flight, invulnerability, super speed, heat vision, freeze breath, x-ray vision, superhuman hearing, healing factor
        ^
        First Appearance:
        ACTION COMICS #1 (1938)
        ^
        Alias/Alter Ego:
        Clark Kent, Kal-El
        ^
        Base of Operations:
        Metropolis
        ^
        Occupation:
        Reporter
        `,
        alignment: "hero",
        type: "indiv",
    },
    {
        idx: "2",
        tmsrc: "./images/cat/cat2.jpg",
        cname: "BATMAN",
        cdesc: `In the name of his murdered parents, Bruce Wayne wages eternal war on the criminals of Gotham City. He is vengeance. He is the night. He is Batman.
        ^
        One of the most iconic fictional characters in the world, Batman has dedicated his life to an endless crusade, a war on all criminals in the name of his murdered parents, who were taken from him when he was just a child. Since that tragic night, he has trained his body and mind to near physical perfection to be a self-made Super Hero. He's developed an arsenal of technology that would put most armies to shame. And he's assembled teams of his fellow DC Super Heroes, like the Justice League, the Outsiders and Batman, Incorporated.
        ^
        A playboy billionaire by day, Bruce Wayne’s double life affords him the comfort of a life without financial worry, a loyal butler-turned-guardian and the perfect base of operations in the ancient network of caves beneath his family’s sprawling estate. By night, however, he sheds all pretense, dons his iconic scalloped cape and pointed cowl and takes to the shadowy streets, skies and rooftops of Gotham City.`,
        facts: `Powers:
        exceptional martial artist, combat strategy, inexhaustible wealth, brilliant deductive skill, advanced technology
        ^
        First Appearance:        
        DETECTIVE COMICS #27 (1939)
        ^
        Alias/Alter Ego:        
        Bruce Wayne
        ^
        AKA:        
        Dark Knight, Caped Crusader, Matches Malone
        ^
        Base of Operations:        
        Gotham City
        ^
        Occupation:        
        CEO of Wayne Enterprises`,
        alignment: "hero",
        type: "indiv",
    },
    {
        idx: "3",
        tmsrc: "./images/cat/cat3.jpg",
        cname: "WONDER WOMAN",
        cdesc: `Beautiful as Aphrodite, wise as Athena, swifter than Hermes, and stronger than Hercules, Princess Diana of Themyscira fights for peace in Man's World.
        ^
        One of the most beloved and iconic DC Super Heroes of all time, Wonder Woman has stood for nearly eighty years as a symbol of truth, justice and equality to people everywhere. Raised on the hidden island of Themyscira, also known as Paradise Island, Diana is an Amazon, like the figures of Greek legend, and her people's gift to humanity.
        ^
        As Themyscira's emissary to Man's World, Diana has made it her duty to lead by example, even if the differences between her birthplace and new home sometimes present hurdles for her to jump. She has come to represent the possibility and potential of life without war, hate or violence, and she is a beacon of hope to all who find themselves in need. She stands as an equal among the most powerful Super Heroes, with a sense of purpose to protect the world from injustice in all forms.
        ^
        Diana's job, however, is anything but easy. Constantly torn between her mission to promote peace and her need to fight back against the pervasive violence of her new home, Diana struggles to walk a line between her warrior strength and endless compassion each and every day.`,
        facts: `Powers:
        super strength, invulnerability, flight, combat skill, combat strategy, superhuman agility, healing factor, magic weaponry
        ^
        First Appearance:        
        ALL-STAR COMICS #8 (1941)
        ^
        Alias/Alter Ego:        
        Diana Prince`,
        alignment: "hero",
        type: "indiv",
    },
    {
        idx: "4",
        tmsrc: "./images/cat/cat4.jpg",
        cname: "GREEN LENTURN",
        cdesc: `Test pilot Hal Jordan went from being a novelty, the first-ever human Green Lantern, to one of the most legendary Lanterns to ever wield a power ring.
        ^
        Hal Jordan’s life was changed twice by crashing aircraft. The first time was when he witnessed the death of his father, pilot Martin Jordan. The second was when, as an adult and trained pilot himself, he was summoned to the crashed wreckage of a spaceship belonging to an alien named Abin Sur. Abin explained that he was a member of the Green Lantern Corps, an organization of beings from across the cosmos, armed with power rings fueled by the green energy of all willpower in the universe. Upon his death, Abin entrusted his ring and duties as the Green Lantern of Earth’s space sector to Hal Jordan.
        ^
        Hal’s life as a Green Lantern has not been easy. He’s had to fight not only enemies, but often friends, colleagues and loved ones. But despite the strain his Green Lantern identity has put on his life, Hal is an honest man who can operate without fear, and is always willing to protect those in need—whether alone, with the Corps or alongside the Justice League and Earth’s other Super Heroes. For Hal has sworn the oath of every Green Lantern—that no evil will escape his sight.`,
        facts: `Powers:
        hard light constructs, instant weaponry, force fields, flight, durability, alien technology
        ^
        First Appearance:        
        ALL-AMERICAN COMICS #16 (1940)
        ^
        Alias/Alter Ego:        
        Hal Jordan
        ^
        Occupation:        
        Test pilot`,
        alignment: "hero",
        type: "indiv",
    },
    {
        idx: "5",
        tmsrc: "./images/cat/cat5.jpg",
        cname: "THE FLASH",
        cdesc: `Three men have held the title of "The Fastest Man Alive"—Jay Garrick, Barry Allen and Wally West. Each of them redefined the word "hero."
        ^
        The mysterious power known as the Speed Force is an energy field that has, over the centuries, granted incredible powers of velocity to certain heroes. The most famous of these is the Flash, also known as the Fastest Man Alive. Ever since the days of World War II, there has been a man clad in red who can run at impossible speeds, using his power to save lives and defend those who cannot defend themselves. All between the ticks of a second.
        ^
        In the 1940s, college student Jay Garrick acquired his super-speed abilities in a random lab accident and became the first DC Super Hero to go by the name the Flash. Years later, Jay was succeeded by police scientist Barry Allen, until Barry’s former kid partner Wally West took up the mantle at a time when Barry was considered dead. But, when Barry returned, he became the Flash once again. All three generations of speedsters have been cornerstone members of both the Justice Society and Justice League.
        ^
        The Flash has mastery over not just speed, but time itself, and he has often used his powers to travel though different eras and even into other dimensions. Although the Flash has not always been fast enough to outrun personal tragedy when it has come for him, he always does his best to prevent the same from happening to the people of Central City and Keystone City. In so doing, he's earned himself a spot among the greatest Super Heroes the DC Universe has ever known.`,
        facts: `Powers:
        super speed, intangibility, superhuman agility, time travel, creates and controls lightning, multiversal knowledge
        ^
        First Appearance:        
        FLASH COMICS #1 (1940)
        ^
        Alias/Alter Ego:        
        Barry Allen, Jay Garrick, Wally West
        ^
        AKA:        
        Scarlet Speedster, The Fastest Man Alive
        ^
        Base of Operations:        
        Central City
        ^
        Occupation:        
        Forensic scientist`,
        alignment: "hero",
        type: "indiv",
    },
    {
        idx: "6",
        tmsrc: "./images/cat/cat6.jpg",
        cname: "AQUAMAN",
        cdesc: `The son of a lighthouse keeper and an Atlantean queen, Arthur Curry is the bridge between the surface world and his tumultuous realm of the sea.
        ^
        Monarch of the undersea realm of Atlantis and King of the Seven Seas, Aquaman is one of the most powerful DC Super Heroes—commanding a kingdom that covers three-quarters of the Earth’s surface, including all the creatures contained within. Arthur Curry came from humble beginnings, as most of his life was spent exiled from his home, unaware of his noble origins. When he finally took the throne as an adult, he became the most legendary king in Atlantean history.
        ^
        A founding member of the Justice League of America, Aquaman has fought alongside Superman, Batman and Wonder Woman and held his own against the biggest threats the universe has ever seen. Despite being misunderstood by many as someone who merely “talks to fish,” Aquaman’s super-strength and fighting prowess alone make him a force to be reckoned with. His telepathic abilities make him one of the most powerful minds on the planet. If one chooses to underestimate the sea king, they do so at their own peril.`,
        facts: `Powers:
        super strength, durability, control over sea life, exceptional swimming ability, ability to breathe underwater
        ^
        First Appearance:        
        MORE FUN COMICS #73 (1941)
        ^
        Alias/Alter Ego:        
        Arthur Curry
        ^
        Base of Operations:        
        Atlantis`,
        alignment: "hero",
        type: "indiv",
    },
    {
        idx: "7",
        tmsrc: "./images/cat/cat7.jpg",
        cname: "CYBORG",
        cdesc: `Part man, part machine, Vic Stone is a former member of the Teen Titans and a current member of the Justice League who wrestles to preserve his humanity with every new upgrade.
        ^
        Although he always exhibited a genius level intellect, young Victor Stone didn’t want a life dedicated to science and research like his parents. Instead, Vic dreamed of being a football player, and devoted all of his time to becoming a star athlete while he was still in high school. But a tragic twist of fate that should have left him dead instead found him becoming part man and part machine—a Cyborg.
        ^
        Saved by his scientist father after an accident left very little of Victor’s body intact, Dr. Silas Stone used all of his advanced scientific knowledge to save his only child’s life, and to rebuild him into a superior being, one that was arguably now more machine than man. As a cyborg, Vic was now far stronger than the average person,  could interface with computers, and emit various types of energy that made him a formidable fighter. Although he ultimately chose the path of the superhero, Victor never fully acclimated to being only partially human. He always carried a sadness within him as he mourns for the normal life he never had.
        ^
        One of the planet’s greatest heroes, Cyborg nevertheless puts all of his internal struggles aside when the time comes to save innocent lives and protect the Earth. Because of his ability to interface with computer systems, perhaps there is no hero more fitting for this modern, digital age.`,
        facts: `Powers:
        super strength, advanced technology, instant weaponry, genius-level intellect, control over technology, computer hacking, durability, teleportation
        ^
        First Appearance:        
        DC COMICS PRESENTS #26 (1980)
        ^
        Alias/Alter Ego:        
        Victor "Vic" Stone`,
        alignment: "hero",
        type: "indiv",
    },
];
