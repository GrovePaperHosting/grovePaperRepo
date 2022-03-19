import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        motivational: [
            "”Try to be a rainbow in someone’s cloud.” Maya Angelou",
            "“All our dreams can come true, if we have the courage to pursue them.” Walt Disney",
            "“The secret of getting ahead is getting started.” Mark Twain",
            "“For there is always light. If only we’re brave enough to see it. If only we’re brave enough to be it.” Amanda Gorman",
            "“It’s hard to beat a person who never gives up.” Babe Ruth",
            "“If people are doubting how far you can go, go so far that you can’t hear them anymore.” Michele Ruiz",
            "“We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success.” Arianna Huffington",
            "“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.” Helen Keller",
            "“Do one thing every day that scares you.” Eleanor Roosevelt",
            "“It’s no use going back to yesterday, because I was a different person then.” Lewis Carroll",
            "“Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.” Socrates",
            "“Do what you feel in your heart to be right – for you’ll be criticized anyway.” Eleanor Roosevelt",
            "“The same boiling water that softens the potato hardens the egg. It’s what you’re made of. Not the circumstances.” Unknown",
            "“You are the one that possesses the keys to your being. You carry the passport to your own happiness.” Diane von Furstenberg",
            "“I was smart enough to go through any door that opened.” Joan Rivers",
            "“When the whole world is silent, even one voice becomes powerful.” Malala Yousafzai",
            "“Knowing what must be done does away with fear.” Rosa Parks",
            "“Power is not given to you. You have to take it.” Beyoncé Knowles Carter",
            "“The most difficult thing is the decision to act, the rest is merely tenacity.” Amelia Earhart",
            "“You can waste your lives drawing lines. Or you can live your life crossing them.” Shonda Rhimes",
            "“I’d rather regret the things I’ve done than regret the things I haven’t done.” Lucille Ball",
            "“You can never leave footprints that last if you are always walking on tiptoe.” Leymah Gbowee",
            "“If you don’t like the road you’re walking, start paving another one.” Dolly Parton",
            "“If you think taking care of yourself is selfish, change your mind. If you don’t, you’re simply ducking your responsibilities.” Ann Richards",
            "“Done is better than perfect.” Sheryl Sandberg",
            "“It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent.” Madeleine Albright",
            "“Step out of the history that is holding you back. Step into the new story you are willing to create.” Oprah Winfrey",
            "“What you do makes a difference, and you have to decide what kind of difference you want to make.” Jane Goodall",
            "“I firmly believe you never should spend your time being the former anything.” Condoleezza Rice",
            "“In order to be irreplaceable one must always be different.” Coco Chanel",
            "“Spread love everywhere you go. Let no one ever come to you without leaving happier.” Mother Teresa",
            "“Take criticism seriously, but not personally. If there is truth or merit in the criticism, try to learn from it. Otherwise, let it roll right off you.” Hillary Clinton",
            "“Women will only have true equality when men share with them the responsibility of bringing up the next generation.” Ruth Bader Ginsburg",
            "“Above all, be the heroine of your life, not the victim.” Nora Ephron",
            "“A surplus of effort could overcome a deficit of confidence.” Sonia Sotomayor",
            "“Owning our story can be hard but not nearly as difficult as spending our lives running from it.” Brene Brown",
            "“I’m always perpetually out of my comfort zone.” Tory Burch",
            "“All careers go up and down like friendships, like marriages, like anything else, and you can’t bat a thousand all the time.” Julie Andrews",
            "“Never retreat, never explain, never apologize – get the thing done and let them howl!“ Nellie McClung",
            "“Next to trying and winning, the best thing is trying and failing.” L.M. Montgomery",
            "“Success is only meaningful and enjoyable if it feels like your own.”  Michelle Obama",
            "“Find something you're passionate about and keep tremendously interested in it.” Julia Child",
            "“It is not your job to be likeable. It’s your job to be yourself. Someone will like you anyway.” Chimamanda Ngozi Adichie",
            "“The future belongs to those who believe in the beauty of their dreams.” Eleanor Roosevelt",
            "“When I dare to be powerful, to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.”  Audre Lorde",
            "“Women belong in all places where decisions are being made. It shouldn't be that women are the exception.”  Ruth Bader Ginsburg",
            "“The most common way people give up their power is by thinking they don't have any.” Alice Walker",
            "“If they don't give you a seat at the table, bring a folding chair.” Shirley Chisholm",
            "“Have no fear of perfection; you'll never reach it.” Marie Curie",
            "“I have learned over the years that when one’s mind is made up, this diminishes fear; knowing what must be done does away with fear.” Rosa Parks",
            "“Don’t ever make decisions based on fear. Make decisions based on hope and possibility. Make decisions based on what should happen, not what shouldn’t.”  Michelle Obama",
            "“I don't have a feeling of inferiority. Never had. I'm as good as anybody, but no better.”  Katherine Johnson",
            "“No one can make you feel inferior without your consent.” Eleanor Roosevelt",
            "“If you're always trying to be normal, you will never know how amazing you can be.” Maya Angelou",
            "“Fight for the things that you care about, but do it in a way that will lead others to join you.” Ruth Bader Ginsburg",
            "“Technique and ability alone do not get you to the top; it is the willpower that is most important.” Junko Tabei",
            "“The most difficult thing is the decision to act. The rest is merely tenacity.” Amelia Earhart",
            "“Passion is the log that keeps the fire of purpose blazing.” Oprah Winfrey",
            "“I’ve been absolutely terrified every moment of my life and I’ve never let it keep me from doing a single thing I wanted to do.” Georgia O'Keeffe",
            "“Let us make our future now, and let us make our dreams tomorrow’s reality.” – Malala Yousafzai",
            "“Every moment wasted looking back, keeps us from moving forward.” Hillary Clinton",
            "“I attribute my success to this: I never gave or took an excuse.” Florence Nightingale",
            "“Don’t compromise yourself. You are all you’ve got.” Janis Joplin",
            "“If it's a good idea, go ahead and do it. It's much easier to apologize than it is to get permission.”  Grace Hopper",
            "“I do know one thing about me: I don't measure myself by others' expectations or let others define my worth.” Sonia Sotomayor",
            "“What makes you different or weird, that's your strength.” Meryl Streep",
            "“How wonderful it is that nobody need wait a single moment before starting to improve the world.” Anne Frank",
            "“Above all, be the heroine of your life, not the victim.” Nora Ephron",
            "“I'm not afraid of storms, for I'm learning to sail my ship.” Louisa May Alcott",
            "“It took me quite a long time to develop a voice, and now that I have it, I am not going to be silent.” Madeleine Albright",
            "“Don't let anyone rob you of your imagination, your creativity, or your curiosity. It's your place in the world; it's your life.” Dr. Mae Jemison",
            "“If you can dance and be free and not be embarrassed, you can rule the world.” Amy Poehler",
            "“Be messy and complicated and afraid and show up anyways.” Glennon Doyle Melton",
            "“I am thankful for my struggle because, without it, I wouldn’t have stumbled across my strength.” Alex Elle",
            "“Justice is about making sure that being polite is not the same thing as being quiet. In fact, oftentimes, the most righteous thing you can do is shake the table.” Alexandria Ocasio-Cortez",
            "“Just because you are blind, and unable to see my beauty doesn’t mean it does not exist.” Margaret Cho",
            "“I found that ultimately if you truly pour your heart into what you believe in — even if it makes you vulnerable — amazing things can and will happen.” Emma Watson",
            "“The way I see it, if you want the rainbow, you gotta put up with the rain!” Dolly Parton",
            "“You have to have confidence in your ability, and then be tough enough to follow through.” Rosalynn Carter",
            "“Define success on your own terms, achieve it by your own rules, and build a life you’re proud to live.” Anne Sweeney",
            "“Great minds discuss ideas; average minds discuss events; small minds discuss people.” Eleanor Roosevelt",
            "“The question isn’t who’s going to let me; it’s who is going to stop me.” – Ayn Rand",
            "“There is no gate, no lock, no bolt that you can set upon the freedom of my mind.” Virginia Woolf",
            "“If you don’t live your life, then who will?” Rihanna",
            "“One isn’t born courageous, one becomes it.” Marjane Satrapi",
            "“Everything is within your power, and your power is within you.” Janice Trachtman",
        ],
        challenges: [
            "Reach out to a friend to say hello",
            "Go for a walk with no destination in mind",
            "Wake up 15 minutes earlier to do something just for you",
            "Drink 8 glasses of water",
            "Take a 10 minute stretch break",
            "Snuggle under a cozy blanket",
            "Make yourself your favourite warm drink",
            "Wear your favourite outfit",
            "Send someone a card ‘just because’",
            "Treat yourself to a massage",
            "Tidy one area of your home",
            "Order takeout from your favourite restaurant",
            "Take a bubble bath",
            "Watch funny Youtube videos",
            "Watch the sunset",
            "Spend some time colouring",
            "Take a walk without your phone",
            "Walk 10,000 steps",
            "Listen to a guided meditation",
            "Take 10 slow, deep breaths",
            "Go to a park",
            "Turn off all electronics 30 minutes before bed",
            "Read a book or magazine for an hour",
            "Give yourself a bedtime",
            "Do something spontaneous",
            "List 3 things you love about yourself",
            "Try something new",
            "Ask for help",
            "Go to your favourite bookstore to browse",
            "Crank up your music and dance",
            "Curl up and watch your favourite movie",
            "Try a new activity",
            "Move your body",
            "Give yourself a manicure or pedicure",
            "Make a date with your best friend",
            "Treat yourself today",
            "Listen to an audiobook or podcast",
            "Try a face mask",
            "Light your favourite candle",
            "Give someone a hug",
            "Do a brain dump",
            "Plan a getaway",
            "Start a journal",
            "Do a digital detox",
            "Declutter 10 items",
            "Buy yourself flowers",
            "Cook your favourite meal",
            "Try 3 new yoga poses",
            "Change your sheets",
            "Refresh your morning routine",
            "Learn a new skill",
            "Do a DIY project",
            "Take a nap without setting your alarm",
            "Stay in your pajamas all day",
            "Create a vision board",
            "Get at least 7 hours of sleep",
            "Explore a new to you place",
            "Give yourself permission to sleep in",
            "Lie down for 15 minutes",
            "Give yourself permission to say no",
            "Binge watch a TV show",
            "Unsubscribe from emails",
            "Take a long shower",
            "Organize your wardrobe",
            "Take a different route than normal",
            "Look in the mirror and give yourself a compliment",
            "Diffuse essential oils",
            "Plan your dream vacation",
            "Try a new recipe",
            "Treat yourself when grocery shopping",
            "Clean up your phone",
            "Look at photos that make you smile",
            "Find a new playlist",
            "Find a new book at the library",
            "Say positive affirmations",
            "Donate items you no longer need",
            "Perform a random act of kindness",
            "Spend the extra $ for guacamole",
            "Bake something you love",
            "Plan a girls night in",
            "Plan a day outdoors",
            "Try a new exercise class",
            "Listen to your favourite song from your childhood",
            "Go for a relaxing drive",
            "Invite a friend to lunch",
            "Take a social media break",
            "Donate to your favourite charity",
            "Go shopping",
            "Go to a movie",
            "Schedule some ‘me time’ in your day",
            "Prioritize your to-do list",
            "Plan a spa day",
            "Give yourself permission to say yes",
            "Take a lunch break",
            "Plan a delicious brunch",
            "Refill your water bottle hourly",
            "Volunteer with an organization you love",
            "Take a course to learn a new skill",
            "Make a mantra",
            "Carve our mindful moments in your day",
            "Try a DIY hair mask",
            "Embrace the JOMO (joy of missing out)",
            "Revisit an old hobby",
            "Reward yourself for completing small tasks",
            "Catch up on your favourite blog",
            "Take a mental health day",
            "Make your bed",
            "Floss your teeth everyday",
            "Eat 5-8 servings of vegetables today",
            "Eat breakfast at the table",
        ],
        listPrices: [
            {
                pages: 30,
                priceId: 'price_1KYAgxFyy65ZlNKVwGdRikPv',
                price: 20
            },
            {
                pages: 31,
                priceId: 'price_1KYAgxFyy65ZlNKVwGdRikPv',
                price: 20
            },
            {
                pages: 32,
                priceId: 'price_1KYAgxFyy65ZlNKVwGdRikPv',
                price: 20
            },
            {
                pages: 33,
                priceId: 'price_1KYAgxFyy65ZlNKVwGdRikPv',
                price: 20
            },
            {
                pages: 34,
                priceId: 'price_1KYAgxFyy65ZlNKVwGdRikPv',
                price: 20
            },
            {
                pages: 64,
                priceId: 'price_1KYAgxFyy65ZlNKVwGdRikPv',
                price: 40
            },
            {
                pages: 122,
                priceId: 'price_1KYAgxFyy65ZlNKVlW6Bc8EK',
                price: 20
            },
            {
                pages: 124,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 126,
                priceId: 'price_1KYH9bFyy65ZlNKVK8HgZiMZ',
                price: 20
            },
            {
                pages: 128,
                priceId: 'price_1KYAgxFyy65ZlNKVwGdRikPv',
                price: 20
            },
            {
                pages: 130,
                priceId: 'price_1KYAgxFyy65ZlNKVlW6Bc8EK',
                price: 20
            },
            {
                pages: 132,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 134,
                priceId: 'price_1KYH9bFyy65ZlNKVK8HgZiMZ',
                price: 20
            },
            {
                pages: 136,
                priceId: 'price_1KYAgxFyy65ZlNKVwGdRikPv',
                price: 20
            },
            {
                pages: 138,
                priceId: 'price_1KYAgxFyy65ZlNKVlW6Bc8EK',
                price: 20
            },
            {
                pages: 140,
                priceId: 'price_1K5CCJFyy65ZlNKVsOSgUAtL',
                price: 20
            },
            {
                pages: 142,
                priceId: 'price_1K5CCJFyy65ZlNKVsOSgUAtL',
                price: 20
            },
            {
                pages: 144,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 146,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 148,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 150,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 152,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 154,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 156,
                priceId: 'price_1K5CCJFyy65ZlNKVsOSgUAtL',
                price: 20
            },
            {
                pages: 158,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 160,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 162,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 164,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 166,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 168,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 170,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 172,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 174,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 176,
                priceId: 'price_1K5CCJFyy65ZlNKVsOSgUAtL',
                price: 20
            },
            {
                pages: 178,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 180,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 182,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 184,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 186,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 188,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 190,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 192,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 194,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 196,
                priceId: 'price_1K5CCJFyy65ZlNKVsOSgUAtL',
                price: 20
            },
            {
                pages: 198,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 200,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 202,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 204,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 206,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 208,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 210,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 212,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 214,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 216,
                priceId: 'price_1K5CCJFyy65ZlNKVsOSgUAtL',
                price: 20
            },
            {
                pages: 218,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 220,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 222,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 224,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 226,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 228,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 230,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 232,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 234,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 236,
                priceId: 'price_1K5CCJFyy65ZlNKVsOSgUAtL',
                price: 20
            },
            {
                pages: 238,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 240,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            },
            {
                pages: 242,
                priceId: 'price_1KYAgxFyy65ZlNKVSAxWFXBW',
                price: 20
            }
        ],
        finalValue: [],
        extraSelection:'',
        totalPrice: 0,
        //cartItems: []
        cartItems:
            [
                /*                {
                                    id: 'e2r3',
                                    priceId: 123,
                                    name: 'Bold type planner',
                                    amount: 2,
                                    imgUrl: "https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Big-Stripe-2.png?alt=media&token=5acde2ea-35ad-4864-9ef9-aa0dd94f9459"
                                },
                                {
                                    id: 'e2r32',
                                    price: 123,
                                    name: 'Paint Night planner',
                                    amount: 3,
                                    imgUrl: "https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/cover%2FGrove-Paper-Big-Stripe-2.png?alt=media&token=5acde2ea-35ad-4864-9ef9-aa0dd94f9459"
                                }*/
            ]
    },
    mutations: {
        SET_FINAL_VALUE(state, payload) {
            state.finalValue = payload;
        },
        SET_EXTRA_SELECTION(state, payload) {
            state.extraSelection = payload;
        },
        SET_TOTAL_PRICES(state, payload) {
            state.totalPrice = payload;
        },
        SET_CART_ITEMS(state, payload) {
            state.cartItems = payload;
        },
    },
    actions: {},
    getters: {
        getFinalValue(state) {
            return state.finalValue;
        },
        getCartItems(state) {
            return state.cartItems;
        },
        getListPrices(state) {
            return state.listPrices;
        },
        getTotalPrice(state) {
            return state.totalPrice;
        }
    }
})

export default store;