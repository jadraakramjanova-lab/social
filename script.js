// ==========================================
// GOLD SOCIAL DASHBOARD
// ==========================================


// ===============================
// ELEMENTS
// ===============================

const modal =
    document.getElementById("modal");

const modalTitle =
    document.getElementById("modalTitle");

const modalText =
    document.getElementById("modalText");

const postText =
    document.getElementById("postText");

const modalAction =
    document.getElementById("modalAction");

const closeModal =
    document.getElementById("closeModal");

const createPost =
    document.getElementById("createPost");

const reportBtn =
    document.getElementById("reportBtn");

const scheduleBtn =
    document.getElementById("scheduleBtn");

const exportBtn =
    document.getElementById("exportBtn");

const notificationBtn =
    document.getElementById("notificationBtn");

const chartSelect =
    document.getElementById("chartSelect");


// ===============================
// NAVIGATION
// ===============================

document
    .querySelectorAll(".nav-item")
    .forEach(item => {

        item.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".nav-item")
                    .forEach(nav => {

                        nav.classList.remove(
                            "active"
                        );

                    });


                item.classList.add(
                    "active"
                );

            }
        );

    });


// ===============================
// MODAL
// ===============================

function openModal(
    title,
    text,
    button = "Davom etish →"
) {

    modalTitle.innerText = title;

    modalText.innerText = text;

    modalAction.innerText = button;

    postText.value = "";

    modal.classList.add("show");

}


function close() {

    modal.classList.remove("show");

}


closeModal.addEventListener(
    "click",
    close
);


modal.addEventListener(
    "click",
    event => {

        if (event.target === modal) {

            close();

        }

    }
);


// ===============================
// CREATE POST
// ===============================

createPost.addEventListener(
    "click",
    () => {

        openModal(

            "Yangi post",

            "Ijtimoiy tarmoqlaringiz uchun yangi kontent yarating.",

            "Post yaratish →"

        );

    }
);


// ===============================
// REPORT
// ===============================

reportBtn.addEventListener(
    "click",
    () => {

        openModal(

            "Hisobot yaratish",

            "Tanlangan davr bo‘yicha batafsil social media hisobotini tayyorlang.",

            "Hisobot yaratish"

        );

    }
);


// ===============================
// SCHEDULE
// ===============================

scheduleBtn.addEventListener(
    "click",
    () => {

        openModal(

            "Post rejalashtirish",

            "Postni kerakli sana va vaqtda avtomatik chiqarish uchun rejalashtiring.",

            "Rejalashtirish →"

        );

    }
);


// ===============================
// EXPORT
// ===============================

exportBtn.addEventListener(
    "click",
    () => {

        const data = {

            followers: "128540",

            engagement: "8.74%",

            views: "2.48M",

            posts: 184,

            instagram: "56.8K",

            telegram: "31.2K",

            youtube: "24.6K",

            tiktok: "15.9K"

        };


        const blob =
            new Blob(
                [
                    JSON.stringify(
                        data,
                        null,
                        2
                    )
                ],
                {
                    type:
                        "application/json"
                }
            );


        const url =
            URL.createObjectURL(blob);


        const link =
            document.createElement("a");


        link.href = url;

        link.download =
            "gold-social-report.json";


        link.click();


        URL.revokeObjectURL(url);

    }
);


// ===============================
// MODAL ACTION
// ===============================

modalAction.addEventListener(
    "click",
    () => {

        if (
            modalTitle.innerText ===
            "Yangi post"
        ) {

            if (!postText.value.trim()) {

                alert(
                    "Avval post matnini yozing."
                );

                return;

            }

        }


        modalAction.innerText =
            "✓ Tayyor!";


        setTimeout(() => {

            close();

        }, 900);

    }
);


// ===============================
// NOTIFICATION
// ===============================

notificationBtn.addEventListener(
    "click",
    () => {

        alert(
            "🔔 4 ta yangi bildirishnoma mavjud."
        );

    }
);


// ===============================
// CHART DATA
// ===============================

const chartData = {

    followers: {

        title:
            "Auditoriya o‘sishi",

        values: [
            210,
            195,
            180,
            188,
            145,
            130,
            105,
            118,
            75,
            55
        ]

    },


    views: {

        title:
            "Ko‘rishlar dinamikasi",

        values: [
            220,
            205,
            170,
            160,
            145,
            125,
            110,
            95,
            70,
            45
        ]

    },


    engagement: {

        title:
            "Engagement dinamikasi",

        values: [
            180,
            165,
            150,
            145,
            130,
            120,
            100,
            110,
            85,
            60
        ]

    }

};


// ===============================
// CHART SWITCH
// ===============================

chartSelect.addEventListener(
    "change",
    () => {

        const type =
            chartSelect.value;


        const values =
            chartData[type].values;


        const polyline =
            document.querySelector(
                ".line"
            );


        const circle =
            document.querySelector(
                ".chart circle"
            );


        const points =
            values
                .map(
                    (value, index) => {

                        const x =
                            index *
                            (700 / 9);

                        const y =
                            value;

                        return `${x},${y}`;

                    }
                )
                .join(" ");


        polyline.setAttribute(
            "points",
            points
        );


        const last =
            values[values.length - 1];


        circle.setAttribute(
            "cx",
            "700"
        );

        circle.setAttribute(
            "cy",
            last
        );

    }
);


// ===============================
// LIVE COUNTER
// ===============================

function animateNumber(
    element,
    target
) {

    let current = 0;

    const duration = 900;

    const start =
        performance.now();


    function update(time) {

        const progress =
            Math.min(
                (time - start) /
                duration,
                1
            );


        current =
            Math.floor(
                target * progress
            );


        element.innerText =
            current.toLocaleString(
                "en-US"
            );


        if (progress < 1) {

            requestAnimationFrame(
                update
            );

        }

    }


    requestAnimationFrame(
        update
    );

}


animateNumber(
    document.getElementById(
        "followers"
    ),
    128540
);


// ===============================
// LIVE ACTIVITY
// ===============================

const activityTexts = [

    "yangi obunachi",

    "yangi like",

    "yangi ko‘rish",

    "yangi izoh"

];


setInterval(() => {

    const activities =
        document.querySelectorAll(
            ".activity"
        );


    const random =
        Math.floor(
            Math.random() *
            activities.length
        );


    const activity =
        activities[random];


    activity.style.transform =
        "translateX(4px)";


    setTimeout(() => {

        activity.style.transform =
            "translateX(0)";

    }, 300);

}, 3000);


// ===============================
// DATE BUTTON
// ===============================

document
    .querySelector(".date-btn")
    .addEventListener(
        "click",
        () => {

            const options = [

                "Bugun",

                "So‘nggi 7 kun",

                "So‘nggi 30 kun",

                "So‘nggi 90 kun"

            ];


            const selected =
                prompt(
                    "Davrni tanlang:\n\n" +
                    options.join("\n")
                );


            if (selected) {

                document
                    .querySelector(
                        ".date-btn"
                    )
                    .childNodes[2]
                    .textContent =
                    " " + selected + " ";

            }

        }
    );


// ===============================
// KEYBOARD SHORTCUT
// ===============================

document.addEventListener(
    "keydown",
    event => {

        if (
            (event.ctrlKey ||
             event.metaKey) &&
            event.key.toLowerCase() === "k"
        ) {

            event.preventDefault();

            document
                .querySelector(".date-btn")
                .click();

        }


        if (event.key === "Escape") {

            close();

        }

    }
);