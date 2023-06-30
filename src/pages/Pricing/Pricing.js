import React, { useState } from "react";
import plans from "./Plans.json";

function Pricing() {
  const [billPlan, setBillPlan] = useState("monthly");


  const toggleBillPlan = () => {
    setBillPlan((prevPlan) =>
      prevPlan === "monthly" ? "annually" : "monthly"
    );
  };

  return (
    <div className="container mx-auto antialiased text-gray-900 bg-white">
      <main className="mx-4 my-16">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-normal md:text-3xl lg:text-4xl">
            Our <span className="font-semibold">plans</span> for your{" "}
            <span className="font-semibold">strategies</span>
          </h1>
          <p className="text-sm font-normal text-gray-400">
            See below our main three plans for your business, startup, and agency.
          </p>
          <p className="text-sm font-normal text-gray-400">
            Start from here! Learn what you really like.
          </p>
        </div>

        {/* Plan switch */}
        <div className="flex items-center justify-center mt-10 space-x-4">
          <span className="text-base font-medium">Bill Monthly</span>
          <button
            className="relative rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            onClick={toggleBillPlan}
          >
            <div className="w-16 h-8 transition bg-green-500 rounded-full shadow-md outline-none"></div>
            <div
              className={`absolute inline-flex items-center justify-center w-6 h-6 transition-all duration-200 ease-in-out transform bg-white rounded-full shadow-sm top-1 left-1 ${
                billPlan === "monthly" ? "translate-x-0" : "translate-x-8"
              }`}
            ></div>
          </button>
          <span className="text-base font-medium">Bill Annually</span>
        </div>

        <div className="flex flex-col items-center justify-center mt-16 space-y-8 lg:flex-row lg:items-stretch lg:space-x-8 lg:space-y-0">
          {plans.map((plan) => (
            <section
              className="flex flex-col w-full max-w-sm space-y-6 bg-white rounded-lg shadow-md"
            >
              
              <div className="flex flex-col p-8 bg-white border rounded-lg shadow-lg">
                <h3 className="mb-4 text-xl font-semibold text-gray-900">
                  {plan.name}
                </h3>
                <div className="flex-shrink-0">
                <span className={`mb-6 text-4xl font-bold tracking-tight ${plan.name === 'Basic' ? 'text-green-500' : ''}`}>
                  ${billPlan === "monthly" ? plan.price.monthly : plan.price.annually}
                </span>
                <span className="text-gray-400 ">
                  {billPlan === "monthly" ? "/month" : "/year"}
                </span>
              </div>
              <div class="flex-shrink-0 pb-6 pt-4 space-y-2 border-b">
              {/* <h2 class="text-2xl font-normal">{plan.name}</h2> */}
            <p class="text-sm text-gray-400">{plan.description}</p>
          </div>

                {/* Features */}
                <ul className="flex-1 space-y-4 pt-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-green-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="ml-3 text-base font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div class="flex-shrink-0 pt-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-full max-w-xs px-4 py-2 transition-colors border rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  Get started
                </a>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Pricing;
