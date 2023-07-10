const quotes = [
    {
        quote : "사무엘이 이르되 여호와께서 번제와 다른 제사를 그의 목소리를 청종하는 것을 좋아하심 같이 좋아하시겠나이까 순종이 제사보다 낫고 듣는 것이 숫양의 기름보다 나으니",
        author :"삼상 15:22",

    },
    {
        quote : "사무엘이 죽는 날까지 사울을 다시 가서 보지 아니하였으니 이는 그가 사울을 위하여 슬퍼함이였고 여호와께서는 사울을 이스라엘 왕으로 삼으신 것을 후회하셨더라",
        author : "삼상 15:35",
    },
    {
        quote:"보아스가 룻에게 이르되 내 딸아 들으라 이삭을 주우러 다른 밭으로 가지 말며 여기서 떠나지 말고 나의 소녀들과 함께 있으라",
        author :"룻 2:8",
    },
    {
        quote : "말씀을 갈망하는 자에게 진리를 더 보여주신다. 그러니 말씀(성경필사)을 사모하는 사람이 되거라. ",
        author : "2023_SFC_대대",
    },
    {
        quote :"하나님의 옷깃이 스쳤던 그 모든 사람들의 선생이 되거라.",
        author :"2023_SFC_대대",
    },
    {
        quote :"오늘이 있는 이유는 내일을 위해 고민하고 생각하기 위한 시간이다. 내일을 잊어버린 채 현재를 사는 사람이 되지 말것. ",
        author :"명덕교회",

    },
    {
        quote :"네가 나의 품에 오는 날이 네가 태어나는 날보다 더 행복하기를 바란다. ",
        author :"명덕교회",
    },
    {
        quote :"슬픔이 웃음보다 나음은 얼굴에 근심하는 것이 마음에 유익하기 때문이니라",
        author :"전 7:2",
    },
    {
        quote :"지혜자의 마음은 초상집에 있으되 우매한 자의 마음은 혼인집에 있느니라",
        author :"전 7:4",
    
    },
    {
        quote :"너희가 나를 택한 것이 아니요 내가 너희를 택하여 세웠나니 이는 너희로 가서 과실을 맺게 하고 또 너희 과실이 항상 있게 하여 내 이름으로 아버지께 무엇을 구하든지 다 받게 하려 함이니라",
        author:"요 15:16",
    }
];

const quote  = document.querySelector("#quote span:first-child");
const author  = document.querySelector("#quote span:last-child");

const todayQuote =  quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;