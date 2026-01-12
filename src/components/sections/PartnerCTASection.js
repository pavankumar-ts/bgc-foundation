'use client';

import Link from 'next/link';
import { Card, CardContent } from '../ui/Card';

const PartnerCTASection = () => {
  return (
    <div className="border-b border-gray-200">
      <div className="section-container py-12 pt-0">
        <Card className="bg-gradient-to-r from-primary-600 to-secondary-600 border-none">
          <CardContent className="text-center py-8 px-6">
            <h3 className="subsection-h3 max-w-2xl mx-auto text-white mb-4">
              Partner With Us to Bring Life-Saving Digestive Care to Rural Karnataka
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Join us in our mission to transform rural healthcare and save lives through early detection and expert treatment.
            </p>
            <div className="max-w-md mx-auto px-4 sm:px-0">
              <Link href="/contact">
                <button
                  type="button"
                  className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-sm whitespace-nowrap w-full sm:w-auto"
                >
                  Partner With Us
                </button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PartnerCTASection;
