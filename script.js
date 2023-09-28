const btn = document.getElementById("btn");
btn.onclick = () => {
    fetch("https://randomuser.me/api/?results=100")
        .then((response) => response.json())
        .then((data) => showUser(data.results));
};

const showUser = (users) => {
    users.map((user) => {
        const {
            email,
            name: {
                first,
                last,
                title,
            },
            phone,
            picture: {
                large,
                medium,
                thumbnail,
            }

        } = user;
        const userInfo = document.getElementById("userInfo");
        userInfo.innerHTML = `<img src="${medium}" alt="IMAGE">
                              <p class="dainamick">My Name Is</p>
                              <div class="name">
                                  <label style="font-weight: bold; font-size: 30px;">${title}</label>
                                  <label style="font-weight: bold; font-size: 30px;">${first}</label>
                                  <label style="font-weight: bold; font-size: 30px;">${last}</label>
                              </div>
                              <p>${email}</p>
                              <p>${phone}</p>
                            `;
    });
};

// ALL DONE 