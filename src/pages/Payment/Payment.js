import React, { useState } from 'react';

const Payment = () => {
  const [cardholder, setCardholder] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiredMonth, setExpiredMonth] = useState('');
  const [expiredYear, setExpiredYear] = useState('');
  const [securityCode, setSecurityCode] = useState('');

  const formatCardNumber = (value) => {
    let formattedValue = value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
    setCardNumber(formattedValue);
  };

  const isValid = () => {
    if (cardholder.length < 5) {
      return false;
    }
    if (cardNumber === '') {
      return false;
    }
    if (expiredMonth === '' && expiredYear === '') {
      return false;
    }
    if (securityCode.length !== 3) {
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    if (isValid()) {
      alert(`You did it, ${cardholder}!`);
    }
  };

  return (
    <div className="container mx-auto">
      <header className="mt-4 p-4">
        <h1 className="text-xl font-semibold text-gray-700 text-center">Card payment</h1>
      </header>
      <main className="mt-4 p-4">
        <div>
          <div className="my-3">
            <input
              type="text"
              className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
              placeholder="Card holder"
              maxLength="22"
              value={cardholder}
              onChange={(e) => setCardholder(e.target.value)}
            />
          </div>
          <div className="my-3">
            <input
              type="text"
              className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
              placeholder="Card number"
              value={cardNumber}
              onChange={(e) => formatCardNumber(e.target.value)}
              maxLength="19"
            />
          </div>
          <div className="my-3 flex flex-col">
            <div className="mb-2">
              <label htmlFor="" className="text-gray-700">
                Expired
              </label>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <select
                name=""
                id=""
                className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                value={expiredMonth}
                onChange={(e) => setExpiredMonth(e.target.value)}
              >
                <option value="" selected disabled>
                  MM
                </option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select
                name=""
                id=""
                className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
                value={expiredYear}
                onChange={(e) => setExpiredYear(e.target.value)}
              >
                <option value="" selected disabled>
                  YYYY
                </option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
              </select>
            </div>
          </div>
          <div className="my-3">
            <input
              type="text"
              className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none"
              placeholder="Security code"
              maxLength="3"
              value={securityCode}
              onChange={(e) => setSecurityCode(e.target.value)}
            />
          </div>
        </div>
      </main>
      <footer className="mt-6 p-4">
        <button
          className="submit-button px-4 py-3 rounded-full bg-blue-300 text-blue-900 focus:ring focus:outline-none w-full text-xl font-semibold transition-colors"
          disabled={!isValid()}
          onClick={onSubmit}
        >
          Pay now
        </button>
      </footer>
    </div>
  );
};

export default Payment;
