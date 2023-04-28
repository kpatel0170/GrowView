import data from './communityData.json';

function CompanyList() {
  return (
    <>
      <div className="mx-auto px-6 py-6 bg-gradient-to-br from-purple-500 via-indigo-600 to-blue-500">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-5xl font-bold mb-20 text-center text-gray-900">Communities</h1>
          {['business', 'startup incubators', 'tech community', 'communities'].map((category) => (
            <div key={category} className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-indigo-600">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {Object.entries(data[category][0]).map(([key, value]) => (
                  <li key={key} className="p-8 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out overflow-hidden">
                    <div className="flex flex-col sm:flex-col items-center h-full justify-center">
                      {value.logo && (
                        <div className="w-16 h-16 mb-4 sm:mr-4 sm:mb-0 flex-shrink-0">
                          <img
                            src={value.logo}
                            alt={key}
                            className="object-contain h-full w-full rounded-lg shadow-md"
                          />
                        </div>
                      )}
                      <div className="flex flex-col">
                        <h3 className="text-lg font-bold mb-2 text-gray-900 text-center sm:text-left">{key}</h3>
                        {value.description && <p className="text-sm mb-2 text-gray-700 text-center sm:text-left">{value.description}</p>}
                        {value.url && (
                          <p className="text-blue-600 hover:underline text-center sm:text-left">
                            <a href={value.url} target="_blank" rel="noopener noreferrer">{value.url}</a>
                          </p>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CompanyList;
