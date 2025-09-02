

const AboutPage = () => (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About AIC Ziwani</h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a community of believers committed to knowing Christ, growing in faith, 
            and serving others with the love of Jesus.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-red-600">
            <div className="flex items-center mb-6">
              <Heart className="w-8 h-8 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To make disciples of Jesus Christ who worship passionately, live authentically, 
              and serve sacrificially. We are committed to spreading the Gospel through word 
              and deed, building strong families, and transforming our community through the 
              power of God's love.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-red-600">
            <div className="flex items-center mb-6">
              <BookOpen className="w-8 h-8 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To be a thriving church community that reflects the love of Christ, where 
              people experience authentic transformation, discover their God-given purpose, 
              and are equipped to make a positive impact in Ziwani and beyond.
            </p>
          </div>
        </div>

        {/* History Section */}
        <div className="bg-gray-50 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our History</h2>
          <div className="prose prose-lg max-w-4xl mx-auto text-gray-600">
            <p className="mb-4">
              African Inland Church Ziwani was established in 1995 as part of the broader 
              African Inland Church movement in Kenya. What started as a small gathering 
              of families in Ziwani Estate has grown into a vibrant community of believers 
              from diverse backgrounds.
            </p>
            <p className="mb-4">
              Over the years, we have been blessed to witness countless lives transformed 
              through the Gospel, families restored, and young people discovering their 
              calling in Christ. Our church has been actively involved in community 
              development, education support, and poverty alleviation programs.
            </p>
            <p>
              Today, we continue to build on this foundation, reaching out to new families 
              moving into Ziwani and surrounding areas, while maintaining our commitment 
              to biblical teaching, authentic worship, and practical Christianity.
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Biblical Truth</h3>
              <p className="text-gray-600 text-sm">
                We believe in the authority and sufficiency of God's Word for all matters of faith and life.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Authentic Love</h3>
              <p className="text-gray-600 text-sm">
                We strive to love God wholeheartedly and love our neighbors as ourselves.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600 text-sm">
                We value genuine relationships and believe in the power of doing life together.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Service</h3>
              <p className="text-gray-600 text-sm">
                We are called to serve others as Christ served us, both within and beyond our church.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
