const ServicesPage = () => (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in worship as we gather to honor God, learn from His Word, 
            and fellowship with one another.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sunday Services</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-semibold text-gray-900">First Service</h3>
                  <p className="text-gray-600">Traditional worship with hymns and choir</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-red-600">9:00 AM</p>
                  <p className="text-sm text-gray-600">90 minutes</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-semibold text-gray-900">Second Service</h3>
                  <p className="text-gray-600">Contemporary worship with praise team</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-red-600">11:00 AM</p>
                  <p className="text-sm text-gray-600">90 minutes</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-600">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Weekday Services</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-semibold text-gray-900">Midweek Service</h3>
                  <p className="text-gray-600">Bible study and prayer meeting</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-red-600">Wed 7:00 PM</p>
                  <p className="text-sm text-gray-600">60 minutes</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-semibold text-gray-900">Prayer Night</h3>
                  <p className="text-gray-600">Intercession and worship</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-red-600">Fri 6:00 PM</p>
                  <p className="text-sm text-gray-600">75 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Special Services */}
        <div className="bg-red-50 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Special Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Holy Communion</h3>
              <p className="text-gray-600 text-sm mb-3">
                We celebrate communion every first Sunday of the month during both services.
              </p>
              <p className="text-red-600 font-medium">First Sunday Monthly</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Baptism Service</h3>
              <p className="text-gray-600 text-sm mb-3">
                Baptisms are held quarterly for new believers making their public declaration.
              </p>
              <p className="text-red-600 font-medium">Quarterly</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Baby Dedication</h3>
              <p className="text-gray-600 text-sm mb-3">
                Parents can dedicate their children to God during special dedication services.
              </p>
              <p className="text-red-600 font-medium">On Request</p>
            </div>
          </div>
        </div>

        {/* What to Expect */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What to Expect</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Welcoming Environment</h3>
                <p className="text-gray-600">
                  Our friendly ushers will greet you at the door and help you find a seat. 
                  Don't worry about what to wear - come as you are!
                </p>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Children's Program</h3>
                <p className="text-gray-600">
                  We have age-appropriate children's programs during both Sunday services 
                  with trained teachers and engaging activities.
                </p>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Practical Teaching</h3>
                <p className="text-gray-600">
                  Our messages are biblically based and practically relevant, helping you 
                  apply God's Word to everyday life.
                </p>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Connect Opportunities</h3>
                <p className="text-gray-600">
                  After service, enjoy refreshments and connect with others in our 
                  fellowship hall. Everyone is welcome!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
