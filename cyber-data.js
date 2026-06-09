// cyber-data.js
// Excellent Institute - Cyber Security Basics Syllabus

const cyberBookData = [
    {
        id: "chapter1",
        title: "Chapter 1: What is Cyber Security?",
        topics: [
            {
                heading: "Your Digital Bodyguard",
                text: "Just like Excellent Institute has physical locks on its doors to keep thieves out, your computer needs digital locks. Cyber Security is the practice of protecting your phones, computers, and personal information from bad people on the internet.",
                shortcut: "Always think before you click!",
                imgSrc: "images/cyber-01-intro.jpg"
            },
            {
                heading: "What are Hackers?",
                text: "Hackers are digital thieves. They don't break windows; they break code. They try to sneak into your computer to steal your private photos, read your messages, or take money from bank accounts.",
                shortcut: "Never trust random strangers on the internet.",
                imgSrc: "images/cyber-02-hackers.jpg"
            }
        ]
    },
    {
        id: "chapter2",
        title: "Chapter 2: Passwords (Your Digital Keys)",
        topics: [
            {
                heading: "Why '123456' is a Bad Idea",
                text: "Your password is the key to your digital house. If your password is your name, your phone number, or '123456', a hacker can guess it in exactly two seconds using a robot program.",
                shortcut: "Never use your name or birthdate as a password.",
                imgSrc: "images/cyber-03-badpass.jpg"
            },
            {
                heading: "How to Make a Super Password",
                text: "The best passwords are long sentences or mixed-up characters. A strong password should have Capital letters, small letters, numbers, and symbols (like @, #, or !). For example: 'Mango@Monkey99!' is much safer.",
                shortcut: "Make your password at least 12 characters long.",
                imgSrc: "images/cyber-04-goodpass.jpg"
            },
            {
                heading: "Do Not Share Your Keys",
                text: "You would not give your house keys to a stranger on the bus. In the same way, NEVER tell anyone your password. Not even your best friend! If someone asks for your password, they are trying to trick you.",
                shortcut: "Your password belongs to YOU alone.",
                imgSrc: "images/cyber-05-secret.jpg"
            }
        ]
    },
    {
        id: "chapter3",
        title: "Chapter 3: Phishing (Tricks and Traps)",
        topics: [
            {
                heading: "What is Phishing?",
                text: "Phishing (pronounced 'Fishing') is when a hacker throws a fake bait to trick you. They might send you an SMS or Email saying, 'You won a free iPhone! Click here to claim it!' If you click the link and type your details, the hacker steals them.",
                shortcut: "If something sounds too good to be true, it is a lie.",
                imgSrc: "images/cyber-06-phishing.jpg"
            },
            {
                heading: "How to Spot a Fake Message",
                text: "Hackers often pretend to be your bank or the government. To catch a fake message, look closely at the spelling. Does the email come from 'amazon.com' or a weird address like 'amazon-support-free-gifts.com'? Real companies will never ask for your password over an SMS.",
                shortcut: "Check the sender's actual email address, not just their name.",
                imgSrc: "images/cyber-07-fake.jpg"
            }
        ]
    },
    {
        id: "chapter4",
        title: "Chapter 4: Viruses and Malware",
        topics: [
            {
                heading: "Digital Sickness (Malware)",
                text: "Just like humans catch colds, computers can catch 'Malware' (Malicious Software). These are invisible, bad programs that can delete your files, slow down your computer, or spy on you through your webcam.",
                shortcut: "Do not download free games from weird websites.",
                imgSrc: "images/cyber-08-malware.jpg"
            },
            {
                heading: "The Trojan Horse Trick",
                text: "A Trojan is a virus hiding in disguise. You might download an app that looks like a fun racing game. But when you open it, the game secretly installs a virus behind the scenes while you are playing.",
                shortcut: "Only download apps from the official Google Play Store or Apple App Store.",
                imgSrc: "images/cyber-09-trojan.jpg"
            },
            {
                heading: "Using Antivirus Software",
                text: "An Antivirus is like a doctor for your computer. It scans your files every day, catches the bad sicknesses, and deletes them before they can hurt your data. Make sure Windows Defender is always turned on!",
                shortcut: "Keep your Antivirus updated every single week.",
                imgSrc: "images/cyber-10-antivirus.jpg"
            }
        ]
    },
    {
        id: "chapter5",
        title: "Chapter 5: Safe Web Browsing",
        topics: [
            {
                heading: "Look for the Padlock (HTTPS)",
                text: "When you browse the internet, look at the very top of Chrome or Safari where you type the website address. If you see a tiny closed Padlock icon (HTTPS), it means your connection is safe and private. If you see 'Not Secure', do not type any passwords there!",
                shortcut: "Always look for the Padlock before logging in.",
                imgSrc: "images/cyber-11-https.jpg"
            },
            {
                heading: "Beware of Pop-Ups",
                text: "If you visit a website and a sudden window pops up screaming, 'YOUR COMPUTER HAS A VIRUS! CALL THIS NUMBER!', do not panic. It is a fake trick to scare you into giving them money. Just close the window immediately.",
                shortcut: "Never click on scary flashing warnings on websites.",
                imgSrc: "images/cyber-12-popups.jpg"
            }
        ]
    },
    {
        id: "chapter6",
        title: "Chapter 6: Social Media Safety",
        topics: [
            {
                heading: "Do Not Overshare",
                text: "Posting too much information on Instagram or Facebook is dangerous. If you post exactly where you live, what school you go to, and when you are going on a trip, bad people can use that information to track you or rob your empty house.",
                shortcut: "Keep your personal life private.",
                imgSrc: "images/cyber-13-overshare.jpg"
            },
            {
                heading: "Private Accounts",
                text: "Make sure your social media accounts are set to 'Private'. This means only people you actually accept as friends can see your photos. If your account is 'Public', every stranger in the entire world can watch what you do.",
                shortcut: "Only accept friend requests from people you know in real life.",
                imgSrc: "images/cyber-14-private.jpg"
            }
        ]
    },
    {
        id: "chapter7",
        title: "Chapter 7: Public Wi-Fi Dangers",
        topics: [
            {
                heading: "The Trap of Free Wi-Fi",
                text: "We all love free Wi-Fi at the railway station or a coffee shop. But public Wi-Fi is an open room. A hacker sitting at the next table can easily look into the invisible Wi-Fi waves and read the messages or passwords you are sending.",
                shortcut: "Do not open bank accounts or type passwords on Free Wi-Fi.",
                imgSrc: "images/cyber-15-wifi.jpg"
            },
            {
                heading: "What is a VPN?",
                text: "If you MUST use free Wi-Fi, you should use a VPN (Virtual Private Network). A VPN puts all your internet traffic into an invisible, dark tunnel. Even if a hacker is looking at the Wi-Fi, they will only see gibberish and cannot spy on you.",
                shortcut: "A VPN scrambles your internet data to keep it secret.",
                imgSrc: "images/cyber-16-vpn.jpg"
            }
        ]
    },
    {
        id: "chapter8",
        title: "Chapter 8: Ultimate Protection",
        topics: [
            {
                heading: "Two-Factor Authentication (2FA)",
                text: "This is the ultimate security trick! 2FA means adding a double-lock to your account. First, you type your password. Second, the app sends a secret OTP (One Time Password) to your phone. Even if a hacker steals your password, they cannot log in because they don't have your physical phone!",
                shortcut: "Turn on 2FA for your Email, WhatsApp, and Social Media.",
                imgSrc: "images/cyber-17-2fa.jpg"
            },
            {
                heading: "Software Updates (Patching Holes)",
                text: "When your phone asks you to 'Update Software', do it immediately! Companies send updates to fix broken security holes in the system. If you ignore the update, hackers can sneak in through those old, broken holes.",
                shortcut: "Update your apps and operating system as soon as possible.",
                imgSrc: "images/cyber-18-update.jpg"
            }
        ]
    }
];
