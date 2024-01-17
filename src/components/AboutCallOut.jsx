export function AboutCallOut() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600"><a id="mission">Our mission</a></p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">To help create as many successful entreprenuers as possible.</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                At Everyway, we believe that the human imperative is to create, and entrepreneurship is the best avenue for creation.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Our goal is to bring the strategies and technology utilized by multimillion dollar companies to small business owners, soloprenuers, and bootstrapped start ups. If you are a mulimillion dollar company, do not worry, we still want to work with you too.<br /><br />
              </p>
              <p className="text-base font-semibold leading-7 text-indigo-600">Our Values</p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  
                  <span>
                    <strong className="font-semibold text-gray-900">Honesty</strong><br />Stats and KPIs should be an accurate measurement of progression. We never hide behind stats or morph them to make our performance look better than it is.
                  </span>
                </li>
                <li className="flex gap-x-3">
               
                  <span>
                    <strong className="font-semibold text-gray-900">Transparency</strong><br />We will tell you exactly what we are doing, why we are doing it, and most importantly, how we are doing it. We build systems and standard operating procedures that work without us and are adamently opposed to vendor lock in.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  
                  <span>
                    <strong className="font-semibold text-gray-900">Accountability</strong><br />Most business initiaves fail due to lack of accountability. We bear the full weight of our actions and own the work we do for you. Period.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
               We are new company, but our founder has nearly two decades of experience. We are changing the way things are done surrounding website development and marketing campaigns. Our focus is on overall organization success. A website by itself accomplishes nothing.
               </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Just getting started? No problem.</h2>
              <p className="mt-6">
                We are preparing an affordable monthly consultation platform that contains a library of the most commonly needed standard operation procedures so you can DIY business growth with monthly consultations with us. This is not another masterclass or cohort that you end up with nothing to show for after. This is a monthly consulting session and full access to everything you need to roll up your sleeves and start bringing in revenue with your business.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                 Join the waitlist
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
