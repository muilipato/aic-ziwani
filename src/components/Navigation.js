

const Navigation = () => (
    <nav className="bg-white shadow-lg border-b-4 border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo placeholder */}
          <div className="flex-shrink-0 flex items-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">AIC</span>
            </div>
            <div className="ml-3">
              <h1 className="text-2xl font-bold text-gray-900">AIC Ziwani</h1>
              <p className="text-sm text-gray-600">African Inland Church</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {['Home', 'About', 'Services', 'Ministries', 'Gallery', 'Blog', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => setCurrentPage(item.toLowerCase())}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === item.toLowerCase()
                      ? 'bg-red-600 text-white'
                      : 'text-gray-700 hover:bg-red-50 hover:text-red-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-red-600"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              {['Home', 'About', 'Services', 'Ministries', 'Gallery', 'Blog', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setCurrentPage(item.toLowerCase());
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    currentPage === item.toLowerCase()
                      ? 'bg-red-600 text-white'
                      : 'text-gray-700 hover:bg-red-50 hover:text-red-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );