import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        standardHolidays: {
            2022: {
                january:
                    {
                        1: ['New Years Day'],
                    },
                february:
                    {
                        2: ['Groundhog Day'],
                        14: ['Valentines Day']
                    },
                march:
                    {
                        8: ['International Women\'s Day'],
                        13: ['Daylight Savings Time Begins'],
                        17: ['St Patrick\'s Day'],
                        20: ['First day of Spring'],
                    },
                april:
                    {
                        2: ['Good Friday'],
                        17: ['Easter'],
                        18: ['Easter Monday'],
                        22: ['Earth Day'],
                    },
                may: {
                    8: ['Mother\'s Day'],
                },
                june: {
                    1: ['Pride Month'],
                    19: ['Father\'s Day'],
                    21: ['First day of summer'],
                },
                september: {
                    23: ['First day of Fall'],
                },
                october: {
                    31: ['Halloween'],
                },
                november: {
                    6: ['Daylight Savings Time Ends'],
                    11: ['Rememberance Day'],
                },
                december: {
                    21: ['First day of Winter'],
                    24: ['Christmas Eve'],
                    25: ['Christmas Day'],
                    31: ['New Years Eve'],
                }
            },
            2023: {
                january:
                    {
                        1: ['New Years Day'],
                    },
                february:
                    {
                        2: ['Groundhog Day'],
                        14: ['Valentines Day'],
                    },
                march:
                    {
                        8: ['International Women\'s Day'],
                        12: ['Daylight Savings Time Begins'],
                        17: ['St Patrick\'s Day'],
                        20: ['First day of Spring'],
                    },
                april:
                    {
                        15: ['Good Friday'],
                        9: ['Easter'],
                        10: ['Easter Monday'],
                        22: ['Earth Day'],
                    },
                may: {
                    14: ['Mother\'s Day'],
                },
                june: {
                    1: ['Pride Month'],
                    18: ['Father\'s Day'],
                    21: ['First day of summer'],
                },
                september: {
                    23: ['First day of Fall'],
                },
                october: {
                    31: ['Halloween'],
                },
                november: {
                    5: ['Daylight Savings Time Ends'],
                    11: ['Rememberance Day'],
                },
                december: {
                    22: ['First day of Winter'],
                    24: ['Christmas Eve'],
                    25: ['Christmas Day'],
                    31: ['New Years Eve'],
                }
            },
            2024: {
                january:
                    {
                        1: ['New Years Day'],
                    },
                february:
                    {
                        2: ['Groundhog Day'],
                        14: ['Valentines Day'],
                    },
                march:
                    {
                        8: ['International Women\'s Day'],
                        10: ['Daylight Savings Time Begins'],
                        17: ['St Patrick\'s Day'],
                        19: ['First day of Spring'],
                        31: ['Easter'],
                    },
                april:
                    {
                        7: ['Good Friday'],
                        1: ['Easter Monday'],
                        22: ['Earth Day'],

                    },
                may: {
                    12: ['Mother\'s Day'],
                },
                june: {
                    1: ['Pride Month'],
                    16: ['Father\'s Day'],
                    20: ['First day of summer'],
                },
                september: {
                    22: ['First day of Fall'],
                },
                october: {
                    31: ['Halloween'],
                },
                november: {
                    3: ['Daylight Savings Time Ends'],
                    11: ['Rememberance Day'],
                },
                december: {
                    21: ['First day of Winter'],
                    24: ['Christmas Eve'],
                    25: ['Christmas Day'],
                    31: ['New Years Eve'],
                }
            },
            2025: {
                january:
                    {
                        1: ['New Years Day'],
                    },
                february:
                    {
                        2: ['Groundhog Day'],
                        14: ['Valentines Day'],
                    },
                march:
                    {
                        8: ['International Women\'s Day'],
                        9: ['Daylight Savings Time Begins'],
                        17: ['St Patrick\'s Day'],
                        20: ['First day of Spring'],
                        29: ['Good Friday'],
                    },
                april:
                    {
                        20: ['Easter'],
                        21: ['Easter Monday'],
                        22: ['Earth Day'],
                    },
                may: {
                    11: ['Mother\'s Day'],
                },
                june: {
                    1: ['Pride Month'],
                    15: ['Father\'s Day'],
                    20: ['First day of summer'],
                },
                september: {
                    22: ['First day of Fall'],
                },
                october: {
                    31: ['Halloween'],
                },
                november: {
                    2: ['Daylight Savings Time Ends'],
                    11: ['Rememberance Day'],
                },
                december: {
                    21: ['First day of Winter'],
                    24: ['Christmas Eve'],
                    25: ['Christmas Day'],
                    31: ['New Years Eve'],
                }
            }
        },
        canadianHolidays: {
            2021: {
                february:
                    {
                        15: ['Family Day'],
                        26: ['Yukon Heritage Day']
                    },
                may: {
                    24: ['Victoria Day']
                },
                june: {
                    21: ['National Indigenous Peoples Day'],
                    24: ['Jean Baptiste Day'],
                },
                july: {
                    1: ['Canada Day'],
                    9: ['Nunavut Day']
                },
                august: {
                    2: ['Civic Holiday'],
                },
                september: {
                    6: ['Labour Day'],
                    30: ['National Day for Truth and Reconciliation']
                },
                october: {
                    11: ['Thanksgiving'],
                },
                december: {
                    26: ['Boxing Day'],
                }
            },
            2022: {
                february:
                    {
                        21: ['Family Day'],
                        25: ['Yukon Heritage Day']
                    },
                may: {
                    23: ['Victoria Day']
                },
                june: {
                    21: ['National Indigenous Peoples Day'],
                    24: ['Jean Baptiste Day'],
                },
                july: {
                    1: ['C)anada Day'],
                    9: ['Nunavut Day']
                },
                august: {
                    1: ['Civic Holiday'],
                },
                september: {
                    5: ['Labour Day'],
                    30: ['National Day for Truth and Reconciliation']
                },
                october: {
                    10: ['Thanksgiving'],
                },
                december: {
                    26: ['Boxing Day'],
                }
            },
            2023: {
                february:
                    {
                        20: ['Family Day'],
                        24: ['Yukon Heritage Day']
                    },
                may: {
                    22: ['Victoria Day']
                },
                june: {
                    21: ['National Indigenous Peoples Day'],
                    24: ['Jean Baptiste Day'],
                },
                july: {
                    1: ['Canada Day'],
                    9: ['Nunavut Day']
                },
                august: {
                    7: ['Civic Holiday'],
                },
                september: {
                    4: ['Labour Day'],
                    30: ['National Day for Truth and Reconciliation']
                },
                october: {
                    9: ['Thanksgiving'],
                },
                december: {
                    26: ['Boxing Day'],
                }
            },
            2024: {
                february:
                    {
                        19: ['Family Day'],
                        23: ['Yukon Heritage Day']
                    },
                may: {
                    20: ['Victoria Day']
                },
                june: {
                    21: ['National Indigenous Peoples Day'],
                    24: ['Jean Baptiste Day'],
                },
                july: {
                    1: ['Canada Day'],
                    9: ['Nunavut Day']
                },
                august: {
                    5: ['Civic Holiday'],
                },
                september: {
                    2: ['Labour Day'],
                    30: ['National Day for Truth and Reconciliation']
                },
                october: {
                    14: ['Thanksgiving'],
                },
                december: {
                    26: ['Boxing Day'],
                }
            },
        },
        usHolidays: {
            2021: {
                january:
                    {
                        18: ['Martin Luther King Jr. Day'],
                    },
                february:
                    {
                        15: ['Presidents\' Day'],
                    },
                may: {
                    5: ['Cinco De Mayo'],
                    24: ['Memorial Day']
                },
                june: {
                    19: ['Juneteenth'],
                },
                july: {
                    4: ['Independence Day'],
                },
                september: {
                    6: ['Labor Day'],
                },
                october: {
                    11: ['Indigenous Peoples\' Day'],
                },
                november: {
                    25: ['Indigenous Peoples\' Day'],
                }
            },
            2022: {
                january:
                    {
                        17: ['Martin Luther King Jr. Day'],
                    },
                february:
                    {
                        21: ['Presidents\' Day'],
                    },
                may: {
                    5: ['Cinco De Mayo'],
                    30: ['Memorial Day']
                },
                june: {
                    19: ['Juneteenth'],
                },
                july: {
                    4: ['Independence Day'],
                },
                september: {
                    5: ['Labor Day'],
                },
                october: {
                    10: ['Indigenous Peoples\' Day'],
                },
                november: {
                    24: ['Indigenous Peoples\' Day'],
                }
            },
            2023: {
                january:
                    {
                        16: ['Martin Luther King Jr. Day'],
                    },
                february:
                    {
                        20: ['Presidents\' Day'],
                    },
                may: {
                    5: ['Cinco De Mayo'],
                    29: ['Memorial Day']
                },
                june: {
                    19: ['Juneteenth'],
                },
                july: {
                    4: ['Independence Day'],
                },
                september: {
                    4: ['Labor Day'],
                },
                october: {
                    9: ['Indigenous Peoples\' Day'],
                },
                november: {
                    23: ['Indigenous Peoples\' Day'],
                }
            },
            2024: {
                january:
                    {
                        15: ['Martin Luther King Jr. Day'],
                    },
                february:
                    {
                        19: ['Presidents\' Day'],
                    },
                may: {
                    5: ['Cinco De Mayo'],
                    27: ['Memorial Day']
                },
                june: {
                    19: ['Juneteenth'],
                },
                july: {
                    4: ['Independence Day'],
                },
                september: {
                    2: ['Labor Day'],
                },
                october: {
                    14: ['Indigenous Peoples\' Day'],
                },
                november: {
                    28: ['Indigenous Peoples\' Day'],
                }
            },
        },
        christianHolidays: {
            2021: {
                january:
                    {
                        6: ['EPIPHANY'],
                    },
                february:
                    {
                        17: ['ASH WEDNESDAY'],
                    },
                march: {
                    28: ['PALM SUNDAY'],
                },
                april: {
                    1: ['MAUNDY THURSDAY']
                },
                may: {
                    23: ['PENTECOST'],
                },
                june: {
                    3: ['CORPUS CHRISTI'],
                },
                november: {
                    1: ['ALL SAINTS\' DAY'],
                    2: ['ALL SOULS\' DAY']
                },
                december: {
                    8: ['FEAST OF THE IMMACULATE CONCEPTION'],
                    12: ['FEAST OF OUR LADY OF GUADALUPE']
                }
            },
            2022: {
                january:
                    {
                        6: ['EPIPHANY'],
                    },
                march: {
                    2: ['ASH WEDNESDAY'],
                },
                april: {
                    10: ['PALM SUNDAY'],
                    14: ['MAUNDY THURSDAY']
                },
                june: {
                    5: ['PENTECOST'],
                    16: ['CORPUS CHRISTI'],
                },
                november: {
                    1: ['ALL SAINTS\' DAY'],
                    2: ['ALL SOULS\' DAY']
                },
                december: {
                    8: ['FEAST OF THE IMMACULATE CONCEPTION'],
                    12: ['FEAST OF OUR LADY OF GUADALUPE']
                }
            },
            2023: {
                january:
                    {
                        6: ['EPIPHANY'],
                    },
                february:
                    {
                        22: ['ASH WEDNESDAY'],
                    },

                april: {
                    2: ['PALM SUNDAY'],
                    6: ['MAUNDY THURSDAY']
                },
                may: {
                    28: ['PENTECOST'],
                },
                june: {
                    8: ['CORPUS CHRISTI'],
                },
                november: {
                    1: ['ALL SAINTS\' DAY'],
                    2: ['ALL SOULS\' DAY']
                },
                december: {
                    8: ['FEAST OF THE IMMACULATE CONCEPTION'],
                    12: ['FEAST OF OUR LADY OF GUADALUPE']
                }
            },
            2024: {
                january:
                    {
                        6: ['EPIPHANY'],
                    },
                february:
                    {
                        14: ['ASH WEDNESDAY'],
                    },
                march: {
                    24: ['PALM SUNDAY'],
                    28: ['MAUNDY THURSDAY']
                },
                may: {
                    19: ['PENTECOST'],
                    30: ['CORPUS CHRISTI'],

                },
                november: {
                    1: ['ALL SAINTS\' DAY'],
                    2: ['ALL SOULS\' DAY']
                },
                december: {
                    8: ['FEAST OF THE IMMACULATE CONCEPTION'],
                    12: ['FEAST OF OUR LADY OF GUADALUPE']
                }
            },
        },
        hinduHolidays: {
            2021: {
                march: {
                    11: ['Maha Shivratri'],
                    29: ['Holi']
                },
                august: {
                    22: ['Raksha Bandhan'],
                    30: ['Krishna Janmashtami'],
                },
                september: {
                    10: ['Ganesha Chaturthi']
                },
                october: {
                    7: ['Navratri'],
                    15: ['Dussehra']
                },
                november: {
                    4: ['Diwali'],
                },
            },
            2022: {
                march: {
                    1: ['Maha Shivratri'],
                    19: ['Holi']
                },
                august: {
                    11: ['Raksha Bandhan'],
                    18: ['Krishna Janmashtami'],
                    31: ['Ganesha Chaturthi']
                },
                september: {
                    26: ['Navratri'],
                },
                october: {
                    5: ['Dussehra'],
                    24: ['Diwali'],
                },
            },
            2023: {
                february: {
                    18: ['Maha Shivratri'],
                },
                march: {
                    8: ['Holi']
                },
                august: {
                    30: ['Raksha Bandhan'],
                },
                september: {
                    6: ['Krishna Janmashtami'],
                    19: ['Ganesha Chaturthi']
                },
                october: {
                    15: ['Navratri'],
                    24: ['Dussehra']
                },
                november: {
                    12: ['Diwali'],
                },
            },
            2024: {
                march: {
                    8: ['Maha Shivratri'],
                    25: ['Holi']
                },
                august: {
                    19: ['Raksha Bandhan'],
                    26: ['Krishna Janmashtami'],
                },
                september: {
                    7: ['Ganesha Chaturthi']
                },
                october: {
                    3: ['Navratri'],
                    12: ['Dussehra']
                },
                november: {
                    1: ['Diwali'],
                },
            },
        },
        jewishHolidays: {
            2022: {
                march:
                    {
                        16: ['Purim'],
                    },
                april: {
                    15: ['Passover Begins'],
                    23: ['Passover Ends'],
                    27: ['Yom Hashoah']
                },
                may: {
                    5: ['Yom Ha\'atzmaut'],
                    18: ['Lag B\'omer']
                },
                june: {
                    4: ['Shavout'],
                },
                august: {
                    5: ['Tisha B\'Av'],
                },
                september: {
                    25: ['Rosh Hashanah'],
                },
                october: {
                    4: ['Yom Kippur'],
                    9: ['Sukkot Begins'],
                    16: ['Shemini Atzeret', 'Sukkot Ends'],
                    17: ['Simchat Torah']
                },
                december: {
                    18: ['Hanukkah Begins'],
                    26: ['Hanukkah Ends'],
                }
            },
            2023: {
                march:
                    {
                        6: ['Purim'],
                    },
                april: {
                    5: ['Passover Begins'],
                    13: ['Passover Ends'],
                    17: ['Yom Hashoah'],
                    25: ['Yom Ha\'atzmaut'],

                },
                may: {
                    8: ['Lag B\'omer'],
                    25: ['Shavout'],
                },
                july: {
                    26: ['Tisha B\'Av'],
                },
                september: {
                    15: ['Rosh Hashanah'],
                    24: ['Yom Kippur'],
                    29: ['Sukkot Begins'],

                },
                october: {
                    6: ['Shemini Atzeret', 'Sukkot Ends'],
                    7: ['Simchat Torah']
                },
                december: {
                    7: ['Hanukkah Begins'],
                    15: ['Hanukkah Ends'],
                }
            },
            2024: {
                march:
                    {
                        23: ['Purim'],
                    },
                april: {
                    22: ['Passover Begins'],
                    30: ['Passover Ends'],
                },
                may: {
                    4: ['Yom Hashoah'],
                    12: ['Yom Ha\'atzmaut'],
                    25: ['Lag B\'omer']
                },
                june: {
                    11: ['Shavout'],
                },
                august: {
                    12: ['Tisha B\'Av'],
                },

                october: {
                    2: ['Rosh Hashanah'],
                    11: ['Yom Kippur'],
                    16: ['Sukkot Begins', 'Shemini Atzeret'],
                    23: ['Sukkot Ends'],
                    24: ['Simchat Torah']
                },
                december: {
                    25: ['Hanukkah Begins'],
                }
            },
        },
        muslimHolidays: {
            2022: {
                february: {
                    28: ['Isra and Mi-raj'],
                },
                april: {
                    2: ['Ramadan Begins'],
                    29: ['Laylat Al Qadr'],
                },
                may: {
                    2: ['Ramadan Ends'],
                    3: ['Eid Al-fitr']
                },
                july:{
                    7: ['Hajj Begins'],
                    9: ['Eid Al-adha'],
                    12: ['Hajj Ends'],
                    29: ['Islamic New Year']
                },
                august: {
                    7: ['Ashura']
                },
                october: {
                    7: ['Mawlid An-nabi'],
                },
            },
            2023: {
                february: {
                    18: ['Isra and Mi-raj'],
                },
                march:{
                    23: ['Ramadan Begins'],
                },
                april: {
                    18: ['Laylat Al Qadr'],
                    22: ['Ramadan Ends', 'Eid Al-fitr'],
                },
                june: {
                    26: ['Hajj Begins'],
                    28: ['Eid Al-adha'],
                },
                july:{
                    1: ['Hajj Ends'],
                    18: ['Islamic New Year'],
                    27: ['Ashura']
                },
                september: {
                    26: ['Mawlid An-nabi'],
                },
            },
            2024: {
                february: {
                    7: ['Isra and Mi-raj'],
                },
                march:{
                    11: ['Ramadan Begins'],
                },
                april: {
                    6: ['Laylat Al Qadr'],
                    9: ['Ramadan Ends'],
                    10: ['Eid Al-fitr']
                },
                june:{
                    14: ['Hajj Begins'],
                    16: ['Eid Al-adha'],
                    19: ['Hajj Ends'],
                },
                july:{
                    6: ['Islamic New Year'],
                    16: ['Ashura']
                },
                september: {
                    15: ['Mawlid An-nabi'],
                },
            },
        },
        funHolidays: {
            2021: {
                january:
                    {
                        3: ['Fruitcake Toss Day'],
                        19: ['Popcorn Day'],
                        25: ['Opposite Day'],
                        30: ['Croissant Day'],
                    },
                february:
                    {
                        3: ['Carrot Cake Day'],
                        13: ['World Radio Day'],
                        17: ['Random Acts of Kindness Day']
                    },
                march: {
                    1: ['World Compliment Day'],
                    14: ['Pi Day'],
                    23: ['Puppy Day'],
                },
                april: {
                    10: ['Siblings Day'],
                    26: ['Pretzel Day']
                },
                may: {
                    4: ['Star Wars Day'],
                    11: ['Eat what you want day'],
                    12: ['National School Nurse Day'],
                },
                june: {
                    1: ['Say something nice day'],
                    8: ['Best Friends Day'],
                    19: ['World Juggling Day'],
                    22: ['Onion Ring Day'],
                },
                july: {
                    1: ['International Joke Day'],
                    9: ['Sugar Cookie Day'],
                    17: ['World Emoji Day'],
                    18: ['Ice Cream Day'],
                    24: ['Cousins Day'],
                    30: ['National Cheesecake Day']
                },
                august: {
                    1: ['National Cheesecake Day'],
                    12: ['Middle Child Day'],
                    17: ['Thift Shop Day'],
                    25: ['Kiss and Make Up Day'],
                    31: ['Eat outside Day']
                },
                september: {
                    5: ['Cheese Pizza Day'],
                    9: ['Teddy Bear day'],
                    28: ['Good Neighbour Day']
                },
                october: {
                    1: ['National Coffee Day'],
                    4: ['Taco Day'],
                    8: ['Pierogi Day']
                },
                november: {
                    4: ['Common Sense Day'],
                    12: ['Happy Hour Day'],
                    13: ['World Kindness Day'],
                    26: ['Buy Nothing Day']
                },
                december: {
                    7: ['Letter Writing Day'],
                    16: ['Chocolate Covered Anything Day'],
                    27: ['No Interruptions Day']
                }
            },
            2022: {
                january:
                    {
                        3: ['Fruitcake Toss Day'],
                        19: ['Popcorn Day'],
                        25: ['Opposite Day'],
                        30: ['Croissant Day'],
                    },
                february:
                    {
                        3: ['Carrot Cake Day'],
                        13: ['World Radio Day'],
                        17: ['Random Acts of Kindness Day']
                    },
                march: {
                    1: ['World Compliment Day'],
                    14: ['Pi Day'],
                    23: ['Puppy Day'],
                },
                april: {
                    10: ['Siblings Day'],
                    26: ['Pretzel Day']
                },
                may: {
                    4: ['Star Wars Day'],
                    11: ['Eat what you want day'],
                    12: ['National School Nurse Day'],
                },
                june: {
                    1: ['Say something nice day'],
                    8: ['Best Friends Day'],
                    19: ['World Juggling Day'],
                    22: ['Onion Ring Day'],
                },
                july: {
                    1: ['International Joke Day'],
                    9: ['Sugar Cookie Day'],
                    17: ['World Emoji Day'],
                    18: ['Ice Cream Day'],
                    24: ['Cousins Day'],
                    30: ['National Cheesecake Day']
                },
                august: {
                    1: ['National Cheesecake Day'],
                    12: ['Middle Child Day'],
                    17: ['Thift Shop Day'],
                    25: ['Kiss and Make Up Day'],
                    31: ['Eat outside Day']
                },
                september: {
                    5: ['Cheese Pizza Day'],
                    9: ['Teddy Bear day'],
                    28: ['Good Neighbour Day']
                },
                october: {
                    1: ['National Coffee Day'],
                    4: ['Taco Day'],
                    8: ['Pierogi Day']
                },
                november: {
                    4: ['Common Sense Day'],
                    12: ['Happy Hour Day'],
                    13: ['World Kindness Day'],
                    26: ['Buy Nothing Day']
                },
                december: {
                    7: ['Letter Writing Day'],
                    16: ['Chocolate Covered Anything Day'],
                    27: ['No Interruptions Day']
                }
            },
            2023: {
                january:
                    {
                        3: ['Fruitcake Toss Day'],
                        19: ['Popcorn Day'],
                        25: ['Opposite Day'],
                        30: ['Croissant Day'],
                    },
                february:
                    {
                        3: ['Carrot Cake Day'],
                        13: ['World Radio Day'],
                        17: ['Random Acts of Kindness Day']
                    },
                march: {
                    1: ['World Compliment Day'],
                    14: ['Pi Day'],
                    23: ['Puppy Day'],
                },
                april: {
                    10: ['Siblings Day'],
                    26: ['Pretzel Day']
                },
                may: {
                    4: ['Star Wars Day'],
                    11: ['Eat what you want day'],
                    12: ['National School Nurse Day'],
                },
                june: {
                    1: ['Say something nice day'],
                    8: ['Best Friends Day'],
                    19: ['World Juggling Day'],
                    22: ['Onion Ring Day'],
                },
                july: {
                    1: ['International Joke Day'],
                    9: ['Sugar Cookie Day'],
                    17: ['World Emoji Day'],
                    18: ['Ice Cream Day'],
                    24: ['Cousins Day'],
                    30: ['National Cheesecake Day']
                },
                august: {
                    1: ['National Cheesecake Day'],
                    12: ['Middle Child Day'],
                    17: ['Thift Shop Day'],
                    25: ['Kiss and Make Up Day'],
                    31: ['Eat outside Day']
                },
                september: {
                    5: ['Cheese Pizza Day'],
                    9: ['Teddy Bear day'],
                    28: ['Good Neighbour Day']
                },
                october: {
                    1: ['National Coffee Day'],
                    4: ['Taco Day'],
                    8: ['Pierogi Day']
                },
                november: {
                    4: ['Common Sense Day'],
                    12: ['Happy Hour Day'],
                    13: ['World Kindness Day'],
                    26: ['Buy Nothing Day']
                },
                december: {
                    7: ['Letter Writing Day'],
                    16: ['Chocolate Covered Anything Day'],
                    27: ['No Interruptions Day']
                }
            },
            2024: {
                january:
                    {
                        3: ['Fruitcake Toss Day'],
                        19: ['Popcorn Day'],
                        25: ['Opposite Day'],
                        30: ['Croissant Day'],
                    },
                february:
                    {
                        3: ['Carrot Cake Day'],
                        13: ['World Radio Day'],
                        17: ['Random Acts of Kindness Day']
                    },
                march: {
                    1: ['World Compliment Day'],
                    14: ['Pi Day'],
                    23: ['Puppy Day'],
                },
                april: {
                    10: ['Siblings Day'],
                    26: ['Pretzel Day']
                },
                may: {
                    4: ['Star Wars Day'],
                    11: ['Eat what you want day'],
                    12: ['National School Nurse Day'],
                },
                june: {
                    1: ['Say something nice day'],
                    8: ['Best Friends Day'],
                    19: ['World Juggling Day'],
                    22: ['Onion Ring Day'],
                },
                july: {
                    1: ['International Joke Day'],
                    9: ['Sugar Cookie Day'],
                    17: ['World Emoji Day'],
                    18: ['Ice Cream Day'],
                    24: ['Cousins Day'],
                    30: ['National Cheesecake Day']
                },
                august: {
                    1: ['National Cheesecake Day'],
                    12: ['Middle Child Day'],
                    17: ['Thift Shop Day'],
                    25: ['Kiss and Make Up Day'],
                    31: ['Eat outside Day']
                },
                september: {
                    5: ['Cheese Pizza Day'],
                    9: ['Teddy Bear day'],
                    28: ['Good Neighbour Day']
                },
                october: {
                    1: ['National Coffee Day'],
                    4: ['Taco Day'],
                    8: ['Pierogi Day']
                },
                november: {
                    4: ['Common Sense Day'],
                    12: ['Happy Hour Day'],
                    13: ['World Kindness Day'],
                    26: ['Buy Nothing Day']
                },
                december: {
                    7: ['Letter Writing Day'],
                    16: ['Chocolate Covered Anything Day'],
                    27: ['No Interruptions Day']
                }
            },
        },
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
        personalCheckIns: {
            commitTo: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/extras%2FChallenges%2FI%20Commit%20To.png?alt=media&token=13990f06-2989-4964-bd7d-9349f133c65e',
            focusOn: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/extras%2FChallenges%2FI%20Will%20Focus%20On.png?alt=media&token=d22b30d8-348f-475e-beda-598b7454d548',
            feeling: 'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/extras%2FChallenges%2FI%20am%20Feeling.png?alt=media&token=2b00275d-2571-44b7-9f86-3f9c8906a16b',
            productivity:'https://firebasestorage.googleapis.com/v0/b/grove-paper-50b62.appspot.com/o/extras%2FChallenges%2FProductivity%20Score.png?alt=media&token=1937dfb1-2aec-49a2-9ddf-040763dcd7c1'
        },
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
        pagesBookStructure: [],
        extraSelection: '',
        totalPrice: 0,
        holidayStructureFinal: {},
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
        SET_PAGES_BOOK_STRUCTURE(state, payload) {
            state.pagesBookStructure = payload;
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
        SET_HOLIDAY_STRUCTURE_FINAL(state, payload) {
            state.holidayStructureFinal = payload;
        },
    },
    actions: {},
    getters: {
        getFinalValue(state) {
            return state.finalValue;
        },
        getPagesBookStructure(state) {
            return state.pagesBookStructure;
        },
        getCartItems(state) {
            return state.cartItems;
        },
        getListPrices(state) {
            return state.listPrices;
        },
        getTotalPrice(state) {
            return state.totalPrice;
        },
        getHolidayStructureFinal(state) {
            return state.holidayStructureFinal;
        }
    }
})

export default store;