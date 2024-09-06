const cardData = [
    {
        title: "Beautiful Beach",
        description: "A serene beach with golden sands and blue waters.",
        imgSrc: "https://th.bing.com/th?id=OIP.pv-GKs0WcQMVLo69g5HzggHaE8&w=298&h=198&c=10&rs=1&qlt=99&bgcl=fffffe&r=0&o=6&dpr=1.3&pid=MultiSMRSV2Source",
    },
    {
        title: "Mountain Adventure",
        description: "Explore the majestic mountains and enjoy the fresh air.",
        imgSrc: "https://th.bing.com/th?id=OSK.HEROUrRcxYwnGCemsTWmlwakvhuDghwryxcKxfHMoZS24q0&w=472&h=280&c=1&rs=2&o=6&dpr=1.3&pid=SANGAM",
    },
    {
        title: "City Skyline",
        description: "A breathtaking view of the city skyline at night.",
        imgSrc: "https://th.bing.com/th?id=OIP.-GXcPq0muXoQG9e8BGvdBgHaEK&w=298&h=167&c=10&rs=1&qlt=99&bgcl=fffffe&r=0&o=6&dpr=1.3&pid=MultiSMRSV2Source",
    },
    {
        title: "Islands",
        description: "The land surrounded by water",
        imgSrc: "https://th.bing.com/th/id/OIP.mdM4rRspawjxr335v2pdEwHaEK?rs=1&pid=ImgDetMain",
    },
    {
        title: "Ocean",
        description: "A vast and blue ocean.",
        imgSrc: "https://www.bing.com/th?id=OIP.KRNPYuzRqSF_0QFIvrAcugHaEK&w=239&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    },
    {
        title: "Caves",
        description: "The dark and mysterious caves.",
        imgSrc: "https://th.bing.com/th?id=OSK.HEROivOa3XscwsBzlZoYFUPP0qxFnAM7PrYPmiWIoMiR-9w&w=472&h=280&c=1&rs=2&o=6&dpr=1.3&pid=SANGAM",
    },
    {
        title: "Glaciers",
        description: "Ice formations that cover mountains.",
        imgSrc: "https://th.bing.com/th?id=OIP.23pg8ZCLbP6y3y6vedWedgAAAA&w=298&h=224&c=10&rs=1&qlt=99&bgcl=fffffe&r=0&o=6&dpr=1.3&pid=MultiSMRSV2Source",
    },
    {
        title: "Volcanoes",
        description: "Active and dangerous volcanoes.",
        imgSrc: "https://th.bing.com/th/id/OIP.W98J1cIohdPHej6kjfV8CwHaE8?rs=1&pid=ImgDetMain",
    },
    {
        title: "Rivers",
        description: "Streams and rivers that flow through the landscape.",
        imgSrc: "https://th.bing.com/th?id=OSK.HEROOmGrmT8bkrMpHVgxMfzOdq6olBPRO_GWeSHezkx0Beg&w=472&h=280&c=1&rs=2&o=6&dpr=1.3&pid=SANGAM",
    },
    {
        title: "Arabian Sea",
        description: "The largest and most extensive sea in the world.",
        imgSrc: "https://th.bing.com/th/id/OSK.HEROnv7Edy8aytRoOfAZ6m4SsdqizmClVPD-67FyEGlZJ88?rs=1&pid=ImgDetMain",
    },
    {
        title: "Pacific Ocean",
        description: "The largest of the world's oceans.",
        imgSrc: "https://th.bing.com/th?id=OSK.HERODXEL7FtMv7Nn-aA4-4vegZt7BJjWoEDn4ObhJjbdN4o&w=312&h=200&c=15&rs=2&o=6&dpr=1.3&pid=SANGAM",
    },
    {
        title: "Antarctica",
        description: "The coldest and driest continent in the world.",
        imgSrc: "https://th.bing.com/th?id=ODL.bc481e83d27c10acd8b3a61fe607a84a&w=298&h=206&c=10&rs=1&qlt=99&o=6&dpr=1.3&pid=13.1",
    },
    {
        title: "Seashells",
        description: "Natural shells found on shorelines.",
        imgSrc:"https://th.bing.com/th/id/OIP._NiAiwokMu-HgK7uDlMFBQHaE8?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
        title: "Mars Rovers",
        description: "Robotic rovers on Mars.",
        imgSrc: "https://th.bing.com/th?id=OSK.HEROX8IQ2wn2eTVacirpoa9UK23ixrcCqor2Hx3d9-7Vk0s&w=472&h=280&c=13&rs=2&o=6&dpr=1.3&pid=SANGAM",
    },
    {
        title: "Bermuda Triangle",
        description: "The Bermuda Triangle is a region of the North Atlantic Ocean in the western part of the North Atlantic, between the North American continent and the Caribbean Sea.",
        imgSrc: "http://ts1.mm.bing.net/th?id=OIP.eRCB2WF8T2zOWJxJnmZibAHaDn&pid=15.1"
    },
    {
        title: "Chandrayaan 2",
        description: "Chandrayaan 2, is a spacecraft launched by India's Space Agency on 24 October 2018.",
        imgSrc: "https://www.bing.com/th?id=OIP.Qy0T3I6aJN29U-00oAPkFgHaE5&w=227&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
    },
    {
        title: "Quantum Mechanics",
        description: "Quantum mechanics allows the calculation of properties and behaviour of physical systems",
        imgSrc: "https://th.bing.com/th?id=OSK.HEROOWtO4HpzNksShguCWY68tCfTNn6P16qz5-pU4Xbar4g&w=472&h=280&c=1&rs=2&o=6&dpr=1.3&pid=SANGAM"
    },
    {
        title: "Artificial Intelligence",
        description: "Artificial intelligence (AI), in its broadest sense, is intelligence exhibited by machines, particularly computer systems",
        imgSrc: "https://th.bing.com/th/id/OIP.mNfA-jRDT_1EoGxHX_RpWwHaEK?w=257&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    }
];

// Function to create and insert cards using the template
function createCard(cardData) {
    const template = document.getElementById('card-template');
    const cardContainer = document.getElementById('card-container');

    cardData.forEach(data => {
        // Clone the template
        const card = template.content.cloneNode(true);

        // Set the content of the card
        card.querySelector('.card-title').textContent = data.title;
        card.querySelector('.card-description').textContent = data.description;
        card.querySelector('.card-image').src = data.imgSrc;

        // Append the card to the container
        cardContainer.appendChild(card);
    });
}

// Initialize and create cards
createCard(cardData);