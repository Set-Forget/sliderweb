"use client";
import data from "@/public/info.json";

export default function InfoPage({ params }) {
  const route = params;
  console.log("params", route, typeof route);
  console.log("data", data.privacypolicy.content);

  let content;

  if (route.info_route === "privacypolicy") {
    content = (
      <>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mt-6">
          Privacy Policy
        </h1>
        <p className="leading-8 dark:text-gray-300 mt-6 text-sm">
          {data.privacypolicy.content}.
          To read the Google API Services User Data Policy, click the following link:
          <a href="https://developers.google.com/terms/api-services-user-data-policy" className="leading-8 text-blue-600 mt-6 text-sm"> https://developers.google.com/terms/api-services-user-data-policy</a>
        </p>
      </>
    );
  } else if (route.info_route === "termsandconditions") {
    content = (
      <>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mt-6">
          Terms & Conditions
        </h1>
        <p className="leading-8 dark:text-gray-300 mt-6 text-sm">{data.termsandconditions.content}</p>
      </>
    );
  } else if (route.info_route === "googledisclosure") {
    content = (
      <>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mt-6">
          Google Disclosure
        </h1>
        <p className="leading-8 dark:text-gray-300 mt-6 text-sm">
          SliderWeb use and transfer of information received from Google APIs to
          any other app will adhere to Google API Services User Data Policy,
          including the Limited Use requirements.
        </p>
      </>
    );
  } else {
    content = (
      <>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mt-6">
          Page not found
        </h1>
        <p>Bummer!</p>
      </>
    );
  }

  return (
    <div className="mx-auto custom-min-height px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40 dark:bg-gray-900 flex flex-col items-center justify-center">
      <div className="w-full flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
        {content}
      </div>
    </div>
  );
}
