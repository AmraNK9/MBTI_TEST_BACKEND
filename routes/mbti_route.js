// const express = require("express");
// const calculateMBTI = require("../controllers/calculate_mbti");
//     Filesystem = require('fs');
//     const router = express.Router();
// const UserMBTI = require("../models/user_mbtis");
// const mbtiDescriptions = {
//     // --- ANALYSTS (NT) ---
//     "INTJ": {
//         title: "ဗိသုကာ (The Architect)",
//         summary: "မဟာဗျူဟာမြောက်ပြီး စိတ်ကူးစိတ်သန်း ကောင်းသူများ။",
//         description: "အရာရာကို စနစ်တကျ တွေးခေါ်တတ်ပြီး ရေရှည်စီမံကိန်းတွေကို ကောင်းကောင်း ဆောင်ရွက်နိုင်သူတွေပါ။ တစ်ကိုယ်တည်း အလုပ်လုပ်ရတာကို နှစ်သက်ပြီး ကိုယ့်ကိုယ်ကိုယ် ယုံကြည်မှု မြင့်မားကြပါတယ်။"
//     },
//     "INTP": {
//         title: "ယုတ္တိဗေဒပညာရှင် (The Logician)",
//         summary: "တီထွင်ကြံဆမှုရှိပြီး ဗဟုသုတ ရှာဖွေသူများ။",
//         description: "အသစ်အဆန်းတွေကို အမြဲလေ့လာနေတတ်ပြီး ပြဿနာတွေကို ယုတ္တိဗေဒနည်းကျကျ ဖြေရှင်းရတာကို ဝါသနာပါသူတွေပါ။ ပုံသေကားကျ နေထိုင်ရတာထက် လွတ်လပ်တဲ့ အတွေးအခေါ်ကို ပိုနှစ်သက်ပါတယ်။"
//     },
//     "ENTJ": {
//         title: "တပ်မှူး (The Commander)",
//         summary: "ပြတ်သားပြီး ခေါင်းဆောင်မှု စွမ်းရည်ရှိသူများ။",
//         description: "ရည်မှန်းချက်ကြီးမားပြီး အခက်အခဲတွေကို မကြောက်ဘဲ ရင်ဆိုင်တတ်သူတွေပါ။ အဖွဲ့အစည်းကို ဦးဆောင်ပြီး ရလဒ်ထွက်အောင် လုပ်ဆောင်ရာမှာ အရမ်းတော်တဲ့ သဘာဝခေါင်းဆောင်တွေ ဖြစ်ပါတယ်။"
//     },
//     "ENTP": {
//         title: "စိန်ခေါ်သူ (The Debater)",
//         summary: "ဉာဏ်ရည်ထက်မြက်ပြီး စူးစမ်းလိုစိတ် ရှိသူများ။",
//         description: "အတွေးအခေါ်သစ်တွေကို ငြင်းခုန်ဆွေးနွေးရတာကို ဝါသနာပါပြီး အစဉ်အလာဟောင်းတွေကို စိန်ခေါ်ချင်သူတွေပါ။ အမြဲတမ်း တက်ကြွပြီး ဖန်တီးနိုင်စွမ်း မြင့်မားကြပါတယ်။"
//     },

//     // --- DIPLOMATS (NF) ---
//     "INFJ": {
//         title: "ရှေ့ဆောင်လမ်းပြ (The Advocate)",
//         summary: "လျှို့ဝှက်ဆန်းကြယ်ပြီး စိတ်ကူးစိတ်သန်း မြင့်မားသူများ။",
//         description: "လူသားဆန်ပြီး စာနာနားလည်မှု အပြည့်ရှိသူတွေပါ။ အတွင်းစိတ် နက်ရှိုင်းပြီး အများနဲ့မတူတဲ့ အမြင်တွေ ရှိတတ်ကြပါတယ်။ ကမ္ဘာကြီးကို ပိုကောင်းအောင် ပြောင်းလဲချင်တဲ့ စိတ်ဆန္ဒ ရှိသူတွေ ဖြစ်ပါတယ်။"
//     },
//     "INFP": {
//         title: "ဖျန်ဖြေသူ (The Mediator)",
//         summary: "ကြင်နာတတ်ပြီး ကိုယ်ပိုင်စံနှုန်း မြင့်မားသူများ။",
//         description: "စိတ်ကူးယဉ်ဆန်ပြီး သူတစ်ပါးအပေါ် ကူညီလိုစိတ် အပြည့်ရှိသူတွေပါ။ ကိုယ်ယုံကြည်တဲ့ စံနှုန်းတွေအတိုင်း နေထိုင်တတ်ပြီး အေးအေးဆေးဆေးနဲ့ အဓိပ္ပာယ်ရှိတဲ့ ဘဝကို တန်ဖိုးထားသူတွေ ဖြစ်ပါတယ်။"
//     },
//     "ENFJ": {
//         title: "ဇာတ်လိုက် (The Protagonist)",
//         summary: "ဆွဲဆောင်မှုရှိပြီး စိတ်အားထက်သန်သော ခေါင်းဆောင်များ။",
//         description: "လူတွေကို စိတ်ဓာတ်တက်ကြွအောင် ပြောဆိုနိုင်စွမ်း ရှိသူတွေပါ။ သူတစ်ပါးရဲ့ ခံစားချက်ကို နားလည်ပေးနိုင်ပြီး အဖွဲ့အစည်းအတွင်း သဟဇာတဖြစ်အောင် ပေါင်းစည်းပေးတတ်သူတွေ ဖြစ်ပါတယ်။"
//     },
//     "ENFP": {
//         title: "လှုံ့ဆော်သူ (The Campaigner)",
//         summary: "တက်ကြွလန်းဆန်းပြီး လူမှုဆက်ဆံရေး ကောင်းသူများ။",
//         description: "လွတ်လပ်မှုကို မြတ်နိုးပြီး အကောင်းမြင်စိတ် အပြည့်ရှိသူတွေပါ။ လူသစ်တွေနဲ့ တွေ့ဆုံရတာကို နှစ်သက်ပြီး ဘဝရဲ့ ဖြစ်နိုင်ခြေအသစ်တွေကို အမြဲရှာဖွေနေတတ်သူတွေ ဖြစ်ပါတယ်။"
//     },

//     // --- SENTINELS (SJ) ---
//     "ISTJ": {
//         title: "လက်တွေ့သမား (The Logistician)",
//         summary: "တာဝန်ကျေပွန်ပြီး စည်းကမ်းရှိသူများ။",
//         description: "အချက်အလက်တွေကို အခြေခံပြီး လက်တွေ့ကျကျ လုပ်ဆောင်တတ်သူတွေပါ။ တည်ငြိမ်ပြီး စိတ်ချရသူတွေ ဖြစ်သလို၊ မိသားစုနဲ့ အလုပ်အပေါ်မှာ သစ္စာရှိပြီး တာဝန်ယူမှု အပြည့်ရှိကြပါတယ်။"
//     },
//     "ISFJ": {
//         title: "ကာကွယ်စောင့်ရှောက်သူ (The Defender)",
//         summary: "နွေးထွေးပြီး အနစ်နာခံတတ်သူများ။",
//         description: "အမြဲတမ်း သူတစ်ပါးကို ကူညီဖို့ အသင့်ရှိနေတတ်သူတွေပါ။ စေ့စပ်သေချာပြီး ကိုယ်ချစ်ခင်ရသူတွေအတွက် တိတ်တဆိတ် အနစ်နာခံ လုပ်ဆောင်ပေးတတ်တဲ့ စိတ်ထားကောင်းသူတွေ ဖြစ်ပါတယ်။"
//     },
//     "ESTJ": {
//         title: "စီမံခန့်ခွဲသူ (The Executive)",
//         summary: "စနစ်တကျရှိပြီး စည်းမျဉ်းကို လေးစားသူများ။",
//         description: "အဖွဲ့အစည်းနဲ့ မိသားစုကို စနစ်တကျ ထိန်းသိမ်းရတာကို နှစ်သက်သူတွေပါ။ အမှန်နဲ့အမှားကို ခွဲခြားသိမြင်ပြီး လူမှုပတ်ဝန်းကျင်မှာ စံပြဖြစ်အောင် နေထိုင်တတ်သူတွေ ဖြစ်ပါတယ်။"
//     },
//     "ESFJ": {
//         title: "ကောင်စစ်ဝန် (The Consul)",
//         summary: "လူချစ်လူခင်ပေါပြီး ဖော်ရွေသူများ။",
//         description: "အများအကျိုးကို ရှေးရှုပြီး ပေါင်းသင်းဆက်ဆံရေးမှာ ထိပ်တန်းက ပါဝင်သူတွေပါ။ သူတစ်ပါးကို ကူညီရတာကို ပျော်ရွှင်ပြီး လူမှုပတ်ဝန်းကျင်မှာ အားလုံးနဲ့ သဟဇာတဖြစ်အောင် နေထိုင်တတ်ကြပါတယ်။"
//     },

//     // --- EXPLORERS (SP) ---
//     "ISTP": {
//         title: "လက်မှုပညာရှင် (The Virtuoso)",
//         summary: "လက်တွေ့ကျကျ စမ်းသပ်လုပ်ဆောင်ရတာကို ဝါသနာပါသူများ။",
//         description: "ကိရိယာတန်ဆာပလာတွေနဲ့ အလုပ်လုပ်ရတာ ဒါမှမဟုတ် ပြဿနာတွေကို ကိုယ်တိုင်ဖြေရှင်းရတာကို နှစ်သက်သူတွေပါ။ တည်ငြိမ်ပြီး အခြေအနေကို လိုက်လျောညီထွေ ပြောင်းလဲနိုင်စွမ်း ရှိကြပါတယ်။"
//     },
//     "ISFP": {
//         title: "စွန့်စားသူ (The Adventurer)",
//         summary: "အနုပညာဆန်ပြီး လွတ်လပ်မှုကို မြတ်နိုးသူများ။",
//         description: "လက်ရှိအချိန်ကို တန်ဖိုးထားပြီး ဘဝကို အနုပညာမြောက်စွာ ဖြတ်သန်းတတ်သူတွေပါ။ အသစ်အဆန်းတွေကို စမ်းသပ်ရတာကို ကြိုက်သလို၊ သူတစ်ပါးအပေါ်မှာလည်း နူးညံ့သိမ်မွေ့စွာ ဆက်ဆံတတ်သူတွေ ဖြစ်ပါတယ်။"
//     },
//     "ESTP": {
//         title: "လုပ်ငန်းရှင် (The Entrepreneur)",
//         summary: "တက်ကြွပြီး အန္တရာယ်ကို ရင်ဆိုင်ရဲသူများ။",
//         description: "စွမ်းအင်အပြည့်ရှိပြီး လက်တွေ့အလုပ်လုပ်ရတာကို အားသန်သူတွေပါ။ အခြေအနေတွေကို လျင်မြန်စွာ ခွဲခြမ်းစိတ်ဖြာနိုင်ပြီး အခွင့်အရေးရှိတာနဲ့ ချက်ချင်း အကောင်အထည်ဖော်တတ်သူတွေ ဖြစ်ပါတယ်။"
//     },
//     "ESFP": {
//         title: "ဖျော်ဖြေသူ (The Entertainer)",
//         summary: "ပျော်ပျော်နေတတ်ပြီး ဆွဲဆောင်မှုရှိသူများ။",
//         description: "ဘဝကို ပေါ့ပေါ့ပါးပါးနဲ့ ပျော်ရွှင်အောင် နေထိုင်တတ်သူတွေပါ။ လူအများရဲ့ အာရုံစိုက်မှုကို ရတာကို နှစ်သက်ပြီး ဘယ်နေရာရောက်ရောက် ပျော်ရွှင်စရာ ကောင်းတဲ့ ပတ်ဝန်းကျင်တစ်ခု ဖြစ်အောင် ဖန်တီးနိုင်သူတွေ ဖြစ်ပါတယ်။"
//     }
// };

// router.post("/calculate", async (req, res) => {
//     console.log("Received answers:", req.body);
//     console.log(req.body);
//     const {name, age, gender} = req.body.user_infos;
//     //default name,age,gender add
    

//     const result = calculateMBTI(req.body.answers);
//     const personalityData = mbtiDescriptions[result.MBTI_String];

//     const userMBTI = new UserMBTI({
//         id: "_" + Date.now(),
//         user_nickname: name,
//         age:age,
//         gender:gender,
//         MBTI_type: result.MBTI_String,
//         percentage: result.MBTI_Scores
//     });
    
//     try {
//         await userMBTI.save();
//         console.log("User MBTI saved successfully");
//     } catch (error) {
//         console.error("Error saving User MBTI:", error);
//     }

// res.json({personalityData,...result});
// });

// router.get("/questions", async (req, res) => {
//     const dataset = [];
//     const data = Filesystem.readFileSync('data/without_bias_questions.json');
//     const questions = JSON.parse(data);
//     res.json(questions);
// });

// router.post("/save", async (req, res) => {
//     const { id, user_nickname, age, gender, MBTI_type, percentage } = req.body;
//     const newUserMBTI = new UserMBTI({
//         id,
//         user_nickname,
//         age,
//         gender,
//         MBTI_type,
//         percentage
//     });
//     try {
//         await newUserMBTI.save();
//         res.status(201).json({ message: "User MBTI saved successfully" });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// module.exports = router;

const express = require("express");
const calculateMBTI = require("../controllers/calculate_mbti");
const Filesystem = require('fs');
const router = express.Router();
const UserMBTI = require("../models/user_mbtis");
const Answer = require("../models/answer");

// ── Utility ────────────────────────────────────────────────────────────────

/**
 * Fisher-Yates shuffle — returns a new shuffled array.
 */
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// ── MBTI Personality Descriptions ─────────────────────────────────────────

const mbtiDescriptions = {
    // --- ANALYSTS (NT) ---
    "INTJ": {
        title: "ဗိသုကာ (The Architect)",
        summary: "မဟာဗျူဟာမြောက်ပြီး စိတ်ကူးစိတ်သန်း ကောင်းသူများ။",
        description: "အရာရာကို စနစ်တကျ တွေးခေါ်တတ်ပြီး ရေရှည်စီမံကိန်းတွေကို ကောင်းကောင်း ဆောင်ရွက်နိုင်သူတွေပါ။ တစ်ကိုယ်တည်း အလုပ်လုပ်ရတာကို နှစ်သက်ပြီး ကိုယ့်ကိုယ်ကိုယ် ယုံကြည်မှု မြင့်မားကြပါတယ်။"
    },
    "INTP": {
        title: "ယုတ္တိဗေဒပညာရှင် (The Logician)",
        summary: "တီထွင်ကြံဆမှုရှိပြီး ဗဟုသုတ ရှာဖွေသူများ။",
        description: "အသစ်အဆန်းတွေကို အမြဲလေ့လာနေတတ်ပြီး ပြဿနာတွေကို ယုတ္တိဗေဒနည်းကျကျ ဖြေရှင်းရတာကို ဝါသနာပါသူတွေပါ။ ပုံသေကားကျ နေထိုင်ရတာထက် လွတ်လပ်တဲ့ အတွေးအခေါ်ကို ပိုနှစ်သက်ပါတယ်။"
    },
    "ENTJ": {
        title: "တပ်မှူး (The Commander)",
        summary: "ပြတ်သားပြီး ခေါင်းဆောင်မှု စွမ်းရည်ရှိသူများ။",
        description: "ရည်မှန်းချက်ကြီးမားပြီး အခက်အခဲတွေကို မကြောက်ဘဲ ရင်ဆိုင်တတ်သူတွေပါ။ အဖွဲ့အစည်းကို ဦးဆောင်ပြီး ရလဒ်ထွက်အောင် လုပ်ဆောင်ရာမှာ အရမ်းတော်တဲ့ သဘာဝခေါင်းဆောင်တွေ ဖြစ်ပါတယ်။"
    },
    "ENTP": {
        title: "စိန်ခေါ်သူ (The Debater)",
        summary: "ဉာဏ်ရည်ထက်မြက်ပြီး စူးစမ်းလိုစိတ် ရှိသူများ။",
        description: "အတွေးအခေါ်သစ်တွေကို ငြင်းခုန်ဆွေးနွေးရတာကို ဝါသနာပါပြီး အစဉ်အလာဟောင်းတွေကို စိန်ခေါ်ချင်သူတွေပါ။ အမြဲတမ်း တက်ကြွပြီး ဖန်တီးနိုင်စွမ်း မြင့်မားကြပါတယ်။"
    },

    // --- DIPLOMATS (NF) ---
    "INFJ": {
        title: "ရှေ့ဆောင်လမ်းပြ (The Advocate)",
        summary: "လျှို့ဝှက်ဆန်းကြယ်ပြီး စိတ်ကူးစိတ်သန်း မြင့်မားသူများ။",
        description: "လူသားဆန်ပြီး စာနာနားလည်မှု အပြည့်ရှိသူတွေပါ။ အတွင်းစိတ် နက်ရှိုင်းပြီး အများနဲ့မတူတဲ့ အမြင်တွေ ရှိတတ်ကြပါတယ်။ ကမ္ဘာကြီးကို ပိုကောင်းအောင် ပြောင်းလဲချင်တဲ့ စိတ်ဆန္ဒ ရှိသူတွေ ဖြစ်ပါတယ်။"
    },
    "INFP": {
        title: "ဖျန်ဖြေသူ (The Mediator)",
        summary: "ကြင်နာတတ်ပြီး ကိုယ်ပိုင်စံနှုန်း မြင့်မားသူများ။",
        description: "စိတ်ကူးယဉ်ဆန်ပြီး သူတစ်ပါးအပေါ် ကူညီလိုစိတ် အပြည့်ရှိသူတွေပါ။ ကိုယ်ယုံကြည်တဲ့ စံနှုန်းတွေအတိုင်း နေထိုင်တတ်ပြီး အေးအေးဆေးဆေးနဲ့ အဓိပ္ပာယ်ရှိတဲ့ ဘဝကို တန်ဖိုးထားသူတွေ ဖြစ်ပါတယ်။"
    },
    "ENFJ": {
        title: "ဇာတ်လိုက် (The Protagonist)",
        summary: "ဆွဲဆောင်မှုရှိပြီး စိတ်အားထက်သန်သော ခေါင်းဆောင်များ။",
        description: "လူတွေကို စိတ်ဓာတ်တက်ကြွအောင် ပြောဆိုနိုင်စွမ်း ရှိသူတွေပါ။ သူတစ်ပါးရဲ့ ခံစားချက်ကို နားလည်ပေးနိုင်ပြီး အဖွဲ့အစည်းအတွင်း သဟဇာတဖြစ်အောင် ပေါင်းစည်းပေးတတ်သူတွေ ဖြစ်ပါတယ်။"
    },
    "ENFP": {
        title: "လှုံ့ဆော်သူ (The Campaigner)",
        summary: "တက်ကြွလန်းဆန်းပြီး လူမှုဆက်ဆံရေး ကောင်းသူများ။",
        description: "လွတ်လပ်မှုကို မြတ်နိုးပြီး အကောင်းမြင်စိတ် အပြည့်ရှိသူတွေပါ။ လူသစ်တွေနဲ့ တွေ့ဆုံရတာကို နှစ်သက်ပြီး ဘဝရဲ့ ဖြစ်နိုင်ခြေအသစ်တွေကို အမြဲရှာဖွေနေတတ်သူတွေ ဖြစ်ပါတယ်။"
    },

    // --- SENTINELS (SJ) ---
    "ISTJ": {
        title: "လက်တွေ့သမား (The Logistician)",
        summary: "တာဝန်ကျေပွန်ပြီး စည်းကမ်းရှိသူများ။",
        description: "အချက်အလက်တွေကို အခြေခံပြီး လက်တွေ့ကျကျ လုပ်ဆောင်တတ်သူတွေပါ။ တည်ငြိမ်ပြီး စိတ်ချရသူတွေ ဖြစ်သလို၊ မိသားစုနဲ့ အလုပ်အပေါ်မှာ သစ္စာရှိပြီး တာဝန်ယူမှု အပြည့်ရှိကြပါတယ်။"
    },
    "ISFJ": {
        title: "ကာကွယ်စောင့်ရှောက်သူ (The Defender)",
        summary: "နွေးထွေးပြီး အနစ်နာခံတတ်သူများ။",
        description: "အမြဲတမ်း သူတစ်ပါးကို ကူညီဖို့ အသင့်ရှိနေတတ်သူတွေပါ။ စေ့စပ်သေချာပြီး ကိုယ်ချစ်ခင်ရသူတွေအတွက် တိတ်တဆိတ် အနစ်နာခံ လုပ်ဆောင်ပေးတတ်တဲ့ စိတ်ထားကောင်းသူတွေ ဖြစ်ပါတယ်။"
    },
    "ESTJ": {
        title: "စီမံခန့်ခွဲသူ (The Executive)",
        summary: "စနစ်တကျရှိပြီး စည်းမျဉ်းကို လေးစားသူများ။",
        description: "အဖွဲ့အစည်းနဲ့ မိသားစုကို စနစ်တကျ ထိန်းသိမ်းရတာကို နှစ်သက်သူတွေပါ။ အမှန်နဲ့အမှားကို ခွဲခြားသိမြင်ပြီး လူမှုပတ်ဝန်းကျင်မှာ စံပြဖြစ်အောင် နေထိုင်တတ်သူတွေ ဖြစ်ပါတယ်။"
    },
    "ESFJ": {
        title: "ကောင်စစ်ဝန် (The Consul)",
        summary: "လူချစ်လူခင်ပေါပြီး ဖော်ရွေသူများ။",
        description: "အများအကျိုးကို ရှေးရှုပြီး ပေါင်းသင်းဆက်ဆံရေးမှာ ထိပ်တန်းက ပါဝင်သူတွေပါ။ သူတစ်ပါးကို ကူညီရတာကို ပျော်ရွှင်ပြီး လူမှုပတ်ဝန်းကျင်မှာ အားလုံးနဲ့ သဟဇာတဖြစ်အောင် နေထိုင်တတ်ကြပါတယ်။"
    },

    // --- EXPLORERS (SP) ---
    "ISTP": {
        title: "လက်မှုပညာရှင် (The Virtuoso)",
        summary: "လက်တွေ့ကျကျ စမ်းသပ်လုပ်ဆောင်ရတာကို ဝါသနာပါသူများ။",
        description: "ကိရိယာတန်ဆာပလာတွေနဲ့ အလုပ်လုပ်ရတာ ဒါမှမဟုတ် ပြဿနာတွေကို ကိုယ်တိုင်ဖြေရှင်းရတာကို နှစ်သက်သူတွေပါ။ တည်ငြိမ်ပြီး အခြေအနေကို လိုက်လျောညီထွေ ပြောင်းလဲနိုင်စွမ်း ရှိကြပါတယ်။"
    },
    "ISFP": {
        title: "စွန့်စားသူ (The Adventurer)",
        summary: "အနုပညာဆန်ပြီး လွတ်လပ်မှုကို မြတ်နိုးသူများ။",
        description: "လက်ရှိအချိန်ကို တန်ဖိုးထားပြီး ဘဝကို အနုပညာမြောက်စွာ ဖြတ်သန်းတတ်သူတွေပါ။ အသစ်အဆန်းတွေကို စမ်းသပ်ရတာကို ကြိုက်သလို၊ သူတစ်ပါးအပေါ်မှာလည်း နူးညံ့သိမ်မွေ့စွာ ဆက်ဆံတတ်သူတွေ ဖြစ်ပါတယ်။"
    },
    "ESTP": {
        title: "လုပ်ငန်းရှင် (The Entrepreneur)",
        summary: "တက်ကြွပြီး အန္တရာယ်ကို ရင်ဆိုင်ရဲသူများ။",
        description: "စွမ်းအင်အပြည့်ရှိပြီး လက်တွေ့အလုပ်လုပ်ရတာကို အားသန်သူတွေပါ။ အခြေအနေတွေကို လျင်မြန်စွာ ခွဲခြမ်းစိတ်ဖြာနိုင်ပြီး အခွင့်အရေးရှိတာနဲ့ ချက်ချင်း အကောင်အထည်ဖော်တတ်သူတွေ ဖြစ်ပါတယ်။"
    },
    "ESFP": {
        title: "ဖျော်ဖြေသူ (The Entertainer)",
        summary: "ပျော်ပျော်နေတတ်ပြီး ဆွဲဆောင်မှုရှိသူများ။",
        description: "ဘဝကို ပေါ့ပေါ့ပါးပါးနဲ့ ပျော်ရွှင်အောင် နေထိုင်တတ်သူတွေပါ။ လူအများရဲ့ အာရုံစိုက်မှုကို ရတာကို နှစ်သက်ပြီး ဘယ်နေရာရောက်ရောက် ပျော်ရွှင်စရာ ကောင်းတဲ့ ပတ်ဝန်းကျင်တစ်ခု ဖြစ်အောင် ဖန်တီးနိုင်သူတွေ ဖြစ်ပါတယ်။"
    }
};

// ── Routes ─────────────────────────────────────────────────────────────────

/**
 * GET /questions
 * Returns the question list in shuffled order.
 * Each question gets a stable question_id (from the JSON or its index).
 */
router.get("/questions", (req, res) => {
    try {
        const data = Filesystem.readFileSync('data/depth_simple_combination.json');
        const questions = JSON.parse(data);

        // Ensure every question has a stable question_id field
        const taggedQuestions = questions.map((q, i) => ({
            question_id: q.question_id || `q_${i + 1}`,
            ...q
        }));

        const shuffled = shuffleArray(taggedQuestions);
        res.json(shuffled);
    } catch (err) {
        console.error("Error reading questions:", err);
        res.status(500).json({ error: "Could not load questions." });
    }
});

/**
 * POST /calculate
 * Body:
 * {
 *   user_infos: { name, age, gender },
 *   answers: [
 *     {
 *       question_id:     "q_1",
 *       question_type:   "E/I",
 *       direction:       "I",
 *       confidence:      4,
 *       response_time_ms: 3200                       // ms taken to answer
 *     },
 *     ...
 *   ]
 * }
 */
router.post("/calculate", async (req, res) => {
    console.log("Received answers:", req.body);

    const { name, age, gender } = req.body.user_infos;
    const answers = req.body.answers;

    // Generate a session id that ties all answers to this quiz attempt
    const session_id = "sess_" + Date.now();
    const user_id    = "user_" + Date.now(); // replace with real auth id when available

    // ── 1. Calculate MBTI result ──────────────────────────────────────────
    const result = calculateMBTI(answers);
    const personalityData = mbtiDescriptions[result.MBTI_String];

    // ── 2. Persist each answer ────────────────────────────────────────────
    const answerDocs = answers.map(a => ({
        session_id,
        user_id,
        question_id:      a.question_id,
        question_type:    a.question_type,
        // user_answer:      a.user_answer,
        direction:        a.direction,
        confidence:       a.confidence,
        response_time_ms: a.response_time_ms
    }));

    try {
        await Answer.insertMany(answerDocs, { ordered: false });
        // Answer.save() would be too slow for 60+ answers, so we use insertMany for batch insertion.   
        console.log(`Saved ${answerDocs.length} answer(s) for session ${session_id}`);
    } catch (err) {
        // Non-fatal: log but continue so the user still gets their result
        console.error("Error saving answers:", err);
    }

    // ── 3. Persist UserMBTI ───────────────────────────────────────────────
    const userMBTI = new UserMBTI({
        id: session_id,
        user_nickname: name,
        age,
        gender,
        MBTI_type:  result.MBTI_String,
        percentage: result.MBTI_Scores
    });

    try {
        await userMBTI.save();
        console.log("User MBTI saved successfully");
    } catch (err) {
        console.error("Error saving User MBTI:", err);
    }

    // ── 4. Respond ────────────────────────────────────────────────────────
    res.json({
        session_id,
        personalityData,
        ...result
    });
});

/**
 * POST /save  (manual save — unchanged)
 */
router.post("/save", async (req, res) => {
    const { id, user_nickname, age, gender, MBTI_type, percentage } = req.body;
    const newUserMBTI = new UserMBTI({ id, user_nickname, age, gender, MBTI_type, percentage });
    try {
        await newUserMBTI.save();
        res.status(201).json({ message: "User MBTI saved successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;