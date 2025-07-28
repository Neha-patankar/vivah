import React from 'react';
import { Shield, Lock, Eye, Users, Phone, Mail, Globe, AlertCircle, Heart, Star } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      id: 'collection',
      title: 'Information Collection and Use',
      icon: Users,
      content: `For a better experience while using our Service, we may require you to provide us with certain personally identifiable information, including but not limited to your name, address, location, pictures, and other matrimonial profile details. The information that we request will be retained by us and used as described in this privacy policy. The app does use third party services that may collect information used to identify you.`
    },
    {
      id: 'logdata',
      title: 'Log Data',
      icon: Eye,
      content: `We want to inform you that whenever you use our Service, in case of an error in the app we collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device's Internet Protocol ("IP") address, device name, operating system version, configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.`
    },
    {
      id: 'cookies',
      title: 'Cookies',
      icon: Globe,
      content: `Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your device's internal memory. This Service does not use these "cookies" explicitly. However, the app may use third party code and libraries that use "cookies" to collect information and to improve their services. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.`
    },
    {
      id: 'providers',
      title: 'Service Providers',
      icon: Users,
      content: `We may employ third-party companies and individuals due to the following reasons: To facilitate our Service, To provide the Service on our behalf, To perform Service-related services, or To assist us in analyzing how our Service is used. We want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.`
    },
    {
      id: 'security',
      title: 'Security',
      icon: Lock,
      content: `We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.`
    },
    {
      id: 'links',
      title: 'Links to Other Sites',
      icon: Globe,
      content: `This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.`
    },
    {
      id: 'children',
      title: "Children's Privacy",
      icon: AlertCircle,
      content: `This Service does not address anyone under the age of 18. We do not knowingly collect personal identifiable information from children under 18. In the case we discover that a child under 18 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to take necessary actions.`
    },
    {
      id: 'changes',
      title: 'Changes to This Privacy Policy',
      icon: AlertCircle,
      content: `We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#800020] via-[#9d1b3e] to-[#4b0f1f] text-white">
        <div className="max-w-8xl  px-0 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-lg opacity-30"></div>
                <Shield className="relative w-16 h-16 text-yellow-300" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-xl text-rose-100 max-w-3xl mx-auto leading-relaxed">
              Vivah Mahurat - आपकी गोपनीयता हमारी प्राथमिकता है
            </p>
            <div className="flex justify-center space-x-2 mt-4">
              <Heart className="w-5 h-5 text-pink-300" />
              <Star className="w-5 h-5 text-yellow-300" />
              <Heart className="w-5 h-5 text-pink-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-rose-100">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About Our Service</h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p className="text-center text-lg mb-6">
              Aanshi Solutions built the <span className="font-semibold text-rose-600">Vivah Mahurat</span> platform. 
              This SERVICE is provided by Aanshi Solutions and is intended for use as is.
            </p>
            <p>
              This page is used to inform website visitors regarding our policies with the collection, use, and 
              disclosure of Personal Information if anyone decided to use our Service. If you choose to use our Service, 
              then you agree to the collection and use of information in relation with this policy.
            </p>
            <p>
              The Personal Information that we collect is used for providing and improving the Service. We will not use 
              or share your information with anyone except as described in this Privacy Policy.
            </p>
          </div>
        </div>

        {/* Policy Sections */}
        <div className="grid gap-8">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <div 
                key={section.id}
                className="bg-white rounded-2xl shadow-lg border border-rose-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{section.title}</h3>
                      <div className="w-16 h-1 bg-yellow-300 rounded-full mt-2"></div>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 leading-relaxed text-lg">{section.content}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-br from-[#800020] to-[#4b0f1f] rounded-2xl shadow-2xl text-white overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
                <Phone className="w-8 h-8 text-yellow-300" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Contact Us</h3>
              <p className="text-rose-100">
                If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                <div className="flex items-center space-x-3 mb-2">
                  <Mail className="w-5 h-5 text-yellow-300" />
                  <span className="font-semibold">Email</span>
                </div>
                <a 
                  href="mailto:info@aanshisolutions.com" 
                  className="text-rose-200 hover:text-yellow-300 transition-colors"
                >
                  info@aanshisolutions.com
                </a>
              </div>
              
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                <div className="flex items-center space-x-3 mb-2">
                  <Phone className="w-5 h-5 text-yellow-300" />
                  <span className="font-semibold">Phone</span>
                </div>
                <div className="space-y-1">
                  <a 
                    href="tel:+919827072993" 
                    className="block text-rose-200 hover:text-yellow-300 transition-colors"
                  >
                    +91-9827072993
                  </a>
                  <a 
                    href="tel:+919755322022" 
                    className="block text-rose-200 hover:text-yellow-300 transition-colors"
                  >
                    +91-9755322022
                  </a>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                <div className="flex items-center space-x-3 mb-2">
                  <Globe className="w-5 h-5 text-yellow-300" />
                  <span className="font-semibold">Website</span>
                </div>
                <a 
                  href="https://www.aanshisolutions.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-rose-200 hover:text-yellow-300 transition-colors"
                >
                  www.aanshisolutions.com
                </a>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
              <p className="text-sm text-rose-100 leading-relaxed">
                <strong>Address:</strong> 205, Prakash Tower, Y.N. Road, Indore (M.P) – 452001
              </p>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        {/* <div className="mt-12 text-center">
          <p className="text-gray-600 bg-white rounded-full px-6 py-3 inline-block shadow-md border border-rose-100">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default PrivacyPolicy;