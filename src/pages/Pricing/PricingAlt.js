import React from "react";
import plansData from "./Plans.json";

const PricingPlans = () => {
  return (
    <div className="antialiased w-full h-full bg-gray-900 text-gray-300 font-inter p-10">
      <div className="container px-4 mx-auto">
        <div>
          <div id="title" className="text-center my-10">
            <h1 className="font-bold text-4xl text-white">Pricing Plans</h1>
            <p className="text-light text-gray-500 text-xl">
              Here are our pricing plans
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-10 pt-10">
            {plansData.map((plan, index) => (
              <div
                key={index}
                className="rounded-lg text-center overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in"
              >
                <div className="w-full py-5 border-b border-gray-800">
                  <h2 className="font-bold text-3xl text-white">{plan.name}</h2>
                  <h3 className="font-normal text-indigo-500 text-xl mt-2">
                    ${plan.price.monthly}<sup>,99</sup>/month
                  </h3>
                </div>
                <div className="">
                  <div className="my-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 mx-auto fill-stroke text-indigo-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                      />
                    </svg>
                    <p className="text-gray-500 text-sm pt-2">
                      {plan.description}
                    </p>
                  </div>
                  <div className="leading-8 mb-10 text-lg font-light">
                    <ul>
                      {plan.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    <div className="w-full mt-10 px-6">
                      <a
                        href="#"
                        className="w-full block bg-gray-900 font-medium text-xl py-4 rounded-xl hover:shadow-lg transition duration-200 ease-in-out hover:bg-indigo-600 hover:text-white"
                      >
                        Choose
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
