"use client";

export default function TermsConditions() {
  return (
    <section className="min-h-screen  py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Terms & Conditions
        </h1>
        <p className="text-gray-600 mb-10">
          These Terms & Conditions outline the rules and regulations for using
          our website and services.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Acceptance of Terms
            </h2>
            <p className="text-gray-600">
              By accessing or using our services, you agree to comply with these
              Terms & Conditions. If you do not agree, please do not use our
              services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Use of Services
            </h2>
            <p className="text-gray-600">
              You agree to use our services only for lawful purposes and not to
              engage in any activity that may harm, disrupt, or misuse our
              platform.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Limitation of Liability
            </h2>
            <p className="text-gray-600">
              We are not responsible for any direct, indirect, or incidental
              damages arising from the use of our services. Use at your own
              risk.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Changes to Terms
            </h2>
            <p className="text-gray-600">
              We may update these Terms & Conditions at any time. Continued use
              of our services after changes means you accept the updated terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}