import React, { useState } from "react";
import "./Pricing.css";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "Starter Plan",
      price: 19.99,
      features: [
        "Up to 5 users",
        "Unlimited Tasks & Projects",
        "Basic Time Tracking",
        "Basic Chat & Calendar View",
        "Real-Time Notifications",
        "Real-Time Notifications",
        "Real-Time Notifications",
      ],
      buttonText: "Select Plan",
      style: "starter",
    },
    {
      name: "Professional Plan",
      price: 59.99,
      features: [
        "Up to 50 users",
        "Advanced Task Management",
        "Priority Support",
        "Dedicated Chat & Video Calls",
        "More Third-Party Integrations",
        "More Third-Party Integrations",
        "More Third-Party Integrations",
        "More Third-Party Integrations",
      ],
      buttonText: "Select Plan",
      style: "growth",
      tag: "Popular",
    },
    {
      name: "Enterprise Plan",
      price: 129.99,
      features: [
        "Unlimited Users",
        "Enterprise-Level Security",
        "Advanced Reporting & Analytics",
        "Custom Workflows",
        "24/7 Priority Support",
        "24/7 Priority Support",
        "24/7 Priority Support",
        "24/7 Priority Support",
      ],
      buttonText: "Select Plan",
      style: "enterprise",
    },
  ];

  return (
    <div className="text-center py-12 px-5">
      <h2 className="text-3xl font-bold">Find the perfect plan</h2>
      <p className="text-gray-600 text-lg mt-2 mb-6">
        Pricing that’s simple, predictable, and built for businesses ready to scale.
      </p>

      {/* Billing Toggle */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          className={`px-6 py-2 rounded-full font-bold transition ${
            billingCycle === "monthly" ? "bg-black text-white" : "bg-gray-200"
          }`}
          onClick={() => setBillingCycle("monthly")}
        >
          Monthly
        </button>
        <button
          className={`px-6 py-2 rounded-full font-bold transition ${
            billingCycle === "annually" ? "bg-black text-white" : "bg-gray-200"
          }`}
          onClick={() => setBillingCycle("annually")}
        >
          Annually
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-wrap justify-center gap-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-[#fff3ec] p-6 rounded-xl shadow-lg w-86 text-center transition-transform hover:-translate-y-2 ${
              plan.style === "growth" ? "bg-purple-700 text-white scale-105" : ""
            }`}
          >
            {plan.tag && (
              <span className="bg-yellow-400 text-black px-3 py-1 text-sm font-bold rounded-full inline-block mb-3">
                {plan.tag}
              </span>
            )}
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="text-2xl font-bold mt-2">
              ${billingCycle === "annually" ? (plan.price * 12 * 0.8).toFixed(2) : plan.price}
            </p>
            <ul className="text-left mt-4 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  ✅ {feature}
                </li>
              ))}
            </ul>
            <button className="mt-5 bg-black text-white py-2 w-full rounded-full text-lg font-semibold transition hover:bg-gray-800">
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
