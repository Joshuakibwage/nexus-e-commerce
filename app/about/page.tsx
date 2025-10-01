import Link from 'next/link';
import Image from 'next/image';


export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">About Our E-Commerce Journey</h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            We&apos;re revolutionizing online shopping with cutting-edge technology, 
            exceptional products, and customer-centric experiences.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2020, our e-commerce platform began as a small startup with a big vision: 
                to make online shopping seamless, secure, and enjoyable for everyone. What started 
                as a team of three passionate individuals has grown into a thriving community of 
                dedicated professionals.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We&apos;ve partnered with hundreds of trusted brands and suppliers worldwide to bring 
                you the best products at competitive prices. Our commitment to quality and customer 
                satisfaction has helped us serve over 1 million satisfied customers.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">1M+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50K+</div>
                  <div className="text-gray-600">Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100+</div>
                  <div className="text-gray-600">Brands</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Image 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Our Team"
                className="w-full h-80 object-cover rounded-xl"
                width={1000}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and shape our company culture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-3">Trust & Security</h3>
              <p className="text-gray-600">
                Your security is our top priority. We use advanced encryption and security measures 
                to protect your data and transactions.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-3">Customer First</h3>
              <p className="text-gray-600">
                We&apos;re obsessed with customer satisfaction. Our support team is available 24/7 to 
                ensure you have the best shopping experience.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously innovate our platform with the latest technology to provide 
                faster, smarter, and more intuitive shopping experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate individuals driving our mission forward.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-6 rounded-2xl shadow-sm">
              <Image 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="CEO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                width={1000}
                height={600}
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-500">Alex Johnson</h3>
              <p className="text-blue-600 mb-3">CEO & Founder</p>
              <p className="text-gray-600 text-sm">
                With over 15 years in e-commerce, Alex leads our vision and strategic direction.
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-2xl shadow-sm">
              <Image 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="CTO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                width={1000}
                height={600}
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-500">Sarah Chen</h3>
              <p className="text-blue-600 mb-3">Chief Technology Officer</p>
              <p className="text-gray-600 text-sm">
                Sarah drives our technical innovation and platform development.
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-2xl shadow-sm">
              <Image 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="COO"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                width={1000}
                height={600}
              />
              <h3 className="text-xl font-semibold mb-2 text-gray-500">Michael Rodriguez</h3>
              <p className="text-blue-600 mb-3">Chief Operations Officer</p>
              <p className="text-gray-600 text-sm">
                Michael ensures our operations run smoothly and efficiently worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Shop With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join millions of satisfied customers who trust us for their online shopping needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Shopping
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}