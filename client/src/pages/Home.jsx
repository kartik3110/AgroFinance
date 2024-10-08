import { Button, Divider, Text } from "components";
import React from "react";
import bannerImg from "../assets/images/hero-banner.png";
import Arrow from "components/Arrow";
import solutionImg from "../assets/images/solution.png";
import inclusionImg from "../assets/images/inclusion.png";
import challengesImg from "../assets/images/challenges.png";
import ScrollToTop from "components/ScrollToTop";
const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="mt-16 mb-28 mx-2 bg-hero-pattern bg-cover bg-center h-screentext-white">
        <div className="flex justify-around">
          <div className="w-1/2 flex flex-col justify-center">
            <h1 className=" text-6xl font-bold mb-4">
              Empowering Farmers: Zero-Collateral Lending
            </h1>
            <Text className="mb-8" size="2xl">
              Flexible, affordable loans tailored to the needs of farmers, with
              no collateral required.
            </Text>
            <div className="flex space-x-4">
              <Button shape="round">
                <a className="font-semibold" href="#how-it-works">
                  Learn More
                </a>
              </Button>
              <Button variant="outline" shape="round">
                <a
                  className="font-semibold"
                  href="/login"
                  //   className="px-6 py-3 bg-transparent border border-white rounded-lg"
                >
                  Get Started
                </a>
              </Button>
            </div>
          </div>
          <img className="w-5/12 h-auto " src={bannerImg} />
        </div>
      </section>

      <Divider />
      {/* Problem Statement */}
      <section className="py-16 px-4 md:px-16 text-center">
        <div className="flex justify-around">
          <div className=" -mt-4">
            <img
              src={challengesImg}
              alt="challenge"
              className=" rounded-lg w-[400px]"
            />
          </div>
          <div className="w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-8">
              The Challenge Farmers Face
            </h1>
            <p className="text-lg max-w-3xl mx-auto mb-6">
              Traditional lending platforms don’t consider the unique financial
              challenges farmers encounter, such as seasonal income, crop
              cycles, and fluctuating market prices. Our platform breaks down
              the barriers to provide flexible credit tailored for farmers.
            </p>
          </div>
        </div>
      </section>
      <Divider />
      {/* Solution */}
      <section className="py-16 px-4 md:px-16 text-center">
        <div className="flex justify-around">
          <div className="w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-8">Our Solution</h1>
            <p className="text-lg max-w-3xl mx-auto mb-6">
              Zero-collateral lending platform where stakers provide collateral
              for farmers. This unique model decentralizes the risk and ensures
              farmers have access to much-needed credit.
            </p>
          </div>
          <img
            src={solutionImg}
            alt="Solution"
            className="rounded-lg w-[400px]"
          />
        </div>
      </section>
      <Divider />
      {/* Impact Section */}
      <section className="py-16 px-4 md:px-16 text-center">
        <div className="flex justify-around">
          <img
            src={inclusionImg}
            alt="financial inclusion"
            className="rounded-lg w-[400px]"
          />
          <div className="w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl font-bold mb-8">
              Driving Financial Inclusion
            </h1>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              Our platform is improving rural development, supporting
              sustainable farming, and providing farmers with the financial
              tools they need for success.
            </p>
          </div>
        </div>
      </section>
      <Divider />

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          How Our Platform Works
        </h1>
        <div className="px-4 py-16 mx-auto">
          <div className="grid gap-8 row-gap-0 grid-cols-4">
            <div className="relative text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
                <svg
                  className="w-12 h-12 text-indigo-600 sm:w-16 sm:h-16"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 text-2xl font-extrabold">Step 1</h6>
              <span className="inline-flex items-center my-2 font-semibold text-indigo-600">
                Farmers Apply
              </span>
              <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                Farmers register and apply for loans based on their needs.
              </p>
              <div className="top-0 -right-5 flex items-center justify-center h-24 absolute">
                <Arrow />
              </div>
            </div>
            <div className="relative text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
                <svg
                  className="w-12 h-12 text-indigo-600 sm:w-16 sm:h-16"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 text-2xl font-extrabold">Step 2</h6>
              <span className="inline-flex items-center my-2 font-semibold text-indigo-600">
                Stakers Provide Collateral
              </span>
              <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                Stakers pledge funds to act as collateral for farmers.
              </p>
              <div className="top-0 -right-5 flex items-center justify-center h-24 lg:-mr-8 absolute">
                <Arrow />
              </div>
            </div>
            <div className="relative text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
                <svg
                  className="w-12 h-12 text-indigo-600 sm:w-16 sm:h-16"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 text-2xl font-extrabold">Step 3</h6>

              <span className="inline-flex items-center my-2 font-semibold text-indigo-600">
                Loans Are Issued
              </span>
              <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                Loans are issued based on trust and community reputation.
              </p>
              <div className="top-0 -right-5 flex items-center justify-center h-24 lg:-mr-8 absolute">
                <Arrow />
              </div>
            </div>
            <div className="relative text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
                <svg
                  className="w-12 h-12 text-indigo-600 sm:w-16 sm:h-16"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 text-2xl font-extrabold">Step 4</h6>
              <span className="inline-flex items-center my-2 font-semibold text-indigo-600">
                Repayment
              </span>
              <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                Farmers repay the loan based on their flexible
              </p>
            </div>
          </div>
        </div>
      </section>
      <Divider />
      {/* Why Choose Us */}
      <section className="py-16 px-4 md:px-16 text-center">
        <h1 className="text-4xl italic font-bold mb-16">Why Choose Us?</h1>
        <div className="flex justify-center gap-16">
          <div className="block max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-indigo-600 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Zero Collateral Loans
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Farmers can access loans without needing to provide collateral.
            </p>
          </div>

          <div className="block hover:shadow-indigo-600 max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Stakers as collateral providers
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Decentralized risk sharing through community innvolvement.
            </p>
          </div>

          <div className="block max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow hover:shadow-indigo-600 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Tailored for agriculture
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Flexible loan terms aligned with farming cycles and seasonal
              income.
            </p>
          </div>
        </div>
      </section>
      <Divider />
      {/* Call to Action */}

      <div className="bg-white mb-8 dark:bg-gray-800 ">
        <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
            <span className="block">Ready To Get Started ?</span>
            <span className="block text-indigo-500">
              Take the first step today!
            </span>
          </h2>
          <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
            Join us in transforming agriculture - access hassle free loans and
            grow your future today!
          </p>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className="mt-12 inline-flex rounded-md shadow">
              <Button shape="round">
                <a className="px-4 font-semibold" href="/login  ">
                  Get Started
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <section className="bg-gray-200">
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav className="flex flex-wrap justify-center -mx-5 -my-2">
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                About
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Blog
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Team
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Pricing
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Contact
              </a>
            </div>
            <div className="px-5 py-2">
              <a
                href="#"
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Terms
              </a>
            </div>
          </nav>
          <div className="flex justify-center mt-8 space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Instagram</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <p className="mt-8 text-base leading-6 text-center text-gray-400">
            © 2024 AgroFinance, Inc. All rights reserved.
          </p>
        </div>
      </section>

      {/* --------------------- */}
      <ScrollToTop />
    </div>
  );
};

export default Home;
