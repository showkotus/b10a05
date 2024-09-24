// Button toggler

const button_donation = document.getElementById("btn-donation");
const button_history = document.getElementById("btn-history");

button_donation.addEventListener("click", () => {
  button_donation.classList.add("bg-blue-500", "text-white");
  button_history.classList.remove("bg-blue-500", "text-white");
});

button_history.addEventListener("click", () => {
  button_history.classList.add("bg-blue-500", "text-white");
  button_donation.classList.remove("bg-blue-500", "text-white");
});

// Hide donation section and show history

function showButton(id) {
  document.getElementById("section-donation").classList.add("hidden");
  document.getElementById("section-history").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}

document.getElementById("btn-donation").addEventListener("click", function () {
  showButton("section-donation");
});

document.getElementById("btn-history").addEventListener("click", function () {
  showButton("section-history");
});

// input validation

// function validationInput(amount) {
//   const initialBalance = parseFloat(
//     document.getElementById("initial-balance").innerText
//   );

//   if (isNaN(amount) || amount === "" || amount <= 0) {
//     alert("Invalid donate amount");
//     return;
//   } else if (amount > initialBalance) {
//     alert("Available balance is very low");
//     return;
//   } else {
//     document.getElementById("modal").showModal();
//   }
// }

// add and deduct donation money

function inputFieldValueById(id) {
  const amount = document.getElementById(id).value;
  return amount;
}

function currentBalance(id) {
  const balance = document.getElementById(id).innerText;
  const updateBalance = parseFloat(balance);
  return updateBalance;
}

// Donation for noakhali

document
  .getElementById("btn-donate-noakhali")
  .addEventListener("click", function () {
    const donateAmount = parseFloat(
      inputFieldValueById("donate-amount-noakhali")
    );

    const initialAmount = parseFloat(
      document.getElementById("initial-balance").innerText
    );

    // validation input
    if (isNaN(donateAmount) || donateAmount === "" || donateAmount <= 0) {
      return alert("Invalid donate amount");
    } else if (donateAmount > initialAmount) {
      return alert("Available balance is very low");
    } else {
      document.getElementById("modal").showModal();
    }
    // update cards total donation
    const currentAmount = parseFloat(
      currentBalance("total-donate-amount-noakhali")
    );
    //   document.getElementById("total-donate-amount-noakhali").innerText
    // );

    const updateAmount = currentAmount + donateAmount;
    // update initial balance
    const totalDonatedAmount = (document.getElementById(
      "total-donate-amount-noakhali"
    ).innerText = updateAmount);

    const updateInitialBalance = initialAmount - donateAmount;

    document.getElementById("initial-balance").innerText = updateInitialBalance;

    // append in history

    const titleData = document.getElementById("title-noakhali").innerText;

    const date = new Date();

    const div = document.createElement("div");
    div.classList.add(
      "border",
      "border-gray-300",
      "mt-5",
      "px-5",
      "py-4",
      "rounded-xl"
    );
    div.innerHTML = `
      <h3 class="text-xl font-semibold"> ${donateAmount} Taka is ${titleData}</h3>

      <p class = "text-[#111111B3] mt-3 ">Date : ${date}  </p>
      
  `;
    document.getElementById("show-history").appendChild(div);
  });

// Donation for feni

document
  .getElementById("btn-donate-feni")
  .addEventListener("click", function () {
    const donateAmount = parseFloat(inputFieldValueById("donate-amount-feni"));

    const initialAmount = parseFloat(
      document.getElementById("initial-balance").innerText
    );

    // validation input
    if (isNaN(donateAmount) || donateAmount === "" || donateAmount <= 0) {
      return alert("Invalid donate amount");
    } else if (donateAmount > initialAmount) {
      return alert("Available balance is very low");
    } else {
      document.getElementById("modal").showModal();
    }
    // update cards total donation
    const currentAmount = parseFloat(
      currentBalance("total-donate-amount-feni")
    );
    //   document.getElementById("total-donate-amount-feni").innerText
    // );

    const updateAmount = currentAmount + donateAmount;
    // update initial balance
    const totalDonatedAmount = (document.getElementById(
      "total-donate-amount-feni"
    ).innerText = updateAmount);

    const updateInitialBalance = initialAmount - donateAmount;

    document.getElementById("initial-balance").innerText = updateInitialBalance;

    // append in history

    const titleData = document.getElementById("title-feni").innerText;

    const date = new Date();

    const div = document.createElement("div");
    div.classList.add(
      "border",
      "border-gray-300",
      "mt-5",
      "px-5",
      "py-4",
      "rounded-xl"
    );
    div.innerHTML = `
      <h3 class="text-xl font-semibold"> ${donateAmount} Taka is ${titleData}</h3>

      <p class = "text-[#111111B3] mt-3 ">Date : ${date}  </p>
      
  `;
    document.getElementById("show-history").appendChild(div);
  });
// Donation for quota

document
  .getElementById("btn-donate-quota")
  .addEventListener("click", function () {
    const donateAmount = parseFloat(inputFieldValueById("donate-amount-quota"));

    const initialAmount = parseFloat(
      document.getElementById("initial-balance").innerText
    );

    // validation input
    if (isNaN(donateAmount) || donateAmount === "" || donateAmount <= 0) {
      return alert("Invalid donate amount");
    } else if (donateAmount > initialAmount) {
      return alert("Available balance is very low");
    } else {
      document.getElementById("modal").showModal();
    }
    // update cards total donation
    const currentAmount = parseFloat(
      currentBalance("total-donate-amount-quota")
    );
    //   document.getElementById("total-donate-amount-quota").innerText
    // );

    const updateAmount = currentAmount + donateAmount;
    // update initial balance
    const totalDonatedAmount = (document.getElementById(
      "total-donate-amount-quota"
    ).innerText = updateAmount);

    const updateInitialBalance = initialAmount - donateAmount;

    document.getElementById("initial-balance").innerText = updateInitialBalance;

    // append in history

    const titleData = document.getElementById("title-quota").innerText;

    const date = new Date();

    const div = document.createElement("div");
    div.classList.add(
      "border",
      "border-gray-300",
      "mt-5",
      "px-5",
      "py-4",
      "rounded-xl"
    );
    div.innerHTML = `
      <h3 class="text-xl font-semibold"> ${donateAmount} Taka is ${titleData}</h3>

      <p class = "text-[#111111B3] mt-3 ">Date : ${date}  </p>
      
  `;
    document.getElementById("show-history").appendChild(div);
  });
