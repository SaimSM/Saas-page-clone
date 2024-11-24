import React from 'react';
import Image from 'next/image';

const SectionSponser = () => {
  return (
    <div className="bg-white">
      {/* Sponsors Section */}
      <div className="text-center py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Our sponsors
        </h2>
        <div className="flex justify-center items-center gap-8 mt-8">
          {/* Logo Images */}
          <div className="flex justify-center items-center w-24 h-24">
            <Image
              src="/logos/Apple.png"
              alt="Apple logo"
              width={40}
              height={40}
              objectFit="contain"
            />
          </div>
          <div className="flex justify-center items-center w-24 h-24">
            <Image
              src="/logos/microsoft 1.png"
              alt="Microsoft logo"
              width={80}
              height={80}
              objectFit="contain"
            />
          </div>
          <div className="flex justify-center items-center w-24 h-24">
            <Image
              src="/logos/Slack.png"
              alt="Slack logo"
              width={80}
              height={80}
              objectFit="contain"
            />
          </div>
          <div className="flex justify-center items-center w-24 h-24">
            <Image
              src="/logos/Group 246.png"
              alt="Google logo"
              width={80}
              height={80}
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#043873] text-white py-10">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div>
              <Image
                src="/logos/Logo.png"
                alt="Whitespace Logo"
                width={120}
                height={100}
              />
              <p className="mt-4 text-sm">
                Whitespace was created for the new ways we live and work. We
                make a better workspace around the world.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-bold text-sm mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>Overview</li>
                <li>Pricing</li>
                <li>Customer stories</li>
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="font-bold text-sm mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>Blog</li>
                <li>Guides & tutorials</li>
                <li>Help center</li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-bold text-sm mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>About us</li>
                <li>Careers</li>
                <li>Media kit</li>
              </ul>
            </div>
          </div>

        </div>
      </footer>
          {/* Copyright Section */}
          <div className="text-center mt-8 text-[12px] text-white border-2 border-red-500 h-[24px]">
            ©2021 Whitespace LLC.
          </div>
    </div>
  );
};

export default SectionSponser;
