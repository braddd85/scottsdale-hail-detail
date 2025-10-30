import React from 'react';

interface TimelineStep {
  number: string;
  icon: string;
  title: string;
  description: string;
}

const steps: TimelineStep[] = [
  {
    number: '1',
    icon: '🔍',
    title: 'Book Your Free Scan',
    description: 'Choose our Scottsdale shop or mobile visit. We inspect with LED boards or manual technique depending on conditions.'
  },
  {
    number: '2',
    icon: '📋',
    title: 'Claim Help & Photos',
    description: 'If you haven\'t filed yet, we\'ll help you open the claim and capture insurance-grade photos and documentation.'
  },
  {
    number: '3',
    icon: '🤝',
    title: 'Insurance Coordination',
    description: 'We communicate with your carrier, handle supplements, and set Direction-to-Pay so you don\'t lift a finger.'
  },
  {
    number: '4',
    icon: '🔧',
    title: 'Paintless Dent Repair (PDR)',
    description: 'We massage dents from behind the panel—no paint, fillers, or bondo—preserving the OEM finish.'
  },
  {
    number: '5',
    icon: '✅',
    title: 'Delivery, Warranty & Detail',
    description: 'Quality check, complimentary detail, and a lifetime workmanship warranty on PDR while you own the vehicle.'
  }
];

export default function ProcessTimeline() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Proven Process
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From inspection to warranty, we guide you through every step of restoring your vehicle to like-new condition.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-blue-100" 
               style={{ marginLeft: '8%', marginRight: '8%' }}></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  {/* Icon with Background */}
                  <div className="relative mb-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-blue-500 rounded-full flex items-center justify-center shadow-md">
                      <span className="text-sm font-bold text-blue-600">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-blue-50 px-6 py-3 rounded-full">
            <span className="text-sm font-medium text-blue-900">
              Ready to start? Free inspection and estimate
            </span>
            <a 
              href="tel:+16237777365"
              className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors text-sm"
            >
              Call (623) 777-7365
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

