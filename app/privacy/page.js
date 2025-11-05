"use client";

export default function PrivacyPolicy() {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-10">
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your information when you use our services.
        </p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Information We Collect
            </h2>
            <p className="text-gray-600">
              We may collect personal information such as your name, email,
              phone number, and service details when you interact with our
              website or services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              How We Use Information
            </h2>
            <p className="text-gray-600">
              The information we collect is used to provide and improve our
              services, communicate with you, and ensure the security of our
              platform.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Data Protection
            </h2>
            <p className="text-gray-600">
              We implement industry-standard security measures to protect your
              information from unauthorized access, disclosure, alteration, or
              destruction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold  mb-2">
              Your Rights
            </h2>
            <p className="text-gray-600">
              You have the right to access, update, or delete your personal
              information. Contact us if you have any concerns about your data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}