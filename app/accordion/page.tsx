'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  // Order & Shipping
  {
    question: "How long does shipping take?",
    answer: "Standard shipping typically takes 3-5 business days. Express shipping is available for 1-2 business day delivery. International shipping may take 7-14 business days depending on the destination.",
    category: "Order & Shipping"
  },
  {
    question: "Do you offer free shipping?",
    answer: "Yes! We offer free standard shipping on all orders over $50. For orders below $50, a flat rate of $4.99 applies for standard shipping.",
    category: "Order & Shipping"
  },
  {
    question: "How can I track my order?",
    answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account and visiting the 'Order History' section.",
    category: "Order & Shipping"
  },
  {
    question: "What countries do you ship to?",
    answer: "We currently ship to all 50 US states, Canada, UK, Australia, and most European countries. Some restrictions may apply to certain products based on local regulations.",
    category: "Order & Shipping"
  },

  // Returns & Refunds
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy for most items in original condition. Electronics have a 14-day return window. Items must be unused and in original packaging with all tags attached.",
    category: "Returns & Refunds"
  },
  {
    question: "How do I return an item?",
    answer: "Initiate a return through your account dashboard, print the prepaid shipping label, and drop the package at any authorized shipping location. Refunds are processed within 3-5 business days after we receive the return.",
    category: "Returns & Refunds"
  },
  {
    question: "Do you offer exchanges?",
    answer: "Yes, we offer exchanges for size or color variations. You can request an exchange through your account or contact our customer service team for assistance.",
    category: "Returns & Refunds"
  },

  // Products & Inventory
  {
    question: "Are your products authentic?",
    answer: "Absolutely! We source all our products directly from authorized distributors and brands. We guarantee 100% authenticity for every item sold on our platform.",
    category: "Products & Inventory"
  },
  {
    question: "What if an item is out of stock?",
    answer: "You can sign up for restock notifications on the product page. We typically restock popular items within 1-2 weeks, and you'll be notified immediately when items become available.",
    category: "Products & Inventory"
  },
  {
    question: "Do you offer product warranties?",
    answer: "Yes, most electronics and appliances come with manufacturer warranties. Warranty details are provided on product pages and included with your purchase documentation.",
    category: "Products & Inventory"
  },

  // Payment & Security
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and Shop Pay. All payments are processed securely through encrypted channels.",
    category: "Payment & Security"
  },
  {
    question: "Is my payment information secure?",
    answer: "Yes, we use industry-standard SSL encryption and never store your complete payment details on our servers. We're PCI DSS compliant and regularly audit our security measures.",
    category: "Payment & Security"
  },
  {
    question: "Can I pay with multiple payment methods?",
    answer: "Currently, we only accept one payment method per order. However, you can use gift cards in combination with another payment method during checkout.",
    category: "Payment & Security"
  },

  // Account & Technical
  {
    question: "How do I create an account?",
    answer: "Click the 'Sign Up' button in the top navigation, enter your email address, create a password, and verify your email. You can also sign up using your Google or Apple account.",
    category: "Account & Technical"
  },
  {
    question: "I forgot my password. How can I reset it?",
    answer: "Click 'Forgot Password' on the login page, enter your email address, and we'll send you a password reset link. The link expires in 24 hours for security.",
    category: "Account & Technical"
  },
  {
    question: "Do you have a mobile app?",
    answer: "Yes! Our mobile app is available for both iOS and Android devices. You can download it from the App Store or Google Play Store for enhanced shopping features.",
    category: "Account & Technical"
  }
];

const categories = Array.from(new Set(faqData.map(item => item.category)));

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const filteredFaqs = faqData.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common questions about shopping, shipping, returns, and more.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-b-0">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-medium text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openItems.includes(index) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Still Have Questions */}
        <div className="text-center mt-12 bg-white rounded-2xl p-8 shadow-sm border border-gray-200 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Can&apos;t find the answer you&apos;re looking for? Please reach out to our friendly support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </Link>
            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Live Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}