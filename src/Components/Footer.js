import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing (optional)

const Footer = () => {
  const links = [
    { label: 'Home', href: '/' },
    { label: 'News', href: '/news' }, // Adjust hrefs as needed
    { label: 'Games', href: '/games' },
    { label: 'References', href: '/references' },
    { label: 'Tech', href: '/tech' },
    { label: 'Entertainment', href: '/entertainment' },
    { label: 'Lifestyle', href: '/lifestyle' },
    { label: 'Travel', href: '/travel' },
    { label: 'Health', href: '/health' },
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
    { label: 'Contact', href: '/contact' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Help Center', href: '/help-center' },
    { label: 'Returns', href: '/returns' },
    { label: 'Shipping Info', href: '/shipping-info' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
    { label: 'Legal Notices', href: '/legal-notices' },
  ];

  const renderLinks = (category) => {
    return (
      <ul className="space-y-2">
        {category.map((link) => (
          <li key={link.label}>
            {link.href ? (
              // Use Link component for routing if provided
              <Link to={link.href} className="text-blue-400 hover:underline">
                {link.label}
              </Link>
            ) : (
              <span className="text-blue-400 hover:underline">{link.label}</span>
            )}
          </li>
        ))}
      </ul>
    );
  };               

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Categories Section */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Categories</h3>
            {renderLinks(links.slice(0, 8))} {/* Display first 8 links */}
          </div>

          {/* About Us, Support, Legal Sections (repeat the structure) */}
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            {renderLinks(links.slice(8, 11))} {/* Display links 8-10 */}
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            {renderLinks(links.slice(11, 15))} {/* Display links 11-14 */}
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            {renderLinks(links.slice(15))} {/* Display remaining links */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
